import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta = {
  title: "Elements/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "elevated"],
      description: "Visual style variant",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Internal padding",
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const sampleContent = (
  <div>
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600">
      This is sample content inside a card component. Cards are used to group
      related information together.
    </p>
  </div>
)

export const Default: Story = {
  args: {
    children: sampleContent,
  },
}

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: sampleContent,
  },
}

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: sampleContent,
  },
}

export const NoPadding: Story = {
  args: {
    padding: "none",
    children: (
      <div className="p-4 bg-gray-100">
        Custom padding content
      </div>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: sampleContent,
  },
}

export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: sampleContent,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-6 p-8" style={{ maxWidth: "800px" }}>
      <h2 className="text-xl font-bold">Card Variants</h2>
      
      <div className="grid gap-4">
        <h3 className="font-semibold">Default</h3>
        <Card>{sampleContent}</Card>
      </div>
      
      <div className="grid gap-4">
        <h3 className="font-semibold">Bordered</h3>
        <Card variant="bordered">{sampleContent}</Card>
      </div>
      
      <div className="grid gap-4">
        <h3 className="font-semibold">Elevated</h3>
        <Card variant="elevated">{sampleContent}</Card>
      </div>
      
      <h2 className="text-xl font-bold mt-4">Padding Options</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <Card padding="none" variant="bordered">
          <div className="bg-blue-50 p-2">No Padding</div>
        </Card>
        <Card padding="sm" variant="bordered">
          <div>Small Padding</div>
        </Card>
        <Card padding="md" variant="bordered">
          <div>Medium Padding</div>
        </Card>
        <Card padding="lg" variant="bordered">
          <div>Large Padding</div>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}
