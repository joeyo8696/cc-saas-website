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
    'Case Compass automates client intake, qualifies leads with AI, and converts prospects for plaintiff law firms. Intelligent Intake, Waypoint scoring, and referral management built for high-volume litigation. The SimplyConvert alternative built for serious plaintiff firms.',
  keywords: [
    'legal intake software',
    'law firm intake automation',
    'AI lead scoring legal',
    'plaintiff law firm software',
    'simplyconvert alternative',
    'legal case management',
    'attorney intake software',
    'Waypoint AI scoring',
    'legal chatbot',
    'mass tort intake',
    'workers comp intake software',
  ],
  authors: [{ name: 'Case Compass', url: 'https://www.casecompass.io' }],
  creator: 'Case Compass',
  publisher: 'Case Compass',
  alternates: {
    canonical: 'https://www.casecompass.io',
  },
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
        alt: 'Case Compass — Smart Intake. Smarter Firms.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CaseCompassIO',
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

const globalJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.casecompass.io/#organization',
      name: 'Case Compass',
      url: 'https://www.casecompass.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.casecompass.io/favicon.png',
      },
      description: 'Case Compass automates client intake, lead qualification, and case conversion for plaintiff law firms.',
      sameAs: [
        'https://www.linkedin.com/company/case-compass/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://www.casecompass.io',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.casecompass.io/#website',
      url: 'https://www.casecompass.io',
      name: 'Case Compass',
      publisher: { '@id': 'https://www.casecompass.io/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.casecompass.io/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.casecompass.io/#software',
      name: 'Case Compass',
      applicationCategory: 'LegalService',
      operatingSystem: 'Web',
      url: 'https://www.casecompass.io',
      description: 'AI-powered legal intake platform for plaintiff law firms. Automates client intake, lead scoring, live transfer, and document generation.',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://www.casecompass.io/#organization' },
      },
      featureList: [
        'AI-powered intake chatbots',
        'Waypoint lead scoring',
        'Live transfer management',
        'E-signature integration',
        'Case management integration (Clio, Filevine, Litify)',
        'Mass tort intake qualification',
        'Workers comp intake automation',
        'Automated referral management',
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        <DemoModalProvider>
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
