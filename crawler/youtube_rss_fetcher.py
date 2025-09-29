import feedparser, json, re, os, time
try:
    from ftfy import fix_text  # Robustly fixes mojibake
except Exception:
    fix_text = None
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
            # Normalize/fix potential mojibake from various mis-decodings
            try:
                if fix_text:
                    title = fix_text(title)
                else:
                    # Fallback heuristics
                    if any(bad in title for bad in ('Ã', 'â', '€', '™', 'œ', 'áº', 'á»', 'Â')):
                        try:
                            title = title.encode('latin1', errors='ignore').decode('utf-8', errors='ignore')
                        except Exception:
                            pass
            except Exception:
                pass
            # Try to extract publish date in ISO8601
            published_iso = None
            try:
                if getattr(entry, 'published_parsed', None):
                    published_iso = time.strftime('%Y-%m-%dT%H:%M:%SZ', entry.published_parsed)
                elif getattr(entry, 'updated_parsed', None):
                    published_iso = time.strftime('%Y-%m-%dT%H:%M:%SZ', entry.updated_parsed)
            except Exception:
                published_iso = None
            item = {"videoId": vid, "title": title, "source": "youtube", "publishedAt": published_iso}
            if not any(v['videoId'] == vid for v in videos):
                videos.append(item)

    with open(OUT_PATH, 'w', encoding='utf8', newline='') as f:
        json.dump({"videos": videos}, f, ensure_ascii=False, indent=2)
    print('Saved', OUT_PATH)


if __name__ == '__main__':
    fetch()


