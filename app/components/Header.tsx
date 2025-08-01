'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Phone, MapPin, Clock, Menu, X, AlertCircle, Star } from 'lucide-react'

const services = [
  { name: 'Transmission Service', href: '/services/transmission-service' },
  { name: 'Brake & Rotor Repair', href: '/services/brake-and-rotor-repair' },
  { name: 'Engine Tune-Up', href: '/services/engine-tune-up' },
  { name: 'Maintenance Schedule', href: '/services/maintenance-schedule' },
  { name: 'Check Engine Light', href: '/services/check-engine-light' },
  { name: 'Water Pump Service', href: '/services/water-pump-service' },
  { name: 'AC & Heat Repair', href: '/services/ac-and-heat-repair' },
  { name: 'Tire Services', href: '/services/tire-services' },
  { name: 'Fuel System Service', href: '/services/fuel-system-service' },
  { name: 'Transfer Case Repair', href: '/services/transfer-case-repair' },
  { name: 'Differential Service & Repair', href: '/services/differential-service-and-repair' },
]

const vehicleBrands = [
  'Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat',
  'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus',
  'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mercury', 'Mini', 'Mitsubishi',
  'Nissan', 'Oldsmobile', 'Pontiac', 'Ram', 'Saab', 'Saturn', 'Scion',
  'Subaru', 'Suzuki', 'Toyota', 'Volkswagen', 'Volvo'
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [vehiclesOpen, setVehiclesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Check if business is open
  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      const minutes = now.getMinutes()
      const time = hour + minutes / 60

      // Monday-Friday: 8:00 AM - 5:00 PM
      if (day >= 1 && day <= 5) {
        setIsOpen(time >= 8 && time < 17)
      } else {
        setIsOpen(false)
      }
    }

    checkIfOpen()
    const interval = setInterval(checkIfOpen, 60000) // Check every minute
    return () => clearInterval(interval)
  }, [])

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
        setVehiclesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="sticky top-0 z-50">
      {/* Emergency Banner */}
      <div className={`bg-rohnert-yellow text-black py-2 text-center transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0' : ''}`}>
        <div className="container flex items-center justify-center gap-2 text-sm font-medium">
          <AlertCircle className="w-4 h-4" />
          <span>24/7 Emergency Towing Available</span>
          <span className="hidden sm:inline">•</span>
          <a href="tel:7075847727" className="font-bold underline hidden sm:inline">
            Call (707) 584-7727
          </a>
        </div>
      </div>

      <header className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        {/* Top Bar - Hide on scroll */}
        <div className={`bg-gray-900 text-white py-2 text-sm transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0' : ''}`}>
          <div className="container flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:7075847727" className="flex items-center hover:text-rohnert-yellow transition-colors">
                <Phone className="w-4 h-4 mr-2 animate-pulse" />
                <span className="font-bold text-base">(707) 584-7727</span>
              </a>
              <div className="hidden sm:flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>5901 Commerce Blvd, Rohnert Park</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon-Fri: 8:00am-5:00pm</span>
                <span className={`ml-2 px-2 py-0.5 rounded text-xs font-bold ${isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {isOpen ? 'OPEN NOW' : 'CLOSED'}
                </span>
              </div>
              <div className="hidden md:flex items-center">
                <Star className="w-4 h-4 mr-1 text-rohnert-yellow fill-current" />
                <span className="font-bold">4.8</span>
                <span className="ml-1 text-gray-300">(127 Reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <div className="container">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className={`relative transition-all duration-300 ${isScrolled ? 'w-36 h-12' : 'w-44 h-14'}`}>
                  <Image
                    src="/logo.svg"
                    alt="Rohnert Park Transmission & Auto Repair"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {/* Services Dropdown */}
                <div className="relative group" ref={servicesRef}>
                  <button
                    className="flex items-center text-gray-700 hover:text-rohnert-red transition-colors py-2 font-semibold text-base"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    Services
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <>
                      {/* Invisible bridge to maintain hover */}
                      <div className="absolute left-0 top-full h-2 w-72" />
                      <div
                        className="absolute left-0 top-full pt-2 w-72 bg-white shadow-xl rounded-lg py-3 z-50 border border-gray-100"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        onClick={() => setServicesOpen(false)}
                      >
                      <div className="px-4 pb-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Our Services</p>
                      </div>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-rohnert-red hover:text-white transition-all duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="px-4 pt-2 mt-2 border-t border-gray-100">
                        <Link href="/services" className="text-sm font-semibold text-rohnert-red hover:underline">
                          View All Services →
                        </Link>
                      </div>
                    </div>
                    </>
                  )}
                </div>

                {/* Other Nav Items */}
                <Link href="/vehicles" className="text-gray-700 hover:text-rohnert-red transition-colors font-semibold text-base">
                  Vehicles
                </Link>
                <Link href="/financing" className="text-gray-700 hover:text-rohnert-red transition-colors font-semibold text-base">
                  Financing
                </Link>
                <Link href="/warranty" className="text-gray-700 hover:text-rohnert-red transition-colors font-semibold text-base">
                  Warranty
                </Link>
                <Link href="/coupons" className="text-gray-700 hover:text-rohnert-red transition-colors font-semibold text-base relative">
                  Coupons
                  <span className="absolute -top-2 -right-4 bg-rohnert-yellow text-black text-xs px-1.5 py-0.5 rounded-full font-bold">
                    NEW
                  </span>
                </Link>
                <Link href="/reviews" className="text-gray-700 hover:text-rohnert-red transition-colors font-semibold text-base">
                  Reviews
                </Link>
              </div>

              {/* CTA Section */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="tel:7075847727"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold">Call Now</span>
                </a>
                <Link
                  href="/book-service"
                  className="px-5 py-2.5 bg-rohnert-red hover:bg-red-700 text-white font-bold rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Book Service
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="container py-4 space-y-2">
                <Link href="/services" className="block py-3 text-gray-700 hover:text-rohnert-red font-semibold">
                  Services
                </Link>
                <Link href="/vehicles" className="block py-3 text-gray-700 hover:text-rohnert-red font-semibold">
                  Vehicles
                </Link>
                <Link href="/financing" className="block py-3 text-gray-700 hover:text-rohnert-red font-semibold">
                  Financing
                </Link>
                <Link href="/warranty" className="block py-3 text-gray-700 hover:text-rohnert-red font-semibold">
                  Warranty
                </Link>
                <Link href="/coupons" className="block py-3 text-gray-700 hover:text-rohnert-red font-semibold">
                  Coupons
                </Link>
                <Link href="/reviews" className="block py-3 text-gray-700 hover:text-rohnert-red font-semibold">
                  Reviews
                </Link>
                <div className="pt-4 space-y-3">
                  <a href="tel:7075847727" className="block w-full py-3 bg-gray-100 text-center font-bold rounded-md">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Call (707) 584-7727
                  </a>
                  <Link href="/book-service" className="block w-full py-3 bg-rohnert-red text-white text-center font-bold rounded-md">
                    Book Service
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}