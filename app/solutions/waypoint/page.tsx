import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Waypoints, ShieldCheck, Sliders, BarChart3 } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Waypoint — AI Intake Scoring for Law Firms',
  description:
    'Waypoint evaluates every intake submission against your firm\'s custom criteria and surfaces a score before your team opens the file. Built for high-volume plaintiff law firms.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/waypoint',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/waypoint',
    siteName: 'Case Compass',
    title: 'Waypoint — AI Intake Scoring for Law Firms | Case Compass',
    description: 'Waypoint scores every intake submission against your firm\'s custom criteria before your team opens the file. Consistent, defensible, AI-powered lead scoring for plaintiff law firms.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Waypoint AI Intake Scoring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waypoint — AI Intake Scoring for Law Firms | Case Compass',
    description: 'Score every intake submission automatically before your team opens the file.',
  },
}

const waypointFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Waypoint score leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waypoint uses your firm\'s custom criteria to evaluate each intake submission across multiple dimensions: case value, liability strength, evidence quality, urgency, and any red flags you define. It returns a structured score the moment intake is complete — before your team opens the file.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize Waypoint\'s scoring criteria for my practice area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Waypoint is fully customizable per practice area. You define what a strong case looks like for mass tort, workers\' comp, personal injury, or any other area. Pre-built criteria sets are also available for Depo-Provera, Roblox, and other active mass torts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Waypoint compare to manual intake review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Manual intake review introduces variance — different staff members evaluate cases differently, leading to inconsistent decisions. Waypoint applies the same documented, defensible evaluation standard to every intake, every time. It also scales infinitely: it evaluates as many intakes simultaneously as your firm receives, with zero delay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Waypoint store my client data or use it to train AI models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Waypoint uses a Bring Your Own Key (BYOK) model — it operates using your firm\'s own OpenAI API key. Your data never touches a shared model and is never used to train anyone else\'s AI. Your client information stays yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What practice areas does Waypoint support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waypoint supports any plaintiff practice area. It is currently used for mass tort, workers\' compensation, personal injury, and landlord-tenant law. Custom criteria can be built for any case type in minutes.',
      },
    },
  ],
}

const benefits = [
  { icon: Sliders, title: 'Custom criteria per practice area', desc: 'Define what a strong case looks like for mass tort, workers\' comp, personal injury, and more. Waypoint adapts to your firm\'s standards.' },
  { icon: BarChart3, title: 'Multi-dimensional scoring', desc: 'Scores on case value, liability, evidence quality, urgency, red flags, and every custom dimension you define.' },
  { icon: CheckCircle, title: 'Consistent evaluation on every intake', desc: 'No variance between staff. Every claimant gets the same documented, defensible evaluation standard.' },
  { icon: ShieldCheck, title: 'BYOK — your data stays yours', desc: 'Waypoint uses your own OpenAI API key. Your data never touches a shared model or trains anyone else\'s AI.' },
  { icon: Waypoints, title: 'Scores before your team opens the file', desc: 'The moment intake is complete, Waypoint returns a score. Your team prioritizes with confidence from day one.' },
  { icon: BarChart3, title: 'Built for mass torts & beyond', desc: 'Pre-built Waypoint criteria sets available for Depo-Provera, Roblox, and more. Build custom criteria for any tort in minutes.' },
]

export default function WaypointPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(waypointFaqSchema) }}
      />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section
          style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '100px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(196,181,253,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c4b5fd', marginBottom: '24px' }}>
              ★ Waypoint
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              AI scoring that tells you <em>which cases to take</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
              Stop relying on gut instinct to prioritize your pipeline. Waypoint evaluates every submitted intake against a fully customizable scoring rubric — and surfaces a score before your team opens the file.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <DemoButton style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '0.9rem' }}>
                See Waypoint in Action →
              </DemoButton>
              <Link
                href="https://blog.casecompass.io/posts/referrals-and-waypoint-launch"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600 }}
              >
                Read the Launch Post
              </Link>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section style={{ background: '#fff', padding: '80px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0' }}>
                <Image
                  src="/images/waypoint-criteria-list.png"
                  alt="Waypoint criteria management interface"
                  width={900}
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
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 64px' }}>
              <SectionReveal>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2 }}>
                  How Waypoint works
                </h2>
              </SectionReveal>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
              {[
                { num: '1', title: 'Define your criteria', desc: 'Use the natural language editor to add scoring dimensions specific to your practice area. Set weights, priority order, and red-flag thresholds.' },
                { num: '2', title: 'Intake is submitted', desc: 'A claimant completes your Case Compass intake form or chatbot. The full submission is packaged and sent to Waypoint.' },
                { num: '3', title: 'Score appears instantly', desc: 'Waypoint returns a numeric score, category breakdowns, a written summary, and any flags — before your team opens the lead.' },
              ].map(({ num, title, desc }) => (
                <SectionReveal key={num}>
                  <div style={{ background: '#fff', borderRadius: '14px', padding: '32px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                      {num}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Everything Waypoint can do
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {benefits.map(({ icon: Icon, title, desc }) => (
                <SectionReveal key={title}>
                  <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon size={18} color="#4338ca" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
            </SectionReveal>
            {waypointFaqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
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

        {/* Related Solutions */}
        <section style={{ background: '#fff', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', textAlign: 'center', marginBottom: '32px' }}>
                Related Solutions
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { href: '/solutions/intake', label: 'Intelligent Intake', desc: 'Chatbots, webforms, and live transfer — the full intake flow.' },
                { href: '/solutions/workers-comp', label: "Workers' Comp", desc: 'Intake automation purpose-built for workers\' compensation firms.' },
                { href: '/solutions/dwellex', label: 'Dwellex', desc: 'Case management for landlord-tenant and eviction law.' },
              ].map(({ href, label, desc }) => (
                <SectionReveal key={href}>
                  <Link href={href} className="related-solution-card" style={{ display: 'block', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#4f46e5', marginBottom: '8px' }}>{label} →</div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Ready to score every intake automatically?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
              Book a walkthrough and we&apos;ll show you Waypoint live in your account.
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
