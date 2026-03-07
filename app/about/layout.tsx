import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Case Compass',
  description:
    'Case Compass is a smart-intake platform built exclusively for high-volume plaintiff firms. Learn about our team and vision for the future of legal intake.',
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
  return children
}
