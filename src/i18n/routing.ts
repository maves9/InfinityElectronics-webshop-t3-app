/**
 * i18n Routing Utilities
 * 
 * These utilities help with generating localized URLs and handling route navigation
 */

import { type Locale, defaultLocale, routeTranslations, locales } from "./config"

// Re-export Locale type for convenience
export type { Locale } from "./config"

/**
 * Get a localized route path
 * @param locale - The target locale
 * @param routeKey - The route identifier (e.g., 'products', 'about')
 * @param params - Optional dynamic route parameters (e.g., { id: '123' })
 * @returns The full localized path
 */
export function getLocalizedRoute(
  locale: Locale,
  routeKey: string,
  params?: Record<string, string>
): string {
  const routes = routeTranslations[locale]
  const localizedPath = routes[routeKey] ?? routeKey

  let path = `/${locale}`
  if (localizedPath) {
    path += `/${localizedPath}`
  }

  // Replace dynamic parameters if provided
  if (params) {
    Object.entries(params).forEach(([_key, value]) => {
      path += `/${value}`
    })
  }

  return path
}

/**
 * Get alternate language URLs for the same page
 * Useful for language switchers
 * @param currentLocale - Current locale
 * @param routeKey - Current route identifier
 * @param params - Optional dynamic route parameters
 * @returns Array of alternate language options
 */
export function getAlternateLanguages(
  currentLocale: Locale,
  routeKey: string,
  params?: Record<string, string>
): Array<{ locale: Locale; href: string }> {
  return locales
    .filter((locale) => locale !== currentLocale)
    .map((locale) => ({
      locale,
      href: getLocalizedRoute(locale, routeKey, params),
    }))
}

/**
 * Check if a locale is valid
 * @param locale - The locale to validate
 * @returns True if the locale is supported
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

/**
 * Get locale from URL or fallback to default
 * @param locale - The locale string to validate
 * @returns A valid Locale
 */
export function getValidLocale(locale: string | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale
  }
  return defaultLocale
}
