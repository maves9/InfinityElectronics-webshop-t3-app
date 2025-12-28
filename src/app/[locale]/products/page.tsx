import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { ProductList } from "~/components/ProductList"
import { translations } from "~/i18n"
import { getQueryClient } from "~/lib/getQueryClient"
import { queryKeys } from "~/lib/queries"
import { getCachedAllProducts, getCachedCategories } from "~/lib/cachedApi"
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

export default async function ProductsPage({
  params,
}: ProductsPageProps) {
  const { locale } = await params
  const queryClient = getQueryClient()

  const [products, categories] = await Promise.all([
    getCachedAllProducts(),
    getCachedCategories(),
  ])
  
  queryClient.setQueryData(queryKeys.products.list(), products)
  queryClient.setQueryData(queryKeys.categories.all, categories)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductList products={products} categories={categories} locale={locale} />
    </HydrationBoundary>
  )
}
