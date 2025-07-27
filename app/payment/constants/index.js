// UI Constants
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280
}

export const Z_INDEX = {
  MODAL: 50,
  OVERLAY: 40,
  DROPDOWN: 30,
  HEADER: 20,
  CONTENT: 10
}

// Theme constants
export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
}

// Animation durations (ms)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
  VERY_SLOW: 500
}

// Payment types
export const PAYMENT_TYPES = {
  BANK: 'bank',
  EWALLET: 'ewallet',
  QR: 'qr'
}

// QRIS constants
export const QRIS_CONSTANTS = {
  TAG_AMOUNT: '54',
  TAG_COUNTRY: '58',
  COUNTRY_CODE_POSITION: '5802',
  CRC_LENGTH: 4,
  AMOUNT_DECIMAL_PLACES: 2
}

// File extensions
export const FILE_EXTENSIONS = {
  PNG: 'png',
  JPG: 'jpg',
  PDF: 'pdf'
}

// Error messages
export const ERROR_MESSAGES = {
  INVALID_AMOUNT: 'Please enter a valid amount',
  COPY_FAILED: 'Failed to copy to clipboard',
  QRIS_GENERATION_FAILED: 'Error generating QRIS. Please try again.',
  QRIS_NOT_GENERATED: 'Please generate QRIS first'
}

// Success messages
export const SUCCESS_MESSAGES = {
  COPIED: 'Copied!',
  QRIS_GENERATED: 'QRIS generated successfully',
  DOWNLOAD_STARTED: 'Download started'
}

// Currency
export const CURRENCY = {
  CODE: 'IDR',
  SYMBOL: 'Rp',
  LOCALE: 'id-ID'
}