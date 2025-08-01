import { GraduationCap, Award, Users, Car } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'STUDENT-FRIENDLY SERVICES',
    description: 'We proudly support Sonoma State students with convenient, reliable, and affordable auto care. Show your student ID to receive a 10% discount—helping you stay safe on the road without breaking your budget.'
  },
  {
    icon: Award,
    title: 'CERTIFIED EXPERTISE',
    description: 'Our ASE-certified technicians possess the knowledge and skills to handle a wide array of automotive issues. Continuous training ensures we stay current with industry advancements, providing you with top-tier service every time.'
  },
  {
    icon: Users,
    title: 'CUSTOMER-CENTRIC APPROACH',
    description: 'We prioritize your satisfaction by offering transparent communication, fair pricing, and personalized solutions. Our goal is to make your auto repair experience as seamless and stress-free as possible.'
  },
  {
    icon: Car,
    title: 'COMPREHENSIVE SERVICES',
    description: 'From routine maintenance to complex repairs, we offer a full spectrum of automotive services. Our facility is equipped to handle various makes and models, ensuring your vehicle receives the care it deserves.'
  }
]

export function BrandsSection() {
  return (
    <section className="section section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            DEDICATED TO EXCEPTIONAL AUTOMOTIVE CARE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon Container */}
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-rohnert-yellow transform rotate-45 scale-110" />
                <div className="relative bg-white p-4 transform">
                  <feature.icon className="w-12 h-12 text-black" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 uppercase">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery Section - Removed as we have a dedicated ShopGallery component */}
      </div>
    </section>
  )
}