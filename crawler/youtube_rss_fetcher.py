import feedparser, json, re, os
from urllib.parse import urlparse, parse_qs

ROOT = os.path.join(os.path.dirname(__file__), '..')
FEEDS_PATH = os.path.join(ROOT, 'public', 'feeds.json')
OUT_PATH = os.path.join(ROOT, 'public', 'videos.json')


def video_id_from_link(link):
    if 'watch?v=' in link:
        return parse_qs(urlparse(link).query).get('v', [None])[0]
    m = re.search(r'youtube\.com/embed/([^/?]+)', link)
    if m:
        return m.group(1)
    m = re.search(r'youtu\.be/([^/?]+)', link)
    if m:
        return m.group(1)
    return None


def fetch():
    # Read feeds.json with utf-8-sig to handle BOM if present
    with open(FEEDS_PATH, 'r', encoding='utf-8-sig') as f:
        feeds = json.load(f)

    videos = feeds.get('manual_videos', []).copy()

    for ch in feeds.get('channels', []):
        if ch['type'] == 'channel':
            rss = f"https://www.youtube.com/feeds/videos.xml?channel_id={ch['id']}"
        elif ch['type'] == 'playlist':
            rss = f"https://www.youtube.com/feeds/videos.xml?playlist_id={ch['id']}"
        else:
            continue

        print('Fetching', rss)
        d = feedparser.parse(rss)
        for entry in d.entries[:30]:
            link = entry.link
            vid = video_id_from_link(link)
            if not vid:
                continue
            title = entry.title
            # Try to fix mojibake (UTF-8 read as Latin-1 then re-encoded)
            try:
                if any(bad in title for bad in ('Ã', 'â', '€', '™', 'œ')):
                    title = title.encode('latin1', errors='ignore').decode('utf-8', errors='ignore')
            except Exception:
                pass
            item = {"videoId": vid, "title": title, "source": "youtube"}
            if not any(v['videoId'] == vid for v in videos):
                videos.append(item)

    with open(OUT_PATH, 'w', encoding='utf8', newline='') as f:
        json.dump({"videos": videos}, f, ensure_ascii=False, indent=2)
    print('Saved', OUT_PATH)


if __name__ == '__main__':
    fetch()


