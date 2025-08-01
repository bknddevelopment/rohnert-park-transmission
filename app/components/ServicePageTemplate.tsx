import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, MapPin } from 'lucide-react'

interface ServicePageTemplateProps {
  title: string
  description: string
  longDescription: string[]
  benefits: string[]
  image?: string
  relatedServices?: { name: string; href: string }[]
}

export function ServicePageTemplate({
  title,
  description,
  longDescription,
  benefits,
  image = '/images/services-hero.jpg',
  relatedServices = []
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-black">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 container h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title.toUpperCase()}
            </h1>
            <p className="text-xl text-white mb-6">{description}</p>
            <Link href="/book-service" className="btn-primary">
              SCHEDULE SERVICE
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Professional {title} in Rohnert Park, CA
              </h2>
              {longDescription.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-6">
                  {paragraph}
                </p>
              ))}

              {/* Benefits */}
              <div className="bg-gray-50 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our {title}?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-rohnert-yellow mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-rohnert-red text-white p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Schedule Your {title}?
                </h3>
                <p className="mb-6">
                  Don't wait until small issues become major problems. Our expert technicians 
                  are ready to help keep your vehicle running smoothly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book-service" className="btn-primary text-center">
                    BOOK ONLINE
                  </Link>
                  <a href="tel:7075847727" className="btn-secondary text-center">
                    CALL NOW
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a href="tel:7075847727" className="flex items-center text-gray-700 hover:text-rohnert-red">
                    <Phone className="w-5 h-5 mr-2" />
                    (707) 584-7727
                  </a>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                    <span>305 Laguna Dr<br />Rohnert Park, CA 94928</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <Clock className="w-5 h-5 mr-2 mt-0.5" />
                    <div>
                      <p>Mon-Thu: 7:30am-5pm</p>
                      <p>Fri: 7am-4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.href}
                          className="text-rohnert-red hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Certifications */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Certifications</h3>
                <div className="space-y-4">
                  <Image
                    src="/images/ase-certified.png"
                    alt="ASE Certified"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <Image
                    src="/images/atra.png"
                    alt="ATRA Member"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}