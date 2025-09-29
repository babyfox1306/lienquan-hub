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
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>{title} - Liên Quân Hub</title>
        <meta name="description" content={`${title} - Video Liên Quân Mobile mới nhất từ ${author}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={`${title} - Video Liên Quân Mobile mới nhất từ ${author}`} />
        <meta property="og:image" content={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} />
        <meta property="og:video" content={`https://www.youtube.com/watch?v=${id}`} />
        <meta property="og:type" content="video.other" />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:player" content={`https://www.youtube.com/embed/${id}`} />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        <link rel="canonical" href={`https://www.lienquanhub.xyz/watch/${id}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-base-100 border-b">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-primary hover:underline">🏠 Trang chủ</a>
            <span className="text-base-content/50">›</span>
            <span className="text-base-content/70 truncate max-w-md">{title}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Video Player Section */}
          <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-black">
              <LiteYoutube key={id} videoId={id} title={title} />
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-3 line-clamp-2">{title}</h1>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="badge badge-outline">📺 {author}</span>
                  <span className="text-sm text-base-content/60">Liên Quân Mobile</span>
                </div>
                <div className="flex gap-2">
                  <a className="btn btn-sm btn-outline" target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${id}`}>
                    📺 Xem trên YouTube
                  </a>
                </div>
              </div>
              
              {/* Social Share */}
              <div className="flex items-center justify-between pt-4 border-t border-base-300">
                <div className="flex gap-2">
                  <a className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.lienquanhub.xyz/watch/${id}`)}`}>
                    📘 Facebook
                  </a>
                  <a className="btn btn-sm btn-info" target="_blank" rel="noopener noreferrer" href={`https://t.me/share/url?url=${encodeURIComponent(`https://www.lienquanhub.xyz/watch/${id}`)}&text=${encodeURIComponent(title)}`}>
                    📱 Telegram
                  </a>
                  <a className="btn btn-sm btn-success" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://www.lienquanhub.xyz/watch/${id}`)}&text=${encodeURIComponent(title)}`}>
                    🐦 Twitter
                  </a>
                </div>
                <div className="text-xs text-base-content/50">
                  ID: {id}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Videos */}
          {recommended?.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">🎯 Video liên quan</h2>
                <span className="badge badge-primary">{recommended.length} video</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommended.slice(0,6).map(v => (
                  <VideoCard key={v.videoId} video={v} />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Newsletter CTA */}
          <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-white">🔥 Nhận highlight nóng</h3>
              <p className="text-white/90">Theo dõi để không bỏ lỡ video mới mỗi ngày</p>
              <div className="card-actions justify-center">
                <a className="btn btn-white btn-sm" target="_blank" rel="noopener noreferrer" href="https://t.me/lienquanhub">
                  📱 Join Telegram
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-lg">📊 Thống kê</h3>
              <div className="stats stats-vertical">
                <div className="stat">
                  <div className="stat-title">Video tổng</div>
                  <div className="stat-value text-primary">{recommended?.length + 1 || 0}</div>
                  <div className="stat-desc">Liên Quân Mobile</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Cập nhật</div>
                  <div className="stat-value text-secondary">15 phút</div>
                  <div className="stat-desc">Tự động</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick News */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-lg">📰 Tin nhanh</h3>
              <div className="space-y-3">
                <div className="alert alert-info">
                  <div>
                    <div className="text-sm font-semibold">Meta cập nhật</div>
                    <div className="text-xs opacity-70">Tướng mới AOV</div>
                  </div>
                </div>
                <div className="alert alert-warning">
                  <div>
                    <div className="text-sm font-semibold">Lịch thi đấu</div>
                    <div className="text-xs opacity-70">ĐTDV tuần này</div>
                  </div>
                </div>
                <div className="alert alert-success">
                  <div>
                    <div className="text-sm font-semibold">Top highlight</div>
                    <div className="text-xs opacity-70">Leo rank hot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back to Home */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <a href="/" className="btn btn-outline btn-block">
                🏠 Về trang chủ
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}


