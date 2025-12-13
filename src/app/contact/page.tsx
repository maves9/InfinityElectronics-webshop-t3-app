"use client"

import { useState } from "react"
import { Input, Textarea, Button, Heading, Text } from "~/elements"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to an API
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Heading level={1} className="mb-8">Contact Us</Heading>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <Heading level={2} className="mb-4">
                Get in Touch
              </Heading>
              <Text color="muted" className="mb-6">
                Have a question or feedback? We&apos;d love to hear from you. Send us
                a message and we&apos;ll respond as soon as possible.
              </Text>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <Heading level={3} size="md" weight="semibold">Email</Heading>
                    <Text color="muted">
                      support@InfinityElectronics.com
                    </Text>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <Heading level={3} size="md" weight="semibold">Phone</Heading>
                    <Text color="muted">+1 (555) 123-4567</Text>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <Heading level={3} size="md" weight="semibold">Address</Heading>
                    <Text color="muted">
                      123 Store Street
                      <br />
                      New York, NY 10001
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name *"
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

                <Input
                  label="Email *"
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  label="Subject *"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />

                <Textarea
                  label="Message *"
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                />

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
