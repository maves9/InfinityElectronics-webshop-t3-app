"use client"

import type { Product } from "~/types/product"
import { Input, Select, Button, Text } from "~/elements"
import { useState, useMemo } from "react"
import { translations, type Locale } from "~/i18n"
import { ProductCard } from "./ProductCard"
import { ProductCardSkeleton } from "./ProductCardSkeleton"

interface ProductListClientProps {
  products: Product[]
  categories: string[]
  locale: Locale
}

const ITEMS_PER_PAGE = 12

export function ProductListClient({ products, categories, locale }: ProductListClientProps) {
  const t = translations[locale]
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
    <>
      {/* Filters and Controls */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="flex-1 md:max-w-md">
          <Input
            type="text"
            placeholder={t.products.searchPlaceholder}
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
            {t.products.categoryLabel}
          </label>
          <Select
            id="category"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="all">{t.products.allCategories}</option>
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
            {t.products.sortLabel}
          </label>
          <Select
            id="sort"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">{t.products.sortDefault}</option>
            <option value="price-asc">{t.products.sortPriceAsc}</option>
            <option value="price-desc">{t.products.sortPriceDesc}</option>
            <option value="name-asc">{t.products.sortNameAsc}</option>
            <option value="name-desc">{t.products.sortNameDesc}</option>
            <option value="rating">{t.products.sortRating}</option>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <Text color="muted" className="mb-4">
        {t.products.showingResults
          .replace("{count}", displayedProducts.length.toString())
          .replace("{total}", filteredAndSortedProducts.length.toString())}
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
                {isLoading ? t.products.loading : t.products.showMore}
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
            {t.products.noProducts}
          </Text>
        </div>
      )}
    </>
  )
}
