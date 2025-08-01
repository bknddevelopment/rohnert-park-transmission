import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Dodge Repair & Service in Rohnert Park | Ram, Charger & Challenger Experts',
  description: 'Professional Dodge repair and service in Rohnert Park, CA. Specializing in Charger, Challenger, Durango and all Dodge models. ASE certified with 25+ years experience.',
  keywords: 'Dodge repair Rohnert Park, Dodge service, Charger repair, Challenger service, Durango maintenance, Hemi engine repair',
  openGraph: {
    title: 'Dodge Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Dodge service and repair. Performance and muscle car specialists. Call (707) 584-7727.',
    images: ['/images/dodge-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chrysler', href: '/vehicles/chrysler-repair-rohnert-park' },
  { name: 'Jeep', href: '/vehicles/jeep-repair-rohnert-park' },
  { name: 'Ram', href: '/vehicles/ram-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Hemi Engine Tick/Lifter Failure',
    solution: 'Lifter replacement and camshaft inspection to eliminate the infamous Hemi tick.'
  },
  {
    issue: 'Electronic Throttle Control Issues',
    solution: 'Throttle body cleaning and replacement to resolve lightning bolt warning lights.'
  },
  {
    issue: 'Transmission Valve Body Problems',
    solution: 'Valve body replacement or rebuild for smooth shifting in automatic transmissions.'
  },
  {
    issue: 'EVAP System Leaks',
    solution: 'Diagnosis and repair of evaporative emission system to clear check engine lights.'
  },
  {
    issue: 'Front Suspension Wear',
    solution: 'Ball joint and control arm replacement for improved handling and tire wear.'
  }
]

const services = [
  'Hemi engine service and repair',
  'Performance transmission service',
  'SRT performance brake service',
  'Suspension and handling upgrades',
  'Electrical system diagnostics',
  'Exhaust system upgrades',
  'Supercharger maintenance',
  'Differential service',
  'Cooling system performance upgrades',
  'Check engine light diagnosis',
  'Performance tuning',
  'Pre-purchase inspections'
]

export default function DodgeRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Dodge"
      description="Rohnert Park's performance and muscle car specialists for all Dodge vehicles."
      longDescription={[
        "Dodge represents American muscle and performance, and at Rohnert Park Transmission & Auto Repair, we share that passion for power and performance. Whether you drive a tire-shredding Challenger Hellcat, a practical Grand Caravan, or anything in between, our technicians have the expertise to keep your Dodge performing at its best. We understand these vehicles aren't just transportation - they're an expression of American automotive enthusiasm.",
        "Our experience with Dodge vehicles spans decades, from classic muscle cars to modern high-performance machines. We've kept pace with Dodge's evolution, including their powerful Hemi engines, sophisticated 8-speed automatic transmissions, and advanced performance systems like launch control and line lock. Our shop is equipped with the specialized tools and diagnostic equipment necessary to properly service these performance-oriented vehicles.",
        "We're particularly experienced with the 5.7L and 6.4L Hemi engines that power many Dodge vehicles. We understand common issues like lifter tick, MDS (Multi-Displacement System) problems, and the importance of using the correct oil specification. For those with supercharged SRT models, we have the expertise to maintain these high-performance engines and their supporting systems, ensuring you get maximum performance and reliability.",
        "Beyond routine maintenance, we offer performance upgrades and modifications for Dodge enthusiasts looking to enhance their driving experience. From exhaust systems to suspension upgrades, we can help you customize your Dodge while maintaining reliability. All our work, whether maintenance or modification, is backed by our comprehensive 2-year/24,000-mile warranty. We're committed to keeping the Dodge performance tradition alive in Rohnert Park."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}