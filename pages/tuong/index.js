import Head from 'next/head';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import fs from 'fs';
import path from 'path';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

// Role mappings
const ROLE_MAP = {
  'Warrior': 'Đấu Sĩ',
  'Assassin': 'Sát Thủ',
  'Mage': 'Pháp Sư',
  'Marksman': 'Xạ Thủ',
  'Support': 'Hỗ Trợ',
  'Tank': 'Đỡ Đòn'
};

const ROLE_COLORS = {
  'Warrior': 'badge-warning text-warning-content',
  'Assassin': 'badge-error text-error-content',
  'Mage': 'badge-secondary text-secondary-content',
  'Marksman': 'badge-primary text-primary-content',
  'Support': 'badge-success text-success-content',
  'Tank': 'badge-accent text-accent-content'
};

const TIER_COLORS = {
  'S': 'bg-red-605 text-white font-bold',
  'A': 'bg-orange-500 text-white font-bold',
  'B': 'bg-yellow-500 text-black font-bold',
  'C': 'bg-slate-500 text-white font-bold'
};

export default function HeroesHub({ heroes, updatedAt }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedTier, setSelectedTier] = useState('All');
  const [onlyHot, setOnlyHot] = useState(false);

  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (heroId) => {
    setImgErrors(prev => ({ ...prev, [heroId]: true }));
  };

  // Filtered heroes list
  const filteredHeroes = useMemo(() => {
    return heroes.filter(hero => {
      const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            hero.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRole = selectedRole === 'All' || hero.role.some(r => ROLE_MAP[r] === selectedRole || r === selectedRole);
      const matchesTier = selectedTier === 'All' || hero.tier === selectedTier;
      const matchesHot = !onlyHot || hero.hot === true;

      return matchesSearch && matchesRole && matchesTier && matchesHot;
    });
  }, [heroes, searchTerm, selectedRole, selectedTier, onlyHot]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Head>
        <title>Bảng Tướng Liên Quân Mobile - Build, Counter & Meta | Liên Quân Hub</title>
        <meta name="description" content="Khám phá bảng tướng Liên Quân Mobile cập nhật tự động theo meta thực tế. Xem hướng dẫn build đồ, bảng ngọc, phù hiệu và video liên quan cực chuẩn." />
        <meta property="og:title" content="Bảng Tướng Liên Quân Mobile - Build, Counter & Meta | Liên Quân Hub" />
        <meta property="og:description" content="Khám phá bảng tướng Liên Quân Mobile cập nhật tự động theo meta thực tế. Xem hướng dẫn build đồ, bảng ngọc, phù hiệu và video liên quan cực chuẩn." />
        <meta property="og:type" content="website" />
      </Head>

      <NavBar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
            Bảng Tướng Liên Quân Mobile
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Cập nhật và xếp hạng theo meta thực tế từ các trận đấu đỉnh cao của cao thủ qua video & tin tức giải đấu.
          </p>
          {updatedAt && (
            <p className="text-xs text-slate-500 mt-2">
              Cập nhật lần cuối: {new Date(updatedAt).toLocaleString('vi-VN')}
            </p>
          )}
        </div>

        {/* Filters control panel */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Search Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-slate-300 font-medium">Tìm kiếm tướng</span>
              </label>
              <input
                type="text"
                placeholder="Nhập tên tướng hoặc kỹ năng..."
                className="input input-bordered w-full bg-slate-950 border-slate-800 text-white focus:border-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter by Role */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-slate-300 font-medium">Vai trò</span>
              </label>
              <select
                className="select select-bordered w-full bg-slate-950 border-slate-800 text-white focus:border-red-500"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="All">Tất cả vai trò</option>
                <option value="Đấu Sĩ">Đấu Sĩ</option>
                <option value="Sát Thủ">Sát Thủ</option>
                <option value="Pháp Sư">Pháp Sư</option>
                <option value="Xạ Thủ">Xạ Thủ</option>
                <option value="Hỗ Trợ">Hỗ Trợ</option>
                <option value="Đỡ Đòn">Đỡ Đòn</option>
              </select>
            </div>

            {/* Filter by Tier */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-slate-300 font-medium">Xếp hạng Tier</span>
              </label>
              <select
                className="select select-bordered w-full bg-slate-950 border-slate-800 text-white focus:border-red-500"
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
              >
                <option value="All">Tất cả Tier</option>
                <option value="S">Tier S (Siêu Cường)</option>
                <option value="A">Tier A (Mạnh / Hợp Meta)</option>
                <option value="B">Tier B (Ổn định)</option>
                <option value="C">Tier C (Cần cân nhắc)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-800 items-center justify-between">
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-error bg-slate-950 border-slate-800"
                  checked={onlyHot}
                  onChange={(e) => setOnlyHot(e.target.checked)}
                />
                <span className="label-text text-white font-medium flex items-center gap-1">
                  Chỉ hiện tướng đang HOT <span className="text-red-500 animate-pulse">🔥</span>
                </span>
              </label>
            </div>
            
            <div className="text-sm text-slate-400">
              Hiển thị <span className="text-white font-bold">{filteredHeroes.length}</span> / {heroes.length} tướng
            </div>
          </div>
        </div>

        {/* Heroes Grid */}
        {filteredHeroes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredHeroes.map((hero) => {
              const glowClass = hero.tier === 'S' ? 'card-glow-s' :
                                hero.tier === 'A' ? 'card-glow-a' :
                                hero.tier === 'B' ? 'card-glow-b' : 'card-glow-c';
              return (
                <Link key={hero.id} href={`/tuong/${hero.id}`} className="group">
                  <div className={`card bg-slate-900/40 backdrop-blur-sm border border-slate-800 overflow-hidden h-full rounded-2xl card-glow-transition ${glowClass}`}>
                  {/* Thumbnail area */}
                  <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                    {hero.thumbnail && !imgErrors[hero.id] ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={hero.thumbnail}
                        alt={hero.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImgError(hero.id)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-red-950/40 to-slate-900">
                        <span className="text-2xl mb-1 filter drop-shadow">⚔️</span>
                        <span className="text-sm sm:text-base font-black tracking-wider text-slate-100 uppercase group-hover:text-red-500 transition-colors">
                          {hero.name}
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                          Liên Quân Hub
                        </span>
                      </div>
                    )}
                    
                    {/* Top right badges overlay */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                      <span className={`badge border-none shadow-md ${TIER_COLORS[hero.tier] || 'bg-slate-600 text-white'} px-2.5 py-1 text-xs`}>
                        Tier {hero.tier}
                      </span>
                      {hero.hot && (
                        <span className="badge badge-error shadow-md text-white font-bold px-2 py-1 text-[10px] sm:text-xs animate-bounce">
                          🔥 HOT
                        </span>
                      )}
                    </div>

                    {/* Related videos count overlay */}
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium border border-white/10">
                        📹 {hero.related_videos?.length || 0} video
                      </span>
                    </div>
                  </div>

                  {/* Body content */}
                  <div className="card-body p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <h2 className="card-title text-base sm:text-lg text-white font-bold group-hover:text-red-500 transition-colors">
                        {hero.name}
                      </h2>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 mt-1.5 h-10">
                        {hero.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800">
                      {hero.role.map((r, idx) => (
                        <span key={idx} className={`badge badge-xs sm:badge-sm ${ROLE_COLORS[r] || 'badge-ghost'} font-medium`}>
                          {ROLE_MAP[r] || r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/20 rounded-2xl border border-slate-800 border-dashed">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-white mt-4">Không tìm thấy tướng nào</h3>
            <p className="text-slate-400 text-sm mt-1">Vui lòng thay đổi bộ lọc hoặc từ khóa tìm kiếm.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const heroesFilePath = path.join(process.cwd(), 'public', 'heroes.json');
  let heroes = [];
  let updatedAt = '';

  try {
    if (fs.existsSync(heroesFilePath)) {
      const fileContent = fs.readFileSync(heroesFilePath, 'utf-8');
      const data = json_parse(fileContent);
      heroes = data.heroes || [];
      updatedAt = data.updated_at || '';
    }
  } catch (error) {
    console.error('Error reading heroes.json in getStaticProps:', error);
  }

  return {
    props: {
      heroes,
      updatedAt
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
