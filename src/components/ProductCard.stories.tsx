import type { Meta, StoryObj } from "@storybook/react"
import { ProductCard } from "./ProductCard"

const meta = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

const sampleProduct = {
  id: 1,
  title: "Premium Wireless Headphones",
  price: 299.99,
  description:
    "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
  category: "electronics",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: {
    rate: 4.5,
    count: 328,
  },
}

export const Default: Story = {
  args: {
    product: sampleProduct,
  },
}

export const HighRated: Story = {
  args: {
    product: {
      ...sampleProduct,
      title: "Premium Product",
      rating: { rate: 4.9, count: 1250 },
    },
  },
}

export const LowRated: Story = {
  args: {
    product: {
      ...sampleProduct,
      title: "Budget Option",
      price: 49.99,
      rating: { rate: 3.2, count: 45 },
    },
  },
}

export const LongTitle: Story = {
  args: {
    product: {
      ...sampleProduct,
      title:
        "Ultra Premium Wireless Bluetooth Headphones with Active Noise Cancellation and Long Battery Life",
    },
  },
}

export const Grid: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 max-w-6xl">
      <ProductCard product={sampleProduct} />
      <ProductCard
        product={{
          ...sampleProduct,
          id: 2,
          title: "Smart Watch Pro",
          price: 399.99,
          rating: { rate: 4.7, count: 892 },
        }}
      />
      <ProductCard
        product={{
          ...sampleProduct,
          id: 3,
          title: "Laptop Stand",
          price: 79.99,
          rating: { rate: 4.3, count: 234 },
        }}
      />
    </div>
  ),
  args: {
    product: sampleProduct,
  },
  parameters: {
    layout: "fullscreen",
  },
}
