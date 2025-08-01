import React from 'react';
import { LocationPageTemplate } from '../../../components/LocationPageTemplate';

const NovatoAutoRepair = () => {
  const content = {
    city: "Novato",
    intro: `For Novato drivers seeking exceptional automotive care, Rohnert Transmission has been the trusted choice for over two decades. Located just 22 miles north in Rohnert Park, our state-of-the-art facility provides Novato residents with expert transmission repair, comprehensive auto services, and the honest, personalized attention that has made us the North Bay's premier automotive destination.

Conveniently accessible via Highway 101, our location at 7099 Redwood Drive offers Novato drivers a reliable alternative to local shops, combining master-level technical expertise with fair pricing and exceptional customer service. Whether you're facing transmission problems, need routine maintenance, or require complex diagnostics, our ASE-certified technicians have the skills and equipment to get you back on the road with confidence.`,

    whyChoose: `Novato residents consistently choose Rohnert Transmission for our proven track record of excellence and integrity. As a family-owned business serving the North Bay for over 20 years, we understand the unique needs of Marin County drivers—from daily Highway 101 commutes to weekend adventures in West Marin. Our commitment to quality ensures your vehicle receives the specialized care necessary for optimal performance and reliability.

Our modern facility features the latest diagnostic technology and specialized equipment for servicing all vehicle makes and models. From domestic trucks navigating Novato's hills to imported luxury sedans cruising Highway 37, we have the expertise and tools to handle any automotive challenge. This comprehensive capability means you receive dealer-quality service without dealer prices or the impersonal treatment often found at larger facilities.

What truly distinguishes us is our approach to customer relationships. We believe in earning trust through transparency, education, and consistently excellent results. Our technicians take time to thoroughly explain diagnoses, provide detailed cost breakdowns, and offer honest recommendations based on your vehicle's actual condition and your driving needs. This commitment to open communication has made us Novato's most recommended automotive shop.`,

    services: [
      {
        name: "Transmission Specialists",
        description: "Our expertise covers all transmission types—automatic, manual, CVT, and dual-clutch. From minor repairs to complete rebuilds, we restore smooth, reliable shifting using premium parts and proven techniques."
      },
      {
        name: "Full-Service Auto Repair",
        description: "Complete automotive care including engine diagnostics, brake service, suspension repair, and electrical troubleshooting. Our ASE-certified technicians handle all your vehicle's needs with precision and care."
      },
      {
        name: "Scheduled Maintenance",
        description: "Keep your vehicle running like new with our comprehensive maintenance services. We follow manufacturer specifications while considering North Bay driving conditions to optimize your service intervals."
      },
      {
        name: "Commercial Fleet Support",
        description: "Novato businesses trust us for fleet maintenance that minimizes downtime and maximizes reliability. Our flexible scheduling and efficient service keep your commercial vehicles productive."
      }
    ],

    journey: `The drive from Novato to Rohnert Transmission is straightforward and typically takes 25-30 minutes via Highway 101. Simply head north on 101 for approximately 22 miles, exit at Rohnert Park Expressway, and follow it west. Turn right on Commerce Boulevard, then left on Redwood Drive to reach our facility at 7099. Our location offers easy highway access and ample parking for your convenience.

Many Novato customers take advantage of nearby shopping and dining options while their vehicle is being serviced. Our comfortable, professional waiting area provides a quiet space with complimentary Wi-Fi, fresh coffee, and current reading materials. For those needing to return to Novato during longer repairs, we're happy to help arrange transportation or provide information about local services.

The Highway 101 corridor between Novato and Rohnert Park showcases Sonoma County's diverse landscape, from rolling hills to agricultural lands. Our location, strategically placed near the highway but away from congested areas, ensures easy access without the stress of navigating busy commercial districts during your service visit.`,

    choose: `Novato drivers trust Rohnert Transmission because we deliver exceptional results with integrity and transparency. Every vehicle that enters our shop receives the same meticulous attention to detail, whether it's a daily commuter, a cherished classic, or a hardworking commercial vehicle. Our systematic approach ensures accurate diagnoses, efficient repairs, and lasting solutions that keep you safely on the road.

We take pride in our ability to explain complex automotive issues in understandable terms, empowering you to make informed decisions about your vehicle's care. Our written estimates detail all recommended work, our warranties provide peace of mind, and our follow-up service ensures your complete satisfaction. This comprehensive approach to customer care has earned us loyal customers throughout Novato and Marin County.

Our investment in continuing education and advanced equipment means your vehicle benefits from the latest repair techniques and technologies. Yet we never forget that behind every repair is a person who depends on their vehicle. That's why we treat every customer like family, providing honest advice, fair pricing, and the quality workmanship that has defined our reputation for over two decades.`,

    cta: `Experience the Rohnert Transmission difference for yourself. Call us today at (707) 584-3451 to schedule your service appointment. Our friendly, knowledgeable staff is ready to answer your questions, provide accurate estimates, and arrange convenient service times that fit your busy Novato lifestyle.

Don't trust your vehicle to just any shop. Choose the automotive professionals that Novato drivers have relied on for over 20 years. Visit us at 7099 Redwood Drive in Rohnert Park, where technical excellence meets exceptional customer service. Let us show you why we're the North Bay's most trusted name in automotive care.`,

    distance: "22 miles",
    driveTime: "25-30 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default NovatoAutoRepair;