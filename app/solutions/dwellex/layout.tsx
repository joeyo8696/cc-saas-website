import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dwellex — Landlord-Tenant Case Management | Case Compass',
  description:
    'Comprehensive case management and communication tools designed specifically for landlord-tenant law and eviction proceedings. Streamline your practice with automated workflows.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/dwellex',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/dwellex',
    siteName: 'Case Compass',
    title: 'Dwellex — Landlord-Tenant Case Management | Case Compass',
    description: 'Case management and communication tools built for landlord-tenant law and eviction proceedings. Automate workflows, track timelines, and manage every case in one place.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Dwellex Landlord-Tenant Case Management' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dwellex — Landlord-Tenant Case Management | Case Compass',
    description: 'Case management tools built for landlord-tenant law and eviction proceedings.',
  },
}

export default function DwellexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
