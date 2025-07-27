import { CURRENCY } from '../constants'

/**
 * Format currency amount for display
 * @param {string|number} amount - Amount to format
 * @param {string} locale - Locale for formatting
 * @param {string} currency - Currency code
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, locale = CURRENCY.LOCALE, currency = CURRENCY.CODE) => {
  try {
    const parsedAmount = parseFloat(amount)
    if (isNaN(parsedAmount)) return amount

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(parsedAmount)
  } catch (error) {
    console.error('Currency formatting error:', error)
    return `${CURRENCY.SYMBOL} ${amount}`
  }
}

/**
 * Format number with thousand separators
 * @param {string|number} number - Number to format
 * @param {string} locale - Locale for formatting
 * @returns {string} - Formatted number string
 */
export const formatNumber = (number, locale = CURRENCY.LOCALE) => {
  try {
    const parsedNumber = parseFloat(number)
    if (isNaN(parsedNumber)) return number

    return new Intl.NumberFormat(locale).format(parsedNumber)
  } catch (error) {
    console.error('Number formatting error:', error)
    return number.toString()
  }
}

/**
 * Format payment method display name
 * @param {string} name - Payment method name
 * @param {string} type - Payment method type
 * @returns {string} - Formatted display name
 */
export const formatPaymentMethodName = (name, type) => {
  const typeLabels = {
    bank: 'Bank Transfer',
    ewallet: 'E-Wallet',
    qr: 'QR Code'
  }

  return `${name} - ${typeLabels[type] || type}`
}

/**
 * Format file size in human readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} - Formatted file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Format account number with masking
 * @param {string} accountNumber - Account number to mask
 * @param {number} visibleStart - Number of visible characters at start
 * @param {number} visibleEnd - Number of visible characters at end
 * @returns {string} - Masked account number
 */
export const formatAccountNumber = (accountNumber, visibleStart = 4, visibleEnd = 4) => {
  if (!accountNumber || accountNumber.length <= visibleStart + visibleEnd) {
    return accountNumber
  }

  const start = accountNumber.substring(0, visibleStart)
  const end = accountNumber.substring(accountNumber.length - visibleEnd)
  const middle = '*'.repeat(accountNumber.length - visibleStart - visibleEnd)

  return `${start}${middle}${end}`
}