import { Metadata } from 'next'
import { Clock, Phone, MapPin } from 'lucide-react'
import { BookingForm } from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Book Service | Schedule Your Appointment Online',
  description: 'Schedule your auto repair appointment online at Rohnert Park Transmission. Quick, easy booking for all automotive services.',
}

export default function BookServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SCHEDULE YOUR SERVICE
            </h1>
            <p className="text-xl text-gray-600">
              Book your appointment online and save time. We'll confirm your appointment within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Service Appointment Request</h2>
              <BookingForm />
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rohnert-red text-white rounded-full mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">(707) 584-7727</p>
                <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 5:00 PM</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rohnert-red text-white rounded-full mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">5901 Commerce Blvd</p>
                <p className="text-gray-600">Rohnert Park, CA 94928</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rohnert-red text-white rounded-full mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}