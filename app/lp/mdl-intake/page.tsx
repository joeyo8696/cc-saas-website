import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Waypoints, BarChart3, FolderOpen, FileText, FileSignature, Users, ShieldCheck } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'MDL Intake Software for Plaintiff Firms | Case Compass',
  description:
    'Case Compass is purpose-built MDL intake software for plaintiff law firms. Qualify mass tort claimants, organize leads by MDL portfolio, map PFS fields, and export court-ready data — all in one platform.',
  alternates: {
    canonical: 'https://www.casecompass.io/lp/mdl-intake',
  },
  keywords: [
    'MDL intake software',
    'mass tort intake software',
    'MDL portfolio management',
    'plaintiff fact sheet software',
    'mass tort lead management',
    'MDL claimant intake',
    'plaintiff intake platform',
    'mass tort case management',
    'MDL 3047 intake',
    'social media addiction intake',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/lp/mdl-intake',
    siteName: 'Case Compass',
    title: 'MDL Intake Software for Plaintiff Firms | Case Compass',
    description: 'Qualify claimants, organize MDL portfolios, map PFS fields, and export court-ready data. Purpose-built for firms running active mass tort campaigns.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'MDL Intake Software — Case Compass' }],
  },
}

const DEMO_URL = 'https://calendly.com/casecompass/case-compass-intro'

const stats = [
  { value: '4', label: 'Active MDL toolkits (social media, hair relaxer, Depo-Provera, Roundup)' },
  { value: '85+', label: 'PFS fields mapped for MDL 3047 from official court document' },
  { value: '< 8 min', label: 'Avg. time to qualify a claimant' },
  { value: '24 / 7', label: 'Intake runs while your ad campaigns do' },
]

const features = [
  {
    icon: FolderOpen,
    title: 'MDL Portfolio Management',
    desc: 'Group leads by litigation — Social Media, Hair Relaxer, Depo-Provera, Roundup. Each portfolio has its own stats dashboard, lead count, AI score breakdown, and status tracking.',
  },
  {
    icon: Waypoints,
    title: 'Waypoint AI Scoring',
    desc: 'Every claimant is scored automatically against your criteria — exposure, severity, treatment history, documentation completeness. Ranked before anyone opens the file.',
  },
  {
    icon: FileText,
    title: 'Plaintiff Fact Sheet Mapping',
    desc: 'Load the official court-filed PFS for your MDL, map your intake nodes to each field, and generate a court-ready CSV export instantly — no manual reformatting.',
  },
  {
    icon: Zap,
    title: 'Tort-Specific Intake Forms',
    desc: 'Pre-built intake flows for each tort with the right evidence capture: platform usage for social media, product history for hair relaxer, treatment records for Depo-Provera.',
  },
  {
    icon: BarChart3,
    title: 'Key Dates & Deadline Tracking',
    desc: 'Track discovery cutoffs, expert disclosure dates, bellwether trials, and PFS submission deadlines per portfolio — with urgency alerts surfaced across your whole caseload.',
  },
  {
    icon: FileSignature,
    title: 'E-Sign in the Intake Flow',
    desc: 'Qualified claimants sign their retainer without leaving intake. HIPAA auth, retainer, and supporting docs captured in one session — no callbacks, no drop-off.',
  },
  {
    icon: Users,
    title: 'Referral Partner Portal',
    desc: 'Accept co-counsel and referral network leads directly into your MDL portfolio. Track source, case status, and fee splits automatically.',
  },
  {
    icon: ShieldCheck,
    title: 'CMS & CRM Agnostic',
    desc: 'Integrates with Filevine, LeadDocket, Litify, and custom webhooks. Your MDL data stays in your systems.',
  },
]

const torts = [
  {
    name: 'Social Media Addiction',
    mdl: 'MDL 3047 · N.D. California',
    defendants: 'Meta, TikTok, YouTube, Snap',
    status: 'First bellwether verdict March 2026 — $3–6M award',
    color: '#ec4899',
    bg: '#fdf2f8',
    href: '/lp/social-media',
  },
  {
    name: 'Hair Relaxer',
    mdl: 'MDL 3060 · N.D. Illinois',
    defendants: "L'Oreal, Revlon, Strength of Nature",
    status: '11,000+ cases pending — settlement discussions active',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    href: '/lp/hair-relaxer',
  },
  {
    name: 'Depo-Provera',
    mdl: 'MDL 3140 · S.D. New York',
    defendants: 'Pfizer, Pharmacia',
    status: 'Fast-growing — brain tumor claims consolidating rapidly',
    color: '#0891b2',
    bg: '#ecfeff',
    href: '/solutions/mass-torts',
  },
  {
    name: 'Roundup / Glyphosate',
    mdl: 'MDL 2741 · N.D. California',
    defendants: 'Bayer / Monsanto',
    status: 'Billions in settlements — new cases still qualifying',
    color: '#16a34a',
    bg: '#f0fdf4',
    href: '/solutions/mass-torts',
  },
]

