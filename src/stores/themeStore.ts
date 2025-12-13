"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type ThemeName, type Theme, themes } from '~/types/theme'

interface ThemeState {
  currentTheme: Theme
  themeName: ThemeName
  setTheme: (themeName: ThemeName) => void
  availableThemes: Theme[]
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: themes.default,
      themeName: 'default' as ThemeName,
      availableThemes: Object.values(themes),
      setTheme: (newThemeName) => {
        if (themes[newThemeName]) {
          set({ 
            themeName: newThemeName, 
            currentTheme: themes[newThemeName] 
          })
        }
      },
    }),
    {
      name: 'theme-preference',
      partialize: (state) => ({ themeName: state.themeName }),
      onRehydrateStorage: () => (state) => {
        if (state && typeof window !== 'undefined') {
          applyTheme(state.themeName)
        }
      },
    }
  )
)

// Function to apply theme to document
export function applyTheme(themeName: ThemeName) {
  if (typeof window === 'undefined') return
  
  const root = document.documentElement
  const theme = themes[themeName]
  
  // Apply color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value)
  })
  
  // Apply layout data attributes
  root.setAttribute('data-hero-style', theme.layout.heroStyle)
  root.setAttribute('data-product-card-style', theme.layout.productCardStyle)
  root.setAttribute('data-navigation-style', theme.layout.navigationStyle)
  root.setAttribute('data-theme', themeName)
}

// Subscribe to theme changes and apply them
if (typeof window !== 'undefined') {
  useThemeStore.subscribe((state) => {
    applyTheme(state.themeName)
  })
}
