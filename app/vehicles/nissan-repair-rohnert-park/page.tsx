import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Nissan Repair & Service in Rohnert Park | CVT Transmission Specialists',
  description: 'Professional Nissan repair and service in Rohnert Park, CA. Expert technicians specializing in Altima, Rogue, Pathfinder, and all Nissan models. ASE certified with 2-year warranty.',
  keywords: 'Nissan repair Rohnert Park, Nissan service, Altima repair, Rogue service, Pathfinder maintenance, Nissan mechanic near me',
  openGraph: {
    title: 'Nissan Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Nissan repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/nissan-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Infiniti', href: '/vehicles/infiniti-repair-rohnert-park' },
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Honda', href: '/vehicles/honda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'CVT Transmission Failure',
    solution: 'Expert CVT repair and replacement with enhanced cooling to prevent future failures.'
  },
  {
    issue: 'Timing Chain Stretch (VQ Engines)',
    solution: 'Complete timing chain service with guides and tensioners to prevent engine damage.'
  },
  {
    issue: 'AC Compressor Failure',
    solution: 'AC system diagnosis and compressor replacement to restore cooling performance.'
  },
  {
    issue: 'Catalytic Converter Problems',
    solution: 'Exhaust system service and catalytic converter replacement for emissions compliance.'
  },
  {
    issue: 'Brake Judder and Premature Wear',
    solution: 'High-quality brake pad and rotor replacement with proper break-in procedure.'
  }
]

const services = [
  'Nissan CVT transmission specialist service',
  'Engine diagnostics and repair',
  'Timing chain replacement service',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Air conditioning service and repair',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance',
  'Exhaust system repair'
]

export default function NissanRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Nissan"
      description="Trusted Nissan repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we've become the go-to shop for Nissan owners throughout Sonoma County, particularly for CVT transmission service. Nissan pioneered the widespread use of Continuously Variable Transmissions, and while they offer smooth acceleration and fuel efficiency, they require specialized knowledge to maintain and repair. Our technicians have extensive training in CVT service and repair.",
        "We service all Nissan models, from the efficient Versa to the powerful Titan pickup. Our expertise extends beyond transmissions to include all aspects of Nissan repair. We understand the common issues that affect different models, such as timing chain problems in VQ engines and AC compressor failures. This knowledge allows us to provide accurate diagnostics and effective repairs.",
        "Many Nissan owners appreciate our preventive approach to CVT maintenance. Regular fluid changes with the correct Nissan-specified fluid can dramatically extend CVT life. We also offer transmission cooler upgrades for vehicles that tow or operate in severe conditions. Our goal is to help you avoid the expensive CVT replacements that can occur with neglected maintenance.",
        "Whether you need routine maintenance or major repairs, we provide honest, professional service for your Nissan. We're particularly experienced with CVT transmission issues, timing chain replacements, and the various sensor and emissions-related problems that can trigger check engine lights. Our 2-year/24,000-mile warranty ensures you can drive with confidence after any repair."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}