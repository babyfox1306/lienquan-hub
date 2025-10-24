import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Tuyên bố miễn trừ - Liên Quân Hub</title>
        <meta name="description" content="Tuyên bố miễn trừ trách nhiệm của Liên Quân Hub" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/disclaimer" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="hero bg-base-100 rounded-xl shadow-lg mb-8">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Tuyên bố miễn trừ</h1>
              <p className="text-lg text-base-content/70">
                Cập nhật lần cuối: 24 tháng 10, 2025
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">⚠️ Tuyên bố chung</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Thông tin trên website Liên Quân Hub (www.lienquanhub.xyz) được cung cấp 
                  với mục đích giáo dục và giải trí. Chúng tôi không đảm bảo tính chính xác 
                  tuyệt đối của mọi thông tin được trình bày.
                </p>
                <p>
                  Người dùng sử dụng thông tin trên website này hoàn toàn tự chịu trách nhiệm 
                  và rủi ro của riêng mình.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">🎮 Về nội dung game</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>Liên Quân Mobile:</strong> Game thuộc bản quyền của Garena và Tencent. 
                  Chúng tôi không tuyên bố sở hữu hoặc liên kết chính thức với game này.
                </p>
                <p>
                  <strong>Hướng dẫn và tips:</strong> Các hướng dẫn được chia sẻ dựa trên kinh nghiệm 
                  cá nhân và nghiên cứu từ cộng đồng. Hiệu quả có thể khác nhau tùy theo từng người chơi.
                </p>
                <p>
                  <strong>Meta game:</strong> Thông tin về meta game có thể thay đổi theo các bản cập nhật. 
                  Chúng tôi cố gắng cập nhật thường xuyên nhưng không đảm bảo luôn chính xác 100%.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">📺 Về nội dung video</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>Video YouTube:</strong> Các video được embed từ YouTube thuộc bản quyền 
                  của các creator tương ứng. Chúng tôi chỉ tổng hợp và chia sẻ, không tuyên bố sở hữu.
                </p>
                <p>
                  <strong>Fair Use:</strong> Việc sử dụng video được thực hiện theo nguyên tắc fair use 
                  với mục đích giáo dục và chia sẻ thông tin.
                </p>
                <p>
                  <strong>Nội dung bên thứ ba:</strong> Chúng tôi không chịu trách nhiệm về nội dung 
                  của các video từ bên thứ ba.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">💰 Về quảng cáo và thu nhập</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>Google AdSense:</strong> Website có thể hiển thị quảng cáo từ Google AdSense 
                  để duy trì hoạt động. Chúng tôi không kiểm soát nội dung quảng cáo.
                </p>
                <p>
                  <strong>Affiliate links:</strong> Một số link có thể là affiliate links. 
                  Chúng tôi sẽ ghi rõ khi có affiliate relationship.
                </p>
                <p>
                  <strong>Miễn phí:</strong> Tất cả nội dung trên website được cung cấp miễn phí 
                  cho người dùng.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">🔒 Về bảo mật và riêng tư</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>Thông tin cá nhân:</strong> Chúng tôi không thu thập thông tin cá nhân 
                  nhạy cảm. Xem chi tiết tại <a href="/privacy" className="link link-primary">Chính sách bảo mật</a>.
                </p>
                <p>
                  <strong>Cookies:</strong> Website sử dụng cookies để cải thiện trải nghiệm người dùng. 
                  Bạn có thể tắt cookies trong trình duyệt.
                </p>
                <p>
                  <strong>Bảo mật:</strong> Chúng tôi áp dụng các biện pháp bảo mật phù hợp nhưng 
                  không đảm bảo 100% an toàn tuyệt đối.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">⚖️ Giới hạn trách nhiệm</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Chúng tôi không chịu trách nhiệm về:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Thiệt hại do sử dụng thông tin trên website</li>
                  <li>Gián đoạn dịch vụ do lỗi kỹ thuật hoặc bảo trì</li>
                  <li>Nội dung từ các website liên kết bên ngoài</li>
                  <li>Thay đổi chính sách của các nền tảng bên thứ ba</li>
                  <li>Hành động của người dùng dựa trên thông tin từ website</li>
                  <li>Kết quả game hoặc ranking của người dùng</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">📞 Liên hệ</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Nếu bạn có câu hỏi về tuyên bố miễn trừ này, vui lòng liên hệ:
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <p><strong>Email:</strong> contact@lienquanhub.xyz</p>
                  <p><strong>Telegram:</strong> @lienquanhub</p>
                  <p><strong>Website:</strong> www.lienquanhub.xyz</p>
                </div>
                <p className="text-sm text-base-content/60">
                  Bằng việc sử dụng website này, bạn đồng ý với tuyên bố miễn trừ này.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
