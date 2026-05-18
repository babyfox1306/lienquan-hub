import json
import os
import re
import sys
import time
import requests
from bs4 import BeautifulSoup

# Configure stdout to use UTF-8 to prevent console encode errors
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass 

# Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
HEROES_PATH = os.path.join(BASE_DIR, "..", "public", "heroes.json")

# Wiki mapping VN ID -> English Wiki Name
WIKI_MAPPING = {
  "nakroth": "Nakroth",
  "murad": "Murad", 
  "zata": "Zata",
  "violet": "Violet",
  "laville": "Laville",
  "yena": "Yena",
  "marja": "Marja",
  "hayate": "Hayate",
  "florentino": "Florentino",
  "riktor": "Riktor",
  "thane": "Thane",
  "baldum": "Baldum",
  "arum": "Arum",
  "xeniel": "Xeniel",
  "grakk": "Grakk",
  "wukong": "Wukong",
  "toro": "Toro",
  "gildur": "Gildur",
  "alice": "Alice",
  "jinna": "Jinnar",
  "volkath": "Volkath",
  "maloch": "Maloch",
  "krixi": "Krixi",
  "tulen": "Tulen",
  "ignis": "Ignis",
  "lauriel": "Lauriel",
  "liliana": "Liliana",
  "dirak": "Dirak",
  "elsu": "Elsu",
  "valhein": "Valhein",
  "lu-bu": "Lu Bu",
  "lubu": "Lu Bu",  # Map both forms of lubu
  "veres": "Veres",
  "omen": "Omen",
  "ilumia": "Ilumia",
  "zip": "Zip",
  "ormarr": "Ormarr",
  "arduin": "Arduin",
  "chaugnar": "Chaugnar",
  "omega": "Omega",
  "taara": "Taara",
  "qi": "Qi",
  "mina": "Mina",
  "zill": "Zill",
  "natalya": "Natalya",
  "mganga": "Mganga",
  "zephys": "Zephys",
  "arthur": "Arthur",
  "keera": "Keera",
  "tel-annas": "Tel'Annas",
  "raz": "Raz"      # Raz included for completeness
}

def clean_image_url(url):
    if not url:
        return None
    if url.startswith("//"):
        url = "https:" + url
    
    # If the URL is a transparent spacer/placeholder GIF, ignore it
    if "data:image" in url or "placeholder" in url:
        return None
        
    # Replace scaling parameter with standard 500px width for high quality
    if "scale-to-width-down/" in url:
        url = re.sub(r'scale-to-width-down/\d+', 'scale-to-width-down/500', url)
        
    return url

def fetch_hero_image_url(hero_name):
    # Formulate URL (replace spaces with underscores)
    hero_name_url = hero_name.replace(" ", "_")
    url = f"https://aov.fandom.com/wiki/{hero_name_url}"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive"
    }
    
    print(f"  [HTML] Fetching HTML from {url}...")
    try:
        response = requests.get(url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "html.parser")
            
            # Step 1: Parse HTML finding <img> with class "pi-image-thumbnail"
            img_tag = soup.find("img", class_="pi-image-thumbnail")
            if img_tag:
                img_url = img_tag.get("data-src") or img_tag.get("src")
                cleaned = clean_image_url(img_url)
                if cleaned:
                    print(f"    [Found] pi-image-thumbnail: {cleaned[:80]}...")
                    return cleaned
            
            # Step 2: Parse HTML finding og:image meta tag
            og_tag = soup.find("meta", property="og:image")
            if og_tag:
                og_url = og_tag.get("content")
                cleaned = clean_image_url(og_url)
                if cleaned:
                    print(f"    [Found] og:image: {cleaned[:80]}...")
                    return cleaned
                    
            print("    [Warning] No image found in standard HTML tags.")
            
        else:
            print(f"    [Blocked/Error] HTML page returned status code: {response.status_code}")
            
    except Exception as e:
        print(f"    [Exception] Failed to fetch HTML directly: {str(e)}")
        
    # FALLBACK: MediaWiki Action API (whitelisted, bypassing Cloudflare WAF completely)
    print("  [API] Falling back to MediaWiki API...")
    api_url = "https://arenaofvalor.fandom.com/api.php"
    api_headers = {
        "User-Agent": "LienQuanHubBot/1.0 (https://www.lienquanhub.xyz) requests/2.32.5"
    }
    
    # Method A: action=query & prop=pageimages
    try:
        params = {
            "action": "query",
            "titles": hero_name,
            "prop": "pageimages",
            "format": "json",
            "pithumbsize": 500
        }
        res = requests.get(api_url, params=params, headers=api_headers, timeout=10)
        if res.status_code == 200:
            data = res.json()
            pages = data.get("query", {}).get("pages", {})
            for page_id, page_data in pages.items():
                if page_id != "-1" and "thumbnail" in page_data:
                    source_url = page_data["thumbnail"].get("source")
                    cleaned = clean_image_url(source_url)
                    if cleaned:
                        print(f"    [API SUCCESS] Pageimages: {cleaned[:80]}...")
                        return cleaned
    except Exception as e:
        print(f"    [API Warning] Method A (pageimages) failed: {str(e)}")
        
    # Method B: action=parse (get wikitext parsed HTML)
    try:
        params = {
            "action": "parse",
            "page": hero_name,
            "format": "json",
            "prop": "text"
        }
        res = requests.get(api_url, params=params, headers=api_headers, timeout=10)
        if res.status_code == 200:
            html_content = res.json().get("parse", {}).get("text", {}).get("*", "")
            if html_content:
                soup = BeautifulSoup(html_content, "html.parser")
                # Search for the first valid mw-file-element image
                for img in soup.find_all("img", class_="mw-file-element"):
                    img_url = img.get("data-src") or img.get("src")
                    cleaned = clean_image_url(img_url)
                    if cleaned:
                        print(f"    [API SUCCESS] Parsed mw-file-element: {cleaned[:80]}...")
                        return cleaned
    except Exception as e:
        print(f"    [API Error] Method B (parse HTML) failed: {str(e)}")
        
    return None

