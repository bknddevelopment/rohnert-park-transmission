import React from 'react';
import { LocationPageTemplate } from '../../../components/LocationPageTemplate';

const BodegaBayAutoRepair = () => {
  const content = {
    city: "Bodega Bay",
    intro: `When Bodega Bay residents and visitors need reliable automotive service, Rohnert Transmission provides the expert care and trustworthy solutions they seek. Located just 23 miles inland in Rohnert Park, our family-owned facility has been the coastal community's preferred choice for transmission repair, comprehensive auto services, and honest vehicle maintenance for over 20 years.

Our strategic location at 7099 Redwood Drive offers Bodega Bay drivers easy access via Highway 1 and Highway 12, providing professional automotive expertise without the premium prices often found in coastal areas. From fishing fleet vehicles to tourist cars experiencing issues during coastal adventures, our ASE-certified technicians deliver the skill and dedication that has made us Sonoma Coast's most trusted automotive partner.`,

    whyChoose: `Bodega Bay residents and businesses choose Rohnert Transmission for our unique understanding of coastal driving challenges. Salt air exposure, foggy conditions, and the demanding terrain between the coast and inland areas create specific wear patterns that require experienced attention. Our technicians' expertise with these conditions ensures your vehicle receives the specialized care necessary for reliable performance in the coastal environment.

Our modern facility features diagnostic equipment and tools matching any dealership, enabling us to service everything from commercial fishing trucks to luxury vehicles touring the Pacific Coast Highway. This comprehensive capability means you don't need to travel to Santa Rosa or beyond for quality service—we provide it all under one roof with the personal attention only a family business can offer.

What distinguishes us from other shops is our commitment to treating every customer like a neighbor. We understand that a breakdown in Bodega Bay can be particularly challenging, whether you're a local resident or a visitor exploring our beautiful coastline. That's why we prioritize clear communication, fair pricing, and efficient service to get you back on the road quickly and safely.`,

    services: [
      {
        name: "Marine-Grade Transmission Service",
        description: "Specialized care for vehicles exposed to coastal conditions. We understand how salt air and moisture affect transmissions, providing services that protect against corrosion and ensure reliable operation."
      },
      {
        name: "Comprehensive Vehicle Repair",
        description: "Full-service automotive care including brake systems adapted for hilly coastal roads, suspension work for rough terrain, and engine services optimized for varying coastal temperatures."
      },
      {
        name: "Coastal Preventive Maintenance",
        description: "Customized maintenance programs addressing the unique challenges of coastal driving. Extra attention to undercarriage protection, fluid changes, and corrosion prevention keeps your vehicle coast-ready."
      },
      {
        name: "Commercial Fleet Support",
        description: "Specialized service for Bodega Bay's fishing fleet support vehicles, tour operators, and hospitality businesses. We minimize downtime with efficient, reliable maintenance and repair."
      }
    ],

    journey: `The scenic drive from Bodega Bay to Rohnert Transmission takes approximately 35-40 minutes through some of Sonoma County's most beautiful landscapes. Take Highway 1 south to Bodega Highway (Highway 12), following it east through the rolling hills toward Sebastopol. Continue on Highway 12 to Highway 101 south, exit at Rohnert Park Expressway, head west, turn right on Commerce Boulevard, and left on Redwood Drive to reach our facility at 7099.

This picturesque route transitions from dramatic coastal views to pastoral countryside, making the journey to our shop part of the North Bay experience. Many Bodega Bay customers plan their service visits to coincide with inland errands or appointments, maximizing the efficiency of their trip. Our comfortable waiting area provides a professional space to work or relax if you choose to wait for your service.

For those needing to return to the coast immediately, we're experienced in coordinating efficient service to minimize your time away. Our location's easy highway access and ample parking make dropping off and picking up your vehicle convenient, even with boats or trailers in tow.`,

    choose: `Bodega Bay drivers trust Rohnert Transmission because we understand the unique needs of coastal vehicles and deliver solutions that last. Our experience with salt air corrosion, moisture-related issues, and the wear patterns created by coastal driving conditions gives us insights that generic shops often miss. This expertise translates into more accurate diagnoses and more effective repairs.

We pride ourselves on building long-term relationships with our coastal customers. Many Bodega Bay families have trusted us for generations, appreciating our honest assessments, fair pricing, and reliable workmanship. We never push unnecessary services but instead focus on what your vehicle truly needs to perform safely and dependably in your specific driving environment.

Our commitment to the coastal community extends beyond just fixing vehicles. We provide detailed maintenance recommendations tailored to coastal conditions, help customers understand how to protect their investments from environmental challenges, and always prioritize safety—knowing that the winding road back to Bodega Bay demands a properly functioning vehicle.`,

    cta: `Don't let vehicle problems interrupt your Bodega Bay lifestyle or business. Call Rohnert Transmission today at (707) 584-3451 to schedule your service appointment. Our knowledgeable staff understands the unique needs of coastal drivers and is ready to provide solutions that keep you moving safely and reliably.

Whether you're a longtime Bodega Bay resident, a business owner depending on vehicle reliability, or a visitor experiencing car trouble during your coastal adventure, we're here to help. Visit us at 7099 Redwood Drive in Rohnert Park for the honest, expert service that has made us the Sonoma Coast's most trusted automotive professionals.`,

    distance: "23 miles",
    driveTime: "35-40 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default BodegaBayAutoRepair;