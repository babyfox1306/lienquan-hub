import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
  const videosPath = path.join(process.cwd(), 'public', 'videos.json');
  let latestId = null;
  if (fs.existsSync(videosPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(videosPath, 'utf8'));
      latestId = data?.videos?.[0]?.videoId || null;
    } catch (_) {}
  }
  if (latestId) {
    return { redirect: { destination: `/watch/${latestId}`, permanent: false } };
  }
  return { notFound: true };
}

export default function WatchIndex() { return null; }


