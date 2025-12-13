import type { Meta, StoryObj } from "@storybook/react"
import { Heading } from "./Heading"

const meta = {
  title: "Elements/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "Heading level (h1-h6)",
    },
    size: {
      control: "select",
      options: ["text-4xl", "text-3xl", "text-2xl", "text-xl", "text-lg", "text-base"],
      description: "Override default size",
    },
    weight: {
      control: "select",
      options: ["font-normal", "font-medium", "font-semibold", "font-bold"],
      description: "Font weight",
    },
    as: {
      control: "text",
      description: "Render as different HTML element",
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    level: 1,
    children: "Heading 1",
  },
}

export const H2: Story = {
  args: {
    level: 2,
    children: "Heading 2",
  },
}

export const H3: Story = {
  args: {
    level: 3,
    children: "Heading 3",
  },
}

export const H4: Story = {
  args: {
    level: 4,
    children: "Heading 4",
  },
}

export const H5: Story = {
  args: {
    level: 5,
    children: "Heading 5",
  },
}

export const H6: Story = {
  args: {
    level: 6,
    children: "Heading 6",
  },
}

export const WithCustomWeight: Story = {
  args: {
    level: 2,
    weight: "medium",
    children: "Medium Weight Heading",
  },
}

export const WithCustomSize: Story = {
  args: {
    level: 3,
    size: "4xl",
    children: "H3 with H1 Size",
  },
}

export const SemanticOverride: Story = {
  args: {
    level: 2,
    as: "div",
    children: "H2 Styled as Div",
  },
}

export const AllHeadings: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 max-w-2xl">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
      
      <hr className="my-4" />
      
      <h3 className="text-lg font-semibold">Different Weights</h3>
      <Heading level={2} weight="normal">Normal Weight</Heading>
      <Heading level={2} weight="medium">Medium Weight</Heading>
      <Heading level={2} weight="semibold">Semibold Weight</Heading>
      <Heading level={2} weight="bold">Bold Weight</Heading>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}
