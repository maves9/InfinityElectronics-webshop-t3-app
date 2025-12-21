import { CartContent } from "~/components/CartContent"
import { translations } from "~/i18n"
import type { Metadata } from "next"
import type { Locale } from "~/i18n/config"

interface CartPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
  params,
}: CartPageProps): Promise<Metadata> {
  const { locale } = await params
  const seo = translations[locale].seo.cart

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      siteName: translations[locale].seo.openGraph.siteName,
    },
  }
}

export default function CartPage() {
  // This could check cart items count server-side if needed
  // For now, the client component will handle the empty state
  return <CartContent />
}
