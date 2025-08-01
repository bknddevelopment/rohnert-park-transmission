import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '../utils/imagePath'

export function AboutSection() {
  return (
    <section className="section section-padding bg-white">
      <div className="container">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Story
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Family-owned and operated since 1997, we've built our reputation on trust,
            expertise, and exceptional customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <Image
              src={getImagePath("/images/team/team-office.jpg")}
              alt="Rohnert Park Transmission Team"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-4 md:space-y-6 px-4 lg:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Delivering Quality Auto Repairs Since 1997
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Founded in 1997, Rohnert Park Transmission & Auto Repair has been a cornerstone of 
              automotive excellence in Sonoma County. Our journey began with a commitment to providing 
              honest, reliable, and high-quality services to our community. Over the years, we've built 
              lasting relationships with our customers, grounded in trust and exceptional workmanship.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Our team of certified professionals brings a wealth of experience to every repair and 
              maintenance task. We stay abreast of the latest automotive technologies to ensure your 
              vehicle receives the best care possible. Whether it's a routine check-up or a complex 
              transmission rebuild, we approach each job with precision and dedication.
            </p>
            <div className="pt-4 md:pt-6">
              <Link href="/book-service" className="inline-block btn-primary">
                Book Your Service
              </Link>
            </div>
          </div>
        </div>

        {/* Certification Logos - Commented out until logos are available */}
        {/* <div className="mt-16 flex justify-center items-center gap-8 flex-wrap opacity-60 grayscale">
          <Image src={getImagePath("/images/ase-certified.png")} alt="ASE Certified" width={120} height={120} />
          <Image src={getImagePath("/images/repairpal.png")} alt="RepairPal Certified" width={120} height={120} />
          <Image src="/images/atra.png" alt="ATRA Member" width={120} height={120} />
          <Image src="/images/ascca.png" alt="ASCCA Member" width={120} height={120} />
        </div> */}
      </div>
    </section>
  )
}