import Head from 'next/head';
import LiteYoutube from '../../components/LiteYoutube';

export async function getServerSideProps(ctx) {
  const { id } = ctx.params || {};
  if (!id) {
    return { notFound: true };
  }
  const title = `Liên Quân — ${id}`;
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: "Highlight Liên Quân — tổng hợp highlight & guide",
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    uploadDate: new Date().toISOString(),
    contentUrl: videoUrl,
    embedUrl: videoUrl
  };
  return { props: { id, title, schema } };
}

export default function Watch({ id, title, schema }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Liên Quân Hub — tổng hợp highlight & guide" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Liên Quân Hub — tổng hợp highlight & guide" />
        <meta property="og:image" content={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} />
        <meta property="og:video" content={`https://www.youtube.com/watch?v=${id}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold mb-4">Video</h1>
        <div className="bg-white rounded shadow p-4">
          <LiteYoutube videoId={id} title={`Liên Quân — ${id}`} />
          <p className="mt-3 text-sm text-gray-600">Nguồn: YouTube — embed</p>
        </div>
      </div>
    </div>
  );
}


