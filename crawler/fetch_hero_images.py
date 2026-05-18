import json
import os
import re
import sys
import requests

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
  "jinna": "Jinna",
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
  "lubu": "Lu Bu",       # Fixed ID mapping from lubu -> Lu Bu
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
  "raz": "Raz"           # Fixed ID mapping from raz -> Raz
}

def fetch_hero_image_url(hero_name):
    # Formulate MediaWiki Action API URL (Bypasses Cloudflare block completely!)
    url = "https://arenaofvalor.fandom.com/api.php"
    params = {
        "action": "query",
        "titles": hero_name,
        "prop": "pageimages",
        "format": "json",
        "pithumbsize": 500
    }
    
    headers = {
        "User-Agent": "LienQuanHubBot/1.0 (https://www.lienquanhub.xyz; contact@lienquanhub.xyz) requests/2.31.0"
    }
    
    try:
        response = requests.get(url, params=params, headers=headers, timeout=10)
        if response.status_code != 200:
            print(f"  [Error] API returned status {response.status_code} for {hero_name}")
            return None
            
        data = response.json()
        pages = data.get("query", {}).get("pages", {})
        
        for page_id, page_data in pages.items():
            if page_id == "-1":
                print(f"  [Warning] Page '{hero_name}' not found on Wiki.")
                return None
            
            thumbnail = page_data.get("thumbnail", {})
            source_url = thumbnail.get("source")
            if source_url:
                return source_url
                
        print(f"  [Warning] No thumbnail found in API response for {hero_name}")
        return None
        
    except Exception as e:
        print(f"  [Exception] Failed to fetch image via API for {hero_name}: {str(e)}")
        return None

def main():
    print("=== STARTING HERO WIKI IMAGE CRAWLER (API BASED) ===")
    
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
