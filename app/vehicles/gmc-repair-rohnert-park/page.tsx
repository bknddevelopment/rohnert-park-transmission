import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'GMC Repair & Service in Rohnert Park | Sierra, Yukon & Canyon Specialists',
  description: 'Expert GMC repair and service in Rohnert Park, CA. Specializing in Sierra, Yukon, Canyon, Terrain and all GMC trucks and SUVs. Professional grade service.',
  keywords: 'GMC repair Rohnert Park, GMC service, Sierra repair, Yukon service, Canyon maintenance, GMC truck specialist',
  openGraph: {
    title: 'GMC Repair Experts | Rohnert Park Transmission',
    description: 'Professional Grade GMC service and repair. Truck specialists since 1997. Call (707) 584-7727.',
    images: ['/images/gmc-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chevrolet', href: '/vehicles/chevrolet-repair-rohnert-park' },
  { name: 'Cadillac', href: '/vehicles/cadillac-repair-rohnert-park' },
  { name: 'Ford', href: '/vehicles/ford-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'AFM (Active Fuel Management) Problems',
    solution: 'Lifter replacement or AFM delete to resolve oil consumption and engine noise.'
  },
  {
    issue: 'AC Condenser Failures',
    solution: 'Condenser replacement with updated designs to prevent recurring leaks.'
  },
  {
    issue: 'Transfer Case Issues',
    solution: 'Fluid service and encoder motor replacement for 4WD engagement problems.'
  },
  {
    issue: 'Brake System Vibrations',
    solution: 'Rotor replacement and proper bedding procedures for smooth braking.'
  },
  {
    issue: 'Fuel Pump Module Problems',
    solution: 'Complete fuel pump assembly replacement to resolve stalling and starting issues.'
  }
]

const services = [
  'GMC transmission service and repair',
  'Duramax diesel service',
  'Engine diagnostics and repair',
  '4WD and AWD system service',
  'Heavy-duty brake service',
  'Suspension and leveling kits',
  'Towing package installation',
  'Electrical system diagnostics',
  'IntelliLink system updates',
  'Fleet maintenance programs',
  'Exhaust system upgrades',
  'Professional grade maintenance'
]

export default function GMCRepairPage() {
  return (
    <VehiclePageTemplate
      brand="GMC"
      description="Professional Grade service for Professional Grade trucks at Rohnert Park's GMC specialists."
      longDescription={[
        "GMC has built its reputation on 'Professional Grade' trucks and SUVs, and at Rohnert Park Transmission & Auto Repair, we provide professional grade service to match. Whether you rely on a Sierra for your construction business, depend on a Yukon for family adventures, or trust a Canyon for daily driving, we understand these vehicles are built for people who demand capability and dependability.",
        "Our technicians have extensive experience with the entire GMC lineup, from half-ton pickups to heavy-duty Duramax diesels. We understand the engineering that makes GMC trucks capable of handling tough jobs while providing refined comfort. Our shop is equipped with GM diagnostic equipment that allows us to access all vehicle systems, perform calibrations, and ensure your GMC operates as designed.",
        "We're particularly experienced with common GMC truck issues, including Active Fuel Management problems in V8 engines, transfer case concerns in 4WD models, and the various updates needed for optimal performance. For Duramax diesel owners, we provide specialized service including emissions system maintenance, fuel system repairs, and performance enhancements that maintain reliability.",
        "Our approach to GMC service recognizes that these vehicles are often essential for work and family. We offer fleet maintenance programs for businesses that depend on GMC trucks, as well as upgrade services for owners who want to enhance their vehicle's capability. From lift kits to towing packages, we can help you customize your GMC while maintaining factory reliability. All our work is backed by our comprehensive 2-year/24,000-mile warranty."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}