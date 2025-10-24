import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Link from 'next/link';

export default function MetaAnalysis() {
  return (
    <div className="min-h-screen bg-base-200">
      <Head>
        <title>Phân tích Meta mùa 4 2025 - Liên Quân Hub</title>
        <meta name="description" content="Phân tích chi tiết meta game mùa 4 2025, top tướng mạnh nhất, combo đội hình hiệu quả và xu hướng meta hiện tại trong Liên Quân Mobile" />
        <meta name="keywords" content="meta game, mùa 4 2025, Liên Quân Mobile, top tướng, combo đội hình, tier list" />
        <meta property="og:title" content="Phân tích Meta mùa 4 2025" />
        <meta property="og:description" content="Phân tích chi tiết meta game và top tướng mạnh nhất" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog/meta-analysis-season-4" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Phân tích Meta mùa 4 2025",
            "description": "Phân tích chi tiết meta game mùa 4 2025",
            "author": {
              "@type": "Organization",
              "name": "Liên Quân Hub"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Liên Quân Hub"
            },
            "datePublished": "2025-10-24",
            "dateModified": "2025-10-24"
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
            <li>Phân tích Meta</li>
          </ul>
        </nav>

        {/* Article Header */}
        <div className="mb-8">
          <div className="badge badge-primary mb-4">Meta Game</div>
          <h1 className="text-4xl font-bold mb-4">Phân tích Meta mùa 4 2025</h1>
          <p className="text-xl text-base-content/70 mb-6">
            Top tướng mạnh nhất và xu hướng meta hiện tại
          </p>
          <div className="flex items-center gap-4 text-sm text-base-content/60">
            <span>📅 24 tháng 10, 2025</span>
            <span>📖 15 phút đọc</span>
            <span>👁️ 3,421 lượt xem</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="https://i.ytimg.com/vi/Ksvv3l9Bikg/maxresdefault.jpg" 
            alt="Meta Game Liên Quân Mobile mùa 4"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose max-w-none">
          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">🎯 Tổng quan Meta mùa 4</h2>
              <p className="text-base-content/80 leading-relaxed mb-4">
                Mùa 4 2025 mang đến nhiều thay đổi lớn trong meta game với sự xuất hiện của các tướng mới như Azzen'ka và Brian. Meta hiện tại thiên về team fight và khống chế, với các tướng có khả năng gây sát thương cao và khả năng sống sót tốt đang thống trị.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="stat bg-primary/10 rounded-lg p-4">
                  <div className="stat-title text-primary">Meta Style</div>
                  <div className="stat-value text-primary text-lg">Team Fight</div>
                </div>
                <div className="stat bg-secondary/10 rounded-lg p-4">
                  <div className="stat-title text-secondary">Strongest Role</div>
                  <div className="stat-value text-secondary text-lg">Mage</div>
                </div>
                <div className="stat bg-accent/10 rounded-lg p-4">
                  <div className="stat-title text-accent">Game Length</div>
                  <div className="stat-value text-accent text-lg">15-20min</div>
                </div>
                <div className="stat bg-info/10 rounded-lg p-4">
                  <div className="stat-title text-info">Priority</div>
                  <div className="stat-value text-info text-lg">Control</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">🏆 Tier List mùa 4</h2>
              
              <h3 className="text-xl font-semibold mb-3">S+ Tier (Must Pick)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="card bg-gradient-to-br from-red-500 to-red-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">🧙‍♀️</div>
                    <h4 className="font-bold">Azzen'ka</h4>
                    <p className="text-xs">Mage/Support</p>
                  </div>
                </div>
                <div className="card bg-gradient-to-br from-red-500 to-red-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">⚔️</div>
                    <h4 className="font-bold">Brian</h4>
                    <p className="text-xs">Fighter</p>
                  </div>
                </div>
                <div className="card bg-gradient-to-br from-red-500 to-red-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">🏹</div>
                    <h4 className="font-bold">Violet</h4>
                    <p className="text-xs">ADC</p>
                  </div>
                </div>
                <div className="card bg-gradient-to-br from-red-500 to-red-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">🗡️</div>
                    <h4 className="font-bold">Nakroth</h4>
                    <p className="text-xs">Assassin</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">S Tier (Very Strong)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="card bg-gradient-to-br from-orange-500 to-orange-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">🎭</div>
                    <h4 className="font-bold">Liliana</h4>
                    <p className="text-xs">Mage</p>
                  </div>
                </div>
                <div className="card bg-gradient-to-br from-orange-500 to-orange-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h4 className="font-bold">Thane</h4>
                    <p className="text-xs">Tank</p>
                  </div>
                </div>
                <div className="card bg-gradient-to-br from-orange-500 to-orange-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">🏹</div>
                    <h4 className="font-bold">Tel'Annas</h4>
                    <p className="text-xs">ADC</p>
                  </div>
                </div>
                <div className="card bg-gradient-to-br from-orange-500 to-orange-700 text-white">
                  <div className="card-body p-4 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-bold">Raz</h4>
                    <p className="text-xs">Mage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">🎮 Combo đội hình mạnh nhất</h2>
              
              <h3 className="text-xl font-semibold mb-3">Combo 1: Control Team</h3>
              <div className="p-4 bg-primary/10 rounded-lg mb-4">
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🗡️</div>
                    <p className="text-xs">Nakroth</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🧙‍♀️</div>
                    <p className="text-xs">Azzen'ka</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🏹</div>
                    <p className="text-xs">Violet</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🛡️</div>
                    <p className="text-xs">Thane</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">⚔️</div>
                    <p className="text-xs">Brian</p>
                  </div>
                </div>
                <p className="text-sm mt-3 text-base-content/80">
                  <strong>Ưu điểm:</strong> Khống chế cực mạnh, team fight tốt<br/>
                  <strong>Nhược điểm:</strong> Thiếu mobility, dễ bị gank
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">Combo 2: Burst Team</h3>
              <div className="p-4 bg-secondary/10 rounded-lg">
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">⚡</div>
                    <p className="text-xs">Raz</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🎭</div>
                    <p className="text-xs">Liliana</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🏹</div>
                    <p className="text-xs">Tel'Annas</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🗡️</div>
                    <p className="text-xs">Nakroth</p>
                  </div>
                  <div className="p-2 bg-base-200 rounded">
                    <div className="text-lg">🛡️</div>
                    <p className="text-xs">Thane</p>
                  </div>
                </div>
                <p className="text-sm mt-3 text-base-content/80">
                  <strong>Ưu điểm:</strong> Burst damage cao, gank tốt<br/>
                  <strong>Nhược điểm:</strong> Thiếu sustain, team fight yếu
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">📈 Xu hướng Meta</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Xu hướng 1: Mage Meta</h3>
                  <p className="text-base-content/80 mb-3">
                    Các tướng Mage đang thống trị meta với khả năng gây sát thương cao và khống chế tốt. 
                    Azzen'ka và Liliana là những pick hàng đầu hiện tại.
                  </p>
                  <div className="alert alert-info">
                    <div>
                      <strong>Lý do:</strong> Buff sát thương phép thuật, nerf kháng phép của tank
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Xu hướng 2: Team Fight Focus</h3>
                  <p className="text-base-content/80 mb-3">
                    Meta hiện tại thiên về team fight với các tướng có khả năng khống chế và gây sát thương AOE.
                  </p>
                  <div className="alert alert-warning">
                    <div>
                      <strong>Lý do:</strong> Buff các tướng có khả năng team fight, nerf split push
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Xu hướng 3: Early Game Power</h3>
                  <p className="text-base-content/80 mb-3">
                    Các tướng mạnh từ đầu game đang được ưa chuộng để có thể snowball và kết thúc game sớm.
                  </p>
                  <div className="alert alert-success">
                    <div>
                      <strong>Lý do:</strong> Giảm thời gian game, tăng tốc độ meta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg mb-8">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">💡 Tips chọn tướng</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Chọn theo team composition</h4>
                  <ul className="text-sm text-base-content/80">
                    <li>• Cần có ít nhất 1 tank và 1 support</li>
                    <li>• Cân bằng giữa AD và AP damage</li>
                    <li>• Có khả năng khống chế và gây sát thương</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h4 className="font-bold text-secondary mb-2">Chọn theo meta</h4>
                  <ul className="text-sm text-base-content/80">
                    <li>• Ưu tiên các tướng S+ và S tier</li>
                    <li>• Tránh các tướng đã bị nerf nặng</li>
                    <li>• Chọn tướng phù hợp với playstyle</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-bold text-accent mb-2">Chọn theo đối thủ</h4>
                  <ul className="text-sm text-base-content/80">
                    <li>• Counter pick các tướng mạnh của đối thủ</li>
                    <li>• Tránh bị counter bởi team đối thủ</li>
                    <li>• Có khả năng xử lý các tình huống khó</li>
                  </ul>
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
              <Link href="/blog/azzenka-guide-2025" className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body p-4">
                  <h3 className="font-bold">Hướng dẫn Azzen'ka mùa 4 2025</h3>
                  <p className="text-sm text-base-content/70">Tướng mới mạnh nhất hiện tại</p>
                </div>
              </Link>
              <Link href="/blog/violet-build-guide-2025" className="card bg-base-200 hover:bg-base-300 transition-colors">
                <div className="card-body p-4">
                  <h3 className="font-bold">Hướng dẫn build Violet mùa 4 2025</h3>
                  <p className="text-sm text-base-content/70">Từ cơ bản đến cao thủ</p>
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
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.lienquanhub.xyz/blog/meta-analysis-season-4')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-primary">
                📘 Facebook
              </a>
              <a href={`https://t.me/share/url?url=${encodeURIComponent('https://www.lienquanhub.xyz/blog/meta-analysis-season-4')}&text=${encodeURIComponent('Phân tích Meta mùa 4 2025')}`} 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn btn-info">
                📱 Telegram
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.lienquanhub.xyz/blog/meta-analysis-season-4')}&text=${encodeURIComponent('Phân tích Meta mùa 4 2025')}`} 
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
