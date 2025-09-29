import json
import os
import re
import sys
import urllib.parse
import urllib.request
from typing import List, Dict


ROOT = os.path.join(os.path.dirname(__file__), '..')
FEEDS_PATH = os.path.join(ROOT, 'public', 'feeds.json')


def fetch_url(url: str, headers: Dict[str, str] | None = None) -> str:
    req = urllib.request.Request(url, headers=headers or {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7'
    })
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read().decode('utf-8', errors='ignore')


def search_lemnoslife(query: str) -> List[Dict[str, str]]:
    # Unofficial public endpoint without API key
    params = urllib.parse.urlencode({
        'q': query,
        'type': 'channel',
        'regionCode': 'VN',
        'maxResults': 50
    })
    url = f'https://yt.lemnoslife.com/noKey/search?{params}'
    try:
        text = fetch_url(url)
        data = json.loads(text)
    except Exception:
        return []
    items = data.get('items', [])
    results: List[Dict[str, str]] = []
    for it in items:
        idobj = it.get('id', {})
        channel_id = idobj.get('channelId') or idobj.get('channel', {}).get('channelId')
        snippet = it.get('snippet', {})
        title = snippet.get('channelTitle') or snippet.get('title')
        if channel_id and title:
            results.append({'id': channel_id, 'name': title})
    return results


def search_piped(query: str) -> List[Dict[str, str]]:
    # Try multiple Piped instances
    instances = [
        'https://piped.video',
        'https://pipedapi.kavin.rocks',
        'https://piped.hostux.net',
        'https://piped.videoapi.dev'
    ]
    params = urllib.parse.urlencode({'q': query})
    for base in instances:
        url = f'{base}/api/v1/search?{params}'
        try:
            text = fetch_url(url)
            data = json.loads(text)
        except Exception:
            continue
        results: List[Dict[str, str]] = []
        for it in data:
            if (it.get('type') or it.get('@type')) not in ('channel', 'channelRenderer'):
                continue
            channel_id = it.get('channelId') or it.get('uploaderId') or None
            name = it.get('name') or it.get('author') or ''
            if not channel_id:
                # Try to parse from URL
                urlp = it.get('url') or it.get('uploaderUrl') or ''
                m = re.search(r'/channel/(UC[\w-]+)', urlp)
                if m:
                    channel_id = m.group(1)
            if channel_id and name:
                results.append({'id': channel_id, 'name': name})
        if results:
            return results
    return []


def search_invidious(query: str) -> List[Dict[str, str]]:
    instances = [
        'https://yewtu.be',
        'https://vid.puffyan.us',
        'https://invidious.fdn.fr'
    ]
    params = urllib.parse.urlencode({'q': query, 'type': 'channel'})
    for base in instances:
        url = f'{base}/api/v1/search?{params}'
        try:
            text = fetch_url(url)
            data = json.loads(text)
        except Exception:
            continue
        results: List[Dict[str, str]] = []
        for it in data:
            # Invidious returns type: "channel"
            if it.get('type') != 'channel':
                continue
            channel_id = it.get('authorId') or it.get('channelId')
            name = it.get('author') or it.get('authorUrl') or ''
            if channel_id and name:
                results.append({'id': channel_id, 'name': name})
        if results:
            return results
    return []


def search_channels(keywords: List[str], limit: int = 20) -> List[Dict[str, str]]:
    api_key = os.environ.get('YT_API_KEY')
    if api_key:
        found = search_channels_via_api(keywords, limit, api_key)
        if found:
            return found
    channels: Dict[str, Dict[str, str]] = {}
    for kw in keywords:
        # Try Lemnoslife first
        for res in (search_lemnoslife(kw) or []):
            cid = res['id']
            if cid not in channels:
                channels[cid] = {'name': res['name'], 'type': 'channel', 'id': cid}
            if len(channels) >= limit:
                break
        if len(channels) >= limit:
            break
        # Fallback to Piped
        for res in (search_piped(kw) or []):
            cid = res['id']
            if cid not in channels:
                channels[cid] = {'name': res['name'], 'type': 'channel', 'id': cid}
            if len(channels) >= limit:
                break
        if len(channels) >= limit:
            break
        # Fallback to Invidious
        for res in (search_invidious(kw) or []):
            cid = res['id']
            if cid not in channels:
                channels[cid] = {'name': res['name'], 'type': 'channel', 'id': cid}
            if len(channels) >= limit:
                break
        if len(channels) >= limit:
            break
    return list(channels.values())[:limit]


