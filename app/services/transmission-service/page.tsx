import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Transmission Service & Repair | Expert Transmission Shop',
  description: 'Professional transmission service in Rohnert Park, CA. Expert repair, rebuild, and maintenance for all makes and models. ATRA certified shop with 2-year warranty.',
  openGraph: {
    title: 'Transmission Service & Repair | Rohnert Park Transmission',
    description: 'Expert transmission repair and service. ATRA certified, family-owned since 1997.',
  }
}

const relatedServices = [
  { name: 'Differential Service', href: '/services/differential-service-and-repair' },
  { name: 'Transfer Case Repair', href: '/services/transfer-case-repair' },
  { name: 'Check Engine Light', href: '/services/check-engine-light' },
]

export default function TransmissionServicePage() {
  return (
    <ServicePageTemplate
      title="Transmission Service"
      description="Keep your transmission running smoothly with expert service from ATRA certified technicians."
      longDescription={[
        "Your vehicle's transmission is one of its most complex and vital components. At Rohnert Park Transmission & Auto Repair, we specialize in comprehensive transmission services that keep your vehicle shifting smoothly and efficiently. As an ATRA (Automatic Transmission Rebuilders Association) certified shop, we maintain the highest standards in transmission repair and service.",
        "Our expert technicians use advanced diagnostic equipment to accurately identify transmission issues before they become major problems. Whether you're experiencing slipping gears, delayed engagement, fluid leaks, or unusual noises, we have the expertise to diagnose and resolve the issue quickly and effectively.",
        "We offer a full range of transmission services including fluid changes, filter replacements, complete rebuilds, and clutch repairs for manual transmissions. Our preventive maintenance services can extend the life of your transmission and help you avoid costly repairs down the road. We service all makes and models, from domestic to import vehicles.",
        "When you choose Rohnert Park Transmission for your transmission service, you're choosing over 25 years of experience and a commitment to quality. We use only high-quality parts and fluids that meet or exceed manufacturer specifications, and all our transmission work is backed by our comprehensive 2-year/24,000-mile warranty."
      ]}
      benefits={[
        "ATRA certified transmission specialists with extensive training",
        "Advanced computer diagnostics for accurate problem identification",
        "Complete transmission rebuilds and repairs",
        "Preventive maintenance to extend transmission life",
        "Free transmission inspection with every service",
        "Quality parts that meet OEM specifications",
        "2-year/24,000-mile warranty on all transmission work",
        "Honest recommendations and transparent pricing",
        "Service for automatic, manual, and CVT transmissions",
        "Same-day service for most transmission fluid changes"
      ]}
      image="/images/transmission-service.jpg"
      relatedServices={relatedServices}
    />
  )
}