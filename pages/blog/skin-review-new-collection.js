import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function SkinReview() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Review bộ skin mới Quang Minh & Hắc Ám - Liên Quân Hub</title>
        <meta name="description" content="Review chi tiết hiệu ứng và mức độ đáng tiền của bộ sưu tập skin mới Quang Minh & Hắc Ám." />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/skin-review-new-collection" />
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
            <li className="text-slate-200 font-semibold">Review Trang phục</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="badge badge-error text-white font-bold px-2.5 py-1 text-xs uppercase">
            Skin Review
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Review bộ skin mới Quang Minh & Hắc Ám - Đáng mua không?
          </h1>
          <p className="text-lg sm:text-xl text-slate-400">
            Đánh giá cực kì chi tiết hiệu ứng kỹ năng, biến về và mức độ đáng tiền của dòng skin siêu phẩm!
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
            <span>📅 21 tháng 10, 2025</span>
            <span>⏱️ 6 phút đọc</span>
            <span>👁️ 2,129 lượt xem</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 aspect-[16/9] relative">
          <img 
            src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
            alt="Review skin mới Liên Quân Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
                🎯 Tổng quan dòng trang phục mới
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Được đánh giá là một trong những bộ sưu tập trang phục đỉnh cao và kỳ công nhất năm nay, dòng skin Quang Minh & Hắc Ám sở hữu toàn bộ các hiệu ứng đòn đánh độc quyền, biến về độc đáo cùng giọng lồng tiếng hoàn toàn mới rất đáng tiền!
              </p>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="card bg-slate-900/40 border border-slate-800 backdrop-blur-sm rounded-2xl">
          <div className="card-body p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">📤 Chia sẻ bài viết</h3>
            <div className="flex justify-center flex-wrap gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/skin-review-new-collection')}`} 
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
