import React from 'react'

const QRISDisplay = ({ qrCodeImage, amount, onDownload, onReset, isDarkMode }) => {
  return (
    <div className={`border-2 p-6 sm:p-8 mb-6 sm:mb-8 transition-colors duration-300 ${
      isDarkMode ? 'border-gray-600 bg-gray-700/30' : 'border-gray-400 bg-gray-50'
    }`}>
      <div className={`w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 mx-auto mb-4 sm:mb-6 flex items-center justify-center transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-600' 
          : 'bg-white border-gray-400'
      }`}>
        {qrCodeImage ? (
          <img 
            src={qrCodeImage} 
            alt="QRIS QR Code" 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-6xl sm:text-7xl lg:text-8xl">📱</div>
        )}
      </div>
      
      <p className={`text-base sm:text-lg font-serif mb-2 transition-colors duration-300 text-center ${
        isDarkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        Quick Response Code System
      </p>
      
      <p className={`text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-6 transition-colors duration-300 text-center ${
        isDarkMode ? 'text-gray-100' : 'text-gray-900'
      }`}>
        Amount: IDR {parseInt(amount).toLocaleString('id-ID')}
      </p>
      
      <div className="space-y-3">
        <button
          onClick={onDownload}
          className={`w-full px-6 sm:px-8 py-3 sm:py-4 border-2 font-serif text-base sm:text-lg transition-all duration-200 ${
            isDarkMode
              ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-200'
              : 'border-gray-400 bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          Download QR Code
        </button>
        
        <button
          onClick={onReset}
          className={`w-full px-6 sm:px-8 py-2 sm:py-3 border-2 font-serif text-sm sm:text-base transition-all duration-200 ${
            isDarkMode
              ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-400'
              : 'border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
        >
          Generate New QRIS
        </button>
      </div>
    </div>
  )
}

export default QRISDisplay