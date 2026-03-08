import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'IEEPA Tariff Refund Claims: Manage the Intake Surge | Case Compass',
  description:
    'The Supreme Court invalidated IEEPA tariffs. Law firms handling refund claims are about to face a flood of inquiries. Case Compass helps you qualify, score, and track every potential client.',
}

const features = [
  { num: '01', title: 'Smart, Automated Intake', desc: 'An AI-guided conversational intake captures claimants 24/7 — asking the right questions in the right order. Claimant type, tariff amounts, contract documentation, goods category, supply chain role — all collected before your team ever picks up the phone.' },
  { num: '02', title: 'Waypoint AI Lead Scoring', desc: "Every submitted intake is automatically scored against your firm's criteria — tariff amounts paid, documentation quality, supply chain position, and legal exposure. Your team sees a case score before they open the record." },
  { num: '03', title: 'Pipeline & Status Tracking', desc: 'Track every lead from first inquiry through intake, evaluation, and engagement. Tag leads as Qualified, Needs Documentation, Strong Claim, or Disqualified — whatever maps to your workflow.' },
  { num: '04', title: 'Referral Partner Network', desc: 'Customs brokers, accountants, and trade associations are already fielding questions. Set up referral partner portals so they submit leads directly and track real-time status — without touching your internal dashboard.' },
  { num: '05', title: 'Speed to Engagement', desc: 'Automated intake, instant scoring, and priority queues mean your team focuses on high-value cases — not manually triaging a spreadsheet. The firms that move fastest win the best cases.' },
  { num: '06', title: 'CRM Integration', desc: 'Seamlessly push qualified leads into Filevine, Litify (Salesforce), or LeadDocket. No duplicate data entry, no handoff friction — just a clean pipeline from inquiry to engagement.' },
]

const criteria = [
  { num: '1',  label: 'Tariff Amount Paid',           desc: 'Total IEEPA tariffs paid — higher amounts mean stronger recovery incentive and case value' },
  { num: '2',  label: 'Supply Chain Role',             desc: 'Importer of record vs. distributor vs. end buyer — determines legal pathway and complexity' },
  { num: '3',  label: 'Contract Documentation',        desc: 'Supply agreements, purchase orders, and tariff surcharge records — strength of documentary evidence' },
  { num: '4',  label: 'Tariff Pass-Through Structure', desc: 'Were tariffs separately invoiced or embedded in pricing? Key determinant of refund entitlement' },
  { num: '5',  label: 'Goods Category & HTS Codes',    desc: "Specific product classifications affected by IEEPA orders and the claimant's import categories" },
  { num: '6',  label: 'Exposure Time Period',          desc: 'Duration and volume of tariff-impacted transactions across the relevant filing period' },
  { num: '7',  label: 'PSC & Protest Deadlines',       desc: 'Post Summary Correction and protest windows — time-sensitive claims need immediate attention' },
  { num: '8',  label: 'Reservation of Rights',         desc: 'Whether the claimant documented tariff costs as temporary or reserved rights — supports recovery' },
  { num: '9',  label: 'Prior CBP Interaction',         desc: 'Prior protests, rulings, or classification disputes that affect the refund claim pathway' },
  { num: '10', label: 'Existing Legal Representation', desc: 'Whether the claimant has trade counsel — determines urgency and exclusivity opportunity' },
]

