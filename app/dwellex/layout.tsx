import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Dwellex — A clear path for every matter.' },
  description:
    'Landlord–tenant case management, from intake to lockout. Explore Dwellex workflows, batch notices, court preparation and pricing.',
  alternates: {
    canonical: 'https://www.casecompass.io/dwellex',
  },
  openGraph: {
    title: 'Dwellex — A clear path for every matter.',
    description: 'Landlord–tenant case management, from intake to lockout.',
    url: 'https://www.casecompass.io/dwellex',
  },
}

export default function DwellexLayout({ children }: { children: React.ReactNode }) {
  return children
}
