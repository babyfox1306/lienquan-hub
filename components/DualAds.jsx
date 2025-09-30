import AdSense from './AdSense';
import MonetagAd from './MonetagAd';
import { useEffect, useState } from 'react';

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

// Banner Ad - Dual system
export const BannerAd = ({ className = '' }) => (
  <div className={`banner-ad ${className}`}>
    <DualAd 
      adsenseSlot="4513188248" // AdSense Banner
      monetagSlot="banner_001" // Monetag Banner (sẽ thay bằng ID thực tế)
      adFormat="auto"
      className="w-full h-32"
    />
  </div>
);

// Sidebar Ad - Dual system
export const SidebarAd = ({ className = '' }) => (
  <div className={`sidebar-ad ${className}`}>
    <DualAd 
      adsenseSlot="5836317701" // AdSense Sidebar
      monetagSlot="sidebar_001" // Monetag Sidebar (sẽ thay bằng ID thực tế)
      adFormat="auto"
      className="w-full h-64"
    />
  </div>
);

// In-Content Ad - Dual system
export const InContentAd = ({ className = '' }) => (
  <div className={`in-content-ad ${className} my-8`}>
    <DualAd 
      adsenseSlot="9398683411" // AdSense In-Content
      monetagSlot="incontent_001" // Monetag In-Content (sẽ thay bằng ID thực tế)
      adFormat="fluid"
      className="w-full h-48"
    />
  </div>
);

// Mobile Ad - Dual system
export const MobileAd = ({ className = '' }) => (
  <div className={`mobile-ad ${className} md:hidden`}>
    <DualAd 
      adsenseSlot="5566778899" // AdSense Mobile (placeholder)
      monetagSlot="mobile_001" // Monetag Mobile (sẽ thay bằng ID thực tế)
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
