"use client"

import { useState } from "react"
import { Input, Textarea, Button } from "~/elements"
import { translations, type Locale } from "~/i18n"

interface ContactFormProps {
  locale: Locale
}

export function ContactForm({ locale }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[locale].contact.form

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label={t.name}
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label={t.email}
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label={t.subject}
        type="text"
        id="subject"
        name="subject"
        required
        value={formData.subject}
        onChange={handleChange}
      />

      <Textarea
        label={t.message}
        id="message"
        name="message"
        required
        rows={6}
        value={formData.message}
        onChange={handleChange}
      />

      <Button type="submit" variant="primary" size="lg" fullWidth>
        {submitted ? t.success : t.submit}
      </Button>
    </form>
  )
}
