import React from 'react'

const QRISForm = ({ amount, onAmountChange, onGenerate, isDarkMode, isGenerating }) => {
  return (
    <div className={`border-2 p-6 sm:p-8 mb-6 sm:mb-8 transition-colors duration-300 ${
      isDarkMode ? 'border-gray-600 bg-gray-700/30' : 'border-gray-400 bg-gray-50'
    }`}>
      <div className={`w-20 h-20 sm:w-24 sm:h-24 border-2 mx-auto mb-4 sm:mb-6 flex items-center justify-center transition-colors duration-300 ${
        isDarkMode
          ? 'border-gray-600 bg-gray-700'
          : 'border-gray-400 bg-gray-100'
      }`}>
        <div className="text-3xl sm:text-4xl">💰</div>
      </div>
      
      <h4 className={`text-xl sm:text-2xl font-serif mb-4 sm:mb-6 transition-colors duration-300 text-center ${
        isDarkMode ? 'text-gray-200' : 'text-gray-800'
      }`}>
        Enter Payment Amount
      </h4>
      
      <div className="mb-6">
        <label className={`block text-base sm:text-lg font-serif mb-3 transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Amount (IDR)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="Enter amount..."
          className={`w-full text-xl sm:text-2xl font-mono font-bold p-4 border-2 tracking-wider transition-colors duration-300 text-center ${
            isDarkMode 
              ? 'text-gray-100 bg-gray-800 border-gray-600 placeholder-gray-500' 
              : 'text-gray-900 bg-white border-gray-400 placeholder-gray-400'
          }`}
        />
      </div>
      
      <button
        onClick={onGenerate}
        disabled={!amount || parseFloat(amount) <= 0 || isGenerating}
        className={`px-6 sm:px-8 py-3 sm:py-4 border-2 font-serif text-base sm:text-lg transition-all duration-200 ${
          amount && parseFloat(amount) > 0 && !isGenerating
            ? isDarkMode
              ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-200'
              : 'border-gray-400 bg-gray-200 hover:bg-gray-300 text-gray-800'
            : isDarkMode
              ? 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'
              : 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isGenerating ? 'Generating...' : 'Generate QRIS'}
      </button>
    </div>
  )
}

export default QRISForm