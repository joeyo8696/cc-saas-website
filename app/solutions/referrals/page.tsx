import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, BarChart3, DollarSign, TrendingUp, UserCheck, Bell, FileText, ArrowLeftRight, PenLine, CheckCircle, Send } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Legal Referral Network Software — Partner Portals, Co-Counsel Agreements & Fee Tracking',
  description:
    'Case Compass gives law firms a complete two-way referral network: accept leads from partner attorneys, refer cases out with auto-generated co-counsel agreements, track every fee, and close the loop — without spreadsheets.',
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/referrals',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/referrals',
    siteName: 'Case Compass',
    title: 'Legal Referral Network | Case Compass',
    description: 'Two-way referral management with branded partner portals, auto-generated co-counsel agreements, e-signatures, and fee tracking. Built for plaintiff law firms.',
    images: [{ url: '/images/referrals-outbound-dashboard.png', width: 1200, height: 630, alt: 'Case Compass Referral Network' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Referral Network | Case Compass',
    description: 'Two-way referral management with partner portals, co-counsel agreements, e-signatures, and fee tracking for plaintiff law firms.',
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
      name: 'Can my firm refer cases out to other attorneys through Case Compass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass includes a full outbound referral workflow. Your staff can refer any case to a partner firm, set the referral fee percentage, and send the partner a secure email link to accept or decline. The partner can also accept or decline directly from their referrer portal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the co-counsel agreement work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once a partner accepts an outbound referral, your staff can generate a co-counsel fee agreement as a PDF directly in Case Compass. The referring firm types their name to sign electronically, and the agreement is emailed to the partner. The partner then reviews it in their portal and signs with their own typed signature. Both signed copies are automatically emailed to both parties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I track referral fees automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass automatically generates a fee record when an intake from a referral partner completes, and also tracks outbound referral fees when a referred case resolves. You can set fee percentages, mark fees as paid, add notes, and maintain a full ledger — without spreadsheets.',
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
      name: 'Do referring partners see my firm\'s internal dashboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Partners have access only to their own branded portal, where they see leads they\'ve submitted, referrals they\'ve received from your firm, and the status of each. They cannot see your internal lead pipeline, other clients\' information, or any firm data outside of their own referrals.',
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
      name: 'Does Case Compass support automated referral routing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Through Waypoint AI scoring tiers, cases that meet specific criteria can be automatically routed to partner firms as outbound referrals — without staff intervention. This is ideal for cases outside your practice area or geographic footprint.',
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
    { '@type': 'ListItem', position: 3, name: 'Referral Network', item: 'https://www.casecompass.io/solutions/referrals' },
  ],
}

