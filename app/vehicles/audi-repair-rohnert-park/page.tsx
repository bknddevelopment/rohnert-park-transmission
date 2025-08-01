import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Audi Repair & Service in Rohnert Park | German Auto Specialists',
  description: 'Expert Audi repair and service in Rohnert Park, CA. Specializing in A4, Q5, A6, Q7 and all Audi models. ASE certified technicians with dealer-level diagnostics.',
  keywords: 'Audi repair Rohnert Park, Audi service, Quattro repair, A4 service, Q5 maintenance, German auto repair',
  openGraph: {
    title: 'Audi Repair Experts | Rohnert Park Transmission',
    description: 'Professional Audi service and repair. Factory-trained technicians, 2-year warranty. Call (707) 584-7727.',
    images: ['/images/audi-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'BMW', href: '/vehicles/bmw-repair-rohnert-park' },
  { name: 'Mercedes-Benz', href: '/vehicles/mercedes-benz-repair-rohnert-park' },
  { name: 'Volkswagen', href: '/vehicles/volkswagen-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Oil Consumption in TFSI Engines',
    solution: 'We perform piston ring replacements and PCV valve updates to resolve excessive oil consumption in 2.0T engines.'
  },
  {
    issue: 'Timing Chain Tensioner Failure',
    solution: 'Early detection and replacement of timing chain components prevents catastrophic engine damage.'
  },
  {
    issue: 'DSG Transmission Issues',
    solution: 'Specialized DSG service including mechatronic unit repairs and clutch pack replacements.'
  },
  {
    issue: 'Electronic Parking Brake Malfunctions',
    solution: 'Diagnostic and repair of EPB modules and actuator motors using factory scan tools.'
  },
  {
    issue: 'Coolant Leaks and Thermostat Failures',
    solution: 'Complete cooling system overhauls including water pump and thermostat housing replacements.'
  }
]

const services = [
  'DSG transmission service and repair',
  'Quattro all-wheel-drive service',
  'Timing chain and tensioner replacement',
  'Turbocharger diagnosis and repair',
  'Carbon cleaning for direct injection engines',
  'Brake system service (including ceramic pads)',
  'Suspension and air ride repair',
  'Electrical system diagnostics',
  'MMI infotainment updates and repair',
  'Factory scheduled maintenance',
  'Pre-purchase inspections',
  'Performance upgrades and tuning'
]

export default function AudiRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Audi"
      description="Premier Audi repair facility in Rohnert Park with factory-level diagnostics and expertise."
      longDescription={[
        "Audi vehicles represent the pinnacle of German engineering, combining luxury, performance, and cutting-edge technology. At Rohnert Park Transmission & Auto Repair, we have invested in the specialized training and equipment necessary to service these sophisticated vehicles properly. Our technicians understand the intricacies of Audi's Quattro all-wheel-drive systems, advanced turbocharged engines, and complex electronic systems.",
        "We've been servicing Audi vehicles in Sonoma County for over 25 years, watching as they've evolved from the original Quattro to today's high-tech models with virtual cockpits and advanced driver assistance systems. Our experience spans all Audi models, from the compact A3 to the powerful RS models, and everything in between. We stay current with Audi's latest technology through continuous training and technical updates.",
        "One of the reasons Audi owners throughout Rohnert Park, Cotati, and Petaluma trust us is our commitment to using the right parts and procedures. We have access to OEM parts and use Audi-approved fluids and specifications for all services. Our diagnostic equipment can communicate with all Audi control modules, allowing us to perform coding, adaptations, and software updates just like the dealership.",
        "Common Audi issues we regularly address include oil consumption in TFSI engines, timing chain problems in certain V6 and V8 engines, and DSG transmission services. We also specialize in maintaining Audi's sophisticated suspension systems, whether it's the standard setup or the advanced adaptive air suspension. Our comprehensive approach ensures your Audi maintains its performance, comfort, and reliability for years to come."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}