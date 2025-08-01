import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Mazda Repair & Service in Rohnert Park | Zoom-Zoom Specialists',
  description: 'Professional Mazda repair and service in Rohnert Park, CA. Expert technicians specializing in CX-5, Mazda3, CX-9, and all Mazda models. ASE certified with 2-year warranty.',
  keywords: 'Mazda repair Rohnert Park, Mazda service, CX-5 repair, Mazda3 service, MX-5 Miata maintenance, Mazda mechanic near me',
  openGraph: {
    title: 'Mazda Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Mazda repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/mazda-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Honda', href: '/vehicles/honda-repair-rohnert-park' },
  { name: 'Subaru', href: '/vehicles/subaru-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Skyactiv Engine Carbon Buildup',
    solution: 'Professional carbon cleaning services to restore performance in direct injection engines.'
  },
  {
    issue: 'Transmission Shifting Issues',
    solution: 'Transmission fluid service and software updates to resolve harsh shifting in automatic models.'
  },
  {
    issue: 'Suspension Noise (CX-5, CX-9)',
    solution: 'Suspension bushing and strut replacement to eliminate clunking and improve ride quality.'
  },
  {
    issue: 'Infotainment System Freezing',
    solution: 'Software updates and module replacements for Mazda Connect system issues.'
  },
  {
    issue: 'Brake Squealing and Vibration',
    solution: 'Premium brake pad installation and rotor resurfacing for quiet, smooth braking.'
  }
]

const services = [
  'Mazda transmission service and repair',
  'Skyactiv engine diagnostics and repair',
  'Rotary engine service (RX-7, RX-8)',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Timing chain service',
  'Air conditioning repair',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function MazdaRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Mazda"
      description="Trusted Mazda repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we appreciate Mazda's unique approach to building cars that are both practical and fun to drive. From the iconic MX-5 Miata to the versatile CX-5 crossover, Mazda vehicles offer a driving experience that sets them apart. Our ASE-certified technicians understand what makes Mazda special and have the expertise to keep your vehicle performing at its best.",
        "We've stayed current with Mazda's innovative Skyactiv technology, which includes high-compression engines and efficient transmissions. These advanced systems require specific knowledge and proper maintenance to deliver their promised performance and fuel economy. Our team is trained in servicing all Mazda powertrains, including the unique rotary engines found in RX-7 and RX-8 models.",
        "Mazda owners choose us because we combine technical expertise with a genuine enthusiasm for the brand. We understand that Mazda drivers value the connection between car and driver, and we ensure every repair maintains that special feel. We use high-quality parts that meet Mazda's specifications and back our work with a comprehensive 2-year/24,000-mile warranty.",
        "From routine maintenance to complex repairs, we handle all aspects of Mazda service. We're particularly experienced with common Mazda issues like carbon buildup in Skyactiv engines, transmission shifting concerns, and suspension noise in crossover models. Our goal is to keep your Mazda delivering the zoom-zoom performance you love while providing honest, affordable service."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}