"use client"

import { useLocale } from 'next-intl'
import { usePathname as useNextPathname, useParams } from 'next/navigation'
import { routing } from '~/i18n/routing-intl'
import NextLink from 'next/link'

/**
 * Language Switcher Component
 * Allows users to switch between available locales using next-intl
 * Automatically maintains the current page when switching languages
 */
export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = useNextPathname()
  const params = useParams()

  const languageNames: Record<string, string> = {
    en: "English",
    da: "Dansk",
  }

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((loc) => {
        const isActive = loc === locale
        
        // Remove current locale from pathname and add new locale
        const pathWithoutLocale = pathname.replace(`/${locale}`, '')
        const newPath = `/${loc}${pathWithoutLocale}`

        return (
          <NextLink
            key={loc}
            href={newPath}
            className={`px-2 py-1 text-sm font-medium transition-colors ${
              isActive
                ? "text-theme-primary underline"
                : "text-theme-muted-fg hover:text-theme-fg"
            }`}
            hrefLang={loc}
            locale={undefined}
          >
            {languageNames[loc]}
          </NextLink>
        )
      })}
    </div>
  )
}
