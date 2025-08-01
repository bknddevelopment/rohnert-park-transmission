import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Brake & Rotor Repair Service | Expert Brake Shop | Rohnert Park Transmission',
  description: 'Professional brake and rotor repair to ensure your safety on the road. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Brake & Rotor Repair Service | Expert Brake Shop | Rohnert Park Transmission',
    description: 'Professional brake and rotor repair to ensure your safety on the road. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  },
  {
    "name": "Tire Services",
    "href": "/services/tire-services"
  },
  {
    "name": "Check Engine Light",
    "href": "/services/check-engine-light"
  }
]

export default function BrakeRotorRepairPage() {
  return (
    <ServicePageTemplate
      title="Brake & Rotor Repair"
      description="Professional brake and rotor repair to ensure your safety on the road."
      longDescription={[
        "Your vehicle's braking system is crucial for your safety and the safety of others on the road. At Rohnert Park Transmission & Auto Repair, we provide comprehensive brake and rotor services that ensure optimal stopping power and performance. Our ASE certified technicians have the expertise to service all types of braking systems.",
        "We perform thorough brake inspections to identify wear patterns and potential issues before they compromise your safety. Our services include brake pad replacement, rotor resurfacing or replacement, brake fluid flushes, caliper service, and complete brake system overhauls. We use high-quality parts that meet or exceed OEM specifications.",
        "Common signs that you need brake service include squealing or grinding noises, vibration when braking, longer stopping distances, or a brake pedal that feels soft or spongy. Don't ignore these warning signs – prompt attention to brake issues can prevent more expensive repairs and ensure your safety.",
        "We believe in transparent service and will always show you the condition of your brake components. Our technicians will explain what needs to be done and provide you with options that fit your budget and driving needs. All brake work is backed by our 2-year/24,000-mile warranty."
]}
      benefits={[
        "Complete brake system inspection with every service",
        "High-quality brake pads and rotors from trusted manufacturers",
        "Precision rotor resurfacing when possible to save you money",
        "Brake fluid testing and replacement services",
        "Caliper service and replacement",
        "ABS system diagnostics and repair",
        "Emergency brake adjustment and repair",
        "Competitive pricing with no hidden fees",
        "Same-day service for most brake repairs",
        "Free brake inspection with any service"
]}
      image="/images/brake-and-rotor-repair.jpg"
      relatedServices={relatedServices}
    />
  )
}