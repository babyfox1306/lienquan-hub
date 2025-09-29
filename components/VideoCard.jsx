import Link from 'next/link';
import Image from 'next/image';

export default function VideoCard({ video, videoId, title, priority = false }) {
  const id = video?.videoId || videoId;
  const t = video?.title || title || '';
  if (!id) return null;
  return (
    <Link href={`/watch/${id}`} legacyBehavior passHref>
      <a className="card bg-base-100 shadow hover:shadow-lg transition block">
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
        </div>
        <div className="card-body p-3">
          <h3 className="card-title text-base line-clamp-2">{t}</h3>
        </div>
      </a>
    </Link>
  );
}


