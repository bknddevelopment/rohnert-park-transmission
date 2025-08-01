import React from 'react';
import { LocationPageTemplate } from '../../components/LocationPageTemplate';

const SonomaAutoRepair = () => {
  const content = {
    city: "Sonoma",
    intro: `When Sonoma residents need dependable automotive service, Rohnert Transmission stands as the region's most trusted choice. Located just 18 miles northwest in Rohnert Park, our family-owned facility has been serving the historic City of Sonoma and surrounding wine country communities for over 20 years with exceptional transmission repair, comprehensive auto services, and honest, transparent customer care.

Our strategic location at 7099 Redwood Drive provides easy access for Sonoma drivers via Highway 12 and Highway 101, making professional automotive care convenient without the premium prices often found in tourist-heavy areas. From routine maintenance to complex transmission rebuilds, our ASE-certified technicians deliver the expertise and personalized attention that has made us Sonoma Valley's preferred automotive partner.`,

    whyChoose: `Sonoma residents choose Rohnert Transmission because we combine old-fashioned values with cutting-edge automotive technology. As a cornerstone business in Sonoma County, we understand the unique demands placed on vehicles in our area—from daily commutes on Highway 12 to weekend trips through the Mayacamas Mountains. Our commitment to excellence ensures your vehicle receives the specialized care it needs to perform reliably in all conditions.

Our facility features advanced diagnostic equipment capable of servicing everything from classic cars that grace Sonoma's historic plaza to the latest hybrid and electric vehicles. This comprehensive capability eliminates the need to visit multiple specialists, saving you time and ensuring consistent, quality care for your vehicle. Our technicians participate in ongoing training programs, staying ahead of automotive innovations to provide you with the most current solutions available.

What distinguishes us from other shops is our dedication to building lasting relationships with our customers. We take pride in educating vehicle owners about their cars, providing clear explanations of needed repairs, and offering honest recommendations based on safety and reliability—not profit margins. This transparent approach has earned us the trust of generations of Sonoma families who rely on us for all their automotive needs.`,

    services: [
      {
        name: "Expert Transmission Repair",
        description: "Our transmission specialists excel at diagnosing and repairing all types of transmissions. From subtle shifting issues to complete overhauls, we use premium parts and proven techniques to restore smooth, reliable operation."
      },
      {
        name: "Comprehensive Auto Services",
        description: "Beyond transmissions, we provide full-service automotive care including brake systems, engine repair, suspension work, and electrical diagnostics. Your complete automotive solution under one roof."
      },
      {
        name: "Preventive Maintenance Programs",
        description: "Protect your vehicle with our customized maintenance schedules designed for Sonoma's unique driving conditions. Regular service prevents costly breakdowns and extends your vehicle's life."
      },
      {
        name: "Wine Country Fleet Services",
        description: "We offer specialized fleet maintenance for Sonoma's wineries, hotels, and tour companies. Our programs minimize downtime and keep your business vehicles running efficiently year-round."
      }
    ],

    journey: `Reaching Rohnert Transmission from Sonoma is a pleasant 20-25 minute drive through beautiful Sonoma County scenery. Take Highway 12 west toward Santa Rosa, then merge onto Highway 101 north. Exit at Rohnert Park Expressway, head west, turn right on Commerce Boulevard, and left on Redwood Drive. Our modern facility at 7099 Redwood Drive offers ample parking and easy access.

Many Sonoma customers appreciate the opportunity to explore Rohnert Park's shopping and dining options while their vehicle is being serviced. Our clean, comfortable waiting area provides a professional space with complimentary Wi-Fi and refreshments if you prefer to stay. For longer repairs, we can help coordinate transportation back to Sonoma or recommend local amenities to make your wait more enjoyable.

The route from Sonoma showcases the natural beauty that makes our region special, passing vineyards and rolling hills that define Wine Country. Our location, just off the main highway but away from heavy traffic areas, ensures easy access without the hassle of navigating congested commercial districts.`,

    choose: `Sonoma drivers trust Rohnert Transmission because we treat every customer with the respect and honesty they deserve. Our reputation for fair pricing, quality workmanship, and standing behind our repairs has made us the go-to shop for discriminating vehicle owners who refuse to compromise on service quality.

We understand that your vehicle is essential to enjoying all that Sonoma offers—from daily errands around the plaza to weekend wine tasting adventures. That's why we focus on providing lasting repairs that keep you safely on the road. Our detailed inspections catch potential problems early, our precise repairs address root causes rather than symptoms, and our comprehensive warranties protect your investment.

Beyond technical excellence, we pride ourselves on making the repair experience as stress-free as possible. Clear communication, accurate time estimates, and upfront pricing eliminate surprises. Our service advisors take time to answer your questions, explain your options, and help you make informed decisions about your vehicle's care. This commitment to customer education and empowerment sets us apart from shops that simply want to maximize profits.`,

    cta: `Don't let car troubles interfere with your Sonoma lifestyle. Call Rohnert Transmission today at (707) 584-3451 to schedule your appointment. Our knowledgeable staff is ready to discuss your vehicle's needs, provide detailed estimates, and arrange convenient service times that work with your schedule.

Join the thousands of satisfied Sonoma customers who have discovered the Rohnert Transmission difference. From minor repairs to major overhauls, we're here to keep your vehicle running smoothly and reliably. Visit us at 7099 Redwood Drive in Rohnert Park, where exceptional service, technical expertise, and customer satisfaction come standard with every visit.`,

    distance: "18 miles",
    driveTime: "20-25 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default SonomaAutoRepair;