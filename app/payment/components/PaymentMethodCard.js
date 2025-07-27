import React from 'react'

const PaymentMethodCard = ({ method, index, isDarkMode, onSelect }) => {
  return (
    <div
      className={`border-2 transition-colors duration-300 ${
        isDarkMode
          ? 'border-gray-600 bg-gray-800'
          : 'border-gray-400 bg-white'
      }`}
    >
      <button
        onClick={() => onSelect(method)}
        className={`w-full p-4 sm:p-6 text-left transition-all duration-200 hover:shadow-inner ${
          isDarkMode
            ? 'hover:bg-gray-700/30'
            : 'hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 border-2 flex items-center justify-center p-2 transition-colors duration-300 ${
            isDarkMode
              ? 'border-gray-600 bg-gray-700'
              : 'border-gray-400 bg-gray-100'
          }`}>
            <img 
              src={method.logo} 
              alt={`${method.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-1 sm:mb-2">
              <span className={`text-lg sm:text-2xl font-serif mr-2 sm:mr-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {String(index + 1).padStart(2, '0')}.
              </span>
              <h3 className={`text-lg sm:text-xl font-serif transition-colors duration-300 truncate ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {method.name}
              </h3>
            </div>
            <p className={`text-sm sm:text-base font-serif italic transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {method.id === 'qris' ? 'Quick Response Code System' : 'Electronic Payment Service'}
            </p>
          </div>
          <div className={`text-2xl sm:text-3xl font-serif transition-colors duration-300 flex-shrink-0 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            →
          </div>
        </div>
      </button>
    </div>
  )
}

export default PaymentMethodCard