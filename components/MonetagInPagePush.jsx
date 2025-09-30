import { useEffect } from 'react';

const MonetagInPagePush = ({ 
  className = '',
  position = 'top' // top, bottom, middle
}) => {
  useEffect(() => {
    try {
      // Load Monetag script if not already loaded
      if (typeof window !== 'undefined' && !window.monetag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://s.monetag.com/js/monetag.js';
        script.onload = () => {
          // Initialize In-Page Push
          if (window.monetag) {
            window.monetag.init({
              domain: 'grookilteepsou.net',
              zoneId: 9952051,
              formats: ['inpagepush'],
              position: position
            });
          }
        };
        document.head.appendChild(script);
      }
    } catch (error) {
      console.error('Monetag In-Page Push error:', error);
    }
  }, [position]);

  return (
    <div className={`monetag-inpagepush monetag-${position} ${className}`}>
      {/* In-Page Push ads will be injected here */}
      <div id={`monetag-inpagepush-${position}`}></div>
    </div>
  );
};

export default MonetagInPagePush;
