import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { CartItem } from "./CartItem"

const meta = {
  title: "Components/CartItem",
  component: CartItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CartItem>

export default meta
type Story = StoryObj<typeof meta>

const sampleProduct = {
  id: 1,
  title: "Premium Wireless Headphones",
  price: 299.99,
  description: "High-quality wireless headphones",
  category: "electronics",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: {
    rate: 4.5,
    count: 328,
  },
}

export const Default: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState(1)
    return (
      <div className="w-full max-w-2xl bg-white p-4">
        <CartItem
          item={{
            productId: 1,
            quantity,
            product: sampleProduct,
          }}
          onRemove={() => alert("Remove clicked")}
          onUpdateQuantity={(_, qty) => setQuantity(qty)}
        />
      </div>
    )
  },
  args: {} as any,
}

export const WithOptions: Story = {
  render: (args) => {
    const [quantity, setQuantity] = useState(2)
    return (
      <div className="w-full max-w-2xl bg-white p-4">
        <CartItem
          item={{
            productId: 1,
            quantity,
            selectedSize: "Large",
            selectedColor: "Black",
            product: sampleProduct,
          }}
          onRemove={() => alert("Remove clicked")}
          onUpdateQuantity={(_, qty) => setQuantity(qty)}
        />
      </div>
    )
  },
  args: {} as any,
}

export const MultipleItems: Story = {
  render: (args) => {
    const [qty1, setQty1] = useState(1)
    const [qty2, setQty2] = useState(3)
    const [qty3, setQty3] = useState(1)
    
    return (
      <div className="w-full max-w-2xl bg-white divide-y">
        <CartItem
          item={{ 
            productId: 1, 
            quantity: qty1,
            product: sampleProduct
          }}
          onRemove={() => alert("Remove item 1")}
          onUpdateQuantity={(_, qty) => setQty1(qty)}
        />
        <CartItem
          item={{
            productId: 2,
            quantity: qty2,
            selectedSize: "Medium",
            selectedColor: "Blue",
            product: {
              ...sampleProduct,
              id: 2,
              title: "Smart Watch Pro",
              price: 399.99,
            }
          }}
          onRemove={() => alert("Remove item 2")}
          onUpdateQuantity={(_, qty) => setQty2(qty)}
        />
        <CartItem
          item={{
            productId: 3,
            quantity: qty3,
            selectedSize: "One Size",
            product: {
              ...sampleProduct,
              id: 3,
              title: "Laptop Stand",
              price: 79.99,
            }
          }}
          onRemove={() => alert("Remove item 3")}
          onUpdateQuantity={(_, qty) => setQty3(qty)}
        />
      </div>
    )
  },
  args: {} as any,
  parameters: {
    layout: "padded",
  },
}

