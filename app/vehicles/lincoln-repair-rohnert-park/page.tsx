import { Metadata } from 'next'
import { VehiclePageTemplate } from '@/components/VehiclePageTemplate'

export const metadata: Metadata = {
  title: 'Lincoln Repair & Service in Rohnert Park | Luxury Ford Specialists',
  description: 'Professional Lincoln repair and service in Rohnert Park, CA. Expert technicians specializing in Navigator, Aviator, MKZ, and all Lincoln models. ASE certified with 2-year warranty.',
  keywords: 'Lincoln repair Rohnert Park, Lincoln service, Navigator repair, Aviator service, MKZ maintenance, Lincoln mechanic near me',
  openGraph: {
    title: 'Lincoln Repair Specialists | Rohnert Park Transmission',
    description: 'Expert Lincoln repair and service. ASE certified, family-owned since 1997. Call (707) 584-7727.',
    images: ['/images/lincoln-repair.jpg'],
  }
}

const relatedBrands = [
  { name: 'Ford', href: '/vehicles/ford-repair-rohnert-park' },
  { name: 'Cadillac', href: '/vehicles/cadillac-repair-rohnert-park' },
  { name: 'Buick', href: '/vehicles/buick-repair-rohnert-park' },
]

const commonProblems = [
  {
    issue: 'Air Suspension Failure',
    solution: 'We repair or convert air suspension systems to traditional springs for long-term reliability.'
  },
  {
    issue: 'MyLincoln Touch Screen Issues',
    solution: 'Software updates and module replacements to fix infotainment system glitches and freezing.'
  },
  {
    issue: 'Turbocharged Engine Problems',
    solution: 'Expert diagnosis and repair of EcoBoost engines, including turbocharger replacement.'
  },
  {
    issue: 'Electronic Throttle Body Failure',
    solution: 'Throttle body cleaning or replacement to resolve rough idle and acceleration issues.'
  },
  {
    issue: 'Door Handle and Latch Problems',
    solution: 'Repair of electronic door handles and latches common in newer Lincoln models.'
  }
]

const services = [
  'Lincoln transmission service and repair',
  'Air suspension diagnosis and repair',
  'EcoBoost engine service and repair',
  'Brake system service and repair',
  'Electronic systems diagnostics',
  'Climate control repair',
  'Oil changes and fluid services',
  'Timing chain replacement',
  'Electrical system repair',
  'Check engine light diagnosis',
  'Pre-purchase inspections',
  'Factory scheduled maintenance'
]

export default function LincolnRepairPage() {
  return (
    <VehiclePageTemplate
      brand="Lincoln"
      description="Trusted Lincoln repair specialists serving Rohnert Park, Cotati, and Sonoma County since 1997."
      longDescription={[
        "At Rohnert Park Transmission & Auto Repair, we understand that Lincoln owners expect a premium ownership experience. As Ford's luxury division, Lincoln vehicles combine American craftsmanship with sophisticated technology and comfort features. Our ASE-certified technicians have the expertise to maintain and repair all Lincoln models, from the powerful Navigator to the refined Continental.",
        "We've developed specialized knowledge in Lincoln's unique systems, particularly their air suspension technology found in many models. Air suspension provides an incredibly smooth ride but requires proper maintenance and occasional repair. Our team can diagnose air suspension problems accurately and provide cost-effective solutions, whether that's repairing the existing system or converting to traditional suspension when appropriate.",
        "Lincoln owners appreciate our ability to handle complex electronic systems found in modern luxury vehicles. From MyLincoln Touch infotainment issues to advanced driver assistance systems, we have the diagnostic equipment and training to solve problems correctly. We use high-quality parts that meet Lincoln's specifications, ensuring your vehicle maintains its luxury performance.",
        "Whether you drive a classic Town Car or a modern Aviator, we provide comprehensive service for all Lincoln vehicles. We're particularly experienced with common Lincoln issues like EcoBoost engine problems, electronic throttle body failures, and the various electronic gremlins that can affect luxury vehicles. Our goal is to provide dealer-quality service at a fair price, backed by our 2-year/24,000-mile warranty."
      ]}
      commonProblems={commonProblems}
      services={services}
      image="/images/services-hero.jpg"
      relatedBrands={relatedBrands}
    />
  )
}