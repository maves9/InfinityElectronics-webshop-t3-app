"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { type ThemeName, type Theme, themes } from '~/types/theme'

interface ThemeContextType {
  currentTheme: Theme
  themeName: ThemeName
  setTheme: (themeName: ThemeName) => void
  availableThemes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeName
}

export function ThemeProvider({ children, defaultTheme = 'default' }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme)
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[defaultTheme])

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference') as ThemeName
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme)
      setCurrentTheme(themes[savedTheme])
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    const theme = themes[themeName]
    
    // Apply color variables with proper kebab-case conversion
    Object.entries(theme.colors).forEach(([key, value]) => {
      // Convert camelCase to kebab-case (e.g., primaryText -> primary-text)
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      root.style.setProperty(`--color-${kebabKey}`, value)
    })
    
    // Apply layout data attributes
    root.setAttribute('data-hero-style', theme.layout.heroStyle)
    root.setAttribute('data-product-card-style', theme.layout.productCardStyle)
    root.setAttribute('data-navigation-style', theme.layout.navigationStyle)
    root.setAttribute('data-theme', themeName)
    
    // Save to localStorage
    localStorage.setItem('theme-preference', themeName)
  }, [themeName])

  const setTheme = (newThemeName: ThemeName) => {
    if (themes[newThemeName]) {
      setThemeName(newThemeName)
      setCurrentTheme(themes[newThemeName])
    }
  }

  const availableThemes = Object.values(themes)

  return (
    <ThemeContext.Provider value={{ currentTheme, themeName, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  )
}
