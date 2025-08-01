import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Mercury Repair & Service in Rohnert Park | Classic Ford-Mercury Specialists',
  description: 'Professional Mercury repair and service in Rohnert Park, CA. Expert technicians specializing in Grand Marquis, Mariner, Milan, and all Mercury models. ASE certified with 2-year warranty.',
  keywords: 'Mercury repair Rohnert Park, Mercury service, Grand Marquis repair, Mariner service, Milan maintenance, Mercury mechanic near me',
  openGraph: {
    title: 'Mercury Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Mercury repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/mercury-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Ford', href: '/vehicles/ford-repair-rohnert-park' },
  { name: 'Lincoln', href: '/vehicles/lincoln-repair-rohnert-park' },
  { name: 'Oldsmobile', href: '/vehicles/oldsmobile-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Intake Manifold Coolant Leaks',
    solution: 'Complete intake manifold replacement with upgraded gaskets to prevent future leaks.'
  },
  {
    issue: 'Transmission Slipping (4R70W)',
    solution: 'Expert transmission rebuild with upgraded components for improved durability.'
  },
  {
    issue: 'Blend Door Actuator Failure',
    solution: 'Climate control repair to restore proper heating and cooling function.'
  },
  {
    issue: 'Power Window Regulator Issues',
    solution: 'Window regulator and motor replacement to fix slow or non-functioning windows.'
  },
  {
    issue: 'Ignition Coil Failure',
    solution: 'Coil pack replacement and spark plug service to eliminate misfires.'
  }
]

const services = [
  'Mercury transmission service and repair',
  'Engine diagnostics and repair',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Climate control system repair',
  'Electrical system diagnostics',
  'Oil changes and fluid services',
  'Cooling system service',
  'Exhaust system repair',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Classic Mercury restoration support'
]

export default function MercuryRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Mercury"
      description="Trusted Mercury repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we continue to provide expert service for Mercury vehicles, even though the brand was discontinued in 2011. Many Mercury owners have maintained their vehicles well, and these cars can provide reliable transportation for years to come with proper care. Our ASE-certified technicians have decades of experience working on Mercury vehicles, from the classic Cougar to the final Grand Marquis models.",
        "Mercury vehicles share many components with their Ford counterparts, but they often have unique features and trim levels that require specific knowledge. Our team understands these differences and has access to the parts and technical information needed to service Mercury vehicles properly. Whether you drive a sporty Milan or a comfortable Grand Marquis, we have the expertise to keep it running smoothly.",
        "We see many Mercury owners who are looking for an alternative to dealership service, especially as these vehicles age. We provide the same quality of service you'd expect from a dealer, but with more personalized attention and fair pricing. Our 2-year/24,000-mile warranty gives you confidence that repairs are done right, helping you get many more miles from your Mercury.",
        "From routine maintenance to major repairs, we handle all aspects of Mercury service. We're particularly experienced with common Mercury issues like intake manifold leaks on V8 engines, transmission problems in older models, and the various electrical issues that can develop over time. Our goal is to help you maintain your Mercury affordably so you can continue enjoying this piece of American automotive history."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}