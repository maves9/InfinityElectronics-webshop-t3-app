"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Cart, CartItem } from '~/types/product'

interface CartState {
  cart: Cart
  totalItems: number
  addToCart: (
    productId: number,
    quantity?: number,
    options?: { size?: string; color?: string },
  ) => void
  removeFromCart: (productId: number, options?: { size?: string; color?: string }) => void
  updateQuantity: (productId: number, quantity: number, options?: { size?: string; color?: string }) => void
  clearCart: () => void
  getTotalItems: () => number
}

const calculateTotalItems = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: {
        items: [],
      },
      totalItems: 0,
      addToCart: (productId, quantity = 1, options) => {
        set((state) => {
          const existingItemIndex = state.cart.items.findIndex(
            (item) =>
              item.productId === productId &&
              item.selectedSize === options?.size &&
              item.selectedColor === options?.color,
          )

          let newItems: CartItem[]

          if (existingItemIndex > -1) {
            // Update existing item
            newItems = [...state.cart.items]
            newItems[existingItemIndex] = {
              ...newItems[existingItemIndex]!,
              quantity: newItems[existingItemIndex]!.quantity + quantity,
            }
          } else {
            // Add new item
            newItems = [
              ...state.cart.items,
              {
                productId,
                quantity,
                selectedSize: options?.size,
                selectedColor: options?.color,
              },
            ]
          }

          return { 
            cart: { items: newItems },
            totalItems: calculateTotalItems(newItems)
          }
        })
      },
      removeFromCart: (productId, options) => {
        set((state) => {
          const newItems = state.cart.items.filter(
            (item) => 
              !(item.productId === productId &&
                item.selectedSize === options?.size &&
                item.selectedColor === options?.color)
          )
          return { 
            cart: { items: newItems },
            totalItems: calculateTotalItems(newItems)
          }
        })
      },
      updateQuantity: (productId, quantity, options) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, options)
          return
        }

        set((state) => {
          const newItems = state.cart.items.map((item) =>
            item.productId === productId &&
            item.selectedSize === options?.size &&
            item.selectedColor === options?.color
              ? { ...item, quantity }
              : item,
          )
          return { 
            cart: { items: newItems },
            totalItems: calculateTotalItems(newItems)
          }
        })
      },
      clearCart: () => {
        set({ cart: { items: [] }, totalItems: 0 })
      },
      getTotalItems: () => {
        return get().totalItems
      },
    }),
    {
      name: 'cart',
      onRehydrateStorage: () => (state) => {
        // Recalculate totalItems after rehydration from localStorage
        if (state) {
          state.totalItems = calculateTotalItems(state.cart.items)
        }
      },
    }
  )
)
