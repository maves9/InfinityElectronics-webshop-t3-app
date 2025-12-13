import { getProduct } from "~/lib/api"
import { ProductDetailClient } from "~/components/ProductDetailClient"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const productId = parseInt(id, 10)

  if (isNaN(productId)) {
    notFound()
  }

  try {
    const product = await getProduct(productId)
    return <ProductDetailClient product={product} />
  } catch (error) {
    console.error("Error fetching product:", error)
    notFound()
  }
}
