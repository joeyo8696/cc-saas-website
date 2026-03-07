import type { Metadata } from 'next'

const workersCompFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes workers\' comp intake different from other practice areas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Workers\' comp intake requires capturing precise injury details, employer information, date of incident, and medical treatment history upfront. Case Compass uses branching logic to collect the right information for every workers\' comp intake scenario, reducing back-and-forth with potential clients and ensuring your team has everything needed to evaluate the case immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass handle Spanish-language intake for workers\' comp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass supports multi-language intake flows, including Spanish. Workers\' comp firms serving Spanish-speaking communities can deploy fully bilingual intake bots and webforms, ensuring every potential client can complete the intake process in their preferred language.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Case Compass speed up the workers\' comp retainer process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass qualifies leads automatically through Waypoint AI scoring, then routes high-value claimants directly to live transfer or sends an automated e-sign retainer. This reduces the average time to a signed retainer from days to hours, without requiring additional staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Case Compass handle high-volume workers\' comp lead generation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass is designed for high-volume intake. It handles unlimited simultaneous intake conversations, qualifies leads 24/7, and automatically filters out non-qualified claimants — so your staff only spends time on cases worth pursuing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Case Compass integrate with workers\' comp case management systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass integrates with Clio, Filevine, SmartAdvocate, and other major case management platforms. Once a workers\' comp claimant signs a retainer, their case data is automatically pushed to your system — no manual entry, no lost paperwork.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Workers\' Compensation Intake Software | Case Compass',
  description:
    'Case Compass automates intake qualification, speed-to-lead outreach, and document generation for workers\' comp firms. Sign more cases, work fewer hours.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/workers-comp',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/workers-comp',
    siteName: 'Case Compass',
    title: 'Workers\' Compensation Intake Software | Case Compass',
    description: 'Automate intake qualification, speed-to-lead outreach, and document generation for workers\' comp firms. Sign more cases, work fewer hours.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Workers\' Comp Intake' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workers\' Compensation Intake Software | Case Compass',
    description: 'Automate intake qualification and sign more workers\' comp cases with Case Compass.',
  },
}

export default function WorkersCompLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workersCompFaqSchema) }}
      />
      {children}
    </>
  )
}
