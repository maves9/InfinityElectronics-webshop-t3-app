import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'da'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Prefix strategy for locales
  localePrefix: 'always',
  
  // Pathnames for localized routes
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

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
