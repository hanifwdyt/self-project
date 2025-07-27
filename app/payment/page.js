'use client'
import React from 'react'
import PaymentMethodCard from './components/PaymentMethodCard'
import PaymentModal from './components/PaymentModal'
import ThemeToggle from './components/ThemeToggle'
import { PAYMENT_METHODS } from './config/paymentMethods'
import { useTheme } from '../contexts/ThemeContext'
import { usePaymentModal } from './hooks/usePaymentModal'
import { useClipboard } from './hooks/useClipboard'
import { useQRIS } from './hooks/useQRIS'
import { isQRISPayment } from './config/paymentMethods'

export default function Page() {
  // Custom hooks for state management
  const { isDarkMode } = useTheme()
  const { selectedPayment, isModalOpen, openModal, closeModal } = usePaymentModal()
  const { copyToClipboard, isCopied, copiedText } = useClipboard()
  const {
    qrisAmount,
    setQrisAmount,
    generatedQris,
    qrCodeImage,
    isGenerating,
    generateQris,
    downloadQris,
    resetQris
  } = useQRIS(isDarkMode)

  // Event handlers
  const handlePaymentSelect = (method) => {
    openModal(method)
    if (isQRISPayment(method.id)) {
      resetQris()
    }
  }

  const handleCloseModal = () => {
    closeModal()
    if (selectedPayment && isQRISPayment(selectedPayment.id)) {
      resetQris()
    }
  }

  const handleCopyToClipboard = async (text) => {
    const result = await copyToClipboard(text)
    if (!result.success) {
      alert(result.message)
    }
  }

  const handleGenerateQris = async () => {
    const result = await generateQris()
    if (!result.success) {
      // Error handling is already done in the hook
      console.error('QRIS generation failed:', result.message)
    }
  }

  const handleDownloadQris = () => {
    const result = downloadQris()
    if (!result.success) {
      alert(result.message)
    }
  }

  return (
    <div className={`min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900' 
        : 'bg-gray-100'
    }`}>
      <div className="max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto">
        <div className={`border-2 sm:border-4 double p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 transition-colors duration-300 ${
          isDarkMode 
            ? 'border-gray-600 bg-gray-800' 
            : 'border-gray-400 bg-white'
        }`}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
            <div className="flex-1 mb-4 sm:mb-0">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Payment Options
              </h1>
              <div className={`w-16 sm:w-20 lg:w-24 h-1 mb-3 sm:mb-4 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
              }`}></div>
              <p className={`text-base sm:text-lg font-serif leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Select your preferred method of payment for personal sales and business transactions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {PAYMENT_METHODS.map((method, index) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              index={index}
              isDarkMode={isDarkMode}
              onSelect={handlePaymentSelect}
            />
          ))}
        </div>

        {isModalOpen && (
          <PaymentModal
            selectedPayment={selectedPayment}
            onClose={handleCloseModal}
            isDarkMode={isDarkMode}
            qrisAmount={qrisAmount}
            onQrisAmountChange={setQrisAmount}
            onGenerateQris={handleGenerateQris}
            generatedQris={generatedQris}
            qrCodeImage={qrCodeImage}
            onDownloadQris={handleDownloadQris}
            onResetQris={resetQris}
            isGenerating={isGenerating}
            copiedAccount={copiedText}
            onCopyToClipboard={handleCopyToClipboard}
          />
        )}
      </div>
    </div>
  )
}