const benefits = [
  {
    icon: ArrowLeftRight,
    title: 'Two-way referral network',
    desc: 'Accept inbound leads from your partner attorneys and refer cases out — both tracked in the same platform with full attribution.',
  },
  {
    icon: UserCheck,
    title: 'Self-serve partner onboarding',
    desc: 'Send a secure invite link. Partners activate their own portal and start submitting leads — no manual credential sharing, no IT involvement.',
  },
  {
    icon: FileText,
    title: 'Auto-generated co-counsel agreements',
    desc: 'One click generates a complete co-counsel fee agreement PDF pre-filled with client name, partner details, and fee percentage. No templates to maintain.',
  },
  {
    icon: PenLine,
    title: 'Type-to-sign for both parties',
    desc: 'The referring firm signs within their dashboard. The partner signs in their portal. The final executed agreement is automatically sent to both parties.',
  },
  {
    icon: DollarSign,
    title: 'Automatic fee tracking',
    desc: 'Fee records are created automatically when a referred case resolves. Set per-partner fee percentages, mark as paid, and maintain a full ledger without spreadsheets.',
  },
  {
    icon: BarChart3,
    title: 'Partner performance reporting',
    desc: 'Leads, intakes, conversion rates, and fee totals per partner — in a single dashboard. Identify which relationships are producing and double down.',
  },
  {
    icon: TrendingUp,
    title: 'Waypoint-triggered auto-referrals',
    desc: 'Cases that meet specific Waypoint AI criteria can be automatically routed to partner firms — zero staff intervention needed for cases outside your footprint.',
  },
  {
    icon: Bell,
    title: 'Real-time notifications',
    desc: 'Staff get notified when a partner accepts or declines a referral. Partners get notified when an agreement is sent. Everyone stays in the loop automatically.',
  },
  {
    icon: CheckCircle,
    title: 'Full audit trail',
    desc: 'Every acceptance, signature, and status change is timestamped. See exactly who signed what and when — for every referral in your network.',
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
          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(8,145,178,0.15)', border: '1px solid rgba(103,232,249,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#67e8f9', marginBottom: '24px' }}>
              ✦ Referral Network
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              A referral network that actually <em>closes the loop</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
              Accept inbound referrals from partner attorneys. Refer cases out with auto-generated co-counsel agreements. Get e-signatures from both parties. Track every fee. All in one platform — no spreadsheets, no email threads.
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

        {/* Hero screenshot — outbound referral dashboard */}
        <section style={{ background: '#fff', padding: '80px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <SectionReveal>
              <p style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '24px' }}>
                Outbound Referrals — Staff Dashboard
              </p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0' }}>
                <Image
                  src="/images/referrals-outbound-dashboard.png"
                  alt="Case Compass outbound referral dashboard — send co-counsel agreement with type-to-sign modal"
                  width={1000}
                  height={620}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <p style={{ textAlign: 'center', fontSize: '0.82rem', color: '#94a3b8', marginTop: '16px', lineHeight: 1.6 }}>
                Staff can see every outbound referral, send a co-counsel agreement, and sign directly from the dashboard.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Two-way intro */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
              <SectionReveal>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2 }}>
                  Referrals in both directions — fully tracked
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.75, marginTop: '16px' }}>
                  Most firms manage inbound and outbound referrals in two separate places (or nowhere at all). Case Compass handles the entire network in one dashboard.
                </p>
              </SectionReveal>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <SectionReveal>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', border: '1px solid #e2e8f0', height: '100%' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #ecfeff, #e0f2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Users size={20} color="#0891b2" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Inbound: partner attorney portal</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.75, marginBottom: '16px' }}>
                    Each referring attorney gets their own branded portal to submit leads and track real-time status. Leads are auto-attributed, AI-scored, and ready for your team when they land.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Self-serve portal activation', 'Structured lead intake form', 'Real-time status updates', 'Waypoint AI scoring on every lead'].map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
                        <span style={{ color: '#0891b2', marginTop: '2px', flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', border: '1px solid #e2e8f0', height: '100%' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Send size={20} color="#16a34a" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Outbound: refer cases to partner firms</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.75, marginBottom: '16px' }}>
                    Refer any case to a trusted partner firm, set the fee percentage, and send an acceptance request. The partner receives a secure email to accept or decline — or can respond directly from their portal.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Accept/decline flow via email or portal', 'Auto-generated co-counsel agreement PDF', 'Type-to-sign for both parties', 'Automated fee record creation'].map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
                        <span style={{ color: '#16a34a', marginTop: '2px', flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Co-counsel agreement section */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
              <SectionReveal>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', marginBottom: '12px' }}>Co-Counsel Agreements</div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                    From referral to signed agreement in minutes
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: '16px' }}>
                    When a partner accepts your referral, generate a complete co-counsel fee agreement with one click. The PDF is pre-filled with the client name, partner firm, fee percentage, and standard co-counsel terms.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
                    Your staff signs first by typing their name directly in the dashboard. The agreement is then emailed to the partner, who reviews and signs in their portal. The fully executed document is automatically delivered to both parties.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { icon: FileText, label: 'Auto-generated PDF — no templates to maintain' },
                      { icon: PenLine, label: 'Type-to-sign for referring and receiving firm' },
                      { icon: CheckCircle, label: 'Executed copy emailed to both parties automatically' },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #ecfeff, #e0f2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon size={15} color="#0891b2" />
                        </div>
                        <span style={{ fontSize: '0.875rem', color: '#0f172a', fontWeight: 500 }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                  <Image
                    src="/images/referrals-cocounsel-agreement.png"
                    alt="Auto-generated co-counsel fee agreement PDF with type-to-sign signatures from both firms"
                    width={560}
                    height={440}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: '12px' }}>
                  Executed co-counsel agreement — both parties signed directly in the platform.
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Partner portal section */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
              <SectionReveal>
                <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                  <Image
                    src="/images/referrals-partner-portal.png"
                    alt="Referral partner portal — Referrals Received tab showing accept, view, and sign actions"
                    width={560}
                    height={420}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: '12px' }}>
                  The partner portal shows referrals received with clear accept, view, and sign actions.
                </p>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0891b2', marginBottom: '12px' }}>Partner Portal</div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                    Partners get a full two-way portal
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: '16px' }}>
                    Partner attorneys see the leads they&apos;ve submitted to your firm <em>and</em> cases your firm has referred to them — all in the same portal.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, marginBottom: '24px' }}>
                    When you send them a referral, they can accept or decline with a single click. Once accepted, they can view the co-counsel agreement and sign it without leaving their portal.
                  </p>
                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '16px 20px' }}>
                    <p style={{ fontSize: '0.875rem', color: '#166534', lineHeight: 1.7, margin: 0 }}>
                      <strong>No login friction.</strong> Partners can also accept or decline referrals directly from the email link — no password required for that initial response.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
              <SectionReveal>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2 }}>
                  The full outbound referral flow
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.75, marginTop: '16px' }}>
                  From creating a referral to a fully executed co-counsel agreement — every step handled in Case Compass.
                </p>
              </SectionReveal>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
              {[
                { num: '1', title: 'Create referral', desc: 'Staff selects a case, chooses a partner firm, and sets the fee percentage. The partner receives an email instantly.' },
                { num: '2', title: 'Partner responds', desc: 'Partner accepts or declines via email link or their portal. Staff is notified automatically either way.' },
                { num: '3', title: 'Send agreement', desc: 'Staff generates the co-counsel PDF, types their name to sign, and sends it to the partner in one click.' },
                { num: '4', title: 'Partner signs', desc: 'Partner reviews the agreement in their portal and types their name to sign. Both parties get the executed copy.' },
                { num: '5', title: 'Track the fee', desc: 'When the case resolves, update the status to fee owed or fee paid. Full ledger maintained automatically.' },
              ].map(({ num, title, desc }) => (
                <SectionReveal key={num}>
                  <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '28px 20px', border: '1px solid #e2e8f0', height: '100%', position: 'relative' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #0891b2, #0369a1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '0.85rem', marginBottom: '16px' }}>
                      {num}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Everything included with Referral Network
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {benefits.map(({ icon: Icon, title, desc }) => (
                <SectionReveal key={title}>
                  <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#fff' }}>
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

        {/* Reporting section */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
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
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
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
        <section style={{ background: '#fff', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
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
                  <Link href={href} className="related-solution-card" style={{ display: 'block', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none', background: '#f8fafc' }}>
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
              Ready to build a referral network that runs itself?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>
              Book a walkthrough and we&apos;ll show you inbound intake, outbound referrals, co-counsel agreements, and fee tracking live in your account.
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
