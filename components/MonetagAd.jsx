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
      // MonetagAd uses Service Worker, not script tag
      console.log('MonetagAd component loaded - using Service Worker');
      
      // Check if Service Worker is available
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          console.log('Service Worker ready for MonetagAd');
          setIsLoaded(true);
        });
      } else {
        setIsLoaded(true); // Fallback if no Service Worker
      }
    } catch (error) {
      console.error('MonetagAd error:', error);
      setIsLoaded(true); // Fallback on error
    }
  }, []);

  if (!adSlot || !isLoaded) {
    return null;
  }

  return (
    <div className={`monetag-container ${className}`}>
      {/* Monetag ads will be injected by Service Worker */}
      <div id={`monetag-ad-${adSlot}`}></div>
    </div>
  );
};

export default MonetagAd;
