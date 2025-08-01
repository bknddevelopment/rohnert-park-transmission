import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Lexus Repair & Service in Rohnert Park | Luxury Toyota Specialists',
  description: 'Professional Lexus repair and service in Rohnert Park, CA. Expert technicians specializing in RX, ES, NX, and all Lexus models. ASE certified with 2-year warranty.',
  keywords: 'Lexus repair Rohnert Park, Lexus service, RX350 repair, ES350 service, NX maintenance, Lexus mechanic near me',
  openGraph: {
    title: 'Lexus Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Lexus repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/lexus-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Infiniti', href: '/vehicles/infiniti-repair-rohnert-park' },
  { name: 'Acura', href: '/vehicles/acura-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Dashboard Cracking (IS, ES, RX)',
    solution: 'We provide dashboard repair solutions and can assist with warranty claims for known defects.'
  },
  {
    issue: 'Carbon Buildup in Direct Injection Engines',
    solution: 'Professional carbon cleaning services to restore engine performance and fuel economy.'
  },
  {
    issue: 'Water Pump Failure',
    solution: 'Complete cooling system service including water pump replacement to prevent overheating.'
  },
  {
    issue: 'Suspension Control Arm Bushings',
    solution: 'Suspension inspection and bushing replacement to eliminate clunking noises and improve ride quality.'
  },
  {
    issue: 'Hybrid Battery Issues',
    solution: 'Hybrid system diagnostics and battery reconditioning or replacement for hybrid models.'
  }
]

const services = [
  'Lexus transmission service and repair',
  'Hybrid system diagnostics and repair',
  'Engine diagnostics and maintenance',
  'Brake system service (including brake actuator)',
  'Air suspension repair (LS, LX models)',
  'Timing belt and water pump service',
  'Carbon cleaning for direct injection',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function LexusRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Lexus"
      description="Trusted Lexus repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we appreciate the refinement and reliability that Lexus brings to the luxury market. As Toyota's premium brand, Lexus vehicles combine legendary dependability with sophisticated technology and unmatched comfort. Our ASE-certified technicians have extensive experience servicing all Lexus models, from the efficient hybrid CT to the flagship LS sedan.",
        "We've invested in the specialized training and equipment necessary to properly service Lexus vehicles, including their complex hybrid systems. Many Lexus owners are surprised to learn that we can perform the same services as the dealership, including hybrid battery testing and replacement, at a fraction of the cost. Our expertise extends to all Lexus powertrains, from traditional V6 engines to the latest hybrid systems.",
        "What distinguishes our Lexus service is attention to detail that matches the brand's own standards. We use OEM-quality parts and follow Lexus service procedures to ensure your vehicle maintains its exceptional performance and reliability. Our 2-year/24,000-mile warranty exceeds what many dealerships offer, giving you confidence in our work.",
        "Whether you need routine maintenance or major repairs, we treat every Lexus with the care it deserves. We're particularly experienced with common Lexus issues like carbon buildup in direct injection engines, dashboard cracking in certain models, and suspension bushing wear. Our goal is to provide you with dealership-quality service at independent shop prices, keeping your Lexus in peak condition."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}