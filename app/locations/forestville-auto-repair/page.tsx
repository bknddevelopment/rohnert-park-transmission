import React from 'react';
import { LocationPageTemplate } from '../../components/LocationPageTemplate';

const ForestvilleAutoRepair = () => {
  const content = {
    city: "Forestville",
    intro: `Forestville residents seeking professional automotive care have trusted Rohnert Transmission for over two decades. Located just 12 miles southeast in Rohnert Park, our state-of-the-art facility provides Forestville drivers with expert transmission repair, complete auto services, and the honest, reliable maintenance that has made us the Russian River Valley's preferred automotive destination.

Easily accessible via Highway 116 and Highway 101, our location at 7099 Redwood Drive offers Forestville residents a convenient alternative to limited local options. Whether you're dealing with transmission issues, need routine maintenance, or require complex repairs, our ASE-certified technicians deliver the expertise and personalized attention that keeps your vehicle running smoothly through redwood country and beyond.`,

    whyChoose: `Forestville drivers choose Rohnert Transmission because we understand the unique automotive challenges of Russian River Valley living. From navigating winding River Road to handling the moisture and shade of redwood forests, vehicles in our area face specific conditions that require knowledgeable care. Our experienced technicians recognize these challenges and provide solutions tailored to keep your vehicle performing reliably in all conditions.

Our facility features the latest diagnostic technology and specialized equipment necessary for servicing all makes and models. Whether you drive a rugged truck for rural property maintenance, a family SUV for daily commutes, or a classic car for weekend wine country tours, we have the tools and expertise to provide comprehensive care. This capability eliminates the need to visit multiple shops or travel to Santa Rosa for quality service.

What truly sets us apart is our commitment to treating every customer like a valued neighbor. As a family-owned business deeply rooted in Sonoma County, we appreciate the tight-knit nature of communities like Forestville. We've built our reputation on honest communication, fair pricing, and standing behind our work—values that resonate with Russian River Valley residents who appreciate straightforward, quality service.`,

    services: [
      {
        name: "Transmission Excellence",
        description: "Our transmission specialists diagnose and repair all types with precision. From minor adjustments to complete rebuilds, we restore smooth operation using quality parts designed to handle Russian River Valley's challenging roads."
      },
      {
        name: "Full-Service Auto Repair",
        description: "Comprehensive automotive care including engine diagnostics, brake service for hilly terrain, suspension work for rough rural roads, and electrical systems affected by moisture and shade."
      },
      {
        name: "Rural-Focused Maintenance",
        description: "Preventive services tailored to Forestville's environment. We address moisture-related issues, ensure proper filtration for dusty conditions, and maintain systems stressed by varied terrain."
      },
      {
        name: "Local Business Fleet Care",
        description: "Supporting Forestville's wineries, farms, and small businesses with reliable fleet maintenance. Our efficient service keeps your work vehicles productive with minimal downtime."
      }
    ],

    journey: `The drive from Forestville to Rohnert Transmission is a pleasant 15-20 minute journey through scenic Sonoma County. Head south on Highway 116 (Gravenstein Highway) through Sebastopol, then continue to Highway 101 south. Exit at Rohnert Park Expressway, go west, turn right on Commerce Boulevard, and left on Redwood Drive. Our welcoming facility at 7099 offers ample parking and easy access.

This route takes you from the forested Russian River Valley through apple orchards and into the more developed areas near Highway 101. Many Forestville customers appreciate the opportunity to combine their service visit with shopping or errands in Rohnert Park. Our clean, comfortable waiting area provides a professional environment with complimentary Wi-Fi and refreshments if you prefer to wait.

The relatively short distance makes it convenient for Forestville residents to drop off vehicles before work or arrange service around their daily routines. Our flexible scheduling and efficient service ensure minimal disruption to your day, whether you're commuting to Santa Rosa or managing local responsibilities.`,

    choose: `Forestville residents trust Rohnert Transmission because we deliver consistent, high-quality results with the personal touch of a local business. Every vehicle that enters our shop receives thorough attention from experienced technicians who understand how Russian River Valley conditions affect automotive performance. This expertise leads to accurate diagnoses and effective repairs that last.

We take pride in our transparent approach to service. Before any work begins, we provide detailed explanations of needed repairs, clear cost estimates, and honest timelines. We never pressure customers into unnecessary services, instead focusing on what's truly needed for safe, reliable operation. This integrity has earned us loyal customers throughout Forestville and surrounding communities.

Our investment in ongoing training and advanced equipment ensures your vehicle benefits from current repair techniques while maintaining the personalized service that sets us apart from corporate chains. We remember our customers, track their vehicles' service histories, and provide customized recommendations based on individual driving patterns and needs.`,

    cta: `Keep your vehicle running reliably through redwood country and beyond. Contact Rohnert Transmission today at (707) 584-3451 to schedule your service appointment. Our friendly staff is ready to answer questions, provide estimates, and arrange convenient service times that fit your Forestville lifestyle.

Experience why your neighbors throughout the Russian River Valley choose Rohnert Transmission for all their automotive needs. From simple maintenance to complex repairs, we're here to provide the honest, expert service your vehicle deserves. Visit us at 7099 Redwood Drive in Rohnert Park, where quality workmanship and customer satisfaction are our highest priorities.`,

    distance: "12 miles",
    driveTime: "15-20 minutes"
  };

  return <LocationPageTemplate content={content} />;
};

export default ForestvilleAutoRepair;