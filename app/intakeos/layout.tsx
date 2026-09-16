import type { Metadata } from 'next'

const INTAKEOS_URL = 'https://www.casecompass.io/intakeos'

const intakeosFaqs = [
  {
    q: 'What is IntakeOS?',
    a: 'IntakeOS is Case Compass’s intake platform for plaintiff law firms. It connects conversational intake across web, SMS and voice with Waypoint AI scoring, live transfer, e-signatures, referral tracking, and CRM sync — sitting between marketing spend and case management without replacing either.',
  },
  {
    q: 'How is IntakeOS different from a chatbot or contact form?',
    a: 'A basic chatbot or form captures answers. IntakeOS is an operating system for intake: branching qualification, Waypoint AI scoring before staff review, live transfer, in-flow e-signatures, referral partner portals, attribution, and CRM handoff — so leads arrive scored, documented, and ready to convert.',
  },
  {
    q: 'What is Waypoint AI?',
    a: 'Waypoint is the AI lead-scoring engine inside IntakeOS. Every submission is evaluated against your firm’s criteria — case value, liability, treatment, urgency, red flags, and more — so teams prioritize by strength, not arrival order. Waypoint supports bring-your-own-key (BYOK) so intake data stays under your AI credentials.',
  },
  {
    q: 'Does IntakeOS replace our CRM or case management system?',
    a: 'No. IntakeOS runs between your marketing channels and your case management system. Your CRM stays. Integrations include Litify, Filevine, LeadDocket, Clio, HubSpot, and Zapier.',
  },
  {
    q: 'Who is IntakeOS built for?',
    a: 'Plaintiff firms running high-volume intake — personal injury, mass torts and MDL, workers’ compensation, consumer litigation, and similar practices that need to qualify and convert leads before they hit the case team.',
  },
]

const intakeosFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: intakeosFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const intakeosSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'IntakeOS',
  alternateName: ['Intake OS', 'Case Compass Intake'],
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Legal Intake Software',
  operatingSystem: 'Web',
  url: INTAKEOS_URL,
  description:
    'IntakeOS is plaintiff-firm intake software from Case Compass: conversational intake, Waypoint AI scoring, live transfer, e-signatures, referral tracking, and CRM sync.',
  featureList: [
    'Conversational intake across web, SMS, and voice',
    'Waypoint AI lead scoring with firm-defined criteria',
    'Live transfer and agent workforce inbox',
    'In-flow e-signature for retainers and authorizations',
    'Referral partner portal and fee tracking',
    'Mass tort / MDL portfolio dashboards',
    'Marketing attribution from ad click to signed retainer',
    'CRM sync with Litify, Filevine, LeadDocket, and Clio',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Plaintiff law firms',
  },
  provider: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: [
    { '@type': 'Thing', name: 'Legal intake software' },
    { '@type': 'Thing', name: 'AI lead scoring for law firms' },
    { '@type': 'Thing', name: 'Mass tort intake automation' },
  ],
}

const intakeosWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'IntakeOS — Turn first contact into forward motion',
  url: INTAKEOS_URL,
  description:
    'IntakeOS connects conversational intake, Waypoint AI scoring, live transfer and e-signatures for plaintiff law firms.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: { '@type': 'SoftwareApplication', name: 'IntakeOS' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.io-headline p', '.eyebrow'],
  },
}

const intakeosBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Case Compass', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'IntakeOS', item: INTAKEOS_URL },
  ],
}

export const metadata: Metadata = {
  title: { absolute: 'IntakeOS — Legal Intake Software for Plaintiff Law Firms' },
  description:
    'IntakeOS is Case Compass’s intake platform for plaintiff firms: conversational intake, Waypoint AI scoring, live transfer, e-signatures, referral tracking, and CRM sync — without replacing your case management system.',
  keywords: [
    'legal intake software',
    'IntakeOS',
    'plaintiff law firm intake',
    'AI legal intake',
    'Waypoint AI scoring',
    'mass tort intake software',
    'law firm live transfer',
    'legal e-signature intake',
    'referral partner portal law firm',
    'SimplyConvert alternative',
  ],
  alternates: {
    canonical: INTAKEOS_URL,
  },
  openGraph: {
    type: 'website',
    title: 'IntakeOS — Turn first contact into forward motion.',
    description:
      'Conversational intake, Waypoint AI scoring, live transfer and e-signatures for plaintiff law firms.',
    url: INTAKEOS_URL,
    siteName: 'Case Compass',
    images: [{ url: '/images/intakeos-logo.png', width: 774, height: 144, alt: 'IntakeOS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntakeOS — Legal Intake Software for Plaintiff Law Firms',
    description:
      'Conversational intake, Waypoint AI scoring, live transfer and e-signatures for plaintiff law firms.',
    images: ['/images/intakeos-logo.png'],
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

export default function IntakeOSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(intakeosSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(intakeosFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(intakeosWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(intakeosBreadcrumbSchema) }}
      />
      {children}
    </>
  )
}
