import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Library | Case Compass',
  description: 'Exclusive demo videos for Case Compass prospects.',
  robots: { index: false, follow: false },
}

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
