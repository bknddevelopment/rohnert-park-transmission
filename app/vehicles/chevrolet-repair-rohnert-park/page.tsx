import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Chevrolet Repair & Service in Rohnert Park | Chevy Specialists Since 1997',
  description: 'Professional Chevrolet repair and service in Rohnert Park, CA. Expert technicians for Silverado, Tahoe, Malibu, Corvette and all Chevy models. 2-year warranty.',
  keywords: 'Chevrolet repair Rohnert Park, Chevy service, Silverado repair, Tahoe service, Corvette specialist, GM repair',
  openGraph: {
    title: 'Chevrolet Repair Experts | Rohnert Park Transmission',
    description: 'Trusted Chevy service and repair. ASE certified, family-owned. Call (707) 584-7727.',
    images: ['/images/chevrolet-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'GMC', href: '/vehicles/gmc-repair-rohnert-park' },
  { name: 'Cadillac', href: '/vehicles/cadillac-repair-rohnert-park' },
  { name: 'Ford', href: '/vehicles/ford-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Active Fuel Management (AFM) Issues',
    solution: 'AFM delete or lifter replacement to resolve oil consumption and lifter failure in V8 engines.'
  },
  {
    issue: 'Transmission Shudder in 8-Speed Automatics',
    solution: 'Fluid flush with updated specification fluid and torque converter replacement if needed.'
  },
  {
    issue: 'AC Condenser Leaks',
    solution: 'Replacement with updated condensers and complete AC system service.'
  },
  {
    issue: 'Power Steering Problems',
    solution: 'Electric power steering motor replacement and calibration for affected models.'
  },
  {
    issue: 'Fuel Pump Failures',
    solution: 'High-pressure fuel pump replacement with updated modules to prevent stalling.'
  }
]

const services = [
  'Chevrolet transmission repair and service',
  'Engine diagnostics and repair',
  'Duramax diesel service',
  'Brake system maintenance',
  'Suspension and steering repair',
  '4WD system service',
  'Electrical diagnostics',
  'MyLink infotainment repair',
  'Oil changes and maintenance',
  'Exhaust and emissions repair',
  'Performance upgrades',
  'Fleet vehicle maintenance'
]

export default function ChevroletRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Chevrolet"
      description="Your local Chevrolet experts serving Rohnert Park with honest, reliable service for all Chevy models."
      longDescription={[
        "Chevrolet has been an American icon for over a century, and at Rohnert Park Transmission & Auto Repair, we've been keeping Chevys running strong in Sonoma County for over 25 years. From hardworking Silverado trucks to fuel-efficient Cruze sedans, sporty Camaros to family-friendly Suburbans, we service the entire Chevrolet lineup with expertise and care.",
        "Our ASE-certified technicians understand the diversity of the Chevrolet brand. We're equally comfortable working on a classic small-block V8 as we are diagnosing issues with the latest turbocharged engines or hybrid systems. We've invested in GM-specific diagnostic equipment that allows us to access all the computer modules in your Chevrolet, perform software updates, and make the precise adjustments necessary for optimal performance.",
        "We've seen how Chevrolet vehicles serve our community - from contractors relying on their Silverados for work to families depending on their Traverses for daily transportation. That's why we take a comprehensive approach to Chevrolet service, addressing not just the immediate concern but looking at the overall health of your vehicle. We'll help you stay ahead of potential issues with preventive maintenance tailored to your specific model and driving conditions.",
        "Common Chevrolet issues we regularly address include Active Fuel Management problems in V8 engines, transmission concerns in newer 8-speed automatics, and various electrical gremlins that can affect modern vehicles. Our experience with these recurring issues means we can often diagnose and resolve problems more quickly than general repair shops, saving you both time and money. All our work is backed by our 2-year/24,000-mile warranty for your peace of mind."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}