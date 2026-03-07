import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelligent Intake — Qualify Every Lead, Automatically',
  description:
    'Case Compass automates client intake for plaintiff law firms — chatbots, webforms, live transfer, AI scoring, and e-signatures in a single seamless flow.',
}

export default function QualificationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
