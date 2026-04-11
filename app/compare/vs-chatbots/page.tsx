import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Legal Intake Platform vs. Chatbot — What\'s the Difference?',
  description:
    'Chatbots handle conversation. A legal intake platform handles conversation, scoring, referral tracking, e-signatures, CRM sync, and analytics. See the full comparison for plaintiff law firms.',
  alternates: {
    canonical: 'https://www.casecompass.io/compare/vs-chatbots',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/compare/vs-chatbots',
    siteName: 'Case Compass',
    title: 'Legal Intake Platform vs. Chatbot | Case Compass',
    description: 'Should your law firm use a chatbot or a legal intake platform? See the full comparison: scoring, referrals, eSign, CRM sync, and analytics.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Legal Intake Platform vs Chatbot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Intake Platform vs. Chatbot | Case Compass',
    description: 'What\'s the difference between a chatbot and a legal intake platform? The answer determines whether leads become clients.',
  },
}

const vsChatbotsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should my law firm use a chatbot or a legal intake platform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on what you need to do after the conversation ends. A basic chatbot is effective for answering questions and capturing contact information conversationally. A legal intake platform like Case Compass does that and also scores the lead against your firm\'s criteria, routes it to the right person, triggers automated follow-up, syncs to your CRM, and enables retainer signing in the same session. For plaintiff firms handling volume, the difference in output is significant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a chatbot score legal leads automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most generic chatbots cannot score leads against firm-specific criteria. Case Compass\'s Waypoint engine evaluates every intake submission against customizable dimensions — case value, liability, medical treatment, urgency, red flags, and more — and returns a score before your team opens the file. This is not a feature of general-purpose chatbot platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can a legal intake platform do that a chatbot cannot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A legal intake platform built for plaintiff firms adds: AI-powered lead scoring, referral partner portals with fee tracking, in-flow e-signature retainer closing, native CRM integration (Litify, Filevine, LeadDocket, Clio), multi-channel attribution, live transfer coordination, and intake analytics. These are not features of standard chatbot tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do law firms use both chatbots and intake platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sometimes. Chatbots can handle top-of-funnel website engagement and hand off to a structured intake flow for qualification. Case Compass can serve both roles — the conversational intake chatbot and the backend scoring and workflow engine — or work alongside an existing conversational widget. The key distinction is what happens after the initial conversation: scoring, routing, signing, and CRM sync are where a purpose-built intake platform adds value.',
      },
    },
  ],
}

const vsChatbotsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.casecompass.io/compare' },
    { '@type': 'ListItem', position: 3, name: 'Intake Platform vs. Chatbot', item: 'https://www.casecompass.io/compare/vs-chatbots' },
  ],
}

