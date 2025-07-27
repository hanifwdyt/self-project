import { useState } from 'react'
import { APP_CONFIG } from '../config/appConfig'
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../constants'

export const useClipboard = () => {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      
      // Clear the copied state after the configured duration
      setTimeout(() => {
        setCopiedText('')
      }, APP_CONFIG.clipboard.feedbackDuration)
      
      return { success: true, message: SUCCESS_MESSAGES.COPIED }
    } catch (error) {
      console.error('Failed to copy:', error)
      return { success: false, message: ERROR_MESSAGES.COPY_FAILED }
    }
  }

  const isCopied = (text) => copiedText === text

  const clearCopied = () => setCopiedText('')

  return {
    copyToClipboard,
    isCopied,
    copiedText,
    clearCopied
  }
}