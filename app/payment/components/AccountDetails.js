import React from 'react'

const AccountDetails = ({ accountNumber, accountHolder, onCopy, copiedAccount, isDarkMode }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className={`border-2 p-4 sm:p-6 transition-colors duration-300 ${
        isDarkMode ? 'border-gray-600 bg-gray-700/30' : 'border-gray-400 bg-gray-50'
      }`}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 space-y-2 sm:space-y-0">
          <label className={`text-base sm:text-lg font-serif transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Account Number
          </label>
          <button
            onClick={() => onCopy(accountNumber)}
            className={`px-3 sm:px-4 py-2 border-2 font-serif text-sm sm:text-base transition-all duration-200 ${
              copiedAccount === accountNumber
                ? 'border-green-500 bg-green-100 text-green-800'
                : isDarkMode
                  ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-200'
                  : 'border-gray-400 bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {copiedAccount === accountNumber ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className={`text-lg sm:text-xl lg:text-2xl font-mono font-bold p-3 sm:p-4 border-2 tracking-wider sm:tracking-widest transition-colors duration-300 break-all ${
          isDarkMode 
            ? 'text-gray-100 bg-gray-800 border-gray-600' 
            : 'text-gray-900 bg-white border-gray-400'
        }`}>
          {accountNumber}
        </div>
      </div>

      <div className={`border-2 p-4 sm:p-6 transition-colors duration-300 ${
        isDarkMode ? 'border-gray-600 bg-gray-700/30' : 'border-gray-400 bg-gray-50'
      }`}>
        <label className={`text-base sm:text-lg font-serif block mb-3 sm:mb-4 transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Account Holder (Atas Nama)
        </label>
        <div className={`text-lg sm:text-xl lg:text-2xl font-serif p-3 sm:p-4 border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-gray-100 bg-gray-800 border-gray-600' 
            : 'text-gray-900 bg-white border-gray-400'
        }`}>
          {accountHolder}
        </div>
      </div>

      <div className={`border-2 p-4 sm:p-6 transition-colors duration-300 ${
        isDarkMode 
          ? 'border-yellow-600 bg-yellow-900/20' 
          : 'border-yellow-600 bg-yellow-50'
      }`}>
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 transition-colors duration-300 ${
            isDarkMode 
              ? 'border-yellow-600 bg-yellow-800/50' 
              : 'border-yellow-600 bg-yellow-100'
          }`}>
            <span className={`text-lg sm:text-xl transition-colors duration-300 ${
              isDarkMode ? 'text-yellow-400' : 'text-yellow-700'
            }`}>!</span>
          </div>
          <div>
            <h4 className={`text-lg sm:text-xl font-serif mb-2 sm:mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-yellow-300' : 'text-yellow-800'
            }`}>
              Payment Instructions
            </h4>
            <p className={`text-sm sm:text-base lg:text-lg font-serif leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-yellow-200' : 'text-yellow-700'
            }`}>
              Please transfer the exact amount to the account number above. 
              Ensure that the account holder name matches precisely as displayed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails