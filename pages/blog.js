import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const articles = [
    {
      id: 'azzenka-guide-2025',
      title: "Hướng dẫn Azzen'ka mùa 4 2025 - Tướng mới mạnh nhất hiện tại",
      excerpt: "Azzen'ka là tướng mới được ra mắt trong phiên bản Quang Minh & Hắc Ám với khả năng khống chế cực mạnh và sát thương phép thuật cao. Bài viết này sẽ hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Azzen'ka hiệu quả nhất.",
      category: 'Guide Hero',
      readTime: '12 phút',
      date: '2025-10-24',
      image: 'https://i.ytimg.com/vi/7yZ7omLy0YQ/maxresdefault.jpg'
    },
    {
      id: 'meta-analysis-season-4',
      title: 'Phân tích Meta mùa 4 2025 - Top tướng và chiến thuật',
      excerpt: 'Mùa 4 mang đến nhiều thay đổi lớn trong meta game. Chúng tôi phân tích chi tiết các tướng mạnh nhất, combo đội hình hiệu quả và xu hướng meta hiện tại.',
      category: 'Meta Game',
      readTime: '15 phút',
      date: '2025-10-24',
      image: 'https://i.ytimg.com/vi/Ksvv3l9Bikg/maxresdefault.jpg'
    },
    {
      id: 'violet-build-guide-2025',
      title: 'Hướng dẫn build Violet mùa 4 2025 - Từ cơ bản đến cao thủ',
      excerpt: 'Violet là một trong những ADC mạnh nhất hiện tại với khả năng gây sát thương cực cao. Bài viết này sẽ hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Violet hiệu quả nhất.',
      category: 'Guide Hero',
      readTime: '8 phút',
      date: '2025-10-24',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'rank-up-tips-diamond',
      title: 'Bí quyết leo rank từ Vàng lên Kim Cương - Chiến thuật thực chiến',
      excerpt: 'Leo rank từ Vàng lên Kim Cương là một thử thách lớn. Bài viết chia sẻ kinh nghiệm thực tế từ các cao thủ, bao gồm cách chọn tướng, chiến thuật team fight và tâm lý thi đấu.',
      category: 'Tips Rank',
      readTime: '10 phút',
      date: '2025-10-23',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'jungle-guide-season-4',
      title: 'Hướng dẫn đi rừng mùa 4 - Từ Bronze đến Master',
      excerpt: 'Đi rừng là vị trí quan trọng nhất trong game. Bài viết hướng dẫn chi tiết cách đi rừng hiệu quả, timing gank, kiểm soát rồng và cách carry team.',
      category: 'Guide Position',
      readTime: '15 phút',
      date: '2025-10-22',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'skin-review-new-collection',
      title: 'Review bộ skin mới Quang Minh & Hắc Ám - Đáng mua không?',
      excerpt: 'Bộ skin Quang Minh & Hắc Ám là một trong những bộ skin đẹp nhất từ trước đến nay. Chúng tôi review chi tiết hiệu ứng, animation và giá trị của từng skin.',
      category: 'Skin Review',
      readTime: '6 phút',
      date: '2025-10-21',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    }
  ];

  const categories = ['Tất cả', 'Guide Hero', 'Meta Game', 'Tips Rank', 'Guide Position', 'Skin Review'];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'Tất cả'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  // We choose the first item of the filtered articles as featured, or fallback if none
  const featuredArticle = filteredArticles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Blog & Hướng dẫn Liên Quân Mobile | Liên Quân Hub</title>
        <meta name="description" content="Hướng dẫn build đồ, tips leo rank, phân tích meta từ các cao thủ Liên Quân Mobile." />
        <meta name="keywords" content="Liên Quân Mobile, blog, hướng dẫn, tips, guide, meta game, esports" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full space-y-10">
        {/* Header Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-8 sm:p-12 text-center">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="badge badge-error text-white font-bold px-3 py-1.5 text-xs tracking-widest uppercase">
              📚 KHO KINH NGHIỆM
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Blog & Hướng dẫn Chiến Thuật
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tổng hợp bài viết chuyên sâu về hướng dẫn trang bị, mẹo leo rank và phân tích meta cực kỳ thực chiến từ các cao thủ chuyên nghiệp.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2.5 pt-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn btn-sm px-4 rounded-xl border font-bold transition-all duration-300 ${
                    category === selectedCategory 
                      ? 'btn-error text-white shadow-lg shadow-red-500/20' 
                      : 'border-slate-800 bg-slate-900/30 text-slate-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article - only shown if articles exist in filtered set */}
        {featuredArticle && (
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md transition-all duration-300 card-glow-transition card-glow-s">
            <div className="card-body p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-error text-white font-black px-2.5 py-1 text-[10px] tracking-wide uppercase">
                      BÀI NỔI BẬT
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      🏷️ {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-red-500 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
                    <span className="flex items-center gap-1">⏱️ {featuredArticle.readTime} đọc</span>
                    <span className="flex items-center gap-1">📅 {featuredArticle.date}</span>
                  </div>
                  <div className="pt-4">
                    <Link href={`/blog/${featuredArticle.id}`} className="btn btn-error text-white px-6 rounded-xl font-bold hover:scale-105 transition-all duration-300">
                      Đọc bài viết →
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-[450px] aspect-[16/10] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-6">
            {regularArticles.length > 0 && (
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3">
                Các bài viết liên quan
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map(article => (
                <div 
                  key={article.id} 
                  className="group card bg-slate-900/40 backdrop-blur-sm border border-slate-800 overflow-hidden h-full rounded-2xl card-glow-transition card-glow-a"
                >
                  <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="badge border-none bg-slate-850/90 text-white font-bold text-[10px] px-2.5 py-1">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="card-title text-base sm:text-lg text-white font-bold group-hover:text-red-500 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-xs text-slate-500 font-semibold">
                      <span>📅 {article.date}</span>
                      <Link href={`/blog/${article.id}`} className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-0.5">
                        Đọc thêm ➔
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/20 rounded-3xl border border-slate-800 border-dashed">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-white mt-4">Không tìm thấy bài viết nào</h3>
            <p className="text-slate-400 text-sm mt-1">Vui lòng thay đổi bộ lọc chuyên mục.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="card bg-slate-900/40 border border-slate-800 backdrop-blur-sm rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="card-body p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-4xl block">📧</span>
            <h2 className="card-title text-xl sm:text-2xl justify-center text-white font-black tracking-tight">
              Đăng ký Nhận Bài Viết Mới
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Bạn muốn trở thành người đầu tiên cập nhật meta và cẩm nang từ cao thủ? Hãy đăng ký email để nhận bài phân tích hàng tuần hoàn toàn miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="email" 
                placeholder="Địa chỉ Email của bạn" 
                className="input input-bordered bg-slate-950 border-slate-800 text-white rounded-xl flex-1 focus:border-red-500 transition-colors"
              />
              <button className="btn btn-error text-white font-bold px-6 rounded-xl hover:scale-105 transition-all duration-300">
                Đăng ký ngay
              </button>
            </div>
            <p className="text-[10px] text-slate-500 font-semibold">
              Chúng tôi tuyệt đối bảo mật thông tin và bạn có thể hủy đăng ký chỉ với 1-click bất cứ lúc nào.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
