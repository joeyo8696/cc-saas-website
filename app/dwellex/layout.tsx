import type { Metadata } from 'next'

const dwellexFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Dwellex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dwellex is landlord–tenant case management software for eviction and housing practices. It covers intake, state-specific notice generation (including Pay or Quit notices tailored to local housing laws), case timelines, automated deadline reminders for court dates, cure periods, and vacate deadlines, court preparation, client portals, and Clio sync — from first intake through lockout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dwellex generate state-specific eviction notices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dwellex includes state-specific compliance for notice generation. It produces legally valid notices — such as Pay or Quit notices — tailored to local housing laws and configured court rules for your jurisdictions, so firms can batch and preview documents that match local requirements before service.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Dwellex track deadlines and dates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dwellex deadline and date tracking sends automated reminders for court dates, cure periods, and vacate deadlines. Matter timelines hold attorney and client tasks with due dates, and email or SMS milestone reminders keep cure windows, hearing dates, and move-out deadlines visible without relying on spreadsheets or calendar hunting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we use our own workflows and court rules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Configure case templates, action items, document templates and court-specific notice rules. Firm administrators can maintain jurisdiction details and expiration settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can landlords and property managers see?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clients can submit intake, upload documents and follow their case timeline in a secure portal. Role-based access controls who can view and work on matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Dwellex connect to Clio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dwellex supports bidirectional Clio synchronization for case information, tasks and documents, with controls for sync scope and document visibility. It also integrates with Practice Panther and Rent Manager.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does getting started involve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Implementation is scoped around your existing systems and caseload, including data migration, workflow configuration, jurisdiction setup and team training. A demo is the first step toward a plan for your practice.',
      },
    },
  ],
}

const dwellexSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dwellex',
  alternateName: 'Dwellex by Case Compass',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Landlord-Tenant Eviction Case Management',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/dwellex',
  description:
    'Dwellex is eviction and landlord–tenant case management software for law firms. State-specific compliance generates legally valid notices such as Pay or Quit notices tailored to local housing laws. Deadline and date tracking sends automated reminders for court dates, cure periods, and vacate deadlines — plus intake, batch notices, court preparation, client portals, and Clio sync.',
  offers: {
    '@type': 'Offer',
    price: '399.00',
    priceCurrency: 'USD',
    description: 'From $399/month platform fee plus per-case pricing; enterprise custom rates available',
  },
  featureList: [
    'State-specific compliance — legally valid notices tailored to local housing laws',
    'Pay or Quit and other jurisdiction-ready eviction notice generation',
    'Batch notice generation from property management CSV uploads',
    'Deadline and date tracking with automated reminders for court dates, cure periods, and vacate deadlines',
    'Shared attorney and client matter timelines with assigned due dates',
    'Email and SMS milestone reminders',
    'Trial Lists for county and session court preparation',
    'Landlord and property manager client portal',
    'Clio, Practice Panther, and Rent Manager integrations',
    'Residential and commercial landlord–tenant matters',
    'Unlimited users with role-based access',
  ],
  audience: {
    '@type': 'Audience',
    audienceType:
      'Landlord-tenant law firms, eviction attorneys, and housing practices that manage notices, cure periods, court dates, and lockouts',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: [
    { '@type': 'Thing', name: 'State-specific eviction notice compliance' },
    { '@type': 'Thing', name: 'Pay or Quit notice generation' },
    { '@type': 'Thing', name: 'Eviction deadline and cure period tracking' },
    { '@type': 'Thing', name: 'Landlord-tenant case management' },
  ],
}

const dwellexWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dwellex — Landlord–Tenant Case Management & Eviction Software',
  url: 'https://www.casecompass.io/dwellex',
  description:
    'Eviction software with state-specific notice compliance (including Pay or Quit notices tailored to local housing laws) and automated deadline tracking for court dates, cure periods, and vacate deadlines.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: {
    '@type': 'SoftwareApplication',
    name: 'Dwellex',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.casecompass.io/images/dwellex-dashboard.png',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.dw-hero h1', '.dw-intro p', '.dw-feature-copy', '.dw-faq details p'],
  },
}

const dwellexBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Dwellex', item: 'https://www.casecompass.io/dwellex' },
  ],
}

export const metadata: Metadata = {
  title: { absolute: 'Dwellex — Eviction Software with State-Specific Notices & Deadline Tracking' },
  description:
    'Landlord–tenant case management for eviction practices. Generate legally valid notices like Pay or Quit tailored to local housing laws, and get automated reminders for court dates, cure periods, and vacate deadlines — from intake to lockout.',
  keywords: [
    'eviction software for law firms',
    'landlord tenant case management',
    'state-specific eviction notices',
    'Pay or Quit notice software',
    'legally valid eviction notices',
    'local housing law notice generation',
    'eviction deadline reminder software',
    'cure period tracking software',
    'vacate deadline reminders',
    'court date reminders eviction',
    'batch eviction notice generation',
    'landlord tenant law firm software',
    'eviction workflow automation',
    'clio eviction integration',
    'EasyEviction alternative',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/dwellex',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/dwellex',
    siteName: 'Case Compass',
    title: 'Dwellex — State-specific notices. Deadlines that stay on track.',
    description:
      'Generate legally valid notices tailored to local housing laws, and automate reminders for court dates, cure periods, and vacate deadlines.',
    images: [
      {
        url: '/images/dwellex-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Dwellex eviction case management — batch notices and matter workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dwellex — Eviction Software with State-Specific Notices & Deadline Tracking',
    description:
      'Pay or Quit and other jurisdiction-ready notices, plus automated reminders for court dates, cure periods, and vacate deadlines.',
    images: ['/images/dwellex-dashboard.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function DwellexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexBreadcrumbSchema) }}
      />
      {children}
    </>
  )
}
