import AdSense from './AdSense';
import MonetagAd from './MonetagAd';
import MonetagMultitag from './MonetagMultitag';
import MonetagInPagePush from './MonetagInPagePush';
import MonetagPushNotifications from './MonetagPushNotifications';
import { useEffect, useState } from 'react';
import dualAdConfig from '../lib/dualAdConfig';

// AdSense Only System - Monetag disabled (too intrusive)
const DualAd = ({ 
  adsenseSlot, 
  monetagSlot, 
  adFormat = 'auto', 
  className = '',
  fallbackToMonetag = false // Disabled Monetag fallback
}) => {
  const [showAdSense, setShowAdSense] = useState(true);

  useEffect(() => {
    // No fallback to Monetag - AdSense only
    if (fallbackToMonetag) {
      const timer = setTimeout(() => {
        setShowAdSense(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [fallbackToMonetag]);

  return (
    <div className={`ad-container ${className}`}>
      {showAdSense && adsenseSlot ? (
        <AdSense 
          adSlot={adsenseSlot}
          adFormat={adFormat}
          className="w-full"
        />
      ) : (
        <div className="w-full h-32 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold">
          Ad Space Available
        </div>
      )}
    </div>
  );
};

// Banner Ad - AdSense only
export const BannerAd = ({ className = '' }) => (
  <div className={`banner-ad ${className}`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.banner.slot}
      adFormat="auto"
      className="w-full h-24"
      fallbackToMonetag={false}
    />
  </div>
);

// Sidebar Ad - AdSense only
export const SidebarAd = ({ className = '' }) => (
  <div className={`sidebar-ad ${className}`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.sidebar.slot}
      adFormat="auto"
      className="w-full h-64"
      fallbackToMonetag={false}
    />
  </div>
);

// In-Content Ad - AdSense only
export const InContentAd = ({ className = '' }) => (
  <div className={`in-content-ad ${className} my-6`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.inContent.slot}
      adFormat="fluid"
      className="w-full h-40"
      fallbackToMonetag={false}
    />
  </div>
);

// Mobile Ad - AdSense only
export const MobileAd = ({ className = '' }) => (
  <div className={`mobile-ad ${className} md:hidden`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.mobile.slot}
      adFormat="auto"
      className="w-full h-24"
      fallbackToMonetag={false}
    />
  </div>
);

// Video Ad Placeholder - Dual system
export const VideoAd = ({ className = '' }) => (
  <div className={`video-ad ${className}`}>
    <DualAd 
      adsenseSlot="9988776655" // AdSense Video (placeholder)
      monetagSlot="video_001" // Monetag Video (sẽ thay bằng ID thực tế)
      adFormat="video"
      className="w-full h-40"
    />
  </div>
);

// Native Ad - Dual system
export const NativeAd = ({ className = '' }) => (
  <div className={`native-ad ${className}`}>
    <DualAd 
      adsenseSlot="4433221100" // AdSense Native (placeholder)
      monetagSlot="native_001" // Monetag Native (sẽ thay bằng ID thực tế)
      adFormat="fluid"
      className="w-full h-32"
    />
  </div>
);
