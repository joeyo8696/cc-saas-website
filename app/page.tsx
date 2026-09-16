import type { Metadata } from 'next'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import TorvanaModal from '@/components/home/TorvanaModal'
import HomePageContent from '@/components/home/HomePageContent'

export const metadata: Metadata = {
  title: { absolute: 'Case Compass — Smart intake. Connected practices.' },
  description:
    'Meet IntakeOS, Torvana and Dwellex. Three purpose-built platforms for plaintiff law, specialty healthcare and landlord-tenant practices.',
  keywords: [
    'legal intake software',
    'IntakeOS',
    'Torvana',
    'Dwellex',
    'plaintiff law firm software',
    'specialty medical intake',
    'landlord tenant law software',
    'law firm intake automation',
    'medical practice intake software',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.casecompass.io',
    siteName: 'Case Compass',
    title: 'Case Compass — Smart intake. Connected practices.',
    description:
      'Three purpose-built platforms: IntakeOS for plaintiff law, Torvana for specialty healthcare, and Dwellex for landlord-tenant practices.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Case_Compass_',
    title: 'Case Compass — Smart intake. Connected practices.',
    description: 'IntakeOS, Torvana, and Dwellex — three platforms powered by Case Compass.',
  },
}

export default function HomePage() {
  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What products does Case Compass offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Case Compass builds three products: IntakeOS for plaintiff-firm intake, Torvana for specialty medical practices with personal injury attorney referral relationships, and Dwellex for landlord-tenant / eviction case management.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is IntakeOS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IntakeOS is Case Compass’s intake platform for plaintiff law firms — conversational intake, Waypoint AI scoring, live transfer, e-signatures, referral tracking, and CRM sync between marketing and case management.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Torvana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Torvana is a HIPAA-compliant intake, scheduling, and referral workflow platform for specialty medical practices with personal injury attorney referral relationships.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Dwellex?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dwellex is eviction and landlord-tenant case management software for law firms, including state-specific notices, deadline tracking, court preparation, and Clio sync.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <HomePageContent />
      <Footer />
      <TorvanaModal />
    </>
  )
}
