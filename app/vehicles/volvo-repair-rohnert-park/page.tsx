import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Volvo Repair & Service in Rohnert Park | Swedish Safety Specialists',
  description: 'Professional Volvo repair and service in Rohnert Park, CA. Expert technicians specializing in XC90, XC60, S60, and all Volvo models. ASE certified with 2-year warranty.',
  keywords: 'Volvo repair Rohnert Park, Volvo service, XC90 repair, XC60 service, S60 maintenance, Volvo mechanic near me',
  openGraph: {
    title: 'Volvo Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Volvo repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/volvo-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Saab', href: '/vehicles/saab-repair-rohnert-park' },
  { name: 'BMW', href: '/vehicles/bmw-repair-rohnert-park' },
  { name: 'Mercedes-Benz', href: '/vehicles/mercedes-benz-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'PCV System Failure',
    solution: 'Complete PCV system replacement to prevent oil leaks and engine damage.'
  },
  {
    issue: 'Transmission Valve Body Issues',
    solution: 'Transmission service with valve body repair or replacement for smooth shifting.'
  },
  {
    issue: 'Electronic Throttle Module Failure',
    solution: 'ETM replacement with updated unit to resolve reduced power mode issues.'
  },
  {
    issue: 'Angle Gear Sleeve Issues (AWD)',
    solution: 'Angle gear service or replacement to restore all-wheel drive function.'
  },
  {
    issue: 'Sunroof Drain Clogs',
    solution: 'Sunroof drain cleaning to prevent water damage to interior electronics.'
  }
]

const services = [
  'Volvo transmission service and repair',
  'All-wheel drive system service',
  'Engine diagnostics and repair',
  'PCV system replacement',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Oil changes with Volvo specifications',
  'Timing belt and water pump service',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function VolvoRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Volvo"
      description="Trusted Volvo repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand that Volvo ownership is about more than transportation—it's about safety, comfort, and Swedish engineering excellence. Volvo's commitment to safety innovation and durability has created vehicles that can last for decades with proper care. Our ASE-certified technicians have extensive experience with all Volvo models, from classic 240s to the latest XC90 SUVs.",
        "We've invested in Volvo-specific diagnostic equipment and training to properly service these sophisticated vehicles. Modern Volvos feature complex electronic systems, advanced safety features, and unique maintenance requirements. Our expertise includes everything from routine maintenance to complex repairs on Volvo's Drive-E engines and all-wheel drive systems.",
        "Volvo owners appreciate our attention to detail and understanding of their vehicles' specific needs. We know about common issues like PCV system failures that can cause expensive damage if not addressed promptly. Our proactive maintenance approach helps prevent these problems, and when repairs are needed, we use high-quality parts that meet Volvo's exacting standards.",
        "Whether you drive a classic Volvo wagon or a modern luxury SUV, we provide comprehensive service backed by our 2-year/24,000-mile warranty. We're particularly experienced with transmission valve body issues, angle gear problems in AWD models, and the various electronic modules that can fail. Our goal is to maintain your Volvo's legendary safety and reliability while providing an affordable alternative to dealership service."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}