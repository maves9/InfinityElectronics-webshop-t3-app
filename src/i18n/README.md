# Page Translations System

This system enables translation of static pages with content managed through HTML editors.

## Overview

Pages use a simple structure with two keys:
- **`title`**: The page title (plain text)
- **`content`**: The page content (HTML string)

This design allows content managers to edit the HTML directly in the translation files without touching the React components.

## Translation Files

Translation files are located in `src/i18n/locales/`:
- `en.json` - English translations
- `da.json` - Danish translations

### File Structure

```json
{
  "pages": {
    "about": {
      "title": "About Us",
      "content": "<div class=\"prose prose-lg max-w-none\">...</div>"
    },
    "privacy": {
      "title": "Privacy Policy",
      "content": "<div class=\"prose prose-lg max-w-none\">...</div>"
    }
  }
}
```

## Usage in Pages

```tsx
import { getPageTranslations } from "~/i18n"
import type { Locale } from "~/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params
  const { title, content } = getPageTranslations(locale, "pageKey")

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}
```

## Adding New Pages

1. Add translations to both `en.json` and `da.json`:

```json
{
  "pages": {
    "newpage": {
      "title": "New Page",
      "content": "<div>Your HTML content here</div>"
    }
  }
}
```

2. Create the page component using the pattern shown above
3. Use the page key (e.g., `"newpage"`) when calling `getPageTranslations()`

## Editing Content

Content managers can edit the HTML directly in the JSON files. The content should:
- Be valid HTML
- Include all necessary CSS classes for styling
- Use escaped quotes if needed
- Maintain consistent structure across locales

### Example Content Structure

```html
<div class="prose prose-lg max-w-none">
  <p class="mb-6 text-lg text-gray-600">Introduction paragraph</p>
  <h2 class="mt-8 mb-4 text-2xl font-bold text-gray-900">Section Title</h2>
  <p class="mb-6 text-gray-600">Section content</p>
  <ul class="mb-6 list-inside list-disc space-y-2 text-gray-600">
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>
```

## Currently Translated Pages

- About (`/about` or `/da/om-os`)
- Privacy Policy (`/privacy` or `/da/privatlivspolitik`)
- Terms of Service (`/terms` or `/da/betingelser`)
- Returns & Refunds (`/returns` or `/da/returnering`)

## API

### `getPageTranslations(locale: Locale, pageKey: string): PageTranslation`

Gets translations for a specific page.

**Parameters:**
- `locale`: The locale code ('en' or 'da')
- `pageKey`: The page identifier (e.g., 'about', 'privacy')

**Returns:**
```typescript
{
  title: string
  content: string
}
```

### `getAvailablePages(): string[]`

Returns an array of all available page keys.

## Security Note

Using `dangerouslySetInnerHTML` requires trust in the content source. Ensure only trusted editors have access to the translation files to prevent XSS vulnerabilities.
