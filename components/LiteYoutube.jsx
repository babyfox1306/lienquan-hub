import { useEffect } from 'react';

export default function LiteYoutube({ videoId, title }) {
  useEffect(() => {
    // Load the script only once to avoid "Identifier 'LiteYTEmbed' has already been declared"
    const SCRIPT_SRC = 'https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed/src/lite-yt-embed.js';
    const alreadyLoaded =
      typeof window !== 'undefined' &&
      (window.__liteYTLoaded === true || document.querySelector(`script[src="${SCRIPT_SRC}"]`));
    if (!alreadyLoaded && !customElements.get('lite-youtube')) {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      s.setAttribute('data-lite-yt', 'true');
      s.onload = () => {
        window.__liteYTLoaded = true;
      };
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <lite-youtube videoid={videoId} title={title} style={{ width: '100%' }}></lite-youtube>
    </div>
  );
}


