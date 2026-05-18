import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function RankUpTips() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Bí quyết leo rank từ Vàng lên Kim Cương - Liên Quân Hub</title>
        <meta name="description" content="Kinh nghiệm leo rank từ Vàng lên Kim Cương thực chiến từ cao thủ Liên Quân Mobile." />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/rank-up-tips-diamond" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full space-y-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-400 mb-2">
          <ul className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-white transition-colors">Trang chủ</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-slate-200 font-semibold">Bí quyết leo rank</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="badge badge-error text-white font-bold px-2.5 py-1 text-xs uppercase">
            Tips Rank
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Bí quyết leo rank từ Vàng lên Kim Cương - Chiến thuật thực chiến
          </h1>
          <p className="text-lg sm:text-xl text-slate-400">
            Chia sẻ các bài học thực chiến xương máu để thoát khỏi hell-rank cực kỳ nhanh chóng!
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
            <span>📅 23 tháng 10, 2025</span>
            <span>⏱️ 10 phút đọc</span>
            <span>👁️ 4,512 lượt xem</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 aspect-[16/9] relative">
          <img 
            src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
            alt="Leo Rank Liên Quân Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
                🎯 Lời khuyên vàng khi leo rank
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Để thoát khỏi Vàng/Bạch Kim, yếu tố quan trọng nhất không phải là kỹ năng cá nhân thượng thừa, mà chính là khả năng kiểm soát bản đồ nhỏ, chọn đúng thời điểm để tranh chấp mục tiêu lớn (Rồng, Tà Thần) và luôn luôn giữ một tâm lý bình tĩnh, tránh chat chửi bới đồng đội.
              </p>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="card bg-slate-900/40 border border-slate-800 backdrop-blur-sm rounded-2xl">
          <div className="card-body p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">📤 Chia sẻ bài viết</h3>
            <div className="flex justify-center flex-wrap gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/rank-up-tips-diamond')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-sm btn-error text-white font-bold rounded-xl px-5">
                📘 Facebook
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
