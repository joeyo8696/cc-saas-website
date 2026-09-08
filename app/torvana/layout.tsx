import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Torvana — Medical Practice Intake & Referral Automation',
  description:
    'Connect your patients, your practice and the attorneys who refer to you. Mobile intake, scheduling, automated recall, HIPAA authorization, and a referring attorney portal — built for specialty medical practices.',
  keywords: [
    'medical practice intake software',
    'referring attorney portal',
    'specialty practice referral automation',
    'HIPAA intake software',
    'imaging center patient intake',
    'medical records automation',
    'PI attorney referral portal',
    'patient intake scheduling',
    'medical chronology software',
    'healthcare referral management',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/torvana',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/torvana',
    siteName: 'Torvana',
    title: 'Torvana — The referral moves. Everyone knows.',
    description:
      'Mobile patient intake, scheduling, HIPAA authorization, medical records retrieval, and a real-time attorney portal. Built for specialty medical practices.',
    images: [{ url: '/torvana.svg', width: 1200, height: 630, alt: 'Torvana — Powered by Case Compass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torvana — Medical Practice Intake & Referral Automation',
    description:
      'Connect patients, practices and referring attorneys. HIPAA-compliant intake, scheduling, records retrieval and attorney visibility — all connected.',
  },
}

export default function TorvanaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
