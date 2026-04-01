import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, BarChart3, DollarSign, TrendingUp, UserCheck, Bell, Shield } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Legal Referral Partner Management Software — Portals, Tracking & Fee Splits',
  description:
    'Case Compass gives law firms a complete referral partner system: branded portals for referring attorneys, automatic fee tracking, real-time lead status, and conversion reporting — without spreadsheets.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/referrals',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/referrals',
    siteName: 'Case Compass',
    title: 'Legal Referral Partner Management | Case Compass',
    description: 'Partner portals, referral fee tracking, and conversion reporting for plaintiff law firms. Give referring attorneys a real-time view without access to your dashboard.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Legal Referral Partner Management' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Referral Partner Management | Case Compass',
    description: 'Partner portals, fee tracking, and referral performance reporting built for plaintiff law firms.',
  },
}

const referralsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do referral partners submit leads in Case Compass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each referral partner gets a dedicated portal where they can submit leads directly. Partners fill out a structured intake form and can track the real-time status of every lead they\'ve submitted — without any access to your firm\'s internal dashboard or other clients\' information.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are referral partners onboarded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New referral partners receive a secure invitation email with a link to activate their portal and set up their account. The entire onboarding process is self-serve — no credentials to share manually, no back-and-forth. Partners can be activated or deactivated from your dashboard at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I track referral fees automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass automatically generates a fee record when an intake from a referral partner completes. You can set default fee amounts per partner, mark fees as paid, add notes, and maintain a full fee ledger — without spreadsheets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do referring partners see my firm\'s internal dashboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Partners have access only to their own branded portal, where they see leads they\'ve submitted and the status of each. They cannot see your internal lead pipeline, other clients\' information, or any firm data outside of their own referrals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What reporting is available for referral partner performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The referral reporting dashboard shows leads submitted, intakes completed, conversion rates, and fee totals for every partner — individually and in aggregate. You can identify which partners are sending the highest-quality leads and focus relationship management accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass support attorney referral fee arrangements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass is designed to track and manage referral fee arrangements between law firms and referring attorneys. Fee amounts, payment status, and notes are maintained in the platform. Case Compass does not provide legal advice on fee arrangements — consult applicable bar rules for your jurisdiction.',
      },
    },
  ],
}

const referralsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Referral Partner Management', item: 'https://www.casecompass.io/solutions/referrals' },
  ],
}

const benefits = [
  {
    icon: UserCheck,
    title: 'Self-serve partner onboarding',
    desc: 'Send a secure invite link. Partners activate their own portal and start submitting leads — no manual credential sharing, no IT involvement.',
  },
  {
    icon: Users,
    title: 'Branded partner portal',
    desc: 'Each partner gets their own secure portal to submit leads and track real-time status. They see only their referrals, never your internal pipeline.',
  },
  {
    icon: DollarSign,
    title: 'Automatic fee tracking',
    desc: 'Fee records are generated automatically when a referred intake completes. Set per-partner defaults, mark as paid, and maintain a full ledger without spreadsheets.',
  },
  {
    icon: BarChart3,
    title: 'Partner performance reporting',
    desc: 'Leads, intakes, conversion rates, and fee totals per partner — in a single dashboard. Identify which relationships are producing and double down.',
  },
  {
    icon: TrendingUp,
    title: 'Waypoint scoring on referred leads',
    desc: 'Leads submitted through the partner portal go through the same Waypoint AI scoring as direct intakes — so every referral is evaluated before your team opens it.',
  },
  {
    icon: Bell,
    title: 'Real-time status updates',
    desc: 'Partners see lead statuses update in real time. Fewer status-check emails from referring attorneys, fewer interruptions for your team.',
  },
]

export default function ReferralsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(referralsFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(referralsBreadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0c4a6e)', padding: '100px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(8,145,178,0.15)', border: '1px solid rgba(103,232,249,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#67e8f9', marginBottom: '24px' }}>
              ✦ Referral Network
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Your referral network, <em>finally organized</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
              Referral relationships are one of the highest-ROI growth channels for plaintiff firms — but most are managed through email threads and spreadsheets. Case Compass gives every partner a portal, tracks every fee, and tells you which relationships are actually producing.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <DemoButton style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '0.9rem' }}>
                See Referral Network in Action →
              </DemoButton>
              <Link
                href="https://blog.casecompass.io/posts/referrals-and-waypoint-launch"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
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
                  src="https://blog.casecompass.io/images/referrer-portal.png"
                  alt="Case Compass referral partner portal — partners submit leads and track status in real time"
                  width={900}
                  height={560}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                  unoptimized
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
                  How the Referral Network works
                </h2>
              </SectionReveal>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
              {[
                { num: '1', title: 'Add and invite your partners', desc: 'Add a referring attorney with their contact info and default fee arrangement. They receive a secure invite link and activate their own portal — no setup from your team.' },
                { num: '2', title: 'Partners submit leads directly', desc: 'Referring attorneys log into their portal and submit leads through a structured intake form. Each lead is attributed to the partner automatically.' },
                { num: '3', title: 'Your team sees it instantly', desc: 'The lead appears in your dashboard, attributed to the partner, with a Waypoint AI score already attached. Fee records are generated automatically when the intake completes.' },
              ].map(({ num, title, desc }) => (
                <SectionReveal key={num}>
                  <div style={{ background: '#fff', borderRadius: '14px', padding: '32px', border: '1px solid #e2e8f0' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #0891b2, #0369a1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
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

        {/* Benefits */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Everything included with Referral Network
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {benefits.map(({ icon: Icon, title, desc }) => (
                <SectionReveal key={title}>
                  <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #ecfeff, #e0f2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon size={18} color="#0891b2" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reporting screenshot */}
        <section style={{ background: '#f8fafc', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <SectionReveal>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', marginBottom: '12px' }}>Referral Reporting</div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                    See exactly which partners are producing
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: '16px' }}>
                    The referral reporting dashboard shows total leads, completed intakes, conversion rates, and fee totals for every partner — individually and in aggregate.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8 }}>
                    Stop managing your referral network based on how loudly partners ask for updates. Manage it based on data.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                  <Image
                    src="https://blog.casecompass.io/images/referrals-reporting.png"
                    alt="Case Compass referral partner reporting dashboard — leads, intakes, conversion rates, and fees by partner"
                    width={560}
                    height={380}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    unoptimized
                  />
                </div>
              </SectionReveal>
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
            {referralsFaqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
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
                { href: '/solutions/intake', label: 'Intelligent Intake', desc: 'The complete intake flow — chatbots, webforms, live transfer.' },
                { href: '/solutions/waypoint', label: 'Waypoint AI', desc: 'Score every referred lead before your team opens the file.' },
                { href: '/solutions/esign', label: 'E-Signatures', desc: 'Close retainers in the same session — no separate tool.' },
              ].map(({ href, label, desc }) => (
                <SectionReveal key={href}>
                  <Link href={href} className="related-solution-card" style={{ display: 'block', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none', background: '#fff' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#0891b2', marginBottom: '8px' }}>{label} →</div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0c4a6e)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Ready to organize your referral network?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              Book a walkthrough and we&apos;ll show you the Referral Network live in your account.
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
