import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Fiat Repair & Service in Rohnert Park | Italian Auto Specialists',
  description: 'Expert Fiat repair and service in Rohnert Park, CA. Specializing in 500, 500X, 124 Spider and all Fiat models. European car expertise with affordable pricing.',
  keywords: 'Fiat repair Rohnert Park, Fiat service, 500 repair, Italian car specialist, European auto repair, Fiat mechanic',
  openGraph: {
    title: 'Fiat Repair Experts | Rohnert Park Transmission',
    description: 'Professional Fiat service and repair. Italian car specialists since 1997. Call (707) 584-7727.',
    images: ['/images/fiat-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Mini', href: '/vehicles/mini-repair-rohnert-park' },
  { name: 'Volkswagen', href: '/vehicles/volkswagen-repair-rohnert-park' },
  { name: 'Chrysler', href: '/vehicles/chrysler-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'MultiAir Engine Issues',
    solution: 'MultiAir brick replacement and software updates for improved engine performance.'
  },
  {
    issue: 'Clutch Wear in Manual Transmissions',
    solution: 'Clutch replacement with upgraded components for longer service life.'
  },
  {
    issue: 'Electrical Gremlins',
    solution: 'Comprehensive electrical diagnosis to resolve intermittent issues and warning lights.'
  },
  {
    issue: 'Suspension Noise and Wear',
    solution: 'Strut and spring replacement to restore the nimble handling Fiats are known for.'
  },
  {
    issue: 'Turbocharger Problems (500 Abarth)',
    solution: 'Turbo inspection, cleaning, or replacement to maintain boost pressure.'
  }
]

const services = [
  'MultiAir engine service',
  'Manual transmission repair',
  'Automatic transmission service',
  'Italian car diagnostics',
  'Brake system maintenance',
  'Suspension and steering repair',
  'Electrical system troubleshooting',
  'Air conditioning service',
  'Timing belt replacement',
  'Turbocharger service',
  'Performance upgrades',
  'European car maintenance'
]

export default function FiatRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Fiat"
      description="Rohnert Park's Italian auto specialists providing expert Fiat service with European expertise."
      longDescription={[
        "Fiat brings Italian style and efficiency to American roads, and at Rohnert Park Transmission & Auto Repair, we appreciate the unique character these vehicles offer. From the iconic Fiat 500 city car to the adventurous 500X crossover and the sporty 124 Spider, we understand what makes these Italian machines special. Our technicians have the European car expertise necessary to properly maintain and repair your Fiat.",
        "While Fiat returned to the US market relatively recently, our experience with European vehicles spans decades. We understand the engineering philosophy behind Fiat's efficient engines, particularly the innovative MultiAir technology that provides both performance and fuel economy. This system requires specific knowledge and diagnostic capabilities, which we've invested in to properly service these vehicles.",
        "We recognize that Fiat owners chose their vehicles for their distinctive style, fun-to-drive nature, and fuel efficiency. Our goal is to maintain these characteristics while ensuring reliability. Common issues we see include MultiAir system problems, clutch wear in manual transmission models, and various electrical quirks that can affect European vehicles. Our diagnostic approach gets to the root of these issues quickly, saving you time and money.",
        "Whether you need routine maintenance like oil changes and brake service, or more complex repairs like transmission work or engine diagnostics, we approach every Fiat with the same attention to detail. We use high-quality parts that meet European specifications and ensure your Fiat maintains its performance and character. Our 2-year/24,000-mile warranty covers all our work, giving you confidence that your Italian car is in good hands."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}