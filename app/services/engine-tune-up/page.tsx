import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Engine Tune-Up Service | Improve Performance & Fuel Economy | Rohnert Park Transmission',
  description: 'Comprehensive engine tune-up services to restore power and efficiency. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Engine Tune-Up Service | Improve Performance & Fuel Economy | Rohnert Park Transmission',
    description: 'Comprehensive engine tune-up services to restore power and efficiency. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Check Engine Light",
    "href": "/services/check-engine-light"
  },
  {
    "name": "Fuel System Service",
    "href": "/services/fuel-system-service"
  },
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  }
]

export default function EngineTuneUpPage() {
  return (
    <ServicePageTemplate
      title="Engine Tune-Up"
      description="Comprehensive engine tune-up services to restore power and efficiency."
      longDescription={[
        "A properly tuned engine runs more efficiently, uses less fuel, and produces fewer emissions. At Rohnert Park Transmission & Auto Repair, our comprehensive engine tune-up services are designed to restore your vehicle's performance and improve fuel economy. Our ASE certified technicians use the latest diagnostic equipment to ensure your engine is running at its best.",
        "Modern vehicles require different tune-up services than older models, but the goal remains the same: optimal engine performance. Our tune-up services include spark plug replacement, ignition system service, fuel system cleaning, air filter replacement, and comprehensive engine diagnostics. We also check and adjust engine timing and idle speed when applicable.",
        "Signs that your vehicle may need a tune-up include rough idling, poor fuel economy, difficulty starting, engine misfires, or lack of power during acceleration. Regular tune-ups according to your manufacturer's schedule can prevent these issues and extend the life of your engine.",
        "We customize our tune-up services based on your vehicle's specific needs and manufacturer recommendations. Whether you drive a newer vehicle that needs minimal service or an older vehicle requiring more comprehensive attention, we have the expertise to keep your engine running smoothly."
]}
      benefits={[
        "Improved fuel economy and reduced emissions",
        "Restored engine power and performance",
        "Smoother idle and better acceleration",
        "Extended engine life through preventive maintenance",
        "Comprehensive engine diagnostics included",
        "Quality OEM or better replacement parts",
        "Service tailored to your vehicle's specific needs",
        "Detailed inspection report with recommendations",
        "Competitive pricing with upfront estimates",
        "Environmentally responsible disposal of old parts"
]}
      image="/images/engine-tune-up.jpg"
      relatedServices={relatedServices}
    />
  )
}