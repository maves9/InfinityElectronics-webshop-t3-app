export type MainRouteKey = 'home' | 'products' | 'about' | 'contact' | 'cart'
export type LegalRouteKey = 'privacy' | 'terms' | 'returns'
export type RouteKey = MainRouteKey | LegalRouteKey

export interface NavigationItem {
  routeKey: MainRouteKey
  icon?: string
}

export const mainNavigationItems: NavigationItem[] = [
  {
    routeKey: "home",
  },
  {
    routeKey: "products",
  },
  {
    routeKey: "about",
  },
  {
    routeKey: "contact",
  },
] as const

export interface LegalNavigationItem {
  routeKey: LegalRouteKey
}

export interface QuickLinkNavigationItem {
  routeKey: Exclude<MainRouteKey, 'cart'>
}

export const footerNavigationSections = {
  quickLinks: [
    { routeKey: "home" },
    { routeKey: "products" },
    { routeKey: "about" },
    { routeKey: "contact" },
  ] as const satisfies readonly QuickLinkNavigationItem[],
  legal: [
    { routeKey: "privacy" },
    { routeKey: "terms" },
    { routeKey: "returns" },
  ] as const satisfies readonly LegalNavigationItem[],
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ],
}

export const siteConfig = {
  logo: {
    routeKey: "home" as const,
  },
}
