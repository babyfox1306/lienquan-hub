import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Terms() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Điều khoản sử dụng - Liên Quân Hub</title>
        <meta name="description" content="Điều khoản và điều kiện sử dụng website Liên Quân Hub" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/terms" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="hero bg-base-100 rounded-xl shadow-lg mb-8">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Điều khoản sử dụng</h1>
              <p className="text-lg text-base-content/70">
                Cập nhật lần cuối: 24 tháng 10, 2025
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">1. Chấp nhận điều khoản</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Bằng việc truy cập và sử dụng website Liên Quân Hub (www.lienquanhub.xyz), 
                  bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu trong tài liệu này.
                </p>
                <p>
                  Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng website này.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">2. Mô tả dịch vụ</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Liên Quân Hub là website cung cấp:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Hướng dẫn và tips chơi game Liên Quân Mobile</li>
                  <li>Tổng hợp video highlight và gameplay</li>
                  <li>Tin tức và cập nhật về game</li>
                  <li>Cộng đồng chia sẻ kinh nghiệm</li>
                </ul>
                <p>
                  Tất cả dịch vụ được cung cấp <strong>miễn phí</strong> cho người dùng.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">3. Quyền và nghĩa vụ của người dùng</h2>
              <div className="space-y-4 text-base-content/80">
                <h3 className="text-lg font-semibold">Bạn có quyền:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Truy cập và sử dụng nội dung miễn phí</li>
                  <li>Chia sẻ nội dung với ghi rõ nguồn</li>
                  <li>Góp ý và phản hồi về chất lượng dịch vụ</li>
                  <li>Yêu cầu hỗ trợ khi gặp vấn đề</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6">Bạn cam kết:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Không sử dụng website cho mục đích bất hợp pháp</li>
                  <li>Không spam, hack hoặc tấn công website</li>
                  <li>Không sao chép nội dung mà không ghi rõ nguồn</li>
                  <li>Tôn trọng quyền sở hữu trí tuệ của bên thứ ba</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">4. Bản quyền và sở hữu trí tuệ</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  <strong>Nội dung gốc:</strong> Tất cả nội dung do Liên Quân Hub tạo ra 
                  (bài viết, hướng dẫn, phân tích) thuộc bản quyền của chúng tôi.
                </p>
                <p>
                  <strong>Nội dung từ bên thứ ba:</strong> Video và hình ảnh từ YouTube, 
                  các nguồn tin tức được sử dụng theo nguyên tắc fair use và có ghi rõ nguồn.
                </p>
                <p>
                  <strong>Liên Quân Mobile:</strong> Game Liên Quân Mobile thuộc bản quyền của 
                  Garena và Tencent. Chúng tôi không tuyên bố sở hữu game này.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">5. Miễn trừ trách nhiệm</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Chúng tôi không chịu trách nhiệm về:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Thiệt hại do sử dụng thông tin trên website</li>
                  <li>Gián đoạn dịch vụ do lỗi kỹ thuật hoặc bảo trì</li>
                  <li>Nội dung từ các website liên kết bên ngoài</li>
                  <li>Thay đổi chính sách của các nền tảng bên thứ ba (YouTube, Google)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">6. Quảng cáo và thu nhập</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Website có thể hiển thị quảng cáo từ Google AdSense để duy trì hoạt động. 
                  Chúng tôi cam kết:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Quảng cáo phù hợp với nội dung và đối tượng</li>
                  <li>Không spam hoặc quảng cáo quá mức</li>
                  <li>Tuân thủ chính sách của Google AdSense</li>
                  <li>Không thu phí người dùng</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-6">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">7. Thay đổi điều khoản</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Chúng tôi có quyền cập nhật điều khoản này bất kỳ lúc nào. 
                  Người dùng sẽ được thông báo về các thay đổi quan trọng.
                </p>
                <p>
                  Việc tiếp tục sử dụng website sau khi có thay đổi được coi là 
                  chấp nhận điều khoản mới.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">8. Liên hệ và giải quyết tranh chấp</h2>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Mọi tranh chấp sẽ được giải quyết thông qua đối thoại và thương lượng. 
                  Nếu không thể giải quyết, sẽ áp dụng pháp luật Việt Nam.
                </p>
                <div className="bg-base-200 p-4 rounded-lg">
                  <p><strong>Thông tin liên hệ:</strong></p>
                  <p>Email: contact@lienquanhub.xyz</p>
                  <p>Telegram: @lienquanhub</p>
                  <p>Website: www.lienquanhub.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
