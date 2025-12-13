import type { Meta, StoryObj } from "@storybook/react"
import { OrderSummary } from "./OrderSummary"

const meta = {
  title: "Components/OrderSummary",
  component: OrderSummary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OrderSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    total: 0,
  },
}

export const SmallOrder: Story = {
  args: {
    total: 49.99,
  },
}

export const LargeOrder: Story = {
  args: {
    total: 1299.97,
  },
}

export const TypicalOrder: Story = {
  args: {
    total: 579.97,
  },
}

export const InContext: Story = {
  render: (args) => (
    <div className="grid md:grid-cols-3 gap-8 p-8 max-w-6xl">
      <div className="md:col-span-2 bg-gray-50 p-6 rounded">
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        <p className="text-gray-600">Your cart items would appear here...</p>
      </div>
      <div>
        <OrderSummary {...args} />
      </div>
    </div>
  ),
  args: {
    total: 579.97,
  },
  parameters: {
    layout: "fullscreen",
  },
}
