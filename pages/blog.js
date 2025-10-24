import Head from 'next/head';
import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function Blog() {
  const articles = [
    {
      id: 'azzenka-guide-2025',
      title: 'Hướng dẫn Azzen\'ka mùa 4 2025 - Tướng mới mạnh nhất hiện tại',
      excerpt: 'Azzen\'ka là tướng mới được ra mắt trong phiên bản Quang Minh & Hắc Ám với khả năng khống chế cực mạnh và sát thương phép thuật cao. Bài viết này sẽ hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Azzen\'ka hiệu quả nhất.',
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

  const categories = ['Tất cả', 'Guide Hero', 'Meta Game', 'Tips Rank', 'Guide Position', 'Skin Review', 'Esports'];

  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Blog & Hướng dẫn - Liên Quân Hub</title>
        <meta name="description" content="Tổng hợp các bài viết hướng dẫn, tips và phân tích chuyên sâu về Liên Quân Mobile" />
        <meta name="keywords" content="Liên Quân Mobile, blog, hướng dẫn, tips, guide, meta game, esports" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-6xl mx-auto p-6">
        <div className="hero bg-base-100 rounded-xl shadow-lg mb-8">
          <div className="hero-content text-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">📚 Blog & Hướng dẫn</h1>
              <p className="text-lg text-base-content/70 mb-6">
                Tổng hợp các bài viết chuyên sâu về Liên Quân Mobile từ các cao thủ và chuyên gia
              </p>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`btn btn-sm ${category === 'Tất cả' ? 'btn-primary' : 'btn-outline'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl mb-8">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="badge badge-accent mb-2">Bài viết nổi bật</div>
                <h2 className="text-2xl font-bold mb-3">
                  {articles[0].title}
                </h2>
                <p className="text-primary-content/90 mb-4">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span>📖 {articles[0].readTime}</span>
                  <span>📅 {articles[0].date}</span>
                  <span>🏷️ {articles[0].category}</span>
                </div>
              </div>
              <div className="md:w-80">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <Link href={`/blog/${articles[0].id}`} className="btn btn-accent">
                Đọc ngay →
              </Link>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.slice(1).map(article => (
            <div key={article.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <figure>
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-primary badge-sm">{article.category}</span>
                  <span className="text-xs text-base-content/60">{article.readTime}</span>
                </div>
                
                <h3 className="card-title text-lg leading-tight mb-3">
                  {article.title}
                </h3>
                
                <p className="text-base-content/70 text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                
                <div className="card-actions justify-between items-center">
                  <span className="text-xs text-base-content/50">
                    📅 {article.date}
                  </span>
                  <Link href={`/blog/${article.id}`} className="btn btn-primary btn-sm">
                    Đọc thêm
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body text-center">
            <h2 className="card-title text-2xl justify-center mb-4">📧 Nhận bài viết mới</h2>
            <p className="text-base-content/70 mb-6">
              Đăng ký để nhận thông báo khi có bài viết mới về Liên Quân Mobile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="input input-bordered flex-1"
              />
              <button className="btn btn-primary">Đăng ký</button>
            </div>
            <p className="text-xs text-base-content/50 mt-4">
              Chúng tôi cam kết không spam và bạn có thể hủy đăng ký bất kỳ lúc nào
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
