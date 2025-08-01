import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Mini Cooper Repair & Service in Rohnert Park | British Auto Specialists',
  description: 'Professional Mini Cooper repair and service in Rohnert Park, CA. Expert technicians specializing in Cooper, Countryman, Clubman, and all Mini models. ASE certified with 2-year warranty.',
  keywords: 'Mini Cooper repair Rohnert Park, Mini service, Cooper S repair, Countryman service, Mini mechanic near me',
  openGraph: {
    title: 'Mini Cooper Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Mini Cooper repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/mini-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'BMW', href: '/vehicles/bmw-repair-rohnert-park' },
  { name: 'Volkswagen', href: '/vehicles/volkswagen-repair-rohnert-park' },
  { name: 'Fiat', href: '/vehicles/fiat-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Timing Chain Tensioner Failure',
    solution: 'Complete timing chain service with upgraded tensioner to prevent engine damage.'
  },
  {
    issue: 'Carbon Buildup (N14 Engines)',
    solution: 'Professional walnut blasting service to remove carbon deposits and restore performance.'
  },
  {
    issue: 'Clutch Failure (Manual Trans)',
    solution: 'High-quality clutch replacement with proper break-in procedure for longevity.'
  },
  {
    issue: 'Thermostat Housing Leaks',
    solution: 'Thermostat housing replacement with upgraded components to prevent future leaks.'
  },
  {
    issue: 'Power Steering Pump Failure',
    solution: 'Electric power steering pump replacement and system calibration.'
  }
]

const services = [
  'Mini Cooper transmission service and repair',
  'Timing chain and tensioner replacement',
  'Engine diagnostics and repair',
  'Carbon cleaning services',
  'Clutch replacement and service',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Oil changes and fluid services',
  'Turbocharger service (Cooper S)',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function MiniRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Mini"
      description="Trusted Mini Cooper repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand the unique charm and driving experience that Mini Cooper offers. These fun, nimble vehicles pack sophisticated BMW technology into a compact package, requiring specialized knowledge to service properly. Our ASE-certified technicians have extensive experience with all Mini models, from the classic Cooper to the versatile Countryman.",
        "Modern Minis share many components with BMW, but they have their own unique quirks and common issues. We've invested in Mini-specific diagnostic equipment and training to properly service these vehicles. Whether you're dealing with the infamous timing chain rattle or need routine maintenance, our team has the expertise to keep your Mini performing at its best.",
        "Mini owners often tell us they appreciate our thorough approach to service. We understand that preventive maintenance is crucial for these vehicles, particularly for known issues like carbon buildup in direct injection engines and timing chain problems. By addressing these issues proactively, we help you avoid costly repairs and keep your Mini reliable.",
        "From basic oil changes to complex engine repairs, we provide comprehensive Mini service at prices well below dealership rates. We're particularly experienced with common Mini problems like timing chain tensioner failures, thermostat housing leaks, and clutch issues in manual transmission models. Our 2-year/24,000-mile warranty gives you peace of mind that repairs are done right, letting you focus on enjoying the go-kart handling that makes Mini special."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}