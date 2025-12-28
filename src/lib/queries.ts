import { queryOptions } from "@tanstack/react-query"
import {
  getAllProducts,
  getProduct,
  getCategories,
  getProductsByCategory,
  getLimitedProducts,
} from "./api"

const minute = 60 * 1000
const hour = 60 * minute

export const cacheConfig = {
  staleTime: {
    default: hour,
    long: 2 * hour,
    short: 5 * minute
  },
  gcTime: {
    default: 2 * hour,
    long: 24 * hour,
    extended: 4 * hour
  }
} as const

export const queryKeys = {
  products: {
    all: ["products"] as const,
    list: () => [...queryKeys.products.all, "list"] as const,
    limited: (limit: number) => [...queryKeys.products.all, "limited", limit] as const,
    detail: (id: number) => [...queryKeys.products.all, "detail", id] as const,
    byCategory: (category: string) => [...queryKeys.products.all, "category", category] as const,
  },
  categories: {
    all: ["categories"] as const,
  },
} as const

export const productQueries = {
  all: () =>
    queryOptions({
      queryKey: queryKeys.products.list(),
      queryFn: getAllProducts,
      staleTime: cacheConfig.staleTime.default,
      gcTime: cacheConfig.gcTime.default,
    }),

  limited: (limit: number) =>
    queryOptions({
      queryKey: queryKeys.products.limited(limit),
      queryFn: () => getLimitedProducts(limit),
      staleTime: cacheConfig.staleTime.long,
      gcTime: cacheConfig.gcTime.extended,
    }),

  detail: (id: number) =>
    queryOptions({
      queryKey: queryKeys.products.detail(id),
      queryFn: () => getProduct(id),
      staleTime: cacheConfig.staleTime.default,
      gcTime: cacheConfig.gcTime.default,
    }),

  byCategory: (category: string) =>
    queryOptions({
      queryKey: queryKeys.products.byCategory(category),
      queryFn: () => getProductsByCategory(category),
      staleTime: cacheConfig.staleTime.default,
      gcTime: cacheConfig.gcTime.default,
    }),
}

export const categoryQueries = {
  all: () =>
    queryOptions({
      queryKey: queryKeys.categories.all,
      queryFn: getCategories,
      staleTime: cacheConfig.staleTime.default,
      gcTime: cacheConfig.gcTime.long,
    }),
}
