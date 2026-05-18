const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

function generate() {
  const site = process.env.SITE_URL || 'https://www.lienquanhub.xyz';
  
  // Base URLs
  let urls = [
    `${site}/`,
    `${site}/news`,
    `${site}/blog`,
    `${site}/about`,
    `${site}/contact`,
    `${site}/disclaimer`,
    `${site}/privacy`,
    `${site}/terms`
  ];

  // Blog posts from pages/blog
  const blogDir = path.join(ROOT, 'pages', 'blog');
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    for (const file of files) {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        const slug = file.replace(/\.(js|jsx|tsx|ts)$/, '');
        urls.push(`${site}/blog/${slug}`);
      }
    }
  }

  // Videos
  const videosPath = path.join(PUBLIC_DIR, 'videos.json');
  if (fs.existsSync(videosPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(videosPath, 'utf8'));
      const videos = data.videos || [];
      for (const v of videos) {
        if (v.videoId) {
          urls.push(`${site}/watch/${v.videoId}`);
        }
      }
    } catch (err) {
      console.error('Error reading videos.json for sitemap:', err);
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



