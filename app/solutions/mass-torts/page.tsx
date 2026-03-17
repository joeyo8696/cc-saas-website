import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Waypoints, Users, BarChart3, Zap, Shield, TrendingUp, FileText } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Mass Tort Intake & Lead Scoring | Case Compass',
  description:
    'Case Compass helps plaintiff firms capture, score, and convert mass tort leads at scale. Waypoint AI evaluates every intake against tort-specific criteria — before your team opens the file.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/mass-torts',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/mass-torts',
    siteName: 'Case Compass',
    title: 'Mass Tort Intake & Lead Scoring | Case Compass',
    description: 'Score every mass tort intake automatically with Waypoint AI. Purpose-built for high-volume plaintiff firms running active tort campaigns.',
    images: [{ url: '/images/waypoint-criteria-list.png', width: 1200, height: 630, alt: 'Mass Tort Intake Scoring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mass Tort Intake & Lead Scoring | Case Compass',
    description: 'Score every mass tort intake automatically with Waypoint AI.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Case Compass handle high-volume mass tort intake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass handles intake at any volume — chatbots, webforms, and live transfer channels all feed directly into the same pipeline. The moment a claimant submits, Waypoint AI scores the intake against your tort-specific criteria. Your team sees scores and summaries without manually reviewing every submission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Waypoint score criteria specific to a particular mass tort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Waypoint criteria are fully customizable per form and case type. You define what a qualified claimant looks like for your specific tort — exposure duration, diagnosis, statute of limitations, product use dates, and more. Pre-built criteria sets are available for Depo-Provera, Roundup (Glyphosate), and other active mass torts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Case Compass support referral partner networks for mass torts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass includes a dedicated Referral Partner Portal where co-counsel, referring attorneys, and marketing partners can log in to track the status of every lead they have referred. Fee tracking, lead attribution, and reporting are all built in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which active mass torts does Case Compass support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass is currently used for Depo-Provera, Roundup (Glyphosate), and personal injury mass tort campaigns. Because Waypoint criteria are fully custom, firms can build intake scoring for any active or emerging tort in minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with legal CMS platforms used in mass tort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates with Filevine, Clio, LeadDocket, Litify, and other case management systems. Signed clients push automatically so your team can start working the case without manual data entry.',
      },
    },
  ],
}

const features = [
  {
    icon: Waypoints,
    title: 'Waypoint scoring per tort',
    desc: 'Define custom criteria for each active tort — diagnosis requirements, exposure windows, statute deadlines, product use. Waypoint applies them to every intake, automatically.',
  },
  {
    icon: BarChart3,
    title: 'Score thousands, not dozens',
    desc: 'Mass tort intake is a numbers game. Waypoint processes every submission in parallel, instantly surfacing which cases meet your thresholds — at any volume.',
  },
  {
    icon: Users,
    title: 'Referral partner portal',
    desc: 'Give co-counsel and marketing partners their own portal to track leads, see statuses, and monitor referral fees. No back-and-forth emails.',
  },
  {
    icon: Zap,
    title: 'Instant lead qualification',
    desc: 'The moment intake is submitted, your team sees a structured score, written summary, and any red flags. No file-by-file manual review.',
  },
  {
    icon: FileText,
    title: 'E-signature in the same session',
    desc: 'Qualified claimants can sign their retainer before they leave the intake flow. Pre-filled from intake data, no DocuSign juggling required.',
  },
  {
    icon: Shield,
    title: 'BYOK — your data stays yours',
    desc: 'Waypoint uses your own AI API key. Client data never touches a shared model and is never used to train anyone else\'s AI.',
  },
  {
    icon: TrendingUp,
    title: 'Referral fee tracking',
    desc: 'Track outstanding, paid, and waived referral fees across your entire partner network. Built-in reporting with filtering by partner, case type, and status.',
  },
  {
    icon: CheckCircle,
    title: 'Pre-built criteria for active torts',
    desc: 'Get started faster with pre-built Waypoint criteria sets for Depo-Provera, Roundup, and more. Customize to match your exact standards.',
  },
]

const activeTorts = [
  { name: 'Depo-Provera', tag: 'Active', desc: 'Custom scoring for meningioma diagnosis, duration of use, and treatment history.' },
  { name: 'Roundup (Glyphosate)', tag: 'Active', desc: 'Criteria covering NHL diagnosis, occupational exposure, product use timeline, and medical documentation.' },
  { name: 'Personal Injury', tag: 'Always on', desc: 'Fully configurable criteria for any PI tort campaign — liability, severity, SOL, and more.' },
]

const massTortsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Mass Tort Intake Software', item: 'https://www.casecompass.io/solutions/mass-torts' },
  ],
}

