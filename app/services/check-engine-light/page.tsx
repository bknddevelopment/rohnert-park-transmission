import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Check Engine Light Diagnosis | Expert Diagnostic Service | Rohnert Park Transmission',
  description: 'Advanced diagnostics to identify and resolve check engine light issues. Call (707) 584-7727 for expert service in Rohnert Park, CA.',
  openGraph: {
    title: 'Check Engine Light Diagnosis | Expert Diagnostic Service | Rohnert Park Transmission',
    description: 'Advanced diagnostics to identify and resolve check engine light issues. ASE certified technicians, 2-year warranty.',
  }
}

const relatedServices = [
  {
    "name": "Engine Tune-Up",
    "href": "/services/engine-tune-up"
  },
  {
    "name": "Fuel System Service",
    "href": "/services/fuel-system-service"
  },
  {
    "name": "Transmission Service",
    "href": "/services/transmission-service"
  }
]

export default function CheckEngineLightPage() {
  return (
    <ServicePageTemplate
      title="Check Engine Light"
      description="Advanced diagnostics to identify and resolve check engine light issues."
      longDescription={[
        "When your check engine light comes on, it's your vehicle's way of telling you something needs attention. At Rohnert Park Transmission & Auto Repair, we use state-of-the-art diagnostic equipment to quickly and accurately identify the cause of your check engine light. Our ASE certified technicians are experts at interpreting diagnostic codes and determining the necessary repairs.",
        "The check engine light can indicate issues ranging from minor problems like a loose gas cap to more serious engine or emission system malfunctions. Our comprehensive diagnostic process goes beyond simply reading codes – we perform thorough testing to identify the root cause of the problem and prevent recurring issues.",
        "Common causes of check engine lights include oxygen sensor failures, catalytic converter issues, mass airflow sensor problems, ignition coil or spark plug failures, and emission control system malfunctions. Whatever the cause, we'll explain the issue clearly and provide you with repair options that fit your needs and budget.",
        "Ignoring a check engine light can lead to decreased fuel economy, increased emissions, and potential damage to expensive components like the catalytic converter. Our quick diagnostic service helps you address issues promptly, saving money and preventing further damage to your vehicle."
]}
      benefits={[
        "Advanced OBD-II diagnostic scanning equipment",
        "Expert interpretation of diagnostic trouble codes",
        "Comprehensive testing to identify root causes",
        "Clear explanation of issues and repair options",
        "Accurate estimates before any work begins",
        "Quick turnaround on most diagnostic services",
        "Prevention of costly component damage",
        "Emission system diagnostics and repair",
        "Road testing to verify repair effectiveness",
        "Follow-up service to ensure problem resolution"
]}
      image="/images/check-engine-light.jpg"
      relatedServices={relatedServices}
    />
  )
}