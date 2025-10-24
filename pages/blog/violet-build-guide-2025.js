import Head from 'next/head';
import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function VioletGuide() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Hướng dẫn build Violet mùa 4 2025 - Liên Quân Hub</title>
        <meta name="description" content="Hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Violet hiệu quả nhất trong Liên Quân Mobile mùa 4 2025" />
        <meta name="keywords" content="Violet, Liên Quân Mobile, build đồ, combo skill, ADC, mùa 4 2025" />
        <meta property="og:title" content="Hướng dẫn build Violet mùa 4 2025" />
        <meta property="og:description" content="Hướng dẫn chi tiết cách build đồ và sử dụng Violet hiệu quả nhất" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/violet-build-guide-2025" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Hướng dẫn build Violet mùa 4 2025",
            "description": "Hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Violet hiệu quả nhất",
            "author": {
              "@type": "Organization",
              "name": "Liên Quân Hub"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Liên Quân Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.lienquanhub.xyz/logo.png"
              }
            },
            "datePublished": "2025-10-24",
            "dateModified": "2025-10-24",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.lienquanhub.xyz/blog/violet-build-guide-2025"
            }
          })
        }} />
      </Head>
      
      <NavBar />
      
      <main className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb */}
        <nav className="text-sm breadcrumbs mb-6">
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li>Hướng dẫn Violet</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="badge badge-primary mb-4">Guide Hero</div>
          <h1 className="text-4xl font-bold mb-4">Hướng dẫn build Violet mùa 4 2025</h1>
          <p className="text-xl text-base-content/70 mb-6">
            Từ cơ bản đến cao thủ - Cách sử dụng Violet hiệu quả nhất
          </p>
          <div className="flex items-center gap-4 text-sm text-base-content/60">
            <span>📅 24 tháng 10, 2025</span>
            <span>📖 8 phút đọc</span>
            <span>👁️ 1,234 lượt xem</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
            alt="Violet Liên Quân Mobile"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">🎯 Tổng quan về Violet</h2>
              <p className="text-base-content/80 leading-relaxed mb-4">
                Violet là một trong những ADC mạnh nhất hiện tại trong Liên Quân Mobile với khả năng gây sát thương cực cao và khả năng kiting xuất sắc. Với bộ kỹ năng đa dạng và linh hoạt, Violet có thể đảm nhận vai trò carry team một cách hiệu quả.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="stat bg-primary/10 rounded-lg p-4">
                  <div className="stat-title text-primary">Độ khó</div>
                  <div className="stat-value text-primary text-2xl">Trung bình</div>
                </div>
                <div className="stat bg-secondary/10 rounded-lg p-4">
                  <div className="stat-title text-secondary">Vị trí</div>
                  <div className="stat-value text-secondary text-2xl">ADC</div>
                </div>
                <div className="stat bg-accent/10 rounded-lg p-4">
                  <div className="stat-title text-accent">Tier</div>
                  <div className="stat-value text-accent text-2xl">S</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">⚔️ Build đồ tối ưu</h2>
              
              <h3 className="text-xl font-semibold mb-3">Build chính (Core Build)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Thứ tự</th>
                      <th>Tên trang bị</th>
                      <th>Lý do chọn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Warrior Boots</td>
                      <td>Tăng tốc độ di chuyển và khả năng sống sót</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Claves Sancti</td>
                      <td>Tăng sát thương và tốc độ đánh</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Bow of Slaughter</td>
                      <td>Tăng sát thương và khả năng hồi máu</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Blade of Eternity</td>
                      <td>Tăng sát thương và khả năng sống sót</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Fafnir's Talon</td>
                      <td>Tăng sát thương và khả năng xuyên giáp</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Fenrir's Tooth</td>
                      <td>Tăng sát thương và khả năng hạ gục</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3">Build thay thế</h3>
              <div className="alert alert-info">
                <div>
                  <h4 className="font-bold">Build chống pháp sư:</h4>
                  <p className="text-sm">Thay Blade of Eternity bằng Aegis để tăng khả năng chống phép</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">🎮 Combo kỹ năng</h2>
              
              <h3 className="text-xl font-semibold mb-3">Combo cơ bản</h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Combo 1: Poke từ xa</h4>
                  <p className="text-sm text-base-content/80">
                    <strong>Skill 1 → Auto Attack → Skill 2</strong><br/>
                    Sử dụng để poke đối thủ từ xa, gây sát thương mà không bị phản công
                  </p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h4 className="font-bold text-secondary mb-2">Combo 2: All-in</h4>
                  <p className="text-sm text-base-content/80">
                    <strong>Ultimate → Skill 1 → Auto Attack → Skill 2</strong><br/>
                    Combo toàn lực khi đối thủ đã bị hạ máu, đảm bảo hạ gục
                  </p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-bold text-accent mb-2">Combo 3: Kiting</h4>
                  <p className="text-sm text-base-content/80">
                    <strong>Auto Attack → Di chuyển → Skill 1 → Di chuyển</strong><br/>
                    Kỹ thuật kiting để duy trì khoảng cách và gây sát thương liên tục
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">💡 Tips và chiến thuật</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Giai đoạn đầu game</h3>
                  <ul className="list-disc list-inside space-y-2 text-base-content/80">
                    <li>Tập trung farm minion để có gold và kinh nghiệm</li>
                    <li>Sử dụng Skill 1 để poke đối thủ và clear wave</li>
                    <li>Luôn giữ khoảng cách an toàn với đối thủ</li>
                    <li>Ưu tiên mua Warrior Boots đầu tiên</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Giai đoạn giữa game</h3>
                  <ul className="list-disc list-inside space-y-2 text-base-content/80">
                    <li>Tham gia các team fight với vị trí an toàn</li>
                    <li>Sử dụng Ultimate để hạ gục đối thủ quan trọng</li>
                    <li>Luôn có vision control để tránh bị gank</li>
                    <li>Ưu tiên mua Claves Sancti và Bow of Slaughter</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Giai đoạn cuối game</h3>
                  <ul className="list-disc list-inside space-y-2 text-base-content/80">
                    <li>Luôn ở phía sau team trong team fight</li>
                    <li>Sử dụng kỹ thuật kiting để duy trì khoảng cách</li>
                    <li>Ưu tiên hạ gục ADC và mage của đối thủ</li>
                    <li>Tham gia push tower và Baron/Dragon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">⚠️ Lưu ý quan trọng</h2>
              
              <div className="space-y-4">
                <div className="alert alert-warning">
                  <div>
                    <h4 className="font-bold">Điểm yếu của Violet:</h4>
                    <ul className="text-sm mt-2">
                      <li>• Không có khả năng escape tốt</li>
                      <li>• Dễ bị gank nếu không có vision</li>
                      <li>• Cần thời gian để scale</li>
                    </ul>
                  </div>
                </div>
                
                <div className="alert alert-error">
                  <div>
                    <h4 className="font-bold">Tướng counter Violet:</h4>
                    <ul className="text-sm mt-2">
                      <li>• Nakroth (khả năng gap close)</li>
                      <li>• Zuka (burst damage cao)</li>
                      <li>• Murad (khả năng assassinate)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">📚 Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/blog/meta-analysis-season-4" className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body p-4">
                  <h3 className="font-bold">Phân tích Meta mùa 4 2025</h3>
                  <p className="text-sm text-base-content/70">Top tướng và chiến thuật hiện tại</p>
                </div>
              </Link>
              <Link href="/blog/rank-up-tips-diamond" className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body p-4">
                  <h3 className="font-bold">Bí quyết leo rank từ Vàng lên Kim Cương</h3>
                  <p className="text-sm text-base-content/70">Chiến thuật thực chiến từ cao thủ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body text-center">
            <h3 className="card-title text-xl justify-center mb-4">📤 Chia sẻ bài viết</h3>
            <div className="flex justify-center gap-4">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/violet-build-guide-2025')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-primary">
                📘 Facebook
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent('https://www.lienquanhub.xyz/blog/violet-build-guide-2025')}&text=${encodeURIComponent('Hướng dẫn build Violet mùa 4 2025')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-info">
                📱 Telegram
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.lienquanhub.xyz/blog/violet-build-guide-2025')}&text=${encodeURIComponent('Hướng dẫn build Violet mùa 4 2025')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-success">
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
