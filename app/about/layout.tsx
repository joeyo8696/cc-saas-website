import type { Metadata } from 'next'

const aboutBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'About Case Compass', item: 'https://www.casecompass.io/about' },
  ],
}

export const metadata: Metadata = {
  title: { absolute: 'About Us — Case Compass' },
  description:
    'Case Compass builds intake infrastructure for plaintiff law (IntakeOS), specialty healthcare (Torvana), and landlord-tenant law (Dwellex). Meet the team and our vision.',
  alternates: {
    canonical: 'https://www.casecompass.io/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/about',
    siteName: 'Case Compass',
    title: 'About Case Compass — Intake infrastructure across practices',
    description: 'Built on intake. Expanding where it matters — IntakeOS, Torvana, and Dwellex.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'About Case Compass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Case Compass — Intake infrastructure across practices',
    description: 'IntakeOS, Torvana, and Dwellex — powered by Case Compass.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }} />
      {children}
    </>
  )
}
