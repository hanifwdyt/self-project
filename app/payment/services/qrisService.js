import QRCode from 'qrcode'
import { generateDynamicQris } from '../utils/qrisUtils'
import { APP_CONFIG } from '../config/appConfig'
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../constants'

export class QRISService {
  /**
   * Generate dynamic QRIS with QR code image
   * @param {string|number} amount - Payment amount
   * @param {boolean} isDarkMode - Theme mode for QR code colors
   * @returns {Promise<{success: boolean, qrisString?: string, qrCodeImage?: string, message: string}>}
   */
  static async generateDynamicQRIS(amount, isDarkMode = false) {
    try {
      // Validate amount
      const parsedAmount = parseFloat(amount)
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        return {
          success: false,
          message: ERROR_MESSAGES.INVALID_AMOUNT
        }
      }

      // Generate dynamic QRIS string
      const qrisString = generateDynamicQris(APP_CONFIG.qris.baseString, parsedAmount)

      // Generate QR code image
      const qrCodeOptions = {
        ...APP_CONFIG.qris.qrCodeOptions,
        color: {
          dark: isDarkMode ? '#ffffff' : '#000000',
          light: isDarkMode ? '#1f2937' : '#ffffff'
        }
      }

      const qrCodeImage = await QRCode.toDataURL(qrisString, qrCodeOptions)

      return {
        success: true,
        qrisString,
        qrCodeImage,
        message: SUCCESS_MESSAGES.QRIS_GENERATED
      }
    } catch (error) {
      console.error('QRIS generation error:', error)
      return {
        success: false,
        message: ERROR_MESSAGES.QRIS_GENERATION_FAILED
      }
    }
  }

  /**
   * Download QR code as PNG file
   * @param {string} qrCodeDataUrl - Base64 data URL of QR code
   * @param {string|number} amount - Payment amount for filename
   * @returns {{success: boolean, message: string}}
   */
  static downloadQRCode(qrCodeDataUrl, amount) {
    try {
      if (!qrCodeDataUrl) {
        return {
          success: false,
          message: ERROR_MESSAGES.QRIS_NOT_GENERATED
        }
      }

      const link = document.createElement('a')
      link.download = `${APP_CONFIG.qris.downloadPrefix}-${amount}.png`
      link.href = qrCodeDataUrl
      link.click()

      return {
        success: true,
        message: SUCCESS_MESSAGES.DOWNLOAD_STARTED
      }
    } catch (error) {
      console.error('Download error:', error)
      return {
        success: false,
        message: 'Failed to download QR code'
      }
    }
  }

  /**
   * Validate QRIS amount
   * @param {string|number} amount - Amount to validate
   * @returns {{isValid: boolean, message?: string}}
   */
  static validateAmount(amount) {
    if (!amount || amount === '') {
      return {
        isValid: false,
        message: 'Amount is required'
      }
    }

    const parsedAmount = parseFloat(amount)
    if (isNaN(parsedAmount)) {
      return {
        isValid: false,
        message: 'Amount must be a valid number'
      }
    }

    if (parsedAmount <= 0) {
      return {
        isValid: false,
        message: 'Amount must be greater than 0'
      }
    }

    if (parsedAmount > 999999999) {
      return {
        isValid: false,
        message: 'Amount is too large'
      }
    }

    return { isValid: true }
  }

  /**
   * Format amount for display
   * @param {string|number} amount - Amount to format
   * @param {string} locale - Locale for formatting (default: 'id-ID')
   * @returns {string} - Formatted amount string
   */
  static formatAmount(amount, locale = 'id-ID') {
    try {
      const parsedAmount = parseFloat(amount)
      if (isNaN(parsedAmount)) return amount

      return parsedAmount.toLocaleString(locale)
    } catch (error) {
      console.error('Amount formatting error:', error)
      return amount.toString()
    }
  }
}