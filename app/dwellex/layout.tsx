import type { Metadata } from 'next'
import {
  DWELLEX_META_DESCRIPTION,
  dwellexBreadcrumbSchema,
  dwellexFaqSchema,
  dwellexSoftwareSchema,
} from './dwellexContent'

const dwellexWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Dwellex — Eviction Software with State-Specific Notices & Deadline Tracking',
  url: 'https://www.casecompass.io/dwellex',
  description: DWELLEX_META_DESCRIPTION,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: {
    '@type': 'SoftwareApplication',
    name: 'Dwellex',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.casecompass.io/images/dwellex-dashboard.png',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.dw-hero h1', '.dw-intro p', '.dw-feature-copy', '.dw-faq details p'],
  },
}

export const metadata: Metadata = {
  title: { absolute: 'Dwellex — Eviction Software with State-Specific Notices & Deadline Tracking' },
  description: DWELLEX_META_DESCRIPTION,
  alternates: {
    canonical: 'https://www.casecompass.io/dwellex',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/dwellex',
    siteName: 'Case Compass',
    title: 'Dwellex — State-specific notices. Deadlines that stay on track.',
    description: DWELLEX_META_DESCRIPTION,
    images: [
      {
        url: '/images/dwellex-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Dwellex eviction case management — batch notices and matter workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dwellex — Eviction Software with State-Specific Notices & Deadline Tracking',
    description: DWELLEX_META_DESCRIPTION,
    images: ['/images/dwellex-dashboard.png'],
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

export default function DwellexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwellexBreadcrumbSchema) }}
      />
      {children}
    </>
  )
}
