/**
 * Fetch Shopee product og:image (Facebook crawler UA) and save to public/affiliate/
 * Run: node scripts/fetch-shopee-images.js
 */
const fs = require('fs');
const path = require('path');

const products = [
  { id: 'gloves', url: 'https://s.shopee.vn/AKXdascA3u' },
  { id: 'fan', url: 'https://s.shopee.vn/AUr3nBbWix' },
  { id: 'headphone', url: 'https://s.shopee.vn/9Kf6P2fy5k' },
  { id: 'powerbank', url: 'https://s.shopee.vn/9UyWbLfKkn' },
  { id: 'holder', url: 'https://s.shopee.vn/9fHwneehPq' },
];

const OUT_DIR = path.join(__dirname, '..', 'public', 'affiliate');
const UA =
  'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)';

async function getOgImage(shortUrl) {
  const r = await fetch(shortUrl, {
    redirect: 'follow',
    headers: { 'User-Agent': UA, 'Accept-Language': 'vi-VN,vi;q=0.9' },
  });
  const html = await r.text();
  const m =
    html.match(/property="og:image"\s+content="([^"]+)"/i) ||
    html.match(/content="([^"]+)"\s+property="og:image"/i);
  return m ? m[1] : null;
}

async function downloadImage(imageUrl, destPath) {
  const r = await fetch(imageUrl, {
    headers: {
      'User-Agent': UA,
      Referer: 'https://shopee.vn/',
    },
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(destPath, buf);
  return buf.length;
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = [];

  for (const p of products) {
    try {
      const imageUrl = await getOgImage(p.url);
      if (!imageUrl || imageUrl.includes('favicon')) {
        console.error(p.id, 'no image');
        continue;
      }
      const ext = imageUrl.includes('.png') ? 'png' : 'jpg';
      const filename = `${p.id}.${ext}`;
      const dest = path.join(OUT_DIR, filename);
      const size = await downloadImage(imageUrl, dest);
      const publicPath = `/affiliate/${filename}`;
      manifest.push({ id: p.id, image: publicPath, imageUrl, bytes: size });
      console.log(p.id, 'OK', publicPath, size, 'bytes');
    } catch (e) {
      console.error(p.id, e.message);
    }
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
})();
