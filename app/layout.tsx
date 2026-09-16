import type { Metadata } from 'next'
import { DM_Serif_Display, Space_Grotesk, Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.casecompass.io'),
  title: {
    default: 'Case Compass — Smart Intake. Smarter Firms.',
    template: '%s | Case Compass',
  },
  description:
    'Case Compass is legal intake software built for plaintiff law firms. Replace static contact forms with AI-powered conversational intake, score every lead with Waypoint before your team opens the file, automate referral partner management, and close retainers with e-signatures — all in one platform.',
  keywords: [
    // Core platform
    'legal intake software',
    'law firm intake software',
    'legal intake automation',
    'plaintiff law firm intake',
    'attorney intake software',
    'AI legal intake',
    'legal intake platform',
    'legal intake services',
    'legal intake chatbot',
    'conversational legal intake',
    'intelligent intake software',
    // Legal marketing
    'legal marketing software',
    'law firm marketing software',
    'legal lead generation software',
    'law firm lead generation',
    'attorney marketing software',
    'legal digital marketing',
    'law firm marketing attribution',
    'legal marketing automation',
    'law firm lead conversion',
    // Practice areas
    'mass tort intake software',
    'mass tort marketing software',
    'MDL intake software',
    'workers comp intake software',
    'personal injury intake software',
    'plaintiff intake automation',
    // Lead scoring & AI
    'AI lead scoring legal',
    'legal lead qualification',
    'law firm lead scoring',
    'Waypoint AI scoring',
    // Referral & e-sign
    'legal referral partner software',
    'referral partner portal law firm',
    'eSign legal intake',
    'signed retainer software',
    // Integrations
    'legal intake Litify',
    'intake software Filevine',
    'law firm intake LeadDocket',
    // Competitive
    'simplyconvert alternative',
    'ngage alternative',
    'law firm contact form alternative',
    'replace law firm web form',
    // Live transfer
    'legal intake live transfer',
    'speed to lead law firm',
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
      description: 'Case Compass is the company behind IntakeOS (plaintiff-firm intake), Torvana (specialty medical PI referral workflows), and Dwellex (landlord-tenant case management).',
      sameAs: [
        'https://www.linkedin.com/company/case-compass/',
        'https://www.facebook.com/casecompass2024',
        'https://x.com/Case_Compass_',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+1-585-484-7472',
        email: 'support@casecompass.io',
        url: 'https://www.casecompass.io',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.casecompass.io/#website',
      url: 'https://www.casecompass.io',
      name: 'Case Compass',
      description:
        'Case Compass builds IntakeOS for plaintiff firms, Torvana for specialty medical practices, and Dwellex for landlord-tenant law.',
      publisher: { '@id': 'https://www.casecompass.io/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.casecompass.io/#software',
      name: 'IntakeOS',
      alternateName: ['Case Compass', 'Intake OS'],
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Legal Intake Software',
      operatingSystem: 'Web',
      url: 'https://www.casecompass.io/intakeos',
      description:
        'IntakeOS is legal intake software for plaintiff law firms. It automates client intake with AI chatbots and webforms, scores every lead with Waypoint AI, manages referral partner networks, and closes retainers with built-in e-signature — all in one platform.',
      keywords:
        'legal intake software, law firm intake automation, plaintiff intake software, mass tort intake, workers comp intake, AI lead scoring, legal chatbot, attorney intake software',
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
      provider: { '@id': 'https://www.casecompass.io/#organization' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.casecompass.io/#service',
      name: 'Legal Intake Software',
      serviceType: 'Legal Intake Automation',
      provider: { '@id': 'https://www.casecompass.io/#organization' },
      url: 'https://www.casecompass.io/intakeos',
      description:
        'Case Compass provides IntakeOS legal intake software for plaintiff law firms, including AI chatbot intake, webform intake, Waypoint lead scoring, referral management, and e-signature retainer closing.',
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
      className={`${dmSerifDisplay.variable} ${spaceGrotesk.variable} ${inter.variable} ${manrope.variable}`}
    >
      <body>
        <Script id="apollo-tracker" strategy="beforeInteractive">{`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"6a2ef70ce49d680020cc3c33"})},document.head.appendChild(o)}initApollo();`}</Script>
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
