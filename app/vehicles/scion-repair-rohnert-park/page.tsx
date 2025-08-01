import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Scion Repair & Service in Rohnert Park | Toyota Youth Brand Specialists',
  description: 'Professional Scion repair and service in Rohnert Park, CA. Expert technicians specializing in tC, xB, FR-S, and all Scion models. ASE certified with 2-year warranty.',
  keywords: 'Scion repair Rohnert Park, Scion service, tC repair, xB service, FR-S maintenance, Scion mechanic near me',
  openGraph: {
    title: 'Scion Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Scion repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/scion-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Subaru', href: '/vehicles/subaru-repair-rohnert-park' },
  { name: 'Mazda', href: '/vehicles/mazda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Excessive Oil Consumption (2AZ-FE)',
    solution: 'Piston ring replacement or engine rebuild to resolve oil burning issues.'
  },
  {
    issue: 'Manual Transmission Gear Grinding',
    solution: 'Clutch replacement and transmission service to restore smooth shifting.'
  },
  {
    issue: 'Water Pump Failure',
    solution: 'Water pump replacement with cooling system service to prevent overheating.'
  },
  {
    issue: 'Lift Gate Strut Failure (xB)',
    solution: 'Rear hatch strut replacement to restore proper lift gate operation.'
  },
  {
    issue: 'Dashboard Rattle',
    solution: 'Interior trim adjustment and securing to eliminate annoying rattles.'
  }
]

const services = [
  'Scion transmission service and repair',
  'Toyota engine diagnostics and repair',
  'Performance modifications (FR-S/tC)',
  'Brake system service and upgrades',
  'Suspension and steering repair',
  'Clutch replacement service',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Air conditioning service',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function ScionRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Scion"
      description="Trusted Scion repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we continue to provide expert service for Scion vehicles, Toyota's youth-oriented brand that was discontinued in 2016. These vehicles combined Toyota reliability with unique styling and features that attracted a dedicated following. Our ASE-certified technicians understand that Scion owners value their vehicles' individuality and we help maintain that special character.",
        "Since Scions are essentially Toyota vehicles with unique styling, we have access to all the technical resources and parts needed to service them properly. From the boxy xB to the sporty FR-S (now the Toyota 86), we understand each model's specific requirements. Our experience includes both routine maintenance and performance modifications that many Scion owners seek.",
        "We've become a trusted resource for Scion owners who want to keep their vehicles running well as they age. We understand common issues like oil consumption in 2AZ-FE engines and can provide cost-effective solutions. Whether you need major engine work or simple maintenance, we treat your Scion with the same care we give to any Toyota product.",
        "Our comprehensive Scion service includes everything from oil changes to engine rebuilds. We're particularly experienced with manual transmission service, which many Scion models featured, and can help with performance upgrades for FR-S owners. With our 2-year/24,000-mile warranty and Toyota expertise, you can trust that your Scion is in good hands."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}