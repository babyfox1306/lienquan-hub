const GAMING_GEAR = [
  {
    name: 'Bao tay chơi game BlueWow',
    desc: 'Chống trượt, chống mồ hôi tay',
    price: 'từ 25.000đ',
    emoji: '🧤',
    url: 'https://s.shopee.vn/AKXdascA3u',
  },
  {
    name: 'Quạt tản nhiệt T2',
    desc: 'Chống lag, chống giật khi rank',
    price: 'từ 89.000đ',
    emoji: '❄️',
    url: 'https://s.shopee.vn/AUr3nBbWix',
  },
  {
    name: 'Tai nghe SALAR A566',
    desc: 'HiFi, có mic, chơi game cực đã',
    price: 'từ 120.000đ',
    emoji: '🎧',
    url: 'https://s.shopee.vn/9Kf6P2fy5k',
  },
  {
    name: 'Pin dự phòng 20000mAh Vention',
    desc: 'Sạc nhanh 22.5W, rank cả ngày',
    price: 'từ 299.000đ',
    emoji: '🔋',
    url: 'https://s.shopee.vn/9UyWbLfKkn',
  },
  {
    name: 'Giá đỡ tay cầm PS5 Dobe',
    desc: 'Chơi mobile như console',
    price: 'từ 45.000đ',
    emoji: '🎮',
    url: 'https://s.shopee.vn/9fHwneehPq',
  },
];

export default function GamingGear({ title = '⚡ Gear Gaming Hot' }) {
  return (
    <section className="w-full px-4 sm:px-6 py-10 sm:py-12 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 tracking-tight">
          {title}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {GAMING_GEAR.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 transition-all duration-300 hover:scale-[1.02] hover:border-slate-600 hover:shadow-lg hover:shadow-red-500/5"
            >
              <span className="text-4xl sm:text-5xl mb-3" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-1.5 group-hover:text-red-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-grow mb-2">
                {item.desc}
              </p>
              <p className="text-sm font-bold text-red-500 mb-3">{item.price}</p>
              <span className="mt-auto inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs sm:text-sm font-bold py-2.5 px-3 shadow-md shadow-red-500/20 group-hover:from-orange-400 group-hover:to-red-500 transition-colors">
                Xem trên Shopee 🛒
              </span>
            </a>
          ))}
        </div>

        <p className="mt-5 text-xs text-slate-500 text-center sm:text-left">
          * Liên kết có hoa hồng. Giá hiển thị chỉ mang tính tham khảo.
        </p>
      </div>
    </section>
  );
}
