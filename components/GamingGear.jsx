import Image from 'next/image';
import { useLocale } from '../contexts/LocaleContext';

const GAMING_GEAR = [
  {
    name: 'Bao tay chơi game BlueWow',
    desc: 'Chống trượt, chống mồ hôi tay',
    price: '31.900đ',
    image: '/affiliate/gloves.jpg',
    url: 'https://s.shopee.vn/AKXdascA3u',
  },
  {
    name: 'Quạt tản nhiệt T2',
    desc: 'Chống lag, chống giật khi rank',
    price: '120.000đ',
    image: '/affiliate/fan.jpg',
    url: 'https://s.shopee.vn/AUr3nBbWix',
  },
  {
    name: 'Tai nghe SALAR A566',
    desc: 'HiFi, có mic, chơi game cực đã',
    price: '241.252đ',
    image: '/affiliate/headphone.jpg',
    url: 'https://s.shopee.vn/9Kf6P2fy5k',
  },
  {
    name: 'Pin dự phòng 20000mAh Vention',
    desc: 'Sạc nhanh 22.5W, rank cả ngày',
    price: '255.000đ',
    image: '/affiliate/powerbank.jpg',
    url: 'https://s.shopee.vn/9UyWbLfKkn',
  },
  {
    name: 'Giá đỡ tay cầm PS5 Dobe',
    desc: 'Chơi mobile như console',
    price: '110.000đ',
    image: '/affiliate/holder.jpg',
    url: 'https://s.shopee.vn/9fHwneehPq',
  },
];

export default function GamingGear({ titleKey = 'gear.titleHot' }) {
  const { t } = useLocale();
  const title = titleKey.startsWith('gear.') ? `⚡ ${t(titleKey)}` : titleKey;

  return (
    <section className="w-full px-4 sm:px-6 py-10 sm:py-12 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8 tracking-tight">{title}</h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {GAMING_GEAR.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-2xl border border-slate-800/80 bg-slate-900/60 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-slate-600 hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="relative aspect-square w-full bg-slate-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-red-600/90 text-white px-2 py-0.5 rounded-md">
                  Shopee
                </span>
              </div>

              <div className="flex flex-col flex-grow p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-1.5 line-clamp-2 group-hover:text-red-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed flex-grow mb-2 line-clamp-2">{item.desc}</p>
                <p className="text-sm font-bold text-red-500 mb-3">{item.price}</p>
                <span className="mt-auto inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs sm:text-sm font-bold py-2.5 px-3 shadow-md shadow-red-500/20 group-hover:from-orange-400 group-hover:to-red-500 transition-colors">
                  {t('gear.buyOnShopee')} 🛒
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-5 text-xs text-slate-500 text-center sm:text-left">{t('gear.disclaimer')}</p>
      </div>
    </section>
  );
}
