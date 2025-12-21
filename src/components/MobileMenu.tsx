"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "~/i18n/routing-intl"
import { mainNavigationItems } from "~/data"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('navigation')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6 text-theme-fg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="border-t border-theme-border py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {mainNavigationItems.map((item) => (
              <Link
                key={item.routeKey}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
                href={`/${item.routeKey === 'home' ? '' : item.routeKey}` as any}
                className="text-theme-fg transition-colors hover:opacity-80"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.routeKey as 'home' | 'products' | 'about' | 'contact' | 'cart')}
              </Link>
            ))}
            <div className="pt-2 space-y-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
