import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Pontiac Repair & Service in Rohnert Park | Performance GM Specialists',
  description: 'Professional Pontiac repair and service in Rohnert Park, CA. Expert technicians specializing in G6, Grand Prix, Vibe, and all Pontiac models. ASE certified with 2-year warranty.',
  keywords: 'Pontiac repair Rohnert Park, Pontiac service, G6 repair, Grand Prix service, GTO maintenance, Pontiac mechanic near me',
  openGraph: {
    title: 'Pontiac Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Pontiac repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/pontiac-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chevrolet', href: '/vehicles/chevrolet-repair-rohnert-park' },
  { name: 'Buick', href: '/vehicles/buick-repair-rohnert-park' },
  { name: 'Oldsmobile', href: '/vehicles/oldsmobile-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Power Steering Whine',
    solution: 'Power steering pump replacement and system flush to eliminate noise and improve steering.'
  },
  {
    issue: 'Ignition Switch Failure',
    solution: 'Ignition switch replacement to resolve starting issues and electrical problems.'
  },
  {
    issue: 'Intake Manifold Gasket Leaks',
    solution: 'Complete intake gasket replacement with improved gaskets to prevent coolant leaks.'
  },
  {
    issue: 'Transmission Shift Solenoid Issues',
    solution: 'Transmission service with solenoid replacement for smooth, reliable shifting.'
  },
  {
    issue: 'Hub Bearing Assembly Failure',
    solution: 'Complete hub assembly replacement to eliminate noise and ensure safe handling.'
  }
]

const services = [
  'Pontiac transmission service and repair',
  'Engine diagnostics and repair',
  'Performance engine service',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Oil changes and fluid services',
  'Cooling system service',
  'Exhaust system repair',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Classic Pontiac maintenance'
]

export default function PontiacRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Pontiac"
      description="Trusted Pontiac repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we keep the Pontiac driving excitement alive by providing expert service for these discontinued GM performance vehicles. Although Pontiac ended production in 2010, these cars remain popular for their sporty styling and performance heritage. Our ASE-certified technicians have extensive experience with all Pontiac models, from the practical Vibe to the muscle car GTO.",
        "We understand what makes Pontiac special - the brand's focus on performance and driving excitement. Whether you own a supercharged Grand Prix GTP or a fuel-efficient G6, we have the knowledge to maintain its unique character. Our experience includes working on classic Pontiacs as well as the final generation of vehicles, giving us comprehensive understanding of the brand's evolution.",
        "Many Pontiac owners face challenges finding shops familiar with their vehicles as they age. We maintain relationships with suppliers who specialize in GM performance parts, ensuring we can source quality components for your Pontiac. From routine maintenance to performance upgrades, we help you keep your Pontiac performing the way it was designed to.",
        "We handle all aspects of Pontiac service, with particular expertise in common issues like intake manifold gasket failures, ignition switch problems, and transmission solenoid issues. Our diagnostic equipment can communicate with Pontiac's onboard computers, allowing us to quickly identify and resolve problems. With our 2-year/24,000-mile warranty, you can trust that your Pontiac is in good hands."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}