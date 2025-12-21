/**
 * Internationalization (i18n) Exports
 * 
 * Central export point for all i18n-related configuration and utilities
 */

// Configuration
export { locales, defaultLocale, routeTranslations, pathToRouteKey, languageNames } from "./config"
export type { Locale } from "./config"

// Routing utilities
export { getLocalizedRoute, getAlternateLanguages, isValidLocale, getValidLocale } from "./routing"

// Page translations
export { getPageTranslations, getAvailablePages, translations } from "./translations"
export type { PageTranslation } from "./translations"
