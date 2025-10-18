import fs from 'fs';
import path from 'path';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import { BannerAd, SidebarAd } from '../components/DualAds';
import { AffiliateSection } from '../components/Affiliate';
import { useState } from 'react';

export async function getStaticProps() {
  const publicDir = path.join(process.cwd(), 'public');
  const newsJsonPath = path.join(publicDir, 'news.json');

  let news = [];
  if (fs.existsSync(newsJsonPath)) {
    try {
      const raw = fs.readFileSync(newsJsonPath, 'utf8');
      const data = JSON.parse(raw);
      news = data.news || [];
    } catch (error) {
      console.error('Error loading news:', error);
    }
  }

  return { 
    props: { news }, 
    revalidate: 3600 // Revalidate every hour
  };
}

export default function News({ news }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả', color: 'bg-gray-500' },
    { id: 'tin tức', name: 'Tin tức', color: 'bg-pink-500' },
    { id: 'tướng', name: 'Tướng', color: 'bg-red-500' },
    { id: 'skin', name: 'Skin', color: 'bg-teal-500' },
    { id: 'cập nhật', name: 'Cập nhật', color: 'bg-blue-500' },
    { id: 'esports', name: 'Esports', color: 'bg-green-500' },
    { id: 'meta', name: 'Meta', color: 'bg-yellow-500' }
  ];

  const filteredNews = news.filter(item => {
    // Only show real news (not sample data with example.com links)
    const isRealNews = !item.link.includes('example.com');
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return isRealNews && matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    if (!dateString) return 'Không rõ';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Tin tức Liên Quân Mobile - Liên Quân Hub</title>
        <meta name="description" content="Tin tức mới nhất về Liên Quân Mobile: tướng mới, skin, cập nhật, esports và meta game" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/news" />
      </Head>
      
      <NavBar />
      
      {/* Banner Ad - Subtle placement */}
      <BannerAd className="max-w-6xl mx-auto px-6 py-2" />
      
      <main className="p-3 sm:p-4 md:p-6">
        <section className="max-w-6xl mx-auto mb-6 sm:mb-8">
          <div className="hero bg-base-100 rounded-xl shadow">
            <div className="hero-content text-center p-4 sm:p-6 md:p-8">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tin tức Liên Quân Mobile</h1>
                <p className="py-2 text-sm sm:text-base text-base-content/70 px-4">
                  Cập nhật tin tức mới nhất về tướng, skin, esports và meta game
                </p>
                
                {/* Search Bar */}
                <div className="join w-full max-w-sm sm:max-w-md md:max-w-xl mb-4 px-4">
                  <input 
                    className="input input-bordered join-item w-full text-sm sm:text-base" 
                    placeholder="Tìm tin tức..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-primary join-item text-sm sm:text-base">Tìm kiếm</button>
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 px-4">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`btn btn-xs sm:btn-sm ${selectedCategory === category.id ? category.color : 'btn-outline'}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid with Sidebar */}
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Main Content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {filteredNews.length > 0 ? (
                  filteredNews.map((item, index) => (
                    <div key={item.link} className="card bg-base-100 shadow-xl">
                      <figure>
                        <img 
                          src={item.image_url || `https://picsum.photos/seed/${item.link}/400/225`} 
                          alt={item.title}
                          className="w-full h-40 sm:h-48 object-cover"
                        />
                      </figure>
                      <div className="card-body p-3 sm:p-4 md:p-6">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                          <span className={`badge badge-xs sm:badge-sm ${getCategoryColor(item.category)} text-white`}>
                            {item.category}
                          </span>
                          <span className="badge badge-xs sm:badge-sm badge-outline">
                            {item.source}
                          </span>
                        </div>

                        <h2 className="card-title text-sm sm:text-base md:text-lg leading-tight">
                          {item.title}
                        </h2>

                        <p className="text-base-content/70 text-xs sm:text-sm line-clamp-3">
                          {item.summary ? item.summary.replace(/<[^>]*>/g, '').substring(0, 120) + '...' : 'Không có mô tả'}
                        </p>

                        <div className="card-actions justify-between items-center mt-3 sm:mt-4">
                          <div className="text-xs text-base-content/50">
                            {formatDate(item.published_at)}
                          </div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-xs sm:btn-sm"
                          >
                            Đọc thêm
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 sm:py-12 col-span-full">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📰</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Không tìm thấy tin tức</h3>
                    <p className="text-base-content/70 text-sm sm:text-base px-4">Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block w-72 xl:w-80">
              <div className="sticky top-6">
                <SidebarAd className="mb-4 sm:mb-6" />

                {/* Affiliate Links */}
                <AffiliateSection />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 py-6 text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} Liên Quân Hub — nguồn: Tổng hợp
        </footer>
      </main>
    </div>
  );
}