import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Tire Service & Repair | Rotation, Balance, Alignment | Rohnert Park Transmission',
  description: 'Complete tire services including rotation, balancing, and alignment. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Tire Service & Repair | Rotation, Balance, Alignment | Rohnert Park Transmission',
    description: 'Complete tire services including rotation, balancing, and alignment. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Brake & Rotor Repair",
    "href": "/services/brake-and-rotor-repair"
  },
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  },
  {
    "name": "Differential Service",
    "href": "/services/differential-service-and-repair"
  }
]

export default function TireServicesPage() {
  return (
    <ServicePageTemplate
      title="Tire Services"
      description="Complete tire services including rotation, balancing, and alignment."
      longDescription={[
        "Proper tire maintenance is essential for safety, fuel efficiency, and vehicle performance. At Rohnert Park Transmission & Auto Repair, we offer comprehensive tire services to help you get the most from your tire investment. Our experienced technicians provide everything from tire rotation to complete wheel alignment services.",
        "Regular tire rotation helps ensure even wear across all four tires, extending their life and maintaining optimal handling. We follow manufacturer-recommended rotation patterns and intervals. Our tire balancing service eliminates vibrations and uneven wear caused by weight imbalances, improving ride comfort and tire longevity.",
        "Wheel alignment is crucial for proper vehicle handling, tire wear, and fuel efficiency. Using state-of-the-art alignment equipment, we adjust your vehicle's suspension components to manufacturer specifications. Signs you need an alignment include uneven tire wear, vehicle pulling to one side, or a crooked steering wheel when driving straight.",
        "We also provide tire pressure monitoring system (TPMS) service, tire repair for repairable punctures, and can help you select the right replacement tires for your vehicle and driving needs. Our tire services help ensure safe, efficient, and comfortable driving in all conditions."
]}
      benefits={[
        "Professional tire rotation following manufacturer patterns",
        "Precision wheel balancing to eliminate vibrations",
        "State-of-the-art computerized wheel alignment",
        "TPMS service and sensor replacement",
        "Tire pressure checks and adjustments",
        "Tire repair for qualifying punctures",
        "Honest tire wear assessment and recommendations",
        "Help selecting appropriate replacement tires",
        "Road hazard inspection and advice",
        "Extended tire life through proper maintenance"
]}
      image="/images/tire-services.jpg"
      relatedServices={relatedServices}
    />
  )
}