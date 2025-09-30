// AdSense Configuration
// Copy this file to .env.local and fill in your actual values

export const adsenseConfig = {
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-xxxxxxxxxxxxxxxx',
  enabled: process.env.NODE_ENV === 'production',
  testMode: process.env.NODE_ENV !== 'production',
  
  // Ad Units
  adUnits: {
    banner: {
      slot: '1234567890',
      format: 'horizontal',
      responsive: true
    },
    sidebar: {
      slot: '0987654321',
      format: 'rectangle', 
      responsive: true
    },
    inContent: {
      slot: '1122334455',
      format: 'fluid',
      responsive: true
    },
    mobile: {
      slot: '5566778899',
      format: 'auto',
      responsive: true
    },
    video: {
      slot: '9988776655',
      format: 'video',
      responsive: true
    }
  },
  
  // Affiliate Links
  affiliate: {
    topUp: 'https://affiliate-link.com/topup',
    account: 'https://affiliate-link.com/account', 
    tools: 'https://affiliate-link.com/tools'
  }
};

export default adsenseConfig;
