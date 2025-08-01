import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Saturn Repair & Service in Rohnert Park | Polymer Panel Specialists',
  description: 'Professional Saturn repair and service in Rohnert Park, CA. Expert technicians specializing in Ion, Vue, Aura, and all Saturn models. ASE certified with 2-year warranty.',
  keywords: 'Saturn repair Rohnert Park, Saturn service, Ion repair, Vue service, Aura maintenance, Saturn mechanic near me',
  openGraph: {
    title: 'Saturn Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Saturn repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/saturn-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chevrolet', href: '/vehicles/chevrolet-repair-rohnert-park' },
  { name: 'Pontiac', href: '/vehicles/pontiac-repair-rohnert-park' },
  { name: 'Oldsmobile', href: '/vehicles/oldsmobile-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Timing Chain Tensioner Failure',
    solution: 'Complete timing chain service with upgraded components to prevent engine damage.'
  },
  {
    issue: 'CVT Transmission Problems (Vue)',
    solution: 'CVT service or conversion to conventional automatic transmission for reliability.'
  },
  {
    issue: 'Ignition Switch Failure',
    solution: 'Ignition switch replacement to resolve starting and electrical issues.'
  },
  {
    issue: 'Power Steering Problems',
    solution: 'Electric power steering motor replacement or hydraulic system repair.'
  },
  {
    issue: 'Oil Consumption Issues',
    solution: 'Engine diagnostics and repairs to address excessive oil usage.'
  }
]

const services = [
  'Saturn transmission service and repair',
  'CVT transmission specialist service',
  'Engine diagnostics and repair',
  'Timing chain replacement',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Oil changes and fluid services',
  'Cooling system service',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Polymer body panel repair advice'
]

export default function SaturnRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Saturn"
      description="Trusted Saturn repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we continue to support Saturn owners with expert service for these unique vehicles. Saturn's 'different kind of car company' approach resulted in innovative features like polymer body panels and no-haggle pricing, attracting loyal owners who still drive these vehicles today. Our ASE-certified technicians have maintained their Saturn expertise to serve this dedicated community.",
        "We understand the unique aspects of Saturn vehicles, from their dent-resistant polymer panels to the CVT transmissions used in some Vue models. Our experience includes all Saturn models, from the original S-Series to the final Outlook SUVs. We've seen how well these vehicles can last with proper maintenance and are committed to helping owners maximize their Saturn's lifespan.",
        "One of the biggest challenges Saturn owners face is finding shops familiar with their vehicles' specific needs. We maintain access to Saturn-specific technical information and have relationships with suppliers who specialize in parts for orphaned GM brands. Whether you need routine maintenance or major repairs, we have the knowledge and resources to service your Saturn properly.",
        "We provide comprehensive Saturn service, with particular expertise in common issues like timing chain tensioner failures, CVT transmission problems, and ignition switch issues. We understand the importance of using the correct fluids and parts to maintain reliability. Our 2-year/24,000-mile warranty demonstrates our confidence in our work and commitment to keeping your Saturn on the road."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}