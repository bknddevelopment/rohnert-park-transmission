import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Mercedes-Benz Repair & Service in Rohnert Park | German Auto Specialists',
  description: 'Professional Mercedes-Benz repair and service in Rohnert Park, CA. Expert technicians specializing in C-Class, E-Class, GLE, and all Mercedes models. ASE certified with 2-year warranty.',
  keywords: 'Mercedes-Benz repair Rohnert Park, Mercedes service, C-Class repair, E-Class service, GLE maintenance, Mercedes mechanic near me',
  openGraph: {
    title: 'Mercedes-Benz Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Mercedes-Benz repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/mercedes-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'BMW', href: '/vehicles/bmw-repair-rohnert-park' },
  { name: 'Audi', href: '/vehicles/audi-repair-rohnert-park' },
  { name: 'Volkswagen', href: '/vehicles/volkswagen-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Airmatic Suspension Failure',
    solution: 'Complete Airmatic diagnosis and repair, including compressor and strut replacement.'
  },
  {
    issue: 'Balance Shaft and Timing Chain Issues',
    solution: 'Expert timing component replacement for M272 and M273 engines to prevent catastrophic failure.'
  },
  {
    issue: 'Oil Leaks from Various Seals',
    solution: 'Comprehensive leak diagnosis and repair, including valve covers and oil cooler seals.'
  },
  {
    issue: 'SBC Brake System Problems',
    solution: 'Sensotronic brake control repair and conventional brake system conversions.'
  },
  {
    issue: 'Electronic Component Failures',
    solution: 'Advanced diagnostics for SAM modules, instrument clusters, and other electronic systems.'
  }
]

const services = [
  'Mercedes-Benz transmission service and repair',
  'Airmatic suspension diagnosis and repair',
  'Engine diagnostics and repair',
  'Brake system service (including SBC)',
  'Electronic systems diagnostics',
  'Oil service and fluid changes',
  'Timing chain and component replacement',
  'Air conditioning service',
  'Star diagnostic system service',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function MercedesBenzRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Mercedes-Benz"
      description="Trusted Mercedes-Benz repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand that Mercedes-Benz ownership is about more than transportation—it's about experiencing engineering excellence. These sophisticated German vehicles require specialized knowledge and equipment to maintain properly. Our ASE-certified technicians have extensive training in Mercedes-Benz systems and access to the diagnostic tools necessary to service these complex vehicles.",
        "We've invested in Mercedes-specific diagnostic equipment and stay current with the brand's evolving technology. From the complex Airmatic suspension systems to the intricate electronic networks that control modern Mercedes vehicles, our team has the expertise to diagnose and repair issues correctly the first time. We understand the importance of using proper procedures and high-quality parts to maintain your Mercedes' performance and reliability.",
        "What sets us apart from other shops is our combination of dealer-level expertise and independent shop values. We provide transparent pricing and honest recommendations, helping you understand what your Mercedes needs and why. Our 2-year/24,000-mile warranty demonstrates our confidence in our work and commitment to your satisfaction.",
        "Whether you drive a classic W123 diesel or the latest S-Class, we provide comprehensive Mercedes-Benz service. We're particularly experienced with common issues like Airmatic suspension failures, balance shaft problems in V6 and V8 engines, and the various electronic gremlins that can affect these sophisticated vehicles. Our goal is to keep your Mercedes performing at its peak while providing an alternative to expensive dealership service."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}