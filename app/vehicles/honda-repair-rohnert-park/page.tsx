import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Honda Repair & Service in Rohnert Park | Accord, Civic & CR-V Specialists',
  description: 'Professional Honda repair and service in Rohnert Park, CA. Expert technicians for Accord, Civic, CR-V, Pilot and all Honda models. Reliable service since 1997.',
  keywords: 'Honda repair Rohnert Park, Honda service, Accord repair, Civic service, CR-V maintenance, Honda mechanic near me',
  openGraph: {
    title: 'Honda Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Honda service and repair. ASE certified, family-owned. Call (707) 584-7727.',
    images: ['/images/honda-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Acura', href: '/vehicles/acura-repair-rohnert-park' },
  { name: 'Toyota', href: '/vehicles/toyota-repair-rohnert-park' },
  { name: 'Mazda', href: '/vehicles/mazda-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'VTC Actuator Rattling',
    solution: 'VTC actuator replacement to eliminate cold start grinding noise in VTEC engines.'
  },
  {
    issue: 'AC Compressor Clutch Failure',
    solution: 'Compressor replacement with updated units for reliable air conditioning.'
  },
  {
    issue: 'Transmission Judder',
    solution: 'Software updates and fluid changes to resolve CVT and automatic transmission issues.'
  },
  {
    issue: 'Excessive Oil Consumption',
    solution: 'Piston ring replacement or engine rebuild for affected 4-cylinder engines.'
  },
  {
    issue: 'Power Steering Whine',
    solution: 'O-ring replacement and system flush to eliminate steering noise.'
  }
]

const services = [
  'Honda transmission service and repair',
  'VTEC engine service',
  'CVT transmission maintenance',
  'Timing belt replacement',
  'Brake system service',
  'Suspension and steering repair',
  'Electrical diagnostics',
  'Honda Sensing calibration',
  'Hybrid battery service',
  'Air conditioning repair',
  'Factory scheduled maintenance',
  'Pre-purchase inspections'
]

export default function HondaRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Honda"
      description="Trusted Honda specialists in Rohnert Park delivering the reliability Honda is known for."
      longDescription={[
        "Honda has earned its reputation for reliability and efficiency, and at Rohnert Park Transmission & Auto Repair, we help maintain that reputation. For over 25 years, we've been servicing Honda vehicles for families throughout Sonoma County who depend on their Accords, Civics, CR-Vs, and Pilots for daily transportation. We understand why Honda consistently ranks among the most reliable brands, and we're committed to keeping your Honda running like new.",
        "Our ASE-certified technicians have extensive experience with Honda's innovative engineering, from their efficient VTEC engines to their smooth CVT transmissions. We've watched Honda evolve from simple, reliable cars to sophisticated vehicles with advanced safety systems like Honda Sensing. Our diagnostic equipment can interface with all Honda systems, allowing us to perform the same level of service as Honda dealerships.",
        "We're particularly knowledgeable about common Honda maintenance needs and issues. The importance of timing belt replacement at recommended intervals, the specific requirements of Honda's CVT transmissions, and the proper procedures for maintaining VTEC systems are all second nature to our team. We also address common problems like VTC actuator noise, AC compressor failures, and oil consumption issues in certain engines.",
        "Our approach to Honda service emphasizes preventive maintenance to maintain the reliability these vehicles are famous for. We use high-quality parts that meet Honda's specifications, including genuine Honda fluids when required. Whether you need routine maintenance, major repairs, or help with a recall issue, we provide honest recommendations and quality work. Our 2-year/24,000-mile warranty ensures you can drive with confidence after every service."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}