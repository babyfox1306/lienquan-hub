import Link from 'next/link';
import Image from 'next/image';

export default function VideoCard({ videoId, title, priority = false }) {
  return (
    <Link href={`/watch/${videoId}`} legacyBehavior passHref>
      <a className="card bg-base-100 shadow hover:shadow-lg transition block">
        <div className="w-full h-48 relative">
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
          <div className="badge badge-error absolute left-2 top-2">LIÊN QUÂN</div>
        </div>
        <div className="card-body p-3">
          <h3 className="card-title text-base line-clamp-2">{title}</h3>
        </div>
      </a>
    </Link>
  );
}


