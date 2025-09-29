import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import LiteYoutube from '../../components/LiteYoutube';
import VideoCard from '../../components/VideoCard';

export async function getServerSideProps(ctx) {
  const { id } = ctx.params || {};
  // Load videos list once to determine latest and recommendations
  const publicDir = path.join(process.cwd(), 'public');
  const videosPath = path.join(publicDir, 'videos.json');
  let all = [];
  if (fs.existsSync(videosPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(videosPath, 'utf8'));
      all = data.videos || [];
    } catch (_) {}
  }
  // Sort newest first if publishedAt exists
  if (all.length && all[0]?.publishedAt) {
    all.sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
  }
  const latestId = all[0]?.videoId || null;
  // If no id provided or id not found, redirect to latest video when available
  if (!id || (all.length && !all.find(v => v.videoId === id))) {
    if (latestId) {
      return {
        redirect: { destination: `/watch/${latestId}`, permanent: false }
      };
    }
  }
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  let oembed = null;
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl)}&format=json`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (res.ok) oembed = await res.json();
  } catch (_) {}
  const title = oembed?.title || `Liên Quân — ${id}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: oembed?.description || "Video Liên Quân Mobile",
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    uploadDate: (all.find(v => v.videoId === id)?.publishedAt) || new Date().toISOString(),
    contentUrl: videoUrl,
    embedUrl: `https://www.youtube.com/embed/${id}`
  };
  // Build recommendations from the loaded list
  let recommended = [];
  if (all.length) {
    recommended = all
      .filter(v => v.videoId !== id)
      .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
      .slice(0, 12);
  }
  return { props: { id, title, schema, author: oembed?.author_name || 'YouTube', recommended } };
}

export default function Watch({ id, title, schema, author, recommended }) {
  return (
    <div className="min-h-screen bg-base-200 p-4">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Liên Quân Hub — tổng hợp highlight & guide" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Liên Quân Hub — tổng hợp highlight & guide" />
        <meta property="og:image" content={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} />
        <meta property="og:video" content={`https://www.youtube.com/watch?v=${id}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-xl font-bold">{title}</h1>
            <a className="btn btn-sm" href="/">Home</a>
          </div>
          <p className="text-sm text-gray-500 mb-4">Nguồn: {author}</p>
          <div className="bg-base-100 rounded shadow p-4">
            <LiteYoutube key={id} videoId={id} title={`Liên Quân — ${id}`} />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Nguồn: <a className="link" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">YouTube</a>
              </p>
              <div className="flex gap-2">
                <a className="btn btn-sm" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}`}>Share FB</a>
                <a className="btn btn-sm" target="_blank" rel="noopener noreferrer" href={`https://t.me/share/url?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&text=${encodeURIComponent(title)}`}>Share TG</a>
              </div>
            </div>
          </div>

          {recommended?.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-3">Có thể bạn thích</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recommended.slice(0,6).map(v => (
                  <VideoCard key={v.videoId} video={v} />
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="lg:col-span-1">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Nhận highlight nóng</h3>
              <p className="text-sm opacity-70">Theo dõi kênh Telegram để nhận video mới mỗi ngày.</p>
              <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://t.me/">Join Telegram</a>
            </div>
          </div>
          <div className="mt-6 card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Tin nhanh</h3>
              <ul className="text-sm list-disc pl-5 space-y-2">
                <li>Meta cập nhật tướng mới — AOV</li>
                <li>Lịch thi đấu tuần này — ĐTDV</li>
                <li>Top 5 highlight leo rank</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}


