'use client'

import { useState } from 'react'

type BookingResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

const services = [
  'Transmission Service',
  'Brake & Rotor Repair',
  'Engine Tune-Up',
  'Maintenance Schedule',
  'Check Engine Light',
  'Water Pump Service',
  'AC & Heat Repair',
  'Tire Services',
  'Fuel System Service',
  'Transfer Case Repair',
  'Differential Service',
  'Other (specify in message)'
]

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
]

export function BookingForm() {
  const [response, setResponse] = useState<BookingResponse | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    // For static site, just show success message
    // In production, you would send this data to an API endpoint
    setTimeout(() => {
      setResponse({
        success: true,
        message: 'Thank you for your booking request! We will contact you shortly to confirm your appointment.'
      })
      setIsSubmitting(false)
      
      // Reset form on success
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1000)
  }

  return (
    <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
      {response && (
        <div className={`p-4 rounded-lg ${response.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {response.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
          {response?.errors?.['name'] && (
            <p className="mt-1 text-sm text-red-600">{response.errors['name'][0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
          {response?.errors?.['email'] && (
            <p className="mt-1 text-sm text-red-600">{response.errors['email'][0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="707-555-1234"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
          {response?.errors?.['phone'] && (
            <p className="mt-1 text-sm text-red-600">{response.errors['phone'][0]}</p>
          )}
        </div>

        {/* Vehicle Information */}
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Year *
          </label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="2020"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
        </div>

        <div>
          <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Make *
          </label>
          <input
            type="text"
            id="make"
            name="make"
            placeholder="Toyota"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Model *
          </label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Camry"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
        </div>

        {/* Service Selection */}
        <div className="md:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {response?.errors?.['service'] && (
            <p className="mt-1 text-sm text-red-600">{response.errors['service'][0]}</p>
          )}
        </div>

        {/* Appointment Preferences */}
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            min={new Date().toISOString().split('T')[0]}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Please describe any specific issues or concerns..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rohnert-red focus:border-rohnert-red"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Request Appointment'}
      </button>
    </form>
  )
}