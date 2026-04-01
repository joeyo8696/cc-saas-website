import type { Metadata } from 'next'
import { DM_Serif_Display, Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { DemoModalProvider } from '@/components/DemoModalProvider'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.casecompass.io'),
  title: {
    default: 'Case Compass — Smart Intake. Smarter Firms.',
    template: '%s | Case Compass',
  },
  description:
    'Case Compass is legal intake software built for plaintiff law firms. Replace static contact forms with AI-powered conversational intake, score every lead with Waypoint before your team opens the file, automate referral partner management, and close retainers with e-signatures — all in one platform.',
  keywords: [
    'legal intake software',
    'law firm intake software',
    'legal intake automation',
    'plaintiff law firm intake',
    'attorney intake software',
    'AI legal intake',
    'mass tort intake software',
    'workers comp intake software',
    'legal lead qualification',
    'AI lead scoring legal',
    'law firm chatbot intake',
    'legal intake chatbot',
    'simplyconvert alternative',
    'ngage alternative',
    'intake software for law firms',
    'Waypoint AI scoring',
    'legal case intake',
    'plaintiff intake automation',
    'law firm lead conversion',
    'intake management software law',
    'legal referral partner software',
    'referral partner portal law firm',
    'eSign legal intake',
    'law firm contact form alternative',
    'conversational legal intake',
    'replace law firm web form',
    'law firm marketing attribution',
    'signed retainer software',
    'legal intake Litify',
    'intake software Filevine',
    'law firm lead scoring',
    'legal intake live transfer',
    'plaintiff firm intake software',
  ],
  authors: [{ name: 'Case Compass', url: 'https://www.casecompass.io' }],
  creator: 'Case Compass',
  publisher: 'Case Compass',
  alternates: {
    canonical: 'https://www.casecompass.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.casecompass.io',
    siteName: 'Case Compass',
    title: 'Case Compass — Smart Intake. Smarter Firms.',
    description:
      'Automates client intake, qualifies leads with AI, and converts prospects for plaintiff law firms.',
    images: [
      {
        url: '/images/cc-logo-white.png',
        width: 1200,
        height: 630,
        alt: 'Case Compass — Smart Intake. Smarter Firms.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Case_Compass_',
    title: 'Case Compass — Smart Intake. Smarter Firms.',
    description: 'Intelligent Intake, Waypoint AI scoring, and referral management for plaintiff law firms.',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const globalJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.casecompass.io/#organization',
      name: 'Case Compass',
      url: 'https://www.casecompass.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.casecompass.io/favicon.png',
      },
      description: 'Case Compass is legal intake software built exclusively for plaintiff law firms. It automates client intake, qualifies leads with AI, manages referral partners, and converts prospects into signed clients.',
      sameAs: [
        'https://www.linkedin.com/company/case-compass/',
        'https://www.facebook.com/casecompass2024',
        'https://x.com/Case_Compass_',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://www.casecompass.io',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.casecompass.io/#website',
      url: 'https://www.casecompass.io',
      name: 'Case Compass',
      publisher: { '@id': 'https://www.casecompass.io/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.casecompass.io/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.casecompass.io/#software',
      name: 'Case Compass',
      applicationCategory: 'LegalService',
      applicationSubCategory: 'Legal Intake Software',
      operatingSystem: 'Web',
      url: 'https://www.casecompass.io',
      description: 'Case Compass is legal intake software for plaintiff law firms. It automates client intake with AI chatbots and webforms, scores every lead with Waypoint AI, manages referral partner networks, and closes retainers with built-in e-signature — all in one platform.',
      keywords: 'legal intake software, law firm intake automation, plaintiff intake software, mass tort intake, workers comp intake, AI lead scoring, legal chatbot, attorney intake software',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://www.casecompass.io/#organization' },
      },
      featureList: [
        'Legal intake chatbots and webforms',
        'AI-powered lead scoring (Waypoint)',
        'Mass tort intake qualification',
        'Workers compensation intake automation',
        'Live transfer management',
        'Referral partner portal and fee tracking',
        'E-signature retainer closing',
        'Case management integration (Clio, Filevine, Litify, LeadDocket)',
        'UTM and attribution tracking',
        'Intake analytics and reporting',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.casecompass.io/#service',
      name: 'Legal Intake Software',
      serviceType: 'Legal Intake Automation',
      provider: { '@id': 'https://www.casecompass.io/#organization' },
      url: 'https://www.casecompass.io',
      description: 'Case Compass provides legal intake software for plaintiff law firms, including AI chatbot intake, webform intake, Waypoint lead scoring, referral management, and e-signature retainer closing.',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Plaintiff Law Firms',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal Intake Solutions',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Legal Intake Chatbot' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Webform Intake Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waypoint AI Lead Scoring' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mass Tort Intake Qualification' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Referral Partner Management' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.casecompass.io/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is legal intake software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Legal intake software automates the process of capturing, qualifying, and converting prospective clients for law firms. It replaces static contact forms with dynamic, conversational intake flows that collect structured case information, route qualified leads, and trigger automated follow-up — all without manual staff intervention at each step.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AI lead scoring work in law firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI lead scoring for law firms evaluates every intake submission against a firm\'s custom criteria — such as case value, liability indicators, medical treatment, urgency, and red flags — and assigns a score before a staff member reviews it. Case Compass\'s Waypoint engine does this automatically on submission, so intake teams prioritize by case strength rather than by submission order.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a chatbot and a conversational intake platform?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A basic chatbot handles conversational engagement but typically lacks the backend infrastructure for lead scoring, CRM integration, e-signatures, and referral tracking. A conversational intake platform like Case Compass combines the guided intake experience with automated scoring (Waypoint), referral partner portals, in-flow e-signatures, live transfer, and full CRM sync — making it a complete intake operating system rather than a front-end widget.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do law firms track referral partner performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Case Compass includes a dedicated Referral Network module. Each referring attorney or partner gets a portal to submit leads and track real-time statuses. The firm sees leads, intakes, conversion rates, and fee totals for every partner from a single dashboard. Referral fees are tracked and can be marked as paid without spreadsheets.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can law firms collect e-signatures during online intake?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Case Compass includes in-flow e-signature collection, so clients can sign retainer agreements and authorization forms as part of the same intake session — with no redirect to a separate tool. Multi-document signing, SMS reminders for pending signatures, and automatic attachment of signed documents to notification emails are all included.',
          },
        },
        {
          '@type': 'Question',
          name: 'What CRMs does Case Compass integrate with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Case Compass integrates with Litify (Salesforce-based), Filevine, LeadDocket, Clio (Manage and Grow), HubSpot, and Zapier. Practice areas, campaigns, originating URLs, and intake answers sync automatically. Case Compass also offers a WordPress plugin for embedding intake forms directly on a firm\'s website.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does legal intake software take to implement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most firms using Case Compass are live within a few days. Implementation does not require replacing existing systems — Case Compass sits between your marketing channels and your CRM, so there is no rip-and-replace. Intake forms, Waypoint scoring criteria, and CRM integrations are configured during a guided onboarding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Waypoint AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Waypoint is the AI-powered lead scoring engine built into Case Compass. When a prospective client submits an intake, Waypoint automatically evaluates the submission against your firm\'s custom criteria — case value, liability, medical treatment, urgency, statute of limitations, red flags, and more — and surfaces a score in your dashboard before any staff member reviews the lead. Waypoint uses your firm\'s own AI API credentials (BYOK), so intake data never flows through a shared pool.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        <DemoModalProvider>
          {children}
        </DemoModalProvider>
        <Analytics />
      </body>
    </html>
  )
}
