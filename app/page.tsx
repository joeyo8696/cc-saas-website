import type { Metadata } from 'next'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'
import Hero from '@/components/home/Hero'
import Ticker from '@/components/home/Ticker'
import PlatformOS from '@/components/home/PlatformOS'
import WaypointSection from '@/components/home/WaypointSection'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import CtaSection from '@/components/home/CtaSection'
import IntegrationsTicker from '@/components/home/IntegrationsTicker'
import TorvanaModal from '@/components/home/TorvanaModal'
import ProductSuite from '@/components/home/ProductSuite'

export const metadata: Metadata = {
  title: { absolute: 'Case Compass — Intake Infrastructure for Legal, Healthcare & Landlord-Tenant Law' },
  description:
    'Case Compass powers three intake platforms: IntakeOS for plaintiff law firms, Torvana for specialty medical practices, and Dwellex for landlord-tenant law. Automate intake, qualify leads, and convert clients — across every industry where intake drives growth.',
  keywords: [
    'legal intake software',
    'law firm intake software',
    'plaintiff intake software',
    'legal intake automation',
    'AI legal intake',
    'mass tort intake software',
    'legal marketing software',
    'law firm marketing software',
    'legal lead generation software',
    'legal intake platform',
    'legal intake chatbot',
    'law firm intake automation',
    'plaintiff law firm software',
    'medical practice intake software',
    'landlord tenant law software',
    'Torvana',
    'Dwellex',
    'IntakeOS',
    'specialty medical intake',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.casecompass.io',
    siteName: 'Case Compass',
    title: 'Case Compass — Intake Infrastructure for Legal, Healthcare & Landlord-Tenant Law',
    description: 'Three intake platforms — IntakeOS for plaintiff law firms, Torvana for specialty medical practices, and Dwellex for landlord-tenant law — powered by one infrastructure.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass — Intake Infrastructure for Legal, Healthcare & Landlord-Tenant Law' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Case_Compass_',
    title: 'Case Compass — Intake Infrastructure for Legal, Healthcare & Landlord-Tenant Law',
    description: 'IntakeOS for plaintiff law firms, Torvana for specialty medical, and Dwellex for landlord-tenant law — three platforms, one infrastructure.',
  },
}

export default function HomePage() {
  return (
    <>
      <GalaxyCanvas />
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <main>
        <Hero />
        <Ticker />
        <ProductSuite />
        <PlatformOS />
        <WaypointSection />
        <Stats />
        <IntegrationsTicker />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <TorvanaModal />
    </>
  )
}
