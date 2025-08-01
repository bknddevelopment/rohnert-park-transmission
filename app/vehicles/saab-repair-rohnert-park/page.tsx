import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Saab Repair & Service in Rohnert Park | Swedish Auto Specialists',
  description: 'Professional Saab repair and service in Rohnert Park, CA. Expert technicians specializing in 9-3, 9-5, and classic Saab models. ASE certified with 2-year warranty.',
  keywords: 'Saab repair Rohnert Park, Saab service, 9-3 repair, 9-5 service, Saab turbo maintenance, Saab mechanic near me',
  openGraph: {
    title: 'Saab Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Saab repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/saab-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Volvo', href: '/vehicles/volvo-repair-rohnert-park' },
  { name: 'Volkswagen', href: '/vehicles/volkswagen-repair-rohnert-park' },
  { name: 'BMW', href: '/vehicles/bmw-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Direct Ignition Cassette Failure',
    solution: 'DI cassette replacement with upgraded units to prevent misfires and starting issues.'
  },
  {
    issue: 'Sludge Buildup in Turbo Engines',
    solution: 'Engine flush and proper oil maintenance to prevent turbocharger damage.'
  },
  {
    issue: 'Crank Position Sensor Failure',
    solution: 'Sensor replacement to resolve stalling and no-start conditions.'
  },
  {
    issue: 'Coolant Bypass Valve Issues',
    solution: 'Cooling system service with valve replacement to prevent overheating.'
  },
  {
    issue: 'SID Display Pixel Loss',
    solution: 'Saab Information Display repair or replacement to restore functionality.'
  }
]

const services = [
  'Saab transmission service and repair',
  'Turbocharger diagnosis and repair',
  'Engine diagnostics and service',
  'Direct ignition cassette replacement',
  'Brake system service and repair',
  'Suspension and steering repair',
  'Cooling system service',
  'Oil changes with proper specifications',
  'Electrical system diagnostics',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Classic Saab maintenance'
]

export default function SaabRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Saab"
      description="Trusted Saab repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we're proud to be one of the few shops in Sonoma County with extensive Saab expertise. Although Saab ceased production in 2011, these unique Swedish vehicles continue to inspire passionate ownership. Our ASE-certified technicians understand what makes Saab special and have the knowledge to keep these sophisticated vehicles running properly.",
        "Saab's innovative engineering, from turbocharging to advanced safety systems, requires specialized knowledge to service correctly. We've maintained our Saab expertise through the years, understanding common issues like direct ignition cassette failures and the importance of proper oil maintenance in turbocharged engines. Our experience spans from classic 900s to the final 9-5 models.",
        "Finding parts for Saab vehicles can be challenging, but we've developed relationships with specialized suppliers who focus on keeping Saabs on the road. We can source OEM and quality aftermarket parts for most repairs. Whether you need routine maintenance or major repairs, we treat your Saab with the respect these unique vehicles deserve.",
        "We provide comprehensive Saab service, with particular expertise in turbocharger systems, direct ignition problems, and the various electronic issues that can affect these vehicles. We understand Saab's unique maintenance requirements, such as the specific oil specifications needed to prevent sludge buildup. Our 2-year/24,000-mile warranty gives you confidence that your Saab is in capable hands."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}