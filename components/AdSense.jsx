import { useEffect } from 'react';
import adsenseConfig from '../lib/adsense';

const AdSense = ({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = '',
  responsive = true 
}) => {
  useEffect(() => {
    // Skip if not enabled or in test mode
    if (!adsenseConfig.enabled || adsenseConfig.testMode) {
      console.log('AdSense disabled or in test mode');
      return;
    }

    try {
      // Load AdSense script if not already loaded
      if (typeof window !== 'undefined' && !window.adsbygoogle) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.crossOrigin = 'anonymous';
        script.setAttribute('data-ad-client', adsenseConfig.clientId);
        document.head.appendChild(script);
      }

      // Initialize ad
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  if (!adSlot || !adsenseConfig.enabled) {
    return null;
  }

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={adsenseConfig.clientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdSense;
