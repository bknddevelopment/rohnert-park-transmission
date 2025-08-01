import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Jeep Repair & Service in Rohnert Park | 4x4 & Off-Road Specialists',
  description: 'Professional Jeep repair and service in Rohnert Park, CA. Expert technicians specializing in Wrangler, Cherokee, Grand Cherokee, and all Jeep models. ASE certified with 2-year warranty.',
  keywords: 'Jeep repair Rohnert Park, Jeep service, Wrangler repair, Cherokee service, Grand Cherokee maintenance, Jeep mechanic near me',
  openGraph: {
    title: 'Jeep Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Jeep repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/jeep-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chrysler', href: '/vehicles/chrysler-repair-rohnert-park' },
  { name: 'Dodge', href: '/vehicles/dodge-repair-rohnert-park' },
  { name: 'Ram', href: '/vehicles/ram-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Death Wobble in Wranglers',
    solution: 'We diagnose and repair steering components, track bars, and suspension parts to eliminate death wobble.'
  },
  {
    issue: 'Transfer Case Failures',
    solution: 'Expert transfer case rebuilds and replacements for 4WD system reliability.'
  },
  {
    issue: 'TIPM (Fuse Box) Issues',
    solution: 'We repair or replace faulty TIPM modules that cause electrical problems in many Jeep models.'
  },
  {
    issue: 'Oil Cooler and Filter Housing Leaks',
    solution: 'Complete oil cooler assembly replacement to stop leaks common in Pentastar V6 engines.'
  },
  {
    issue: 'Transmission Overheating',
    solution: 'Transmission cooler upgrades and fluid service to prevent overheating during off-road use.'
  }
]

const services = [
  'Jeep 4WD system diagnosis and repair',
  'Transfer case service and rebuild',
  'Transmission repair and service',
  'Suspension lift kit installation',
  'Death wobble diagnosis and repair',
  'Differential service and repair',
  'Engine diagnostics and repair',
  'Brake system upgrades and service',
  'Electrical system diagnostics',
  'Oil changes and fluid services',
  'Pre-purchase inspections',
  'Off-road preparation services'
]

export default function JeepRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Jeep"
      description="Trusted Jeep repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand that Jeep owners demand reliability both on and off the road. Jeeps are built for adventure, and we're here to ensure your vehicle is ready for whatever terrain you tackle. Our ASE-certified technicians have extensive experience working on all Jeep models, from classic Wranglers to modern Grand Cherokees.",
        "We specialize in the unique challenges that come with Jeep ownership, particularly 4WD system maintenance and repair. Whether you're experiencing the infamous 'death wobble' in your Wrangler or dealing with transfer case issues, our team has the expertise to diagnose and fix the problem correctly. We understand how important your Jeep's off-road capability is, and we ensure every repair maintains that capability.",
        "Many Jeep owners choose us because we combine technical expertise with a genuine understanding of how Jeeps are used. We've worked on everything from daily-driver Cherokees to heavily modified rock crawlers. We use high-quality parts that can withstand the demands of off-road driving, and our 2-year/24,000-mile warranty covers you whether you're on the highway or the trail.",
        "From routine maintenance to complex 4WD repairs, we handle every aspect of Jeep service. We're particularly experienced with common Jeep issues like TIPM failures, oil cooler leaks in Pentastar engines, and transmission cooling problems. Our goal is to keep your Jeep reliable and trail-ready while providing honest, affordable service."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}