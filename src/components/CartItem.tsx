"use client"

import Image from "next/image"
import Link from "next/link"
import type { CartItemWithProduct } from "~/types/product"
import { Button, Text, NumberInput } from "~/elements"

interface CartItemProps {
  item: CartItemWithProduct
  onUpdateQuantity: (
    productId: number,
    quantity: number,
    variants?: { size?: string; color?: string },
  ) => void
  onRemove: (
    productId: number,
    variants?: { size?: string; color?: string },
  ) => void
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 border border-gray-200 bg-white p-4">
      {/* Product Image */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden border border-gray-200 bg-gray-100">
        <Image
          src={item.product.image}
          alt={item.product.title}
          fill
          className="object-contain p-2"
          sizes="96px"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <Link
              href={`/products/${item.productId}`}
              className="text-lg font-semibold text-gray-900 hover:text-blue-600"
            >
              {item.product.title}
            </Link>
            <Text size="sm" color="muted">
              {item.product.category}
            </Text>
            {(item.selectedSize ?? item.selectedColor) && (
              <Text size="sm" color="muted" className="mt-1">
                {item.selectedSize && `Size: ${item.selectedSize}`}
                {item.selectedSize && item.selectedColor && " | "}
                {item.selectedColor && `Color: ${item.selectedColor}`}
              </Text>
            )}
          </div>
          <p className="text-lg font-bold text-gray-900">
            ${item.product.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="mt-auto flex items-center justify-between">
          <NumberInput
            value={item.quantity}
            onChange={(newQuantity) =>
              onUpdateQuantity(item.productId, newQuantity, {
                size: item.selectedSize,
                color: item.selectedColor,
              })
            }
            min={1}
            showControls={true}
          />

          <Button
            onClick={() =>
              onRemove(item.productId, {
                size: item.selectedSize,
                color: item.selectedColor,
              })
            }
            variant="ghost"
            size="sm"
            className="text-red-600 hover:text-red-700"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
