import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Transfer Case Service & Repair | 4WD & AWD Specialists | Rohnert Park Transmission',
  description: 'Expert transfer case service for 4WD and AWD vehicles. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Transfer Case Service & Repair | 4WD & AWD Specialists | Rohnert Park Transmission',
    description: 'Expert transfer case service for 4WD and AWD vehicles. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Transmission Service",
    "href": "/services/transmission-service"
  },
  {
    "name": "Differential Service",
    "href": "/services/differential-service-and-repair"
  },
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  }
]

export default function TransferCaseRepairPage() {
  return (
    <ServicePageTemplate
      title="Transfer Case Repair"
      description="Expert transfer case service for 4WD and AWD vehicles."
      longDescription={[
        "The transfer case is a critical component in four-wheel drive (4WD) and all-wheel drive (AWD) vehicles, distributing power from the transmission to both front and rear axles. At Rohnert Park Transmission & Auto Repair, we specialize in transfer case service and repair, keeping your 4WD or AWD system functioning properly for optimal traction and performance.",
        "Regular transfer case maintenance is essential for preventing costly failures. We perform fluid changes at manufacturer-recommended intervals, using the correct type and grade of fluid for your specific transfer case. During service, we inspect for leaks, unusual wear patterns, and signs of internal damage that could lead to failure.",
        "Common transfer case problems include fluid leaks, grinding or clunking noises, difficulty shifting between drive modes, and vibrations during acceleration. Our experienced technicians use specialized diagnostic equipment to identify issues accurately. We service all types of transfer cases, from manual shift to electronic shift and automatic AWD systems.",
        "When repairs are needed, we use quality parts and follow manufacturer procedures to ensure proper operation. Our transfer case services include seal replacement, bearing service, chain or gear replacement, and complete rebuilds when necessary. We stand behind our work with our comprehensive warranty."
]}
      benefits={[
        "Specialized knowledge of 4WD and AWD systems",
        "Transfer case fluid service with correct fluids",
        "Leak detection and seal replacement",
        "Electronic and manual shift system service",
        "Bearing and chain/gear replacement",
        "Complete transfer case rebuilds available",
        "Diagnosis of driveline vibrations",
        "Service for all major transfer case brands",
        "Prevention of costly drivetrain damage",
        "Road testing to verify proper operation"
]}
      image="/images/transfer-case-repair.jpg"
      relatedServices={relatedServices}
    />
  )
}