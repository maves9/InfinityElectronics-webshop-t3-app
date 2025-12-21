/**
 * Page Translations Utilities
 * 
 * Load and access page translations for content managed by HTML editors
 */

import type { Locale } from "./config"
import enTranslations from "./locales/en.json"
import daTranslations from "./locales/da.json"

export interface PageTranslation {
  title: string
  content: string
}

export const translations = {
  en: enTranslations,
  da: daTranslations,
} as const

/**
 * Get page translations for a specific locale and page key
 * @param locale - The locale to get translations for
 * @param pageKey - The page identifier (e.g., 'about', 'contact', 'privacy')
 * @returns Object with title and content keys
 */
export function getPageTranslations(
  locale: Locale,
  pageKey: string
): PageTranslation {
  const pageTranslations = translations[locale]?.pages?.[pageKey as keyof typeof translations.en.pages]
  
  if (!pageTranslations) {
    console.warn(`No translations found for page: ${pageKey} in locale: ${locale}`)
    return {
      title: pageKey,
      content: "",
    }
  }

  return pageTranslations
}

/**
 * Get all available page keys
 */
export function getAvailablePages(): string[] {
  return Object.keys(translations.en.pages)
}
