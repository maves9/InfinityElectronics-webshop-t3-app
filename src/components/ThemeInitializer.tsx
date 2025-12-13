"use client"

import { useEffect } from 'react'
import { useThemeStore, applyTheme } from '~/stores/themeStore'

export function ThemeInitializer() {
  const themeName = useThemeStore((state) => state.themeName)

  useEffect(() => {
    applyTheme(themeName)
  }, [themeName])

  return null
}
