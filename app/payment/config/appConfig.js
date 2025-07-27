// Application configuration
export const APP_CONFIG = {
  // Theme settings
  theme: {
    defaultMode: 'dark',
    storageKey: 'theme',
    transitionDuration: 300
  },
  
  // QRIS settings
  qris: {
    baseString: '00020101021126570011ID.DANA.WWW011893600915304851759902090485175990303UMI51440014ID.CO.QRIS.WWW0215ID10200373041250303UMI5204573253033605802ID5910HANIF TECH6010Kota Depok61051641263046AAD',
    qrCodeOptions: {
      width: 300,
      margin: 2,
      errorCorrectionLevel: 'M'
    },
    downloadPrefix: 'qris-payment'
  },
  
  // UI settings
  ui: {
    modal: {
      maxWidth: 'lg',
      overlayOpacity: {
        dark: 0.8,
        light: 0.5
      }
    },
    grid: {
      mobile: 1,
      desktop: 2
    },
    animations: {
      hover: 'hover:-translate-y-0.5',
      transition: 'transition-all duration-200'
    }
  },
  
  // Copy functionality
  clipboard: {
    feedbackDuration: 2000,
    successMessage: 'Copied!',
    errorMessage: 'Failed to copy'
  }
}

// Environment-specific settings
export const ENV_CONFIG = {
  development: {
    debug: true,
    logLevel: 'verbose'
  },
  production: {
    debug: false,
    logLevel: 'error'
  }
}

// Get current environment config
export const getCurrentEnvConfig = () => {
  const env = process.env.NODE_ENV || 'development'
  return ENV_CONFIG[env] || ENV_CONFIG.development
}