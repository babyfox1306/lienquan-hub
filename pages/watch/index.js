import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadVideos } from '../../lib/videos';

export async function getStaticProps() {
  const all = loadVideos();
  return {
    props: { latestId: all[0]?.videoId || null },
    revalidate: 60,
  };
}

export default function WatchIndex({ latestId }) {
  const router = useRouter();
  useEffect(() => {
    if (latestId) router.replace(`/watch/${latestId}`);
    else router.replace('/404');
  }, [latestId, router]);
  return null;
}
