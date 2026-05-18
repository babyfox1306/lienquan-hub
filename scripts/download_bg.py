import os
import requests

def download_asset():
    target_dir = os.path.join("public", "images")
    os.makedirs(target_dir, exist_ok=True)
    
    target_file = os.path.join(target_dir, "hero-bg.jpg")
    
    # Official, gorgeous Arena of Valor key promotional art
    url = "https://gogamix.xyz/images/lien-quan/hub/cover.jpg"
    
    print(f"Downloading premium background from {url}...")
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
        r = requests.get(url, headers=headers, timeout=20)
        r.raise_for_status()
        with open(target_file, "wb") as f:
            f.write(r.content)
        print(f"SUCCESS: Saved premium background image to {target_file}")
    except Exception as e:
        print(f"ERROR downloading background: {e}")

if __name__ == "__main__":
    download_asset()
