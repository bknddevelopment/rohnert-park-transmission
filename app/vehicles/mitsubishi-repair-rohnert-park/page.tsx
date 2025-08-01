import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Mitsubishi Repair & Service in Rohnert Park | Japanese Auto Specialists',
  description: 'Professional Mitsubishi repair and service in Rohnert Park, CA. Expert technicians specializing in Outlander, Eclipse Cross, Mirage, and all Mitsubishi models. ASE certified with 2-year warranty.',
  keywords: 'Mitsubishi repair Rohnert Park, Mitsubishi service, Outlander repair, Eclipse service, Lancer Evolution maintenance, Mitsubishi mechanic near me',
  openGraph: {
    title: 'Mitsubishi Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Mitsubishi repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/mitsubishi-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Nissan', href: '/vehicles/nissan-repair-rohnert-park' },
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Mazda', href: '/vehicles/mazda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'CVT Transmission Problems',
    solution: 'CVT fluid service and cooler upgrades to extend transmission life and prevent failure.'
  },
  {
    issue: 'Clear Coat Peeling',
    solution: 'While primarily a body issue, we can recommend trusted partners for paint restoration.'
  },
  {
    issue: 'AC Compressor Failure',
    solution: 'Complete AC system diagnosis and compressor replacement to restore cooling.'
  },
  {
    issue: 'Catalytic Converter Issues',
    solution: 'Exhaust system diagnosis and catalytic converter replacement to pass emissions.'
  },
  {
    issue: 'Suspension Bushing Wear',
    solution: 'Comprehensive suspension inspection and bushing replacement for improved handling.'
  }
]

const services = [
  'Mitsubishi transmission service and repair',
  'CVT transmission specialist service',
  'Engine diagnostics and repair',
  'All-wheel drive system service',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Air conditioning service',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function MitsubishiRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Mitsubishi"
      description="Trusted Mitsubishi repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we have extensive experience servicing Mitsubishi vehicles, from practical daily drivers to performance legends like the Lancer Evolution. Mitsubishi has a rich history of innovation, from their advanced all-wheel-drive systems to their efficient CVT transmissions. Our ASE-certified technicians understand these technologies and have the tools to service them properly.",
        "We've seen Mitsubishi's evolution over the years, from the rugged Montero SUVs to today's efficient Outlander crossovers. Each generation brings new technology, and we've kept pace with factory training and equipment. Whether you're maintaining a classic 3000GT or servicing a modern Outlander Sport, we have the expertise to handle your Mitsubishi's needs.",
        "Many Mitsubishi owners choose us for our expertise with CVT transmissions, which are common in newer models. These transmissions require specific maintenance procedures and fluids to ensure longevity. We understand the importance of proper CVT service and can help you avoid the costly failures that can occur with neglected maintenance.",
        "From routine oil changes to complex all-wheel-drive repairs, we provide comprehensive Mitsubishi service. We're particularly experienced with common issues like CVT transmission problems, air conditioning failures, and suspension wear. Our 2-year/24,000-mile warranty provides peace of mind, and our honest approach to service helps you make informed decisions about your Mitsubishi's maintenance."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}