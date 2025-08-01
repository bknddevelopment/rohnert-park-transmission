import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  Award, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Wrench,
  FileText,
  Users,
  Globe,
  Phone,
  AlertCircle,
  ArrowRight
} from 'lucide-react'

export default function WarrantyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-rohnert-yellow" />
              <span className="text-rohnert-yellow font-bold text-xl">ATRA Member Shop</span>
              <Shield className="w-10 h-10 text-rohnert-yellow" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Nationwide Warranty Protection
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your repairs are backed by ATRA's trusted network of over 2,000 professional shops across the country
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="w-6 h-6 text-rohnert-yellow" />
                <span className="font-semibold">ATRA Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe className="w-6 h-6 text-rohnert-yellow" />
                <span className="font-semibold">Nationwide Coverage</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Clock className="w-6 h-6 text-rohnert-yellow" />
                <span className="font-semibold">2 Year / 24,000 Mile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Warranty Info */}
      <section className="section section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-rohnert-red to-red-700 text-white rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The ATRA Advantage</h2>
              <p className="text-lg md:text-xl mb-8 text-red-100">
                At Rohnert Park Transmission & Auto Repair, we stand behind our work with a trusted ATRA warranty. 
                This warranty covers both parts and labor on qualifying repairs, giving you peace of mind whether 
                you're driving around town or across the country. Our goal is to deliver reliable service that lasts—guaranteed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-rohnert-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Parts & Labor Coverage</h3>
                    <p className="text-red-100">Complete protection for your repair investment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-rohnert-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">No Extra Cost</h3>
                    <p className="text-red-100">Automatically included with eligible repairs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-rohnert-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Peace of Mind</h3>
                    <p className="text-red-100">Travel confidently with nationwide coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover-lift">
                <div className="bg-rohnert-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-10 h-10 text-rohnert-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Parts Coverage</h3>
                <p className="text-gray-600 mb-6">
                  All parts used in your repair are covered against defects and premature failure
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">OEM & aftermarket parts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Transmission components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Related repair parts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover-lift">
                <div className="bg-rohnert-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-rohnert-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Labor Coverage</h3>
                <p className="text-gray-600 mb-6">
                  Professional labor is fully covered to repair or replace any warranted parts
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Diagnostic time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Removal & installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Required adjustments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover-lift">
                <div className="bg-rohnert-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-rohnert-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nationwide Network</h3>
                <p className="text-gray-600 mb-6">
                  Your warranty is honored at over 2,000 ATRA member shops across North America
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Coast-to-coast coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Canada included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Easy shop locator</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Your Warranty Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Using your ATRA warranty is simple, whether at our shop or any participating location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-rohnert-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Automatic Coverage</h3>
              <p className="text-gray-600">
                Your warranty begins the day you pick up your vehicle—no registration required
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rohnert-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Keep Your Receipt</h3>
              <p className="text-gray-600">
                Your repair invoice serves as your warranty certificate—keep it safe
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rohnert-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Find ATRA Shop</h3>
              <p className="text-gray-600">
                If you need service while traveling, locate any ATRA member shop nearby
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rohnert-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Present Invoice</h3>
              <p className="text-gray-600">
                Show your original invoice and the ATRA shop will honor your warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="section section-padding">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                What's Covered
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Transmission Repairs & Rebuilds</strong>
                    <p className="text-gray-600">Complete internal transmission work including all hard parts and soft parts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Related Components</strong>
                    <p className="text-gray-600">Torque converters, valve bodies, solenoids, and electronic components</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Labor Costs</strong>
                    <p className="text-gray-600">All labor required to diagnose and repair covered components</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Towing Reimbursement</strong>
                    <p className="text-gray-600">Up to $100 towing reimbursement to nearest ATRA shop if breakdown occurs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Rental Car Allowance</strong>
                    <p className="text-gray-600">Daily allowance for rental vehicle during covered repairs (limits apply)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-red-500" />
                What's Not Covered
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Maintenance Services</strong>
                    <p className="text-gray-600">Regular maintenance like fluid changes, adjustments, or tune-ups</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Pre-existing Conditions</strong>
                    <p className="text-gray-600">Problems that existed before the warranty repair was performed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Abuse or Misuse</strong>
                    <p className="text-gray-600">Damage from racing, overloading, or improper use of vehicle</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Environmental Damage</strong>
                    <p className="text-gray-600">Damage from floods, accidents, vandalism, or acts of nature</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Consequential Damage</strong>
                    <p className="text-gray-600">Damage to other parts caused by continued driving after failure</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Warranty FAQs
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Common questions about your ATRA warranty coverage
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">How long does the warranty last?</h3>
              <p className="text-gray-600">
                Our standard ATRA warranty provides 2 years or 24,000 miles of coverage, whichever comes first. 
                Extended warranty options may be available for specific repairs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">Do I need to register my warranty?</h3>
              <p className="text-gray-600">
                No registration is required. Your warranty is automatically activated when you pick up your vehicle. 
                Simply keep your repair invoice as proof of warranty.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">What if I'm traveling and need repairs?</h3>
              <p className="text-gray-600">
                Visit any ATRA member shop in North America. Present your original repair invoice, and they'll 
                honor your warranty. You can find nearby shops at ATRA.com or call us for assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">Are there any maintenance requirements?</h3>
              <p className="text-gray-600">
                Yes, you must follow your vehicle manufacturer's recommended maintenance schedule. Keep records 
                of all maintenance performed, as this may be required for warranty claims.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">What should I do if I have a problem?</h3>
              <p className="text-gray-600">
                First, bring your vehicle to our shop if possible. If you're traveling, find the nearest ATRA 
                member shop. For immediate assistance, call us at (707) 584-7727.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATRA Network */}
      <section className="section section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Part of a Trusted Network
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ATRA (Automatic Transmission Rebuilders Association) is the world's largest trade organization 
                of transmission repair specialists, with over 2,000 members worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-rohnert-yellow mb-2">2,000+</div>
                <p className="text-lg">Member Shops</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-rohnert-yellow mb-2">50+</div>
                <p className="text-lg">Years of Excellence</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-rohnert-yellow mb-2">100%</div>
                <p className="text-lg">Coverage Guarantee</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="https://www.atra.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2"
              >
                Visit ATRA.com
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-padding">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for Worry-Free Repairs?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the confidence that comes with ATRA-backed warranty protection. 
            Schedule your service today and drive with peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-service" className="btn-primary">
              Book Your Service
            </Link>
            <a href="tel:7075847727" className="btn-secondary flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call (707) 584-7727
            </a>
          </div>
        </div>
      </section>
    </>
  )
}