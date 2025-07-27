import { ANIMATION_DURATION, THEMES } from '../constants'

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Whether to execute immediately
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func(...args)
  }
}

/**
 * Throttle function to limit function execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Generate unique ID
 * @param {string} prefix - Optional prefix for the ID
 * @returns {string} - Unique ID
 */
export const generateId = (prefix = '') => {
  const timestamp = Date.now().toString(36)
  const randomString = Math.random().toString(36).substring(2)
  return prefix ? `${prefix}-${timestamp}-${randomString}` : `${timestamp}-${randomString}`
}

/**
 * Check if device is mobile
 * @returns {boolean} - True if mobile device
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768
}

/**
 * Check if device is tablet
 * @returns {boolean} - True if tablet device
 */
export const isTablet = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth > 768 && window.innerWidth <= 1024
}

/**
 * Check if device is desktop
 * @returns {boolean} - True if desktop device
 */
export const isDesktop = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth > 1024
}

/**
 * Get device type
 * @returns {string} - Device type ('mobile', 'tablet', 'desktop')
 */
export const getDeviceType = () => {
  if (isMobile()) return 'mobile'
  if (isTablet()) return 'tablet'
  return 'desktop'
}

/**
 * Delay execution for specified time
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after delay
 */
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Check if browser supports clipboard API
 * @returns {boolean} - True if clipboard API is supported
 */
export const isClipboardSupported = () => {
  return typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText
}

/**
 * Safe JSON parse with fallback
 * @param {string} str - JSON string to parse
 * @param {any} fallback - Fallback value if parsing fails
 * @returns {any} - Parsed object or fallback
 */
export const safeJsonParse = (str, fallback = null) => {
  try {
    return JSON.parse(str)
  } catch (error) {
    console.warn('JSON parse error:', error)
    return fallback
  }
}

/**
 * Safe JSON stringify
 * @param {any} obj - Object to stringify
 * @param {string} fallback - Fallback string if stringify fails
 * @returns {string} - JSON string or fallback
 */
export const safeJsonStringify = (obj, fallback = '{}') => {
  try {
    return JSON.stringify(obj)
  } catch (error) {
    console.warn('JSON stringify error:', error)
    return fallback
  }
}

/**
 * Get contrast color based on background
 * @param {string} backgroundColor - Background color
 * @returns {string} - Contrast color ('light' or 'dark')
 */
export const getContrastColor = (backgroundColor) => {
  // Simple implementation - in real app, you'd calculate luminance
  const darkColors = ['dark', 'black', 'navy', 'purple']
  const isLightBackground = !darkColors.some(color => 
    backgroundColor.toLowerCase().includes(color)
  )
  return isLightBackground ? THEMES.DARK : THEMES.LIGHT
}

/**
 * Create CSS class names conditionally
 * @param {Object} classes - Object with class names as keys and conditions as values
 * @returns {string} - Space-separated class names
 */
export const classNames = (classes) => {
  return Object.entries(classes)
    .filter(([, condition]) => condition)
    .map(([className]) => className)
    .join(' ')
}

/**
 * Download file from data URL
 * @param {string} dataUrl - Data URL to download
 * @param {string} filename - Filename for download
 */
export const downloadFromDataUrl = (dataUrl, filename) => {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Check if value is empty (null, undefined, empty string, empty array, empty object)
 * @param {any} value - Value to check
 * @returns {boolean} - True if empty
 */
export const isEmpty = (value) => {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}