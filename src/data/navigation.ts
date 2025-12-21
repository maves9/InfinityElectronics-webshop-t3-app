export type MainRouteKey = 'home' | 'products' | 'about' | 'contact' | 'cart'
export type LegalRouteKey = 'privacy' | 'terms' | 'returns'
export type RouteKey = MainRouteKey | LegalRouteKey

export interface NavigationItem {
  label: string
  routeKey: MainRouteKey
  icon?: string
}

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
] as const

export interface LegalNavigationItem {
  label: string
  routeKey: LegalRouteKey
}

export interface QuickLinkNavigationItem {
  label: string
  routeKey: Exclude<MainRouteKey, 'cart'>
}

export const footerNavigationSections = {
  quickLinks: [
    { label: "Home", routeKey: "home" },
    { label: "Products", routeKey: "products" },
    { label: "About Us", routeKey: "about" },
    { label: "Contact", routeKey: "contact" },
  ] as const satisfies readonly QuickLinkNavigationItem[],
  legal: [
    { label: "Privacy Policy", routeKey: "privacy" },
    { label: "Terms of Service", routeKey: "terms" },
    { label: "Returns", routeKey: "returns" },
  ] as const satisfies readonly LegalNavigationItem[],
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ],
}

export const siteConfig = {
  name: "InfinityElectronics",
  tagline: "Your one-stop shop for quality products at great prices.",
  logo: {
    text: "InfinityElectronics",
    routeKey: "home",
  },
}
