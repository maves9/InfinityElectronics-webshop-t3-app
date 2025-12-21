import { useTranslations } from "next-intl"
import { Link } from "~/i18n/routing-intl"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { MobileMenu } from "./MobileMenu"
import { CartBadge } from "./CartBadge"
import { mainNavigationItems, siteConfig } from "~/data"

export function Navigation() {
  const t = useTranslations('navigation')

  return (
    <nav className="nav-links sticky top-0 z-50 border-b border-theme-border bg-theme-bg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-theme-primary"
          >
            {siteConfig.logo.text}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {mainNavigationItems.filter(item => item.routeKey !== 'home').map((item) => (
              <Link
                key={item.routeKey}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
                href={`/${item.routeKey}` as any}
                className="text-theme-fg transition-colors hover:opacity-80"
              >
                {t(item.routeKey as 'products' | 'about' | 'contact' | 'cart')}
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
