import React from 'react';
import { LocationPageTemplate } from '../../../components/LocationPageTemplate';

const KenwoodAutoRepair = () => {
  const content = {
    city: "Kenwood",
    intro: `Kenwood residents seeking premium automotive care have made Rohnert Transmission their trusted choice for over two decades. Located just 20 miles west in Rohnert Park, our state-of-the-art facility provides Kenwood drivers with expert transmission repair, comprehensive auto services, and the honest, professional attention befitting this distinguished wine country community.

Our convenient location at 7099 Redwood Drive is easily accessible via Highway 12 and Highway 101, offering Kenwood residents exceptional automotive expertise without the premium prices often found in wine country. Whether you drive a luxury vehicle touring the vineyards or a work truck maintaining estate properties, our ASE-certified technicians deliver the specialized care your vehicle deserves.`,

    whyChoose: `Kenwood drivers choose Rohnert Transmission because we understand the unique needs of wine country vehicles. From navigating the winding roads through Sonoma Valley to handling the temperature extremes between valley floors and mountain vineyards, vehicles in Kenwood face distinctive challenges that require knowledgeable attention. Our experienced technicians provide solutions specifically tailored to these conditions.

Our facility rivals any dealership in equipment and expertise, featuring advanced diagnostic systems capable of servicing the luxury and high-performance vehicles common in Kenwood. Whether you own a European sports car, American luxury SUV, or classic collector vehicle, we have the specialized tools and training to provide factory-quality service without the dealership markup or impersonal treatment.

What sets us apart is our commitment to exceeding the high standards expected by Kenwood residents. We combine technical excellence with refined customer service, providing detailed consultations, precise estimates, and meticulous attention to every aspect of your vehicle's care. This approach has earned us the trust of Kenwood's discriminating vehicle owners who accept nothing less than the best.`,

    services: [
      {
        name: "Precision Transmission Service",
        description: "Expert care for all transmission types, including high-performance and luxury vehicle systems. We use only premium fluids and components to ensure optimal performance on Kenwood's demanding roads."
      },
      {
        name: "Luxury Vehicle Specialists",
        description: "Comprehensive service for European and high-end vehicles common in wine country. Our technicians receive specialized training to maintain these sophisticated machines properly."
      },
      {
        name: "Estate Vehicle Maintenance",
        description: "Customized care for the diverse vehicles used on Kenwood properties—from luxury daily drivers to utility vehicles maintaining vineyards and estates."
      },
      {
        name: "Collector Car Care",
        description: "Specialized service for classic and collector vehicles. We understand the unique requirements of vintage automobiles and provide appropriate care to preserve their value and performance."
      }
    ],

    journey: `The scenic drive from Kenwood to Rohnert Transmission takes approximately 25-30 minutes through beautiful Sonoma Valley. Take Highway 12 west through Glen Ellen, continuing through the valley toward Santa Rosa. Merge onto Highway 101 south, exit at Rohnert Park Expressway, head west, turn right on Commerce Boulevard, then left on Redwood Drive to reach our facility at 7099.

This picturesque route showcases the natural beauty that makes Kenwood special, transitioning from intimate valley vineyards to the broader vistas near Santa Rosa. Many Kenwood clients schedule their service appointments to coincide with business in Santa Rosa or shopping in Rohnert Park. Our professional waiting area offers a comfortable environment with complimentary Wi-Fi and refreshments for those who prefer to wait.

The journey through Sonoma Valley provides a pleasant drive that many of our Kenwood customers have come to appreciate as part of their service experience. Our location's easy access and ample parking accommodate all vehicles, from compact luxury cars to large SUVs with wine country cargo.`,

    choose: `Kenwood residents trust Rohnert Transmission because we deliver the exceptional service their vehicles deserve. Our systematic approach begins with thorough diagnostics using the latest technology, continues with precise repairs using premium parts, and concludes with detailed quality checks ensuring everything meets our exacting standards. This attention to detail matches the quality Kenwood residents expect in all aspects of their lives.

We understand that Kenwood vehicle owners have invested significantly in their automobiles and expect service providers to respect that investment. Our technicians treat every vehicle with meticulous care, our service advisors provide clear, detailed communication throughout the process, and our warranties offer comprehensive protection for your peace of mind.

Our reputation among Kenwood's tight-knit community speaks to our consistency and reliability. Wine country residents recommend us to their neighbors because we deliver on our promises, respect their time and intelligence, and provide value that extends beyond competitive pricing to include the confidence that comes from working with true professionals.`,

    cta: `Ensure your vehicle receives the exceptional care it deserves. Contact Rohnert Transmission today at (707) 584-3451 to schedule your service appointment. Our knowledgeable staff understands the unique needs of Kenwood drivers and is ready to provide the premium service you expect.

Experience why discriminating vehicle owners throughout Kenwood and Sonoma Valley choose Rohnert Transmission for all their automotive needs. Visit us at 7099 Redwood Drive in Rohnert Park, where technical excellence meets refined customer service. Let us demonstrate the superior care that has made us wine country's most trusted automotive professionals.`,

    distance: "20 miles",
    driveTime: "25-30 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default KenwoodAutoRepair;