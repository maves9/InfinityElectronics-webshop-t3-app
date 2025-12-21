import { useTranslations } from "next-intl"
import { Link, routeKeyToHref } from "~/i18n/routing-intl"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { MobileMenu } from "./MobileMenu"
import { CartBadge } from "./CartBadge"
import { mainNavigationItems, siteConfig } from "~/data"

export function Navigation() {
  const t = useTranslations('navigation')
  const tSite = useTranslations('site')

  return (
    <nav className="nav-links sticky top-0 z-50 border-b border-theme-border bg-theme-bg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-theme-primary"
          >
            {tSite('name')}
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {mainNavigationItems.filter(item => item.routeKey !== 'home').map((item) => (
              <Link
                key={item.routeKey}
                href={routeKeyToHref(item.routeKey)}
                className="text-theme-fg transition-colors hover:opacity-80"
              >
                {t(item.routeKey)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            
            <CartBadge />

            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
