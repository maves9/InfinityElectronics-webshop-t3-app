import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { NumberInput } from "./NumberInput"

const meta = {
  title: "Elements/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the input",
    },
    min: {
      control: "number",
      description: "Minimum value",
    },
    max: {
      control: "number",
      description: "Maximum value",
    },
    step: {
      control: "number",
      description: "Increment/decrement step",
    },
    showControls: {
      control: "boolean",
      description: "Show +/- buttons",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input",
    },
  },
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(1)
    return <NumberInput value={value} onChange={setValue} label="Quantity" />
  },
  args: {} as any,
}

export const WithMinMax: Story = {
  render: (args) => {
    const [value, setValue] = useState(5)
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        min={1}
        max={10}
        label="Quantity (1-10)"
      />
    )
  },
  args: {} as any,
}

export const WithStep: Story = {
  render: (args) => {
    const [value, setValue] = useState(0)
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        step={5}
        label="Increment by 5"
      />
    )
  },
  args: {} as any,
}

export const WithoutControls: Story = {
  render: (args) => {
    const [value, setValue] = useState(1)
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        showControls={false}
        label="Quantity (No Buttons)"
      />
    )
  },
  args: {} as any,
}

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState(3)
    return (
      <NumberInput
        value={value}
        onChange={setValue}
        disabled
        label="Disabled"
      />
    )
  },
  args: {} as any,
}

export const CartQuantity: Story = {
  render: (args) => {
    const [value, setValue] = useState(1)
    return (
      <div className="p-4 border rounded">
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Product"
            className="w-20 h-20 object-cover mb-2"
          />
          <p className="font-semibold">Product Name</p>
          <p className="text-sm text-gray-600">$29.99</p>
        </div>
        <NumberInput
          value={value}
          onChange={setValue}
          min={1}
          max={99}
          label="Quantity"
        />
        <p className="mt-2 text-sm font-semibold">
          Total: ${(29.99 * value).toFixed(2)}
        </p>
      </div>
    )
  },
  args: {} as any,
}

export const AllStates: Story = {
  render: (args) => {
    const [qty1, setQty1] = useState(1)
    const [qty2, setQty2] = useState(5)
    const [qty3, setQty3] = useState(0)
    const [qty4, setQty4] = useState(3)
    
    return (
      <div className="flex flex-col gap-6 p-8 w-80">
        <NumberInput
          value={qty1}
          onChange={setQty1}
          label="Default"
        />
        <NumberInput
          value={qty2}
          onChange={setQty2}
          min={1}
          max={10}
          label="With Min/Max (1-10)"
        />
        <NumberInput
          value={qty3}
          onChange={setQty3}
          step={10}
          label="Step by 10"
        />
        <NumberInput
          value={qty4}
          onChange={setQty4}
          showControls={false}
          label="No Controls"
        />
        <NumberInput
          value={5}
          onChange={() => {}}
          disabled
          label="Disabled"
        />
      </div>
    )
  },
  args: {} as any,
  parameters: {
    layout: "fullscreen",
  },
}
