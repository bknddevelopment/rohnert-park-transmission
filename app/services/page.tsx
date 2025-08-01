import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getImagePath } from '../utils/imagePath'
import { 
  Wrench, 
  Car, 
  Gauge, 
  Calendar, 
  AlertCircle, 
  Droplet,
  Thermometer,
  CircleDot,
  Fuel,
  Settings,
  Cog
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Auto Repair Services | Expert Car Maintenance & Repair',
  description: 'Comprehensive auto repair services in Rohnert Park, CA. From transmission repair to brake service, our ASE certified technicians handle all makes and models.',
  openGraph: {
    title: 'Auto Repair Services | Rohnert Park Transmission',
    description: 'Expert auto repair and maintenance services. ASE certified technicians, 2-year warranty, family-owned since 1997.',
  }
}

const services = [
  {
    icon: Cog,
    title: 'Transmission Service',
    description: 'Expert transmission repair, rebuilds, and maintenance to keep your vehicle shifting smoothly.',
    href: '/services/transmission-service',
    featured: true
  },
  {
    icon: CircleDot,
    title: 'Brake & Rotor Repair',
    description: 'Complete brake system service including pads, rotors, calipers, and fluid replacement.',
    href: '/services/brake-and-rotor-repair',
    featured: true
  },
  {
    icon: Gauge,
    title: 'Engine Tune-Up',
    description: 'Comprehensive engine performance service to improve fuel efficiency and power.',
    href: '/services/engine-tune-up',
    featured: true
  },
  {
    icon: Calendar,
    title: 'Maintenance Schedule',
    description: 'Factory-recommended preventive maintenance to extend your vehicle\'s life.',
    href: '/services/maintenance-schedule'
  },
  {
    icon: AlertCircle,
    title: 'Check Engine Light',
    description: 'Advanced diagnostics to identify and resolve check engine light issues.',
    href: '/services/check-engine-light'
  },
  {
    icon: Droplet,
    title: 'Water Pump Service',
    description: 'Water pump replacement and cooling system service to prevent overheating.',
    href: '/services/water-pump-service'
  },
  {
    icon: Thermometer,
    title: 'AC & Heat Repair',
    description: 'Complete HVAC service to keep you comfortable in any weather.',
    href: '/services/ac-and-heat-repair'
  },
  {
    icon: Car,
    title: 'Tire Services',
    description: 'Tire rotation, balancing, alignment, and replacement services.',
    href: '/services/tire-services'
  },
  {
    icon: Fuel,
    title: 'Fuel System Service',
    description: 'Fuel system cleaning and repair to improve performance and efficiency.',
    href: '/services/fuel-system-service'
  },
  {
    icon: Settings,
    title: 'Transfer Case Repair',
    description: 'Expert service for 4WD and AWD transfer case maintenance and repair.',
    href: '/services/transfer-case-repair'
  },
  {
    icon: Wrench,
    title: 'Differential Service',
    description: 'Complete differential service and repair for optimal power distribution.',
    href: '/services/differential-service-and-repair'
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-black">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/services-hero.jpg")}
            alt="Auto Repair Services"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              COMPREHENSIVE AUTO REPAIR SERVICES
            </h1>
            <p className="text-xl text-white mb-6">
              Expert automotive care for all makes and models. ASE certified technicians, 
              state-of-the-art equipment, and a 2-year/24,000-mile warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Full Range of Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we provide comprehensive automotive 
              services to keep your vehicle running at its best. Click on any service to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`group service-card ${
                  service.featured ? 'border-2 border-rohnert-yellow' : ''
                }`}
              >
                <div className="flex items-start">
                  <service.icon className="w-12 h-12 text-rohnert-red mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-rohnert-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                    {service.featured && (
                      <span className="inline-block mt-2 text-sm font-semibold text-rohnert-yellow">
                        POPULAR SERVICE
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Rohnert Park Transmission?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">
                  ASE certified professionals with years of experience
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  2-year/24,000-mile warranty on all services
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
                <p className="text-gray-600">
                  RepairPal certified for transparent, honest pricing
                </p>
              </div>
            </div>
            <Link href="/book-service" className="inline-block mt-8 btn-primary">
              SCHEDULE YOUR SERVICE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}