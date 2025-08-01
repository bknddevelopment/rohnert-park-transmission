'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Cog, CircleDot, Zap, Calendar, AlertCircle, 
  Droplet, Thermometer, Car, Fuel, Settings,
  ArrowRight, CheckCircle, Clock, DollarSign,
  Star, Shield, Award, Sparkles, ChevronRight
} from 'lucide-react'

interface Service {
  id: string
  name: string
  shortDesc: string
  price: string
  time: string
  icon: any
  color: string
  bgColor: string
  features: string[]
  popular?: boolean
}

const services: Service[] = [
  {
    id: 'transmission-service',
    name: 'Transmission Service',
    shortDesc: 'Complete transmission maintenance and repair',
    price: 'From $149',
    time: '2-4 hours',
    icon: Cog,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    features: ['Fluid Change', 'Filter Replacement', 'System Inspection', '50-Point Check'],
    popular: true
  },
  {
    id: 'brake-service',
    name: 'Brake & Rotor Service',
    shortDesc: 'Comprehensive brake system service',
    price: 'From $199',
    time: '1-2 hours',
    icon: CircleDot,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Pad Replacement', 'Rotor Resurfacing', 'Fluid Flush', 'Safety Check']
  },
  {
    id: 'engine-tuneup',
    name: 'Engine Tune-Up',
    shortDesc: 'Optimize engine performance and efficiency',
    price: 'From $299',
    time: '2-3 hours',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    features: ['Spark Plugs', 'Air Filter', 'Fuel System Clean', 'Performance Test']
  },
  {
    id: 'maintenance',
    name: 'Scheduled Maintenance',
    shortDesc: 'Keep your vehicle running perfectly',
    price: 'From $99',
    time: '1 hour',
    icon: Calendar,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['Oil Change', 'Multi-Point Inspection', 'Tire Rotation', 'Fluid Top-Off']
  }
]

export function ServiceShowcaseSimple() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]!)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section section-padding-lg bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 badge badge-accent mb-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className={`text-gray-900 mb-6 ${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
            Professional Auto Services
            <span className="block gradient-text mt-2">That Keep You Moving</span>
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up animation-delay-400' : 'opacity-0'}`}>
            From routine maintenance to complex repairs, our ASE certified technicians 
            deliver exceptional service with transparent pricing and guaranteed satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Service Selector */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon
              const isSelected = selectedService.id === service.id
              
              return (
                <div
                  key={service.id}
                  className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <button
                    onClick={() => setSelectedService(service)}
                    className={`
                      w-full p-8 rounded-2xl border-2 transition-all duration-500 relative overflow-hidden group
                      ${isSelected 
                        ? 'border-rohnert-red bg-white shadow-2xl scale-[1.02]' 
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl'
                      }
                    `}
                  >
                    {/* Background Effect */}
                    <div className={`
                      absolute inset-0 transition-all duration-700
                      ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}>
                      <div className={`absolute inset-0 ${service.bgColor} opacity-30`} />
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-rohnert-yellow/20 to-transparent rounded-full blur-3xl" />
                    </div>

                    <div className="relative flex items-start gap-6">
                      <div className={`
                        p-4 rounded-2xl transition-all duration-500 shadow-lg
                        ${isSelected ? 'bg-white scale-110' : service.bgColor + ' group-hover:scale-105'}
                      `}>
                        <Icon className={`w-10 h-10 ${service.color}`} />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.name}
                          </h3>
                          {service.popular && (
                            <span className="badge badge-primary animate-pulse-glow">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-lg">{service.shortDesc}</p>
                        
                        <div className="flex items-center gap-8 text-base">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-rohnert-yellow" />
                            <span className="font-bold text-gray-900">{service.price}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-rohnert-yellow" />
                            <span className="text-gray-700 font-medium">{service.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ChevronRight className={`
                        w-8 h-8 transition-all duration-500
                        ${isSelected ? 'text-rohnert-red translate-x-2 scale-110' : 'text-gray-400 group-hover:translate-x-1'}
                      `} />
                    </div>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Service Details */}
          <div className={`sticky top-32 ${isVisible ? 'animate-slide-up animation-delay-800' : 'opacity-0'}`}>
            <div className="card-glass p-10 lg:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-rohnert-yellow/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-rohnert-red/20 to-transparent rounded-full blur-3xl" />

              <div className="relative">
                {/* Service Header */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-5 rounded-2xl ${selectedService.bgColor} shadow-xl animate-float`}>
                      <selectedService.icon className={`w-12 h-12 ${selectedService.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedService.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-green-600 font-semibold">2-Year Warranty</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-rohnert-yellow fill-current" />
                          <span className="text-sm text-gray-700 font-semibold">4.9/5 Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="p-2 rounded-full bg-green-100">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover-lift">
                    <Award className="w-10 h-10 text-rohnert-yellow mx-auto mb-3" />
                    <div className="text-sm font-bold text-gray-800">ASE Certified</div>
                    <div className="text-xs text-gray-600 mt-1">Expert Technicians</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover-lift">
                    <Star className="w-10 h-10 text-rohnert-yellow mx-auto mb-3" />
                    <div className="text-sm font-bold text-gray-800">5-Star Rated</div>
                    <div className="text-xs text-gray-600 mt-1">127+ Reviews</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover-lift">
                    <Shield className="w-10 h-10 text-rohnert-yellow mx-auto mb-3" />
                    <div className="text-sm font-bold text-gray-800">Guaranteed</div>
                    <div className="text-xs text-gray-600 mt-1">100% Satisfaction</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/services/${selectedService.id}`}
                    className="btn-xl btn-primary flex-1 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/book-service"
                    className="btn-xl btn-accent flex-1 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute right-4 text-sm font-normal opacity-75">Save 10%</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 text-center ${isVisible ? 'animate-slide-up animation-delay-1000' : 'opacity-0'}`}>
          <div className="glass-premium inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Need Something Else?</h4>
              <p className="text-gray-600">We service all makes and models with expert care</p>
            </div>
            <Link href="/services" className="btn-lg btn-primary whitespace-nowrap group">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}