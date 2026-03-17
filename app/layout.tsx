import type { Metadata } from 'next'
import { DM_Serif_Display, Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    'Case Compass is legal intake software built for plaintiff law firms. Automate client intake with AI chatbots and webforms, score leads instantly with Waypoint, manage referral partners, and close retainers in the same session. The SimplyConvert alternative built for serious plaintiff firms.',
  keywords: [
    'legal intake software',
    'law firm intake software',
    'legal intake automation',
    'plaintiff law firm intake',
    'attorney intake software',
    'AI legal intake',
    'mass tort intake software',
    'workers comp intake software',
    'legal lead qualification',
    'AI lead scoring legal',
    'law firm chatbot intake',
    'legal intake chatbot',
    'simplyconvert alternative',
    'ngage alternative',
    'intake software for law firms',
    'Waypoint AI scoring',
    'legal case intake',
    'plaintiff intake automation',
    'law firm lead conversion',
    'intake management software law',
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
    site: '@Case_Compass_',
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
      description: 'Case Compass is legal intake software built exclusively for plaintiff law firms. It automates client intake, qualifies leads with AI, manages referral partners, and converts prospects into signed clients.',
      sameAs: [
        'https://www.linkedin.com/company/case-compass/',
        'https://www.facebook.com/casecompass2024',
        'https://x.com/Case_Compass_',
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
      applicationSubCategory: 'Legal Intake Software',
      operatingSystem: 'Web',
      url: 'https://www.casecompass.io',
      description: 'Case Compass is legal intake software for plaintiff law firms. It automates client intake with AI chatbots and webforms, scores every lead with Waypoint AI, manages referral partner networks, and closes retainers with built-in e-signature — all in one platform.',
      keywords: 'legal intake software, law firm intake automation, plaintiff intake software, mass tort intake, workers comp intake, AI lead scoring, legal chatbot, attorney intake software',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://www.casecompass.io/#organization' },
      },
      featureList: [
        'Legal intake chatbots and webforms',
        'AI-powered lead scoring (Waypoint)',
        'Mass tort intake qualification',
        'Workers compensation intake automation',
        'Live transfer management',
        'Referral partner portal and fee tracking',
        'E-signature retainer closing',
        'Case management integration (Clio, Filevine, Litify, LeadDocket)',
        'UTM and attribution tracking',
        'Intake analytics and reporting',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.casecompass.io/#service',
      name: 'Legal Intake Software',
      serviceType: 'Legal Intake Automation',
      provider: { '@id': 'https://www.casecompass.io/#organization' },
      url: 'https://www.casecompass.io',
      description: 'Case Compass provides legal intake software for plaintiff law firms, including AI chatbot intake, webform intake, Waypoint lead scoring, referral management, and e-signature retainer closing.',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Plaintiff Law Firms',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal Intake Solutions',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Legal Intake Chatbot' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Webform Intake Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waypoint AI Lead Scoring' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mass Tort Intake Qualification' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Referral Partner Management' } },
        ],
      },
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
        <Analytics />
      </body>
    </html>
  )
}
