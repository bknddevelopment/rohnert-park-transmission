import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircle, 
  Clock, 
  CreditCard, 
  DollarSign, 
  ExternalLink, 
  FileText, 
  Shield, 
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react'

export default function FinancingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <CreditCard className="w-8 h-8 text-rohnert-yellow" />
              <span className="text-rohnert-yellow font-semibold text-lg">Flexible Payment Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Repair Now, Pay Later
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Get the auto repairs you need today with flexible financing options that work for your budget
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center gap-3">
                <Zap className="w-6 h-6 text-rohnert-yellow" />
                <span className="text-lg">Instant Approvals</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-6 h-6 text-rohnert-yellow" />
                <span className="text-lg">No Hidden Fees</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-6 h-6 text-rohnert-yellow" />
                <span className="text-lg">90-Day Interest Free*</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Financing Option
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with trusted lenders to offer multiple financing solutions that fit your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* EasyPay Finance */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">EasyPay Finance</h3>
                <p className="text-green-100">Quick approvals for all credit types</p>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  EasyPay Finance makes it simple to get the auto repairs you need—regardless of your credit history. 
                  With flexible payment plans and fast approvals, it's an ideal option for customers who need immediate service.
                </p>
                
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Benefits:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Approvals for good, challenged, or no credit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Quick application with instant decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">90-day interest-free payment option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Flexible terms for manageable payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No down payment required in most cases</span>
                  </li>
                </ul>
                
                <a 
                  href="https://www.easypayfinance.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Apply Today
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Synchrony */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Synchrony Car Care™</h3>
                <p className="text-blue-100">Nationwide acceptance & reliability</p>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Our Synchrony Car Care™ credit card gives you the freedom to handle unexpected repairs and regular 
                  maintenance without the upfront burden. Accepted nationwide for all your automotive needs.
                </p>
                
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Benefits:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">$199 minimum purchase required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No payment required upfront</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Convenient monthly payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No interest if paid within 6 or 12 months*</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Accepted at locations nationwide</span>
                  </li>
                </ul>
                
                <a 
                  href="https://www.mysynchrony.com/mmc/CR224310908" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Apply Today
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Affirm */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Affirm Financing</h3>
                <p className="text-purple-100">Transparent, flexible payments</p>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  We've partnered with TekMetric to offer Affirm financing—giving you transparent, flexible payment 
                  options at the time of your estimate. Know exactly what you'll pay with no surprises.
                </p>
                
                <h4 className="font-semibold text-lg mb-4 text-gray-900">Benefits:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Prequalify without affecting credit score</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clear, fixed monthly payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Choose from multiple payment terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No late fees or hidden charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integrated into your service quote</span>
                  </li>
                </ul>
                
                <a 
                  href="https://www.affirm.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Apply Today
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 text-center mt-8">
            *Interest will be charged to your account from the purchase date if the purchase balance is not paid in full 
            within the promotional period or if you make a late payment. Subject to credit approval.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Financing Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Getting approved for auto repair financing is quick and easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-rohnert-yellow text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Lender</h3>
              <p className="text-gray-600">
                Select from our three trusted financing partners based on your needs and preferences
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rohnert-yellow text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply Online</h3>
              <p className="text-gray-600">
                Complete a quick application online and receive an instant decision in most cases
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rohnert-yellow text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Repairs Done</h3>
              <p className="text-gray-600">
                Once approved, we'll complete your repairs and you'll pay according to your chosen terms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Financing Questions?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Find answers to common questions about our financing options
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">Which financing option is best for me?</h3>
              <p className="text-gray-600">
                Each option has unique benefits. EasyPay is great for all credit types with 90-day interest-free options. 
                Synchrony offers nationwide acceptance and promotional periods. Affirm provides transparent terms with no hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">Can I apply if I have bad credit?</h3>
              <p className="text-gray-600">
                Yes! EasyPay Finance specializes in approvals for challenged credit. All our financing partners consider 
                various credit situations, so we encourage you to apply regardless of your credit history.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">How quickly can I get approved?</h3>
              <p className="text-gray-600">
                Most applications receive instant decisions. You can often apply and get approved within minutes, 
                allowing us to start your repairs the same day.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">Is there a minimum purchase amount?</h3>
              <p className="text-gray-600">
                Requirements vary by lender. Synchrony requires a $199 minimum purchase, while EasyPay and Affirm 
                may have different minimums. Contact us for specific details about your repair needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let finances keep you from getting the auto repairs you need. 
            Apply for financing or schedule your service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-service" className="btn-accent">
              Book Your Service
            </Link>
            <a href="tel:7075847727" className="btn-secondary">
              Call (707) 584-7727
            </a>
          </div>
        </div>
      </section>
    </>
  )
}