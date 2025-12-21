import { ContactForm } from "~/components"
import { getPageTranslations } from "~/i18n"
import type { Locale } from "~/i18n"
import { Heading } from "~/elements"

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
          <Heading level={1} size="4xl" className="mb-8">{title}</Heading>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </div>
  )
}
