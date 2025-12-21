import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "./Hero"

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithDescription: Story = {
  render: () => (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">
          The Hero component displays a carousel of promotional slides with
          auto-rotation and manual navigation controls.
        </p>
      </div>
    </div>
  ),
}
