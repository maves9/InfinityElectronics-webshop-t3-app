import type { Product } from "~/types/product"

const BASE_URL = "https://fakestoreapi.com"

export async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  })
  if (!response.ok) throw new Error("Failed to fetch products")
  return response.json() as Promise<Product[]>
}

export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 },
  })
  if (!response.ok) throw new Error("Failed to fetch product")
  return response.json() as Promise<Product>
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products/category/${category}`, {
    next: { revalidate: 3600 },
  })
  if (!response.ok) throw new Error("Failed to fetch products by category")
  return response.json() as Promise<Product[]>
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 },
  })
  if (!response.ok) throw new Error("Failed to fetch categories")
  return response.json() as Promise<string[]>
}

export async function getLimitedProducts(limit: number): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products?limit=${limit}`, {
    next: { revalidate: 7200 }, // Cache for 2 hours (homepage featured products)
  })
  if (!response.ok) throw new Error("Failed to fetch limited products")
  return response.json() as Promise<Product[]>
}
