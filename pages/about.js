import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function About() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Giới thiệu - Liên Quân Hub</title>
        <meta name="description" content="Liên Quân Hub là cộng đồng chia sẻ guide, tip chơi Liên Quân Mobile miễn phí cho game thủ Việt Nam" />
        <meta name="keywords" content="Liên Quân Mobile, Arena of Valor, guide, tip, cộng đồng game thủ Việt" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/about" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="hero bg-base-100 rounded-xl shadow-lg mb-8">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Giới thiệu Liên Quân Hub</h1>
              <p className="text-lg text-base-content/70">
                Cộng đồng chia sẻ kiến thức và kinh nghiệm chơi Liên Quân Mobile hàng đầu Việt Nam
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">🎯 Mục tiêu</h2>
              <p className="text-base-content/80 leading-relaxed">
                Liên Quân Hub được tạo ra với mục tiêu trở thành nền tảng chia sẻ kiến thức 
                và kinh nghiệm chơi Liên Quân Mobile hàng đầu tại Việt Nam. Chúng tôi cung cấp 
                các guide chi tiết, tips rank up, phân tích meta game và highlight hay nhất 
                để giúp game thủ Việt Nam nâng cao kỹ năng và tận hưởng trò chơi một cách tốt nhất.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">💡 Giá trị cốt lõi</h2>
              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Nội dung chất lượng, được kiểm chứng và cập nhật thường xuyên</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Cộng đồng thân thiện, hỗ trợ lẫn nhau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Hoàn toàn miễn phí cho tất cả game thủ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Tập trung vào game thủ Việt Nam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">📚 Nội dung chúng tôi cung cấp</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="font-bold text-lg mb-2">Guide Hero</h3>
                <p className="text-sm text-base-content/70">
                  Hướng dẫn chi tiết cách chơi từng tướng, build đồ, combo skill
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="font-bold text-lg mb-2">Tips Rank Up</h3>
                <p className="text-sm text-base-content/70">
                  Kinh nghiệm leo rank, phân tích meta game, chiến thuật team fight
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎬</div>
                <h3 className="font-bold text-lg mb-2">Highlight</h3>
                <p className="text-sm text-base-content/70">
                  Tổng hợp những pha highlight hay nhất từ các cao thủ
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">🤝 Tham gia cộng đồng</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/lienquanhub" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-primary">
                📱 Telegram Channel
              </a>
              <a href="/contact" className="btn btn-outline">
                📧 Liên hệ với chúng tôi
              </a>
            </div>
            <p className="text-center text-base-content/60 mt-4">
              Cảm ơn bạn đã tin tưởng và đồng hành cùng Liên Quân Hub!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
