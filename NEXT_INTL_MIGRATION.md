# next-intl Migration Guide

## Overview

This project has been migrated to use `next-intl`, the recommended i18n solution for Next.js 15 App Router. This provides better performance, type safety, and developer experience.

## Key Changes

### 1. **Configuration Files**

#### New Files Created:
- `src/i18n/routing-intl.ts` - Route configuration and navigation helpers
- `src/i18n/request.ts` - Server-side i18n configuration

#### Updated Files:
- `src/middleware.ts` - Now uses `next-intl/middleware`
- `next.config.js` - Added next-intl plugin

### 2. **Translation Usage**

#### Server Components (Recommended)
```tsx
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations('namespace')
  
  return <h1>{t('key')}</h1>
}
```

#### Client Components
```tsx
'use client'
import { useTranslations } from 'next-intl'

export function Component() {
  const t = useTranslations('namespace')
  
  return <h1>{t('key')}</h1>
}
```

### 3. **Navigation**

Use the exported navigation helpers from `~/i18n/routing-intl`:

```tsx
import { Link, redirect, usePathname, useRouter } from '~/i18n/routing-intl'

// Link component automatically handles locale prefixes and route translations
<Link href="/products">Products</Link>

// In Danish, this automatically links to /da/produkter
```

### 4. **Localized Routes**

Routes are defined in `src/i18n/routing-intl.ts`:

```tsx
pathnames: {
  '/products': {
    en: '/products',
    da: '/produkter'
  },
  '/products/[id]': {
    en: '/products/[id]',
    da: '/produkter/[id]'
  }
}
```

### 5. **Language Switcher**

The `LanguageSwitcher` component now uses next-intl's built-in locale switching:

```tsx
import { Link } from '~/i18n/routing-intl'
import { useLocale } from 'next-intl'

// Link with locale prop automatically switches language
<Link href={pathname} locale="da">Dansk</Link>
```

## Migration Steps for Remaining Components

### Step 1: Update Imports

**Before:**
```tsx
import { translations, type Locale } from '~/i18n'
const t = translations[locale]
```

**After (Server Component):**
```tsx
import { getTranslations } from 'next-intl/server'
const t = await getTranslations('namespace')
```

**After (Client Component):**
```tsx
'use client'
import { useTranslations } from 'next-intl'
const t = useTranslations('namespace')
```

### Step 2: Update Translation Keys

**Before:**
```tsx
{t.navigation.home}
{t.product.addToCart}
```

**After:**
```tsx
const t = await getTranslations('navigation')
{t('home')}

const t = await getTranslations('product')
{t('addToCart')}
```

### Step 3: Update Links

**Before:**
```tsx
import Link from 'next/link'
import { getLocalizedRoute } from '~/i18n/routing'

<Link href={getLocalizedRoute(locale, 'products')}>Products</Link>
```

**After:**
```tsx
import { Link } from '~/i18n/routing-intl'

<Link href="/products">Products</Link>
```

## Components to Update

The following components still need migration:

1. `src/components/Navigation.tsx` - Update to use `useTranslations`
2. `src/components/Footer.tsx` - Update to use `getTranslations` or `useTranslations`
3. `src/components/ContactForm.tsx` - Update to use `useTranslations`
4. All page components in `src/app/[locale]/*/page.tsx`

## Benefits

### Performance
- Automatic code splitting per locale
- Smaller bundle sizes (only load translations for active locale)
- Server-side rendering optimization

### Developer Experience
- Type-safe translations (can be extended with TypeScript)
- Better error messages
- Automatic route localization
- Built-in pathname localization

### SEO
- Automatic `hreflang` generation
- Better locale handling
- Proper canonical URLs

## Type Safety (Optional Enhancement)

You can add type safety by creating a TypeScript declaration:

```tsx
// src/types/i18n.d.ts
type Messages = typeof import('../i18n/locales/en.json')

declare global {
  interface IntlMessages extends Messages {}
}
```

Then in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "types": ["./src/types/i18n.d.ts"]
  }
}
```

## Testing

1. Start the development server: `npm run dev`
2. Test language switching: Visit `/en` and `/da`
3. Test route translations: `/en/products` should work, `/da/produkter` should work
4. Test language switcher on different pages
5. Verify metadata is localized correctly

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js 15 i18n Routing](https://next-intl-docs.vercel.app/docs/routing)
- [Message Format Syntax](https://next-intl-docs.vercel.app/docs/usage/messages)
