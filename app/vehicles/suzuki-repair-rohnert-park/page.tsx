import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Suzuki Repair & Service in Rohnert Park | Compact Car & SUV Specialists',
  description: 'Professional Suzuki repair and service in Rohnert Park, CA. Expert technicians specializing in Grand Vitara, SX4, Kizashi, and all Suzuki models. ASE certified with 2-year warranty.',
  keywords: 'Suzuki repair Rohnert Park, Suzuki service, Grand Vitara repair, SX4 service, Vitara maintenance, Suzuki mechanic near me',
  openGraph: {
    title: 'Suzuki Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Suzuki repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/suzuki-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Nissan', href: '/vehicles/nissan-repair-rohnert-park' },
  { name: 'Mitsubishi', href: '/vehicles/mitsubishi-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Timing Chain Tensioner Issues',
    solution: 'Timing chain and tensioner replacement to prevent engine damage and restore quiet operation.'
  },
  {
    issue: 'Transfer Case Problems (4WD)',
    solution: 'Transfer case service or rebuild to restore proper four-wheel drive function.'
  },
  {
    issue: 'AC Evaporator Leaks',
    solution: 'Air conditioning system repair including evaporator replacement to fix refrigerant leaks.'
  },
  {
    issue: 'Suspension Clunking',
    solution: 'Control arm bushing and ball joint replacement to eliminate noise and improve handling.'
  },
  {
    issue: 'Catalytic Converter Failure',
    solution: 'Exhaust system diagnosis and catalytic converter replacement for emissions compliance.'
  }
]

const services = [
  'Suzuki transmission service and repair',
  'Four-wheel drive system service',
  'Engine diagnostics and repair',
  'Timing chain service',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Air conditioning service',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function SuzukiRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Suzuki"
      description="Trusted Suzuki repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we continue to provide expert service for Suzuki vehicles, even though the brand left the US market in 2012. Suzuki built reliable, efficient vehicles that many owners continue to drive and maintain. Our ASE-certified technicians have maintained their expertise in Suzuki service, understanding these vehicles' unique characteristics and common needs.",
        "Suzuki vehicles, from the compact Swift to the capable Grand Vitara, were known for their reliability and value. We understand the engineering that made these vehicles special, including their efficient engines and capable 4WD systems. Our experience spans the entire Suzuki lineup, including less common models like the Kizashi sedan and the SX4 crossover.",
        "One challenge Suzuki owners face is finding shops with proper knowledge and parts access. We maintain relationships with suppliers who specialize in Suzuki parts, ensuring we can source quality components for repairs. Whether you need routine maintenance or major repairs, we treat your Suzuki with the expertise it deserves, helping you maximize its lifespan.",
        "We provide comprehensive Suzuki service, with particular expertise in timing chain issues, transfer case problems in 4WD models, and the various maintenance needs of aging vehicles. Our diagnostic equipment can properly interface with Suzuki systems, allowing accurate diagnosis of issues. With our 2-year/24,000-mile warranty, you can trust that your Suzuki is in capable hands."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}