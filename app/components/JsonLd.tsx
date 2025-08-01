export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.rohnertparktransmission.com/#business",
        "name": "Rohnert Park Transmission & Auto Repair",
        "alternateName": "Rohnert Park Transmission",
        "image": "https://www.rohnertparktransmission.com/logo.jpg",
        "logo": "https://www.rohnertparktransmission.com/logo.jpg",
        "url": "https://www.rohnertparktransmission.com",
        "telephone": "+17075847727",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5901 Commerce Blvd",
          "addressLocality": "Rohnert Park",
          "addressRegion": "CA",
          "postalCode": "94928",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.3396,
          "longitude": -122.7011
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/rohnertparktransmission",
          "https://www.instagram.com/rohnertparktransmission",
          "https://www.yelp.com/biz/rohnert-park-transmission"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "160"
        },
        "areaServed": [
          "Rohnert Park",
          "Santa Rosa",
          "Petaluma",
          "Cotati",
          "Sebastopol",
          "Windsor",
          "Healdsburg",
          "Sonoma",
          "Kenwood"
        ],
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
        "currenciesAccepted": "USD",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Waiting Area with Wi-Fi"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Complimentary Shuttle Service"
          }
        ]
      },
      {
        "@type": "AutoRepair",
        "@id": "https://www.rohnertparktransmission.com/#autorepair",
        "name": "Rohnert Park Transmission & Auto Repair",
        "serviceType": [
          "Transmission Service",
          "Transmission Repair",
          "Transmission Rebuild",
          "Automatic Transmission Service",
          "Manual Transmission Repair",
          "Brake and Rotor Repair",
          "Engine Tune-Up",
          "AC and Heat Repair",
          "Check Engine Light Diagnosis",
          "Water Pump Service",
          "Tire Services",
          "Fuel System Service",
          "Transfer Case Repair",
          "Differential Service and Repair",
          "Preventive Maintenance",
          "Factory Scheduled Maintenance"
        ],
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 38.3396,
            "longitude": -122.7011
          },
          "geoRadius": "25 miles"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.rohnertparktransmission.com/#organization",
        "name": "Rohnert Park Transmission & Auto Repair",
        "foundingDate": "1997",
        "description": "Family-owned auto repair shop serving Sonoma County since 1997. ASE certified technicians, ATRA member shop, offering comprehensive automotive services with a 2-year/24,000-mile warranty.",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "ASE Certified",
            "recognizedBy": {
              "@type": "Organization",
              "name": "National Institute for Automotive Service Excellence"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "ATRA Member",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Automatic Transmission Rebuilders Association"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "ASCCA Member",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Automotive Service Councils of California"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "RepairPal Certified",
            "recognizedBy": {
              "@type": "Organization",
              "name": "RepairPal"
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}