# Optional: direct HTML search fallback using ytInitialData (robust brace matching)
def _extract_json_after_marker(html: str, marker: str) -> dict:
    idx = html.find(marker)
    if idx == -1:
        raise RuntimeError('marker not found')
    # Find first '{' after marker
    start = html.find('{', idx)
    if start == -1:
        raise RuntimeError('json start not found')
    depth = 0
    for i in range(start, len(html)):
        ch = html[i]
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                raw = html[start:i+1]
                return json.loads(raw)
    raise RuntimeError('json end not found')


def search_channels_html(keywords: List[str], limit: int = 20) -> List[Dict[str, str]]:
    channels: Dict[str, Dict[str, str]] = {}
    for kw in keywords:
        q = urllib.parse.urlencode({'search_query': kw})
        # Add region and language hints
        url = f"https://www.youtube.com/results?{q}&sp=EgIQAg%253D%253D&hl=vi&gl=VN&pct=1"
        try:
            html = fetch_url(url)
            data = _extract_json_after_marker(html, 'ytInitialData')
        except Exception:
            continue
        # Traverse similar to earlier
        try:
            sections = data['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']['contents']
        except Exception:
            continue
        for section in sections:
            items = section.get('itemSectionRenderer', {}).get('contents', [])
            for it in items:
                ch = it.get('channelRenderer')
                if not ch:
                    continue
                channel_id = ch.get('channelId') or (ch.get('navigationEndpoint', {}).get('browseEndpoint', {}).get('browseId'))
                title = (ch.get('title', {}).get('simpleText')) or ''
                if not title:
                    truns = ch.get('title', {}).get('runs', [])
                    if truns:
                        title = truns[0].get('text', '')
                if channel_id and channel_id not in channels:
                    channels[channel_id] = {'name': title or channel_id, 'type': 'channel', 'id': channel_id}
                if len(channels) >= limit:
                    break
            if len(channels) >= limit:
                break
        if len(channels) >= limit:
            break
    return list(channels.values())[:limit]


def search_channels_via_api(keywords: List[str], limit: int, api_key: str) -> List[Dict[str, str]]:
    # 1) Collect candidate channel IDs via search.list
    candidate_ids: Dict[str, None] = {}
    for kw in keywords:
        params = urllib.parse.urlencode({
            'part': 'snippet',
            'type': 'channel',
            'maxResults': 50,
            'regionCode': 'VN',
            'q': kw,
            'key': api_key
        })
        url = f'https://www.googleapis.com/youtube/v3/search?{params}'
        try:
            data = json.loads(fetch_url(url))
        except Exception:
            continue
        for item in data.get('items', []):
            cid = (item.get('id') or {}).get('channelId')
            if cid:
                candidate_ids[cid] = None
    if not candidate_ids:
        return []
    # 2) Fetch statistics for candidates and sort by subscriberCount
    ids = list(candidate_ids.keys())[:50]
    params2 = urllib.parse.urlencode({
        'part': 'snippet,statistics',
        'id': ','.join(ids),
        'key': api_key
    })
    url2 = f'https://www.googleapis.com/youtube/v3/channels?{params2}'
    try:
        data2 = json.loads(fetch_url(url2))
    except Exception:
        return []
    channels: List[Dict[str, str]] = []
    for ch in data2.get('items', []):
        cid = ch.get('id')
        title = ((ch.get('snippet') or {}).get('title')) or cid
        subs = int((ch.get('statistics') or {}).get('subscriberCount', '0'))
        channels.append({'id': cid, 'name': title, 'subs': subs})
    channels.sort(key=lambda x: x.get('subs', 0), reverse=True)
    return [{'id': c['id'], 'name': c['name'], 'type': 'channel'} for c in channels[:limit]]


def update_feeds_json(found_channels: List[Dict[str, str]]):
    if os.path.exists(FEEDS_PATH):
        with open(FEEDS_PATH, 'r', encoding='utf-8-sig') as f:
            feeds = json.load(f)
    else:
        feeds = {"channels": [], "manual_videos": []}

    # Keep manual_videos, replace channels with discovered list
    feeds['channels'] = found_channels

    with open(FEEDS_PATH, 'w', encoding='utf-8') as f:
        json.dump(feeds, f, ensure_ascii=False, indent=2)
    print(f"Updated {FEEDS_PATH} with {len(found_channels)} channels")


def main():
    limit = 20
    if len(sys.argv) > 1:
        try:
            limit = int(sys.argv[1])
        except Exception:
            pass
    keywords = [
        'Liên Quân Mobile',
        'Arena of Valor',
        'AOV',
        'Liên Quân Highlight'
    ]
    chans = search_channels(keywords, limit=limit)
    if not chans:
        raise SystemExit('No channels found')
    update_feeds_json(chans)


if __name__ == '__main__':
    main()


