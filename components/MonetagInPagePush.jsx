import { useEffect } from 'react';

const MonetagInPagePush = ({ 
  className = '',
  position = 'top' // top, bottom, middle
}) => {
  useEffect(() => {
    try {
      // Monetag In-Page Push uses Service Worker, not script tag
      console.log('Monetag In-Page Push component loaded - using Service Worker');
      
      // Check if Service Worker is available
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          console.log('Service Worker ready for Monetag In-Page Push');
        });
      }
    } catch (error) {
      console.error('Monetag In-Page Push error:', error);
    }
  }, [position]);

  return (
    <div className={`monetag-inpagepush monetag-${position} ${className}`}>
      {/* In-Page Push ads will be injected by Service Worker */}
      <div id={`monetag-inpagepush-${position}`}></div>
    </div>
  );
};

export default MonetagInPagePush;
