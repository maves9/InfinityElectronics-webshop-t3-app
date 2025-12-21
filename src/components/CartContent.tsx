"use client"

import { useParams } from "next/navigation"
import { useCartStore } from "~/stores/cartStore"
import { useQueries } from "@tanstack/react-query"
import type { CartItemWithProduct } from "~/types/product"
import { getProduct } from "~/lib/api"
import { CartItem } from "./CartItem"
import { OrderSummary } from "./OrderSummary"
import { EmptyCart } from "./EmptyCart"
import { Button, Heading } from "~/elements"
import { translations, type Locale } from "~/i18n"

export function CartContent() {
  const params = useParams()
  const locale = params.locale as Locale
  const t = translations[locale]
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

  if (cart.items.length === 0) {
    return <EmptyCart />
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-6 w-6 animate-spin border-2 border-gray-300 border-t-blue-600" />
            <span className="text-gray-600">{t.cart.loadingCart}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <Heading level={1}>{t.cart.title}</Heading>
        <Button
          onClick={clearCart}
          variant="ghost"
          size="sm"
          className="text-red-600 hover:text-red-700"
        >
          {t.cart.clearCart}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItemsWithProducts.map((item, index) => (
              <CartItem
                key={`${item.productId}-${item.selectedSize}-${item.selectedColor}-${index}`}
                item={item}
                locale={locale}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>

        <OrderSummary total={total} />
      </div>
    </div>
  )
}
