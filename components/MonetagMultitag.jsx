import { useEffect } from 'react';

const MonetagMultitag = ({ 
  className = '',
  autoOptimize = true 
}) => {
  useEffect(() => {
    try {
      // Monetag Multitag uses Service Worker, not script tag
      // The Service Worker is already registered in _document.js
      console.log('Monetag Multitag component loaded - using Service Worker');
      
      // Check if Service Worker is available
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          console.log('Service Worker ready for Monetag Multitag');
        });
      }
    } catch (error) {
      console.error('Monetag Multitag error:', error);
    }
  }, [autoOptimize]);

  return (
    <div className={`monetag-multitag ${className}`}>
      {/* Multitag ads will be injected by Service Worker */}
      <div id="monetag-multitag-container"></div>
    </div>
  );
};

export default MonetagMultitag;
