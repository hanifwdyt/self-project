'use client'
import { useTheme } from '../contexts/ThemeContext'

export default function FloatingThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 left-6 w-14 h-14 rounded-full border-2 shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
        isDarkMode 
          ? 'border-gray-600 bg-gray-800 text-yellow-300 hover:bg-gray-700' 
          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
      }`}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '1.5rem'
      }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  )
}