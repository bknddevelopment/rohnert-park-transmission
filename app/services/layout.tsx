import { ReactNode } from 'react'

export async function generateStaticParams() {
  const services = [
    'transmission-service',
    'brake-and-rotor-repair',
    'engine-tune-up',
    'maintenance-schedule',
    'check-engine-light',
    'water-pump-service',
    'ac-and-heat-repair',
    'tire-services',
    'fuel-system-service',
    'transfer-case-repair',
    'differential-service-and-repair'
  ]

  return services.map((service) => ({
    service: service
  }))
}

export default function ServicesLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}