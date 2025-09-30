import fs from 'fs';
import path from 'path';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import VideoCard from '../components/VideoCard';
import Pagination from '../components/Pagination';
import { BannerAd, InContentAd, MobileAd } from '../components/Ads';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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

  // Sắp xếp video theo thời gian mới nhất lên trên
  videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return { props: { videos }, revalidate: 60 };
}

export default function Home({ videos }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  
  // Lấy page từ URL query
  useEffect(() => {
    const page = parseInt(router.query.page) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  const videosPerPage = 20;
  const totalVideos = videos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = videos.slice(startIndex, endIndex);

  const canonical = currentPage === 1 ? 'https://www.lienquanhub.xyz/' : `https://www.lienquanhub.xyz/?page=${currentPage}`;
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: currentVideos.slice(0, 10).map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://lienquan-hub.vercel.app/watch/${v.videoId}`
    }))
  };
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>{currentPage === 1 ? 'Liên Quân Hub - Video Mới Nhất' : `Liên Quân Hub - Trang ${currentPage}`}</title>
        <meta name="description" content={`${currentPage === 1 ? 'Video Liên Quân mới nhất' : `Trang ${currentPage}`} - Highlight, guide, news cập nhật tự động từ YouTube`} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
      </Head>
      <NavBar />
      
      {/* Banner Ad */}
      <BannerAd className="max-w-6xl mx-auto px-6 py-4" />
      
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
          {currentVideos.map((v, idx) => (
            <VideoCard key={v.videoId} videoId={v.videoId} title={v.title} priority={idx === 0} />
          ))}
        </section>
        
        {/* In-Content Ad */}
        <InContentAd className="max-w-6xl mx-auto" />
        
        {/* Mobile Ad */}
        <MobileAd className="max-w-6xl mx-auto px-6" />
        
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          totalVideos={totalVideos} 
        />
        <footer className="mt-10 py-6 text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} Liên Quân Hub — nguồn: YouTube
        </footer>
      </main>
    </div>
  );
}


