import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, MapPin, CheckCircle, Car, Navigation, Users, Award, Star } from 'lucide-react'

interface LocationPageTemplateProps {
  city: string
  cityDescription: string
  distance: string
  driveTime: string
  population?: string
  landmarks: string[]
  longDescription: string[]
  whyChooseUs: string[]
  localTestimonials: { name: string; vehicle: string; review: string; rating: number }[]
  directions: string[]
  nearbyAreas?: string[]
  image?: string
}

// Full list of services offered
const services = [
  'Transmission Service & Repair',
  'Brake & Rotor Repair',
  'Engine Tune-Up',
  'Factory Scheduled Maintenance',
  'Check Engine Light Diagnostics',
  'Water Pump Service',
  'AC & Heat Repair',
  'Tire Services & Alignment',
  'Fuel System Service',
  'Transfer Case Repair',
  'Differential Service & Repair',
  'Oil Changes & Fluid Services',
  'Electrical System Diagnostics',
  'Suspension & Steering Repair',
  'Exhaust System Repair',
  'Pre-Purchase Inspections'
]

export function LocationPageTemplate({
  city,
  cityDescription,
  distance,
  driveTime,
  population,
  landmarks,
  longDescription,
  whyChooseUs,
  localTestimonials,
  directions,
  nearbyAreas = [],
  image = '/images/hero/main-hero.jpg'
}: LocationPageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-black">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={`Auto Repair Services for ${city} Residents`}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              EXPERT AUTO REPAIR FOR {city.toUpperCase()} RESIDENTS
            </h1>
            <p className="text-xl text-white mb-6">
              {cityDescription}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-white">
                <Navigation className="w-5 h-5 mr-2" />
                <span>{distance} from {city}</span>
              </div>
              <div className="flex items-center text-white">
                <Clock className="w-5 h-5 mr-2" />
                <span>{driveTime} drive</span>
              </div>
              {population && (
                <div className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Serving {population} residents</span>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-service" className="btn-primary">
                SCHEDULE SERVICE
              </Link>
              <a href="tel:7075847727" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
                CALL (707) 584-7727
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  Trusted Auto Repair Services for {city} Drivers
                </h2>
                {longDescription.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Local Landmarks Section */}
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Conveniently Located Near {city}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Our shop at 305 Laguna Dr in Rohnert Park is easily accessible from {city} and near these familiar landmarks:
                </p>
                <ul className="space-y-2">
                  {landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-start">
                      <MapPin className="w-5 h-5 text-rohnert-red mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services List */}
              <div className="bg-white border-2 border-gray-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">
                  Comprehensive Auto Services for {city} Vehicles
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  We provide complete automotive care for all makes and models:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-rohnert-yellow mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="bg-rohnert-red text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">
                  Why {city} Residents Choose Rohnert Park Transmission
                </h3>
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-white">{reason}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Family Owned Since 1997</h4>
                    <p className="text-sm opacity-90">Over 25 years serving Sonoma County with honest, reliable service</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">2-Year/24,000 Mile Warranty</h4>
                    <p className="text-sm opacity-90">Industry-leading warranty on all repairs for your peace of mind</p>
                  </div>
                </div>
              </div>

              {/* Local Testimonials */}
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">
                  What {city} Customers Are Saying
                </h3>
                <div className="space-y-6">
                  {localTestimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="flex text-rohnert-yellow">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <span className="ml-auto text-sm text-gray-500">{testimonial.vehicle}</span>
                      </div>
                      <p className="text-gray-700 mb-3 italic">"{testimonial.review}"</p>
                      <p className="text-sm font-semibold text-gray-900">- {testimonial.name}, {city} Resident</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions Section */}
              <div className="bg-white border-2 border-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Easy Directions from {city} to Our Shop
                </h3>
                <div className="space-y-3 mb-6">
                  {directions.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-rohnert-red text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Shop Address:</strong> 305 Laguna Dr, Rohnert Park, CA 94928<br />
                    <strong>Hours:</strong> Mon-Thu: 7:30am-5pm, Fri: 7am-4pm
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Info Sticky */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6 sticky top-4">
                <h3 className="text-xl font-bold mb-4">Schedule Your Service Today</h3>
                <div className="space-y-3 mb-6">
                  <a href="tel:7075847727" className="flex items-center text-gray-700 hover:text-rohnert-red">
                    <Phone className="w-5 h-5 mr-2" />
                    (707) 584-7727
                  </a>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                    <div>
                      <p>305 Laguna Dr</p>
                      <p>Rohnert Park, CA 94928</p>
                      <p className="text-sm text-rohnert-red font-semibold mt-1">
                        Only {driveTime} from {city}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <Clock className="w-5 h-5 mr-2 mt-0.5" />
                    <div>
                      <p>Mon-Thu: 7:30am-5pm</p>
                      <p>Fri: 7am-4pm</p>
                      <p>Sat-Sun: Closed</p>
                    </div>
                  </div>
                </div>
                <Link href="/book-service" className="btn-primary w-full text-center">
                  BOOK ONLINE
                </Link>
              </div>

              {/* Service Area */}
              {nearbyAreas.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Also Serving Nearby Areas</h3>
                  <ul className="space-y-2">
                    {nearbyAreas.map((area, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Car className="w-4 h-4 mr-2 text-rohnert-red" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Trust Badges */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Certified Excellence</h3>
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
                  <Image
                    src="/images/repairpal.png"
                    alt="RepairPal Certified"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <div className="text-center mt-4">
                    <p className="text-lg font-semibold text-rohnert-red">2-Year/24,000 Mile Warranty</p>
                    <p className="text-sm text-gray-600 mt-2">Best warranty in Sonoma County</p>
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
            {city} Residents: Experience the Difference
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers from {city} who trust Rohnert Park Transmission 
            for all their automotive needs. Schedule your service today and discover why we're 
            Sonoma County's most trusted auto repair shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-service" className="btn-primary">
              SCHEDULE YOUR SERVICE
            </Link>
            <a href="tel:7075847727" className="btn-secondary">
              CALL NOW: (707) 584-7727
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Serving {city} and all of Sonoma County since 1997
          </p>
        </div>
      </section>
    </>
  )
}

// Generate metadata helper
export function generateLocationMetadata(city: string, description: string): Metadata {
  return {
    title: `${city} Auto Repair | Expert Car Service Near You | Rohnert Park Transmission`,
    description: description,
    openGraph: {
      title: `${city} Auto Repair | Rohnert Park Transmission`,
      description: description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `/${city.toLowerCase().replace(/\s+/g, '-')}-auto-repair`
    }
  }
}