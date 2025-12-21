/**
 * Type definitions for internationalization messages
 * These types represent the structure of the message files in src/i18n/locales/
 */

export interface Messages {
  metadata: {
    title: string
    description: string
  }
  seo: {
    openGraph: {
      siteName: string
    }
  }
  // Add other top-level message keys as needed
  navigation?: Record<string, string>
  footer?: Record<string, unknown>
  // ... other keys
}
