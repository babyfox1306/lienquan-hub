import { useEffect } from 'react';

const MonetagPushNotifications = ({ 
  className = '',
  autoSubscribe = true 
}) => {
  useEffect(() => {
    try {
      // Monetag Push Notifications uses Service Worker, not script tag
      console.log('Monetag Push Notifications component loaded - using Service Worker');
      
      // Check if Service Worker is available
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
          console.log('Service Worker ready for Monetag Push Notifications');
        });
      }
    } catch (error) {
      console.error('Monetag Push Notifications error:', error);
    }
  }, [autoSubscribe]);

  return (
    <div className={`monetag-push-notifications ${className}`}>
      {/* Push notification subscription will be handled by Service Worker */}
      <div id="monetag-push-container"></div>
    </div>
  );
};

export default MonetagPushNotifications;
