import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'missing url' });
  try {
    const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
    const r = await fetch(oembed, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) return res.status(r.status).json({ error: 'oembed failed' });
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
    res.json({ title: data.title, author: data.author_name, thumbnail: data.thumbnail_url, html: data.html });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}


