import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Liên hệ - Liên Quân Hub</title>
        <meta name="description" content="Liên hệ với Liên Quân Hub để góp ý, báo lỗi hoặc hợp tác" />
        <meta name="keywords" content="liên hệ, contact, Liên Quân Hub, góp ý, báo lỗi" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/contact" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="hero bg-base-100 rounded-xl shadow-lg mb-8">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h1>
              <p className="text-lg text-base-content/70">
                Chúng tôi luôn sẵn sàng lắng nghe ý kiến và hỗ trợ bạn
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">📧 Thông tin liên hệ</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  <div>
                    <p className="font-semibold">Telegram Channel</p>
                    <a href="https://t.me/lienquanhub" target="_blank" rel="noopener noreferrer" 
                       className="text-primary hover:underline">
                      @lienquanhub
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@lienquanhub.xyz" className="text-primary hover:underline">
                      contact@lienquanhub.xyz
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🌐</span>
                  <div>
                    <p className="font-semibold">Website</p>
                    <a href="https://www.lienquanhub.xyz" className="text-primary hover:underline">
                      www.lienquanhub.xyz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">💬 Các cách liên hệ</h2>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">📱 Telegram (Khuyến nghị)</h3>
                  <p className="text-sm text-base-content/80">
                    Phản hồi nhanh nhất, phù hợp cho góp ý và báo lỗi
                  </p>
                  <a href="https://t.me/lienquanhub" target="_blank" rel="noopener noreferrer" 
                     className="btn btn-primary btn-sm mt-2">
                    Tham gia ngay
                  </a>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="font-bold text-secondary mb-2">📧 Email</h3>
                  <p className="text-sm text-base-content/80">
                    Phù hợp cho các vấn đề chính thức và hợp tác
                  </p>
                  <a href="mailto:contact@lienquanhub.xyz" className="btn btn-secondary btn-sm mt-2">
                    Gửi email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">❓ Câu hỏi thường gặp</h2>
            <div className="space-y-6">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="faq" />
                <div className="collapse-title text-lg font-medium">
                  Làm sao để đóng góp nội dung cho website?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80">
                    Bạn có thể liên hệ qua Telegram hoặc email để đề xuất nội dung. 
                    Chúng tôi đánh giá cao mọi đóng góp từ cộng đồng!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="faq" />
                <div className="collapse-title text-lg font-medium">
                  Website có thu phí không?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80">
                    Hoàn toàn miễn phí! Chúng tôi cam kết cung cấp nội dung chất lượng 
                    miễn phí cho tất cả game thủ Việt Nam.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="faq" />
                <div className="collapse-title text-lg font-medium">
                    Làm sao để báo lỗi hoặc góp ý?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80">
                    Bạn có thể báo lỗi qua Telegram (@lienquanhub) hoặc email. 
                    Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body text-center">
            <h2 className="card-title text-2xl mb-4 justify-center">🤝 Hợp tác</h2>
            <p className="text-base-content/80 mb-4">
              Bạn có ý tưởng hợp tác hoặc muốn quảng bá sản phẩm/dịch vụ liên quan đến Liên Quân Mobile? 
              Chúng tôi sẵn sàng lắng nghe!
            </p>
            <a href="mailto:contact@lienquanhub.xyz" className="btn btn-primary">
              📧 Liên hệ hợp tác
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
