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
  title: 'About Us — Case Compass',
  description:
    'Case Compass is legal intake software built exclusively for high-volume plaintiff law firms. Learn about our team and our vision for the future of legal intake automation.',
  alternates: {
    canonical: 'https://www.casecompass.io/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/about',
    siteName: 'Case Compass',
    title: 'About Case Compass — Built by Practitioners, for Practitioners',
    description: 'Case Compass is a smart-intake platform built exclusively for high-volume plaintiff firms. Meet the team and learn our vision for the future of legal intake.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'About Case Compass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Case Compass — Built by Practitioners, for Practitioners',
    description: 'Smart-intake platform built exclusively for high-volume plaintiff law firms.',
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
