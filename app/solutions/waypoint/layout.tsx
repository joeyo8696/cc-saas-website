import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waypoint — AI Lead Scoring for Legal Intake',
  description:
    "Waypoint scores every legal intake submission against your firm's custom criteria before your team opens the file. AI-powered lead scoring built for high-volume plaintiff law firms.",
  keywords: [
    'AI lead scoring law firm',
    'legal lead scoring software',
    'Waypoint AI scoring',
    'plaintiff intake scoring',
    'AI case evaluation software',
    'law firm lead qualification',
    'automated lead scoring legal',
    'intake lead scoring',
    'BYOK AI legal intake',
    'legal AI intake scoring',
    'mass tort lead scoring',
    'personal injury lead scoring',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/waypoint',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/waypoint',
    siteName: 'Case Compass',
    title: 'Waypoint — AI Intake Scoring for Law Firms | Case Compass',
    description:
      "Waypoint scores every intake submission against your firm's custom criteria before your team opens the file.",
    images: [
      {
        url: '/images/waypoint-criteria-list.png',
        width: 1200,
        height: 630,
        alt: 'Waypoint AI Intake Scoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waypoint — AI Intake Scoring for Law Firms | Case Compass',
    description: 'Score every intake submission automatically before your team opens the file.',
    images: ['/images/waypoint-criteria-list.png'],
  },
}

const waypointFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Waypoint score leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Waypoint uses your firm's custom criteria to evaluate each intake submission across multiple dimensions: case value, liability strength, evidence quality, urgency, and any red flags you define. It returns a structured score the moment intake is complete — before your team opens the file.",
      },
    },
    {
      '@type': 'Question',
      name: "Can I customize Waypoint's scoring criteria for my practice area?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Waypoint is fully customizable per practice area. You define what a strong case looks like for mass tort, workers' comp, personal injury, or any other area. Pre-built criteria sets are also available for Depo-Provera, Roblox, and other active mass torts.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does Waypoint compare to manual intake review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manual intake review introduces variance — different staff members evaluate cases differently, leading to inconsistent decisions. Waypoint applies the same documented, defensible evaluation standard to every intake, every time. It also scales infinitely: it evaluates as many intakes simultaneously as your firm receives, with zero delay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Waypoint store my client data or use it to train AI models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Waypoint uses a Bring Your Own Key (BYOK) model — it operates using your firm's own OpenAI API key. Your data never touches a shared model and is never used to train anyone else's AI. Your client information stays yours.",
      },
    },
    {
      '@type': 'Question',
      name: 'What practice areas does Waypoint support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waypoint supports any plaintiff practice area. It is currently used for mass tort, workers\' compensation, personal injury, and landlord-tenant law. Custom criteria can be built for any case type in minutes.',
      },
    },
  ],
}

const waypointBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Waypoint AI Lead Scoring', item: 'https://www.casecompass.io/solutions/waypoint' },
  ],
}

const waypointSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Waypoint AI Lead Scoring',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Legal Lead Scoring Software',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/solutions/waypoint',
  description:
    'AI lead scoring for plaintiff law firms — custom criteria, multi-dimensional scores, and BYOK privacy before your team opens the file.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
  featureList: [
    'Custom criteria per practice area',
    'Multi-dimensional intake scoring',
    'Instant scores before file open',
    'Bring Your Own Key (BYOK)',
    'Pre-built mass tort criteria sets',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

export default function WaypointLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waypointFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waypointBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(waypointSoftwareSchema) }} />
      {children}
    </>
  )
}
