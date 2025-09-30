// Dual Ad Network Configuration
export const dualAdConfig = {
  // AdSense Configuration
  adsense: {
    clientId: 'ca-pub-1296883156065618',
    enabled: true, // Temporarily enable for testing
    testMode: false, // Temporarily disable test mode
    
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

  // Monetag Configuration - DISABLED (too intrusive for current content)
  monetag: {
    enabled: false, // Disabled - ads too intrusive for current content
    testMode: false,
    // Disable push notifications to reduce spam
    pushNotifications: false,
    
    adUnits: {
      banner: {
        slot: '9952071', // In-Page Push Zone ID
        format: 'auto',
        responsive: true
      },
      sidebar: {
        slot: '9952073', // Vignette Banner Zone ID
        format: 'auto',
        responsive: true
      },
      inContent: {
        slot: '9952072', // Native Banner (Interstitial) Zone ID
        format: 'fluid',
        responsive: true
      },
      mobile: {
        slot: '9952071', // In-Page Push Zone ID (mobile friendly)
        format: 'auto',
        responsive: true
      },
      push: {
        slot: '9952074', // Push Notifications Zone ID
        format: 'push',
        responsive: true
      },
      popunder: {
        slot: '174738', // OnClick (Popunder) Zone ID - Updated from Monetag
        format: 'popunder',
        responsive: true
      }
    }
  },

  // Grookilteepsou Ad Network (Service Workers)
  grookilteepsou: {
    enabled: true,
    domain: 'grookilteepsou.net',
    zones: {
      main: {
        zoneId: 9952051,
        serviceWorker: '/sw.js'
      },
      push: {
        zoneId: 9952074,
        serviceWorker: '/sw-push.js'
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
