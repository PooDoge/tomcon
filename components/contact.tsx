"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <section id="contact" className="bg-blue-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-800">
              <span>Contact Us</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
              Get in Touch for Emergency Service
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Available 24/7 for emergency flood and water damage restoration throughout Long Island and NYC.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-900">Contact Information</h3>
                <p className="text-gray-600">
                  Reach out to us for immediate assistance or to schedule a free consultation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-blue-900">Phone</p>
                    <a href="tel:+16318315117" className="text-gray-600 hover:text-blue-700">
                      (631) 831-5117
                    </a>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-blue-900">Email</p>
                    <a href="mailto:tconley@tomconrestore.com" className="text-gray-600 hover:text-blue-700">
                      tconley@tomconrestore.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-blue-900">Location</p>
                    <p className="text-gray-600">Smithtown, NY 11787</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-[200px] w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96516.71087624855!2d-73.47124337433595!3d40.85494910000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8388c0b5b4e8d%3A0x9963a485c3f8e1d!2sSmithtown%2C%20NY!5e0!3m2!1sen!2sus!4v1654321234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tomcon Restorations Location"
                  aria-label="Google Maps showing Tomcon Restorations location"
                ></iframe>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-900">Send Us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              {isSubmitted ? (
                <div className="mt-8 flex flex-col items-center justify-center space-y-3 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                  <h4 className="text-xl font-bold text-green-700">Message Sent!</h4>
                  <p className="text-gray-600">Thank you for contacting us. We'll respond to your inquiry shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <Input id="phone" type="tel" placeholder="(631) 831-5117" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your situation..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
