import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Referral Network Software — Partner Portals, Co-Counsel Agreements & Fee Tracking',
  description:
    'Referral Network in IntakeOS and Torvana: partner portals, outbound handoffs, co-counsel agreements, fee tracking and referring-attorney visibility — without spreadsheets.',
  keywords: [
    'legal referral network software',
    'attorney referral portal',
    'co-counsel agreement software',
    'referral fee tracking law firm',
    'legal referral partner management',
    'law firm referral software',
    'attorney referral tracking',
    'legal marketing referral software',
    'plaintiff firm referral network',
    'case referral management',
    'legal intake referral',
    'law firm lead referral',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/referrals',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/referrals',
    siteName: 'Case Compass',
    title: 'Legal Referral Network | Case Compass',
    description:
      'Referral Network for IntakeOS and Torvana — partner portals, co-counsel agreements, fee tracking and referring-attorney visibility.',
    images: [
      {
        url: '/images/referrals-outbound-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Case Compass Referral Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Referral Network | Case Compass',
    description:
      'Two-way referral management with partner portals, co-counsel agreements, e-signatures, and fee tracking for plaintiff law firms.',
    images: ['/images/referrals-outbound-dashboard.png'],
  },
}

const referralsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Referral Network available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Referral Network is supported in IntakeOS for plaintiff law firms and in Torvana for specialty medical practices. Firms use it for inbound partner portals, outbound co-counsel workflows and fee tracking. Practices use it to give referring attorneys scoped visibility into intake, appointments and records — and the same network layer when a fuller two-way loop is needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do referral partners submit leads in Case Compass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Each referral partner gets a dedicated portal where they can submit leads directly. Partners fill out a structured intake form and can track the real-time status of every lead they've submitted — without any access to your firm's internal dashboard or other clients' information.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can my firm refer cases out to other attorneys through Case Compass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. In IntakeOS, your staff can refer any case to a partner firm, set the referral fee percentage, and send the partner a secure email link to accept or decline. The partner can also accept or decline directly from their referrer portal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the co-counsel agreement work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once a partner accepts an outbound referral, your staff can generate a co-counsel fee agreement as a PDF directly in Case Compass. The referring firm types their name to sign electronically, and the agreement is emailed to the partner. The partner then reviews it in their portal and signs with their own typed signature. Both signed copies are automatically emailed to both parties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I track referral fees automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass automatically generates a fee record when an intake from a referral partner completes, and also tracks outbound referral fees when a referred case resolves. You can set fee percentages, mark fees as paid, add notes, and maintain a full ledger — without spreadsheets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are referral partners onboarded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New referral partners receive a secure invitation email with a link to activate their portal and set up their account. The entire onboarding process is self-serve — no credentials to share manually, no back-and-forth. Partners can be activated or deactivated from your dashboard at any time.',
      },
    },
    {
      '@type': 'Question',
      name: "Do referring partners see my firm's internal dashboard?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Partners have access only to their own branded portal, where they see leads they\'ve submitted, referrals they\'ve received from your firm, and the status of each. They cannot see your internal lead pipeline, other clients\' information, or any firm data outside of their own referrals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What reporting is available for referral partner performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The referral reporting dashboard shows leads submitted, intakes completed, conversion rates, and fee totals for every partner — individually and in aggregate. You can identify which partners are sending the highest-quality leads and focus relationship management accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass support automated referral routing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Through Waypoint AI scoring tiers in IntakeOS, cases that meet specific criteria can be automatically routed to partner firms as outbound referrals — without staff intervention. This is ideal for cases outside your practice area or geographic footprint.',
      },
    },
  ],
}

const referralsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Referral Network', item: 'https://www.casecompass.io/solutions/referrals' },
  ],
}

const referralsSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Case Compass Referral Network',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Legal Referral Network Software',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/solutions/referrals',
  description:
    'Referral Network for IntakeOS and Torvana — partner portals, outbound handoffs, co-counsel agreements, fee tracking and referring-attorney visibility.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
  featureList: [
    'Inbound partner attorney portals',
    'Outbound case referral workflow',
    'Auto-generated co-counsel fee agreements',
    'Type-to-sign for both firms',
    'Automatic referral fee tracking',
    'Partner performance reporting',
    'Waypoint-triggered auto-referrals',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

export default function ReferralsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(referralsFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(referralsBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(referralsSoftwareSchema) }} />
      {children}
    </>
  )
}
