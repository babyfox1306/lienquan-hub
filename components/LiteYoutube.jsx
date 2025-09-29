import { useEffect } from 'react';

export default function LiteYoutube({ videoId, title }) {
  useEffect(() => {
    if (!customElements.get('lite-youtube')) {
      const s = document.createElement('script');
      s.src = "https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed/src/lite-yt-embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <lite-youtube videoid={videoId} title={title} style={{ width: '100%' }}></lite-youtube>
    </div>
  );
}


