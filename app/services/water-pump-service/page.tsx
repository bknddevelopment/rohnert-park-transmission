import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Water Pump Replacement & Cooling System Service | Rohnert Park Transmission',
  description: 'Expert water pump and cooling system service to prevent overheating. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Water Pump Replacement & Cooling System Service | Rohnert Park Transmission',
    description: 'Expert water pump and cooling system service to prevent overheating. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Maintenance Schedule",
    "href": "/services/maintenance-schedule"
  },
  {
    "name": "Engine Tune-Up",
    "href": "/services/engine-tune-up"
  },
  {
    "name": "AC & Heat Repair",
    "href": "/services/ac-and-heat-repair"
  }
]

export default function WaterPumpServicePage() {
  return (
    <ServicePageTemplate
      title="Water Pump Service"
      description="Expert water pump and cooling system service to prevent overheating."
      longDescription={[
        "Your vehicle's water pump is essential for maintaining proper engine temperature by circulating coolant throughout the cooling system. At Rohnert Park Transmission & Auto Repair, we provide expert water pump service and replacement to prevent overheating and protect your engine from costly damage.",
        "A failing water pump can lead to engine overheating, which can cause severe damage including warped cylinder heads, blown head gaskets, and complete engine failure. Our technicians are skilled at identifying water pump problems early through visual inspections, pressure testing, and careful monitoring of cooling system performance.",
        "Common signs of water pump failure include coolant leaks, engine overheating, unusual noises from the front of the engine, and steam coming from under the hood. We also check for worn bearings, damaged impellers, and seal failures that can compromise water pump function.",
        "When replacing a water pump, we perform a complete cooling system service including flushing the system, replacing the thermostat if needed, installing new hoses and belts, and refilling with the correct type and mixture of coolant. This comprehensive approach ensures your entire cooling system functions properly."
]}
      benefits={[
        "Expert diagnosis of cooling system problems",
        "Quality replacement water pumps from trusted brands",
        "Complete cooling system flush and refill",
        "Thermostat testing and replacement if needed",
        "Belt and hose inspection and replacement",
        "Pressure testing to verify system integrity",
        "Proper coolant mixture for optimal protection",
        "Prevention of costly engine damage from overheating",
        "Extended engine life through proper cooling",
        "Competitive pricing on water pump replacement"
]}
      image="/images/water-pump-service.jpg"
      relatedServices={relatedServices}
    />
  )
}