export default function IeepaPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: '#0f172a', background: '#fff', overflowX: 'hidden' }}>

      {/* Nav */}
      <nav style={{ background: 'rgba(11,21,48,0.96)', backdropFilter: 'blur(12px)', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/">
          <Image src="/images/cc-logo-white.png" alt="Case Compass" width={160} height={26} style={{ height: '26px', width: 'auto' }} />
        </Link>
        <DemoButton style={{ padding: '9px 20px', fontSize: '0.85rem' }}>
          Book a Demo
        </DemoButton>
      </nav>

      {/* Breaking bar */}
      <div style={{ background: 'linear-gradient(90deg, #dc2626, #ef4444)', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#fff' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #fff', flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, background: 'rgba(255,255,255,0.2)', borderRadius: '4px', padding: '1px 8px', fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Breaking</span>
        <p style={{ margin: 0 }}>
          Feb 20, 2026 — SCOTUS 6–3: IEEPA tariffs invalidated. $175B+ in estimated refund exposure (Penn Wharton) across 301,000+ U.S. importers.{' '}
          <Link href="https://www.pwc.com/us/en/services/tax/library/pwc-sc-decision-on-ieepa-tariffs-reshapes-trade-auth-and-introduces-potential-refund-op.html" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline' }}>
            PwC analysis →
          </Link>
        </p>
      </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0b1530, #1a2d5a)', padding: '96px 40px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(252,165,165,0.3)', borderRadius: '99px', padding: '5px 14px', fontSize: '0.78rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fca5a5', marginBottom: '24px', letterSpacing: '0.06em' }}>
            IEEPA Tariff Refund Claims
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
            Your Firm Is About to Be <em style={{ fontStyle: 'italic', color: '#fca5a5' }}>Flooded.</em><br />Are You Ready?
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '620px', margin: '0 auto 40px' }}>
            IEEPA-related tariffs have been struck down by the Supreme Court. Every business that paid them is now a potential claimant. The firms that qualify leads fast — before competitors do — will win this wave.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <DemoButton style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)', boxShadow: '0 8px 24px rgba(239,68,68,0.35)', padding: '14px 32px', fontSize: '0.9rem' }}>
              See Case Compass in Action →
            </DemoButton>
            <Link
              href="#how-it-works"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600 }}
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '40px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '32px', textAlign: 'center' }}>
          {[
            { num: '$175B+',        lbl: 'IEEPA tariffs collected\nto date — PwC estimate' },
            { num: '6–3',           lbl: 'Supreme Court ruling\nFebruary 20, 2026' },
            { num: 'Every Importer', lbl: 'Potentially a refund claimant\nor contract dispute party' },
            { num: 'Now',           lbl: 'First-mover firms will\ncapture the strongest cases' },
          ].map(({ num, lbl }) => (
            <div key={num}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '6px' }}>{num}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Distinct Cases */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>The Opportunity</span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '12px' }}>
              Two Distinct Cases for Law Firms
            </h2>
          </SectionReveal>
          <SectionReveal delay={2}>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '48px', maxWidth: '600px' }}>
              The ruling creates immediate work across two practice types — and both require fast, systematic intake to capitalize.
            </p>
          </SectionReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
            <SectionReveal delay={1}>
              <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '32px', border: '1px solid #fecaca', height: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#dc2626', borderRadius: '99px', padding: '4px 12px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '0.06em' }}>
                  High Urgency
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Customs & Trade Refund Recovery</h3>
                <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.75 }}>
                  Importers of record who paid IEEPA tariffs directly to U.S. Customs can file for refunds. CBP will process them to the importer — but qualification, timing, and claim preparation matter. Firms with customs and trade experience will be inundated with inquiries from day one.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={2}>
              <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '32px', border: '1px solid #bfdbfe', height: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#1d4ed8', borderRadius: '99px', padding: '4px 12px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '0.06em' }}>
                  Ongoing Opportunity
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Contract & Commercial Disputes</h3>
                <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.75 }}>
                  The harder, longer-tail fight: who in the supply chain actually keeps the refund? Distributors, manufacturers, and retailers who absorbed tariff surcharges may have legitimate claims against importers. This is commercial contract litigation at scale — and it will run for years.
                </p>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '24px 28px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontSize: '0.925rem', color: '#374151', lineHeight: 1.75, margin: 0 }}>
                <strong>The challenge:</strong> Both opportunity types will generate massive inbound volume — from legitimate high-value claims to businesses with weak or non-existent cases. Without a systematic intake and qualification process, your firm wastes time on unwinnable cases and misses the ones worth taking.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How CC Helps */}
      <section id="how-it-works" style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>Case Compass</span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '12px' }}>
              Built for Exactly This Kind of Surge
            </h2>
          </SectionReveal>
          <SectionReveal delay={2}>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '48px', maxWidth: '540px' }}>
              High-volume, high-stakes intake where fast qualification is the difference between a great case and a time sink.
            </p>
          </SectionReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {features.map(({ num, title, desc }, i) => (
              <SectionReveal key={num} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #e2e8f0', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '12px' }}>{num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waypoint visual */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
              <div>
                <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>Waypoint in Action</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', lineHeight: 1.3, marginBottom: '16px' }}>
                  Every intake scored before<br />your team opens the record.
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.8, marginBottom: '16px' }}>
                  Waypoint&apos;s criteria library is organized by category — case value, liability, medical, urgency, red flags, and more. For IEEPA claims, your library is configured around the specific factors that matter: tariff amounts, supply chain position, documentation quality, and legal exposure.
                </p>
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.8 }}>
                  The moment an intake is submitted, Waypoint evaluates it against every criterion and surfaces a score. No manual review, no gut calls — just consistent, documented evaluation on every single claimant, applied with the same standard every time.
                </p>
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                <Image src="/images/ieepa-waypoint-criteria.png" alt="Waypoint IEEPA scoring criteria — Evidence Strength, Case Value, Legal Pathway and more" width={600} height={420} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                <Image src="/images/ieepa-waypoint-criteria.png" alt="Waypoint criterion configuration — custom scoring settings per case type" width={600} height={420} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div>
                <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>Built Around Your Standards</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', lineHeight: 1.3, marginBottom: '16px' }}>
                  Your criteria. Your scoring logic.<br />Not a generic template.
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.8, marginBottom: '16px' }}>
                  Each criterion is configured around what your firm actually cares about — not a one-size-fits-all scoring model. For IEEPA practices, that means weighting tariff exposure heavily, flagging weak documentation, and fast-tracking claims with separately itemized surcharges and clear pass-through language.
                </p>
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.8 }}>
                  Case Compass works with your team to build the criteria library. Most firms are scoring live within days.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Scoring criteria */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>Waypoint</span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '12px' }}>
              What to Score on Every IEEPA Intake
            </h2>
          </SectionReveal>
          <SectionReveal delay={2}>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '48px', maxWidth: '580px' }}>
              Configure Waypoint criteria around the factors that actually determine whether a claim is worth pursuing. Every intake gets evaluated automatically — consistently, at scale.
            </p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
            {criteria.map(({ num, label, desc }) => (
              <SectionReveal key={num}>
                <div style={{ background: '#fff', borderRadius: '10px', padding: '20px 24px', border: '1px solid #e2e8f0', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: '#e2e8f0', flexShrink: 0, minWidth: '28px' }}>{num}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: '4px' }}>{label}</p>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div style={{ background: '#fff', borderRadius: '10px', padding: '24px 28px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
                According to{' '}
                <Link href="https://www.pwc.com/us/en/services/tax/library/pwc-sc-decision-on-ieepa-tariffs-reshapes-trade-auth-and-introduces-potential-refund-op.html" target="_blank" rel="noopener" style={{ color: '#4f46e5', textDecoration: 'underline' }}>
                  PwC&apos;s analysis
                </Link>
                , companies should immediately inventory IEEPA duties paid, map PSC and protest deadlines, review contractual tariff pass-through provisions, and coordinate across trade, tax, finance, and legal functions.{' '}
                <strong>&ldquo;Early preparation may be critical&rdquo;</strong> — the firms with a systematic intake process in place before formal CBP guidance issues will be best positioned to act fast on the strongest cases.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>Who It&apos;s For</span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px' }}>
              Built for Firms Handling This Wave
            </h2>
          </SectionReveal>
          <SectionReveal delay={2}>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '48px', maxWidth: '540px', marginTop: '-32px' }}>
              Case Compass is already used by firms managing high-volume intake. IEEPA claims are the same challenge at a different scale.
            </p>
          </SectionReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <SectionReveal delay={1}>
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '32px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Ideal For</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Customs & trade law practices seeing inbound from importers',
                    'Commercial litigation firms handling contract disputes along supply chains',
                    'Class action practices building consolidated tariff refund cases',
                    'General business litigation firms with existing commercial clients',
                    'Any firm looking to capture IEEPA referrals from trade associations or brokers',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: '#374151', lineHeight: 1.6 }}>
                      <span style={{ color: '#4f46e5', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
            <SectionReveal delay={2}>
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '32px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>What You Get</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Conversational intake live in days, not weeks',
                    'AI scoring criteria calibrated to IEEPA claim factors',
                    'Referral partner portals for customs brokers, accountants, trade groups',
                    'Full lead pipeline with status tracking and staff assignment',
                    'CRM integrations with Filevine, Litify, and LeadDocket',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: '#374151', lineHeight: 1.6 }}>
                      <span style={{ color: '#4f46e5', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Limited Window CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0b1530, #1a2d5a)', padding: '96px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(252,165,165,0.3)', borderRadius: '99px', padding: '5px 14px', fontSize: '0.78rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fca5a5', marginBottom: '24px', letterSpacing: '0.06em' }}>
            Limited Window
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            The Window Is Open —<br /><em style={{ fontStyle: 'italic', color: '#fca5a5' }}>But Not for Long</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '40px' }}>
            Firms that build a systematic intake process now will capture the most valuable IEEPA cases. Those that don&apos;t will be manually triaging inquiries while competitors are closing retainers.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <DemoButton style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)', boxShadow: '0 8px 24px rgba(239,68,68,0.35)', padding: '15px 36px', fontSize: '1rem' }}>
              Book a 30-Minute Demo →
            </DemoButton>
            <Link
              href="/solutions/intake"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', padding: '15px 36px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600 }}
            >
              See Our Intake Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#060d1f', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginBottom: '8px' }}>
          © {new Date().getFullYear()} Case Compass ·{' '}
          <Link href="https://www.casecompass.io/privacy" style={{ color: 'rgba(255,255,255,0.3)' }}>Privacy Policy</Link>
          {' · '}
          <Link href="mailto:hello@casecompass.io" style={{ color: 'rgba(255,255,255,0.3)' }}>hello@casecompass.io</Link>
        </p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          This page is for informational purposes only and does not constitute legal advice. Case Compass is a legal intake and lead management platform, not a law firm.
        </p>
      </footer>
    </div>
  )
}
