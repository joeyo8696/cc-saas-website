import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'
import Hero from '@/components/home/Hero'
import Ticker from '@/components/home/Ticker'
import PlatformOS from '@/components/home/PlatformOS'
import WaypointSection from '@/components/home/WaypointSection'
import ReferralsSection from '@/components/home/ReferralsSection'
import Stats from '@/components/home/Stats'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import NotJustAChatbot from '@/components/home/NotJustAChatbot'
import IeepaCallout from '@/components/home/IeepaCallout'
import DepoProveraCallout from '@/components/home/DepoProveraCallout'
import RobloxCallout from '@/components/home/RobloxCallout'
import WorkersCompCallout from '@/components/home/WorkersCompCallout'
import CtaSection from '@/components/home/CtaSection'

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
        <ReferralsSection />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <IeepaCallout />
        <DepoProveraCallout />
        <RobloxCallout />
        <WorkersCompCallout />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
