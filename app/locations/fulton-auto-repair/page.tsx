import React from 'react';
import { LocationPageTemplate } from '../../components/LocationPageTemplateOld';

const FultonAutoRepair = () => {
  const content = {
    city: "Fulton",
    intro: `Fulton residents have relied on Rohnert Transmission for exceptional automotive care for over two decades. Located just 10 miles south in Rohnert Park, our award-winning facility provides Fulton drivers with expert transmission repair, comprehensive auto services, and the trustworthy, professional attention that has made us North Santa Rosa's preferred automotive destination.

Conveniently situated at 7099 Redwood Drive with quick access via Highway 101, we offer Fulton residents a superior alternative to crowded Santa Rosa shops. Whether you're experiencing transmission problems, need routine maintenance, or require complex diagnostics, our ASE-certified technicians deliver the expertise and personalized service that keeps your vehicle performing reliably on Fulton's rural roads and beyond.`,

    whyChoose: `Fulton drivers choose Rohnert Transmission for our proven track record of excellence and our understanding of the area's unique automotive needs. Living in Fulton means navigating everything from rural River Road to Highway 101 commutes, placing diverse demands on your vehicle. Our experienced technicians recognize these challenges and provide solutions tailored to your specific driving conditions.

Our modern facility features diagnostic equipment and specialized tools matching any dealership, yet we maintain the personal touch of a family-owned business. We service all makes and models with equal expertise, from work trucks handling agricultural duties to luxury vehicles cruising through wine country. This comprehensive capability means you receive top-tier service without the impersonal treatment or inflated prices common at larger facilities.

What truly distinguishes us is our commitment to building lasting relationships with our customers. We believe in earning trust through transparency, taking time to explain repairs clearly, providing honest recommendations, and standing behind our work with strong warranties. This approach has made us the shop that Fulton families recommend to their neighbors and trust with all their vehicles.`,

    services: [
      {
        name: "Transmission Specialists",
        description: "Our expertise covers all transmission types and issues. From subtle shifting problems to complete overhauls, we diagnose accurately and repair efficiently using premium components."
      },
      {
        name: "Full-Service Auto Repair",
        description: "Complete automotive care including engine service, brake systems, suspension work, and electrical diagnostics. Your one-stop shop for all vehicle maintenance and repair needs."
      },
      {
        name: "Preventive Maintenance Programs",
        description: "Customized service schedules based on manufacturer recommendations and Fulton driving conditions. Regular maintenance prevents costly failures and extends vehicle life."
      },
      {
        name: "Commercial and Agricultural Support",
        description: "Specialized service for Fulton's farming operations and local businesses. We keep your work vehicles productive with efficient, reliable maintenance and repair."
      }
    ],

    journey: `The drive from Fulton to Rohnert Transmission is quick and straightforward, typically taking just 12-15 minutes. Head south on Highway 101 for approximately 10 miles, exit at Rohnert Park Expressway, and go west. Turn right on Commerce Boulevard, then left on Redwood Drive to reach our facility at 7099. Our location provides easy highway access with ample parking for all vehicle types.

This short distance makes it convenient for Fulton residents to incorporate vehicle service into their daily routines. Many customers drop off their vehicles on the way to work in Santa Rosa or Petaluma, while others take advantage of our comfortable waiting area for shorter services. The proximity to Rohnert Park's shopping and dining options provides pleasant ways to spend time during longer repairs.

The familiar Highway 101 corridor between Fulton and our shop reinforces our connection to the community we serve. Our strategic location balances accessibility with a peaceful setting away from congested commercial areas, making your service visit as stress-free as possible.`,

    choose: `Fulton residents trust Rohnert Transmission because we consistently deliver exceptional results with integrity and professionalism. Every vehicle receives meticulous attention from technicians who understand how North County driving conditions—from dusty agricultural roads to wet winter highways—affect automotive performance. This local knowledge translates into more accurate diagnoses and longer-lasting repairs.

We take pride in our educational approach to customer service. Rather than simply presenting a bill, we help you understand your vehicle's condition, explain what caused the problem, and provide strategies to prevent future issues. Our transparent pricing, detailed estimates, and multiple repair options ensure you can make informed decisions that fit your budget and driving needs.

Our long-standing presence in the community reflects our commitment to customer satisfaction. Many Fulton families have trusted us for multiple generations, appreciating our combination of technical excellence, fair pricing, and genuine care for their safety and satisfaction. We treat every customer like a neighbor because, in our close-knit community, that's exactly what you are.`,

    cta: `Experience automotive service the way it should be—professional, honest, and reliable. Call Rohnert Transmission today at (707) 584-3451 to schedule your appointment. Our friendly staff is ready to discuss your vehicle's needs and arrange convenient service times that fit your Fulton lifestyle.

Join the many Fulton residents who have discovered the Rohnert Transmission difference. Located just 10 miles south at 7099 Redwood Drive in Rohnert Park, we're your nearby source for dealership-quality service with neighborly values. Let us show you why we're North County's most trusted name in automotive care.`,

    distance: "10 miles",
    driveTime: "12-15 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default FultonAutoRepair;