'use client'
import Link from 'next/link'
import { useTheme } from './contexts/ThemeContext'

export default function Home() {
  const { isDarkMode } = useTheme()

  const menuItems = [
    { name: 'Digital Payment', href: '/payment', description: 'Payment solutions and QRIS' },
    { name: 'Gallery', href: '/gallery', description: 'Photos and media collection' },
    { name: 'Portfolio', href: '/portfolio', description: 'Professional work showcase' },
    { name: 'Journal', href: '/journal', description: 'Personal thoughts and writing' },
    { name: 'Books', href: '/books', description: 'Reading list and reviews' },
    { name: 'Movies', href: '/movies', description: 'Entertainment and reviews' },
    { name: 'Shop', href: '/shop', description: 'Products and store' },
    { name: 'Tutorial', href: '/tutorial', description: 'Learning resources' }
  ]

  return (
    <div className={isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} style={{ minHeight: '100vh' }}>

      {/* Header Section */}
      <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide mb-4 sm:mb-6 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`} 
            style={{ fontFamily: 'Times, serif' }}
          >
            Personal Website
          </h1>
          
          <div 
            className={`w-20 sm:w-28 md:w-32 h-px mx-auto mb-6 sm:mb-8 ${
              isDarkMode ? 'bg-gray-600' : 'bg-gray-400'
            }`}
          ></div>
          
          <p 
            className={`text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto px-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`} 
            style={{ fontFamily: 'Times, serif' }}
          >
            A digital space for exploration, creativity, and connection.
          </p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <nav>
            {menuItems.map((item, index) => (
              <div key={item.name}>
                <Link href={item.href}>
                  <div className="py-4 sm:py-6 md:py-8 px-2 sm:px-4 cursor-pointer hover:opacity-80 transition-opacity duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 pr-4">
                        <h2 
                          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-1 sm:mb-2 ${
                            isDarkMode ? 'text-gray-100' : 'text-gray-900'
                          }`} 
                          style={{ fontFamily: 'Times, serif' }}
                        >
                          {item.name}
                        </h2>
                        <p 
                          className={`text-sm sm:text-base md:text-lg lg:text-xl font-light ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`} 
                          style={{ fontFamily: 'Times, serif' }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div 
                        className={`text-lg sm:text-xl md:text-2xl lg:text-3xl flex-shrink-0 ${
                          isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}
                      >
                        →
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Divider */}
                {index < menuItems.length - 1 && (
                  <div 
                    className={`w-full h-px ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p 
            className={`text-xs sm:text-sm font-light tracking-wider uppercase ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`} 
            style={{ fontFamily: 'Times, serif' }}
          >
            © 2024 Personal Website
          </p>
        </div>
      </div>
    </div>
  )
}