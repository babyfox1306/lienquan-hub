// Dual Ad Network Configuration
export const dualAdConfig = {
  // AdSense Configuration
  adsense: {
    clientId: 'ca-pub-1296883156065618',
    enabled: process.env.NODE_ENV === 'production',
    testMode: process.env.NODE_ENV !== 'production',
    
    adUnits: {
      banner: {
        slot: '4513188248',
        format: 'auto',
        responsive: true
      },
      sidebar: {
        slot: '5836317701',
        format: 'auto', 
        responsive: true
      },
      inContent: {
        slot: '9398683411',
        format: 'fluid',
        responsive: true
      },
      mobile: {
        slot: '5566778899', // Placeholder
        format: 'auto',
        responsive: true
      }
    }
  },

  // Monetag Configuration
  monetag: {
    enabled: true,
    testMode: process.env.NODE_ENV !== 'production',
    
    adUnits: {
      banner: {
        slot: 'banner_001', // Sẽ thay bằng ID thực tế từ Monetag
        format: 'auto',
        responsive: true
      },
      sidebar: {
        slot: 'sidebar_001', // Sẽ thay bằng ID thực tế từ Monetag
        format: 'auto',
        responsive: true
      },
      inContent: {
        slot: 'incontent_001', // Sẽ thay bằng ID thực tế từ Monetag
        format: 'fluid',
        responsive: true
      },
      mobile: {
        slot: 'mobile_001', // Sẽ thay bằng ID thực tế từ Monetag
        format: 'auto',
        responsive: true
      }
    }
  },

  // Fallback Strategy
  fallback: {
    enabled: true,
    timeout: 3000, // 3 seconds
    priority: 'adsense', // adsense first, then monetag
    showPlaceholder: true
  },

  // Revenue Optimization
  optimization: {
    enableA_BTesting: true,
    enableGeoOptimization: true,
    enableDeviceOptimization: true,
    enableTimeOptimization: true
  }
};

export default dualAdConfig;
