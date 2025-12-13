import type { Meta, StoryObj } from "@storybook/react"
import { Container } from "./Container"

const meta = {
  title: "Elements/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Container max-width",
    },
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

const sampleContent = (
  <div className="bg-blue-100 p-8 rounded">
    <h2 className="text-2xl font-bold mb-4">Container Content</h2>
    <p className="text-gray-700">
      This content is wrapped in a Container component. The container provides
      responsive max-width and padding to create a consistent layout across
      different screen sizes.
    </p>
  </div>
)

export const Small: Story = {
  args: {
    size: "sm",
    children: sampleContent,
  },
}

export const Medium: Story = {
  args: {
    size: "md",
    children: sampleContent,
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: sampleContent,
  },
}

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: sampleContent,
  },
}

export const Full: Story = {
  args: {
    size: "full",
    children: sampleContent,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8 bg-gray-50 py-8">
      <Container size="sm">
        <div className="bg-blue-100 p-4 rounded">
          <p className="font-semibold">Small Container (max-w-3xl)</p>
        </div>
      </Container>
      
      <Container size="md">
        <div className="bg-green-100 p-4 rounded">
          <p className="font-semibold">Medium Container (max-w-5xl)</p>
        </div>
      </Container>
      
      <Container size="lg">
        <div className="bg-yellow-100 p-4 rounded">
          <p className="font-semibold">Large Container (max-w-7xl)</p>
        </div>
      </Container>
      
      <Container size="xl">
        <div className="bg-purple-100 p-4 rounded">
          <p className="font-semibold">Extra Large Container (max-w-screen-2xl)</p>
        </div>
      </Container>
      
      <Container size="full">
        <div className="bg-red-100 p-4 rounded">
          <p className="font-semibold">Full Width Container (w-full)</p>
        </div>
      </Container>
    </div>
  ),
}

export const TypicalPage: Story = {
  render: () => (
    <div>
      {/* Header */}
      <div className="bg-gray-900 text-white py-4">
        <Container>
          <h1 className="text-2xl font-bold">Website Header</h1>
        </Container>
      </div>
      
      {/* Main Content */}
      <Container className="py-8">
        <h2 className="text-3xl font-bold mb-4">Page Title</h2>
        <p className="text-gray-600 mb-6">
          This demonstrates a typical page layout using the Container component
          to maintain consistent spacing and max-width.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border rounded">
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p className="text-sm text-gray-600">Description of feature</p>
          </div>
          <div className="bg-white p-6 border rounded">
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p className="text-sm text-gray-600">Description of feature</p>
          </div>
          <div className="bg-white p-6 border rounded">
            <h3 className="font-semibold mb-2">Feature 3</h3>
            <p className="text-sm text-gray-600">Description of feature</p>
          </div>
        </div>
      </Container>
      
      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-8">
        <Container>
          <p className="text-center text-gray-600">© 2024 Company Name</p>
        </Container>
      </div>
    </div>
  ),
}
