import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, MapPin, CheckCircle, Wrench, Shield, Award } from 'lucide-react'

interface VehiclePageTemplateProps {
  brand: string
  description: string
  longDescription: string[]
  commonProblems: { issue: string; solution: string }[]
  services: string[]
  image?: string
  relatedBrands?: { name: string; href: string }[]
}

export function VehiclePageTemplate({
  brand,
  description,
  longDescription,
  commonProblems,
  services,
  image = '/images/services-hero.jpg',
  relatedBrands = []
}: VehiclePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-black">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={`${brand} Repair in Rohnert Park`}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {brand.toUpperCase()} REPAIR SPECIALISTS
            </h1>
            <p className="text-xl text-white mb-6">{description}</p>
            <Link href="/book-service" className="btn-primary">
              SCHEDULE {brand.toUpperCase()} SERVICE
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Expert {brand} Repair & Service in Rohnert Park, CA
              </h2>
              {longDescription.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-6">
                  {paragraph}
                </p>
              ))}

              {/* Common Problems & Solutions */}
              <div className="bg-gray-50 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-bold mb-6">Common {brand} Problems We Fix</h3>
                <div className="space-y-4">
                  {commonProblems.map((item, index) => (
                    <div key={index} className="border-l-4 border-rohnert-red pl-4">
                      <h4 className="font-semibold text-lg mb-1">{item.issue}</h4>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div className="bg-white border-2 border-gray-100 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-bold mb-6">Our {brand} Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-rohnert-yellow mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-rohnert-red text-white p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Rohnert Park Transmission for Your {brand}?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Shield className="w-8 h-8 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">2-Year Warranty</h4>
                      <p className="text-sm opacity-90">All {brand} repairs backed by our comprehensive warranty</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-8 h-8 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">ASE Certified</h4>
                      <p className="text-sm opacity-90">Master technicians with {brand} expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Wrench className="w-8 h-8 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">25+ Years Experience</h4>
                      <p className="text-sm opacity-90">Family-owned since 1997</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-8 h-8 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Honest Service</h4>
                      <p className="text-sm opacity-90">Transparent pricing, no surprises</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link href="/book-service" className="btn-secondary text-center">
                    BOOK ONLINE
                  </Link>
                  <a href="tel:7075847727" className="btn-ghost border-2 border-white text-center">
                    CALL (707) 584-7727
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6 sticky top-4">
                <h3 className="text-xl font-bold mb-4">Schedule Your {brand} Service</h3>
                <div className="space-y-3 mb-6">
                  <a href="tel:7075847727" className="flex items-center text-gray-700 hover:text-rohnert-red">
                    <Phone className="w-5 h-5 mr-2" />
                    (707) 584-7727
                  </a>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                    <span>305 Laguna Dr<br />Rohnert Park, CA 94928</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <Clock className="w-5 h-5 mr-2 mt-0.5" />
                    <div>
                      <p>Mon-Thu: 7:30am-5pm</p>
                      <p>Fri: 7am-4pm</p>
                    </div>
                  </div>
                </div>
                <Link href="/book-service" className="btn-primary w-full text-center">
                  BOOK {brand.toUpperCase()} SERVICE
                </Link>
              </div>

              {/* Other Brands We Service */}
              {relatedBrands.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Other Brands We Service</h3>
                  <ul className="space-y-2">
                    {relatedBrands.map((brandItem, index) => (
                      <li key={index}>
                        <Link
                          href={brandItem.href}
                          className="text-rohnert-red hover:underline"
                        >
                          {brandItem.name} Repair
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Trust Badges */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Certified {brand} Experts</h3>
                <div className="space-y-4">
                  <Image
                    src="/images/ase-certified.png"
                    alt="ASE Certified"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <Image
                    src="/images/atra.png"
                    alt="ATRA Member"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Family Owned Since 1997</p>
                    <p className="text-lg font-semibold text-rohnert-red">2-Year/24,000 Mile Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need {brand} Repair in Rohnert Park?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't let {brand} problems slow you down. Our expert technicians are ready to diagnose 
            and repair your vehicle quickly and affordably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-service" className="btn-primary">
              SCHEDULE SERVICE
            </Link>
            <a href="tel:7075847727" className="btn-secondary">
              CALL NOW: (707) 584-7727
            </a>
          </div>
        </div>
      </section>
    </>
  )
}