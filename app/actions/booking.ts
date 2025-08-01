'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

// Form validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{3}-?\d{3}-?\d{4}$/, 'Invalid phone number'),
  vehicle: z.object({
    year: z.string().min(4, 'Year is required'),
    make: z.string().min(2, 'Make is required'),
    model: z.string().min(2, 'Model is required'),
  }),
  service: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>

export interface BookingResponse {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitBooking(formData: FormData): Promise<BookingResponse> {
  try {
    // Parse form data
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      vehicle: {
        year: formData.get('year'),
        make: formData.get('make'),
        model: formData.get('model'),
      },
      service: formData.get('service'),
      preferredDate: formData.get('preferredDate'),
      preferredTime: formData.get('preferredTime'),
      message: formData.get('message'),
    }

    // Validate data
    const validatedData = bookingSchema.parse(data)

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Integrate with scheduling system
    
    // For now, we'll simulate success
    console.log('Booking submitted:', validatedData)

    // Revalidate the bookings page
    revalidatePath('/book-service')

    return {
      success: true,
      message: 'Your appointment request has been submitted successfully! We\'ll contact you within 24 hours to confirm.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please correct the errors below',
        errors: error.flatten().fieldErrors as Record<string, string[]>,
      }
    }

    console.error('Booking submission error:', error)
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    }
  }
}

// Contact form action
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContact(formData: FormData): Promise<BookingResponse> {
  try {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    const validatedData = contactSchema.parse(data)

    // In production, send email or save to database
    console.log('Contact form submitted:', validatedData)

    return {
      success: true,
      message: 'Thank you for contacting us! We\'ll respond within 24 hours.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please correct the errors below',
        errors: error.flatten().fieldErrors as Record<string, string[]>,
      }
    }

    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    }
  }
}