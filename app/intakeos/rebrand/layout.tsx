import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Case Compass intake is now IntakeOS' },
  description:
    'Same platform, sharper name. Case Compass’s intake product is now IntakeOS — the same login, workflows, and team, under a name that makes room for Torvana and Dwellex.',
  alternates: {
    canonical: 'https://www.casecompass.io/intakeos/rebrand',
  },
  openGraph: {
    title: 'Case Compass intake is now IntakeOS',
    description:
      'Same product, same team, same login. What changed is the name on the door — and what that name makes room for.',
    url: 'https://www.casecompass.io/intakeos/rebrand',
    images: [{ url: '/images/intakeos-logo.png', width: 774, height: 144, alt: 'IntakeOS' }],
  },
  twitter: {
    card: 'summary',
    title: 'Case Compass intake is now IntakeOS',
    description:
      'Same product, same team, same login. Case Compass intake is now IntakeOS.',
    images: ['/images/intakeos-logo.png'],
  },
}

export default function IntakeOSRebrandLayout({ children }: { children: React.ReactNode }) {
  return children
}
