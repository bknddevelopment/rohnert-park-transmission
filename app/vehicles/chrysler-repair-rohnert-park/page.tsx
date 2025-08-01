import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Chrysler Repair & Service in Rohnert Park | 300, Pacifica & Town & Country Experts',
  description: 'Expert Chrysler repair and service in Rohnert Park, CA. Specializing in 300, Pacifica, Town & Country and all Chrysler models. ASE certified technicians.',
  keywords: 'Chrysler repair Rohnert Park, Chrysler service, 300 repair, Pacifica service, Town Country repair, Chrysler mechanic',
  openGraph: {
    title: 'Chrysler Repair Specialists | Rohnert Park Transmission',
    description: 'Professional Chrysler service and repair. Family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/chrysler-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Dodge', href: '/vehicles/dodge-repair-rohnert-park' },
  { name: 'Jeep', href: '/vehicles/jeep-repair-rohnert-park' },
  { name: 'Ram', href: '/vehicles/ram-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'TIPM (Integrated Power Module) Failures',
    solution: 'TIPM repair or replacement with updated modules to resolve electrical issues.'
  },
  {
    issue: 'Transmission Problems in Minivans',
    solution: 'Complete transmission rebuild with upgraded components for improved durability.'
  },
  {
    issue: 'Pentastar V6 Cylinder Head Issues',
    solution: 'Cylinder head replacement and cooling system service to prevent overheating.'
  },
  {
    issue: 'Uconnect System Freezing',
    solution: 'Software updates and module replacements to restore infotainment functionality.'
  },
  {
    issue: 'Suspension Clunking Noises',
    solution: 'Control arm bushings and sway bar link replacement for improved ride quality.'
  }
]

const services = [
  'Chrysler transmission repair and rebuild',
  'Engine diagnostics and repair',
  'TIPM diagnosis and repair',
  'Brake system service',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Uconnect system updates',
  'Air conditioning service',
  'Oil changes and maintenance',
  'Exhaust system repair',
  'Stow \'n Go seat repairs',
  'Pre-purchase inspections'
]

export default function ChryslerRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Chrysler"
      description="Trusted Chrysler repair specialists in Rohnert Park with expertise in all Chrysler models and systems."
      longDescription={[
        "Chrysler vehicles have a unique place in American automotive history, known for innovation and family-friendly features. At Rohnert Park Transmission & Auto Repair, we've been servicing Chrysler vehicles for over 25 years, from the practical Town & Country minivans that have transported countless families to the stylish 300 sedans that bring luxury to the masses. Our expertise covers the entire Chrysler lineup.",
        "We understand that Chrysler owners choose their vehicles for specific reasons - whether it's the versatility of a Pacifica with its Stow 'n Go seating or the bold styling and performance of a 300. Our ASE-certified technicians are familiar with the unique features and common issues that affect Chrysler vehicles. We have the specialized diagnostic equipment needed to properly service Chrysler's electronic systems, including the TIPM modules that control many vehicle functions.",
        "Over the years, we've become experts at addressing common Chrysler problems. The Totally Integrated Power Module (TIPM) issues that plague many models are something we see regularly, and we've developed efficient diagnostic and repair procedures. We're also very experienced with Chrysler's transmission systems, particularly the units used in their minivans, which can develop problems if not properly maintained.",
        "Our approach to Chrysler service goes beyond just fixing problems - we help you prevent them. Regular maintenance is crucial for Chrysler vehicles, and we'll work with you to develop a service schedule that fits your driving habits and budget. Whether you need routine maintenance, major repairs, or anything in between, we provide honest recommendations and quality work backed by our 2-year/24,000-mile warranty. Our goal is to keep your Chrysler reliable and safe for you and your family."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}