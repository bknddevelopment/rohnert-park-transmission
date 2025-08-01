import Image from 'next/image'
import Link from 'next/link'
import { HeroSectionPro } from './components/HeroSectionPro'
import { ServiceShowcaseSimple } from './components/ServiceShowcaseSimple'
import { ServiceCards } from './components/ServiceCards'
import { TrustIndicators } from './components/TrustIndicators'
import { FeaturesSection } from './components/FeaturesSection'
import { AboutSection } from './components/AboutSection'
import { TeamSection } from './components/TeamSection'
import { ShopGallery } from './components/ShopGallery'
import { TestimonialsSection } from './components/TestimonialsSection'
import { BrandsSection } from './components/BrandsSection'
import { CTASection } from './components/CTASection'
import { FAQSection } from './components/FAQSection'

export default function HomePage() {
  return (
    <>
      <HeroSectionPro />
      <ServiceShowcaseSimple />
      <div className="section-divider" />
      <TrustIndicators />
      <AboutSection />
      <FeaturesSection />
      <TeamSection />
      <div className="section-divider" />
      <ShopGallery />
      <TestimonialsSection />
      <BrandsSection />
      <div className="section-divider" />
      <FAQSection />
      <CTASection />
    </>
  )
}