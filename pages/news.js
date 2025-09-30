import fs from 'fs';
import path from 'path';
import NavBar from '../components/NavBar';
import Head from 'next/head';
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
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
      
      <main className="p-6">
        <section className="max-w-6xl mx-auto mb-8">
          <div className="hero bg-base-100 rounded-xl shadow">
            <div className="hero-content text-center">
              <div>
                <h1 className="text-3xl font-bold">Tin tức Liên Quân Mobile</h1>
                <p className="py-2 text-base-content/70">
                  Cập nhật tin tức mới nhất về tướng, skin, esports và meta game
                </p>
                
                {/* Search Bar */}
                <div className="join w-full max-w-xl mb-4">
                  <input 
                    className="input input-bordered join-item w-full" 
                    placeholder="Tìm tin tức..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-primary join-item">Tìm kiếm</button>
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`btn btn-sm ${selectedCategory === category.id ? category.color : 'btn-outline'}`}
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

        {/* News Grid */}
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, index) => (
              <div key={item.id} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge ${getCategoryColor(item.category)} text-white`}>
                      {item.category}
                    </span>
                    <span className="badge badge-outline">
                      {item.source}
                    </span>
                  </div>
                  
                  <h2 className="card-title text-lg leading-tight">
                    {item.title}
                  </h2>
                  
                  <p className="text-base-content/70 text-sm line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <div className="card-actions justify-between items-center mt-4">
                    <div className="text-xs text-base-content/50">
                      {formatDate(item.published_at)}
                    </div>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Đọc thêm
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold mb-2">Không tìm thấy tin tức</h3>
              <p className="text-base-content/70">
                Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác
              </p>
            </div>
          )}
        </section>

        <footer className="mt-10 py-6 text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} Liên Quân Hub — Tin tức được cập nhật tự động
        </footer>
      </main>
    </div>
  );
}

