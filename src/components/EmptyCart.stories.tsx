import type { Meta, StoryObj } from "@storybook/react"
import { EmptyCart } from "./EmptyCart"

const meta = {
  title: "Components/EmptyCart",
  component: EmptyCart,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyCart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
}

export const InContext: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
        </div>
      </div>
      <EmptyCart />
    </div>
  ),
  args: {} as any,
}
