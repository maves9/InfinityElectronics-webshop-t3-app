import { getAllProducts, getCategories } from "~/lib/api"
import { ProductList } from "~/components/ProductList"

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ])

  return <ProductList products={products} categories={categories} />
}
