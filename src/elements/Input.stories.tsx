import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta = {
  title: "Elements/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    error: {
      control: "text",
      description: "Error message",
    },
    helperText: {
      control: "text",
      description: "Helper text below input",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
    required: {
      control: "boolean",
      description: "Makes the field required",
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Choose a username",
    helperText: "Must be unique and at least 3 characters",
  },
}

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    error: "Password must be at least 8 characters",
  },
}

export const Required: Story = {
  args: {
    label: "Full Name",
    required: true,
    placeholder: "John Doe",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    disabled: true,
    value: "Cannot edit this",
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 w-96">
      <Input label="Default" placeholder="Enter text" />
      <Input
        label="With Helper Text"
        placeholder="Enter text"
        helperText="This is some helpful information"
      />
      <Input
        label="With Error"
        placeholder="Enter text"
        error="This field is required"
      />
      <Input label="Required" placeholder="Enter text" required />
      <Input label="Disabled" disabled value="Disabled input" />
      <Input type="password" label="Password" placeholder="Enter password" />
      <Input type="email" label="Email" placeholder="email@example.com" />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}
