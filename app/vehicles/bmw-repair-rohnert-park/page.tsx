import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'BMW Repair & Service in Rohnert Park | Ultimate Driving Machine Experts',
  description: 'Professional BMW repair and service in Rohnert Park, CA. Specialists in 3 Series, 5 Series, X3, X5 and all BMW models. Factory-trained technicians.',
  keywords: 'BMW repair Rohnert Park, BMW service, BMW mechanic, 3 Series repair, X5 service, German car specialist',
  openGraph: {
    title: 'BMW Repair Specialists | Rohnert Park Transmission',
    description: 'Expert BMW service and repair. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/bmw-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Audi', href: '/vehicles/audi-repair-rohnert-park' },
  { name: 'Mercedes-Benz', href: '/vehicles/mercedes-benz-repair-rohnert-park' },
  { name: 'Mini', href: '/vehicles/mini-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Valve Cover and Oil Filter Housing Leaks',
    solution: 'Complete resealing with updated gaskets and proper torque specifications to prevent future leaks.'
  },
  {
    issue: 'Electric Water Pump Failures',
    solution: 'Replacement with upgraded pumps and cooling system service to prevent overheating.'
  },
  {
    issue: 'High-Pressure Fuel Pump (HPFP) Issues',
    solution: 'Diagnosis and replacement of HPFP in N54/N55 engines with updated components.'
  },
  {
    issue: 'Adaptive Headlight Malfunctions',
    solution: 'Stepper motor replacement and coding to restore adaptive lighting functionality.'
  },
  {
    issue: 'Rough Idle and Misfires',
    solution: 'Ignition coil and spark plug replacement, plus carbon cleaning for direct injection engines.'
  }
]

const services = [
  'BMW transmission service and repair',
  'xDrive all-wheel-drive maintenance',
  'Engine diagnostics and repair',
  'Brake service (including M Performance brakes)',
  'Suspension and steering repair',
  'Cooling system overhauls',
  'Electrical system diagnostics',
  'iDrive updates and repairs',
  'Oil service and inspections',
  'Emission system repairs',
  'Performance tuning and coding',
  'Pre-purchase inspections'
]

export default function BMWRepairPage() {
  return (
    <VehiclePageTemplate
      brand="BMW"
      description="Rohnert Park's premier BMW service center with factory-level expertise and equipment."
      longDescription={[
        "BMW has built its reputation on delivering the 'Ultimate Driving Machine,' and at Rohnert Park Transmission & Auto Repair, we're committed to maintaining that driving experience. Our ASE-certified technicians have extensive training on BMW's unique engineering, from the precision of their inline-6 engines to the sophistication of their xDrive all-wheel-drive systems. We understand what makes BMWs special and how to keep them performing at their best.",
        "Over our 25+ years serving Rohnert Park and Sonoma County, we've worked on every generation of BMW, from classic E30 3 Series to the latest G-series models with their advanced driver assistance systems. Our shop is equipped with BMW-specific diagnostic tools that allow us to perform the same coding, programming, and adaptations as the dealership. This capability is essential for properly servicing modern BMWs with their interconnected electronic systems.",
        "We recognize that BMW owners are passionate about their vehicles and expect a certain level of service. That's why we maintain a clean, professional facility and use only high-quality parts that meet BMW's exacting standards. Whether it's genuine BMW parts or OEM-equivalent alternatives, we ensure every component we install maintains your vehicle's performance and reliability. Our work is backed by a comprehensive 2-year/24,000-mile warranty.",
        "Common BMW issues we regularly address include oil leaks from valve covers and oil filter housings, cooling system problems including electric water pump failures, and carbon buildup in direct injection engines. We also specialize in maintaining BMW's complex suspension systems, from standard setups to adaptive M suspension. Our goal is to provide dealer-quality service at a more reasonable price, helping you enjoy your Ultimate Driving Machine for years to come."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}