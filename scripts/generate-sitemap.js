const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

function generate() {
  const site = process.env.SITE_URL || 'https://example.com';
  const videosPath = path.join(PUBLIC_DIR, 'videos.json');
  let urls = [`${site}/`];
  if (fs.existsSync(videosPath)) {
    const data = JSON.parse(fs.readFileSync(videosPath, 'utf8'));
    const videos = data.videos || [];
    for (const v of videos) {
      urls.push(`${site}/watch/${v.videoId}`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
  console.log('Generated public/sitemap.xml with', urls.length, 'urls');
}

generate();


