import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageSquare, FileText, Database, TrendingUp, Bot } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Compare Legal Intake Approaches — Case Compass',
  description:
    'See how a complete legal intake platform compares to chatbots, static web forms, and generic CRM intake. Find the right approach for your plaintiff law firm.',
  alternates: {
    canonical: 'https://www.casecompass.io/compare',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/compare',
    siteName: 'Case Compass',
    title: 'Compare Legal Intake Approaches | Case Compass',
    description: 'How does a full intake platform compare to chatbots, web forms, and generic CRM intake? Find the right approach for your plaintiff law firm.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Compare Legal Intake Approaches' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Legal Intake Approaches | Case Compass',
    description: 'Chatbots vs. intake platforms vs. web forms — see the full comparison.',
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
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '100px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(165,180,252,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: '24px' }}>
              Compare
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Not all intake tools are built the same
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Web forms, chatbots, CRM add-ons, and intake platforms all capture information — but what happens to that information is where the differences emerge. Pick a comparison below.
            </p>
          </div>
        </section>

        {/* Comparison cards */}
        <section style={{ background: '#f8fafc', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px', gridTemplateRows: 'auto' }}>
              {compareCards.map(({ href, icon: Icon, color, bg, title, subtitle, desc, cta }) => (
                <SectionReveal key={href}>
                  <Link href={href} className="compare-card" style={{ display: 'block', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  >
                    <div style={{ padding: '32px 32px 28px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Icon size={20} color={color} />
                      </div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>{subtitle}</div>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.3 }}>{title}</h2>
                      <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, marginBottom: '24px' }}>{desc}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color }}>
                        {cta}
                        <ArrowRight size={14} color={color} />
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              See Case Compass head-to-head
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              Book a walkthrough and bring your current intake setup. We&apos;ll show you the difference live.
            </p>
            <DemoButton style={{ padding: '15px 36px', borderRadius: '8px', fontSize: '1rem' }}>
              Schedule a Demo →
            </DemoButton>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
