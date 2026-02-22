// ============================================================
// STYLIQ INTERIORS — JSON-LD Structured Data Schemas
// ============================================================

const BASE_URL = 'https://www.styliqinteriors.com';
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Near Laxmi Sweets, Yashwantrao Chavan Road',
  addressLocality: 'Pimpri Colony',
  addressRegion: 'Maharashtra',
  postalCode: '411018',
  addressCountry: 'IN',
};
const GEO = { '@type': 'GeoCoordinates', latitude: 18.6263, longitude: 73.7972 };
const PHONES = ['+917447415182', '+918805500590'];
const HOURS = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
];

// ─── Organization ───────────────────────────────────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'InteriorDesigner',
  '@id': `${BASE_URL}/#organization`,
  name: 'STYLIQ INTERIORS',
  alternateName: 'Styliq Interiors Pune',
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.PNG` },
  image: `${BASE_URL}/og-image.jpg`,
  description: "Pune's first theme-based interior design studio. Modern, Classic, Neo-Classic and Bohemian interiors for residential and commercial spaces.",
  address: ADDRESS,
  telephone: PHONES,
  email: 'istyliq@gmail.com',
  openingHoursSpecification: HOURS,
  sameAs: ['https://www.instagram.com/styliqinteriors/'],
  priceRange: '₹₹₹',
};

// ─── LocalBusiness ──────────────────────────────────────────
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'InteriorDesigner'],
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'STYLIQ INTERIORS',
  description: "Pune's premier theme-based interior design studio offering residential and commercial interior design services.",
  url: BASE_URL,
  telephone: '+917447415182',
  email: 'istyliq@gmail.com',
  address: ADDRESS,
  geo: GEO,
  openingHoursSpecification: HOURS,
  hasMap: 'https://maps.app.goo.gl/9QwaAzt7pmssKCeN7',
  image: `${BASE_URL}/og-image.jpg`,
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Pimpri-Chinchwad' },
    { '@type': 'State', name: 'Maharashtra' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
  },
};

// ─── Services ───────────────────────────────────────────────
export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Interior Design Pune',
    serviceType: 'Full Home Residential Interior Design',
    description: 'Complete residential interior design services in Pune. We create personalised home interiors across Modern, Classic, Neo-Classic and Bohemian themes.',
    provider: { '@type': 'LocalBusiness', name: 'STYLIQ INTERIORS', url: BASE_URL },
    areaServed: { '@type': 'City', name: 'Pune' },
    url: `${BASE_URL}/services`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Interior Design Pune',
    serviceType: 'Full Commercial Interior Design',
    description: 'Professional commercial interior design in Pune for offices, retail spaces, restaurants, and hotels. Functional and inspiring work environments.',
    provider: { '@type': 'LocalBusiness', name: 'STYLIQ INTERIORS', url: BASE_URL },
    areaServed: { '@type': 'City', name: 'Pune' },
    url: `${BASE_URL}/services`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Architectural Planning Pune',
    serviceType: 'Architectural Planning & Design',
    description: 'Expert architectural planning combining structural precision with aesthetic beauty. Space planning, layouts, and detailed drawings.',
    provider: { '@type': 'LocalBusiness', name: 'STYLIQ INTERIORS', url: BASE_URL },
    areaServed: { '@type': 'City', name: 'Pune' },
    url: `${BASE_URL}/services`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '3D Interior Renders & Visualization Pune',
    serviceType: 'Realistic 3D Renders & Designs',
    description: 'Photorealistic 3D interior renders and design visualization in Pune. See your dream space before construction begins.',
    provider: { '@type': 'LocalBusiness', name: 'STYLIQ INTERIORS', url: BASE_URL },
    areaServed: { '@type': 'City', name: 'Pune' },
    url: `${BASE_URL}/services`,
  },
];

// ─── FAQ ────────────────────────────────────────────────────
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What interior design styles does STYLIQ INTERIORS offer in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'STYLIQ INTERIORS offers four curated design themes: Modern Interior, Classic Interior, Neo-Classic Interior, and Bohemian (BOHO) Interior. Each theme is executed consistently across every element of your space.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does interior design cost in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interior design costs vary based on project scope, theme, and space size. STYLIQ INTERIORS provides transparent, customised pricing. Contact us at +91 7447415182 or book a free consultation to get a detailed quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does STYLIQ INTERIORS handle both residential and commercial interiors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. STYLIQ INTERIORS offers full home residential interiors, complete commercial interior projects, design consultancy, and architectural planning — all in Pune.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is STYLIQ INTERIORS located in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'STYLIQ INTERIORS is located near Laxmi Sweets, Yashwantrao Chavan Road, Pimpri Colony, Pune – 411018. You can visit us Monday to Friday 9AM–6PM or Saturday 10AM–2PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an interior design project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines depend on the scale and type. A single-room makeover may take 4–6 weeks, while a full home project may take 3–6 months. STYLIQ INTERIORS is committed to on-time delivery every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does STYLIQ INTERIORS provide 3D design renders before execution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. STYLIQ INTERIORS provides photorealistic 3D renders and design visualizations so you can see and approve your space before any work begins.',
      },
    },
  ],
};

// ─── Breadcrumb Builder ──────────────────────────────────────
export const buildBreadcrumb = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
});

// ─── WebPage Builder ─────────────────────────────────────────
export const buildWebPage = (title: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: `${BASE_URL}${url}`,
  isPartOf: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'en-IN',
});
