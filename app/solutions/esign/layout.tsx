import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Signatures in Legal Intake — Close Retainers in the Same Session',
  description:
    'Case Compass lets clients sign retainer agreements, authorization forms, and multi-document packages during the intake session — no redirect, no DocuSign handoff, no drop-off. E-signatures built for plaintiff law firms.',
  keywords: [
    'legal e-signature software',
    'law firm e-signature intake',
    'sign retainer online',
    'legal intake e-sign',
    'DocuSign alternative law firm',
    'in-flow retainer signing',
    'retainer agreement software',
    'plaintiff intake retainer',
    'legal intake signing',
    'online retainer signing',
    'e-signature legal intake',
    'law firm digital signature',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/esign',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/esign',
    siteName: 'Case Compass',
    title: 'E-Signatures in Legal Intake | Case Compass',
    description:
      'Close retainers without leaving the intake flow. In-session e-signatures, multi-doc support, SMS reminders, and signed document delivery — built for plaintiff law firms.',
    images: [
      {
        url: '/images/intake.png',
        width: 1200,
        height: 630,
        alt: 'E-Signatures in Legal Intake',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Signatures in Legal Intake | Case Compass',
    description: 'Close retainers without leaving the intake flow. In-session signing built for plaintiff law firms.',
    images: ['/images/intake.png'],
  },
}

const esignFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can clients sign retainers during the intake session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass includes in-flow e-signature collection as a native step in the intake process. After a claimant completes the intake questions, they are presented with the retainer or authorization form to sign — without leaving the intake session or being redirected to a separate tool. This eliminates a major source of drop-off in the traditional intake funnel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass support multi-document signing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A single eSign step in the intake flow can include multiple documents — for example, a retainer agreement plus a medical authorization form. Clients sign all documents in one session, which is particularly useful for multi-document retainer packages common in personal injury and mass tort cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a client does not sign during intake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass sends automated SMS reminders to claimants with outstanding signature requests. You can configure reminder frequency and timing from the dashboard. The system tracks which leads have pending signatures so your intake team can follow up without manual monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clients download their signed documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once a client has signed, their completed documents are available for download directly from the client portal. Signed documents are also automatically attached to the completion notification emails sent to your team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is e-signature in Case Compass legally binding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass e-signatures comply with the ESIGN Act and UETA, which establish the legal validity of electronic signatures in the United States. Signed documents include an audit trail with timestamp, IP address, and signer identity information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass replace DocuSign or Adobe Sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For intake retainer signing, yes. Case Compass eliminates the need to route claimants through a separate e-signature tool after intake — the signing step is embedded directly in the intake flow. This closes the gap between intake completion and retainer signature, which is where most law firms lose clients.',
      },
    },
  ],
}

const esignBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'E-Signatures in Legal Intake', item: 'https://www.casecompass.io/solutions/esign' },
  ],
}

const esignSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Case Compass eSign',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Legal E-Signature Software',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/solutions/esign',
  description:
    'In-session e-signatures for plaintiff intake — retainers, authorizations, and multi-document packages without leaving the IntakeOS flow.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
  featureList: [
    'In-flow retainer signing',
    'Multi-document packages',
    'SMS reminders for pending signatures',
    'Client portal download',
    'ESIGN Act and UETA compliant audit trail',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

export default function ESignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(esignFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(esignBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(esignSoftwareSchema) }} />
      {children}
    </>
  )
}
