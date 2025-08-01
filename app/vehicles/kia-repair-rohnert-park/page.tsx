import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Kia Repair & Service in Rohnert Park | Expert Korean Auto Specialists',
  description: 'Professional Kia repair and service in Rohnert Park, CA. Expert technicians specializing in Telluride, Sorento, Sportage, and all Kia models. ASE certified with 2-year warranty.',
  keywords: 'Kia repair Rohnert Park, Kia service, Telluride repair, Sorento service, Sportage maintenance, Kia mechanic near me',
  openGraph: {
    title: 'Kia Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Kia repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/kia-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Hyundai', href: '/vehicles/hyundai-repair-rohnert-park' },
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Honda', href: '/vehicles/honda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Engine Bearing Failure (Theta II)',
    solution: 'We perform engine rebuilds and replacements for Theta II engine failures, including warranty assistance.'
  },
  {
    issue: 'Dual Clutch Transmission Issues',
    solution: 'Expert DCT repair and clutch replacement to resolve shifting problems and shuddering.'
  },
  {
    issue: 'Engine Knock and Oil Consumption',
    solution: 'Comprehensive engine diagnostics and repairs for knocking sounds and excessive oil use.'
  },
  {
    issue: 'Steering Coupler Problems',
    solution: 'Steering system inspection and coupler replacement to eliminate clunking noises.'
  },
  {
    issue: 'Air Conditioning Compressor Failure',
    solution: 'AC system diagnosis and compressor replacement to restore cooling performance.'
  }
]

const services = [
  'Kia engine diagnostics and repair',
  'Transmission service and repair',
  'Dual clutch transmission service',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Timing chain replacement',
  'Air conditioning service and repair',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function KiaRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Kia"
      description="Trusted Kia repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we've watched Kia transform from a budget brand into a manufacturer of stylish, feature-rich vehicles that rival established competitors. Our ASE-certified technicians have kept pace with Kia's rapid evolution, developing expertise in everything from their efficient four-cylinder engines to their sophisticated dual-clutch transmissions.",
        "We understand the unique service needs of Kia vehicles, including the well-documented issues with certain engine models. Our team is experienced in handling Theta II engine problems, including bearing failures and excessive oil consumption. We work with customers to navigate warranty claims when applicable, and provide expert repairs when vehicles are out of warranty.",
        "What makes us the preferred choice for Kia owners in Rohnert Park is our combination of technical expertise and honest service. We use high-quality parts that meet or exceed Kia's specifications, ensuring your vehicle maintains its reliability and value. Our comprehensive 2-year/24,000-mile warranty provides peace of mind that's often better than what you'd receive at a dealership.",
        "From basic maintenance to major repairs, we service all Kia models with the same attention to detail. We're particularly experienced with common Kia issues like dual-clutch transmission problems, engine knock issues, and steering coupler failures. Our goal is to keep your Kia running smoothly and reliably while saving you money on maintenance and repairs."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}