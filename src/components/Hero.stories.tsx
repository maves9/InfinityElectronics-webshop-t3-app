import type { Meta, StoryObj } from "@storybook/react"
import { Hero } from "./Hero"

const sampleSlides = [
  {
    title: "Welcome to Our Store",
    description: "Discover amazing products at unbeatable prices",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    cta: "Shop Now",
    ctaLink: "/products",
  },
  {
    title: "New Arrivals",
    description: "Check out our latest collection of products",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop",
    cta: "View Collection",
    ctaLink: "/products",
  },
  {
    title: "Special Offers",
    description: "Don't miss out on our exclusive deals",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=600&fit=crop",
    cta: "View Deals",
    ctaLink: "/products",
  },
]

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    slides: sampleSlides,
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithDescription: Story = {
  render: () => (
    <div className="min-h-screen">
      <Hero slides={sampleSlides} />
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">
          The Hero component displays a carousel of promotional slides with
          auto-rotation and manual navigation controls.
        </p>
      </div>
    </div>
  ),
}
