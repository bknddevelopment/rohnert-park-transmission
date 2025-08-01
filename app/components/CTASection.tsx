import Link from 'next/link'
import Image from 'next/image'
import { getImagePath } from '../utils/imagePath'

export function CTASection() {
  return (
    <>
      {/* Blog Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              INSIGHTS & TIPS FOR VEHICLE MAINTENANCE
            </h2>
            <h3 className="text-2xl text-gray-600">
              EXPERT ADVICE FROM OUR AUTOMOTIVE PROFESSIONALS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Blog Post 1 */}
            <article className="group">
              <Link href="/why-brake-and-rotor-repair-is-crucial-for-safe-driving">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={getImagePath("/images/shop/shop-classic-cars.jpg")}
                    alt="Brake and Rotor Repair"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-rohnert-red transition-colors">
                  WHY BRAKE AND ROTOR REPAIR IS CRUCIAL FOR SAFE DRIVING
                </h3>
                <p className="text-gray-600 mb-2">By Rohnert Park Transmission & Auto Repair • July 28, 2025</p>
                <p className="text-gray-700">
                  Expert brake & rotor repair at Rohnert Park Transmission & Auto Repair. Ensure safe driving in Rohnert Park, CA, with our trusted services. Visit us today!
                </p>
              </Link>
            </article>

            {/* Blog Post 2 */}
            <article className="group">
              <Link href="/the-importance-of-transmission-service-for-your-vehicle">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={getImagePath("/images/shop/shop-exterior.jpg")}
                    alt="Transmission Service"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-rohnert-red transition-colors">
                  THE IMPORTANCE OF TRANSMISSION SERVICE FOR YOUR VEHICLE
                </h3>
                <p className="text-gray-600 mb-2">By Rohnert Park Transmission & Auto Repair • June 30, 2025</p>
                <p className="text-gray-700">
                  Expert transmission service in Rohnert Park, CA at Rohnert Park Transmission & Auto Repair. Enhance vehicle performance today! Schedule an online appointment now.
                </p>
              </Link>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              SEE MORE OF OUR BLOG
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              EXPERT AUTO REPAIR SHOP NEARBY
            </h2>
            <h3 className="text-xl text-gray-600 uppercase">
              PROVIDING PROFESSIONAL CAR REPAIR AND MAINTENANCE IN ROHNERT PARK, CA AND THE SURROUNDING AREAS
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.4971947516704!2d-122.70368492346302!3d38.267906184005324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b1510c2ee1e9%3A0xd5f5f5f5f5f5f5f5!2s305%20Laguna%20Dr%2C%20Rohnert%20Park%2C%20CA%2094928!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Located in the heart of Rohnert Park, Rohnert Park Transmission & Auto Repair 
                proudly serves drivers throughout the North Bay and surrounding areas. Our shop is 
                easy to reach and trusted by local residents for expert transmission work and full-service 
                auto repair. Whether you drive a Toyota, BMW, Ford, or any other make, our 
                certified team delivers dependable care backed by industry-leading warranties.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Drivers from all across the region turn to us for high-quality repairs, honest service, 
                and a team that treats your vehicle like their own. With ASE and ATRA certifications, 
                plus our 2-year/24,000-mile warranty, we stand behind every job we do. If you're 
                nearby, stop in and see why we're the area's preferred choice for automotive service.
              </p>

              {/* Cities Served */}
              <h3 className="text-xl font-bold mb-4">AREAS WE SERVE</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
                <ul className="space-y-1">
                  <li>• Santa Rosa</li>
                  <li>• Petaluma</li>
                  <li>• Cotati</li>
                  <li>• Sebastopol</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Windsor</li>
                  <li>• Healdsburg</li>
                  <li>• Sonoma</li>
                  <li>• Kenwood</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Glen Ellen</li>
                  <li>• Graton</li>
                  <li>• Forestville</li>
                  <li>• Bodega Bay</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Penngrove</li>
                  <li>• Fulton</li>
                  <li>• Novato</li>
                  <li>• San Rafael</li>
                </ul>
              </div>

              <Link href="/shop-details" className="inline-block mt-8 btn-primary">
                GET DIRECTIONS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}