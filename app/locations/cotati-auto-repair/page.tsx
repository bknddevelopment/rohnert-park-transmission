import { LocationPageTemplate, generateLocationMetadata } from '@/app/components/LocationPageTemplate'

const city = "Cotati"
const description = "Premier auto repair services for Cotati residents. Expert transmission specialists and full-service automotive care just minutes from downtown Cotati. Family-owned since 1997."

export const metadata = generateLocationMetadata(city, description)

const longDescription = [
  "For Cotati residents, Rohnert Park Transmission is more than just a neighboring auto repair shop – we're part of the community. Located less than 5 minutes from downtown Cotati, our family-owned business has been serving Cotati drivers with the same dedication and integrity since 1997. We understand the unique character of Cotati, from its historic hexagonal plaza to its vibrant community spirit, and we bring that same sense of community to our automotive services.",
  
  "Our proximity to Cotati means we see many familiar faces, from Sonoma State University students and staff to long-time Cotati families who've trusted us for generations. We've become the preferred choice for Cotati residents who want dealership-quality service without the dealership prices or pressure. Our technicians are familiar with the driving conditions around Cotati, from the stop-and-go traffic on East Cotati Avenue to the rural roads leading to the surrounding countryside.",
  
  "What Cotati customers particularly appreciate is our straightforward, no-nonsense approach to auto repair. We provide clear explanations, honest recommendations, and fair pricing on everything from routine oil changes to complex transmission rebuilds. Our quick turnaround times mean less disruption to your daily routine, whether you're commuting to work, dropping kids at school, or enjoying Cotati's community events. Plus, being so close means you can easily drop off your vehicle and walk or get a quick ride home."
]

const whyChooseUs = [
  "Less than 5 minutes from downtown Cotati - closer than any dealership",
  "Longtime supporters of Cotati community events and local schools",
  "Flexible scheduling to accommodate Sonoma State University students and staff",
  "Walking distance from parts of Cotati - easy drop-off and pickup",
  "Same-day service available for many Cotati customers' repairs",
  "Personal relationships with many Cotati families spanning decades"
]

const localTestimonials = [
  {
    name: "Lisa M.",
    vehicle: "2018 Honda CR-V",
    review: "As a Cotati resident, having Rohnert Park Transmission so close is a blessing. They've maintained my car since I bought it, and their service is always exceptional. It's like having a trusted mechanic in the family!",
    rating: 5
  },
  {
    name: "Carlos R.",
    vehicle: "2015 Ford F-150",
    review: "I live near La Plaza Park in Cotati, and these guys are practically neighbors. They rebuilt my truck's transmission last year, and it's been perfect ever since. Honest, fair, and incredibly skilled.",
    rating: 5
  },
  {
    name: "Amanda K.",
    vehicle: "2020 Mazda CX-5",
    review: "Being a teacher in Cotati, I need reliable transportation. Rohnert Park Transmission keeps my car running perfectly and always works with my schedule. The proximity to home makes it so convenient!",
    rating: 5
  }
]

const landmarks = [
  "Less than 2 miles from Cotati's Historic Hexagonal Plaza",
  "5 minutes from Sonoma State University campus",
  "Adjacent to Oliver's Market for convenient shopping during service",
  "Near the Cotati-Rohnert Park border on Commerce Boulevard",
  "Close to the Cotati Transit Hub for alternative transportation"
]

const directions = [
  "From Downtown Cotati Plaza, head south on Old Redwood Highway",
  "Turn left onto East Cotati Avenue",
  "Continue straight as it becomes Rohnert Park Expressway",
  "After crossing Highway 101, turn left onto Commerce Boulevard",
  "Turn right onto Laguna Drive - we're on the right at 305 Laguna Dr",
  "Total drive time: 5-7 minutes from downtown Cotati"
]

const nearbyAreas = [
  "Downtown Cotati",
  "West Cotati",
  "Cotati Plaza Area",
  "Orchard View",
  "Valparaiso Avenue Corridor"
]

export default function CotatiAutoRepairPage() {
  return (
    <LocationPageTemplate
      city={city}
      cityDescription="Your neighborhood auto repair experts, proudly serving Cotati since 1997. Professional service, honest pricing, and the convenience of being just minutes from home."
      distance="2 miles"
      driveTime="5-7 minutes"
      population="7,500+"
      landmarks={landmarks}
      longDescription={longDescription}
      whyChooseUs={whyChooseUs}
      localTestimonials={localTestimonials}
      directions={directions}
      nearbyAreas={nearbyAreas}
    />
  )
}