const pfsSteps = [
  { n: '01', title: 'Load the PFS template', body: 'Select the official plaintiff fact sheet for your MDL — pre-loaded from the court-filed document.' },
  { n: '02', title: 'Map intake nodes', body: 'Link each PFS field to the corresponding node in your intake form. One-time setup per tort.' },
  { n: '03', title: 'Export on demand', body: 'Run a CSV export at any time. Columns match PFS field order and headers exactly as required.' },
]

export default function MdlIntakePage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: '#0f172a', background: '#fff', overflowX: 'hidden' }}>

      {/* Nav */}
      <nav style={{ background: 'rgba(11,21,48,0.97)', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/"><Image src="/images/cc-logo-white.png" alt="Case Compass" width={160} height={26} style={{ height: '26px', width: 'auto' }} /></Link>
        <DemoButton style={{ padding: '9px 20px', borderRadius: '6px', fontSize: '0.85rem' }}>
          Book a Demo
        </DemoButton>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #05070f, #0d1933, #111827)', padding: '96px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(165,180,252,0.35)', borderRadius: '99px', padding: '5px 16px', marginBottom: '24px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#6366f1', boxShadow: '0 0 8px #6366f1', display: 'inline-block' }} />
            Purpose-Built for Mass Tort Plaintiff Firms
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
            MDL Intake Software That Works<br />
            <em style={{ color: '#818cf8' }}>From First Contact to PFS Export.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '44px', maxWidth: '660px', margin: '0 auto 44px' }}>
            Case Compass captures, scores, and organizes mass tort claimants — by MDL, by tort, by lead quality. Built-in PFS field mapping. Deadline tracking. Court-ready exports. Everything intake to be ready for litigation.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href={DEMO_URL} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 8px 28px rgba(79,70,229,0.45)', textDecoration: 'none' }}>
              See MDL Portfolios in Action →
            </Link>
            <Link href="/solutions/mass-torts" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none' }}>
              Mass Torts Overview
            </Link>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>CRM agnostic · Works with Filevine, LeadDocket, Litify · No lead gen conflict of interest</p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#080d1a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, color: '#818cf8', marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Active torts */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '14px' }}>Active MDL Toolkits</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, margin: '0 auto', maxWidth: '600px' }}>
                Pre-configured for the torts you're running
              </h2>
            </div>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {torts.map((t) => (
              <SectionReveal key={t.name}>
                <Link href={t.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ background: t.bg, border: `1px solid ${t.color}30`, borderRadius: '12px', padding: '28px 24px', height: '100%', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: t.color, marginBottom: '16px', boxShadow: `0 0 8px ${t.color}` }} />
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: t.color, marginBottom: '10px' }}>{t.mdl}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '8px' }}>{t.defendants}</div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>{t.status}</div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '14px' }}>Platform Features</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2 }}>
                Everything intake for MDL litigation
              </h2>
            </div>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {features.map((f) => (
              <SectionReveal key={f.title}>
                <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px', height: '100%' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <f.icon size={20} color="#4f46e5" />
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{f.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{f.desc}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PFS mapping section */}
      <section style={{ padding: '80px 40px', background: '#f1f5f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '14px' }}>PFS Export</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                From intake to court-ready CSV in three steps
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                We load the official Plaintiff Fact Sheet from the court docket. You map your intake fields once. Export whenever you need it — reformatting manually is done.
              </p>
            </div>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {pfsSteps.map((s) => (
              <SectionReveal key={s.n}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '28px 24px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#e0e7ff', marginBottom: '12px' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{s.title}</div>
                  <div style={{ fontSize: '0.83rem', color: '#64748b', lineHeight: 1.65 }}>{s.body}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Ready to run your MDL caseload smarter?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '40px' }}>
            We'll show you the MDL portfolio setup, PFS mapping, and Waypoint scoring live — configured for your active torts.
          </p>
          <Link href={DEMO_URL} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', padding: '16px 40px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, boxShadow: '0 12px 32px rgba(99,102,241,0.45)', textDecoration: 'none' }}>
            Book a Demo →
          </Link>
          <p style={{ marginTop: '16px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>No commitment · 30 minutes · We come prepared with your tort mix</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#05070f', padding: '32px 40px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          <Image src="/images/cc-logo-white.png" alt="Case Compass" width={120} height={20} style={{ height: '20px', width: 'auto', opacity: 0.5 }} />
          <Link href="/solutions/mass-torts" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Mass Torts</Link>
          <Link href="/lp/social-media" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Social Media MDL</Link>
          <Link href="/lp/hair-relaxer" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Hair Relaxer MDL</Link>
          <Link href="/compare/vs-ai-intake-tools" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Compare</Link>
          <Link href="/privacy" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy</Link>
        </div>
      </footer>

    </div>
  )
}
