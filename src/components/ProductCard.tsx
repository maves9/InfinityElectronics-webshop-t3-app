import { Link } from "~/i18n/routing-intl"
import Image from "next/image"
import type { Product } from "~/types/product"
import { formatPrice } from "~/lib/utils"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link
      href={{ pathname: "/products/[id]", params: { id: product.id.toString() } }}
      className="product-card group flex flex-col overflow-hidden border border-theme-border bg-theme-card shadow-sm transition-all hover:shadow-lg"
    >
      <div className="product-card-image relative aspect-square w-full overflow-hidden bg-theme-muted">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs uppercase text-theme-muted-fg">
          {product.category}
        </p>

        <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-theme-card-fg group-hover:opacity-80">
          {product.title}
        </h3>

        <div className="mb-2 flex items-center gap-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating.rate) ? 'text-theme-accent' : 'text-theme-border'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-theme-muted-fg">
            ({product.rating.count})
          </span>
        </div>

        <div className="mt-auto">
          <p className="text-lg font-bold text-theme-primary">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </Link>
  )
}
