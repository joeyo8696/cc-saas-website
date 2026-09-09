import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Mass Tort Intake, Scoring & MDL Portfolio Management | Case Compass' },
  description:
    'Case Compass helps plaintiff firms capture, score, and manage mass tort leads at scale. Waypoint AI scores every intake automatically. MDL Portfolios organize your entire caseload by litigation.',
  keywords: [
    'mass tort intake software',
    'MDL portfolio management',
    'mass tort lead management',
    'Waypoint AI mass tort',
    'mass tort claimant intake',
    'Depo-Provera intake',
    'Roundup intake software',
    'mass tort law firm software',
    'class action intake',
    'mass tort marketing',
    'mass tort advertising intake',
    'Hair Relaxer MDL intake',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/mass-torts',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/mass-torts',
    siteName: 'Case Compass',
    title: 'Mass Tort Intake, Scoring & MDL Portfolio Management | Case Compass',
    description:
      'Score every mass tort intake with Waypoint AI. Group leads by MDL with portfolio dashboards.',
    images: [
      {
        url: '/images/mdl-portfolio-stats.png',
        width: 1200,
        height: 630,
        alt: 'MDL Portfolio Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mass Tort Intake, Scoring & MDL Portfolio Management | Case Compass',
    description: 'Score every mass tort intake automatically with Waypoint AI. Manage your MDL caseload with portfolio dashboards.',
    images: ['/images/mdl-portfolio-stats.png'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Case Compass handle high-volume mass tort intake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass handles intake at any volume — chatbots, webforms, and live transfer channels all feed directly into the same pipeline. The moment a claimant submits, Waypoint AI scores the intake against your tort-specific criteria. Your team sees scores and summaries without manually reviewing every submission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Waypoint score criteria specific to a particular mass tort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Waypoint criteria are fully customizable per form and case type. You define what a qualified claimant looks like for your specific tort — exposure duration, diagnosis, statute of limitations, product use dates, and more. Pre-built criteria sets are available for Depo-Provera, Roundup (Glyphosate), and other active mass torts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Case Compass support referral partner networks for mass torts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass includes a dedicated Referral Partner Portal where co-counsel, referring attorneys, and marketing partners can log in to track the status of every lead they have referred. Fee tracking, lead attribution, and reporting are all built in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which active mass torts does Case Compass support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass is currently used for Depo-Provera, Roundup (Glyphosate), and personal injury mass tort campaigns. Because Waypoint criteria are fully custom, firms can build intake scoring for any active or emerging tort in minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with legal CMS platforms used in mass tort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates with Filevine, Clio, LeadDocket, Litify, and other case management systems. Signed clients push automatically so your team can start working the case without manual data entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MDL Portfolio Management in Case Compass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MDL Portfolios let you group all leads related to a specific litigation — by intake form, marketing campaign, or both — into a named portfolio (e.g. "Hair Relaxer MDL 3060"). Each portfolio shows a live dashboard with total leads, AI-scored leads, high-value counts, average scores, a score distribution chart, and a full status breakdown. You can export all portfolio leads to CSV at any time, including AI scores and specific intake node responses as additional columns.',
      },
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Mass Tort Intake Software', item: 'https://www.casecompass.io/solutions/mass-torts' },
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Case Compass Mass Tort Intake',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Mass Tort Intake Software',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/solutions/mass-torts',
  description:
    'Mass tort intake, Waypoint AI scoring, and MDL Portfolio Management for plaintiff firms running active tort campaigns.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing',
  },
  featureList: [
    'Waypoint scoring per tort',
    'MDL Portfolio dashboards',
    'High-volume intake channels',
    'Referral partner portal',
    'Pre-built criteria for active torts',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

export default function MassTortsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      {children}
    </>
  )
}
