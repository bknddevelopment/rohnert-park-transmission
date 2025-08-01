import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Oldsmobile Repair & Service in Rohnert Park | Classic GM Specialists',
  description: 'Professional Oldsmobile repair and service in Rohnert Park, CA. Expert technicians specializing in Alero, Aurora, Intrigue, and all Oldsmobile models. ASE certified with 2-year warranty.',
  keywords: 'Oldsmobile repair Rohnert Park, Oldsmobile service, Alero repair, Aurora service, Intrigue maintenance, Oldsmobile mechanic near me',
  openGraph: {
    title: 'Oldsmobile Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Oldsmobile repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/oldsmobile-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Buick', href: '/vehicles/buick-repair-rohnert-park' },
  { name: 'Pontiac', href: '/vehicles/pontiac-repair-rohnert-park' },
  { name: 'Chevrolet', href: '/vehicles/chevrolet-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Intake Manifold Gasket Failure',
    solution: 'Complete intake manifold gasket replacement with upgraded materials to prevent future leaks.'
  },
  {
    issue: 'Transmission Pressure Control Solenoid',
    solution: 'Transmission service with solenoid replacement to restore smooth shifting.'
  },
  {
    issue: 'Power Steering Pump Leaks',
    solution: 'Power steering pump replacement and system flush to eliminate leaks and noise.'
  },
  {
    issue: 'Ignition Control Module Failure',
    solution: 'Ignition system diagnosis and module replacement to resolve starting issues.'
  },
  {
    issue: 'Wheel Bearing Wear',
    solution: 'Hub assembly replacement to eliminate noise and ensure safe operation.'
  }
]

const services = [
  'Oldsmobile transmission service and repair',
  'Engine diagnostics and repair',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Cooling system service',
  'Electrical system diagnostics',
  'Oil changes and fluid services',
  'Exhaust system repair',
  'Climate control repair',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Classic Oldsmobile maintenance'
]

export default function OldsmobileRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Oldsmobile"
      description="Trusted Oldsmobile repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we continue to provide expert service for Oldsmobile vehicles, keeping these pieces of American automotive history on the road. Although Oldsmobile ceased production in 2004, many of these vehicles remain reliable transportation with proper care. Our ASE-certified technicians have decades of experience with Oldsmobile vehicles, from the sporty Alero to the luxurious Aurora.",
        "We understand the common issues that affect Oldsmobile vehicles as they age, particularly the intake manifold gasket problems that plague many GM V6 engines of that era. Our team has performed countless intake gasket replacements and knows how to do the job right with upgraded gaskets that last. We also specialize in the transmission issues common to these vehicles, helping owners avoid costly replacements.",
        "Finding a shop that understands older GM vehicles can be challenging, but our experience with Oldsmobile goes back to when these cars were new. We have access to parts suppliers who specialize in discontinued GM brands, ensuring we can source quality components for your repair. Whether you need routine maintenance or major repairs, we treat your Oldsmobile with the respect it deserves.",
        "From basic services to complex diagnostics, we handle all aspects of Oldsmobile repair. We're particularly experienced with the 3800 V6 engine, 4T65E transmission problems, and the various electrical issues that can develop in these vehicles. Our 2-year/24,000-mile warranty gives you confidence in our repairs, helping you keep your Oldsmobile running reliably for years to come."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}