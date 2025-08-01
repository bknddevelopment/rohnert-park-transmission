import { LocationPageTemplate, generateLocationMetadata } from '../../components/LocationPageTemplate'

const city = "Windsor"
const description = "Professional auto repair services for Windsor residents. Expert transmission specialists and complete automotive care just 20 minutes south. Trusted since 1997."

export const metadata = generateLocationMetadata(city, description)

const longDescription = [
  "Windsor residents seeking exceptional auto repair services have made Rohnert Park Transmission their trusted choice for over two decades. Though located just 20 minutes south via Highway 101, many Windsor families consider the drive a small investment for the superior service and significant savings compared to local dealerships. Our reputation has spread throughout Windsor through word-of-mouth recommendations from satisfied customers who appreciate our combination of technical expertise and honest business practices.",
  
  "We understand the specific needs of Windsor drivers, from families navigating the growing Town Green area to agricultural businesses operating in the surrounding countryside. Our technicians are experienced with the full range of vehicles common in Windsor, including work trucks, family SUVs, and the luxury vehicles from Windsor's upscale neighborhoods. Many Windsor customers first discover us when facing complex transmission issues, but they become long-term clients for all their automotive needs.",
  
  "Our commitment to transparency and education sets us apart for Windsor customers. We provide detailed digital inspections with photos and videos, making it easy to understand your vehicle's condition. This is particularly valuable for Windsor residents who want to make informed decisions about their vehicle maintenance. Our competitive pricing, combined with our industry-leading warranty, often saves Windsor customers hundreds or even thousands compared to dealership quotes, making the short drive more than worthwhile."
]

const whyChooseUs = [
  "Straight shot down Highway 101 - just 20 minutes from Windsor Town Green",
  "Significant savings compared to Santa Rosa and Windsor dealerships",
  "Free digital inspection reports emailed directly to Windsor customers",
  "Expertise with trucks and agricultural equipment common in Windsor",
  "Flexible scheduling to minimize trips from Windsor",
  "Many Windsor customers combine service with Rohnert Park shopping"
]

const localTestimonials = [
  {
    name: "Steve R.",
    vehicle: "2017 GMC Sierra 2500",
    review: "I own a landscaping business in Windsor and trust all my work trucks to Rohnert Park Transmission. The 20-minute drive saves me thousands compared to dealer prices, and their work is always perfect.",
    rating: 5
  },
  {
    name: "Michelle T.",
    vehicle: "2019 Mercedes GLE",
    review: "Was quoted $4,000 for transmission work at the dealership. Rohnert Park Transmission did the job for half that price with a better warranty. Now I drive down from Windsor for all my service needs!",
    rating: 5
  },
  {
    name: "Dan K.",
    vehicle: "2016 Ford Explorer",
    review: "Living in Windsor, I tried several local shops before finding Rohnert Park Transmission. Nobody else could properly diagnose my transmission issue. They fixed it right the first time. Worth every minute of the drive!",
    rating: 5
  }
]

const landmarks = [
  "20 minutes south of Windsor Town Green via Highway 101",
  "Convenient stop between Windsor and San Francisco Bay Area",
  "Near Graton Resort Casino for those combining errands",
  "Easy access from both Old Redwood Highway and Highway 101",
  "Close to major shopping centers for convenience"
]

const directions = [
  "From Windsor Town Green, head south on Highway 101",
  "Continue on Highway 101 South for approximately 15 miles",
  "Take Exit 481 for Rohnert Park Expressway",
  "Turn right onto Rohnert Park Expressway",
  "Continue for 1.5 miles, then turn left onto Commerce Boulevard",
  "Turn right onto Laguna Drive - we're on the right at 305 Laguna Dr"
]

const nearbyAreas = [
  "Windsor Town Green",
  "Old Downtown Windsor",
  "Shiloh Ranch Regional Park Area",
  "Foothill Regional Park Area",
  "Los Amigos"
]

export default function WindsorAutoRepairPage() {
  return (
    <LocationPageTemplate
      city={city}
      cityDescription="Saving Windsor drivers thousands on auto repairs since 1997. Expert transmission specialists offering dealership quality at fair prices, just 20 minutes south."
      distance="16 miles"
      driveTime="20-25 minutes"
      population="28,000+"
      landmarks={landmarks}
      longDescription={longDescription}
      whyChooseUs={whyChooseUs}
      localTestimonials={localTestimonials}
      directions={directions}
      nearbyAreas={nearbyAreas}
    />
  )
}