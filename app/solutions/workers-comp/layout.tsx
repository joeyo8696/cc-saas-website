import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workers\' Compensation Law Firms | Case Compass',
  description:
    'Case Compass automates intake qualification, speed-to-lead outreach, and document generation for workers\' comp firms. Sign more cases, work fewer hours.',
}

export default function WorkersCompLayout({ children }: { children: React.ReactNode }) {
  return children
}
