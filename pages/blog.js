import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

function BlogCardCover({ category, id, title }) {
  let gradient = 'from-slate-950 via-slate-900 to-indigo-950';
  let accentColor = 'text-indigo-400 border-indigo-500/30';
  let glowColor = 'bg-indigo-500/10';
  let icon = '🎮';
  let shortTitle = 'LQ';

  if (category === 'Meta Game') {
    gradient = 'from-slate-950 via-slate-900 to-violet-950';
    accentColor = 'text-violet-400 border-violet-500/30';
    glowColor = 'bg-violet-500/15';
    icon = '👑';
    shortTitle = 'META';
  } else if (category === 'Guide Position') {
    gradient = 'from-slate-950 via-slate-900 to-blue-950';
    accentColor = 'text-blue-400 border-blue-500/30';
    glowColor = 'bg-blue-500/15';
    icon = '🎯';
    shortTitle = 'POSITION';
  } else if (category === 'Guide Hero') {
    gradient = 'from-slate-950 via-slate-900 to-red-950';
    accentColor = 'text-red-400 border-red-500/30';
    glowColor = 'bg-red-500/15';
    icon = '⚔️';
    shortTitle = 'HERO';
  } else if (category === 'Tips Rank') {
    gradient = 'from-slate-950 via-slate-900 to-emerald-950';
    accentColor = 'text-emerald-400 border-emerald-500/30';
    glowColor = 'bg-emerald-500/15';
    icon = '💎';
    shortTitle = 'RANK';
  } else if (category === 'Skin Review') {
    gradient = 'from-slate-950 via-slate-900 to-pink-950';
    accentColor = 'text-pink-400 border-pink-500/30';
    glowColor = 'bg-pink-500/15';
    icon = '✨';
    shortTitle = 'SKIN';
  }

  if (id.includes('nakroth')) {
    shortTitle = 'NAKROTH';
  } else if (id.includes('murad')) {
    shortTitle = 'MURAD';
  } else if (id.includes('marja')) {
    shortTitle = 'MARJA';
  } else if (id.includes('hayate')) {
    shortTitle = 'HAYATE';
  } else if (id.includes('violet')) {
    shortTitle = 'VIOLET';
  } else if (id.includes('yena')) {
    shortTitle = 'YENA';
  } else if (id.includes('gildur')) {
    shortTitle = 'GILDUR';
  } else if (id.includes('tier-list')) {
    shortTitle = 'TIER LIST';
  } else if (id.includes('di-rung')) {
    shortTitle = 'JUNGLE';
  } else if (id.includes('ta-than')) {
    shortTitle = 'SLAYER';
  } else if (id.includes('ho-tro')) {
    shortTitle = 'SUPPORT';
  } else if (id.includes('leo-rank')) {
    shortTitle = 'LEO RANK';
  } else if (id.includes('azzenka')) {
    shortTitle = "AZZEN'KA";
  }

  return (
    <div className={`w-full h-full relative overflow-hidden bg-gradient-to-br ${gradient} flex flex-col justify-between p-6 select-none transition-all duration-300`}>
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 10px)'
        }}
      />
      <div className="absolute inset-0 pointer-events-none border border-white/[0.02] m-2 rounded-xl" />
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl ${glowColor} group-hover:scale-110 transition-transform duration-700`} />
      <div className={`absolute -top-10 -left-10 w-24 h-24 rounded-full blur-xl opacity-60 ${glowColor}`} />

      <div className="flex justify-between items-center relative z-10">
        <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
          LQHUB // DATABASE
        </span>
        <span className="text-lg filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{icon}</span>
      </div>

      <div className="my-auto py-4 relative z-10 text-left">
        <h4 className="text-[10px] font-black tracking-widest text-slate-400 uppercase opacity-65 mb-0.5">
          {category}
        </h4>
        <div className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
          {shortTitle}
        </div>
      </div>

      <div className="flex justify-between items-center relative z-10 pt-2 border-t border-white/[0.03]">
        <span className="text-[9px] font-mono tracking-wider text-slate-500">
          SEC_AUTH_META_v2.0
        </span>
        <span className={`text-[9px] font-black tracking-widest px-2 py-0.5 rounded border ${accentColor} bg-slate-900/30`}>
          READY
        </span>
      </div>
    </div>
  );
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const articles = [
    {
      id: 'tier-list-s2-2026',
      title: "Tier List Liên Quân S2 2026 - Bảng Xếp Hạng Tướng Mạnh Nhất Hiện Tại",
      excerpt: "Chi tiết bảng xếp hạng Tier List Liên Quân Mobile mùa giải S2 2026. Phân tích sức mạnh các vị tướng SS Tier, S Tier thống trị meta để leo rank hiệu quả.",
      category: 'Meta Game',
      readTime: '12 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'top-tuong-di-rung-s2-2026',
      title: "Top 5 Tướng Đi Rừng Mạnh Nhất S2 2026",
      excerpt: "Danh sách 5 vị tướng đi rừng (Jungle) mạnh nhất Liên Quân Mobile mùa giải S2 2026 giúp bạn gánh team và hủy diệt đội hình đối phương dễ dàng.",
      category: 'Guide Position',
      readTime: '10 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'nakroth-build-s2-2026',
      title: "Build Nakroth S2 2026 - Lên Đồ Mạnh Nhất Theo Meta Hiện Tại",
      excerpt: "Hướng dẫn chi tiết cách chơi, trang bị, phù hiệu và bảng ngọc cực chuẩn cho Nakroth mùa giải S2 2026. Giáo án gánh team từ cao thủ Liên Quân.",
      category: 'Guide Hero',
      readTime: '11 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'murad-build-s2-2026',
      title: "Build Murad S2 2026 - Cách Chơi Và Lên Đồ Chuẩn",
      excerpt: "Chi tiết cách lên đồ, bảng ngọc, phù hiệu và cách mở khóa phong ấn chiêu cuối ảo diệu cho Murad mùa S2 2026. Giáo án hủy diệt meta từ cao thủ.",
      category: 'Guide Hero',
      readTime: '9 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/5/5e/Murad_Outlaw.png/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'counter-nakroth',
      title: "Cách Counter Nakroth Hiệu Quả - Tướng Khắc Chế Nakroth S2 2026",
      excerpt: "Chia sẻ bí kíp khắc chế cứng Nakroth mùa giải S2 2026. Danh sách tướng khống chế cứng và trang bị làm suy yếu thần rừng Nakroth.",
      category: 'Tips Rank',
      readTime: '8 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'tuong-manh-nhat-lien-quan-2026',
      title: "Top 10 Tướng Mạnh Nhất Liên Quân Mobile 2026",
      excerpt: "Bảng vinh danh 10 vị tướng mạnh mẽ nhất Liên Quân Mobile năm 2026. Thống trị meta các vị trí để gánh team và leo rank thần tốc.",
      category: 'Meta Game',
      readTime: '14 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'marja-build-s2-2026',
      title: "Build Marja S2 2026 - Tướng SS Meta Mạnh Nhất",
      excerpt: "Hướng dẫn chi tiết lối lên đồ pháp sư Marja mùa giải S2 2026. Phù hiệu hút máu bá đạo và cẩm nang đè bẹp đường giữa đối thủ.",
      category: 'Guide Hero',
      readTime: '10 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/c/c9/Marja_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'hayate-build-s2-2026',
      title: "Build Hayate S2 2026 - Xạ Thủ Bá Nhất Meta",
      excerpt: "Khám phá bộ trang bị sát thương chuẩn chí mạng cực đỉnh cho Hayate mùa giải S2 2026. Giáo án gánh team từ cao thủ Liên Quân.",
      category: 'Guide Hero',
      readTime: '11 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/4/41/Hayate_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'violet-build-s2-2026',
      title: "Build Violet S2 2026 - Cách Lên Đồ Chuẩn Meta",
      excerpt: "Hướng dẫn chi tiết lối lên đồ xạ thủ quốc dân Violet mùa giải S2 2026. Bảng ngọc chí mạng một bắn tiễn kẻ địch lên bảng đếm số.",
      category: 'Guide Hero',
      readTime: '10 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/d/df/Violet_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'top-tuong-ta-than-s2-2026',
      title: "Top 5 Tướng Tả Thần Mạnh Nhất S2 2026",
      excerpt: "Danh sách 5 quân bài đấu sĩ solo đường Tà Thần Caesar mạnh mẽ nhất Liên Quân Mobile mùa giải S2 2026 gánh team cực lực.",
      category: 'Guide Position',
      readTime: '10 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'gildur-build-s2-2026',
      title: "Build Gildur S2 2026 - Đỡ Đòn Cho Team Cực Tốt",
      excerpt: "Hướng dẫn chi tiết lối lên đồ trợ thủ Gildur mùa giải S2 2026. Cách bắn vàng khống chế cấu rỉa tầm xa cực khó chịu gánh team.",
      category: 'Guide Hero',
      readTime: '9 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/7/71/Gildur_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'yena-build-s2-2026',
      title: "Build Yena S2 2026 - Combo Skill Đỉnh Cao",
      excerpt: "Hướng dẫn chi tiết cách chơi, bộ trang bị và combo 7 chiêu thức ảo diệu cho đấu sĩ Yena solo đường Tà Thần mùa S2 2026.",
      category: 'Guide Hero',
      readTime: '11 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/d/d3/Yena_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'leo-rank-nhanh-lien-quan-2026',
      title: "Cách Leo Rank Nhanh Liên Quân Mobile 2026 - Bí Kíp Từ Vàng Lên Kim Cương",
      excerpt: "Chia sẻ bí kíp và chiến thuật leo rank nhanh chóng trong Liên Quân Mobile năm 2026. Lựa chọn tướng thông minh đè bẹp đối thủ dễ dàng.",
      category: 'Tips Rank',
      readTime: '13 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'meta-s2-2026-lien-quan',
      title: "Meta S2 2026 Liên Quân Mobile - Phân Tích Xu Hướng Tướng Mạnh",
      excerpt: "Phân tích chi tiết xu hướng chiến thuật và những biến động tướng mạnh nhất trong meta mùa giải S2 2026 Liên Quân Mobile.",
      category: 'Meta Game',
      readTime: '12 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/3/3f/Nakroth_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'tuong-ho-tro-manh-nhat-2026',
      title: "Top 5 Tướng Hỗ Trợ Mạnh Nhất S2 2026 Liên Quân Mobile",
      excerpt: "Bảng xếp hạng 5 vị tướng trợ thủ (Support) bảo kê xạ thủ tốt nhất Liên Quân Mobile mùa giải S2 2026 gánh team cực mạnh.",
      category: 'Guide Position',
      readTime: '10 phút',
      date: '2026-05-18',
      image: 'https://static.wikia.nocookie.net/strikeofkings_gamepedia_en/images/7/71/Gildur_Splash_Art.jpg/revision/latest/scale-to-width-down/500'
    },
    {
      id: 'azzenka-guide-2025',
      title: "Hướng dẫn Azzen'ka mùa 4 2025 - Tướng mới mạnh nhất hiện tại",
      excerpt: "Azzen'ka là tướng mới được ra mắt trong phiên bản Quang Minh & Hắc Ám với khả năng khống chế cực mạnh và sát thương phép thuật cao. Bài viết này sẽ hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Azzen'ka hiệu quả nhất.",
      category: 'Guide Hero',
      readTime: '12 phút',
      date: '2025-10-24',
      image: 'https://i.ytimg.com/vi/7yZ7omLy0YQ/maxresdefault.jpg'
    },
    {
      id: 'meta-analysis-season-4',
      title: 'Phân tích Meta mùa 4 2025 - Top tướng và chiến thuật',
      excerpt: 'Mùa 4 mang đến nhiều thay đổi lớn trong meta game. Chúng tôi phân tích chi tiết các tướng mạnh nhất, combo đội hình hiệu quả và xu hướng meta hiện tại.',
      category: 'Meta Game',
      readTime: '15 phút',
      date: '2025-10-24',
      image: 'https://i.ytimg.com/vi/Ksvv3l9Bikg/maxresdefault.jpg'
    },
    {
      id: 'violet-build-guide-2025',
      title: 'Hướng dẫn build Violet mùa 4 2025 - Từ cơ bản đến cao thủ',
      excerpt: 'Violet là một trong những ADC mạnh nhất hiện tại với khả năng gây sát thương cực cao. Bài viết này sẽ hướng dẫn chi tiết cách build đồ, combo skill và chiến thuật sử dụng Violet hiệu quả nhất.',
      category: 'Guide Hero',
      readTime: '8 phút',
      date: '2025-10-24',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'rank-up-tips-diamond',
      title: 'Bí quyết leo rank từ Vàng lên Kim Cương - Chiến thuật thực chiến',
      excerpt: 'Leo rank từ Vàng lên Kim Cương là một thử thách lớn. Bài viết chia sẻ kinh nghiệm thực tế từ các cao thủ, bao gồm cách chọn tướng, chiến thuật team fight và tâm lý thi đấu.',
      category: 'Tips Rank',
      readTime: '10 phút',
      date: '2025-10-23',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'jungle-guide-season-4',
      title: 'Hướng dẫn đi rừng mùa 4 - Từ Bronze đến Master',
      excerpt: 'Đi rừng là vị trí quan trọng nhất trong game. Bài viết hướng dẫn chi tiết cách đi rừng hiệu quả, timing gank, kiểm soát rồng và cách carry team.',
      category: 'Guide Position',
      readTime: '15 phút',
      date: '2025-10-22',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 'skin-review-new-collection',
      title: 'Review bộ skin mới Quang Minh & Hắc Ám - Đáng mua không?',
      excerpt: 'Bộ skin Quang Minh & Hắc Ám là một trong những bộ skin đẹp nhất từ trước đến nay. Chúng tôi review chi tiết hiệu ứng, animation và giá trị của từng skin.',
      category: 'Skin Review',
      readTime: '6 phút',
      date: '2025-10-21',
      image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    }
  ];

  const categories = ['Tất cả', 'Guide Hero', 'Meta Game', 'Tips Rank', 'Guide Position', 'Skin Review'];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'Tất cả'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  // We choose the first item of the filtered articles as featured, or fallback if none
  const featuredArticle = filteredArticles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Head>
        <title>Blog & Hướng dẫn Liên Quân Mobile | Liên Quân Hub</title>
        <meta name="description" content="Hướng dẫn build đồ, tips leo rank, phân tích meta từ các cao thủ Liên Quân Mobile." />
        <meta name="keywords" content="Liên Quân Mobile, blog, hướng dẫn, tips, guide, meta game, esports" />
        <link rel="canonical" href="https://www.lienquanhub.xyz/blog" />
      </Head>
      
      <NavBar />
      
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-grow w-full space-y-10">
        {/* Header Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-8 sm:p-12 text-center">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="badge badge-error text-white font-bold px-3 py-1.5 text-xs tracking-widest uppercase">
              📚 KHO KINH NGHIỆM
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Blog & Hướng dẫn Chiến Thuật
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tổng hợp bài viết chuyên sâu về hướng dẫn trang bị, mẹo leo rank và phân tích meta cực kỳ thực chiến từ các cao thủ chuyên nghiệp.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2.5 pt-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn btn-sm px-4 rounded-xl border font-bold transition-all duration-300 ${
                    category === selectedCategory 
                      ? 'btn-error text-white shadow-lg shadow-red-500/20' 
                      : 'border-slate-800 bg-slate-900/30 text-slate-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article - only shown if articles exist in filtered set */}
        {featuredArticle && (
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md transition-all duration-300 card-glow-transition card-glow-s">
            <div className="card-body p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="badge badge-error text-white font-black px-2.5 py-1 text-[10px] tracking-wide uppercase">
                      BÀI NỔI BẬT
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      🏷️ {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-red-500 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
                    <span className="flex items-center gap-1">⏱️ {featuredArticle.readTime} đọc</span>
                    <span className="flex items-center gap-1">📅 {featuredArticle.date}</span>
                  </div>
                  <div className="pt-4">
                    <Link href={`/blog/${featuredArticle.id}`} className="btn btn-error text-white px-6 rounded-xl font-bold hover:scale-105 transition-all duration-300">
                      Đọc bài viết →
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-[450px] aspect-[16/10] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 relative group-hover:border-red-500/30 transition-colors duration-300 flex-shrink-0">
                  <BlogCardCover 
                    category={featuredArticle.category} 
                    id={featuredArticle.id} 
                    title={featuredArticle.title} 
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-6">
            {regularArticles.length > 0 && (
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight border-l-4 border-red-500 pl-3">
                Các bài viết liên quan
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map(article => (
                <div 
                  key={article.id} 
                  className="group card bg-slate-900/40 backdrop-blur-sm border border-slate-800 overflow-hidden h-full rounded-2xl card-glow-transition card-glow-a"
                >
                  <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800 group-hover:border-b-red-500/20 transition-colors duration-300">
                    <BlogCardCover 
                      category={article.category} 
                      id={article.id} 
                      title={article.title} 
                    />
                  </div>
                  <div className="card-body p-5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="card-title text-base sm:text-lg text-white font-bold group-hover:text-red-500 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-xs text-slate-500 font-semibold">
                      <span>📅 {article.date}</span>
                      <Link href={`/blog/${article.id}`} className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-0.5">
                        Đọc thêm ➔
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/20 rounded-3xl border border-slate-800 border-dashed">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-white mt-4">Không tìm thấy bài viết nào</h3>
            <p className="text-slate-400 text-sm mt-1">Vui lòng thay đổi bộ lọc chuyên mục.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="card bg-slate-900/40 border border-slate-800 backdrop-blur-sm rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="card-body p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-4xl block">📧</span>
            <h2 className="card-title text-xl sm:text-2xl justify-center text-white font-black tracking-tight">
              Đăng ký Nhận Bài Viết Mới
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Bạn muốn trở thành người đầu tiên cập nhật meta và cẩm nang từ cao thủ? Hãy đăng ký email để nhận bài phân tích hàng tuần hoàn toàn miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="email" 
                placeholder="Địa chỉ Email của bạn" 
                className="input input-bordered bg-slate-950 border-slate-800 text-white rounded-xl flex-1 focus:border-red-500 transition-colors"
              />
              <button className="btn btn-error text-white font-bold px-6 rounded-xl hover:scale-105 transition-all duration-300">
                Đăng ký ngay
              </button>
            </div>
            <p className="text-[10px] text-slate-500 font-semibold">
              Chúng tôi tuyệt đối bảo mật thông tin và bạn có thể hủy đăng ký chỉ với 1-click bất cứ lúc nào.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
