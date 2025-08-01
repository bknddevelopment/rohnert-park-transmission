import React from 'react';
import { LocationPageTemplate } from '../../components/LocationPageTemplate';

const PenngroveAutoRepair = () => {
  const content = {
    city: "Penngrove",
    intro: `For Penngrove residents seeking trusted automotive care, Rohnert Transmission stands as your neighborhood expert just 7 miles south in Rohnert Park. Our family-owned facility has been serving the historic Penngrove community for over 20 years, providing exceptional transmission repair, comprehensive auto services, and the honest, personalized attention that has made us the area's most recommended automotive shop.

Located at 7099 Redwood Drive with easy access via Old Redwood Highway or Highway 101, we offer Penngrove drivers the perfect combination of proximity and professional expertise. Whether your vehicle needs transmission service, engine repair, or preventive maintenance, our ASE-certified technicians deliver the quality workmanship and fair pricing that keeps Penngrove families coming back generation after generation.`,

    whyChoose: `Penngrove residents choose Rohnert Transmission because we're more than just another auto shop—we're part of the extended community. As longtime Sonoma County residents ourselves, we understand the importance of reliable transportation for Penngrove's rural lifestyle, whether you're commuting to Petaluma, managing agricultural properties, or exploring the beautiful countryside that surrounds our historic town.

Our state-of-the-art facility combines modern diagnostic technology with old-fashioned values of honesty and integrity. We service all makes and models with equal expertise, from classic trucks that have worked Penngrove's ranches for decades to modern vehicles navigating daily commutes. This comprehensive capability, combined with our commitment to transparent communication, ensures you receive exactly the service your vehicle needs—nothing more, nothing less.

What distinguishes us from other shops is our genuine investment in our customers' satisfaction and safety. We take time to educate vehicle owners about their cars, explain repairs in understandable terms, and provide options that fit different budgets and driving needs. This approach has built trust with Penngrove families who appreciate straight talk and reliable service from neighbors who understand their community.`,

    services: [
      {
        name: "Expert Transmission Care",
        description: "From diagnosis to complete rebuilds, our transmission specialists handle all types with precision. We understand how Penngrove's mix of rural roads and highway driving affects transmissions and provide appropriate solutions."
      },
      {
        name: "Complete Auto Services",
        description: "Full-service repair including engines, brakes, suspension, and electrical systems. Our technicians are equipped to handle everything from routine maintenance to complex diagnostics."
      },
      {
        name: "Agricultural Vehicle Support",
        description: "Specialized service for farm trucks and equipment support vehicles common in Penngrove. We understand the demands of agricultural use and provide robust repair solutions."
      },
      {
        name: "Family Fleet Maintenance",
        description: "Many Penngrove families trust us with multiple vehicles. Our detailed service records and personalized maintenance schedules keep your entire fleet running efficiently."
      }
    ],

    journey: `Getting to Rohnert Transmission from Penngrove couldn't be more convenient. The 7-mile journey takes just 10-12 minutes via Old Redwood Highway south, or you can take Highway 101 south to Rohnert Park Expressway. Exit west, turn right on Commerce Boulevard, then left on Redwood Drive to find us at 7099. Our location offers easy access and plenty of parking for vehicles of all sizes.

This short distance makes it simple for Penngrove residents to drop off vehicles on their way to work or errands. Many customers appreciate being able to wait in our comfortable, clean waiting area with complimentary Wi-Fi and refreshments. For quick services like oil changes or inspections, you can often wait while we work. For longer repairs, the proximity to shopping and dining in Rohnert Park provides convenient options.

The familiar route between Penngrove and our shop passes through the heart of our shared community, reinforcing the neighborly relationship we've built over two decades. Our location is close enough for convenience but provides the professional facilities and equipment necessary for top-quality automotive service.`,

    choose: `Penngrove drivers trust Rohnert Transmission because we've proven ourselves through years of honest service and excellent results. As your neighbors, we stake our reputation on every repair, knowing that in a close-knit community like Penngrove, word travels fast. Our commitment to doing things right the first time has earned us recommendations from families throughout the area.

We understand that vehicle reliability is crucial for Penngrove's rural lifestyle. That's why we focus on thorough inspections that catch problems early, precise repairs that address root causes, and preventive maintenance that extends vehicle life. Our detailed approach saves you money over time by preventing major failures and keeping your vehicle running efficiently.

Beyond technical expertise, we pride ourselves on making the repair experience as smooth as possible. Clear communication, accurate estimates, and timely completion respect your time and budget. We treat every customer with the courtesy and respect we'd want for our own family, creating relationships that often span multiple generations of Penngrove families.`,

    cta: `Don't let vehicle problems disrupt your Penngrove lifestyle. Call Rohnert Transmission today at (707) 584-3451 to schedule your appointment. Our knowledgeable staff is ready to discuss your vehicle's needs and arrange service times that work with your schedule.

Join your Penngrove neighbors who have made Rohnert Transmission their automotive care partner. Just 7 miles south at 7099 Redwood Drive in Rohnert Park, we're close enough for convenience but equipped to handle all your automotive needs with professional excellence. Experience the difference of working with a shop that values community, integrity, and quality above all else.`,

    distance: "7 miles",
    driveTime: "10-12 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default PenngroveAutoRepair;