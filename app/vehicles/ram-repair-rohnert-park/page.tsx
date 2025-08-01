import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Ram Truck Repair & Service in Rohnert Park | Heavy-Duty Specialists',
  description: 'Professional Ram truck repair and service in Rohnert Park, CA. Expert technicians specializing in Ram 1500, 2500, 3500, and ProMaster. ASE certified with 2-year warranty.',
  keywords: 'Ram repair Rohnert Park, Ram truck service, Ram 1500 repair, Ram 2500 service, Cummins diesel repair, Ram mechanic near me',
  openGraph: {
    title: 'Ram Truck Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Ram truck repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/ram-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Dodge', href: '/vehicles/dodge-repair-rohnert-park' },
  { name: 'Chrysler', href: '/vehicles/chrysler-repair-rohnert-park' },
  { name: 'Jeep', href: '/vehicles/jeep-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Death Wobble in 4WD Models',
    solution: 'Complete front suspension inspection and component replacement to eliminate dangerous wobble.'
  },
  {
    issue: 'Exhaust Manifold Bolts Breaking',
    solution: 'Exhaust manifold repair with upgraded bolts to prevent future failures.'
  },
  {
    issue: 'TIPM (Fuse Box) Failures',
    solution: 'TIPM repair or replacement to resolve electrical issues and starting problems.'
  },
  {
    issue: 'Transmission Cooler Line Leaks',
    solution: 'Transmission cooler line replacement and fluid service to prevent overheating.'
  },
  {
    issue: 'Diesel Particulate Filter Issues',
    solution: 'DPF cleaning or replacement to restore diesel performance and emissions compliance.'
  }
]

const services = [
  'Ram transmission service and repair',
  'Cummins diesel engine service',
  'Heavy-duty brake service',
  '4WD system diagnosis and repair',
  'Suspension and steering repair',
  'Exhaust system repair',
  'Differential service',
  'Oil changes and fluid services',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Fleet maintenance services'
]

export default function RamRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Ram"
      description="Trusted Ram truck repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand that Ram truck owners depend on their vehicles for both work and play. These powerful trucks require specialized knowledge and heavy-duty equipment to service properly. Our ASE-certified technicians have extensive experience with all Ram models, from the efficient 1500 EcoDiesel to the mighty 3500 Cummins diesel dually.",
        "We've invested in the tools and training necessary to handle Ram's advanced systems, including their powerful Cummins diesel engines and sophisticated 4WD systems. Whether you use your Ram for construction work, towing, or daily driving, we understand the demands placed on these trucks and service them accordingly. Our shop can handle everything from routine maintenance to major repairs on even the largest Ram trucks.",
        "Ram owners appreciate our expertise with common truck issues, particularly the infamous 'death wobble' that can affect solid front axle models. We perform thorough inspections and use quality parts to ensure repairs last. We also specialize in diesel service, understanding the unique maintenance requirements of Cummins engines and modern emission systems.",
        "From oil changes to transmission rebuilds, we provide comprehensive Ram truck service. We're particularly experienced with TIPM electrical issues, exhaust manifold repairs, and the various challenges that come with high-mileage work trucks. Our 2-year/24,000-mile warranty covers commercial use, giving fleet owners and contractors confidence in our repairs."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}