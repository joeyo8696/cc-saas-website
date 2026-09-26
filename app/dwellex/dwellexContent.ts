/** Visible FAQ and FAQPage JSON-LD share this list. */

export const DWELLEX_META_DESCRIPTION =
  'Eviction case management for landlord-tenant law firms and property managers. Batch state-specific notices like Pay or Quit, track court dates, cure periods and vacate deadlines, and pay per case, not per seat.'

export const dwellexFaqs: { question: string; answer: string }[] = [
  {
    question: 'Does Dwellex generate state-specific eviction notices?',
    answer:
      'Yes. State-specific compliance produces legally valid notices — including Pay or Quit notices — tailored to local housing laws and your configured court rules, so you can batch, preview and serve documents that match each jurisdiction.',
  },
  {
    question: 'How does deadline and date tracking work?',
    answer:
      'Dwellex sends automated reminders for court dates, cure periods, and vacate deadlines. Matter timelines hold attorney and client tasks with due dates, and email or SMS milestones keep hearing days and cure windows from slipping.',
  },
  {
    question: 'Can we use our own workflows and court rules?',
    answer:
      'Yes. Configure case templates, action items, document templates and court-specific notice rules. Firm administrators can maintain jurisdiction details and expiration settings.',
  },
  {
    question: 'What can landlords and property managers see?',
    answer:
      'Clients can submit intake, upload documents and follow their case timeline in a secure portal. Role-based access controls who can view and work on matters.',
  },
  {
    question: 'Does Dwellex connect to Clio?',
    answer:
      'Yes. Dwellex supports bidirectional Clio synchronization for case information, tasks and documents, with controls for sync scope and document visibility.',
  },
  {
    question: 'What does getting started involve?',
    answer:
      'Implementation is scoped around your existing systems and caseload, including data migration, workflow configuration, jurisdiction setup and team training. A demo is the first step toward a plan for your practice.',
  },
  {
    question: 'What is the best eviction software for law firms?',
    answer:
      'It depends on volume and how your firm works. Firms filing eviction cases at volume usually need batch notice generation, jurisdiction-specific court rules, automated deadline tracking and a client portal for property managers. Dwellex is built specifically for landlord-tenant practices, with unlimited users, published per-case pricing, and integrations with Clio, PracticePanther and Rent Manager.',
  },
  {
    question: 'How much does eviction software cost?',
    answer:
      'Dwellex is $399 per month plus a per-case fee: $8.00 per case up to 50 cases a month, $6.50 for 51 to 150, $5.00 for 151 to 999, and a custom flat rate at 1,000 or more. Users are unlimited. Implementation, training and custom integrations are scoped separately.',
  },
  {
    question: 'Can property managers send evictions to their attorney electronically?',
    answer:
      'Yes. With Dwellex, property managers submit tenant details and documents through a secure portal or a CSV export from their property management system. The firm reviews each request before creating the case, and the property manager can follow every case timeline from the same portal.',
  },
]

export const dwellexFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: dwellexFaqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const dwellexSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dwellex',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Eviction and landlord-tenant case management',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/dwellex',
  description: DWELLEX_META_DESCRIPTION,
  image: 'https://www.casecompass.io/images/dwellex-dashboard.png',
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  offers: {
    '@type': 'Offer',
    price: '399',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '399',
      priceCurrency: 'USD',
      billingDuration: 'P1M',
      description: 'Monthly platform fee. Per-case fees apply on top of this price.',
    },
  },
  featureList: [
    'State-specific eviction notices including Pay or Quit',
    'Batch notice generation from property management CSV exports',
    'Automated reminders for court dates, cure periods and vacate deadlines',
    'Landlord and property manager client portal',
    'Clio bidirectional sync',
    'PracticePanther and Rent Manager integrations',
    'Unlimited users with role-based access',
  ],
}

export const dwellexBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Dwellex', item: 'https://www.casecompass.io/dwellex' },
  ],
}
