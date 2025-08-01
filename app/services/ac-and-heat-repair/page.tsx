import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'AC & Heating Repair | Climate Control Service | Rohnert Park Transmission',
  description: 'Complete HVAC service to keep you comfortable year-round. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'AC & Heating Repair | Climate Control Service | Rohnert Park Transmission',
    description: 'Complete HVAC service to keep you comfortable year-round. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Water Pump Service",
    "href": "/services/water-pump-service"
  },
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  },
  {
    "name": "Check Engine Light",
    "href": "/services/check-engine-light"
  }
]

export default function ACHeatRepairPage() {
  return (
    <ServicePageTemplate
      title="AC & Heat Repair"
      description="Complete HVAC service to keep you comfortable year-round."
      longDescription={[
        "Stay comfortable in any weather with expert AC and heating repair from Rohnert Park Transmission & Auto Repair. Our certified technicians service all types of automotive climate control systems, from simple repairs to complete system overhauls. We use the latest equipment to diagnose and repair HVAC issues quickly and effectively.",
        "For air conditioning service, we perform complete system evaluations including refrigerant level checks, leak detection, compressor testing, and component inspection. We're equipped to handle R-134a and R-1234yf refrigerants, ensuring proper service for both older and newer vehicles. Our AC services restore cooling performance and improve fuel efficiency.",
        "Heating system problems can make winter driving uncomfortable and unsafe. We diagnose and repair issues with heater cores, blower motors, thermostats, and coolant systems that affect heating performance. We also service dual-zone and automatic climate control systems found in many modern vehicles.",
        "Regular HVAC maintenance can prevent costly repairs and ensure year-round comfort. We recommend annual AC service before summer and heating system checks before winter. Our preventive maintenance includes cleaning, adjustment, and minor repairs that keep your climate control system running efficiently."
]}
      benefits={[
        "Complete AC system diagnosis and repair",
        "EPA certified refrigerant handling",
        "Leak detection and repair services",
        "Heater core service and replacement",
        "Blower motor repair and replacement",
        "Cabin air filter replacement",
        "Climate control system diagnostics",
        "Evacuation and recharge services",
        "Performance testing after repairs",
        "Preventive maintenance to avoid breakdowns"
]}
      image="/images/ac-and-heat-repair.jpg"
      relatedServices={relatedServices}
    />
  )
}