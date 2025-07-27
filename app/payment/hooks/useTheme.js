import { useState, useEffect } from 'react'
import { APP_CONFIG } from '../config/appConfig'
import { THEMES } from '../constants'

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(APP_CONFIG.theme.defaultMode === THEMES.DARK)

  useEffect(() => {
    const savedTheme = localStorage.getItem(APP_CONFIG.theme.storageKey)
    if (savedTheme) {
      setIsDarkMode(savedTheme === THEMES.DARK)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem(
      APP_CONFIG.theme.storageKey, 
      newTheme ? THEMES.DARK : THEMES.LIGHT
    )
  }

  const setTheme = (theme) => {
    const isDark = theme === THEMES.DARK
    setIsDarkMode(isDark)
    localStorage.setItem(APP_CONFIG.theme.storageKey, theme)
  }

  return {
    isDarkMode,
    theme: isDarkMode ? THEMES.DARK : THEMES.LIGHT,
    toggleTheme,
    setTheme
  }
}