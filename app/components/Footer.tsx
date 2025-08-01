import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Star, Phone, MapPin, Clock } from 'lucide-react'
import { getImagePath } from '../utils/imagePath'

const services = [
  { name: 'Transmission Service', href: '/services/transmission-service' },
  { name: 'Maintenance Schedule', href: '/services/maintenance-schedule' },
  { name: 'Brake & Rotor Repair', href: '/services/brake-and-rotor-repair' },
  { name: 'Engine Tune-Up', href: '/services/engine-tune-up' },
  { name: 'Water Pump Service', href: '/services/water-pump-service' },
  { name: 'Check Engine Light', href: '/services/check-engine-light' },
  { name: 'Transfer Case Repair', href: '/services/transfer-case-repair' },
  { name: 'Fuel System Service', href: '/services/fuel-system-service' },
  { name: 'AC & Heat Repair', href: '/services/ac-and-heat-repair' },
  { name: 'Tire Services', href: '/services/tire-services' },
  { name: 'Differential Service & Repair', href: '/services/differential-service-and-repair' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative w-48 h-16 mb-4">
              <Image
                src={getImagePath("/logo-white.svg")}
                alt="Rohnert Park Transmission"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Trusted auto repair and transmission services in Rohnert Park since 1997.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:7075847727" className="flex items-start hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>(707) 584-7727</span>
              </a>
              <Link href="/shop-details" className="flex items-start hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>305 Laguna Dr, Rohnert Park, CA 94928</span>
              </Link>
              <div className="flex items-start text-gray-400">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Mon-Thu 7:30am-5pm | Fri 7am-4pm</span>
              </div>
            </div>
            <h4 className="font-semibold mt-6 mb-2">Payment Options</h4>
            <p className="text-sm text-gray-400">We accept all major credit cards</p>
            {/* Payment icons will be added once available */}
            {/* <div className="flex space-x-2">
              <Image src={getImagePath("/payment-icons/discover.svg")} alt="Discover" width={40} height={25} />
              <Image src={getImagePath("/payment-icons/mastercard.svg")} alt="Mastercard" width={40} height={25} />
              <Image src={getImagePath("/payment-icons/visa.svg")} alt="Visa" width={40} height={25} />
              <Image src={getImagePath("/payment-icons/amex.svg")} alt="American Express" width={40} height={25} />
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/coupons" className="hover:text-white transition-colors text-sm">
                  Coupons & Specials
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-white transition-colors text-sm">
                  Financing Options
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-white transition-colors text-sm">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors text-sm">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors text-sm">
                  Auto Care Blog
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-white transition-colors text-sm">
                  Vehicle Brands We Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Rohnert Park Transmission & Auto Repair. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}