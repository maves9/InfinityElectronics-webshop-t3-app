/**
 * i18n Configuration
 * 
 * This file defines the supported locales and routing configuration.
 * Routes are defined as key-value pairs where the key is a route identifier
 * and the value is the localized path segment.
 */

export const locales = ["en", "da"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

/**
 * Route translations for each locale
 * Add new routes here and they will automatically work across all locales
 */
export const routeTranslations: Record<Locale, Record<string, string>> = {
  en: {
    home: "",
    products: "products",
    about: "about",
    contact: "contact",
    cart: "cart",
    privacy: "privacy",
    terms: "terms",
    returns: "returns",
  },
  da: {
    home: "",
    products: "produkter",
    about: "om-os",
    contact: "kontakt",
    cart: "kurv",
    privacy: "privatlivspolitik",
    terms: "betingelser",
    returns: "returnering",
  },
}

/**
 * Reverse mapping: from path segment to route key
 * This is used for route resolution
 */
export const pathToRouteKey: Record<Locale, Record<string, string>> = Object.entries(
  routeTranslations
).reduce(
  (acc, [locale, routes]) => {
    acc[locale as Locale] = Object.entries(routes).reduce(
      (routeAcc, [key, path]) => {
        if (path) {
          // Only add non-empty paths
          routeAcc[path] = key
        }
        return routeAcc
      },
      {} as Record<string, string>
    )
    return acc
  },
  {} as Record<Locale, Record<string, string>>
)

/**
 * Language names for display in language switcher
 */
export const languageNames: Record<Locale, string> = {
  en: "English",
  da: "Dansk",
}