def main():
    print("=== STARTING HERO WIKI IMAGE CRAWLER (HTML & API WORKFLOW) ===")
    
    if not os.path.exists(HEROES_PATH):
        print(f"Error: {HEROES_PATH} does not exist.")
        return
        
    with open(HEROES_PATH, "r", encoding="utf-8") as f:
        heroes_data = json.load(f)
        
    heroes = heroes_data.get("heroes", [])
    total_heroes = len(heroes)
    updated_count = 0
    fallback_yt_count = 0
    placeholder_count = 0
    
    for idx, hero in enumerate(heroes, 1):
        hero_id = hero.get("id")
        hero_name = hero.get("name")
        wiki_name = WIKI_MAPPING.get(hero_id)
        
        if not wiki_name:
            print(f"[{idx}/{total_heroes}] No wiki mapping for {hero_name} ({hero_id})")
            continue
            
        print(f"[{idx}/{total_heroes}] Fetching wiki image for {hero_name} ({wiki_name})...")
        wiki_image_url = fetch_hero_image_url(wiki_name)
        
        if wiki_image_url:
            hero["thumbnail"] = wiki_image_url
            print(f"  [SUCCESS] Found Wiki Image: {wiki_image_url[:70]}...")
            updated_count += 1
        else:
            # Fallback to YouTube thumbnail if exists, else keep None
            related_videos = hero.get("related_videos", [])
            if related_videos and len(related_videos) > 0:
                hero["thumbnail"] = f"https://img.youtube.com/vi/{related_videos[0]}/maxresdefault.jpg"
                print(f"  [FALLBACK] No Wiki Image. Falling back to YouTube thumbnail: {hero['thumbnail']}")
                fallback_yt_count += 1
            else:
                hero["thumbnail"] = None
                print("  [NULL] No Wiki Image and No YouTube Video. Set thumbnail to NULL (Gradient Fallback)")
                placeholder_count += 1
                
        # Add a polite delay of 0.5s between requests
        time.sleep(0.5)
                
    # Update timestamp
    heroes_data["updated_at"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
                
    # Save back
    with open(HEROES_PATH, "w", encoding="utf-8") as f:
        json.dump(heroes_data, f, ensure_ascii=False, indent=2)
        
    print("\n=== CRAWLER STATS & SUMMARY ===")
    print(f"Total Heroes processed: {total_heroes}")
    print(f"Wiki Images fetched: {updated_count} / {total_heroes} ({updated_count/total_heroes*100:.1f}%)")
    print(f"Fallback YouTube thumbnails: {fallback_yt_count} / {total_heroes}")
    print(f"Placeholder/Gradient fallbacks: {placeholder_count} / {total_heroes}")
    print("=== HERO WIKI IMAGE CRAWLER COMPLETED! ===")

if __name__ == "__main__":
    main()
