import type { Product } from "~/types/product"
import { Heading } from "~/elements"
import { translations, type Locale } from "~/i18n"
import { ProductListClient } from "./ProductListClient"

interface ProductListProps {
  products: Product[]
  categories: string[]
  locale: Locale
}

export function ProductList({ products, categories, locale }: ProductListProps) {
  const t = translations[locale]

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading level={1} className="mb-8">{t.products.title}</Heading>
      
      <ProductListClient products={products} categories={categories} locale={locale} />
    </div>
  )
}
