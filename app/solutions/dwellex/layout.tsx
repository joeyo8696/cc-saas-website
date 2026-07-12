import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dwellex — Eviction Software for Law Firms | Landlord-Tenant Case Management',
  description:
    'Dwellex is eviction case management software built for landlord-tenant law firms. Automate intake, track case timelines, generate court documents, and sync with Clio — all in one platform.',
  keywords: [
    'eviction software for law firms',
    'landlord tenant software',
    'eviction case management software',
    'landlord tenant law firm software',
    'eviction management software',
    'eviction case tracking software',
    'eviction attorney software',
    'landlord tenant case management',
    'eviction workflow automation',
    'legal software for eviction cases',
    'eviction intake software',
    'clio eviction integration',
    'EasyEviction alternative',
    'eviction software alternative',
    'best eviction software for law firms',
    'eviction management software comparison',
    'eviction software with Clio integration',
    'eviction software per case pricing',
    'batch eviction notice generation',
    'bulk eviction notice software',
    'eviction notice CSV upload',
    'eviction deadline reminder software',
    'eviction analytics dashboard',
    'landlord tenant document automation',
    'court notice expiration calculator',
    'property management law firm software',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/dwellex',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/dwellex',
    siteName: 'Case Compass',
    title: 'Dwellex — Eviction Software for Law Firms',
    description:
      'End-to-end eviction case management for landlord-tenant law firms. Automate intake, track every step from filing to lockout, generate court documents, and sync with Clio.',
    images: [
      {
        url: '/images/dwellex-case-timeline.png',
        width: 1024,
        height: 700,
        alt: 'Dwellex eviction case management software — case timeline tracker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dwellex — Eviction Software for Law Firms | Landlord-Tenant Case Management',
    description:
      'End-to-end eviction case management for landlord-tenant law firms. Automate intake, track timelines, generate court documents, and sync with Clio.',
    images: ['/images/dwellex-case-timeline.png'],
  },
}

export default function DwellexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
