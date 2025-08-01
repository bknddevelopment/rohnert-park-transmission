import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Volkswagen Repair & Service in Rohnert Park | German Engineering Specialists',
  description: 'Professional Volkswagen repair and service in Rohnert Park, CA. Expert technicians specializing in Jetta, Passat, Tiguan, and all VW models. ASE certified with 2-year warranty.',
  keywords: 'Volkswagen repair Rohnert Park, VW service, Jetta repair, Golf service, Tiguan maintenance, VW mechanic near me',
  openGraph: {
    title: 'Volkswagen Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Volkswagen repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/volkswagen-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Audi', href: '/vehicles/audi-repair-rohnert-park' },
  { name: 'BMW', href: '/vehicles/bmw-repair-rohnert-park' },
  { name: 'Mercedes-Benz', href: '/vehicles/mercedes-benz-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Timing Chain Tensioner Failure',
    solution: 'Complete timing chain and tensioner replacement to prevent catastrophic engine damage.'
  },
  {
    issue: 'DSG Transmission Issues',
    solution: 'DSG service with proper fluid and filter changes to maintain smooth dual-clutch operation.'
  },
  {
    issue: 'Carbon Buildup (TSI Engines)',
    solution: 'Professional carbon cleaning service to restore performance and fuel economy.'
  },
  {
    issue: 'Water Pump Failure',
    solution: 'Water pump and thermostat replacement to prevent overheating and engine damage.'
  },
  {
    issue: 'Ignition Coil Failure',
    solution: 'Coil pack replacement with updated parts to eliminate misfires and rough running.'
  }
]

const services = [
  'Volkswagen transmission service and repair',
  'DSG dual-clutch transmission service',
  'TDI diesel engine service',
  'Timing chain and belt service',
  'Carbon cleaning for direct injection',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Oil changes with VW specifications',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function VolkswagenRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Volkswagen"
      description="Trusted Volkswagen repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand the appeal of Volkswagen's German engineering and fun-to-drive character. From the iconic Beetle to the practical Tiguan SUV, VW vehicles offer a unique blend of efficiency, performance, and European style. Our ASE-certified technicians have extensive training in Volkswagen's sophisticated systems and the specialized tools needed to service them properly.",
        "We've kept pace with Volkswagen's technological advances, including their TSI turbocharged engines, DSG dual-clutch transmissions, and TDI clean diesel technology. These advanced systems require specific knowledge and procedures to maintain properly. Our investment in VW-specific diagnostic equipment allows us to accurately diagnose issues and perform software updates when needed.",
        "Volkswagen owners often tell us they appreciate our thorough approach to maintenance. We understand that preventive care is crucial for German vehicles, particularly for known issues like carbon buildup in direct injection engines and timing chain tensioner problems. By addressing these issues proactively, we help you avoid costly repairs and maintain your VW's renowned driving dynamics.",
        "From routine oil changes to complex electrical diagnostics, we handle all aspects of Volkswagen service. We're particularly experienced with DSG transmission service, timing chain replacements, and resolving the various check engine light issues that can affect modern VWs. Our 2-year/24,000-mile warranty provides peace of mind, backed by our commitment to using proper VW-specification parts and fluids."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}