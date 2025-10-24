import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Chính sách bảo mật - Liên Quân Hub</title>
        <meta name="description" content="Chính sách bảo mật và quyền riêng tư của Liên Quân Hub" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/privacy" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="hero bg-base-100 rounded-xl shadow-lg mb-8">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Chính sách bảo mật</h1>
              <p className="text-lg text-base-content/70">
                Cập nhật lần cuối: 24 tháng 10, 2025
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">1. Thông tin chúng tôi thu thập</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>Thông tin không cá nhân:</strong> Chúng tôi có thể thu thập thông tin không cá nhân 
                  như địa chỉ IP, loại trình duyệt, hệ điều hành để cải thiện trải nghiệm người dùng.
                </p>
                <p>
                  <strong>Cookies:</strong> Website sử dụng cookies để lưu trữ tùy chọn giao diện 
                  (dark/light mode) và cải thiện hiệu suất.
                </p>
                <p>
                  <strong>Thông tin từ Google Analytics:</strong> Chúng tôi sử dụng Google Analytics 
                  để phân tích lưu lượng truy cập và hành vi người dùng.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">2. Cách sử dụng thông tin</h2>
              <div className="space-y-4 text-base-content/80">
                <ul className="list-disc list-inside space-y-2">
                  <li>Cải thiện chất lượng nội dung và trải nghiệm người dùng</li>
                  <li>Phân tích xu hướng và sở thích của cộng đồng</li>
                  <li>Đảm bảo bảo mật và ngăn chặn lạm dụng</li>
                  <li>Cung cấp dịch vụ quảng cáo phù hợp (Google AdSense)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">3. Chia sẻ thông tin</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Chúng tôi <strong>KHÔNG</strong> bán, cho thuê hoặc chia sẻ thông tin cá nhân 
                  của bạn với bên thứ ba, trừ các trường hợp sau:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Khi có yêu cầu từ cơ quan pháp luật</li>
                  <li>Để bảo vệ quyền và tài sản của chúng tôi</li>
                  <li>Với Google AdSense để hiển thị quảng cáo phù hợp</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">4. Bảo mật thông tin</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Chúng tôi áp dụng các biện pháp bảo mật phù hợp để bảo vệ thông tin của bạn:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sử dụng HTTPS để mã hóa dữ liệu truyền tải</li>
                  <li>Không lưu trữ thông tin cá nhân nhạy cảm</li>
                  <li>Thường xuyên cập nhật và vá lỗ hổng bảo mật</li>
                  <li>Tuân thủ các tiêu chuẩn bảo mật của Google AdSense</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">5. Quyền của bạn</h2>
              <div className="space-y-4 text-base-content/80">
                <p>Bạn có quyền:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Truy cập và yêu cầu chỉnh sửa thông tin cá nhân</li>
                  <li>Yêu cầu xóa thông tin cá nhân</li>
                  <li>Từ chối việc thu thập cookies (có thể ảnh hưởng đến trải nghiệm)</li>
                  <li>Liên hệ với chúng tôi để giải quyết các vấn đề về quyền riêng tư</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">6. Thay đổi chính sách</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. 
                  Mọi thay đổi sẽ được thông báo trên website và có hiệu lực ngay lập tức.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">7. Liên hệ</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Nếu bạn có câu hỏi về chính sách bảo mật này, vui lòng liên hệ:
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <p><strong>Email:</strong> contact@lienquanhub.xyz</p>
                  <p><strong>Telegram:</strong> @lienquanhub</p>
                  <p><strong>Website:</strong> www.lienquanhub.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
