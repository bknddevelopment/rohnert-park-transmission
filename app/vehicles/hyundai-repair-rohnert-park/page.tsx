import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Hyundai Repair & Service in Rohnert Park | Elantra, Sonata & Tucson Experts',
  description: 'Expert Hyundai repair and service in Rohnert Park, CA. Specializing in Elantra, Sonata, Tucson, Santa Fe and all Hyundai models. Quality Korean car service.',
  keywords: 'Hyundai repair Rohnert Park, Hyundai service, Elantra repair, Sonata service, Tucson maintenance, Korean car specialist',
  openGraph: {
    title: 'Hyundai Repair Specialists | Rohnert Park Transmission',
    description: 'Professional Hyundai service and repair. ASE certified technicians. Call (707) 584-7727.',
    images: ['/images/hyundai-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Kia', href: '/vehicles/kia-repair-rohnert-park' },
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Honda', href: '/vehicles/honda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Engine Bearing Failure (Theta II)',
    solution: 'Engine replacement or rebuild with updated components under extended warranty.'
  },
  {
    issue: 'Dual Clutch Transmission Issues',
    solution: 'TCM updates and clutch actuator replacements for smooth shifting.'
  },
  {
    issue: 'Steering Coupler Wear',
    solution: 'Steering coupler replacement to eliminate clunking and improve steering feel.'
  },
  {
    issue: 'Brake Light Switch Failures',
    solution: 'Updated switch installation to resolve cruise control and shift interlock issues.'
  },
  {
    issue: 'Paint Peeling and Fading',
    solution: 'Professional detailing and paint protection recommendations.'
  }
]

const services = [
  'Hyundai transmission service',
  'GDI engine maintenance',
  'Timing chain replacement',
  'Brake system service',
  'Suspension and steering repair',
  'Electrical system diagnostics',
  'Blue Link system updates',
  'Air conditioning service',
  'Hybrid system maintenance',
  'Warranty-approved repairs',
  'Factory scheduled maintenance',
  'Pre-purchase inspections'
]

export default function HyundaiRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Hyundai"
      description="Quality Hyundai service in Rohnert Park matching the value and reliability of your vehicle."
      longDescription={[
        "Hyundai has transformed from a budget brand to a leader in value, technology, and reliability, and at Rohnert Park Transmission & Auto Repair, we've kept pace with this evolution. We understand that Hyundai owners chose their vehicles for the exceptional warranty, advanced features, and outstanding value. Our goal is to help you maintain these benefits long after the factory warranty expires.",
        "Our technicians are well-versed in Hyundai's diverse lineup, from the efficient Elantra and midsize Sonata to the versatile Tucson and three-row Palisade. We have the diagnostic equipment necessary to service Hyundai's advanced systems, including their efficient GDI (Gasoline Direct Injection) engines, dual-clutch transmissions, and comprehensive safety features like SmartSense.",
        "We're particularly experienced with common Hyundai service needs and recalls. The Theta II engine issues that affected certain models, dual-clutch transmission maintenance requirements, and various software updates are all familiar territory for our team. We stay informed about Hyundai technical service bulletins and recalls to ensure your vehicle receives all necessary updates and repairs.",
        "Our approach to Hyundai service emphasizes maintaining your vehicle's reliability and value. We use quality parts that meet Hyundai's specifications and perform all services according to factory procedures. Whether you need routine maintenance to preserve your warranty, major repairs after warranty expiration, or help with a specific issue, we provide transparent pricing and honest recommendations. Our 2-year/24,000-mile warranty gives you peace of mind that matches Hyundai's commitment to customer satisfaction."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}