import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Case Compass',
  description:
    'Case Compass is a smart-intake platform built exclusively for high-volume plaintiff firms. Learn about our team and vision for the future of legal intake.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
