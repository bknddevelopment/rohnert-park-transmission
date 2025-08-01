import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Differential Service & Repair | Axle Service Experts | Rohnert Park Transmission',
  description: 'Complete differential service for optimal power distribution. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Differential Service & Repair | Axle Service Experts | Rohnert Park Transmission',
    description: 'Complete differential service for optimal power distribution. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Transmission Service",
    "href": "/services/transmission-service"
  },
  {
    "name": "Transfer Case Repair",
    "href": "/services/transfer-case-repair"
  },
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  }
]

export default function DifferentialServiceRepairPage() {
  return (
    <ServicePageTemplate
      title="Differential Service & Repair"
      description="Complete differential service for optimal power distribution."
      longDescription={[
        "Your vehicle's differential is responsible for allowing the wheels to rotate at different speeds while distributing power from the transmission. At Rohnert Park Transmission & Auto Repair, we provide expert differential service and repair to ensure smooth operation and prevent costly damage to your drivetrain.",
        "Regular differential maintenance involves changing the gear oil at recommended intervals and inspecting components for wear. Old or contaminated differential fluid can cause increased wear on gears and bearings, leading to noise, vibration, and eventual failure. We use the correct grade and type of gear oil specified for your vehicle.",
        "Signs of differential problems include whining or howling noises, clunking sounds when accelerating, vibrations, or fluid leaks. Our technicians are experienced in diagnosing differential issues and can distinguish between problems with gears, bearings, seals, or other components. Early detection and repair can prevent complete differential failure.",
        "We service both conventional and limited-slip differentials in front-wheel drive, rear-wheel drive, and all-wheel drive vehicles. Our services range from routine fluid changes to complete differential rebuilds. When repairs are needed, we use quality parts and precise setup procedures to ensure quiet, reliable operation."
]}
      benefits={[
        "Expert differential diagnosis and repair",
        "Proper gear oil selection and service intervals",
        "Limited-slip differential service expertise",
        "Seal replacement to stop leaks",
        "Bearing service and replacement",
        "Gear setup and replacement when needed",
        "Driveline vibration diagnosis",
        "Service for front and rear differentials",
        "Prevention of expensive drivetrain damage",
        "Noise reduction through proper service"
]}
      image="/images/differential-service-and-repair.jpg"
      relatedServices={relatedServices}
    />
  )
}