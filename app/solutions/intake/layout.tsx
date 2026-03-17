import type { Metadata } from 'next'

const intakeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
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
  title: 'Legal Intake Software — Qualify Every Lead, Automatically',
  description:
    'Case Compass is legal intake software for plaintiff law firms. Automate client intake with AI chatbots, webforms, live transfer, Waypoint lead scoring, and e-signatures in a single seamless flow.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/intake',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/intake',
    siteName: 'Case Compass',
    title: 'Intelligent Intake — Qualify Every Lead, Automatically | Case Compass',
    description: 'Chatbots, webforms, live transfer, AI scoring, and e-signatures in a single seamless intake flow. Built for plaintiff law firms.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Intelligent Intake' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Intake — Qualify Every Lead, Automatically | Case Compass',
    description: 'Chatbots, webforms, live transfer, AI scoring, and e-signatures in one flow.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(intakeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
