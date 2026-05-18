import Link from 'next/link';
import Image from 'next/image';

const getCountryFlag = (country) => {
  if (!country || country === 'VN') return '🇻🇳';
  if (country === 'TH') return '🇹🇭';
  if (country === 'TW') return '🇹🇼';
  if (country === 'ID') return '🇮🇩';
  if (country === 'PH') return '🇵🇭';
  return '🌏';
};

export default function VideoCard({ video, videoId, title, priority = false }) {
  const id = video?.videoId || videoId;
  const t = video?.title || title || '';
  const country = video?.country || 'VN';
  const isTranslated = video?.translated || false;
  const titleOriginal = video?.title_original || '';
  const channel = video?.source === 'youtube' ? 'YouTube' : 'Liên Quân TV';
  
  if (!id) return null;
  
  const flag = getCountryFlag(country);
  
  return (
    <Link href={`/watch/${id}`} legacyBehavior passHref>
      <a 
        className="group relative overflow-hidden aspect-video w-full rounded-2xl border border-slate-800/80 bg-slate-950 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/10 block cursor-pointer"
        title={isTranslated ? `Original: ${titleOriginal}` : undefined}
      >
        {/* Aspect ratio 16/9 thumbnail container */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={t}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
          
          {/* Gradient overlay from transparent to black 85% */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 z-20 badge badge-error text-white font-black px-2.5 py-0.5 text-[9px] uppercase tracking-wider rounded-lg shadow-md">
          LIÊN QUÂN
        </div>
        <div className="absolute right-3 top-3 z-20 bg-slate-950/80 border border-slate-800 backdrop-blur-sm text-sm px-1.5 py-0.5 rounded-lg shadow-sm">
          {flag}
        </div>

        {/* Text content absolute positioned inside overlay */}
        <div className="absolute bottom-0 left-0 w-full p-3.5 z-20 flex flex-col gap-1">
          <h3 className="text-white font-bold text-sm sm:text-base line-clamp-2 leading-snug group-hover:text-red-400 transition-colors duration-200">
            {t}
          </h3>
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
            📺 {channel}
          </span>
        </div>
      </a>
    </Link>
  );
}
