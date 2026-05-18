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
  
  if (!id) return null;
  
  const flag = getCountryFlag(country);
  
  return (
    <Link href={`/watch/${id}`} legacyBehavior passHref>
      <a 
        className="card bg-base-100 shadow hover:shadow-lg transition block"
        title={isTranslated ? `Original: ${titleOriginal}` : undefined}
      >
        <div className="w-full h-48 relative">
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={t}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
          <div className="badge badge-error absolute left-2 top-2">LIÊN QUÂN</div>
          <div className="badge bg-base-100/90 text-sm absolute right-2 top-2 border shadow-sm">
            {flag}
          </div>
        </div>
        <div className="card-body p-3">
          <h3 className="card-title text-base line-clamp-2">{t}</h3>
        </div>
      </a>
    </Link>
  );
}


