import { useEffect } from 'react';

const MonetagPushNotifications = ({ 
  className = '',
  autoSubscribe = true 
}) => {
  useEffect(() => {
    try {
      // Load Monetag script if not already loaded
      if (typeof window !== 'undefined' && !window.monetag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://s.monetag.com/js/monetag.js';
        script.onload = () => {
          // Initialize Push Notifications
          if (window.monetag) {
            window.monetag.init({
              domain: 'grookilteepsou.net',
              zoneId: 9952051,
              formats: ['push'],
              autoSubscribe: autoSubscribe
            });
          }
        };
        document.head.appendChild(script);
      }
    } catch (error) {
      console.error('Monetag Push Notifications error:', error);
    }
  }, [autoSubscribe]);

  return (
    <div className={`monetag-push-notifications ${className}`}>
      {/* Push notification subscription will be handled automatically */}
      <div id="monetag-push-container"></div>
    </div>
  );
};

export default MonetagPushNotifications;
