import { ContactForm } from "~/components"
import { getPageTranslations } from "~/i18n"
import type { Locale } from "~/i18n"

interface ContactPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  const { title, content } = getPageTranslations(locale, "contact")

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">{title}</h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </div>
  )
}
