export interface NavigationItem {
  label: string
  href: string
  icon?: string
}

/**
 * Main navigation items
 * These can be stored in a database and managed via CMS in the future
 */
export const mainNavigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
]

/**
 * Footer navigation sections
 * These can be stored in a database for easy content management
 */
export const footerNavigationSections = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Returns", href: "/returns" },
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
    href: "/",
  },
}
