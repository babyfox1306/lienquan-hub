import AdSense from './AdSense';
import MonetagAd from './MonetagAd';
import MonetagMultitag from './MonetagMultitag';
import MonetagInPagePush from './MonetagInPagePush';
import MonetagPushNotifications from './MonetagPushNotifications';
import { useEffect, useState } from 'react';
import dualAdConfig from '../lib/dualAdConfig';

// Dual Ad System - AdSense + Monetag
const DualAd = ({ 
  adsenseSlot, 
  monetagSlot, 
  adFormat = 'auto', 
  className = '',
  fallbackToMonetag = true 
}) => {
  const [showAdSense, setShowAdSense] = useState(true);

  useEffect(() => {
    // Fallback to Monetag if AdSense fails
    if (fallbackToMonetag) {
      const timer = setTimeout(() => {
        setShowAdSense(false);
      }, 3000); // Wait 3 seconds for AdSense to load
      
      return () => clearTimeout(timer);
    }
  }, [fallbackToMonetag]);

  return (
    <div className={`dual-ad-container ${className}`}>
      {showAdSense && adsenseSlot ? (
        <AdSense 
          adSlot={adsenseSlot}
          adFormat={adFormat}
          className="w-full"
        />
      ) : monetagSlot ? (
        <MonetagAd 
          adSlot={monetagSlot}
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

// Banner Ad - Triple system (AdSense + Monetag Multitag + In-Page Push)
export const BannerAd = ({ className = '' }) => (
  <div className={`banner-ad ${className}`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.banner.slot} // AdSense Banner
      monetagSlot={dualAdConfig.monetag.adUnits.banner.slot} // Monetag Banner
      adFormat="auto"
      className="w-full h-32"
    />
    {/* Monetag Multitag for automatic optimization */}
    <MonetagMultitag className="w-full" />
    {/* Monetag In-Page Push as banner alternative */}
    <MonetagInPagePush position="top" className="w-full" />
  </div>
);

// Sidebar Ad - Dual system
export const SidebarAd = ({ className = '' }) => (
  <div className={`sidebar-ad ${className}`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.sidebar.slot} // AdSense Sidebar
      monetagSlot={dualAdConfig.monetag.adUnits.sidebar.slot} // Monetag Sidebar
      adFormat="auto"
      className="w-full h-64"
    />
  </div>
);

// In-Content Ad - Triple system (AdSense + Monetag Multitag + In-Page Push)
export const InContentAd = ({ className = '' }) => (
  <div className={`in-content-ad ${className} my-8`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.inContent.slot} // AdSense In-Content
      monetagSlot={dualAdConfig.monetag.adUnits.inContent.slot} // Monetag In-Content
      adFormat="fluid"
      className="w-full h-48"
    />
    {/* Monetag Multitag for automatic optimization */}
    <MonetagMultitag className="w-full" />
    {/* Monetag In-Page Push in middle of content */}
    <MonetagInPagePush position="middle" className="w-full" />
  </div>
);

// Mobile Ad - Dual system
export const MobileAd = ({ className = '' }) => (
  <div className={`mobile-ad ${className} md:hidden`}>
    <DualAd 
      adsenseSlot={dualAdConfig.adsense.adUnits.mobile.slot} // AdSense Mobile
      monetagSlot={dualAdConfig.monetag.adUnits.mobile.slot} // Monetag Mobile
      adFormat="auto"
      className="w-full h-24"
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
