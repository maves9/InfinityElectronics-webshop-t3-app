import { getCachedData, CACHE_KEYS, CACHE_TTL } from "./redis"
import {
  getAllProducts,
  getProduct,
  getCategories,
  getProductsByCategory,
  getLimitedProducts,
} from "./api"
import type { Product } from "~/types/product"

export async function getCachedAllProducts(): Promise<Product[]> {
  return getCachedData(CACHE_KEYS.products.all, getAllProducts, CACHE_TTL.default)
}

export async function getCachedProduct(id: number): Promise<Product> {
  return getCachedData(
    CACHE_KEYS.products.detail(id),
    () => getProduct(id),
    CACHE_TTL.default
  )
}

export async function getCachedCategories(): Promise<string[]> {
  return getCachedData(CACHE_KEYS.categories.all, getCategories, CACHE_TTL.long)
}

export async function getCachedProductsByCategory(
  category: string
): Promise<Product[]> {
  return getCachedData(
    CACHE_KEYS.products.byCategory(category),
    () => getProductsByCategory(category),
    CACHE_TTL.default
  )
}

export async function getCachedLimitedProducts(limit: number): Promise<Product[]> {
  return getCachedData(
    CACHE_KEYS.products.limited(limit),
    () => getLimitedProducts(limit),
    CACHE_TTL.long
  )
}
