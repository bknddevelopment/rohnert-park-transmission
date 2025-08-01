import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Fuel System Service & Repair | Improve Performance | Rohnert Park Transmission',
  description: 'Complete fuel system cleaning and repair for optimal performance. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Fuel System Service & Repair | Improve Performance | Rohnert Park Transmission',
    description: 'Complete fuel system cleaning and repair for optimal performance. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Engine Tune-Up",
    "href": "/services/engine-tune-up"
  },
  {
    "name": "Check Engine Light",
    "href": "/services/check-engine-light"
  },
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  }
]

export default function FuelSystemServicePage() {
  return (
    <ServicePageTemplate
      title="Fuel System Service"
      description="Complete fuel system cleaning and repair for optimal performance."
      longDescription={[
        "A clean, properly functioning fuel system is essential for engine performance, fuel economy, and reliability. At Rohnert Park Transmission & Auto Repair, we provide comprehensive fuel system services that restore power, improve efficiency, and prevent costly repairs. Our technicians are experts at diagnosing and resolving fuel system issues.",
        "Over time, deposits build up in fuel injectors, throttle bodies, and combustion chambers, reducing performance and fuel economy. Our fuel system cleaning service removes these deposits, restoring proper fuel flow and spray patterns. This service can resolve issues like rough idle, hesitation, poor acceleration, and increased fuel consumption.",
        "We also service fuel system components including fuel pumps, fuel filters, fuel pressure regulators, and fuel lines. Using advanced diagnostic equipment, we can test fuel pressure and volume to identify failing components before they leave you stranded. Regular fuel filter replacement is essential for protecting expensive fuel system components.",
        "For vehicles experiencing fuel system problems, we perform comprehensive diagnostics to identify issues ranging from contaminated fuel to failing sensors. Our fuel system services are designed to restore optimal performance while preventing future problems through quality repairs and preventive maintenance."
]}
      benefits={[
        "Professional fuel injection cleaning service",
        "Fuel system pressure and volume testing",
        "Fuel pump diagnosis and replacement",
        "Fuel filter replacement service",
        "Throttle body cleaning and service",
        "Fuel line inspection and repair",
        "Improved fuel economy and performance",
        "Reduced emissions and smoother idle",
        "Prevention of costly component failures",
        "Comprehensive fuel system diagnostics"
]}
      image="/images/fuel-system-service.jpg"
      relatedServices={relatedServices}
    />
  )
}