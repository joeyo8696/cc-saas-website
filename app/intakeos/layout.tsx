import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'IntakeOS — Turn first contact into forward motion.' },
  description:
    'IntakeOS connects conversational intake, Waypoint AI scoring, live transfer and e-signatures for plaintiff law firms.',
  alternates: {
    canonical: 'https://www.casecompass.io/intakeos',
  },
  openGraph: {
    title: 'IntakeOS — Turn first contact into forward motion.',
    description:
      'Conversational intake, Waypoint AI scoring, live transfer and e-signatures for plaintiff law firms.',
    url: 'https://www.casecompass.io/intakeos',
    images: [{ url: '/images/intakeos-logo.png', width: 774, height: 144, alt: 'IntakeOS' }],
  },
  twitter: {
    card: 'summary',
    title: 'IntakeOS — Turn first contact into forward motion.',
    description:
      'Conversational intake, Waypoint AI scoring, live transfer and e-signatures for plaintiff law firms.',
    images: ['/images/intakeos-logo.png'],
  },
}

export default function IntakeOSLayout({ children }: { children: React.ReactNode }) {
  return children
}