const comparisonRows = [
  { feature: 'Conversational intake flow', chatbot: true, platform: true },
  { feature: 'Branching logic by case type', chatbot: 'Limited', platform: true },
  { feature: 'AI lead scoring (before human review)', chatbot: false, platform: true },
  { feature: 'Custom scoring criteria per practice area', chatbot: false, platform: true },
  { feature: 'Referral partner portal', chatbot: false, platform: true },
  { feature: 'Referral fee tracking', chatbot: false, platform: true },
  { feature: 'E-signature retainer in same session', chatbot: false, platform: true },
  { feature: 'Multi-document signing', chatbot: false, platform: true },
  { feature: 'Native Litify / Filevine / LeadDocket sync', chatbot: false, platform: true },
  { feature: 'Live transfer coordination', chatbot: false, platform: true },
  { feature: 'SMS and email automated follow-up', chatbot: 'Limited', platform: true },
  { feature: 'Source and UTM attribution tracking', chatbot: 'Limited', platform: true },
  { feature: 'Intake analytics and reporting', chatbot: 'Limited', platform: true },
  { feature: 'Mass tort / MDL intake toolkits', chatbot: false, platform: true },
  { feature: 'BYOK AI (data stays with your account)', chatbot: false, platform: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle size={18} color="#059669" />
  if (value === false) return <XCircle size={18} color="#dc2626" />
  return <span style={{ fontSize: '0.8rem', color: '#f59e0b', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{value}</span>
}

export default function VsChatbotsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vsChatbotsFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vsChatbotsBreadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section className="compare-hero" style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0d1538 50%, #130f2e 100%)', padding: '120px 40px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.1) 1px, transparent 0)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '420px', borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.16) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '28px' }}>
              <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.38)', fontSize: '0.78rem', fontFamily: 'var(--font-display)', fontWeight: 500, textDecoration: 'none', marginBottom: '16px' }}>
                ← All comparisons
              </Link>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(196,181,253,0.25)', borderRadius: '100px', padding: '6px 18px', marginBottom: '24px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, color: '#c4b5fd', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Intake Platform vs. Chatbot</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              A chatbot starts the conversation.<br /><em>An intake platform finishes it.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto' }}>
              Basic chatbots capture information. A legal intake platform like Case Compass scores it, routes it, follows up on it, signs the retainer, and syncs everything to your CRM — before your team opens a single lead.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="px-section" style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '48px' }}>
                Feature-by-feature comparison
              </h2>
            </SectionReveal>

            <div className="compare-table-wrap">
            {/* Table header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 140px', gap: '0', marginBottom: '8px' }}>
              <div />
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', padding: '8px' }}>Basic Chatbot</div>
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, color: '#4f46e5', padding: '8px', background: '#eef2ff', borderRadius: '8px 8px 0 0' }}>Case Compass</div>
            </div>

            {/* Rows */}
            {comparisonRows.map(({ feature, chatbot, platform }, i) => (
              <SectionReveal key={feature}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 140px 140px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid #f1f5f9' : 'none',
                  background: i % 2 === 0 ? '#fafafa' : '#fff',
                }}>
                  <div style={{ padding: '14px 16px', fontSize: '0.875rem', color: '#374151', fontWeight: 500 }}>{feature}</div>
                  <div style={{ padding: '14px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Cell value={chatbot} />
                  </div>
                  <div style={{ padding: '14px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(79,70,229,0.04)' }}>
                    <Cell value={platform} />
                  </div>
                </div>
              </SectionReveal>
            ))}
            </div> {/* /compare-table-wrap */}
          </div>
        </section>

        {/* Key differences */}
        <section className="px-section" style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                The three gaps that matter most
              </h2>
            </SectionReveal>
            <div className="compare-3col">
              {[
                {
                  num: '01',
                  title: 'Scoring doesn\'t exist in chatbots',
                  desc: 'A chatbot can ask whether a claimant was injured. It can\'t evaluate whether the injury, timeline, liability facts, and case value add up to a case worth taking. Waypoint does that automatically on every intake submission — before anyone on your team sees the lead.',
                },
                {
                  num: '02',
                  title: 'Chatbots don\'t close retainers',
                  desc: 'When a conversation ends, a chatbot\'s job is done. Case Compass presents the retainer agreement as the next step in the intake flow — so the claimant signs while they\'re still engaged. The gap between conversation and signature is where most law firms lose clients.',
                },
                {
                  num: '03',
                  title: 'CRM sync requires more than a name',
                  desc: 'Chatbots typically push a contact record. Case Compass syncs structured intake answers, Waypoint scores, referral partner attribution, source data, and lead status — giving your legal team actionable case information at assignment without any manual re-entry.',
                },
              ].map(({ num, title, desc }) => (
                <SectionReveal key={num}>
                  <div style={{ background: '#fff', borderRadius: '14px', padding: '32px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '16px', lineHeight: 1 }}>{num}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-section" style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
            </SectionReveal>
            {vsChatbotsFaqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
              <SectionReveal key={name}>
                <div style={{ borderBottom: '1px solid #e2e8f0', padding: '28px 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>{acceptedAnswer.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* Related comparisons */}
        <section className="px-section" style={{ background: '#f8fafc', padding: '64px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <SectionReveal>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '20px' }}>
                More comparisons
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/compare/vs-webforms" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>
                  Web Forms <ArrowRight size={14} />
                </Link>
                <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>
                  All Comparisons <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              See the difference in a live demo
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              We&apos;ll walk you through how Case Compass handles an intake end-to-end — from conversation to signed retainer.
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
