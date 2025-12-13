"use client"

import { useCartStore } from "~/stores/cartStore"
import { useQueries } from "@tanstack/react-query"
import type { CartItemWithProduct } from "~/types/product"
import { getProduct } from "~/lib/api"
import { CartItem } from "./CartItem"
import { OrderSummary } from "./OrderSummary"
import { EmptyCart } from "./EmptyCart"
import { Button, Heading } from "~/elements"

export function CartContent() {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const clearCart = useCartStore((state) => state.clearCart)

  // Fetch product data for all cart items using TanStack Query
  const productQueries = useQueries({
    queries: cart.items.map((item) => ({
      queryKey: ["product", item.productId],
      queryFn: () => getProduct(item.productId),
      staleTime: 5 * 60 * 1000, // 5 minutes
    })),
  })

  const isLoading = productQueries.some((query) => query.isLoading)

  // Combine cart items with fetched product data
  const cartItemsWithProducts: CartItemWithProduct[] = cart.items
    .map((item, index) => {
      const product = productQueries[index]?.data
      return {
        ...item,
        product,
      }
    })
    .filter((item): item is CartItemWithProduct => item.product !== undefined)

  const total = cartItemsWithProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  // Show empty cart if no items
  if (cart.items.length === 0) {
    return <EmptyCart />
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-6 w-6 animate-spin border-2 border-gray-300 border-t-blue-600" />
            <span className="text-gray-600">Loading cart...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <Heading level={1}>Shopping Cart</Heading>
        <Button
          onClick={clearCart}
          variant="ghost"
          size="sm"
          className="text-red-600 hover:text-red-700"
        >
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItemsWithProducts.map((item, index) => (
              <CartItem
                key={`${item.productId}-${item.selectedSize}-${item.selectedColor}-${index}`}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <OrderSummary total={total} />
      </div>
    </div>
  )
}
