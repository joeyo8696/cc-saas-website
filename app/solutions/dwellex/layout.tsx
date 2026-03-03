import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dwellex — Landlord-Tenant Case Management | Case Compass',
  description:
    'Comprehensive case management and communication tools designed specifically for landlord-tenant law and eviction proceedings. Streamline your practice with automated workflows.',
}

export default function DwellexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
