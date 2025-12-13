import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./Textarea"

const meta = {
  title: "Elements/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the textarea",
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
      description: "Helper text",
    },
    disabled: {
      control: "boolean",
      description: "Disable the textarea",
    },
    required: {
      control: "boolean",
      description: "Mark as required",
    },
    rows: {
      control: "number",
      description: "Number of rows",
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Description",
    placeholder: "Describe your product",
    helperText: "Maximum 500 characters",
  },
}

export const WithError: Story = {
  args: {
    label: "Comments",
    error: "This field is required",
  },
}

export const Required: Story = {
  args: {
    label: "Feedback",
    placeholder: "Your feedback is important to us",
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Terms",
    disabled: true,
    value: "These terms cannot be edited.",
  },
}

export const CustomRows: Story = {
  args: {
    label: "Large Text Area",
    placeholder: "Enter a lot of text...",
    rows: 8,
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 w-96">
      <Textarea label="Default" placeholder="Enter text" />
      <Textarea
        label="With Helper Text"
        placeholder="Enter text"
        helperText="Maximum 500 characters"
      />
      <Textarea
        label="With Error"
        placeholder="Enter text"
        error="This field is required"
      />
      <Textarea label="Required" placeholder="Enter text" required />
      <Textarea label="Disabled" disabled value="Cannot edit this text" />
      <Textarea
        label="Custom Rows"
        placeholder="Enter a lot of text..."
        rows={6}
      />
      <Textarea
        label="Contact Form"
        placeholder="Tell us about your inquiry..."
        helperText="Our team will respond within 24 hours"
        rows={5}
      />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}
