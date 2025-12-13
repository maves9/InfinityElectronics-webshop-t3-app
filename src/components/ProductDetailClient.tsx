"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Product } from "~/types/product"
import { useCartStore } from "~/stores/cartStore"
import { Button, Heading, Text, NumberInput } from "~/elements"
import { PRODUCT_SIZES, PRODUCT_COLORS } from "~/data"

interface ProductDetailClientProps {
  product: Product
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>(PRODUCT_SIZES[2]!)
  const [selectedColor, setSelectedColor] = useState<string>(PRODUCT_COLORS[0]!.name)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart(product.id, quantity, {
      size: selectedSize,
      color: selectedColor,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square w-full overflow-hidden border border-gray-200 bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-8"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Category */}
          <Text size="sm" color="muted" className="mb-2 uppercase">
            {product.category}
          </Text>

          {/* Title */}
          <Heading level={1} className="mb-4">
            {product.title}
          </Heading>

          {/* Price */}
          <p className="mb-6 text-4xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          {/* Description */}
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Description
            </h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <Heading level={3} size="sm" weight="semibold" className="mb-3">
              Select Size
            </Heading>
            <div className="flex flex-wrap gap-2">
              {PRODUCT_SIZES.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  variant={selectedSize === size ? "primary" : "outline"}
                  size="sm"
                  className="px-4 py-2 text-sm"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <Heading level={3} size="sm" weight="semibold" className="mb-3">
              Select Color
            </Heading>
            <div className="flex flex-wrap gap-2">
              {PRODUCT_COLORS.map((color) => (
                <Button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  variant={selectedColor === color.name ? "primary" : "outline"}
                  size="sm"
                  className="flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <div
                    className="h-5 w-5 border border-gray-300"
                    style={{ backgroundColor: color.value }}
                  />
                  {color.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <NumberInput
              label="Quantity"
              value={quantity}
              onChange={setQuantity}
              min={1}
              showControls={true}
            />
          </div>

          {/* Add to Cart Button */}
          <div className="mt-auto flex gap-4">
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="lg"
              className="flex-1"
            >
              {addedToCart ? "Added to Cart! ✓" : "Add to Cart"}
            </Button>
            <Link href="/cart">
              <Button variant="outline" size="lg">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