export default function MassTortsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(massTortsBreadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0c1a3a)', padding: '100px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* subtle grid pattern */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.12) 1px, transparent 0)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '6px', padding: '5px 14px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#34d399', marginBottom: '24px' }}>
              ★ Mass Tort
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Score every mass tort intake<br />
              <em>before your team opens the file</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
              Mass tort campaigns generate hundreds of intakes. Case Compass captures them all, scores every submission against your tort-specific criteria, and tells your team which cases are worth their time — automatically, at scale.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <DemoButton style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '0.9rem' }}>
                See It in Action →
              </DemoButton>
              <Link
                href="/solutions/waypoint"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
              >
                About Waypoint →
              </Link>
            </div>
          </div>
        </section>

        {/* Active torts badges */}
        <section style={{ background: '#0f172a', padding: '28px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.07em', marginRight: '8px' }}>
              Active tort criteria:
            </span>
            {['Depo-Provera', 'Roundup / Glyphosate', 'Personal Injury', 'Workers\' Comp'].map(t => (
              <span key={t} style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', color: '#a5b4fc', borderRadius: '20px', padding: '4px 14px', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 600 }}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Waypoint screenshot */}
        <section style={{ background: '#fff', padding: '80px 40px' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                  Waypoint: tort-specific scoring criteria
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                  Define exactly what a qualified claimant looks like for your active tort. Waypoint evaluates every intake against these criteria in seconds.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0' }}>
                <Image
                  src="/images/waypoint-criteria-list.png"
                  alt="Waypoint criteria for mass tort intake scoring"
                  width={960}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#f8fafc', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 64px' }}>
              <SectionReveal>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2 }}>
                  From first click to signed retainer
                </h2>
              </SectionReveal>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { num: '1', color: '#4f46e5', title: 'Claimant submits intake', desc: 'Via chatbot, webform, or live transfer. Case Compass captures the full submission 24/7.' },
                { num: '2', color: '#7c3aed', title: 'Waypoint scores instantly', desc: 'Your tort-specific criteria are applied the moment intake is complete — before anyone opens the file.' },
                { num: '3', color: '#0284c7', title: 'Team works best cases first', desc: 'Your team sees scores, summaries, and flags. Qualified leads get priority. Others enter nurture flows.' },
                { num: '4', color: '#059669', title: 'Retainer signed in-session', desc: 'Qualified claimants sign digitally before they leave. Data syncs to Filevine, Clio, or your CMS.' },
              ].map(({ num, color, title, desc }) => (
                <SectionReveal key={num}>
                  <div style={{ background: '#fff', borderRadius: '14px', padding: '28px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '1.1rem', marginBottom: '18px' }}>
                      {num}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI scoring screenshot */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="split-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <SectionReveal>
                <div>
                  <div style={{ display: 'inline-block', background: '#ede9fe', color: '#5b21b6', borderRadius: '6px', padding: '4px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
                    Waypoint AI
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                    A structured score on every intake — not just gut instinct
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '24px' }}>
                    Waypoint evaluates each claimant across multiple dimensions: case value, liability exposure, evidence quality, urgency, and every custom criterion you define for your tort.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      'Overall score with written AI summary',
                      'Category-level breakdowns (severity, liability, evidence)',
                      'Red flag detection and SOL warnings',
                      'Consistent — no variance between staff or time of day',
                    ].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                        <CheckCircle size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/solutions/waypoint" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: '#4f46e5', textDecoration: 'none' }}>
                    Learn more about Waypoint →
                  </Link>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                  <Image
                    src="/images/ai-lead-scoring.png"
                    alt="AI lead scoring for mass tort intake"
                    width={560}
                    height={420}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Referral partner section */}
        <section style={{ background: '#f8fafc', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="split-row split-row-reversed" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <SectionReveal>
                <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                  <Image
                    src="/images/referrals-fees.png"
                    alt="Referral partner fee tracking for mass tort"
                    width={560}
                    height={420}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <div style={{ display: 'inline-block', background: '#dcfce7', color: '#166534', borderRadius: '6px', padding: '4px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '20px' }}>
                    Referral Partners
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                    Your co-counsel and referral network — in one place
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '24px' }}>
                    Mass tort campaigns run on referral relationships. Case Compass gives your partner network a dedicated portal to track every lead they&apos;ve referred, see real-time status updates, and monitor referral fees — without clogging your inbox.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      'Dedicated partner login — no shared credentials',
                      'Lead status visible in real time (submitted, qualified, signed)',
                      'Referral fee tracking with paid / outstanding status',
                      'Partners can submit new leads directly through the portal',
                    ].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                        <CheckCircle size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Active torts */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                  Pre-built criteria for active torts
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                  Hit the ground running with Waypoint criteria sets built for today&apos;s most active mass tort campaigns. Customize further, or build your own from scratch.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              {activeTorts.map(({ name, tag, desc }) => (
                <SectionReveal key={name}>
                  <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '14px', background: '#fafafa' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{name}</h3>
                      <span style={{ background: tag === 'Active' ? '#dcfce7' : '#ede9fe', color: tag === 'Active' ? '#166534' : '#5b21b6', borderRadius: '12px', padding: '2px 10px', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700 }}>
                        {tag}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Everything you need to run mass tort at scale
              </h2>
            </SectionReveal>
            <div className="feature-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {features.map(({ icon: Icon, title, desc }) => (
                <SectionReveal key={title}>
                  <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#fff' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon size={18} color="#4338ca" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
            </SectionReveal>
            {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
              <SectionReveal key={name}>
                <div style={{ borderBottom: '1px solid #e2e8f0', padding: '28px 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                    {name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>
                    {acceptedAnswer.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* Related solutions */}
        <section style={{ background: '#f8fafc', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', textAlign: 'center', marginBottom: '32px' }}>
                Related Solutions
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { href: '/solutions/waypoint', label: 'Waypoint AI Scoring', desc: 'Deep dive into how Waypoint scores every intake against custom criteria.' },
                { href: '/solutions/intake', label: 'Intelligent Intake', desc: 'Chatbots, webforms, and live transfer — the full intake flow for plaintiff firms.' },
                { href: '/solutions/workers-comp', label: "Workers' Comp", desc: 'Intake automation purpose-built for workers\' compensation firms.' },
              ].map(({ href, label, desc }) => (
                <SectionReveal key={href}>
                  <Link href={href} className="related-solution-card" style={{ display: 'block', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none', background: '#fff' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#4f46e5', marginBottom: '8px' }}>{label} →</div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0c1a3a)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Running an active tort campaign?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              We&apos;ll walk you through how Waypoint criteria work for your specific tort and show you the full intake-to-retainer flow live.
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
