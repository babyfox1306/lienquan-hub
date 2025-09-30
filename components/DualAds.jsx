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
  fallbackToMonetag = false, // Disabled Monetag fallback
  showPlaceholder = false // Don't show placeholder by default
}) => {
  const [showAdSense, setShowAdSense] = useState(true);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    // Check if AdSense is available
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      setAdLoaded(true);
    }
    
    // No fallback to Monetag - AdSense only
    if (fallbackToMonetag) {
      const timer = setTimeout(() => {
        setShowAdSense(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [fallbackToMonetag]);

  // Don't render anything if no ads and no placeholder
  if (!adsenseSlot && !showPlaceholder) {
    return null;
  }

  return (
    <div className={`ad-container ${className}`}>
      {showAdSense && adsenseSlot ? (
        <AdSense 
          adSlot={adsenseSlot}
          adFormat={adFormat}
          className="w-full"
        />
      ) : showPlaceholder ? (
        <div className="w-full h-32 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white font-bold">
          Ad Space Available
        </div>
      ) : null}
    </div>
  );
};

// Banner Ad - AdSense only, no placeholder
export const BannerAd = ({ className = '' }) => (
  <DualAd 
    adsenseSlot={dualAdConfig.adsense.adUnits.banner.slot}
    adFormat="auto"
    className={`banner-ad ${className}`}
    fallbackToMonetag={false}
    showPlaceholder={false}
  />
);

// Sidebar Ad - AdSense only, no placeholder
export const SidebarAd = ({ className = '' }) => (
  <DualAd 
    adsenseSlot={dualAdConfig.adsense.adUnits.sidebar.slot}
    adFormat="auto"
    className={`sidebar-ad ${className}`}
    fallbackToMonetag={false}
    showPlaceholder={false}
  />
);

// In-Content Ad - AdSense only, no placeholder
export const InContentAd = ({ className = '' }) => (
  <DualAd 
    adsenseSlot={dualAdConfig.adsense.adUnits.inContent.slot}
    adFormat="fluid"
    className={`in-content-ad ${className} my-6`}
    fallbackToMonetag={false}
    showPlaceholder={false}
  />
);

// Mobile Ad - AdSense only, no placeholder
export const MobileAd = ({ className = '' }) => (
  <DualAd 
    adsenseSlot={dualAdConfig.adsense.adUnits.mobile.slot}
    adFormat="auto"
    className={`mobile-ad ${className} md:hidden`}
    fallbackToMonetag={false}
    showPlaceholder={false}
  />
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
