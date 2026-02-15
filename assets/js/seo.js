function injectJSONLD(data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

// Local Business Data
const businessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Today's Generators",
  "image": "https://todaysgenerators.com/assets/img/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 12, Industrial Layout",
    "addressLocality": "Lagos",
    "addressRegion": "Lagos State",
    "postalCode": "100001",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.5244",
    "longitude": "3.3792"
  },
  "url": "https://todaysgenerators.com",
  "telephone": "+2348012345678",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ]
};

injectJSONLD(businessData);

// If on product page, inject product schema
if (window.location.pathname.includes('product.html')) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    // We can't easily access 'generators' array from here unless it's global or we re-fetch service.
    // For simplicity, we can assume main.js will handle specific product schema.
}
