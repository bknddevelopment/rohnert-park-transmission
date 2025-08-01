import React from 'react';
import { LocationPageTemplate } from '../../components/LocationPageTemplate';

const SonomaCountyAutoRepair = () => {
  const content = {
    city: "Sonoma County",
    intro: `For over two decades, Rohnert Transmission has been Sonoma County's most trusted name in automotive care. Centrally located in Rohnert Park at 7099 Redwood Drive, we serve drivers throughout our diverse county—from the rugged Sonoma Coast to the rolling hills of wine country, from bustling Santa Rosa to quiet rural communities. Our ASE-certified technicians provide expert transmission repair, comprehensive auto services, and the honest, reliable care that has made us the region's preferred automotive destination.

Our strategic location near Highway 101 makes us easily accessible to all Sonoma County residents, providing dealership-quality service without dealership prices or attitudes. Whether you're dealing with transmission issues, need routine maintenance, or require complex repairs, we deliver the expertise and personalized attention that has earned us loyal customers from Cloverdale to Petaluma, from Bodega Bay to Sonoma Valley.`,

    whyChoose: `Sonoma County drivers choose Rohnert Transmission because we understand our region's unique automotive challenges. From coastal salt air to mountain grades, from agricultural dust to urban stop-and-go traffic, vehicles throughout our county face diverse conditions requiring specialized knowledge. Our experienced technicians have seen it all and provide solutions tailored to your specific driving environment.

Our state-of-the-art facility features the latest diagnostic equipment and specialized tools necessary for servicing all makes and models. This comprehensive capability means whether you drive a working ranch truck from West County, a luxury vehicle from Healdsburg's wine country, or a daily commuter from any of our cities, you receive the same exceptional service. We've invested in technology and training to be Sonoma County's complete automotive solution.

What truly distinguishes us is our deep roots in the community we serve. As a family-owned business, we've built relationships spanning generations of Sonoma County families. We treat every customer as a neighbor, providing transparent communication, fair pricing, and the quality workmanship that keeps vehicles running safely on our diverse roads. This commitment to community and excellence has made us the shop that locals recommend and trust.`,

    services: [
      {
        name: "Regional Transmission Experts",
        description: "Specializing in transmission repair for all of Sonoma County's diverse driving conditions. From coastal moisture to mountain grades, we provide solutions that ensure reliable performance anywhere in the county."
      },
      {
        name: "Complete Automotive Care",
        description: "Full-service repair and maintenance for all vehicle systems. Our ASE-certified technicians handle everything from routine oil changes to complex engine rebuilds with equal expertise."
      },
      {
        name: "Fleet Services for County Businesses",
        description: "Supporting Sonoma County's diverse businesses with reliable fleet maintenance. From winery vehicles to construction fleets, we keep commercial vehicles productive and safe."
      },
      {
        name: "Specialty Vehicle Services",
        description: "Expert care for the diverse vehicles found throughout Sonoma County—classic cars, diesel trucks, hybrid vehicles, and luxury imports all receive specialized attention."
      }
    ],

    journey: `Rohnert Transmission's central Sonoma County location makes us accessible from every corner of the region. Located just off Highway 101 at Rohnert Park Expressway, we're:
    
• 15-20 minutes from Santa Rosa
• 10-15 minutes from Petaluma  
• 20-25 minutes from Sonoma
• 25-30 minutes from Healdsburg
• 30-35 minutes from the coast
• 35-40 minutes from Cloverdale

Our facility at 7099 Redwood Drive offers easy access via major highways and ample parking for all vehicle types. Many customers throughout the county plan their service visits around other errands, taking advantage of nearby shopping and dining while their vehicle is serviced. Our comfortable waiting area provides a professional environment for those who prefer to wait.

The diverse routes from different parts of Sonoma County showcase our region's beauty—from coastal vistas to vineyard valleys, from redwood groves to oak-studded hills. Wherever you're coming from, our central location minimizes travel time while providing the professional service your vehicle deserves.`,

    choose: `Sonoma County residents trust Rohnert Transmission because we've earned that trust through decades of excellent service. Our reputation spans the entire county, built on thousands of satisfied customers who appreciate our combination of technical expertise, fair dealing, and genuine care for their safety and satisfaction.

We pride ourselves on being Sonoma County's automotive problem solvers. Whether you're dealing with a mysterious noise, declining performance, or need preventive maintenance, our systematic approach ensures accurate diagnosis and effective solutions. We invest in ongoing training to stay current with automotive technology while maintaining the personal touch that distinguishes local businesses.

Our commitment to the community extends beyond just fixing cars. We support local organizations, employ local residents, and contribute to the economic vitality of Sonoma County. When you choose Rohnert Transmission, you're not just getting excellent automotive service—you're supporting a business that gives back to the community we all call home.`,

    cta: `Join thousands of satisfied customers throughout Sonoma County who trust Rohnert Transmission for all their automotive needs. Call us today at (707) 584-3451 to schedule your service appointment. Our knowledgeable staff is ready to provide solutions tailored to your vehicle and driving conditions.

From the Pacific Coast to the Mayacamas Mountains, from the Russian River to San Pablo Bay, we're here to keep Sonoma County moving safely and reliably. Visit us at 7099 Redwood Drive in Rohnert Park, where quality service, community values, and customer satisfaction drive everything we do. Experience why we're Sonoma County's most trusted name in automotive care.`,

    distance: "Varies by location",
    driveTime: "10-40 minutes depending on location"
  };

  return <LocationPageTemplate content={content} />;
};

export default SonomaCountyAutoRepair;