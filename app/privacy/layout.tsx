import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Case Compass',
  description:
    'Case Compass Privacy Policy. Learn how we collect, use, and protect your personal information when you use our legal intake platform.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
