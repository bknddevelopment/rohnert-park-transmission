import React from 'react';
import { LocationPageTemplate } from '../../../components/LocationPageTemplate';

const SanRafaelAutoRepair = () => {
  const content = {
    city: "San Rafael",
    intro: `San Rafael drivers looking for superior automotive service have made Rohnert Transmission their preferred choice for over two decades. Located just 28 miles north in Rohnert Park, our award-winning facility offers San Rafael residents expert transmission repair, comprehensive automotive services, and the trustworthy, professional care that has established us as the North Bay's leading automotive specialist.

Our convenient location at 7099 Redwood Drive is easily accessible from San Rafael via Highway 101, providing a dependable alternative to crowded Marin County shops. Whether you need transmission diagnostics, engine repair, or preventive maintenance, our ASE-certified master technicians deliver the expertise and personalized service that keeps San Rafael drivers returning year after year.`,

    whyChoose: `San Rafael residents choose Rohnert Transmission because we offer an unmatched combination of technical excellence, fair pricing, and genuine customer care. As a established Sonoma County business, we understand the demands placed on vehicles in the Bay Area—from stop-and-go traffic on Highway 101 to weekend excursions through Mount Tamalpais. Our comprehensive approach ensures your vehicle performs reliably in all conditions.

Our state-of-the-art facility rivals any dealership, featuring advanced diagnostic systems and specialized tools for servicing all makes and models. Whether you drive a European luxury vehicle, American truck, or Asian import, our technicians have the training and equipment to provide factory-quality service. This eliminates the need to visit multiple specialists or pay dealership premiums for professional care.

What sets us apart is our commitment to transparency and customer education. We believe informed customers make better decisions about their vehicles. That's why we provide detailed inspections with photos, clear explanations of needed repairs, and honest recommendations prioritizing safety and reliability. This approach has earned us the trust of San Rafael families, businesses, and automotive enthusiasts who value integrity as much as expertise.`,

    services: [
      {
        name: "Advanced Transmission Services",
        description: "From computerized diagnostics to complete rebuilds, our transmission experts handle all types—automatic, manual, CVT, and DCT. We use only premium fluids and components to ensure lasting performance."
      },
      {
        name: "Complete Automotive Care",
        description: "Our services encompass all vehicle systems: engine repair, brake service, suspension work, electrical diagnostics, and climate control. One trusted shop for all your automotive needs."
      },
      {
        name: "Manufacturer-Scheduled Maintenance",
        description: "Preserve your warranty and maximize vehicle life with our comprehensive maintenance programs. We follow factory specifications while accounting for Bay Area driving conditions."
      },
      {
        name: "Marin County Fleet Services",
        description: "San Rafael businesses rely on us for fleet maintenance that reduces costs and maximizes uptime. Our efficient service and flexible scheduling keep your vehicles productive."
      }
    ],

    journey: `Traveling from San Rafael to Rohnert Transmission is a straightforward 30-35 minute journey along Highway 101. Head north through Novato and continue for approximately 28 miles. Exit at Rohnert Park Expressway, proceed west, turn right on Commerce Boulevard, then left on Redwood Drive. You'll find our modern facility at 7099, complete with convenient parking and easy access.

Many San Rafael customers combine their service visit with shopping at nearby retail centers or dining at local restaurants. Our professional waiting area offers a comfortable environment with complimentary Wi-Fi, beverages, and a quiet space to work or relax. For extended repairs, we can help arrange transportation back to San Rafael or recommend local amenities to enhance your visit.

The drive north showcases the transition from Marin's urban landscape to Sonoma County's more spacious setting. Our strategic location near Highway 101 but away from heavy traffic provides easy access without the congestion typical of urban automotive districts, making your service experience as convenient as possible.`,

    choose: `San Rafael drivers trust Rohnert Transmission because we consistently deliver on our promises of quality, value, and integrity. Each vehicle receives meticulous attention from initial inspection through final quality check, ensuring repairs are done right the first time. Our systematic approach eliminates guesswork, prevents unnecessary repairs, and provides lasting solutions you can depend on.

We understand that San Rafael residents have high standards and numerous options for automotive service. That's why we go above and beyond to exceed expectations. Our technicians pursue ongoing education to stay current with automotive technology, our service advisors provide clear communication throughout the repair process, and our warranties offer peace of mind long after you leave our shop.

Our reputation is built on thousands of satisfied customers who appreciate our honest approach to automotive care. We never recommend unnecessary services, always provide options to fit different budgets, and stand behind our work with confidence. This commitment to ethical business practices and technical excellence has made us San Rafael's most recommended automotive facility.`,

    cta: `Don't let automotive issues disrupt your San Rafael routine. Contact Rohnert Transmission today at (707) 584-3451 to schedule your service appointment. Our experienced staff is ready to discuss your vehicle's needs, provide detailed estimates, and arrange service times that accommodate your schedule.

Join the growing number of San Rafael drivers who have discovered the superior service and value at Rohnert Transmission. From routine maintenance to major repairs, we're here to keep your vehicle performing at its best. Visit us at 7099 Redwood Drive in Rohnert Park, where professional excellence and customer satisfaction drive everything we do.`,

    distance: "28 miles",
    driveTime: "30-35 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default SanRafaelAutoRepair;