"use client"

import type { Product } from "~/types/product"
import { ProductCard } from "./ProductCard"
import { ProductCardSkeleton } from "./ProductCardSkeleton"
import { Input, Select, Button, Heading, Text } from "~/elements"
import { useState, useMemo } from "react"

interface ProductListProps {
  products: Product[]
  categories: string[]
}

const ITEMS_PER_PAGE = 12

export function ProductList({ products, categories }: ProductListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("default")
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    // Filter by search query
    if (searchQuery) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name-desc":
        result.sort((a, b) => b.title.localeCompare(a.title))
        break
      case "rating":
        result.sort((a, b) => b.rating.rate - a.rating.rate)
        break
      default:
        break
    }

    return result
  }, [products, selectedCategory, sortBy, searchQuery])

  // Get displayed products
  const displayedProducts = filteredAndSortedProducts.slice(0, itemsToShow)
  const hasMore = itemsToShow < filteredAndSortedProducts.length

  // Reset items to show when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setItemsToShow(ITEMS_PER_PAGE)
  }

  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    setItemsToShow(ITEMS_PER_PAGE)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setItemsToShow(ITEMS_PER_PAGE)
  }

  const handleShowMore = () => {
    setIsLoading(true)
    // Simulate loading delay for better UX
    setTimeout(() => {
      setItemsToShow((prev) => prev + ITEMS_PER_PAGE)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading level={1} className="mb-8">All Products</Heading>

      {/* Filters and Controls */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="flex-1 md:max-w-md">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <Select
            id="category"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </Select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <Select
            id="sort"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="rating">Rating</option>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <Text color="muted" className="mb-4">
        Showing {displayedProducts.length} of {filteredAndSortedProducts.length}{" "}
        products
      </Text>

      {/* Products Grid */}
      {displayedProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Show More Button */}
          {hasMore && (
            <div className="mt-8 text-center">
              <Button
                onClick={handleShowMore}
                disabled={isLoading}
                variant="primary"
                size="lg"
              >
                {isLoading ? "Loading..." : "Show More"}
              </Button>
            </div>
          )}

          {/* Loading Skeletons */}
          {isLoading && (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <ProductCardSkeleton key={`skeleton-${i}`} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="py-12 text-center">
          <Text color="muted">
            No products found matching your criteria.
          </Text>
        </div>
      )}
    </div>
  )
}
