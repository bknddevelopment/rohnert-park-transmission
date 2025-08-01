import Link from 'next/link'
import { Home, Search, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-rohnert-red mb-4">404</h1>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-rohnert-red text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition-colors"
          >
            <Search className="w-5 h-5 mr-2" />
            View Services
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            <Link href="/services/transmission-service" className="text-rohnert-red hover:underline">
              Transmission Service
            </Link>
            <Link href="/services/brake-and-rotor-repair" className="text-rohnert-red hover:underline">
              Brake Repair
            </Link>
            <Link href="/book-service" className="text-rohnert-red hover:underline">
              Book Appointment
            </Link>
            <Link href="/reviews" className="text-rohnert-red hover:underline">
              Customer Reviews
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help? Call us at{' '}
            <a href="tel:+17075847727" className="inline-flex items-center text-rohnert-red font-semibold">
              <Phone className="w-4 h-4 mr-1" />
              (707) 584-7727
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}