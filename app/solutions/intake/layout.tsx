import type { Metadata } from 'next'

const intakeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is legal intake software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legal intake software automates the process of capturing, qualifying, scoring, and routing potential clients for a law firm. It replaces manual intake workflows — phone screening, flat contact forms, and email queues — with an automated system that qualifies leads before your team reviews them, triggers follow-up instantly, and can close a retainer in the same session as the initial inquiry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are legal intake services and how do they work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legal intake services cover everything from the moment a potential client first contacts a law firm to the point where they become a signed client. This includes lead capture, case qualification, AI-powered lead scoring, automated follow-up, live transfer to intake staff, e-signature retainer collection, and CMS sync. Case Compass delivers all of these as an integrated platform rather than requiring separate tools for each step.',
      },
    },
    {
      '@type': 'Question',
      name: 'What intake channels does Case Compass support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass supports AI-powered chatbots, custom webforms, live transfer queues, and embedded intake widgets. Each channel can be deployed independently or together, depending on your firm\'s workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Case Compass handle live transfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Live Transfer routes qualified leads directly to available staff via an intelligent queue. When a prospect scores above your threshold, they\'re connected in real time. If no one is available, the system captures their information, sends an e-sign retainer, and schedules a callback.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with Clio, Filevine, or other case management software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates with Clio, Filevine, Litify, SmartAdvocate, LeadDocket, MyCase, and more. Signed cases are automatically pushed to your case management system with no manual data entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between Case Compass and a basic chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic chatbot collects information. Case Compass qualifies, scores, routes, and converts leads — all in one automated flow. It includes Waypoint AI scoring, e-signature collection, live transfer, and CMS integration. It\'s a full intake platform, not just a chat widget.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can we go live with Case Compass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most firms are live within one week. Onboarding is included — Case Compass builds your intake bot, configures Waypoint scoring for your practice area, and deploys your first automated flow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Case Compass HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass is hosted on AWS infrastructure with encryption at rest and TLS 1.2+ in transit. The platform is designed with legal data privacy requirements in mind. Contact us for details on BAA availability.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Legal Intake Software & Services for Plaintiff Law Firms | Case Compass',
  description:
    'Case Compass is legal intake software built for plaintiff law firms. Automate legal intake services with AI chatbots, smart webforms, live transfer, Waypoint lead scoring, and e-signatures — from first contact to signed retainer.',
  keywords: 'legal intake software, legal intake services, law firm intake software, plaintiff intake automation, legal lead intake, attorney intake software, mass tort intake, live transfer intake',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/intake',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/intake',
    siteName: 'Case Compass',
    title: 'Legal Intake Software & Services for Plaintiff Law Firms | Case Compass',
    description: 'Automate your legal intake services with AI chatbots, smart webforms, live transfer, AI lead scoring, and e-signatures in one seamless flow.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Legal Intake Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Intake Software & Services for Plaintiff Law Firms | Case Compass',
    description: 'AI chatbots, webforms, live transfer, lead scoring, and e-signatures — full legal intake services in one platform.',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Case Compass',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Legal Intake Software',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io',
  description: 'Case Compass is legal intake software and services for plaintiff law firms. Automate lead capture, AI lead scoring, live transfer, e-signature retainers, and CMS sync in a single platform.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
  featureList: [
    'AI-powered legal intake chatbot',
    'Smart webforms with branching qualification logic',
    'Waypoint AI lead scoring',
    'Live transfer queue for qualified leads',
    'In-session e-signature retainer collection',
    'Automated SMS and email follow-up',
    'Filevine, Clio, Litify, LeadDocket CRM integration',
    'Mass tort and MDL intake workflows',
    'Marketing attribution and intake analytics',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Plaintiff law firms',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Legal Intake Software', item: 'https://www.casecompass.io/solutions/intake' },
  ],
}

export default function QualificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(intakeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
