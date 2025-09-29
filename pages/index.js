import fs from 'fs';
import path from 'path';
import NavBar from '../components/NavBar';
import VideoCard from '../components/VideoCard';

export async function getStaticProps() {
  const publicDir = path.join(process.cwd(), 'public');
  const videosJsonPath = path.join(publicDir, 'videos.json');
  const feedsPath = path.join(publicDir, 'feeds.json');

  let videos = [];
  if (fs.existsSync(videosJsonPath)) {
    const raw = fs.readFileSync(videosJsonPath, 'utf8');
    const sanitized = raw.replace(/^\uFEFF/, '');
    let j = {};
    try {
      j = JSON.parse(sanitized);
    } catch (_) {
      j = { videos: [] };
    }
    videos = j.videos || [];
  } else {
    const raw = fs.readFileSync(feedsPath, 'utf8');
    const feeds = JSON.parse(raw);
    videos = feeds.manual_videos || [];
  }

  return { props: { videos }, revalidate: 60 };
}

export default function Home({ videos }) {
  return (
    <div className="min-h-screen bg-base-200">
      <NavBar />
      <main className="p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <VideoCard key={v.videoId} videoId={v.videoId} title={v.title} />
          ))}
        </section>
      </main>
    </div>
  );
}


