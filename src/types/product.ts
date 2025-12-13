export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

// Minimal cart item - only stores what the client needs to know
export interface CartItem {
  productId: number
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

// Cart with populated product data (for display)
export interface CartItemWithProduct extends CartItem {
  product: Product
}

export interface Cart {
  items: CartItem[]
}
