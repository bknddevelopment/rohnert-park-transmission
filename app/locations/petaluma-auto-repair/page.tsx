import { LocationPageTemplate, generateLocationMetadata } from '@/app/components/LocationPageTemplate'

const city = "Petaluma"
const description = "Expert auto repair services for Petaluma residents. Professional transmission repair, brake service, and complete automotive care just minutes from historic downtown Petaluma."

export const metadata = generateLocationMetadata(city, description)

const longDescription = [
  "Petaluma residents have trusted Rohnert Park Transmission for exceptional auto repair services since 1997. Conveniently located just 15 minutes east of historic downtown Petaluma, our shop provides the perfect combination of small-town service values with state-of-the-art automotive technology. We understand the unique needs of Petaluma drivers, from agricultural vehicles navigating rural roads to daily commuters traveling Highway 101.",
  
  "Our location makes us easily accessible to all Petaluma neighborhoods, whether you're coming from the west side near Petaluma Adobe State Historic Park, the bustling downtown area around Kentucky Street, or the newer developments near McDowell Boulevard. We've built lasting relationships with Petaluma families who appreciate our honest approach and fair pricing that rivals any shop in the Petaluma area.",
  
  "What sets us apart for Petaluma customers is our comprehensive approach to vehicle care. We don't just fix the immediate problem – we help you understand your vehicle's overall health and plan for future maintenance. This proactive approach has saved countless Petaluma residents from unexpected breakdowns and costly emergency repairs. Our ASE-certified technicians treat every vehicle as if it were their own, ensuring you return to Petaluma's roads with complete confidence."
]

const whyChooseUs = [
  "Just 15 minutes from downtown Petaluma via Petaluma Boulevard North",
  "Specialized experience with farm equipment and work vehicles common in Petaluma",
  "Family-owned values that match Petaluma's community spirit",
  "Free vehicle inspection with every service for Petaluma customers",
  "Relationships with Petaluma fleet managers and local businesses",
  "Convenient location avoids downtown Petaluma traffic and parking hassles"
]

const localTestimonials = [
  {
    name: "David M.",
    vehicle: "2017 Chevrolet Silverado",
    review: "Living in west Petaluma, I was looking for a transmission shop I could trust. Rohnert Park Transmission exceeded all expectations. They rebuilt my work truck's transmission and it's running better than new. The drive is worth it!",
    rating: 5
  },
  {
    name: "Sarah T.",
    vehicle: "2019 Subaru Outback",
    review: "I manage a small farm in Petaluma and rely on my vehicles daily. These guys understand that and always prioritize getting me back on the road quickly. Their honesty and expertise keep me coming back.",
    rating: 5
  },
  {
    name: "Tom H.",
    vehicle: "2016 Toyota Tacoma",
    review: "After getting overcharged by shops in Petaluma, a friend recommended Rohnert Park Transmission. Best automotive decision I've made! Fair prices, excellent work, and they stand behind their warranty.",
    rating: 5
  }
]

const landmarks = [
  "15 minutes east of Historic Downtown Petaluma via Highway 101",
  "Convenient to Petaluma Valley Hospital area residents",
  "Near the Highway 101 and Highway 116 interchange",
  "Easy access from both East and West Petaluma",
  "Close to Petaluma Village Premium Outlets for shopping while you wait"
]

const directions = [
  "From Downtown Petaluma, head east on Washington Street toward Highway 101",
  "Take Highway 101 North for approximately 4 miles",
  "Take Exit 481 for Rohnert Park Expressway",
  "Turn left onto Rohnert Park Expressway, crossing over the freeway",
  "Continue for 1.5 miles, then turn left onto Commerce Boulevard",
  "Turn right onto Laguna Drive - we're on the right at 305 Laguna Dr"
]

const nearbyAreas = [
  "East Petaluma",
  "West Petaluma",
  "Petaluma Historic District",
  "Adobe Road Corridor",
  "Lakeville District"
]

export default function PetalumaAutoRepairPage() {
  return (
    <LocationPageTemplate
      city={city}
      cityDescription="Serving Petaluma's automotive needs with honest, reliable service. Your trusted alternative to dealership repairs, just 15 minutes from downtown."
      distance="12 miles"
      driveTime="15-20 minutes"
      population="60,000+"
      landmarks={landmarks}
      longDescription={longDescription}
      whyChooseUs={whyChooseUs}
      localTestimonials={localTestimonials}
      directions={directions}
      nearbyAreas={nearbyAreas}
    />
  )
}