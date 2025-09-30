import { useEffect, useState } from 'react';

const MonetagAd = ({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = '',
  responsive = true 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      // Load Monetag script if not already loaded
      if (typeof window !== 'undefined' && !window.monetagLoaded) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://s.monetag.com/js/monetag.js';
        script.onload = () => {
          window.monetagLoaded = true;
          setIsLoaded(true);
          console.log('Monetag script loaded');
        };
        document.head.appendChild(script);
      } else if (window.monetagLoaded) {
        setIsLoaded(true);
      }
    } catch (error) {
      console.error('Monetag error:', error);
    }
  }, []);

  if (!adSlot || !isLoaded) {
    return null;
  }

  return (
    <div className={`monetag-container ${className}`}>
      <ins
        className="monetag-ad"
        style={adStyle}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default MonetagAd;
