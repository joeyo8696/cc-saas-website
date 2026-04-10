import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageSquare, FileText, Database, TrendingUp, Bot } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Compare Legal Intake Software — Case Compass',
  description:
    'See how Case Compass compares to chatbots, web forms, generic CRM intake, and pre-screening tools like Lawbrokr. Find the right intake platform for your plaintiff law firm.',
  alternates: {
    canonical: 'https://www.casecompass.io/compare',
  },
  keywords: [
    'legal intake software comparison',
    'plaintiff intake platform',
    'Lawbrokr alternative',
    'legal intake vs chatbot',
    'law firm intake software',
    'SimplyConvert alternative',
    'ngage alternative',
    'AI intake scoring',
    'plaintiff law firm software',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/compare',
    siteName: 'Case Compass',
    title: 'Compare Legal Intake Software | Case Compass',
    description: 'How does a full plaintiff intake platform compare to chatbots, web forms, CRM intake, and pre-screening tools? See every difference.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Compare Legal Intake Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Legal Intake Software | Case Compass',
    description: 'Chatbots vs. intake platforms vs. pre-screening tools — see how Case Compass compares for plaintiff firms.',
  },
}

const compareBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.casecompass.io/compare' },
  ],
}

const compareCards = [
  {
    href: '/compare/vs-ai-intake-tools',
    icon: Bot,
    color: '#0f766e',
    bg: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)',
    title: 'Case Compass vs. AI Intake Tools',
    subtitle: 'Full Platform vs. SimplyConvert, ngage & Others',
    desc: 'SimplyConvert, ngage, and similar tools automate the intake conversation. Case Compass adds Waypoint scoring, MDL toolkits, referral management, medical record retrieval, and post-intake automation. See every difference.',
    cta: 'See How Case Compass Compares →',
  },
  {
    href: '/compare/vs-chatbots',
    icon: MessageSquare,
    color: '#7c3aed',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    title: 'Case Compass vs. Basic Chatbots',
    subtitle: 'Legal Intake Platform vs. Chatbot',
    desc: 'Basic chatbots are great at conversation — but they don\'t score leads, track referral fees, sync to Litify, or close retainers. See the full comparison.',
    cta: 'Compare Chatbot vs. Intake Platform →',
  },
  {
    href: '/compare/vs-webforms',
    icon: FileText,
    color: '#0891b2',
    bg: 'linear-gradient(135deg, #ecfeff, #e0f2fe)',
    title: 'Why Law Firms Outgrow Web Forms',
    subtitle: 'Intake Platform vs. Static Web Forms',
    desc: 'Static contact forms collect information but don\'t qualify it, score it, route it, or follow up on it. Five things a web form can\'t do — and what fills the gap.',
    cta: 'See What Web Forms Can\'t Do →',
  },
  {
    href: '/solutions/intake',
    icon: Database,
    color: '#059669',
    bg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    title: 'Case Compass vs. Generic CRM Intake',
    subtitle: 'Purpose-Built vs. CRM-Add-On',
    desc: 'CRM intake modules were designed for sales pipelines, not legal qualification. See how a purpose-built plaintiff intake platform compares to bolt-on CRM forms.',
    cta: 'Explore Intake OS →',
  },
  {
    href: '/solutions/waypoint',
    icon: TrendingUp,
    color: '#4f46e5',
    bg: 'linear-gradient(135deg, #eef2ff, #ede9fe)',
    title: 'Manual Review vs. AI Lead Scoring',
    subtitle: 'Human Judgment vs. Waypoint AI',
    desc: 'Manual intake review introduces variance and doesn\'t scale. See how Waypoint\'s automated scoring gives every lead the same documented evaluation — before your team opens the file.',
    cta: 'See Waypoint AI →',
  },
]

