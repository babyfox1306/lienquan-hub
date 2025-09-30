import { useEffect, useState } from 'react';

const AdSense = ({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = '',
  responsive = true 
}) => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    try {
      // Load AdSense script if not already loaded
      if (typeof window !== 'undefined' && !window.adsbygoogle) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1296883156065618';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }

      // Initialize ad
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true);
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Don't render anything if no ad slot or not loaded
  if (!adSlot || !adLoaded) {
    return null;
  }

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-1296883156065618"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdSense;
