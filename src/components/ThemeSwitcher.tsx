"use client"

import { useThemeStore } from "~/stores/themeStore"
import { type ThemeName } from "~/types/theme"

export function ThemeSwitcher() {
  const themeName = useThemeStore((state) => state.themeName)
  const setTheme = useThemeStore((state) => state.setTheme)
  const availableThemes = useThemeStore((state) => state.availableThemes)

  return (
    <div className="relative inline-block">
      <label htmlFor="theme-select" className="sr-only">
        Select Theme
      </label>
      <select
        id="theme-select"
        value={themeName}
        onChange={(e) => setTheme(e.target.value as ThemeName)}
        className="border border-theme-border bg-theme-card px-3 py-2 text-sm font-medium text-theme-card-fg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        {availableThemes.map((theme) => (
          <option key={theme.name} value={theme.name}>
            🎨 {theme.displayName}
          </option>
        ))}
      </select>
    </div>
  )
}
