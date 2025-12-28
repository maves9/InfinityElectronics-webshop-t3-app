import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { ProductDetailClient } from "~/components/ProductDetailClient"
import { notFound } from "next/navigation"
import { translations } from "~/i18n"
import { generateProductJsonLd } from "~/lib/seo"
import { getQueryClient } from "~/lib/getQueryClient"
import { productQueries } from "~/lib/queries"
import { getProduct } from "~/lib/api"
import type { Metadata } from "next"
import type { Locale } from "~/i18n/config"

interface ProductPageProps {
  params: Promise<{ id: string; locale: Locale }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id, locale } = await params
  const productId = parseInt(id, 10)

  if (isNaN(productId)) {
    return {
      title: "Product Not Found",
    }
  }

  try {
    const product = await getProduct(productId)
    const seo = translations[locale].seo.product

    const title = seo.titleTemplate.replace("{productName}", product.title)
    const description = seo.descriptionTemplate
      .replace("{productName}", product.title)
      .replace("{price}", product.price.toString())
      .replace("{description}", product.description.slice(0, 100))

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: product.image,
            alt: seo.imageAlt.replace("{productName}", product.title),
          },
        ],
        type: "website",
        siteName: translations[locale].seo.openGraph.siteName,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [product.image],
      },
    }
  } catch {
    return {
      title: "Product Not Found",
    }
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const productId = parseInt(id, 10)

  if (isNaN(productId)) {
    notFound()
  }

  const queryClient = getQueryClient()

  try {
    await queryClient.prefetchQuery(productQueries.detail(productId))
    const product = queryClient.getQueryData(productQueries.detail(productId).queryKey)

    if (!product) {
      notFound()
    }

    const jsonLd = generateProductJsonLd(product)

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ProductDetailClient product={product} />
      </HydrationBoundary>
    )
  } catch (error) {
    console.error("Error fetching product:", error)
    notFound()
  }
}
