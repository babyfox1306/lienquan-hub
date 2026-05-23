import fs from 'fs';
import path from 'path';

export function loadVideos() {
  const videosPath = path.join(process.cwd(), 'public', 'videos.json');
  if (!fs.existsSync(videosPath)) return [];
  try {
    const raw = fs.readFileSync(videosPath, 'utf8').replace(/^\uFEFF/, '');
    const data = JSON.parse(raw);
    const videos = data.videos || [];
    if (videos.length && videos[0]?.publishedAt) {
      return [...videos].sort((a, b) =>
        (b.publishedAt || '').localeCompare(a.publishedAt || '')
      );
    }
    return videos;
  } catch {
    return [];
  }
}
