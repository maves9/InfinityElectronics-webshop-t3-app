import type { Product } from "~/types/product"
import { ProductCard } from "./ProductCard"
import { Heading } from "~/elements"

interface FeaturedProductsProps {
  products: Product[]
  title: string
  description: string
  priorityLoad?: number
}

export function FeaturedProducts({
  products,
  title,
  description,
  priorityLoad = 4,
}: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <Heading level={2} size="3xl" className="mb-2 md:text-4xl">
            {title}
          </Heading>
          {description && <p className="text-gray-600">{description}</p>}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < priorityLoad}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
