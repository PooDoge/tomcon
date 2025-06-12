export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tomcon Restorations",
    description: "Professional flood damage and restoration services in Long Island, NY",
    url: "https://tomconrestore.com",
    telephone: "+16318315117",
    email: "tconley@tomconrestore.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Smithtown",
      addressRegion: "NY",
      postalCode: "11743",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.8549",
      longitude: "-73.1954",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/tomconrestorations",
      "https://www.instagram.com/tomconrestorations",
      "https://twitter.com/tomconrestore",
    ],
    priceRange: "$$",
    servesCuisine: "Flood Damage Restoration, Water Extraction, Mold Remediation",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "40.7891",
          longitude: "-73.1350",
        },
        geoRadius: "50000",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.7891",
        longitude: "-73.1350",
      },
      geoRadius: "50000",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
