import type { Metadata } from 'next'
import Link from 'next/link'
import { PenLine, CheckCircle, FileText, MessageSquare, Bell, Download, Shield, Users } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'E-Signatures in Legal Intake — Close Retainers in the Same Session',
  description:
    'Case Compass lets clients sign retainer agreements, authorization forms, and multi-document packages during the intake session — no redirect, no DocuSign handoff, no drop-off. E-signatures built for plaintiff law firms.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/esign',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/esign',
    siteName: 'Case Compass',
    title: 'E-Signatures in Legal Intake | Case Compass',
    description: 'Close retainers without leaving the intake flow. In-session e-signatures, multi-doc support, SMS reminders, and signed document delivery — built for plaintiff law firms.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'E-Signatures in Legal Intake' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Signatures in Legal Intake | Case Compass',
    description: 'Close retainers without leaving the intake flow. In-session signing built for plaintiff law firms.',
  },
}

const esignFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can clients sign retainers during the intake session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass includes in-flow e-signature collection as a native step in the intake process. After a claimant completes the intake questions, they are presented with the retainer or authorization form to sign — without leaving the intake session or being redirected to a separate tool. This eliminates a major source of drop-off in the traditional intake funnel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass support multi-document signing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A single eSign step in the intake flow can include multiple documents — for example, a retainer agreement plus a medical authorization form. Clients sign all documents in one session, which is particularly useful for multi-document retainer packages common in personal injury and mass tort cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a client does not sign during intake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass sends automated SMS reminders to claimants with outstanding signature requests. You can configure reminder frequency and timing from the dashboard. The system tracks which leads have pending signatures so your intake team can follow up without manual monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clients download their signed documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once a client has signed, their completed documents are available for download directly from the client portal. Signed documents are also automatically attached to the completion notification emails sent to your team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is e-signature in Case Compass legally binding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass e-signatures comply with the ESIGN Act and UETA, which establish the legal validity of electronic signatures in the United States. Signed documents include an audit trail with timestamp, IP address, and signer identity information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass replace DocuSign or Adobe Sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For intake retainer signing, yes. Case Compass eliminates the need to route claimants through a separate e-signature tool after intake — the signing step is embedded directly in the intake flow. This closes the gap between intake completion and retainer signature, which is where most law firms lose clients.',
      },
    },
  ],
}

const esignBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'E-Signatures in Legal Intake', item: 'https://www.casecompass.io/solutions/esign' },
  ],
}

const benefits = [
  {
    icon: PenLine,
    title: 'Sign during the intake session',
    desc: 'Retainer agreements appear as a native step in the intake flow. No redirect to DocuSign. No follow-up email to track down. Clients sign while they\'re engaged.',
  },
  {
    icon: FileText,
    title: 'Multi-document retainer packages',
    desc: 'Send a full retainer package — retainer agreement, medical authorization, fee disclosure — for signature in a single eSign block. Everything signed in one step.',
  },
  {
    icon: MessageSquare,
    title: 'SMS reminders for pending signatures',
    desc: 'If a client leaves before signing, automated SMS reminders bring them back. Configure frequency and timing from the dashboard without manual follow-up.',
  },
  {
    icon: Download,
    title: 'Client download from the portal',
    desc: 'Signed documents are immediately available in the client portal for download. No need to email copies — clients can access their documents when they need them.',
  },
  {
    icon: Bell,
    title: 'Signed docs auto-attached to notifications',
    desc: 'When a signature completion notification goes to your team, the signed PDF is already attached. No manual document retrieval from a separate platform.',
  },
  {
    icon: Shield,
    title: 'ESIGN Act and UETA compliant',
    desc: 'Every signed document includes an audit trail: timestamp, signer identity, and IP address. Legally binding signatures that hold up in any jurisdiction.',
  },
]

export default function ESignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(esignFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(esignBreadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #064e3b)', padding: '100px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(5,150,105,0.15)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6ee7b7', marginBottom: '24px' }}>
              ✦ E-Signatures
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Close the retainer <em>before the session ends</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
              The gap between intake completion and signed retainer is where most firms lose clients. Case Compass closes that gap by embedding e-signatures directly in the intake flow — so clients sign while they&apos;re still engaged.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <DemoButton style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '0.9rem' }}>
                See eSign in Action →
              </DemoButton>
              <Link
                href="/solutions/intake"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
              >
                See the Full Intake Flow
              </Link>
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <SectionReveal>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '12px' }}>The Problem</div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                    Intake ends. Retainer doesn&apos;t follow.
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: '16px' }}>
                    The traditional intake funnel has a fatal gap: a prospective client submits their information, then receives an email days later asking them to sign a retainer through a separate tool they&apos;ve never used. Many never do.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8 }}>
                    Every day between intake and signature is another day a competing firm can reach them first.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', borderRadius: '16px', padding: '40px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', marginBottom: '12px' }}>The Case Compass Approach</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#065f46', marginBottom: '20px', lineHeight: 1.3 }}>
                    Sign is a step in intake, not a separate workflow
                  </h3>
                  {[
                    'Client answers intake questions',
                    'Waypoint scores the submission',
                    'Retainer appears as the next step',
                    'Client signs — session complete',
                    'Notification + signed PDF sent to your team',
                  ].map((step, i) => (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: i < 4 ? '12px' : 0 }}>
                      <div style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '50%', background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', color: '#fff' }}>{i + 1}</div>
                      <span style={{ fontSize: '0.875rem', color: '#065f46', fontWeight: 500 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section style={{ background: '#f8fafc', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Everything included with Case Compass eSign
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {benefits.map(({ icon: Icon, title, desc }) => (
                <SectionReveal key={title}>
                  <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#fff' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon size={18} color="#059669" />
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
        <section style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
            </SectionReveal>
            {esignFaqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
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

        {/* Related */}
        <section style={{ background: '#f8fafc', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', textAlign: 'center', marginBottom: '32px' }}>
                Related Solutions
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { href: '/solutions/intake', label: 'Intelligent Intake', desc: 'AI chatbots, webforms, and live transfer — the full intake flow.' },
                { href: '/solutions/waypoint', label: 'Waypoint AI', desc: 'Score every lead before your team opens the file.' },
                { href: '/solutions/referrals', label: 'Referral Network', desc: 'Partner portals, fee tracking, and referral performance reporting.' },
              ].map(({ href, label, desc }) => (
                <SectionReveal key={href}>
                  <Link href={href} className="related-solution-card" style={{ display: 'block', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none', background: '#fff' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#059669', marginBottom: '8px' }}>{label} →</div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #064e3b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Stop chasing signatures after intake
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              See how in-flow e-signing looks in a live Case Compass account.
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
