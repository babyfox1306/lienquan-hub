import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import VideoCard from '../../components/VideoCard';

// Role and lane mappings
const ROLE_MAP = {
  'Warrior': 'Đấu Sĩ',
  'Assassin': 'Sát Thủ',
  'Mage': 'Pháp Sư',
  'Marksman': 'Xạ Thủ',
  'Support': 'Hỗ Trợ',
  'Tank': 'Đỡ Đòn'
};

const LANE_MAP = {
  'jungle': 'Đi Rừng',
  'mid': 'Đường Giữa (Mid)',
  'dragon': 'Đường Rồng (AD)',
  'slayer': 'Đường Tà Thần (Top)',
  'roam': 'Trợ Thủ / Roam'
};

const TIER_COLORS = {
  'S': 'bg-red-600 border-red-500 text-white font-bold',
  'A': 'bg-orange-500 border-orange-400 text-white font-bold',
  'B': 'bg-yellow-500 border-yellow-400 text-black font-bold',
  'C': 'bg-slate-600 border-slate-500 text-white font-bold'
};

export default function HeroDetail({ hero, relatedVideoObjects, allHeroIds }) {
  if (!hero) return null;

  // Check if a counter/synergy hero is in our 50-hero list
  const getHeroLink = (name) => {
    const slug = name.toLowerCase().replace("'", "").replace("-", " ").trim().replace(/\s+/g, "-");
    const foundId = allHeroIds.find(id => id === slug || id === name.toLowerCase());
    if (foundId) {
      return `/tuong/${foundId}`;
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Head>
        <title>{`${hero.name} Liên Quân Mobile - Build, Khắc Chế & Guide S2 2026 | Liên Quân Hub`}</title>
        <meta name="description" content={`Hướng dẫn chơi ${hero.name}: bộ trang bị khuyên dùng, phép bổ trợ, phù hiệu cực mạnh chuẩn meta S2 2026. Xem video hướng dẫn và các tướng khắc chế.`} />
        <meta property="og:title" content={`${hero.name} Liên Quân Mobile - Build, Khắc Chế & Guide S2 2026 | Liên Quân Hub`} />
        <meta property="og:description" content={`Hướng dẫn chơi ${hero.name}: bộ trang bị khuyên dùng, phép bổ trợ, phù hiệu cực mạnh chuẩn meta S2 2026. Xem video hướng dẫn và các tướng khắc chế.`} />
        <meta property="og:image" content={hero.thumbnail} />
        <meta property="og:type" content="article" />
      </Head>

      <NavBar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb navigation */}
        <div className="text-sm breadcrumbs text-slate-400 mb-6">
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/tuong">Danh sách Tướng</Link></li>
            <li className="text-white font-semibold">{hero.name}</li>
          </ul>
        </div>

        {/* Two columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Hero Info, Build, Counters (40%) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hero Profile Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              {/* Background accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
                <div className="relative w-36 h-36 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={hero.thumbnail}
                    alt={hero.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src = '/no-image.png';
                    }}
                  />
                </div>
                
                <div className="text-center sm:text-left space-y-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h1 className="text-3xl font-extrabold text-white">{hero.name}</h1>
                    {hero.hot && (
                      <span className="badge badge-error text-white font-bold animate-pulse">🔥 HOT</span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                    {hero.role.map((r, idx) => (
                      <span key={idx} className="badge badge-outline border-slate-700 text-slate-300 font-medium">
                        {ROLE_MAP[r] || r}
                      </span>
                    ))}
                    {hero.lane.map((l, idx) => (
                      <span key={idx} className="badge badge-outline border-red-905/50 text-red-400 font-medium">
                        📍 {LANE_MAP[l] || l}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400">
                    Độ khó: <span className="text-white capitalize font-semibold">{hero.difficulty}</span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mt-5 pt-5 border-t border-slate-800 leading-relaxed italic">
                "{hero.description}"
              </p>

              {/* Tier status indicator */}
              <div className="mt-5 p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center gap-4">
                <div className={`badge border ${TIER_COLORS[hero.tier] || 'bg-slate-600'} text-lg px-4 py-6 rounded-lg`}>
                  Tier {hero.tier}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Đánh giá meta</h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">{hero.tier_reason}</p>
                </div>
              </div>
            </div>

            {/* Build Recommendation Section */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                ⚔️ Trang Bị Khuyên Dùng S2 2026
              </h3>
              
              <div className="space-y-4">
                {/* Equipment items */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Bộ trang bị chính</h4>
                  <div className="flex flex-wrap gap-2">
                    {hero.build_recommend.items.map((item, idx) => (
                      <span key={idx} className="bg-slate-950 border border-slate-805 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-inner">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                  {/* Summoner Spell */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Phép bổ trợ</h4>
                    <span className="bg-slate-950 border border-slate-800 text-red-400 px-3 py-1.5 rounded-lg text-xs font-bold block text-center shadow-inner">
                      ✨ {hero.build_recommend.spell}
                    </span>
                  </div>

                  {/* Emblem */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-1.5 tracking-wider">Phù hiệu khuyên dùng</h4>
                    <span className="bg-slate-950 border border-slate-800 text-orange-400 px-2 py-1.5 rounded-lg text-xs font-bold block text-center truncate shadow-inner" title={hero.build_recommend.emblem}>
                      🛡️ {hero.build_recommend.emblem}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Counters and Synergies Section */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                🔄 Tương Khắc & Phối Hợp
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Counters list */}
                <div>
                  <h4 className="text-xs font-bold text-red-400 uppercase mb-2 tracking-wider flex items-center gap-1">
                    🚫 Bị khắc chế bởi
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {hero.counters.map((c, idx) => {
                      const link = getHeroLink(c);
                      return link ? (
                        <Link key={idx} href={link} className="text-xs font-semibold text-slate-300 hover:text-red-400 transition-colors bg-slate-950/80 border border-slate-850 px-3 py-2 rounded-lg block">
                          ⚡ {c} (Xem chi tiết)
                        </Link>
                      ) : (
                        <span key={idx} className="text-xs font-semibold text-slate-400 bg-slate-950/40 border border-slate-855/50 px-3 py-2 rounded-lg block">
                          🛡️ {c}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Synergies list */}
                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase mb-2 tracking-wider flex items-center gap-1">
                    🤝 Phối hợp tốt với
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {hero.synergies.map((s, idx) => {
                      const link = getHeroLink(s);
                      return link ? (
                        <Link key={idx} href={link} className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors bg-slate-950/80 border border-slate-850 px-3 py-2 rounded-lg block">
                          🔥 {s} (Xem chi tiết)
                        </Link>
                      ) : (
                        <span key={idx} className="text-xs font-semibold text-slate-400 bg-slate-950/40 border border-slate-850/50 px-3 py-2 rounded-lg block">
                          ⭐ {s}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Skills & Related Videos (60%) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hero Skills Section */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                🌟 Bộ Kỹ Năng Chiến Đấu
              </h2>
              
              <div className="space-y-4">
                {/* Skill boxes */}
                {Object.entries(hero.skills).map(([key, skillDesc], idx) => {
                  const skillLabels = {
                    'passive': 'Nội Tại',
                    'skill1': 'Chiêu 1',
                    'skill2': 'Chiêu 2',
                    'skill3': 'Chiêu Cuối (Ulti)'
                  };
                  
                  const parts = skillDesc.split(':');
                  const skillName = parts[0]?.trim() || '';
                  const skillBody = parts.slice(1).join(':')?.trim() || '';

                  return (
                    <div key={key} className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700/80 transition-all">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-extrabold text-red-500 uppercase tracking-widest">
                          {skillLabels[key] || key}
                        </span>
                        <span className="text-sm font-extrabold text-white">{skillName}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                        {skillBody || skillDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Related Videos Section */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  📹 Trận Đấu & Giáo Án Cao Thủ
                </h3>
                <span className="text-xs text-slate-400 font-medium bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                  {relatedVideoObjects.length} video
                </span>
              </div>
              
              {relatedVideoObjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedVideoObjects.map((vidObj, idx) => (
                    <VideoCard key={idx} video={vidObj} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-slate-950/40 rounded-xl border border-slate-850/80">
                  <span className="text-2xl">📭</span>
                  <p className="text-slate-400 text-sm mt-2">Chưa có video thực tế của tướng này trong 14 ngày qua.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const heroesFilePath = path.join(process.cwd(), 'public', 'heroes.json');
  let paths = [];

  try {
    if (fs.existsSync(heroesFilePath)) {
      const fileContent = fs.readFileSync(heroesFilePath, 'utf-8');
      const data = json_parse(fileContent);
      const heroes = data.heroes || [];
      paths = heroes.map(hero => ({
        params: { id: hero.id }
      }));
    }
  } catch (error) {
    console.error('Error generating paths in getStaticPaths:', error);
  }

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const heroId = params.id;
  const heroesFilePath = path.join(process.cwd(), 'public', 'heroes.json');
  const videosFilePath = path.join(process.cwd(), 'public', 'videos.json');

  let hero = null;
  let allHeroIds = [];
  let relatedVideoObjects = [];

  try {
    // Read hero profile
    if (fs.existsSync(heroesFilePath)) {
      const fileContent = fs.readFileSync(heroesFilePath, 'utf-8');
      const data = json_parse(fileContent);
      const heroes = data.heroes || [];
      allHeroIds = heroes.map(h => h.id);
      hero = heroes.find(h => h.id === heroId) || null;
    }

    // Load full video objects for related video IDs
    if (hero && hero.related_videos && fs.existsSync(videosFilePath)) {
      const fileContent = fs.readFileSync(videosFilePath, 'utf-8');
      const data = json_parse(fileContent);
      const videos = data.videos || [];
      
      relatedVideoObjects = hero.related_videos
        .map(vidId => videos.find(v => v.videoId === vidId))
        .filter(Boolean);
    }
  } catch (error) {
    console.error('Error fetching static props in hero details:', error);
  }

  return {
    props: {
      hero,
      relatedVideoObjects,
      allHeroIds
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
