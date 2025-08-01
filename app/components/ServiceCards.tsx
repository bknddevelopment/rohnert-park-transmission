'use client'

import Image from 'next/image'
import Link from 'next/link'
import { serviceIcons } from './ServiceIcons'
import { ChevronRight, CheckCircle } from 'lucide-react'

const services = [
  {
    slug: 'transmission-service',
    title: 'Transmission Service',
    description: 'Expert transmission repair, rebuilds, and maintenance',
    features: ['Automatic & Manual', 'Free Diagnosis', '2-Year Warranty']
  },
  {
    slug: 'brake-and-rotor-repair',
    title: 'Brake & Rotor Repair',
    description: 'Complete brake system service and safety inspections',
    features: ['Pads & Rotors', 'Brake Fluid', 'ABS Service']
  },
  {
    slug: 'engine-tune-up',
    title: 'Engine Tune-Up',
    description: 'Improve performance and fuel efficiency',
    features: ['Spark Plugs', 'Filters', 'Fuel System']
  },
  {
    slug: 'check-engine-light',
    title: 'Check Engine Light',
    description: 'Advanced diagnostics to identify issues',
    features: ['OBD-II Scan', 'Error Codes', 'Expert Analysis']
  },
  {
    slug: 'ac-and-heat-repair',
    title: 'AC & Heat Repair',
    description: 'Stay comfortable in any weather',
    features: ['Refrigerant', 'Compressor', 'Climate Control']
  },
  {
    slug: 'maintenance-schedule',
    title: 'Scheduled Maintenance',
    description: 'Keep your vehicle running smoothly',
    features: ['Oil Changes', 'Inspections', 'Factory Schedule']
  }
]

export function ServiceCards() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rohnert-yellow/10 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-rohnert-yellow" />
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">All Makes & Models</span>
          </div>
          <h2 className="mb-6">
            Comprehensive Service for 
            <span className="block gradient-text-yellow">All Vehicle Makes & Models</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From domestic to import vehicles, our certified technicians have the expertise
            to service all makes and models with precision and care.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const iconConfig = serviceIcons[service.slug as keyof typeof serviceIcons]
            const Icon = iconConfig.icon
            
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card relative overflow-hidden"
              >
                {/* Icon Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Icon className="w-full h-full" />
                </div>
                
                {/* Card Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl ${iconConfig.bgColor} mb-6`}>
                    <Icon className={`w-8 h-8 ${iconConfig.color}`} />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-rohnert-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-rohnert-red font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Link href="/services" className="btn-yellow inline-flex items-center gap-2">
            <span>View All Services</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Trust Section */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Import and Domestic Auto Repair 
                <span className="gradient-text"> You Can Trust</span>
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Rohnert Park Transmission & Auto Repair, we cater to a diverse range of vehicles, 
                  including domestic, European, and Asian brands. Our technicians are trained to handle 
                  the unique requirements of each make and model, ensuring top-notch service regardless 
                  of your vehicle's origin.
                </p>
                <p>
                  Our facility is equipped with advanced diagnostic tools, allowing us to accurately 
                  identify and address issues across various vehicle types. Whether you drive a compact 
                  car, SUV, or truck, we provide tailored solutions to meet your specific automotive needs.
                </p>
                <p>
                  We understand the intricacies of different vehicle systems and use manufacturer-recommended 
                  procedures and parts. This commitment ensures that every service we perform maintains the 
                  integrity and performance of your vehicle, giving you peace of mind on the road.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rohnert-red">27+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rohnert-red">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rohnert-red">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-photo.jpg"
                  alt="Rohnert Park Transmission Team with ATRA Certification"
                  width={600}
                  height={400}
                  className="w-full"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* ATRA Badge */}
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-xl animate-float">
                  <Image
                    src="/images/atra.png"
                    alt="ATRA - Automatic Transmission Rebuilders Association"
                    width={120}
                    height={120}
                  />
                </div>
                
                {/* ASE Badge */}
                <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <Image
                    src="/images/ase-certified.png"
                    alt="ASE Certified"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos with enhanced design */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Trusted by Leading Brands</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
            {['DODGE', 'TOYOTA', 'HONDA', 'CHEVROLET', 'LEXUS', 'MAZDA', 'FORD', 'JEEP'].map((brand) => (
              <div 
                key={brand} 
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="text-gray-600 font-bold text-sm group-hover:text-rohnert-red transition-colors">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}