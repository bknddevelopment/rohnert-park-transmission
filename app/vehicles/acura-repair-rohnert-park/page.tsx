import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Acura Repair & Service in Rohnert Park | Expert Honda/Acura Specialists',
  description: 'Professional Acura repair and service in Rohnert Park, CA. Expert technicians specializing in MDX, RDX, TLX, and all Acura models. ASE certified with 2-year warranty.',
  keywords: 'Acura repair Rohnert Park, Acura service, MDX repair, RDX service, TLX maintenance, Acura mechanic near me',
  openGraph: {
    title: 'Acura Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Acura repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/acura-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Honda', href: '/vehicles/honda-repair-rohnert-park' },
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Lexus', href: '/vehicles/lexus-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Transmission Shuddering in MDX/RDX',
    solution: 'We specialize in Acura transmission repairs, including torque converter issues common in V6 models.'
  },
  {
    issue: 'SH-AWD System Problems',
    solution: 'Our technicians are trained in diagnosing and repairing Acura\'s Super Handling All-Wheel Drive systems.'
  },
  {
    issue: 'Oil Consumption in V6 Engines',
    solution: 'We perform piston ring replacements and valve adjustments to resolve excessive oil consumption.'
  },
  {
    issue: 'Infotainment System Glitches',
    solution: 'Software updates and module replacements to fix touchscreen and navigation issues.'
  },
  {
    issue: 'Vibration at Highway Speeds',
    solution: 'Precision wheel balancing and suspension component inspection to eliminate vibrations.'
  }
]

const services = [
  'Acura transmission repair and rebuild',
  'SH-AWD system diagnosis and repair',
  'Engine diagnostics and repair',
  'Brake system service (including ceramic pads)',
  'Suspension and steering repair',
  'Timing belt and water pump replacement',
  'Air conditioning service and repair',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function AcuraRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Acura"
      description="Trusted Acura repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand the precision engineering that goes into every Acura vehicle. As Honda's luxury division, Acura vehicles require specialized knowledge and expertise to maintain their performance and reliability. Our ASE-certified technicians have extensive experience working on all Acura models, from the sporty Integra to the luxurious MDX SUV.",
        "We've seen firsthand how Acura vehicles have evolved over the years, and we've kept pace with their advanced technology. Whether you drive an older Legend or a brand-new TLX with the latest SH-AWD system, our team has the training and diagnostic equipment to service your vehicle properly. We understand the unique requirements of Acura's VTEC engines, precision all-wheel-drive systems, and sophisticated electronics.",
        "Many Acura owners in Rohnert Park choose us because we offer dealer-level expertise without the dealer prices. We use OEM-quality parts that meet or exceed Acura's specifications, ensuring your vehicle maintains its performance and reliability. Our comprehensive 2-year/24,000-mile warranty gives you peace of mind that the repair is done right the first time.",
        "From routine maintenance like oil changes and tire rotations to complex repairs like transmission rebuilds and engine overhauls, we handle every aspect of Acura service. We're particularly experienced with common Acura issues, including transmission problems in V6 models, SH-AWD system repairs, and addressing the oil consumption issues that affect some Acura engines. Our goal is to keep your Acura running like new while saving you money compared to dealership prices."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}