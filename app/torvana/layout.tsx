import type { Metadata } from 'next'

const torvanaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Torvana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Torvana is a patient intake and referral management platform for specialty medical practices. It automates mobile patient intake, HIPAA authorization, appointment scheduling, medical records retrieval, and provides a real-time status portal for referring attorneys and providers — built for imaging centers, orthopedics, surgery centers, and pain management practices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of medical practices is Torvana built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Torvana is designed for specialty medical practices that operate on a referral model — including imaging centers, orthopedic practices, surgery centers, and pain management clinics. These are centers where patients arrive through attorney or provider referrals and where intake, scheduling, and records coordination with referring firms is a significant operational challenge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Torvana replace our existing EHR, PACS, or RIS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Torvana runs alongside your existing scheduling system, PACS, or EHR. Integration is scoped and stood up during onboarding. Once connected, appointments and status write back to your existing systems automatically — no migration, no data cutover, no new system of record.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does patient intake work with Torvana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Torvana sends patients a text link with a six-digit code. The patient completes their health history, HIPAA authorization, and e-signature on their phone — no app download or password required. The completed packet is available before the patient arrives. Intake typically takes about five minutes and is captured before the appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do referring attorneys see in the Torvana portal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Referring attorneys and providers have access to a portal scoped to their own firm's patients. They can see real-time intake status, confirmed appointments, records availability, and case updates — without calling the practice for status. The portal is branded for your practice, not a shared referral marketplace.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Torvana HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Torvana is built for PHI from the ground up. The platform includes HIPAA-compliant architecture, signed BAAs with every vendor that touches patient data, HIPAA authorization captured and stored as a signed record, and a full audit trail on every record request and release.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does medical records retrieval work in Torvana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "With signed HIPAA authorization on file, Torvana initiates records retrieval automatically — without staff involvement. Most records requests are fulfilled within 24–48 hours. The referring attorney or provider sees retrieval status live in their portal instead of calling your front desk.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AI medical chronology in Torvana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After records are retrieved, Torvana assembles them into a dated medical chronology with diagnoses, billing totals, and record flags automatically highlighted. The chronology is delivered back to the referring attorney — no staff time required to compile or format it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Torvana sell access to a referral network?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Torvana does not sell access to a referral network or marketplace. It is a practice-owned platform that serves the referring attorneys and providers your practice already works with. Your portal, your referring firms, your cases — no network-access model.',
      },
    },
  ],
}

const torvanaSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Torvana',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Medical Practice Intake & Referral Automation',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/torvana',
  description: 'Torvana automates patient intake, HIPAA authorization, appointment scheduling, medical records retrieval, and referring attorney visibility for specialty medical practices. Runs alongside your existing EHR, PACS, or RIS.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
  featureList: [
    'Mobile patient intake via text link — no app or password',
    'HIPAA authorization and e-signature capture',
    'Referring attorney and provider portal with real-time case status',
    'Automated appointment scheduling and recall campaigns',
    'Medical records retrieval — automated with authorization on file',
    'AI medical chronology generation',
    'EHR, PACS, and RIS integration',
    'Workflow automation timeline builder',
    'Intake analytics and marketing funnel reporting',
    'HIPAA-compliant architecture with full audit trail',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Specialty medical practices including imaging centers, orthopedics, surgery centers, and pain management practices',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

const torvanaBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Torvana', item: 'https://www.casecompass.io/torvana' },
  ],
}

export const metadata: Metadata = {
  title: 'Torvana — Medical Practice Intake & Referral Automation',
  description:
    'Connect your patients, your practice and the attorneys who refer to you. Mobile intake, scheduling, automated recall, HIPAA authorization, and a referring attorney portal — built for specialty medical practices.',
  keywords: [
    'medical practice intake software',
    'referring attorney portal',
    'specialty practice referral automation',
    'HIPAA intake software',
    'imaging center patient intake',
    'medical records automation',
    'PI attorney referral portal',
    'patient intake scheduling',
    'medical chronology software',
    'healthcare referral management',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/torvana',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/torvana',
    siteName: 'Torvana',
    title: 'Torvana — The referral moves. Everyone knows.',
    description:
      'Mobile patient intake, scheduling, HIPAA authorization, medical records retrieval, and a real-time attorney portal. Built for specialty medical practices.',
    images: [{ url: '/torvana.svg', width: 1200, height: 630, alt: 'Torvana — Powered by Case Compass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torvana — Medical Practice Intake & Referral Automation',
    description:
      'Connect patients, practices and referring attorneys. HIPAA-compliant intake, scheduling, records retrieval and attorney visibility — all connected.',
  },
}

export default function TorvanaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaSoftwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaBreadcrumbSchema) }} />
      {children}
    </>
  )
}
