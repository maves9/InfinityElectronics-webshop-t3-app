import { getAllProducts, getCategories } from "~/lib/api"
import { ProductList } from "~/components/ProductList"
import { translations } from "~/i18n"
import type { Metadata } from "next"
import type { Locale } from "~/i18n/config"

interface ProductsPageProps {
  params: Promise<{ locale: Locale }>
  searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({
  params,
  searchParams,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params
  const { category } = await searchParams
  const seo = translations[locale].seo.products

  if (category) {
    const title = seo.categoryTitle.replace("{category}", category)
    const description = seo.categoryDescription.replace("{category}", category)

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        siteName: translations[locale].seo.openGraph.siteName,
      },
    }
  }

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

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ])

  return <ProductList products={products} categories={categories} />
}
