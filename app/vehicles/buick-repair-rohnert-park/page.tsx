import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Buick Repair & Service in Rohnert Park | Luxury GM Specialists',
  description: 'Professional Buick repair and service in Rohnert Park, CA. Expert technicians specializing in Enclave, Encore, LaCrosse, and all Buick models. ASE certified with 2-year warranty.',
  keywords: 'Buick repair Rohnert Park, Buick service, Enclave repair, Encore service, LaCrosse maintenance, Buick mechanic near me',
  openGraph: {
    title: 'Buick Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Buick repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/buick-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chevrolet', href: '/vehicles/chevrolet-repair-rohnert-park' },
  { name: 'GMC', href: '/vehicles/gmc-repair-rohnert-park' },
  { name: 'Cadillac', href: '/vehicles/cadillac-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Transmission Shift Issues',
    solution: 'Transmission service with updated software and fluid changes to improve shift quality.'
  },
  {
    issue: 'Timing Chain Stretch',
    solution: 'Complete timing chain replacement to prevent engine damage and restore quiet operation.'
  },
  {
    issue: 'StabiliTrak System Problems',
    solution: 'Electronic stability control diagnosis and repair to restore safety systems.'
  },
  {
    issue: 'Power Steering Pump Noise',
    solution: 'Power steering pump replacement and system flush to eliminate whining sounds.'
  },
  {
    issue: 'Interior Electronic Malfunctions',
    solution: 'Diagnosis and repair of infotainment, climate control, and other electronic systems.'
  }
]

const services = [
  'Buick transmission service and repair',
  'Engine diagnostics and repair',
  'QuietTuning system maintenance',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Oil changes and fluid services',
  'Cooling system service',
  'Air conditioning repair',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function BuickRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Buick"
      description="Trusted Buick repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we appreciate Buick's tradition of providing quiet, comfortable luxury at an accessible price point. Modern Buicks combine sophisticated technology with traditional American comfort, creating vehicles that appeal to drivers who value refinement. Our ASE-certified technicians have extensive experience with all Buick models, from the compact Encore to the spacious Enclave SUV.",
        "We understand that Buick owners expect a premium ownership experience without premium prices. That's exactly what we deliver with our service. Our technicians are trained in Buick's QuietTuning technology and understand the specific maintenance requirements that keep these vehicles running smoothly and quietly. We use high-quality parts and fluids that meet GM's specifications.",
        "Many Buick owners choose us because we provide dealer-level expertise with more personalized service. We're familiar with common Buick issues like transmission programming updates, timing chain maintenance, and the various electronic systems that require proper diagnosis. Our investment in GM diagnostic equipment ensures we can properly service your Buick's sophisticated systems.",
        "From routine oil changes to complex engine repairs, we handle all aspects of Buick service. We're particularly experienced with the direct injection engines used in many models, understanding their maintenance needs to prevent carbon buildup. Our 2-year/24,000-mile warranty demonstrates our confidence in our work and commitment to keeping your Buick performing at its best."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}