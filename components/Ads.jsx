import AdSense from './AdSense';

// Banner Ad - Hiển thị ở đầu trang
export const BannerAd = ({ className = '' }) => (
  <div className={`banner-ad ${className}`}>
    <AdSense 
      adSlot="4513188248" // Banner Ad Unit ID thực tế
      adFormat="auto"
      className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold"
    />
  </div>
);

// Sidebar Ad - Hiển thị ở sidebar
export const SidebarAd = ({ className = '' }) => (
  <div className={`sidebar-ad ${className}`}>
    <AdSense 
      adSlot="0987654321" // Bạn cần tạo ad unit trong AdSense và thay mã này
      adFormat="rectangle"
      className="w-full h-64 bg-gradient-to-b from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold"
    />
  </div>
);

// In-Content Ad - Hiển thị giữa nội dung
export const InContentAd = ({ className = '' }) => (
  <div className={`in-content-ad ${className} my-8`}>
    <AdSense 
      adSlot="9398683411" // In-Content Ad Unit ID thực tế
      adFormat="fluid"
      className="w-full h-48 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold"
    />
  </div>
);

// Mobile Ad - Tối ưu cho mobile
export const MobileAd = ({ className = '' }) => (
  <div className={`mobile-ad ${className} md:hidden`}>
    <AdSense 
      adSlot="5566778899" // Bạn cần tạo ad unit trong AdSense và thay mã này
      adFormat="auto"
      className="w-full h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm"
    />
  </div>
);

// Video Ad Placeholder - Cho video content
export const VideoAd = ({ className = '' }) => (
  <div className={`video-ad ${className}`}>
    <AdSense 
      adSlot="9988776655" // Bạn cần tạo ad unit trong AdSense và thay mã này
      adFormat="video"
      className="w-full h-40 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold"
    />
  </div>
);

// Native Ad - Quảng cáo tự nhiên
export const NativeAd = ({ className = '' }) => (
  <div className={`native-ad ${className}`}>
    <AdSense 
      adSlot="4433221100" // Bạn cần tạo ad unit trong AdSense và thay mã này
      adFormat="fluid"
      className="w-full h-32 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold"
    />
  </div>
);
