import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AzzenkaGuide() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Hướng dẫn Azzen'ka mùa 4 2025 - Liên Quân Hub</title>
        <meta name="description" content="Hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Azzen'ka hiệu quả nhất trong Liên Quân Mobile mùa 4 2025" />
        <meta name="keywords" content="Azzenka, Liên Quân Mobile, build đồ, combo skill, Mage, mùa 4 2025" />
        <meta property="og:title" content="Hướng dẫn Azzen'ka mùa 4 2025" />
        <meta property="og:description" content="Hướng dẫn chi tiết cách build đồ và sử dụng Azzen'ka hiệu quả nhất" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/azzenka-guide-2025" />
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
            <li className="text-slate-200 font-semibold">Hướng dẫn Azzen'ka</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="badge badge-error text-white font-bold px-2.5 py-1 text-xs uppercase">
            Guide Hero
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Hướng dẫn Azzen'ka mùa 4 2025 - Tướng mới mạnh nhất hiện tại
          </h1>
          <p className="text-lg sm:text-xl text-slate-400">
            Khống chế đỉnh cao, sốc sát thương phép cực khủng gánh team pháp sư đường giữa!
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
            <span>📅 24 tháng 10, 2025</span>
            <span>⏱️ 12 phút đọc</span>
            <span>👁️ 2,541 lượt xem</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 aspect-[16/9] relative">
          <img 
            src="https://i.ytimg.com/vi/7yZ7omLy0YQ/maxresdefault.jpg" 
            alt="Azzenka Liên Quân Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-8">
          {/* Overview */}
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
            <div className="card-body p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
                🎯 Tổng quan về U Hồn Sa Mạc
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Azzen'ka sau khi được làm lại đã trở thành một thế lực thực sự tại Đường Giữa (Mid Lane) với khả năng gây khống chế liên tục trên diện rộng và dọn lính siêu tốc. Bộ kỹ năng của Azzen'ka cực kỳ đáng sợ trong các pha giao tranh tổng ở không gian hẹp nhờ chiêu cuối làm chậm và hóa đá liên tục.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Độ khó</div>
                  <div className="text-xl font-bold text-red-500 mt-1">Dễ</div>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Vị trí</div>
                  <div className="text-xl font-bold text-orange-500 mt-1">Pháp Sư (Mid)</div>
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
                ⚔️ Trang bị khuyến nghị tối ưu
              </h2>
              
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60 mb-6">
                <table className="table table-zebra w-full text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-800 text-white font-bold bg-slate-900/40">
                      <th>Thứ tự</th>
                      <th>Trang bị</th>
                      <th>Tác dụng chính</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">1</td>
                      <td className="font-bold text-red-400">Giày Phù Thủy</td>
                      <td>Tăng lượng xuyên giáp phép đầu game để cấu rỉa tốt hơn</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">2</td>
                      <td className="font-bold text-orange-400">Trượng Bùng Nổ</td>
                      <td>Sát thương phép lan mạnh mẽ khi dùng chiêu trúng kẻ địch</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">3</td>
                      <td className="font-bold text-yellow-400">Vương Miện Hecate</td>
                      <td>Trang bị cốt lõi nhân tối đa sát thương phép thuật</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">4</td>
                      <td className="font-bold text-green-400">Sách Truy Hồn</td>
                      <td>Giảm khả năng hồi máu của xạ thủ/đấu sĩ địch cực kỳ hiệu quả</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">5</td>
                      <td className="font-bold text-blue-400">Trượng Hỗn Mang</td>
                      <td>Xuyên giáp phép tối đa để xuyên thủng giáp ma pháp của đấu sĩ địch</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="font-bold text-slate-500">6</td>
                      <td className="font-bold text-purple-400">Quả Cầu Băng Sương</td>
                      <td>Cứu cánh tránh bị sát thủ địch dồn sát thương sốc chết</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="card bg-slate-900/40 border border-slate-800 backdrop-blur-sm rounded-2xl">
          <div className="card-body p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">📤 Chia sẻ cẩm nang cho bạn bè</h3>
            <div className="flex justify-center flex-wrap gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/azzenka-guide-2025')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-sm btn-error text-white font-bold rounded-xl px-5">
                📘 Facebook
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent('https://www.lienquanhub.xyz/blog/azzenka-guide-2025')}&text=${encodeURIComponent("Hướng dẫn build Azzen'ka mùa 4 2025")}`} 
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
