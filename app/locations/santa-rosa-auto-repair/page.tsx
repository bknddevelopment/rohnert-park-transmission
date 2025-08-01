import { LocationPageTemplate, generateLocationMetadata } from '../../components/LocationPageTemplate'

const city = "Santa Rosa"
const description = "Professional auto repair services for Santa Rosa residents. Expert transmission repair, brake service, and complete automotive care just minutes from downtown Santa Rosa."

export const metadata = generateLocationMetadata(city, description)

const longDescription = [
  "When Santa Rosa residents need reliable auto repair services, they turn to Rohnert Park Transmission. Located just 10 minutes south of downtown Santa Rosa, our family-owned shop has been the trusted choice for vehicle maintenance and repair since 1997. We understand the unique needs of Santa Rosa drivers, from daily commuters on Highway 101 to families navigating the busy streets around Coddingtown Mall and Montgomery Village.",
  
  "Our ASE-certified technicians specialize in all aspects of automotive repair, with particular expertise in transmission service that has made us the go-to shop for Santa Rosa's diverse vehicle population. Whether you drive through the historic Railroad Square district, commute to Kaiser Permanente, or navigate the hills near Annadel State Park, we ensure your vehicle performs reliably in all conditions.",
  
  "Santa Rosa residents appreciate our transparent approach to auto repair. We provide detailed inspections, clear explanations, and upfront pricing before any work begins. Our state-of-the-art facility uses the latest diagnostic equipment to accurately identify issues, saving you time and money. Plus, with our industry-leading 2-year/24,000-mile warranty, you can drive with confidence knowing your investment is protected."
]

const whyChooseUs = [
  "Quick 10-minute drive from downtown Santa Rosa via Highway 101 or Stony Point Road",
  "Free shuttle service available for Santa Rosa customers while your vehicle is being serviced",
  "Expertise with all makes and models popular in Santa Rosa, from work trucks to luxury vehicles",
  "Convenient online booking system - schedule service anytime from your Santa Rosa home or office",
  "Competitive pricing that beats most Santa Rosa dealerships while maintaining superior quality",
  "Established relationships with Santa Rosa insurance companies for smooth claim processing"
]

const localTestimonials = [
  {
    name: "Michael R.",
    vehicle: "2018 Honda Accord",
    review: "I've been driving from Santa Rosa to Rohnert Park Transmission for years. The short drive is worth it for their honest service and fair prices. They fixed my transmission issue that two Santa Rosa shops couldn't diagnose.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    vehicle: "2020 Toyota Highlander",
    review: "As a busy mom in Santa Rosa, I need reliable service. Rohnert Park Transmission always fits me in quickly and their shuttle service makes it so convenient. They've maintained both our family vehicles for 5 years now.",
    rating: 5
  },
  {
    name: "Robert K.",
    vehicle: "2019 Ford F-150",
    review: "Found them when looking for transmission specialists near Santa Rosa. Not only did they rebuild my F-150's transmission perfectly, but they also identified and fixed other issues at a fair price. Highly recommend!",
    rating: 5
  }
]

const landmarks = [
  "Just 5 miles south of Coddingtown Mall via Highway 101",
  "10 minutes from Kaiser Permanente Santa Rosa Medical Center",
  "Near the Rohnert Park Expressway exit, easily accessible from all Santa Rosa neighborhoods",
  "Close to Santa Rosa Junior College - perfect for student vehicle services",
  "Minutes from Charles M. Schulz Sonoma County Airport"
]

const directions = [
  "From downtown Santa Rosa, take Highway 101 South for approximately 8 miles",
  "Take Exit 481 for Rohnert Park Expressway",
  "Turn right onto Rohnert Park Expressway",
  "Continue for 1.5 miles, then turn left onto Commerce Boulevard",
  "Turn right onto Laguna Drive - we're on the right at 305 Laguna Dr"
]

const nearbyAreas = [
  "Bennett Valley",
  "Rincon Valley",
  "West End Santa Rosa",
  "Roseland",
  "Fountaingrove"
]

export default function SantaRosaAutoRepairPage() {
  return (
    <LocationPageTemplate
      city={city}
      cityDescription="Trusted by Santa Rosa drivers for over 25 years, offering expert transmission repair and comprehensive auto services just minutes from downtown."
      distance="10 miles"
      driveTime="10-15 minutes"
      population="175,000+"
      landmarks={landmarks}
      longDescription={longDescription}
      whyChooseUs={whyChooseUs}
      localTestimonials={localTestimonials}
      directions={directions}
      nearbyAreas={nearbyAreas}
    />
  )
}