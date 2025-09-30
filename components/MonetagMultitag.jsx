import { useEffect } from 'react';

const MonetagMultitag = ({ 
  className = '',
  autoOptimize = true 
}) => {
  useEffect(() => {
    try {
      // Load Monetag Multitag script
      if (typeof window !== 'undefined' && !window.monetag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://s.monetag.com/js/monetag.js';
        script.onload = () => {
          // Initialize Multitag after script loads
          if (window.monetag) {
            window.monetag.init({
              domain: 'grookilteepsou.net',
              zoneId: 9952051,
              autoOptimize: autoOptimize,
              formats: ['multitag'] // Focus on multitag format
            });
          }
        };
        document.head.appendChild(script);
      }
    } catch (error) {
      console.error('Monetag Multitag error:', error);
    }
  }, [autoOptimize]);

  return (
    <div className={`monetag-multitag ${className}`}>
      {/* Multitag will automatically inject ads here */}
      <div id="monetag-multitag-container"></div>
    </div>
  );
};

export default MonetagMultitag;
