import fs from 'fs';
import path from 'path';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GamingGear from '../components/GamingGear';
import Head from 'next/head';
import VideoCard from '../components/VideoCard';
import Pagination from '../components/Pagination';
import { BannerAd, InContentAd } from '../components/DualAds';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from '../contexts/LocaleContext';

export async function getStaticProps() {
  const publicDir = path.join(process.cwd(), 'public');
  const videosJsonPath = path.join(publicDir, 'videos.json');
  const feedsPath = path.join(publicDir, 'feeds.json');
  const heroesJsonPath = path.join(publicDir, 'heroes.json');

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

  let hotHeroes = [];
  if (fs.existsSync(heroesJsonPath)) {
    const raw = fs.readFileSync(heroesJsonPath, 'utf8');
    const sanitized = raw.replace(/^\uFEFF/, '');
    let j = {};
    try {
      j = JSON.parse(sanitized);
      const allHeroes = j.heroes || [];
      hotHeroes = allHeroes.filter(h => h.hot === true);
    } catch (_) {
      hotHeroes = [];
    }
  }

  // Sắp xếp video theo thời gian mới nhất lên trên
  videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return { props: { videos, hotHeroes }, revalidate: 60 };
}

export default function Home({ videos, hotHeroes = [] }) {
  const { t } = useLocale();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Lấy page từ URL query
  useEffect(() => {
    const page = parseInt(router.query.page) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    router.push({ pathname: '/', query: { ...router.query, page: 1 } }, undefined, { shallow: true });
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
    router.push({ pathname: '/', query: { ...router.query, page: 1 } }, undefined, { shallow: true });
  };

  // Lọc video theo search term và category
  const filteredVideos = videos.filter(v => {
    const titleLower = v.title.toLowerCase();
    const matchesSearch = searchTerm === '' || titleLower.includes(searchTerm.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    if (selectedCategory === 'highlight') {
      return matchesSearch && (titleLower.includes('highlight') || titleLower.includes('thi đấu') || titleLower.includes('giải đấu') || titleLower.includes('tournament') || titleLower.includes('esports'));
    }
    if (selectedCategory === 'guide') {
      return matchesSearch && (titleLower.includes('guide') || titleLower.includes('hướng dẫn') || titleLower.includes('combo') || titleLower.includes('build') || titleLower.includes('cách chơi') || titleLower.includes('bảng ngọc') || titleLower.includes('trang bị') || titleLower.includes('tướng'));
    }
    if (selectedCategory === 'news') {
      return matchesSearch && (titleLower.includes('cập nhật') || titleLower.includes('patch') || titleLower.includes('update') || titleLower.includes('tướng mới') || titleLower.includes('skin') || titleLower.includes('leaks') || titleLower.includes('news') || titleLower.includes('tin tức'));
    }
    return matchesSearch;
  });

  const videosPerPage = 20;
  const totalVideos = filteredVideos.length;
  const totalPages = Math.ceil(totalVideos / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, endIndex);

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
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>{currentPage === 1 ? 'Liên Quân Hub - Video Mới Nhất' : `Liên Quân Hub - Trang ${currentPage}`}</title>
        <meta name="description" content={`${currentPage === 1 ? 'Video Liên Quân mới nhất' : `Trang ${currentPage}`} - Highlight, guide, news cập nhật tự động từ YouTube`} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
      </Head>
      
      <NavBar />

      {/* Hero Section with Official Key Art Background */}
      <section className="relative overflow-hidden w-full py-16 px-4 md:py-24 text-center border-b border-slate-900/60" style={{
        minHeight: '320px',
        background: '#0b1020'
      }}>
        {/* Background Key Art Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/hero-bg.jpg" 
            alt="Liên Quân Mobile Background" 
            className="w-full h-full object-cover opacity-25" 
          />
          {/* Dark gradient blending the image into the page background */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
          {/* Live status badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black text-red-500 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-sm animate-pulse uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            🔴 {t('home.liveBadge')}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight" style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
            background: 'linear-gradient(135deg, #fff 0%, #ef4444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Liên Quân Hub
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-bold tracking-wide drop-shadow-md">
            {t('home.tagline')}
          </p>

          {/* Premium Search Bar */}
          <div className="w-full max-w-[600px] flex items-center bg-slate-950/70 border border-white/10 rounded-2xl p-1.5 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20 transition-all duration-300 backdrop-blur-md">
            <input 
              type="text" 
              className="w-full bg-transparent outline-none px-4 py-2 text-white placeholder-slate-500 text-sm sm:text-base font-semibold"
              placeholder={t('home.searchPlaceholder')}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="bg-red-500 hover:bg-red-600 active:scale-95 text-white font-black text-sm sm:text-base px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/20">
              {t('home.search')}
            </button>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <BannerAd className="max-w-6xl mx-auto px-4 mt-6" />

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full space-y-10">
        
        {/* Hot Heroes Section */}
        {hotHeroes.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-red-500 rounded" />
              <h2 className="text-xl font-extrabold text-white tracking-tight">🔥 {t('home.hotHeroes')}</h2>
              <span className="text-slate-500 text-sm font-semibold">· {hotHeroes.length} {t('home.heroesUnit')}</span>
            </div>
            
            <div className="flex overflow-x-auto gap-5 pb-4 no-scrollbar scroll-smooth" style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              {hotHeroes.map(hero => (
                <Link key={hero.id} href={`/tuong/${hero.id}`} className="flex flex-col items-center text-center min-w-[76px] group cursor-pointer" legacyBehavior>
                  <a>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-500/30 group-hover:border-red-500 group-hover:scale-105 transition-all duration-300 bg-slate-900 shadow-lg">
                      {hero.thumbnail ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img 
                          src={hero.thumbnail} 
                          alt={hero.name} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center font-bold text-xl text-white">
                          {hero.name[0]}
                        </div>
                      )}
                      <span className={`absolute bottom-0 right-0 text-[10px] font-black px-1.5 py-0.5 rounded-full border border-slate-950 shadow-md ${
                        hero.tier === 'S' ? 'bg-red-500 text-white' :
                        hero.tier === 'A' ? 'bg-orange-500 text-white' :
                        hero.tier === 'B' ? 'bg-green-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {hero.tier}
                      </span>
                    </div>
                    <span className="mt-2 block text-xs font-bold text-slate-300 group-hover:text-white transition-colors duration-200 truncate w-20">
                      {hero.name}
                    </span>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Video Grid Section */}
        <section className="space-y-6">
          {/* Header & Categories */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-red-500 rounded" />
              <h2 className="text-xl font-extrabold text-white tracking-tight">{t('home.latestVideos')}</h2>
              <span className="text-slate-500 text-sm font-semibold">· {totalVideos} video</span>
            </div>
            
            {/* Category tabs */}
            <div className="tabs tabs-boxed bg-slate-900 border border-slate-800/80 p-1 flex gap-1 rounded-xl self-start md:self-auto">
              {[
                { id: 'all', labelKey: 'home.catAll' },
                { id: 'highlight', labelKey: 'home.catHighlight' },
                { id: 'guide', labelKey: 'home.catGuide' },
                { id: 'news', labelKey: 'home.catNews' },
              ].map(cat => (
                <button
                  key={cat.id}
                  className={`px-4 py-1.5 text-xs font-black rounded-lg transition-all duration-300 ${
                    selectedCategory === cat.id 
                      ? 'bg-red-500 text-white shadow-md shadow-red-500/20' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {t(cat.labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {currentVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {currentVideos.map((v, idx) => (
                <VideoCard key={v.videoId} video={v} priority={idx === 0} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-900/40 border border-slate-900 rounded-3xl">
              <span className="text-4xl">🔍</span>
              <p className="mt-4 text-slate-400 font-bold">{t('home.noVideos')}</p>
            </div>
          )}
        </section>

        {/* In-Content Ad */}
        {currentPage === 1 && <InContentAd className="mt-8" />}

        {/* Pagination */}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          totalVideos={totalVideos} 
        />
      </main>

      <GamingGear titleKey="gear.titleHot" />
      <Footer />
    </div>
  );
}
