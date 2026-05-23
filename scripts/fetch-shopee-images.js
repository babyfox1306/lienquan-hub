/**
 * Fetch Shopee product og:image + price, save images to public/affiliate/
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

function formatVnd(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n) || n <= 0) return null;
  return `₫${Math.round(n).toLocaleString('vi-VN')}`;
}

function extractPrice(html) {
  const patterns = [
    /property="product:price:amount"\s+content="([^"]+)"/i,
    /content="([^"]+)"\s+property="product:price:amount"/i,
    /"price":\s*(\d+)/,
    /"price_min":\s*(\d+)/,
    /"price_before_discount":\s*(\d+)/,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m && m[1]) {
      const formatted = formatVnd(m[1]);
      if (formatted) return formatted;
    }
  }
  return null;
}

async function getOgData(shortUrl) {
  const r = await fetch(shortUrl, {
    redirect: 'follow',
    headers: { 'User-Agent': UA, 'Accept-Language': 'vi-VN,vi;q=0.9' },
  });
  const html = await r.text();
  const imageMatch =
    html.match(/property="og:image"\s+content="([^"]+)"/i) ||
    html.match(/content="([^"]+)"\s+property="og:image"/i);
  const titleMatch =
    html.match(/property="og:title"\s+content="([^"]+)"/i) ||
    html.match(/content="([^"]+)"\s+property="og:title"/i);
  return {
    imageUrl: imageMatch && !imageMatch[1].includes('favicon') ? imageMatch[1] : null,
    title: titleMatch ? titleMatch[1] : null,
    price: extractPrice(html),
    finalUrl: r.url,
  };
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
      const { imageUrl, price, title, finalUrl } = await getOgData(p.url);
      if (!imageUrl) {
        console.error(p.id, 'no image');
        continue;
      }
      const ext = imageUrl.includes('.png') ? 'png' : 'jpg';
      const filename = `${p.id}.${ext}`;
      const dest = path.join(OUT_DIR, filename);
      const size = await downloadImage(imageUrl, dest);
      const entry = {
        id: p.id,
        name: title || p.id,
        image: `/affiliate/${filename}`,
        imageUrl,
        price: price || null,
        url: p.url,
        productUrl: finalUrl,
        bytes: size,
      };
      manifest.push(entry);
      console.log(p.id, 'OK', entry.price || 'NO PRICE', entry.image);
    } catch (e) {
      console.error(p.id, e.message);
    }
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
})();
