import { getPageTranslations } from "~/i18n"
import type { Locale } from "~/i18n"

interface ReturnsPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function ReturnsPage({ params }: ReturnsPageProps) {
  const { locale } = await params
  const { title, content } = getPageTranslations(locale, "returns")

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
