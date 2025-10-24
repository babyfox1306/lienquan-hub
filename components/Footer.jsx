import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Liên Quân Hub</h3>
            <p className="text-sm text-base-content/70 mb-4">
              Cộng đồng chia sẻ kiến thức và kinh nghiệm chơi Liên Quân Mobile hàng đầu Việt Nam
            </p>
            <div className="flex justify-center md:justify-start gap-2">
              <a href="https://t.me/lienquanhub" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-primary btn-sm">
                📱 Telegram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Nội dung</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="link link-hover">Video</Link></li>
              <li><Link href="/news" className="link link-hover">Tin tức</Link></li>
              <li><Link href="/blog" className="link link-hover">Blog & Hướng dẫn</Link></li>
              <li><Link href="/about" className="link link-hover">Giới thiệu</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="link link-hover">Liên hệ</Link></li>
              <li><a href="mailto:contact@lienquanhub.xyz" className="link link-hover">Email hỗ trợ</a></li>
              <li><a href="https://t.me/lienquanhub" target="_blank" rel="noopener noreferrer" className="link link-hover">Telegram</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Pháp lý</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="link link-hover">Chính sách bảo mật</Link></li>
              <li><Link href="/terms" className="link link-hover">Điều khoản sử dụng</Link></li>
              <li><Link href="/disclaimer" className="link link-hover">Tuyên bố miễn trừ</Link></li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Liên Quân Hub. Tất cả quyền được bảo lưu.
          </div>
          <div className="text-sm text-base-content/60">
            Liên Quân Mobile thuộc bản quyền của Garena và Tencent
          </div>
        </div>
      </div>
    </footer>
  );
}
