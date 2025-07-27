import { ERROR_MESSAGES } from '../constants'

/**
 * Validate payment amount
 * @param {string|number} amount - Amount to validate
 * @returns {{isValid: boolean, message?: string}}
 */
export const validateAmount = (amount) => {
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
      message: 'Amount is too large (max: 999,999,999)'
    }
  }

  // Check for too many decimal places
  const decimalPlaces = (amount.toString().split('.')[1] || '').length
  if (decimalPlaces > 2) {
    return {
      isValid: false,
      message: 'Amount cannot have more than 2 decimal places'
    }
  }

  return { isValid: true }
}

/**
 * Validate account number
 * @param {string} accountNumber - Account number to validate
 * @param {number} minLength - Minimum length
 * @param {number} maxLength - Maximum length
 * @returns {{isValid: boolean, message?: string}}
 */
export const validateAccountNumber = (accountNumber, minLength = 8, maxLength = 20) => {
  if (!accountNumber || accountNumber.trim() === '') {
    return {
      isValid: false,
      message: 'Account number is required'
    }
  }

  const trimmedAccount = accountNumber.trim()

  if (trimmedAccount.length < minLength) {
    return {
      isValid: false,
      message: `Account number must be at least ${minLength} characters`
    }
  }

  if (trimmedAccount.length > maxLength) {
    return {
      isValid: false,
      message: `Account number cannot exceed ${maxLength} characters`
    }
  }

  // Check if account number contains only digits
  if (!/^\d+$/.test(trimmedAccount)) {
    return {
      isValid: false,
      message: 'Account number must contain only digits'
    }
  }

  return { isValid: true }
}

/**
 * Validate phone number (for e-wallet accounts)
 * @param {string} phoneNumber - Phone number to validate
 * @returns {{isValid: boolean, message?: string}}
 */
export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber || phoneNumber.trim() === '') {
    return {
      isValid: false,
      message: 'Phone number is required'
    }
  }

  const trimmedPhone = phoneNumber.trim()

  // Indonesian phone number pattern (starts with 08 or +62)
  const phonePattern = /^(\+62|62|0)8[1-9][0-9]{6,10}$/

  if (!phonePattern.test(trimmedPhone)) {
    return {
      isValid: false,
      message: 'Please enter a valid Indonesian phone number'
    }
  }

  return { isValid: true }
}

/**
 * Validate account holder name
 * @param {string} name - Account holder name to validate
 * @returns {{isValid: boolean, message?: string}}
 */
export const validateAccountHolderName = (name) => {
  if (!name || name.trim() === '') {
    return {
      isValid: false,
      message: 'Account holder name is required'
    }
  }

  const trimmedName = name.trim()

  if (trimmedName.length < 2) {
    return {
      isValid: false,
      message: 'Account holder name must be at least 2 characters'
    }
  }

  if (trimmedName.length > 50) {
    return {
      isValid: false,
      message: 'Account holder name cannot exceed 50 characters'
    }
  }

  // Check if name contains only letters, spaces, and common punctuation
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmedName)) {
    return {
      isValid: false,
      message: 'Account holder name contains invalid characters'
    }
  }

  return { isValid: true }
}

/**
 * Validate required field
 * @param {any} value - Value to validate
 * @param {string} fieldName - Name of the field for error message
 * @returns {{isValid: boolean, message?: string}}
 */
export const validateRequired = (value, fieldName = 'Field') => {
  if (value === null || value === undefined || value === '') {
    return {
      isValid: false,
      message: `${fieldName} is required`
    }
  }

  if (typeof value === 'string' && value.trim() === '') {
    return {
      isValid: false,
      message: `${fieldName} is required`
    }
  }

  return { isValid: true }
}