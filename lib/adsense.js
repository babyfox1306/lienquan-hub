// AdSense Configuration
export const adsenseConfig = {
  clientId: 'ca-pub-1296883156065618',
  enabled: process.env.NODE_ENV === 'production',
  testMode: process.env.NODE_ENV !== 'production',
  
  // Ad Units - Bạn cần tạo các ad unit này trong AdSense dashboard
  adUnits: {
    banner: {
      slot: '4513188248', // Banner Ad Unit ID thực tế
      format: 'auto',
      responsive: true
    },
    sidebar: {
      slot: '5836317701', // Sidebar Ad Unit ID thực tế
      format: 'auto', 
      responsive: true
    },
    inContent: {
      slot: '9398683411', // In-Content Ad Unit ID thực tế
      format: 'fluid',
      responsive: true
    },
    mobile: {
      slot: '5566778899', // Thay bằng ad unit ID thực tế
      format: 'auto',
      responsive: true
    },
    video: {
      slot: '9988776655', // Thay bằng ad unit ID thực tế
      format: 'video',
      responsive: true
    }
  },
  
  // Affiliate Links - Thay bằng links thực tế của bạn
  affiliate: {
    topUp: 'https://your-affiliate-link.com/topup',
    account: 'https://your-affiliate-link.com/account', 
    tools: 'https://your-affiliate-link.com/tools'
  }
};

export default adsenseConfig;
