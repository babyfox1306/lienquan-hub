import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Blog_11() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Yena có sợ khống chế cứng không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ở dạng Đại Đao, khi đang tung các chiêu thức tích lực, Yena được tăng 50% miễn thương và hoàn toàn miễn khống chế vô cùng mạnh mẽ."
      }
    },
    {
      "@type": "Question",
      "name": "Làm sao kích hoạt câm lặng nhanh nhất?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ném chiêu 2 chuẩn xác làm chậm mục tiêu rồi lập tức lướt chiêu 1 hai lần qua người địch kết hợp đánh thường xen kẽ."
      }
    },
    {
      "@type": "Question",
      "name": "Bảng ngọc khuyên dùng cho Yena đi top?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Đỏ công vật lý/xuyên giáp, Tím công vật lý/tốc chạy và Lục công vật lý/xuyên giáp để tối đa hóa lượng xuyên giáp đầu trận."
      }
    }
  ]
};

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Build Yena S2 2026 - Combo Skill Đỉnh Cao - Liên Quân Hub</title>
        <meta name="description" content="Hướng dẫn chi tiết cách chơi, bộ trang bị và combo 7 chiêu thức ảo diệu cho đấu sĩ Yena solo đường Tà Thần mùa S2 2026." />
        <meta name="keywords" content="Build yena s2 2026, combo yena 7 chieu, cach choi yena, len do yena" />
        <meta property="og:title" content="Build Yena S2 2026 - Combo Skill Đỉnh Cao" />
        <meta property="og:description" content="Hướng dẫn chi tiết cách chơi, bộ trang bị và combo 7 chiêu thức ảo diệu cho đấu sĩ Yena solo đường Tà Thần mùa S2 2026." />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-05-18" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/yena-build-s2-2026" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
            <li className="text-slate-200 font-bold">Cẩm Nang</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="badge badge-error text-white font-black px-2.5 py-1 text-xs uppercase">
            Cẩm Nang
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Build Yena S2 2026 - Combo Skill Đỉnh Cao
          </h1>
          <p className="text-lg sm:text-xl text-slate-400">
            Hướng dẫn chi tiết cách chơi, bộ trang bị và combo 7 chiêu thức ảo diệu cho đấu sĩ Yena solo đường Tà Thần mùa S2 2026.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
            <span>📅 18 tháng 5, 2026</span>
            <span>⏱️ 11 phút đọc</span>
            <span>👁️ 2,540 lượt xem</span>
          </div>
        </div>

        
          <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mb-4">
              ⚔️ Yena Vũ Nữ Diệt Vong - Sát thủ đấu sĩ ảo diệu bậc nhất đường solo
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Chào mừng anh em game thủ đã quay trở lại với Liên Quân Hub! Nếu bạn đang tìm kiếm một đấu sĩ đi top có độ cơ động, lượng khống chế câm lặng khó chịu cùng lượng sát thương bùng nổ giao tranh cực mạnh thì <Link href="/tuong/yena" className="text-red-400 hover:underline">Yena</Link> chính là sự lựa chọn hoàn hảo nhất mùa giải S2 2026 này. Với khả năng chuyển đổi linh hoạt giữa dạng Luân Đao (nhanh nhẹn) và Đại Đao (chống chịu trâu bò), Yena có thể gánh team cực lực nếu rơi vào tay cao thủ. Cùng tìm hiểu cẩm nang **Build Yena S2 2026** và combo 7 chiêu thức bất bại dưới đây.
            </p>
            
            <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mt-8 mb-4">
              👑 Bộ trang bị công thủ toàn diện cho Yena solo Tà Thần
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Để Yena tự tin băng xả vào giữa đội hình đối phương mà không sợ bốc hơi nhanh, bộ trang bị nửa công nửa thủ dưới đây là tối ưu nhất:
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div><strong>1. Giày Kiên Cường</strong> (Kháng khống chế cực kỳ quan trọng)</div>
              <div><strong>2. Thương Longinus</strong> (Xuyên giáp + 15% giảm hồi chiêu nhanh)</div>
              <div><strong>3. Phức Hợp Kiếm</strong> (Gia tăng đòn đánh thường cường hóa)</div>
              <div><strong>4. Nanh Fenrir</strong> (Công vật lý cực lớn hạ gục mục tiêu thấp máu)</div>
              <div><strong>5. Huân Chương Troy</strong> (Giáp phép khổng lồ chống lại pháp sư địch)</div>
              <div><strong>6. Nanh Fenrir / Giáp Hộ Mệnh</strong> (Lớp bảo hiểm an toàn cuối trận)</div>
            </div>

            <h2 className="text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3 mt-8 mb-4">
              ⚡ Hướng dẫn combo 7 chiêu thức câm lặng bắt chết xạ thủ đối phương
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              Combo Yena đòi hỏi sự phối hợp nhịp nhàng và chuẩn xác để kích hoạt nội tại câm lặng ở dạng Luân Đao trước khi chuyển sang Đại Đao dồn sát thương:
            </p>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <p><strong>Bước 1:</strong> (Dạng Luân Đao) Dùng Chiêu 1 lướt qua lính hoặc tướng địch tiếp cận mục tiêu.</p>
              <p><strong>Bước 2:</strong> Ném Chiêu 2 (Luân Đao) để làm chậm đối phương liên tục.</p>
              <p><strong>Bước 3:</strong> Lướt tiếp Chiêu 1 lần thứ hai và đánh thường để kích hoạt câm lặng cướp quyền phản kháng của địch.</p>
              <p><strong>Bước 4:</strong> Kích hoạt Chiêu Cuối chuyển sang dạng Đại Đao gây sát thương xung quanh.</p>
              <p><strong>Bước 5:</strong> Dùng Chiêu 2 (Đại Đao) đẩy lùi liên tục khống chế kẻ địch vào tường.</p>
              <p><strong>Bước 6:</strong> Tung Chiêu 1 (Đại Đao) tích tụ lực chém sấm sét dứt điểm mục tiêu chớp nhoáng.</p>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Tham khảo thêm các đấu sĩ đi top khác tại bài viết chuyên sâu <Link href="/blog/top-tuong-ta-than-s2-2026" className="text-red-400 hover:underline">Top tướng Tà Thần mạnh nhất</Link> hoặc xem các bài viết về <Link href="/tuong/zata" className="text-red-400 hover:underline">Zata</Link> để chuẩn bị chiến thuật leo rank nhé!
            </p>
          </div>
        

        {/* Social Share */}
        <div className="card bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl">
          <div className="card-body p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-lg font-bold text-white">📤 Chia sẻ cẩm nang cho đồng đội</h3>
            <div className="flex justify-center flex-wrap gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/yena-build-s2-2026')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-sm btn-error text-white font-bold rounded-xl px-5">
                📘 Facebook
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent('https://www.lienquanhub.xyz/blog/yena-build-s2-2026')}&text=${encodeURIComponent('Build Yena S2 2026 - Combo Skill Đỉnh Cao')}`} 
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
