// Exact JSON-LD schema markup provided for the homepage — content must not be modified.
const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.kitchensinkmanufacturers.com/#business",
      "name": "Monfort Kitchens",
      "alternateName": "Monfort",
      "description":
        "Monfort is a sink manufacturer in Delhi since 2000, making Indian, handmade, premium handmade, waterfall and quartz kitchen sinks along with bathroom accessories. Bulk orders and pan India delivery available.",
      "url": "https://www.kitchensinkmanufacturers.com/",
      "logo": "https://www.kitchensinkmanufacturers.com/logo.jpeg",
      "image": "https://www.kitchensinkmanufacturers.com/hero/hero1.jpg",
      "telephone": "+91-9871667213",
      "email": "harshkansal280@gmail.com",
      "foundingDate": "2000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G-108, Sector-3, Bawana Industrial Area",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110039",
        "addressCountry": "IN",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9871667213",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-8383972282",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"],
        },
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "09:00",
        "closes": "19:00",
      },
      "areaServed": [
        { "@type": "City", "name": "Delhi" },
        { "@type": "Country", "name": "India" },
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Product", "name": "Indian Kitchen Sink" },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Handmade Kitchen Sink",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Premium Handmade Kitchen Sink",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Waterfall Kitchen Sink",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Product", "name": "Quartz Kitchen Sink" },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Bathroom Accessories",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.kitchensinkmanufacturers.com/#website",
      "url": "https://www.kitchensinkmanufacturers.com/",
      "name": "Monfort Kitchens",
      "publisher": { "@id": "https://www.kitchensinkmanufacturers.com/#business" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is a trusted sink manufacturer in Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monfort is an established sink manufacturer in Delhi, working from Bawana Industrial Area since 2000. We make Indian, handmade, premium handmade, waterfall and quartz kitchen sinks and supply through 6,000+ dealers across India.",
          },
        },
        {
          "@type": "Question",
          "name": "Which material is best for a kitchen sink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stainless steel is the most popular choice for Indian kitchens. It is strong, hygienic, heat-resistant and easy to clean. Higher grades such as 304 resist rust and staining better.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the difference between a handmade sink and an Indian sink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Handmade sinks are generally made with more detailing and come in premium finishes like Matt, Nano Black, Gold, Mirror and Rose Gold. Indian sinks are the everyday option with a glossy finish. Handmade suits modern kitchens, and Indian suits regular family use.",
          },
        },
        {
          "@type": "Question",
          "name": "What is a 304 grade stainless steel sink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "304 grade is a type of stainless steel that resists rust and staining better than lower grades, which is why it is a common choice for kitchen sinks. Regular cleaning still matters, since hard water can leave white scale marks on any steel sink.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the standard kitchen sink sizes in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common sizes in inches include 14x16, 18x16, 20x17, 21x18, 22x18, 24x18, 30x18, 37x18 and 45x20. Larger sizes are available in some ranges. Measure your counter cut-out before ordering.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I choose a single bowl or a double bowl sink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A single bowl gives more room for large vessels and suits smaller kitchens. A double bowl lets you wash and rinse separately, which works well for busy households. Monfort offers both.",
          },
        },
        {
          "@type": "Question",
          "name": "What finishes are available for kitchen sinks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Handmade sinks come in Matt, Nano Black, Gold, Mirror and Rose Gold, and Indian sinks in Glossy. The Metallic & Granite series comes in Black, Brown, Gray, Cera Dotted, Ivory Sand, Red Moon and Peach Ivory.",
          },
        },
        {
          "@type": "Question",
          "name": "What decides the price of a kitchen sink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Price depends mainly on the steel grade, thickness, size, finish and type of sink. For an exact quote, share your size, model and quantity with the Monfort team.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Monfort accept bulk, dealer or project orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Monfort accepts bulk, dealer and commercial project enquiries and delivers across India. Share your product category, size and quantity by phone, WhatsApp or the website enquiry form.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I clean a stainless steel sink?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rinse and wipe it dry after use to avoid water marks. Clean with mild soap and a soft cloth, and avoid steel wool or harsh chemicals. For white scale from hard water, wipe with diluted white vinegar and rinse well.",
          },
        },
      ],
    },
  ],
};

export default seoSchema;
