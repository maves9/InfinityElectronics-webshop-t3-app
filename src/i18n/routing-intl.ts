import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import type { MainRouteKey, LegalRouteKey } from '~/data/navigation';

export const routing = defineRouting({
  locales: ['en', 'da'] as const,
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/products': {
      en: '/products',
      da: '/produkter'
    },
    '/products/[id]': {
      en: '/products/[id]',
      da: '/produkter/[id]'
    },
    '/about': {
      en: '/about',
      da: '/om-os'
    },
    '/contact': {
      en: '/contact',
      da: '/kontakt'
    },
    '/cart': {
      en: '/cart',
      da: '/kurv'
    },
    '/privacy': {
      en: '/privacy',
      da: '/privatlivspolitik'
    },
    '/terms': {
      en: '/terms',
      da: '/betingelser'
    },
    '/returns': {
      en: '/returns',
      da: '/returnering'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

// Type exports
export type Locale = (typeof routing.locales)[number];
type Pathname = Exclude<keyof typeof routing.pathnames, '/products/[id]'>;

export function routeKeyToHref(routeKey: MainRouteKey | LegalRouteKey): Pathname {
  if (routeKey === 'home') return '/';
  return `/${routeKey}` as Pathname;
}
