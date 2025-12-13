import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "./Spinner"

const meta = {
  title: "Elements/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Spinner size",
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    size: "md",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="text-center">
        <Spinner size="sm" />
        <p className="mt-2 text-sm">Small</p>
      </div>
      <div className="text-center">
        <Spinner size="md" />
        <p className="mt-2 text-sm">Medium</p>
      </div>
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-2 text-sm">Large</p>
      </div>
      <div className="text-center">
        <Spinner size="xl" />
        <p className="mt-2 text-sm">Extra Large</p>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}

export const LoadingButton: Story = {
  render: () => (
    <button
      className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white"
      disabled
    >
      <Spinner size="sm" />
      Loading...
    </button>
  ),
}

export const LoadingPage: Story = {
  render: () => (
    <div className="flex h-64 w-full items-center justify-center bg-gray-50">
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-gray-600">Loading content...</p>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}
