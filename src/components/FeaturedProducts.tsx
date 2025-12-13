import type { Product } from "~/types/product"
import { ProductCard } from "./ProductCard"

interface FeaturedProductsProps {
  products: Product[]
  title?: string
  description?: string
  priorityLoad?: number
}

export function FeaturedProducts({
  products,
  title = "Featured Products",
  description = "Check out our handpicked selection of amazing products",
  priorityLoad = 4,
}: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
          {description && <p className="text-gray-600">{description}</p>}
        </div>

        {/* Products Grid */}
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
