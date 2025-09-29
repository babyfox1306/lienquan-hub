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
        <section className="max-w-6xl mx-auto mb-8">
          <div className="hero bg-base-100 rounded-xl shadow">
            <div className="hero-content text-center">
              <div>
                <h1 className="text-3xl font-bold">Liên Quân Hub</h1>
                <p className="py-2 text-base-content/70">Tổng hợp highlight, guide, news — cập nhật tự động từ YouTube/RSS</p>
                <div className="join w-full max-w-xl">
                  <input className="input input-bordered join-item w-full" placeholder="Tìm video..." onChange={() => {}} />
                  <button className="btn btn-primary join-item">Search</button>
                </div>
                <div className="tabs tabs-boxed mt-4 inline-grid grid-flow-col auto-cols-max">
                  <a className="tab tab-active">All</a>
                  <a className="tab">Highlight</a>
                  <a className="tab">Guide</a>
                  <a className="tab">News</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((v, idx) => (
            <VideoCard key={v.videoId} videoId={v.videoId} title={v.title} priority={idx === 0} />
          ))}
        </section>
        <footer className="mt-10 py-6 text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} Liên Quân Hub — nguồn: YouTube
        </footer>
      </main>
    </div>
  );
}


