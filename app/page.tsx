import type { Metadata } from 'next'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'
import Hero from '@/components/home/Hero'

export const metadata: Metadata = {
  title: { absolute: 'Case Compass — Smart Intake. Smarter Firms.' },
  description:
    'Case Compass is legal intake software built for plaintiff law firms. Replace static contact forms with AI-powered conversational intake, score every lead with Waypoint before your team opens the file, automate referral partner management, and close retainers with e-signatures — all in one platform.',
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
  ],
  alternates: {
    canonical: 'https://www.casecompass.io',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.casecompass.io',
    siteName: 'Case Compass',
    title: 'Case Compass — Smart Intake. Smarter Firms.',
    description: 'Automates client intake, qualifies leads with AI, and converts prospects for plaintiff law firms.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass — Smart Intake. Smarter Firms.' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Case_Compass_',
    title: 'Case Compass — Smart Intake. Smarter Firms.',
    description: 'Intelligent Intake, Waypoint AI scoring, and referral management for plaintiff law firms.',
  },
}
import Ticker from '@/components/home/Ticker'
import PlatformOS from '@/components/home/PlatformOS'
import WaypointSection from '@/components/home/WaypointSection'
import MdlPortfolioSection from '@/components/home/MdlPortfolioSection'
import ReferralsSection from '@/components/home/ReferralsSection'
import Stats from '@/components/home/Stats'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import NotJustAChatbot from '@/components/home/NotJustAChatbot'
import SocialMediaCallout from '@/components/home/SocialMediaCallout'
import HairRelaxerCallout from '@/components/home/HairRelaxerCallout'
import DepoProveraCallout from '@/components/home/DepoProveraCallout'
import RobloxCallout from '@/components/home/RobloxCallout'
import WorkersCompCallout from '@/components/home/WorkersCompCallout'
import CtaSection from '@/components/home/CtaSection'
import IntegrationsTicker from '@/components/home/IntegrationsTicker'
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
        <NotJustAChatbot />
        <PlatformOS />
        <WaypointSection />
        <MdlPortfolioSection />
        <ReferralsSection />
        <Stats />
        <HowItWorks />
        <IntegrationsTicker />
        <Testimonials />
        <SocialMediaCallout />
        <HairRelaxerCallout />
        <DepoProveraCallout />
        <RobloxCallout />
        <WorkersCompCallout />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
