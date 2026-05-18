import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function JungleGuide() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Hướng dẫn đi rừng mùa 4 2025 - Liên Quân Hub</title>
        <meta name="description" content="Chi tiết cách đi rừng, timing gank và kiểm soát bản đồ hiệu quả nhất mùa 4 2025." />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/jungle-guide-season-4" />
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
            <li className="text-slate-200 font-semibold">Hướng dẫn đi rừng</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="badge badge-error text-white font-bold px-2.5 py-1 text-xs uppercase">
            Guide Position
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Hướng dẫn đi rừng mùa 4 - Từ Bronze đến Master cực dễ
          </h1>
          <p className="text-lg sm:text-xl text-slate-400">
            Trở thành linh hồn của đội hình, gánh team bằng tư duy di chuyển và timing chuẩn xác!
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
            <span>📅 22 tháng 10, 2025</span>
            <span>⏱️ 15 phút đọc</span>
            <span>👁️ 3,982 lượt xem</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 aspect-[16/9] relative">
          <img 
            src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
            alt="Đi rừng Liên Quân Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
                🎯 Tư duy đi rừng hiện đại
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Người đi rừng thông minh không chỉ cắm đầu farm quái rừng. Hãy luôn chú ý đường rồng và đường tà thần, lên kế hoạch gank từ trước dựa trên hướng di chuyển của rừng đối phương và luôn ưu tiên dọn rừng nhanh để kiểm soát rồng đầu trận.
              </p>
            </div>
          </div>
        </div>

        {/* Share */}
        <div className="card bg-slate-900/40 border border-slate-800 backdrop-blur-sm rounded-2xl">
          <div className="card-body p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">📤 Chia sẻ cẩm nang</h3>
            <div className="flex justify-center flex-wrap gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/jungle-guide-season-4')}`} 
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
