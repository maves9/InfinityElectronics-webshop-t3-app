import type { Meta, StoryObj } from "@storybook/react"
import { Select } from "./Select"

const meta = {
  title: "Elements/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the select",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    helperText: {
      control: "text",
      description: "Helper text",
    },
    disabled: {
      control: "boolean",
      description: "Disable the select",
    },
    required: {
      control: "boolean",
      description: "Mark as required",
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
]

export const Default: Story = {
  args: {
    label: "Country",
    options: countries,
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Country",
    options: countries,
    helperText: "Select your country of residence",
  },
}

export const WithError: Story = {
  args: {
    label: "Country",
    options: countries,
    error: "Please select a country",
  },
}

export const Required: Story = {
  args: {
    label: "Country",
    options: countries,
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Country",
    options: countries,
    disabled: true,
  },
}

export const WithPlaceholder: Story = {
  render: (args) => (
    <Select label="Size">
      <option value="">Choose a size</option>
      <option value="xs">Extra Small</option>
      <option value="s">Small</option>
      <option value="m">Medium</option>
      <option value="l">Large</option>
      <option value="xl">Extra Large</option>
    </Select>
  ),
  args: {
    label: "Size",
  },
}

export const CustomChildren: Story = {
  render: () => (
    <Select label="Category">
      <option value="">Select a category</option>
      <optgroup label="Electronics">
        <option value="phones">Phones</option>
        <option value="laptops">Laptops</option>
        <option value="tablets">Tablets</option>
      </optgroup>
      <optgroup label="Clothing">
        <option value="mens">Men&apos;s</option>
        <option value="womens">Women&apos;s</option>
        <option value="kids">Kids</option>
      </optgroup>
    </Select>
  ),
}

export const AllStates: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 p-8 w-96">
      <Select label="Default" options={countries} />
      <Select
        label="With Helper Text"
        options={countries}
        helperText="This is helpful information"
      />
      <Select
        label="With Error"
        options={countries}
        error="This field is required"
      />
      <Select label="Required" options={countries} required />
      <Select label="Disabled" options={countries} disabled />
      <Select label="Product Size">
        <option value="">Select size</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </Select>
    </div>
  ),
  args: {} as any,
  parameters: {
    layout: "fullscreen",
  },
}
