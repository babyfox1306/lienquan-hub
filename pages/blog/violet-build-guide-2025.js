import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function VioletGuide() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Hướng dẫn build Violet mùa 4 2025 - Liên Quân Hub</title>
        <meta name="description" content="Hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Violet hiệu quả nhất trong Liên Quân Mobile mùa 4 2025" />
        <meta name="keywords" content="Violet, Liên Quân Mobile, build đồ, combo skill, ADC, mùa 4 2025" />
        <meta property="og:title" content="Hướng dẫn build Violet mùa 4 2025" />
        <meta property="og:description" content="Hướng dẫn chi tiết cách build đồ và sử dụng Violet hiệu quả nhất" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/violet-build-guide-2025" />
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
            <li className="text-slate-200 font-semibold">Hướng dẫn Violet</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="badge badge-error text-white font-bold px-2.5 py-1 text-xs uppercase">
            Guide Hero
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Hướng dẫn build Violet mùa 4 2025
          </h1>
          <p className="text-lg sm:text-xl text-slate-400">
            Từ cơ bản đến cao thủ - Cách sử dụng Violet hiệu quả nhất gánh team cực mạnh!
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
            <span>📅 24 tháng 10, 2025</span>
            <span>⏱️ 8 phút đọc</span>
            <span>👁️ 1,234 lượt xem</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 aspect-[16/9] relative">
          <img 
            src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
            alt="Violet Liên Quân Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-8">
          {/* Overview */}
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
                🎯 Tổng quan về Violet
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Violet là một trong những xạ thủ (ADC) mạnh nhất hiện tại trong Liên Quân Mobile với khả năng gây sát thương vật lý cực cao và khả năng kiting (thả diều) xuất sắc. Với bộ kỹ năng linh hoạt, Violet có thể dễ dàng gánh đội nếu được bảo kê tốt ở giai đoạn đầu game.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Độ khó</div>
                  <div className="text-xl font-bold text-red-500 mt-1">Trung bình</div>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Vị trí</div>
                  <div className="text-xl font-bold text-orange-500 mt-1">ADC (Đi Rồng)</div>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Độ HOT / Meta</div>
                  <div className="text-xl font-bold text-yellow-500 mt-1">Tier S</div>
                </div>
              </div>
            </div>
          </div>

          {/* Build Gear */}
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
                ⚔️ Build đồ tối ưu mùa 4 2025
              </h2>
              
              <h3 className="text-lg font-bold text-slate-200 mb-3">Lối lên đồ chính (Core Build):</h3>
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60 mb-6">
                <table className="table table-zebra w-full text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-800 text-white font-bold bg-slate-900/40">
                      <th>Thứ tự</th>
                      <th>Trang bị</th>
                      <th>Lý do lựa chọn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">1</td>
                      <td className="font-bold text-red-400">Giày Du Mục</td>
                      <td>Tăng tốc đánh và khả năng di chuyển linh hoạt đầu trận</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">2</td>
                      <td className="font-bold text-orange-400">Thần Cung</td>
                      <td>Trang bị chấn phái tăng tỉ lệ chí mạng và sát thương cực khủng</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">3</td>
                      <td className="font-bold text-yellow-400">Song Đao Bão Táp</td>
                      <td>Tăng tối đa tốc độ đánh và kháng hiệu ứng khống chế</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">4</td>
                      <td className="font-bold text-green-400">Cung Tà Ma</td>
                      <td>Giúp Violet hồi máu tức thì trong giao tranh (All-in lật kèo)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">5</td>
                      <td className="font-bold text-blue-400">Kiếm Muramasa</td>
                      <td>Xuyên giáp cực mạnh để trị các đấu sĩ và đỡ đòn địch</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">6</td>
                      <td className="font-bold text-purple-400">Giáp Hộ Mệnh</td>
                      <td>Mạng thứ hai quý giá trong giai đoạn cuối game căng thẳng</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <h4 className="font-bold text-yellow-500 mb-1">💡 Mẹo đổi đồ nhanh cuối game:</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Khi Giáp Hộ Mệnh đang trong thời gian hồi chiêu, hãy nhanh tay bán đi và thay thế bằng <strong>Liềm Đoạt Mệnh</strong> hoặc <strong>Nham Thuẫn</strong> để gia tăng tối đa khả năng sống sót trong giao tranh quyết định.
                </p>
              </div>
            </div>
          </div>

          {/* Combos */}
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
                🎮 Combo kỹ năng chuẩn cao thủ
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl space-y-2">
                  <h4 className="font-bold text-red-500">🔥 Combo 1: Cấu rỉa tầm xa</h4>
                  <p className="text-sm text-slate-300">
                    <strong>Chiêu 1 (Lộn bắn) ➔ Đánh thường ➔ Chiêu 2 (Lựu đạn) để làm chậm</strong>
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sử dụng liên tục trong giai đoạn đi đường để cấu rỉa máu xạ thủ địch từ ngoài tầm đánh thường của chúng.
                  </p>
                </div>
                <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-xl space-y-2">
                  <h4 className="font-bold text-orange-500">⚡ Combo 2: Dứt điểm nhanh (Burst Damage)</h4>
                  <p className="text-sm text-slate-300">
                    <strong>Chiêu 1 ➔ Đánh thường ➔ Chiêu 3 (Pháo Đại) ➔ Đánh thường</strong>
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Khi kẻ địch còn khoảng dưới 40% máu, combo này sẽ dồn một lượng sát thương chí mạng cực lớn khiến đối phương không kịp trở tay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="card bg-slate-900/40 border border-slate-800 backdrop-blur-sm rounded-2xl">
          <div className="card-body p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">📤 Chia sẻ cẩm nang này cho đồng đội</h3>
            <div className="flex justify-center flex-wrap gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/violet-build-guide-2025')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-sm btn-error text-white font-bold rounded-xl px-5">
                📘 Facebook
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent('https://www.lienquanhub.xyz/blog/violet-build-guide-2025')}&text=${encodeURIComponent('Hướng dẫn build Violet mùa 4 2025')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-sm btn-info text-white font-bold rounded-xl px-5">
                📱 Telegram
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
