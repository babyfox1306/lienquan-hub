import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const TIER_META = {
  'S': {
    name: 'Siêu Cường (S-Tier)',
    desc: 'Những tướng cực kỳ bá đạo, thống trị meta hiện tại với tỷ lệ cấm/chọn và thắng cực cao trong các trận đấu giải đấu.',
    badgeClass: 'bg-red-600 shadow-lg shadow-red-500/20 text-white border-red-500'
  },
  'A': {
    name: 'Mạnh / Hợp Meta (A-Tier)',
    desc: 'Lựa chọn xuất sắc và vô cùng ổn định. Tướng mạnh có khả năng gánh team tốt nếu rơi vào tay người chơi có kỹ năng.',
    badgeClass: 'bg-orange-500 shadow-lg shadow-orange-500/20 text-white border-orange-400'
  },
  'B': {
    name: 'Ổn định (B-Tier)',
    desc: 'Các tướng cân bằng, tròn vai. Phù hợp trong các lượt pick tình huống hoặc khi đội hình cần bổ sung chất tướng phù hợp.',
    badgeClass: 'bg-yellow-500 shadow-lg shadow-yellow-500/20 text-black border-yellow-400'
  },
  'C': {
    name: 'Cần cân nhắc (C-Tier)',
    desc: 'Các vị tướng đang bị out-meta nhẹ hoặc vừa bị nerf sát thương. Cần cân nhắc kỹ trước khi lựa chọn trong đấu hạng.',
    badgeClass: 'bg-slate-600 shadow-lg shadow-slate-500/20 text-white border-slate-500'
  }
};

export default function TierList({ heroes, updatedAt, recentVideosCount, recentNewsCount }) {
  // Group heroes by tier S, A, B, C
  const groupedHeroes = {
    'S': heroes.filter(h => h.tier === 'S'),
    'A': heroes.filter(h => h.tier === 'A'),
    'B': heroes.filter(h => h.tier === 'B'),
    'C': heroes.filter(h => h.tier === 'C')
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Head>
        <title>Tier List Tướng Liên Quân Mobile S2 2026 - Bảng Xếp Hạng Meta | Liên Quân Hub</title>
        <meta name="description" content="Xem bảng xếp hạng Tier List tướng Liên Quân Mobile mới nhất S2 2026. Tier list tự động cập nhật độ hot dựa trên video giáo án cao thủ và tin tức giải đấu." />
        <meta property="og:title" content="Tier List Tướng Liên Quân Mobile S2 2026 - Bảng Xếp Hạng Meta | Liên Quân Hub" />
        <meta property="og:description" content="Xem bảng xếp hạng Tier List tướng Liên Quân Mobile mới nhất S2 2026. Tier list tự động cập nhật độ hot dựa trên video giáo án cao thủ và tin tức giải đấu." />
        <meta property="og:type" content="website" />
      </Head>

      <NavBar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs mb-4">
            <span>📅 Cập nhật lần cuối: {updatedAt ? new Date(updatedAt).toLocaleString('vi-VN') : 'Mới nhất'}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
            Tier List Tướng Meta S2 2026
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Bảng xếp hạng chất tướng được tính toán hoàn toàn tự động dựa trên tần suất xuất hiện và từ khóa tích cực/tiêu cực từ các video, cẩm nang và tin tức giải đấu Liên Quân Mobile thực tế.
          </p>

          <div className="alert bg-slate-900/60 border-slate-800 max-w-3xl mx-auto mt-6 rounded-xl flex items-start sm:items-center gap-3 text-left">
            <span className="text-xl">📊</span>
            <div className="text-xs sm:text-sm text-slate-300">
              <strong>Disclaimer:</strong> Tier list được tính tự động dựa trên tần suất xuất hiện của các vị tướng trong <span className="text-white font-bold">{recentVideosCount} video</span> và <span className="text-white font-bold">{recentNewsCount} tin tức</span> chất lượng cao trong vòng 14 ngày qua.
            </div>
          </div>
        </div>

        {/* Tier list Rows Container */}
        <div className="space-y-8 mt-10">
          {['S', 'A', 'B', 'C'].map((tierKey) => {
            const meta = TIER_META[tierKey];
            const list = groupedHeroes[tierKey] || [];
            
            return (
              <div key={tierKey} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-slate-700/80">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Tier Badge column (Left) */}
                  <div className="md:col-span-3 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/60">
                    <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center text-4xl font-extrabold ${meta.badgeClass} mb-3`}>
                      {tierKey}
                    </div>
                    <h3 className="text-white font-bold text-base">{meta.name}</h3>
                    <span className="text-xs text-slate-400 font-semibold mt-1">
                      {list.length} vị tướng
                    </span>
                  </div>

                  {/* Tier description and Heroes list (Right) */}
                  <div className="md:col-span-9 p-6 flex flex-col justify-between">
                    <div>
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                        {meta.desc}
                      </p>

                      {/* Heroes list grid */}
                      {list.length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
                          {list.map((hero) => (
                            <Link key={hero.id} href={`/tuong/${hero.id}`} className="group">
                              <div className="flex flex-col items-center text-center space-y-2">
                                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-slate-800 group-hover:border-red-500/50 group-hover:scale-105 transition-all duration-300 bg-slate-950 flex-shrink-0">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={hero.thumbnail}
                                    alt={hero.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                      e.target.src = '/no-image.png';
                                    }}
                                  />
                                  {hero.hot && (
                                    <span className="absolute bottom-0 right-0 bg-red-600 text-white rounded-tl text-[8px] font-black px-1 py-0.5 animate-pulse">
                                      🔥
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs font-semibold text-slate-300 group-hover:text-white truncate max-w-full">
                                  {hero.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="py-6 text-center text-slate-500 text-xs italic bg-slate-950/20 border border-slate-850 rounded-xl">
                          Chưa có tướng nào được xếp vào Tier này trong meta hiện tại.
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const heroesFilePath = path.join(process.cwd(), 'public', 'heroes.json');
  const videosFilePath = path.join(process.cwd(), 'public', 'videos.json');
  const newsFilePath = path.join(process.cwd(), 'public', 'news.json');

  let heroes = [];
  let updatedAt = '';
  let recentVideosCount = 0;
  let recentNewsCount = 0;

  try {
    if (fs.existsSync(heroesFilePath)) {
      const fileContent = fs.readFileSync(heroesFilePath, 'utf-8');
      const data = json_parse(fileContent);
      heroes = data.heroes || [];
      updatedAt = data.updated_at || '';
    }

    // Helper to calculate recent files (14 days)
    const now = new Date();
    const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    if (fs.existsSync(videosFilePath)) {
      const fileContent = fs.readFileSync(videosFilePath, 'utf-8');
      const videos = json_parse(fileContent).videos || [];
      recentVideosCount = videos.filter(v => {
        const pubDate = new Date(v.publishedAt);
        return pubDate >= fourteenDaysAgo;
      }).length;
    }

    if (fs.existsSync(newsFilePath)) {
      const fileContent = fs.readFileSync(newsFilePath, 'utf-8');
      const news = json_parse(fileContent).news || [];
      recentNewsCount = news.filter(n => {
        const pubDate = new Date(n.publishedAt);
        return pubDate >= fourteenDaysAgo;
      }).length;
    }
  } catch (error) {
    console.error('Error in getStaticProps for tier list page:', error);
  }

  return {
    props: {
      heroes,
      updatedAt,
      recentVideosCount,
      recentNewsCount
    },
    revalidate: 3600
  };
}

// Utility function to handle dynamic JSON loading safely
function json_parse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
}
