import React from 'react';
import { LocationPageTemplate } from '../../../components/LocationPageTemplate';

const HealdsburgAutoRepair = () => {
  const content = {
    city: "Healdsburg",
    intro: `When your vehicle needs expert care in Healdsburg, Rohnert Transmission is your trusted partner in automotive excellence. Located just 25 miles south in Rohnert Park, we've been the go-to choice for Healdsburg residents seeking professional transmission repair, comprehensive auto services, and honest, reliable maintenance for over two decades.

Our convenient location at 7099 Redwood Drive makes us easily accessible via Highway 101, providing Healdsburg drivers with a dependable alternative to local shops. Whether you're dealing with transmission issues, need routine maintenance, or require complex repairs, our ASE-certified technicians deliver the expertise and personalized service that has made us the North Bay's most trusted automotive facility.`,

    whyChoose: `Healdsburg residents consistently choose Rohnert Transmission for our unmatched combination of technical expertise, fair pricing, and exceptional customer service. As a family-owned business deeply rooted in Sonoma County, we understand the unique needs of North Bay drivers and the importance of keeping your vehicle running reliably on our diverse roads—from Highway 101 commutes to wine country adventures.

Our state-of-the-art facility features the latest diagnostic equipment and specialized tools necessary for servicing all makes and models, from classic American trucks to modern European luxury vehicles. This comprehensive capability means you never have to compromise on quality or travel to multiple shops for different services. Our master technicians undergo continuous training to stay current with evolving automotive technology, ensuring your vehicle receives the most advanced care available.

What truly sets us apart is our commitment to transparency and education. We believe in empowering our customers with knowledge about their vehicles. That's why we take time to explain diagnoses clearly, provide detailed estimates before any work begins, and offer honest recommendations based on your vehicle's actual needs—not our bottom line. This approach has earned us a reputation throughout Healdsburg and beyond as the shop that treats customers like family.`,

    services: [
      {
        name: "Transmission Services",
        description: "From minor adjustments to complete rebuilds, our transmission specialists have the expertise to handle any issue. We service automatic, manual, and CVT transmissions for all makes and models, using only high-quality parts and fluids."
      },
      {
        name: "Complete Auto Repair",
        description: "Our ASE-certified technicians provide comprehensive automotive services including engine diagnostics, brake repair, suspension work, and electrical system troubleshooting. One stop for all your vehicle's needs."
      },
      {
        name: "Preventive Maintenance",
        description: "Protect your investment with our thorough maintenance services. From oil changes and fluid flushes to timing belt replacements and tune-ups, we help Healdsburg drivers avoid costly repairs through proactive care."
      },
      {
        name: "Fleet Services",
        description: "We understand the importance of keeping business vehicles on the road. Our fleet maintenance programs are customized for Healdsburg's wineries, contractors, and businesses, minimizing downtime and maximizing reliability."
      }
    ],

    journey: `Making the drive from Healdsburg to Rohnert Transmission is straightforward and scenic. Simply take Highway 101 south for approximately 25 miles—about a 30-minute drive during normal traffic conditions. Exit at Rohnert Park Expressway and head west, then turn right on Commerce Boulevard and left on Redwood Drive. You'll find us at 7099 Redwood Drive, easily recognizable by our welcoming facility and ample parking.

Many Healdsburg customers combine their visit with errands in Rohnert Park's shopping areas or enjoy lunch at nearby restaurants while their vehicle is being serviced. Our comfortable waiting area offers complimentary Wi-Fi, refreshments, and a clean, professional environment where you can work or relax. For those who need to return to Healdsburg, we're happy to arrange transportation options or coordinate with local services.

The drive along Highway 101 through Sonoma County's beautiful landscape makes the trip to our shop pleasant and stress-free. Our location near the Rohnert Park Expressway provides easy access without the congestion often found in busier commercial areas, and our flexible scheduling ensures minimal disruption to your day.`,

    choose: `Residents throughout Healdsburg trust Rohnert Transmission because we deliver on our promises. When you bring your vehicle to us, you're not just another customer—you're a neighbor deserving of honest service and fair treatment. Our technicians approach every vehicle with the same care and attention they would give their own family's cars.

We pride ourselves on accurate diagnostics that identify root causes, not just symptoms. This thorough approach prevents repeat visits and ensures repairs are done right the first time. Our written warranties provide peace of mind, while our competitive pricing ensures you receive exceptional value. From vintage trucks used in Healdsburg's agricultural operations to luxury vehicles navigating wine country roads, we have the expertise to keep your vehicle performing at its best.

Our commitment extends beyond the repair bay. We maintain detailed service records for your vehicle, send helpful maintenance reminders, and are always available to answer questions about your car's care. This comprehensive approach to customer service has made us Healdsburg's preferred choice for drivers who value quality, honesty, and long-term vehicle reliability.`,

    cta: `Don't let automotive issues disrupt your Healdsburg lifestyle. Contact Rohnert Transmission today at (707) 584-3451 to schedule your service appointment. Our friendly staff is ready to answer your questions, provide accurate estimates, and get your vehicle back on the road quickly and safely.

Experience the difference that comes from working with Sonoma County's most trusted automotive professionals. Whether you need emergency repairs or routine maintenance, we're here to serve Healdsburg drivers with excellence, integrity, and the technical expertise your vehicle deserves. Visit us at 7099 Redwood Drive in Rohnert Park, where quality service and customer satisfaction drive everything we do.`,

    distance: "25 miles",
    driveTime: "30 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default HealdsburgAutoRepair;