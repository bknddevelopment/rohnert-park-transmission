import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Car, CheckCircle, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vehicle Repair Services by Brand | Rohnert Park Transmission',
  description: 'Expert auto repair for all vehicle brands in Rohnert Park, CA. ASE certified technicians specializing in transmission repair, engine service, and complete automotive care. 2-year warranty.',
  keywords: 'auto repair Rohnert Park, car repair by brand, transmission repair, engine service, all makes and models',
  openGraph: {
    title: 'All Vehicle Brands Service | Rohnert Park Transmission',
    description: 'Complete auto repair for all makes and models. Family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/services-hero.jpg'],
  }
}

const vehicleBrands = [
  { name: 'Acura', slug: 'acura-repair-rohnert-park', specialty: 'Honda Luxury Division' },
  { name: 'Audi', slug: 'audi-repair-rohnert-park', specialty: 'German Engineering' },
  { name: 'BMW', slug: 'bmw-repair-rohnert-park', specialty: 'Ultimate Driving Machine' },
  { name: 'Buick', slug: 'buick-repair-rohnert-park', specialty: 'American Luxury' },
  { name: 'Cadillac', slug: 'cadillac-repair-rohnert-park', specialty: 'Premium American' },
  { name: 'Chevrolet', slug: 'chevrolet-repair-rohnert-park', specialty: 'American Reliability' },
  { name: 'Chrysler', slug: 'chrysler-repair-rohnert-park', specialty: 'American Innovation' },
  { name: 'Dodge', slug: 'dodge-repair-rohnert-park', specialty: 'American Performance' },
  { name: 'Fiat', slug: 'fiat-repair-rohnert-park', specialty: 'Italian Style' },
  { name: 'Ford', slug: 'ford-repair-rohnert-park', specialty: 'Built Ford Tough' },
  { name: 'GMC', slug: 'gmc-repair-rohnert-park', specialty: 'Professional Grade' },
  { name: 'Honda', slug: 'honda-repair-rohnert-park', specialty: 'Japanese Reliability' },
  { name: 'Hyundai', slug: 'hyundai-repair-rohnert-park', specialty: 'Korean Innovation' },
  { name: 'Infiniti', slug: 'infiniti-repair-rohnert-park', specialty: 'Nissan Luxury' },
  { name: 'Jeep', slug: 'jeep-repair-rohnert-park', specialty: '4x4 Specialists' },
  { name: 'Kia', slug: 'kia-repair-rohnert-park', specialty: 'Value & Technology' },
  { name: 'Lexus', slug: 'lexus-repair-rohnert-park', specialty: 'Toyota Luxury' },
  { name: 'Lincoln', slug: 'lincoln-repair-rohnert-park', specialty: 'American Luxury' },
  { name: 'Mazda', slug: 'mazda-repair-rohnert-park', specialty: 'Zoom-Zoom Performance' },
  { name: 'Mercedes-Benz', slug: 'mercedes-benz-repair-rohnert-park', specialty: 'German Excellence' },
  { name: 'Mercury', slug: 'mercury-repair-rohnert-park', specialty: 'Classic American' },
  { name: 'Mini', slug: 'mini-repair-rohnert-park', specialty: 'British Heritage' },
  { name: 'Mitsubishi', slug: 'mitsubishi-repair-rohnert-park', specialty: 'Japanese Engineering' },
  { name: 'Nissan', slug: 'nissan-repair-rohnert-park', specialty: 'CVT Specialists' },
  { name: 'Oldsmobile', slug: 'oldsmobile-repair-rohnert-park', specialty: 'Classic GM' },
  { name: 'Pontiac', slug: 'pontiac-repair-rohnert-park', specialty: 'Performance Heritage' },
  { name: 'Ram', slug: 'ram-repair-rohnert-park', specialty: 'Heavy-Duty Trucks' },
  { name: 'Saab', slug: 'saab-repair-rohnert-park', specialty: 'Swedish Engineering' },
  { name: 'Saturn', slug: 'saturn-repair-rohnert-park', specialty: 'Polymer Innovation' },
  { name: 'Scion', slug: 'scion-repair-rohnert-park', specialty: 'Toyota Youth Brand' },
  { name: 'Subaru', slug: 'subaru-repair-rohnert-park', specialty: 'All-Wheel Drive' },
  { name: 'Suzuki', slug: 'suzuki-repair-rohnert-park', specialty: 'Compact Specialists' },
  { name: 'Toyota', slug: 'toyota-repair-rohnert-park', specialty: 'Reliability Leaders' },
  { name: 'Volkswagen', slug: 'volkswagen-repair-rohnert-park', specialty: 'German Engineering' },
  { name: 'Volvo', slug: 'volvo-repair-rohnert-park', specialty: 'Swedish Safety' },
]

export default function VehicleBrandsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Vehicle Repair Services"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              EXPERT REPAIR FOR ALL VEHICLE BRANDS
            </h1>
            <p className="text-xl text-white mb-6">
              ASE certified technicians servicing all makes and models since 1997
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-service" className="btn-primary">
                SCHEDULE SERVICE
              </Link>
              <a href="tel:7075847727" className="btn-secondary">
                CALL (707) 584-7727
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Complete Auto Repair for Every Make and Model
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Rohnert Park Transmission & Auto Repair, we service all vehicle brands with the same 
              dedication to quality and expertise. Our ASE-certified technicians have the training, tools, 
              and experience to properly diagnose and repair any vehicle that comes through our doors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-rohnert-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">All Brands Welcome</h3>
                <p className="text-sm text-gray-600">Domestic, Import, Luxury & Commercial</p>
              </div>
              <div className="text-center">
                <div className="bg-rohnert-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Specialized Expertise</h3>
                <p className="text-sm text-gray-600">Brand-specific knowledge & tools</p>
              </div>
              <div className="text-center">
                <div className="bg-rohnert-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">2-Year Warranty</h3>
                <p className="text-sm text-gray-600">24,000 miles of protection</p>
              </div>
            </div>
          </div>

          {/* Brand Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Select Your Vehicle Brand
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {vehicleBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/vehicles/${brand.slug}`}
                  className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-rohnert-red transition-all hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-rohnert-red transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{brand.specialty}</p>
                  <div className="mt-3 text-rohnert-red opacity-0 group-hover:opacity-100 transition-opacity">
                    View Services →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Choose Rohnert Park Transmission?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Family Owned Since 1997</h3>
                <p className="text-sm text-gray-600">
                  Over 25 years of trusted service in Sonoma County
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ASE Certified Technicians</h3>
                <p className="text-sm text-gray-600">
                  Master technicians with ongoing training
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Latest Diagnostic Equipment</h3>
                <p className="text-sm text-gray-600">
                  Factory-level tools for accurate diagnosis
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-sm text-gray-600">
                  Written estimates with no hidden fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-rohnert-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule Your Vehicle Service?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            No matter what you drive, we have the expertise to service it properly. 
            Schedule your appointment today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-service" className="btn-secondary">
              BOOK ONLINE
            </Link>
            <a href="tel:7075847727" className="btn-ghost border-2 border-white">
              <Phone className="w-5 h-5 mr-2" />
              (707) 584-7727
            </a>
          </div>
        </div>
      </section>
    </>
  )
}