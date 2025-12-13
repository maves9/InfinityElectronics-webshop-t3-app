import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "./Text"

const meta = {
  title: "Elements/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "base", "lg"],
      description: "Text size",
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
      description: "Font weight",
    },
    color: {
      control: "select",
      options: ["default", "muted", "primary", "danger", "success", "warning"],
      description: "Text color",
    },
    as: {
      control: "text",
      description: "Render as different HTML element",
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This is default text content.",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "This is small text content.",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "This is large text content.",
  },
}

export const Muted: Story = {
  args: {
    color: "muted",
    children: "This is muted text content.",
  },
}

export const Primary: Story = {
  args: {
    color: "primary",
    children: "This is primary colored text.",
  },
}

export const Error: Story = {
  args: {
    color: "danger",
    children: "This is error text content.",
  },
}

export const Bold: Story = {
  args: {
    weight: "bold",
    children: "This is bold text content.",
  },
}

export const AsSpan: Story = {
  args: {
    as: "span",
    children: "This is a span element.",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">Sizes</h3>
        <div className="space-y-2">
          <Text size="sm">Small text - Perfect for captions and footnotes.</Text>
          <Text size="base">Base text - The default size for body content.</Text>
          <Text size="lg">Large text - Great for emphasis or introductions.</Text>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Colors</h3>
        <div className="space-y-2">
          <Text color="default">Default color - Standard text color.</Text>
          <Text color="muted">Muted color - Less prominent text.</Text>
          <Text color="primary">Primary color - Brand colored text.</Text>
          <Text color="danger">Danger color - For error messages.</Text>
          <Text color="success">Success color - For success messages.</Text>
          <Text color="warning">Warning color - For warnings.</Text>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Weights</h3>
        <div className="space-y-2">
          <Text weight="normal">Normal weight - Regular text.</Text>
          <Text weight="medium">Medium weight - Slightly emphasized.</Text>
          <Text weight="semibold">Semibold weight - More emphasized.</Text>
          <Text weight="bold">Bold weight - Heavily emphasized.</Text>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Combinations</h3>
        <div className="space-y-2">
          <Text size="lg" weight="bold" color="primary">
            Large, bold, primary text
          </Text>
          <Text size="sm" color="muted">
            Small, muted text for less important information
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}
