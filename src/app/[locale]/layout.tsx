import "~/styles/globals.css"
import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing, type Locale } from '~/i18n/routing-intl'
import { Navigation } from "~/components/Navigation"
import { Footer } from "~/components/Footer"
import { generateOrganizationJsonLd } from "~/lib/seo"
import type { Messages } from "~/types/messages"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const messages = await getMessages({ locale }) as Messages

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      type: "website",
      siteName: messages.seo.openGraph.siteName,
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })
  const organizationJsonLd = generateOrganizationJsonLd()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
