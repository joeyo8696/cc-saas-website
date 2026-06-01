import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy — Case Compass' },
  description:
    'Case Compass Privacy Policy. Learn how we collect, use, and protect your personal information when you use our legal intake platform.',
  alternates: {
    canonical: 'https://www.casecompass.io/privacy',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/privacy',
    siteName: 'Case Compass',
    title: 'Privacy Policy — Case Compass',
    description: 'Case Compass Privacy Policy. Learn how we collect, use, and protect your personal information.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Privacy Policy' }],
  },
  twitter: {
    card: 'summary',
    site: '@Case_Compass_',
    title: 'Privacy Policy — Case Compass',
    description: 'How Case Compass collects, uses, and protects your data.',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
