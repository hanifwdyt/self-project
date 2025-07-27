import { useState } from 'react'
import { QRISService } from '../services/qrisService'
import { ERROR_MESSAGES } from '../constants'

export const useQRIS = (isDarkMode) => {
  const [qrisAmount, setQrisAmount] = useState('')
  const [generatedQris, setGeneratedQris] = useState('')
  const [qrCodeImage, setQrCodeImage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateQris = async () => {
    if (!qrisAmount || parseFloat(qrisAmount) <= 0) {
      alert(ERROR_MESSAGES.INVALID_AMOUNT)
      return { success: false, message: ERROR_MESSAGES.INVALID_AMOUNT }
    }

    setIsGenerating(true)
    try {
      const result = await QRISService.generateDynamicQRIS(qrisAmount, isDarkMode)
      
      if (result.success) {
        setGeneratedQris(result.qrisString)
        setQrCodeImage(result.qrCodeImage)
      }
      
      return result
    } catch (error) {
      console.error('Error generating QRIS:', error)
      const errorMessage = ERROR_MESSAGES.QRIS_GENERATION_FAILED
      alert(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadQris = () => {
    if (!qrCodeImage) {
      alert(ERROR_MESSAGES.QRIS_NOT_GENERATED)
      return { success: false, message: ERROR_MESSAGES.QRIS_NOT_GENERATED }
    }

    return QRISService.downloadQRCode(qrCodeImage, qrisAmount)
  }

  const resetQris = () => {
    setGeneratedQris('')
    setQrCodeImage('')
    setQrisAmount('')
  }

  const isQrisGenerated = Boolean(generatedQris && qrCodeImage)

  return {
    qrisAmount,
    setQrisAmount,
    generatedQris,
    qrCodeImage,
    isGenerating,
    isQrisGenerated,
    generateQris,
    downloadQris,
    resetQris
  }
}