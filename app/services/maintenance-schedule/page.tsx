import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Preventive Maintenance Schedule | Factory Recommended Service | Rohnert Park Transmission',
  description: 'Stay ahead of problems with scheduled maintenance services. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Preventive Maintenance Schedule | Factory Recommended Service | Rohnert Park Transmission',
    description: 'Stay ahead of problems with scheduled maintenance services. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Engine Tune-Up",
    "href": "/services/engine-tune-up"
  },
  {
    "name": "Transmission Service",
    "href": "/services/transmission-service"
  },
  {
    "name": "Brake & Rotor Repair",
    "href": "/services/brake-and-rotor-repair"
  }
]

export default function MaintenanceSchedulePage() {
  return (
    <ServicePageTemplate
      title="Maintenance Schedule"
      description="Stay ahead of problems with scheduled maintenance services."
      longDescription={[
        "Regular maintenance is the key to keeping your vehicle reliable, safe, and efficient. At Rohnert Park Transmission & Auto Repair, we follow manufacturer-recommended maintenance schedules to ensure your vehicle receives the right service at the right time. Our preventive maintenance approach helps you avoid costly repairs and extends the life of your vehicle.",
        "Every vehicle has specific maintenance requirements based on its make, model, and driving conditions. We maintain detailed service records and will remind you when services are due. Our comprehensive maintenance services include oil changes, filter replacements, fluid checks and changes, belt and hose inspections, battery service, and multi-point inspections.",
        "Following a proper maintenance schedule offers numerous benefits including improved fuel economy, enhanced safety, maintained warranty coverage, higher resale value, and fewer unexpected breakdowns. We make it easy to stay on schedule with convenient appointment times and efficient service.",
        "Our technicians will review your vehicle's maintenance history and current condition to create a customized service plan. We'll prioritize services based on safety and necessity, helping you budget for upcoming maintenance needs. With our maintenance services, you can drive with confidence knowing your vehicle is properly cared for."
]}
      benefits={[
        "Customized maintenance schedules based on manufacturer recommendations",
        "Detailed service records maintained for your vehicle",
        "Automatic service reminders when maintenance is due",
        "Multi-point inspections to catch problems early",
        "Priority scheduling for regular maintenance customers",
        "Bundled service pricing for multiple maintenance items",
        "Extended vehicle life and reliability",
        "Maintained manufacturer warranty compliance",
        "Improved fuel economy and performance",
        "Peace of mind with preventive care"
]}
      image="/images/maintenance-schedule.jpg"
      relatedServices={relatedServices}
    />
  )
}