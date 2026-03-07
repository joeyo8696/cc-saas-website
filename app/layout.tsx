import type { Metadata } from 'next'
import { DM_Serif_Display, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { DemoModalProvider } from '@/components/DemoModalProvider'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.casecompass.io'),
  title: {
    default: 'Case Compass — Smart Intake. Smarter Firms.',
    template: '%s | Case Compass',
  },
  description:
    'Case Compass automates client intake, qualifies leads with AI, and converts prospects for plaintiff law firms. Intelligent Intake, Waypoint scoring, and referral management built for high-volume litigation.',
  keywords: [
    'legal intake software',
    'law firm intake automation',
    'AI lead scoring legal',
    'plaintiff law firm software',
    'simplyconvert alternative',
    'legal case management',
    'attorney intake software',
    'Waypoint AI scoring',
  ],
  authors: [{ name: 'Case Compass', url: 'https://www.casecompass.io' }],
  creator: 'Case Compass',
  publisher: 'Case Compass',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.casecompass.io',
    siteName: 'Case Compass',
    title: 'Case Compass — Smart Intake. Smarter Firms.',
    description:
      'Automates client intake, qualifies leads with AI, and converts prospects for plaintiff law firms.',
    images: [
      {
        url: '/images/cc-logo-white.png',
        width: 1200,
        height: 630,
        alt: 'Case Compass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Compass — Smart Intake. Smarter Firms.',
    description: 'Intelligent Intake, Waypoint AI scoring, and referral management for plaintiff law firms.',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>
        <DemoModalProvider>
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
