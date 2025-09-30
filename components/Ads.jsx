import AdSense from './AdSense';
import adsenseConfig from '../lib/adsense';

// Banner Ad - Hiển thị ở đầu trang
export const BannerAd = ({ className = '' }) => (
  <div className={`banner-ad ${className}`}>
    <AdSense 
      adSlot={adsenseConfig.adUnits.banner.slot}
      adFormat={adsenseConfig.adUnits.banner.format}
      className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center"
    />
  </div>
);

// Sidebar Ad - Hiển thị ở sidebar
export const SidebarAd = ({ className = '' }) => (
  <div className={`sidebar-ad ${className}`}>
    <AdSense 
      adSlot={adsenseConfig.adUnits.sidebar.slot}
      adFormat={adsenseConfig.adUnits.sidebar.format}
      className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center"
    />
  </div>
);

// In-Content Ad - Hiển thị giữa nội dung
export const InContentAd = ({ className = '' }) => (
  <div className={`in-content-ad ${className} my-8`}>
    <AdSense 
      adSlot={adsenseConfig.adUnits.inContent.slot}
      adFormat={adsenseConfig.adUnits.inContent.format}
      className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center"
    />
  </div>
);

// Mobile Ad - Tối ưu cho mobile
export const MobileAd = ({ className = '' }) => (
  <div className={`mobile-ad ${className} md:hidden`}>
    <AdSense 
      adSlot={adsenseConfig.adUnits.mobile.slot}
      adFormat={adsenseConfig.adUnits.mobile.format}
      className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center"
    />
  </div>
);

// Video Ad Placeholder - Cho video content
export const VideoAd = ({ className = '' }) => (
  <div className={`video-ad ${className}`}>
    <AdSense 
      adSlot={adsenseConfig.adUnits.video.slot}
      adFormat={adsenseConfig.adUnits.video.format}
      className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center"
    />
  </div>
);

// Native Ad - Quảng cáo tự nhiên
export const NativeAd = ({ className = '' }) => (
  <div className={`native-ad ${className}`}>
    <AdSense 
      adSlot={adsenseConfig.adUnits.inContent.slot}
      adFormat="fluid"
      className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center"
    />
  </div>
);
