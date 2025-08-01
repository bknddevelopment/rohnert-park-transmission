import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Ford Repair & Service in Rohnert Park | F-150, Mustang & Explorer Experts',
  description: 'Professional Ford repair and service in Rohnert Park, CA. Specializing in F-150, Mustang, Explorer, Focus and all Ford models. ASE certified since 1997.',
  keywords: 'Ford repair Rohnert Park, Ford service, F-150 repair, Mustang service, Explorer maintenance, Ford mechanic near me',
  openGraph: {
    title: 'Ford Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Ford service and repair. Truck and performance specialists. Call (707) 584-7727.',
    images: ['/images/ford-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chevrolet', href: '/vehicles/chevrolet-repair-rohnert-park' },
  { name: 'Lincoln', href: '/vehicles/lincoln-repair-rohnert-park' },
  { name: 'GMC', href: '/vehicles/gmc-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'EcoBoost Turbo Carbon Buildup',
    solution: 'Walnut blasting service to remove carbon deposits and restore engine performance.'
  },
  {
    issue: 'F-150 Transmission Shudder',
    solution: 'Software updates and fluid changes with Mercon ULV to eliminate shuddering.'
  },
  {
    issue: 'Spark Plug Issues (5.4L Triton)',
    solution: 'Specialized extraction techniques for broken plugs and thread repair if needed.'
  },
  {
    issue: 'MyFord Touch/SYNC Problems',
    solution: 'Software updates and module replacements to restore infotainment functionality.'
  },
  {
    issue: 'Door Latch Failures',
    solution: 'Updated latch assemblies to prevent doors from opening unexpectedly.'
  }
]

const services = [
  'Ford transmission service and repair',
  'EcoBoost engine service',
  'PowerStroke diesel maintenance',
  'F-150 specialized service',
  'Mustang performance upgrades',
  'Brake system maintenance',
  '4WD system repair',
  'Electrical diagnostics',
  'SYNC system updates',
  'Fleet maintenance programs',
  'Exhaust system service',
  'Pre-purchase inspections'
]

export default function FordRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Ford"
      description="Your trusted Ford specialists in Rohnert Park, from tough trucks to performance cars."
      longDescription={[
        "Ford has been putting America on wheels for over a century, and at Rohnert Park Transmission & Auto Repair, we've been keeping Ford vehicles running strong for over 25 years. From the best-selling F-150 pickup to the iconic Mustang, from family-friendly Explorers to efficient Focus models, we have the expertise to service the entire Ford lineup. Our technicians understand what 'Built Ford Tough' really means.",
        "We've watched Ford evolve from traditional V8 engines to advanced EcoBoost turbocharged powerplants, and we've evolved with them. Our shop is equipped with Ford-specific diagnostic tools including IDS (Integrated Diagnostic Software) that allows us to perform the same level of diagnostics and programming as Ford dealerships. This capability is essential for properly servicing modern Ford vehicles with their interconnected systems.",
        "Our extensive experience with Ford vehicles means we're familiar with common issues across different models and years. Whether it's carbon buildup in EcoBoost engines, transmission concerns in F-150s, or the infamous spark plug issues in older 5.4L engines, we've developed efficient solutions. We also specialize in maintaining Ford's various turbocharged engines, ensuring they deliver the power and efficiency Ford intended.",
        "We understand that Ford owners depend on their vehicles for work and play. That's why we offer comprehensive services from routine maintenance to major repairs. Our fleet service programs help local businesses keep their Ford work vehicles on the road, while our performance services help Mustang enthusiasts get the most from their cars. All our work is backed by our 2-year/24,000-mile warranty, giving you confidence in every repair."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}