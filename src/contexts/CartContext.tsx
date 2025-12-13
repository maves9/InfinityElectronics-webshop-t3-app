"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import type { Cart, CartItem } from "~/types/product"

interface CartContextType {
  cart: Cart
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

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
  })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart) as Cart)
      } catch (error) {
        console.error("Failed to parse saved cart:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (
    productId: number,
    quantity = 1,
    options?: { size?: string; color?: string },
  ) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) =>
          item.productId === productId &&
          item.selectedSize === options?.size &&
          item.selectedColor === options?.color,
      )

      let newItems: CartItem[]

      if (existingItemIndex > -1) {
        // Update existing item
        newItems = [...prevCart.items]
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex]!,
          quantity: newItems[existingItemIndex]!.quantity + quantity,
        }
      } else {
        // Add new item
        newItems = [
          ...prevCart.items,
          {
            productId,
            quantity,
            selectedSize: options?.size,
            selectedColor: options?.color,
          },
        ]
      }

      return { items: newItems }
    })
  }

  const removeFromCart = (productId: number, options?: { size?: string; color?: string }) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter(
        (item) => 
          !(item.productId === productId &&
            item.selectedSize === options?.size &&
            item.selectedColor === options?.color)
      )
      return { items: newItems }
    })
  }

  const updateQuantity = (productId: number, quantity: number, options?: { size?: string; color?: string }) => {
    if (quantity <= 0) {
      removeFromCart(productId, options)
      return
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.productId === productId &&
        item.selectedSize === options?.size &&
        item.selectedColor === options?.color
          ? { ...item, quantity }
          : item,
      )
      return { items: newItems }
    })
  }

  const clearCart = () => {
    setCart({ items: [] })
  }

  const getTotalItems = () => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
