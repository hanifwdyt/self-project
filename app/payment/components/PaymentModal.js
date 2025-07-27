import React from 'react'
import QRISForm from './QRISForm'
import QRISDisplay from './QRISDisplay'
import AccountDetails from './AccountDetails'

const PaymentModal = ({ 
  selectedPayment, 
  onClose, 
  isDarkMode,
  // QRIS specific props
  qrisAmount,
  onQrisAmountChange,
  onGenerateQris,
  generatedQris,
  qrCodeImage,
  onDownloadQris,
  onResetQris,
  isGenerating,
  // Account specific props
  copiedAccount,
  onCopyToClipboard
}) => {
  if (!selectedPayment) return null

  return (
    <div className={`fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-50 ${
      isDarkMode ? 'bg-gray-900/80' : 'bg-gray-900/50'
    }`}>
      <div className={`border-2 sm:border-4 double shadow-2xl max-w-sm sm:max-w-lg w-full max-h-[90vh] overflow-y-auto transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-600 shadow-black/50' 
          : 'bg-white border-gray-400 shadow-gray-900/30'
      }`}>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-0">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-serif mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {selectedPayment.name}
              </h2>
              <div className={`w-12 sm:w-14 lg:w-16 h-1 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
              }`}></div>
            </div>
            <button
              onClick={onClose}
              className={`self-start w-10 h-10 sm:w-12 sm:h-12 border-2 flex items-center justify-center transition-colors duration-200 ${
                isDarkMode 
                  ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' 
                  : 'border-gray-400 bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="text-center mb-8 sm:mb-10">
            <div className={`w-16 h-16 sm:w-20 sm:h-20 border-2 mx-auto mb-4 sm:mb-6 flex items-center justify-center p-2 transition-colors duration-300 ${
              isDarkMode
                ? 'border-gray-600 bg-gray-700'
                : 'border-gray-400 bg-gray-100'
            }`}>
              <img 
                src={selectedPayment.logo} 
                alt={`${selectedPayment.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className={`text-xl sm:text-2xl font-serif transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Payment Details
            </h3>
          </div>

          {selectedPayment.id === 'qris' ? (
            <div className="text-center">
              {!generatedQris ? (
                <QRISForm
                  amount={qrisAmount}
                  onAmountChange={onQrisAmountChange}
                  onGenerate={onGenerateQris}
                  isDarkMode={isDarkMode}
                  isGenerating={isGenerating}
                />
              ) : (
                <QRISDisplay
                  qrCodeImage={qrCodeImage}
                  amount={qrisAmount}
                  onDownload={onDownloadQris}
                  onReset={onResetQris}
                  isDarkMode={isDarkMode}
                />
              )}
            </div>
          ) : (
            <AccountDetails
              accountNumber={selectedPayment.accountNumber}
              accountHolder={selectedPayment.accountHolder}
              onCopy={onCopyToClipboard}
              copiedAccount={copiedAccount}
              isDarkMode={isDarkMode}
            />
          )}

          <div className={`mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 transition-colors duration-300 ${
            isDarkMode ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <button
              onClick={onClose}
              className={`w-full py-3 sm:py-4 border-2 font-serif text-lg sm:text-xl transition-all duration-200 ${
                isDarkMode 
                  ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-200' 
                  : 'border-gray-400 bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal