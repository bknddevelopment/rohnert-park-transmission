import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Subaru Repair & Service in Rohnert Park | All-Wheel Drive Specialists',
  description: 'Professional Subaru repair and service in Rohnert Park, CA. Expert technicians specializing in Outback, Crosstrek, Impreza, and all Subaru models. ASE certified with 2-year warranty.',
  keywords: 'Subaru repair Rohnert Park, Subaru service, Outback repair, Crosstrek service, WRX maintenance, Subaru mechanic near me',
  openGraph: {
    title: 'Subaru Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Subaru repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/subaru-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Honda', href: '/vehicles/honda-repair-rohnert-park' },
  { name: 'Mazda', href: '/vehicles/mazda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Head Gasket Failure',
    solution: 'Complete head gasket replacement with upgraded multi-layer steel gaskets for long-term reliability.'
  },
  {
    issue: 'CVT Transmission Issues',
    solution: 'CVT fluid service and software updates to extend transmission life and improve performance.'
  },
  {
    issue: 'Wheel Bearing Failure',
    solution: 'Hub assembly replacement to eliminate noise and ensure safe all-wheel drive operation.'
  },
  {
    issue: 'Oil Consumption',
    solution: 'Piston ring replacement or short block replacement for excessive oil burning.'
  },
  {
    issue: 'AC Compressor Failure',
    solution: 'Air conditioning system diagnosis and compressor replacement to restore cooling.'
  }
]

const services = [
  'Subaru transmission service and repair',
  'Head gasket replacement specialist',
  'All-wheel drive system service',
  'Boxer engine diagnostics and repair',
  'CVT transmission maintenance',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Timing belt and water pump service',
  'Oil changes with proper specifications',
  'Electrical system diagnostics',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function SubaruRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Subaru"
      description="Trusted Subaru repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand why Subaru owners are so passionate about their vehicles. The combination of standard all-wheel drive, boxer engines, and rugged reliability makes Subaru unique in the automotive world. Our ASE-certified technicians have extensive experience with all Subaru models, from the versatile Outback to the performance-oriented WRX STI.",
        "We've developed specialized expertise in Subaru's unique systems, particularly their boxer engines and symmetrical all-wheel drive. We understand the common issues that affect certain model years, such as head gasket failures in naturally aspirated 2.5L engines. Our proactive approach includes using upgraded parts and procedures to prevent these issues from recurring.",
        "Many Subaru owners choose us because we combine dealer-level expertise with independent shop values. We use Subaru-approved fluids and parts, understanding that these vehicles have specific requirements for items like CVT fluid and coolant additives. Our comprehensive 2-year/24,000-mile warranty often exceeds what dealerships offer, giving you peace of mind on every repair.",
        "Whether you need routine maintenance or major repairs, we handle all aspects of Subaru service. We're particularly experienced with head gasket replacements, CVT transmission service, and the various oil consumption issues that can affect boxer engines. Our goal is to keep your Subaru adventure-ready while providing honest, transparent service at fair prices."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}