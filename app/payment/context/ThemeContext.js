'use client'
import React, { createContext, useContext } from 'react'
import { useTheme } from '../hooks/useTheme'

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
  const themeData = useTheme()

  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}

// HOC for components that need theme
export const withTheme = (Component) => {
  return function ThemedComponent(props) {
    const theme = useThemeContext()
    return <Component {...props} theme={theme} />
  }
}