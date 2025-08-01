import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Infiniti Repair & Service in Rohnert Park | Expert Nissan/Infiniti Specialists',
  description: 'Professional Infiniti repair and service in Rohnert Park, CA. Expert technicians specializing in Q50, QX60, QX80, and all Infiniti models. ASE certified with 2-year warranty.',
  keywords: 'Infiniti repair Rohnert Park, Infiniti service, Q50 repair, QX60 service, QX80 maintenance, Infiniti mechanic near me',
  openGraph: {
    title: 'Infiniti Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Infiniti repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/infiniti-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Nissan', href: '/vehicles/nissan-repair-rohnert-park' },
  { name: 'Lexus', href: '/vehicles/lexus-repair-rohnert-park' },
  { name: 'Acura', href: '/vehicles/acura-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'CVT Transmission Issues',
    solution: 'We specialize in Infiniti CVT repairs and replacements, addressing common slipping and overheating problems.'
  },
  {
    issue: 'VQ Engine Oil Consumption',
    solution: 'Our technicians perform valve stem seal replacements and piston ring repairs for excessive oil consumption.'
  },
  {
    issue: 'Electronic Steering Lock Failure',
    solution: 'We diagnose and repair steering lock module issues that can prevent your Infiniti from starting.'
  },
  {
    issue: 'InTouch System Malfunctions',
    solution: 'Software updates and module replacements to fix infotainment and navigation system glitches.'
  },
  {
    issue: 'Brake Master Cylinder Leaks',
    solution: 'Complete brake system inspection and master cylinder replacement to ensure safe braking.'
  }
]

const services = [
  'Infiniti CVT transmission service and repair',
  'VQ engine diagnostics and repair',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Air conditioning service and repair',
  'Timing chain replacement',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance',
  'Turbocharger service (Q50/Q60)'
]

export default function InfinitiRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Infiniti"
      description="Trusted Infiniti repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand the luxury and performance that Infiniti vehicles deliver. As Nissan's premium brand, Infiniti combines Japanese reliability with sophisticated technology and powerful engines. Our ASE-certified technicians have extensive experience working on all Infiniti models, from the sporty Q50 sedan to the luxurious QX80 SUV.",
        "We've developed specialized expertise in Infiniti's unique systems, particularly their CVT transmissions and powerful VQ-series engines. Many Infiniti owners come to us for CVT transmission issues, which require specific knowledge and diagnostic equipment to repair properly. Our team stays current with Infiniti's evolving technology, including their InTouch infotainment systems and advanced driver assistance features.",
        "What sets us apart is our commitment to providing dealer-quality service at independent shop prices. We use OEM-quality parts that meet Infiniti's strict specifications, ensuring your vehicle maintains its performance and reliability. Our comprehensive 2-year/24,000-mile warranty demonstrates our confidence in our work and gives you peace of mind.",
        "From routine maintenance to complex repairs, we handle every aspect of Infiniti service. We're particularly experienced with common Infiniti issues like CVT transmission problems, oil consumption in VQ engines, and electronic steering lock failures. Our goal is to keep your Infiniti performing at its best while saving you money compared to dealership service."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}