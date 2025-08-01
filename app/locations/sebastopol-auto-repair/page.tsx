import { LocationPageTemplate, generateLocationMetadata } from '@/app/components/LocationPageTemplate'

const city = "Sebastopol"
const description = "Trusted auto repair services for Sebastopol residents. Expert transmission repair, comprehensive automotive care, and honest service just 15 minutes from downtown Sebastopol."

export const metadata = generateLocationMetadata(city, description)

const longDescription = [
  "Sebastopol residents have discovered that the short drive to Rohnert Park Transmission is well worth it for superior automotive care. Located just 15 minutes east of downtown Sebastopol, our shop has become the preferred choice for environmentally conscious Sebastopol drivers who appreciate our commitment to proper fluid recycling and eco-friendly practices. We understand the values that make Sebastopol unique and bring that same conscientious approach to every repair.",
  
  "Our expertise extends to the diverse mix of vehicles common in Sebastopol, from hybrid and electric vehicles to classic cars and agricultural equipment. Many Sebastopol residents initially find us when searching for transmission specialists, but they return for all their automotive needs because of our comprehensive service and transparent communication. We've serviced vehicles from every corner of Sebastopol, from the Barlow marketplace area to the rural properties along Bodega Highway.",
  
  "What distinguishes our service for Sebastopol customers is our holistic approach to vehicle maintenance. We don't just fix problems – we help you understand how to extend your vehicle's life and improve its efficiency. This philosophy resonates with Sebastopol's sustainability-minded community. Our detailed inspections often identify small issues before they become major problems, saving our Sebastopol customers significant money and reducing environmental impact through preventive care."
]

const whyChooseUs = [
  "Quick 15-minute drive from downtown Sebastopol via Highway 116",
  "Eco-friendly practices align with Sebastopol's environmental values",
  "Experience with hybrid and electric vehicles popular in Sebastopol",
  "Support from Sebastopol's artistic and agricultural communities",
  "Transparent pricing that reflects Sebastopol's community values",
  "Convenient location avoids congestion around Sebastopol's downtown"
]

const localTestimonials = [
  {
    name: "Patricia G.",
    vehicle: "2019 Toyota Prius",
    review: "As a Sebastopol resident who values environmental responsibility, I appreciate how Rohnert Park Transmission handles recycling and uses eco-friendly products when possible. Plus, their hybrid expertise is outstanding!",
    rating: 5
  },
  {
    name: "Mark D.",
    vehicle: "1972 VW Bus",
    review: "They understand classic vehicles! My vintage VW Bus needed transmission work, and they treated it with the care it deserves. The drive from Sebastopol is easy, and their expertise is unmatched.",
    rating: 5
  },
  {
    name: "Jennifer S.",
    vehicle: "2018 Subaru Crosstrek",
    review: "I run a small farm outside Sebastopol and need reliable vehicles. Rohnert Park Transmission maintains our entire fleet. Their honesty and fair pricing keep me coming back year after year.",
    rating: 5
  }
]

const landmarks = [
  "15 minutes from The Barlow marketplace via Highway 116",
  "Convenient to Sebastopol residents along Bodega Highway",
  "Easy access from Highway 12 and Highway 116 intersection",
  "Near Whole Foods and shopping for errands during service",
  "Simple route avoiding downtown Sebastopol traffic"
]

const directions = [
  "From Downtown Sebastopol, head east on Highway 116 (Gravenstein Highway)",
  "Continue on Highway 116 for approximately 7 miles",
  "Turn left onto Stony Point Road",
  "Continue north for 2 miles to Rohnert Park Expressway",
  "Turn right on Rohnert Park Expressway, then left on Commerce Boulevard",
  "Turn right onto Laguna Drive - we're on the right at 305 Laguna Dr"
]

const nearbyAreas = [
  "Downtown Sebastopol",
  "The Barlow District",
  "Bloomfield",
  "Graton",
  "Gold Ridge"
]

export default function SebastopolAutoRepairPage() {
  return (
    <LocationPageTemplate
      city={city}
      cityDescription="Providing Sebastopol drivers with eco-conscious auto repair services. Expert transmission specialists with a commitment to quality and environmental responsibility."
      distance="11 miles"
      driveTime="15-20 minutes"
      population="7,700+"
      landmarks={landmarks}
      longDescription={longDescription}
      whyChooseUs={whyChooseUs}
      localTestimonials={localTestimonials}
      directions={directions}
      nearbyAreas={nearbyAreas}
    />
  )
}