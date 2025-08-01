import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Toyota Repair & Service in Rohnert Park | Reliability Specialists',
  description: 'Professional Toyota repair and service in Rohnert Park, CA. Expert technicians specializing in Camry, Corolla, RAV4, Tacoma, and all Toyota models. ASE certified with 2-year warranty.',
  keywords: 'Toyota repair Rohnert Park, Toyota service, Camry repair, RAV4 service, Tacoma maintenance, Toyota mechanic near me',
  openGraph: {
    title: 'Toyota Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Toyota repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/toyota-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Lexus', href: '/vehicles/lexus-repair-rohnert-park' },
  { name: 'Honda', href: '/vehicles/honda-repair-rohnert-park' },
  { name: 'Mazda', href: '/vehicles/mazda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Oil Consumption (2AZ-FE Engines)',
    solution: 'Piston ring replacement or engine rebuild to resolve excessive oil burning in affected models.'
  },
  {
    issue: 'Water Pump Failure',
    solution: 'Water pump replacement with cooling system service to prevent overheating damage.'
  },
  {
    issue: 'Transmission Shudder',
    solution: 'Transmission fluid service with proper Toyota fluid to eliminate shuddering and harsh shifts.'
  },
  {
    issue: 'Dashboard Cracking',
    solution: 'Dashboard repair solutions and warranty claim assistance for known defects.'
  },
  {
    issue: 'Frame Rust (Tacoma/Tundra)',
    solution: 'Frame inspection and treatment recommendations to address corrosion issues.'
  }
]

const services = [
  'Toyota transmission service and repair',
  'Hybrid system diagnostics (Prius, Camry)',
  'Engine diagnostics and repair',
  'Timing belt and chain service',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Air conditioning service',
  'Oil changes with Toyota specifications',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function ToyotaRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Toyota"
      description="Trusted Toyota repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we appreciate why Toyota has earned its reputation for reliability and value. These vehicles are engineered to last, and with proper maintenance, they often exceed 200,000 miles. Our ASE-certified technicians have extensive experience with all Toyota models, from the efficient Corolla to the rugged 4Runner, including hybrid vehicles like the pioneering Prius.",
        "We've invested in Toyota-specific training and diagnostic equipment to properly service these vehicles. Our expertise includes both traditional gasoline engines and Toyota's innovative hybrid systems. We understand the importance of using proper fluids and parts, particularly for components like the transmission and hybrid battery cooling systems that require specific Toyota formulations.",
        "Toyota owners choose us because we provide dealer-quality service without the dealer prices. We follow Toyota's maintenance schedules and use OEM-quality parts to maintain your warranty and ensure reliability. Our technicians stay current with Toyota's technical bulletins and recalls, ensuring we can identify and address known issues before they become major problems.",
        "Whether you drive a commuter Camry or a trail-ready Tacoma, we provide comprehensive Toyota service. We're particularly experienced with common Toyota issues like oil consumption in certain 4-cylinder engines, water pump failures, and the frame rust issues affecting some truck models. Our 2-year/24,000-mile warranty exceeds Toyota's standard warranty, giving you extra protection on every repair."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}