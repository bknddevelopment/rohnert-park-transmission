import { Shield, Award, Wifi, DollarSign, Users, Clock, MapPin, Car, CreditCard, Coffee } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Certified ASE Technicians',
    description: 'Our ASE-certified technicians have the expertise to handle all your automotive needs.'
  },
  {
    icon: Award,
    title: 'ATRA Member Shop',
    description: 'As an ATRA member, we follow the highest industry standards for transmission repair.'
  },
  {
    icon: Wifi,
    title: 'RepairPal Certified',
    description: 'RepairPal certification ensures fair pricing and quality service you can trust.'
  },
  {
    icon: DollarSign,
    title: 'Student Discounts',
    description: 'Supporting Sonoma State students with special discounts on auto services.'
  },
  {
    icon: CreditCard,
    title: 'Flexible Financing',
    description: 'Flexible financing options to help manage your auto repair expenses.'
  },
  {
    icon: Car,
    title: 'Free Shuttle Service',
    description: 'Free shuttle service within the local area while your vehicle is being serviced.'
  },
  {
    icon: Coffee,
    title: 'Comfortable Waiting Area',
    description: 'Comfortable waiting area with complimentary Wi-Fi and refreshments.'
  },
  {
    icon: Users,
    title: 'Family-Owned Since 1997',
    description: 'Three generations of trusted service to the Rohnert Park community.'
  }
]

export function FeaturesSection() {
  return (
    <section className="section section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Choose Rohnert Park Transmission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            With over two decades of dedicated service, our family-owned shop combines expertise 
            with a customer-first approach. Our certified technicians, state-of-the-art equipment, 
            and commitment to quality make us the trusted choice for auto repairs in Rohnert Park.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-rohnert-red mb-3 md:mb-4" />
              <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}