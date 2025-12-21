export interface NavigationItem {
  label: string
  routeKey: string // Route key for i18n routing
  icon?: string
}

/**
 * Main navigation items
 * These can be stored in a database and managed via CMS in the future
 * routeKey is used to generate localized URLs via the i18n routing system
 */
export const mainNavigationItems: NavigationItem[] = [
  {
    label: "Home",
    routeKey: "home",
  },
  {
    label: "Products",
    routeKey: "products",
  },
  {
    label: "About Us",
    routeKey: "about",
  },
  {
    label: "Contact",
    routeKey: "contact",
  },
]

/**
 * Footer navigation sections
 * These can be stored in a database for easy content management
 * routeKey is used for internal routes, href is used for external links
 */
export const footerNavigationSections = {
  quickLinks: [
    { label: "Home", routeKey: "home" },
    { label: "Products", routeKey: "products" },
    { label: "About Us", routeKey: "about" },
    { label: "Contact", routeKey: "contact" },
  ],
  legal: [
    { label: "Privacy Policy", routeKey: "privacy" },
    { label: "Terms of Service", routeKey: "terms" },
    { label: "Returns", routeKey: "returns" },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ],
}

/**
 * Site configuration
 * Store branding and site-wide settings
 */
export const siteConfig = {
  name: "InfinityElectronics",
  tagline: "Your one-stop shop for quality products at great prices.",
  logo: {
    text: "InfinityElectronics",
    routeKey: "home",
  },
}
