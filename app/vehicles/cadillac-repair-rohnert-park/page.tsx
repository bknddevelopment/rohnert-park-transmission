import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Cadillac Repair & Service in Rohnert Park | Luxury American Auto Experts',
  description: 'Expert Cadillac repair and service in Rohnert Park, CA. Specializing in Escalade, XT5, CT5 and all Cadillac models. ASE certified with 25+ years experience.',
  keywords: 'Cadillac repair Rohnert Park, Cadillac service, Escalade repair, CTS service, luxury car repair, American auto specialist',
  openGraph: {
    title: 'Cadillac Repair Specialists | Rohnert Park Transmission',
    description: 'Professional Cadillac service and repair. Family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/cadillac-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Chevrolet', href: '/vehicles/chevrolet-repair-rohnert-park' },
  { name: 'GMC', href: '/vehicles/gmc-repair-rohnert-park' },
  { name: 'Lincoln', href: '/vehicles/lincoln-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'CUE Infotainment System Issues',
    solution: 'Touch screen replacement and software updates to restore Cadillac User Experience functionality.'
  },
  {
    issue: 'Magnetic Ride Control Problems',
    solution: 'Diagnosis and replacement of magnetic shock absorbers and control modules.'
  },
  {
    issue: 'Northstar Engine Oil Leaks',
    solution: 'Head gasket repairs and cooling system services for classic Northstar V8 engines.'
  },
  {
    issue: 'Air Suspension Failures',
    solution: 'Compressor rebuilds and air strut replacements to restore ride quality.'
  },
  {
    issue: 'Timing Chain Issues in V6 Engines',
    solution: 'Complete timing chain service including guides and tensioners to prevent engine damage.'
  }
]

const services = [
  'Cadillac transmission service and repair',
  'Engine diagnostics and repair',
  'Magnetic Ride Control service',
  'Air suspension repair and conversion',
  'Brake system service',
  'CUE system diagnostics and repair',
  'Electrical system troubleshooting',
  'Cooling system service',
  'Oil changes and fluid services',
  'Exhaust system repair',
  'Factory scheduled maintenance',
  'Pre-purchase inspections'
]

export default function CadillacRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Cadillac"
      description="Rohnert Park's trusted Cadillac repair specialists providing luxury service for luxury vehicles."
      longDescription={[
        "Cadillac has long been the standard of American luxury, and at Rohnert Park Transmission & Auto Repair, we understand the prestige and performance these vehicles represent. Our experienced technicians have worked on Cadillacs from the classic DeVilles and Eldorados to the modern CT and XT series vehicles. We combine old-school craftsmanship with modern diagnostic technology to keep your Cadillac running smoothly.",
        "As General Motors' luxury division, Cadillac vehicles feature advanced technology and sophisticated systems that require specialized knowledge to service properly. Our team stays current with Cadillac's latest innovations, including the Super Cruise semi-autonomous driving system, Magnetic Ride Control suspension, and the CUE infotainment platform. We have the diagnostic equipment necessary to troubleshoot and repair these complex systems.",
        "We've built a reputation throughout Rohnert Park and Sonoma County for our expertise with both classic and modern Cadillacs. Whether you're dealing with issues in a Northstar V8 engine or need service for the latest twin-turbo V6, we have the experience to handle it. We understand common Cadillac problems and have developed efficient solutions that save our customers time and money.",
        "Our commitment to quality extends to every aspect of our service. We use premium parts that meet or exceed Cadillac's specifications, ensuring your vehicle maintains its luxury performance and ride quality. From routine maintenance like oil changes and tire rotations to complex repairs like transmission rebuilds and engine work, we treat every Cadillac with the respect it deserves. Our 2-year/24,000-mile warranty provides peace of mind that the job is done right."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}