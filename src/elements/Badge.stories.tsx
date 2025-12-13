import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta = {
  title: "Elements/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error", "info"],
      description: "Color variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Badge size",
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
}

export const Error: Story = {
  args: {
    variant: "danger",
    children: "Error",
  },
}

export const Info: Story = {
  args: {
    variant: "secondary",
    children: "Info",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Sizes</h3>
        <div className="flex items-center gap-2">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span>Order Status:</span>
            <Badge variant="success">Delivered</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="danger">Cancelled</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Product Tag:</span>
            <Badge variant="primary">New</Badge>
            <Badge variant="secondary">Sale</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}
