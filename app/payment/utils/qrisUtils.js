// QRIS utility functions for browser-compatible dynamic QRIS generation
import { QRIS_CONSTANTS } from '../constants'

export const generateDynamicQris = (baseQris, amount) => {
  // Parse amount to ensure it's a valid number
  const parsedAmount = parseFloat(amount)
  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    throw new Error('Invalid amount')
  }

  // Format amount as string with specified decimal places
  const formattedAmount = parsedAmount.toFixed(QRIS_CONSTANTS.AMOUNT_DECIMAL_PLACES)
  const amountLength = formattedAmount.length.toString().padStart(2, '0')
  
  // Create the amount field (54 = Transaction Amount)
  const amountField = `${QRIS_CONSTANTS.TAG_AMOUNT}${amountLength}${formattedAmount}`
  
  // Remove existing amount field if present and add new one
  let qrisString = baseQris
  
  // Remove existing tag 54 if present
  qrisString = qrisString.replace(/54\d{2}[\d.]+/g, '')
  
  // Find position to insert amount (before tag 58 - Country Code)
  const countryCodeIndex = qrisString.indexOf(QRIS_CONSTANTS.COUNTRY_CODE_POSITION)
  if (countryCodeIndex !== -1) {
    qrisString = qrisString.slice(0, countryCodeIndex) + amountField + qrisString.slice(countryCodeIndex)
  } else {
    // If no country code found, append before the last 4 characters (CRC)
    qrisString = qrisString.slice(0, -QRIS_CONSTANTS.CRC_LENGTH) + amountField + qrisString.slice(-QRIS_CONSTANTS.CRC_LENGTH)
  }
  
  // Recalculate CRC16
  const crcData = qrisString.slice(0, -QRIS_CONSTANTS.CRC_LENGTH)
  const newCrc = calculateCRC16(crcData)
  
  return crcData + newCrc
}

// CRC16 calculation for QRIS
export const calculateCRC16 = (data) => {
  let crc = 0xFFFF
  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021
      } else {
        crc = crc << 1
      }
    }
  }
  crc &= 0xFFFF
  return crc.toString(16).toUpperCase().padStart(QRIS_CONSTANTS.CRC_LENGTH, '0')
}

/**
 * Validate QRIS string format
 * @param {string} qrisString - QRIS string to validate
 * @returns {{isValid: boolean, message?: string}}
 */
export const validateQRISString = (qrisString) => {
  if (!qrisString || typeof qrisString !== 'string') {
    return {
      isValid: false,
      message: 'QRIS string is required'
    }
  }

  if (qrisString.length < 50) {
    return {
      isValid: false,
      message: 'QRIS string is too short'
    }
  }

  // Check if string contains only valid characters (alphanumeric and some symbols)
  if (!/^[A-Za-z0-9.]+$/.test(qrisString)) {
    return {
      isValid: false,
      message: 'QRIS string contains invalid characters'
    }
  }

  return { isValid: true }
}

/**
 * Extract amount from QRIS string if present
 * @param {string} qrisString - QRIS string to parse
 * @returns {number|null} - Extracted amount or null if not found
 */
export const extractAmountFromQRIS = (qrisString) => {
  try {
    const amountMatch = qrisString.match(/54(\d{2})([0-9.]+)/)
    if (amountMatch && amountMatch[2]) {
      return parseFloat(amountMatch[2])
    }
    return null
  } catch (error) {
    console.error('Error extracting amount from QRIS:', error)
    return null
  }
}