export default function ComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(compareBreadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0d1538 50%, #0c1a3a 100%)', padding: '120px 40px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.1) 1px, transparent 0)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '100px', padding: '6px 18px', marginBottom: '28px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Side-by-Side Comparisons</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Not all intake tools<br />are built the same
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
              Web forms, chatbots, CRM add-ons, and intake platforms all capture information — but what happens after that is where the differences emerge.
            </p>
          </div>
        </section>

        {/* Comparison cards */}
        <section style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0d1538 60%, #0a1628 100%)', padding: '80px 40px 100px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.07) 1px, transparent 0)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '10%', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1060px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

            {/* 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
              {[
                { href: '/compare/vs-ai-intake-tools', icon: Bot, accent: '#0d9488', accentBg: 'rgba(13,148,136,0.07)', border: 'rgba(13,148,136,0.2)', title: 'Case Compass vs. AI Intake Tools', subtitle: 'Full Platform vs. SimplyConvert, ngage & Others', desc: 'SimplyConvert, ngage, and similar tools automate the intake conversation. Case Compass adds Waypoint scoring, MDL toolkits, referral management, and post-intake automation.', cta: 'See How Case Compass Compares' },
                { href: '/compare/vs-chatbots', icon: MessageSquare, accent: '#7c3aed', accentBg: 'rgba(124,58,237,0.07)', border: 'rgba(124,58,237,0.2)', title: 'Case Compass vs. Basic Chatbots', subtitle: 'Legal Intake Platform vs. Chatbot', desc: "Basic chatbots are great at conversation — but they don't score leads, track referral fees, sync to Litify, or close retainers.", cta: 'Compare Chatbot vs. Intake Platform' },
                { href: '/compare/vs-webforms', icon: FileText, accent: '#0891b2', accentBg: 'rgba(8,145,178,0.07)', border: 'rgba(8,145,178,0.2)', title: 'Why Law Firms Outgrow Web Forms', subtitle: 'Intake Platform vs. Static Web Forms', desc: "Static contact forms collect information but don't qualify it, score it, route it, or follow up on it. Five things a web form can't do — and what fills the gap.", cta: "See What Web Forms Can't Do" },
                { href: '/solutions/intake', icon: Database, accent: '#059669', accentBg: 'rgba(5,150,105,0.07)', border: 'rgba(5,150,105,0.2)', title: 'Case Compass vs. Generic CRM Intake', subtitle: 'Purpose-Built vs. CRM-Add-On', desc: 'CRM intake modules were designed for sales pipelines, not legal qualification. See how a purpose-built plaintiff intake platform compares to bolt-on CRM forms.', cta: 'Explore Intake OS' },
              ].map(({ href, icon: Icon, accent, accentBg, border, title, subtitle, desc, cta }) => (
                <SectionReveal key={href}>
                  <Link href={href} style={{ display: 'block', padding: '28px 28px 28px 32px', borderRadius: '14px', background: accentBg, border: `1px solid ${border}`, borderLeft: `3px solid ${accent}`, textDecoration: 'none', transition: 'background 0.2s' }}
                    className="compare-card-dark"
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: `${accent}22`, border: `1px solid ${accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon size={17} color={accent} />
                    </div>
                    <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>{subtitle}</div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.35 }}>{title}</h2>
                    <p style={{ fontSize: '0.855rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: accent }}>
                      {cta} <ArrowRight size={13} />
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>

            {/* Featured full-width: Manual Review vs AI Lead Scoring */}
            <SectionReveal>
              <Link href="/solutions/waypoint" style={{ display: 'flex', alignItems: 'center', gap: '28px', padding: '28px 36px', borderRadius: '14px', background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.2)', borderLeft: '3px solid #6366f1', textDecoration: 'none', flexWrap: 'wrap' }}
                className="compare-card-dark"
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TrendingUp size={20} color="#fff" />
                </div>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>Human Judgment vs. Waypoint AI</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>Manual Review vs. AI Lead Scoring</h2>
                  <p style={{ fontSize: '0.855rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.65, margin: 0 }}>Manual intake review introduces variance and doesn&apos;t scale. Waypoint&apos;s automated scoring gives every lead the same documented evaluation — before your team opens the file.</p>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#818cf8', flexShrink: 0 }}>
                  See Waypoint AI <ArrowRight size={14} />
                </div>
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: '#060d1f', padding: '96px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <SectionReveal>
            <div style={{ maxWidth: '580px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '16px' }}>
                See Case Compass head-to-head
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '40px' }}>
                Book a walkthrough and bring your current intake setup. We&apos;ll show you the difference live.
              </p>
              <DemoButton style={{ padding: '15px 36px', borderRadius: '8px', fontSize: '1rem' }}>
                Schedule a Demo →
              </DemoButton>
            </div>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
