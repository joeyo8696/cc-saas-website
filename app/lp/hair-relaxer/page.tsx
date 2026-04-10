import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Waypoints, BarChart3, Users, FileSignature, ShieldCheck } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Hair Relaxer Lawsuit Intake Software | Case Compass',
  description:
    'Intake automation for hair relaxer MDL 3060 litigation. Qualify uterine cancer and ovarian cancer claims against L\'Oreal, Revlon, and Strength of Nature — with product usage history, medical record collection, and AI scoring.',
}

const DEMO_URL = 'https://calendly.com/casecompass/case-compass-intro'

const stats = [
  { value: '11,000+', label: 'Pending cases in MDL 3060 (N.D. Illinois)' },
  { value: '2.55×', label: 'Higher uterine cancer risk — NIH Sister Study' },
  { value: '$150K–$750K', label: 'Projected settlement range per cancer claim' },
  { value: '< 8 min', label: 'Time-to-qualification with Case Compass' },
]

const features = [
  {
    icon: Zap,
    title: 'Automated Product Usage Screening',
    desc: 'Capture brand, frequency of use, years of use, and last use date — 24/7, without a phone call. The intake works while your ad campaigns run.',
  },
  {
    icon: Waypoints,
    title: 'Waypoint AI Scoring',
    desc: 'Every submission is scored against your criteria: diagnosis type, duration of use, brands used, treatment history, and documentation completeness — producing a litigability score automatically.',
  },
  {
    icon: BarChart3,
    title: 'Brand-Specific Evidence Capture',
    desc: 'Dynamic forms branch by defendant — L\'Oreal, Revlon, Strength of Nature, Dabur — targeting product-specific exposure data and purchase timelines relevant to each defendant.',
  },
  {
    icon: ShieldCheck,
    title: 'Medical Record Collection',
    desc: 'Prompt claimants to locate and upload diagnosis records, oncology notes, surgery reports, and treatment history upfront — before files go stale or records become harder to obtain.',
  },
  {
    icon: Users,
    title: 'Referral Partner Portal',
    desc: 'Accept leads from co-counsel, advertising partners, and lead gen networks. Track source attribution, case status, and referral fees automatically.',
  },
  {
    icon: FileSignature,
    title: 'E-Sign in the Intake Flow',
    desc: 'Qualified claimants sign their retainer without leaving intake. No callbacks. No dropped leads. HIPAA authorization captured at the same time for medical record retrieval.',
  },
]

const brands = [
  { name: 'Dark & Lovely', defendant: 'L\'Oreal / SoftSheen-Carson' },
  { name: 'Optimum', defendant: 'L\'Oreal / SoftSheen-Carson' },
  { name: 'Mizani', defendant: 'L\'Oreal / SoftSheen-Carson' },
  { name: 'Crème of Nature', defendant: 'Revlon' },
  { name: 'Just for Me', defendant: 'Strength of Nature' },
  { name: 'Motions', defendant: 'Strength of Nature' },
  { name: 'Soft & Beautiful', defendant: 'Strength of Nature' },
  { name: 'African Pride', defendant: 'Strength of Nature' },
  { name: 'ORS Olive Oil', defendant: 'Dabur' },
  { name: 'TCB Naturals', defendant: 'Strength of Nature' },
  { name: 'Dream Kids', defendant: 'Strength of Nature' },
  { name: 'Dr. Miracle\'s', defendant: 'Strength of Nature' },
]

const diagnoses = [
  'Uterine cancer',
  'Uterine fibroids',
  'Ovarian cancer',
  'Endometrial cancer',
  'Endometriosis',
  'Hormone-related cancers',
]

const scoreFields = [
  {
    category: 'Exposure',
    items: [
      'Product brand(s) used',
      'Frequency of use (4+ times/year)',
      'Years / duration of use',
      'Age at first use',
      'Date of last use',
    ],
  },
  {
    category: 'Diagnosis',
    items: [
      'Cancer or fibroid diagnosis type',
      'Date of diagnosis',
      'Oncologist / treating physician',
      'Surgical or hospitalization records',
      'Diagnosis documentation uploaded',
    ],
  },
  {
    category: 'Records',
    items: [
      'Pathology reports',
      'Oncology treatment notes',
      'Surgery records',
      'Medical provider list',
      'Provider info for record requests',
    ],
  },
]

export default function HairRelaxerPage() {
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
      <section style={{ background: 'linear-gradient(135deg, #1c0a00, #3d1800, #5c2a00)', padding: '96px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(253,211,77,0.35)', borderRadius: '99px', padding: '5px 16px', marginBottom: '24px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fcd34d' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 8px #f59e0b', display: 'inline-block' }} />
            MDL 3060 · N.D. Illinois · 11,000+ Pending Cases
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
            Stop Losing Hair Relaxer<br /><em style={{ color: '#fbbf24' }}>Claims to Slow Intake.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, marginBottom: '44px', maxWidth: '640px', margin: '0 auto 44px' }}>
            Case Compass qualifies uterine cancer and ovarian cancer claims against L&apos;Oreal, Revlon, Strength of Nature, and Dabur — capturing product usage history, medical documentation, and provider information automatically, then scoring and routing every lead.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href={DEMO_URL} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #b45309, #f59e0b)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 8px 28px rgba(245,158,11,0.4)', textDecoration: 'none' }}>
              See the Intake Flow →
            </Link>
            <Link href={DEMO_URL} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none' }}>
              Talk to a Specialist
            </Link>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>CRM and case management agnostic · Works with your existing stack</p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#1c0a00', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s) => (
            <div key={s.value} style={{ padding: '32px 24px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, color: '#fbbf24', marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Context */}
      <section style={{ background: '#fffbeb', padding: '72px 40px', borderBottom: '1px solid #fde68a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b45309', marginBottom: '16px' }}>Why Now</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '24px' }}>
              11,000 cases. A Special Master appointed. Bellwethers in 2027.
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
              MDL 3060 in the Northern District of Illinois is now one of the largest mass torts in the country — over <strong>11,000 pending cases</strong> and growing at roughly 250 per month. An NIH Sister Study found that women who used chemical hair straighteners more than four times annually were <strong>2.55 times more likely to develop uterine cancer</strong>. The science is solid and getting stronger.
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
              Judge Mary M. Rowland appointed a Special Master in April 2025 to facilitate settlement discussions. Revlon has already set aside $44 million in bankruptcy. Daubert motions are in, bellwether trials are expected in 2027, and projected settlements for cancer claims run <strong>$150,000–$750,000 per claimant</strong>.
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8 }}>
              The bottleneck is intake. Claims without documented product usage history, cancer diagnosis records, and medical provider information are liabilities, not assets. Case Compass solves that.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Product screenshots */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b45309', marginBottom: '16px' }}>Built for Hair Relaxer MDL</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '12px' }}>
              See Case Compass working hair relaxer claims
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '48px', maxWidth: '620px' }}>
              AI scoring, Waypoint criteria, and automated follow-up — built to process high volumes of MDL claims.
            </p>
          </SectionReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <SectionReveal>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                <Image
                  src="/images/ai-lead-scoring.png"
                  alt="Case Compass AI lead scoring — Waypoint scoring with HIGH-VALUE CASE flag and live intake conversation"
                  width={900}
                  height={506}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '16px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                  <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>AI Lead Scoring</p>
                  <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#64748b' }}>Waypoint scores each claim on diagnosis type, exposure duration, brand, and evidence completeness.</p>
                </div>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <SectionReveal delay={1}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Image
                    src="/images/waypoint-criteria-full.png"
                    alt="Waypoint AI scoring criteria configuration for mass tort intake"
                    width={800}
                    height={540}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '16px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>Configurable Waypoint Criteria</p>
                    <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#64748b' }}>Set your own scoring thresholds — diagnosis type, product exposure, documentation requirements — without writing a line of code.</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={2}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Image
                    src="/images/intake-form-builder.png"
                    alt="Case Compass intake form builder — drag and drop form with branching logic for mass tort intake"
                    width={800}
                    height={540}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '16px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>Intake Form Builder</p>
                    <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#64748b' }}>Build hair relaxer intake with branching by brand and diagnosis — no developers needed. Go live in days.</p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '12px' }}>
              Hair relaxer intake breaks in the same three places
            </h2>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '56px' }}>High ad spend fills your funnel. Bad intake means most of those leads go nowhere.</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {[
              {
                title: 'Claimants can\'t name the product',
                body: 'Most women know they used "a hair relaxer" but not the brand, the manufacturer, or whether it\'s even a named defendant. Your intake has to help them identify it — not just ask.',
              },
              {
                title: 'Medical documentation is missing',
                body: 'A cancer diagnosis without records is a weak claim. Intake needs to prompt claimants to locate oncology notes, pathology reports, and surgery records before they forget or lose access.',
              },
              {
                title: 'Teams buried in unqualified leads',
                body: 'Heat straighteners, keratin treatments, and no-diagnosis claimants all look the same at the top of the funnel. Without automated screening, paralegals spend hours on leads that don\'t qualify.',
              },
            ].map((item) => (
              <SectionReveal key={item.title}>
                <div style={{ background: '#fffbeb', borderRadius: '12px', padding: '28px', border: '1px solid #fde68a', height: '100%' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', marginBottom: '16px' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '12px' }}>
              Everything you need for hair relaxer MDL intake
            </h2>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '56px' }}>From first contact to attorney-ready case packet — automated.</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {features.map(({ icon: Icon, title, desc }, i) => (
              <SectionReveal key={title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #e2e8f0', height: '100%' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #fef3c7, #fde68a)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Icon size={18} color="#b45309" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands + Diagnoses */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '24px' }}>Named defendant brands</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {brands.map((b) => (
                <div key={b.name} style={{ background: '#fffbeb', borderRadius: '10px', padding: '14px 16px', border: '1px solid #fde68a' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{b.name}</div>
                  <div style={{ fontSize: '0.73rem', color: '#94a3b8' }}>{b.defendant}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.8rem', color: '#94a3b8' }}>Intake forms branch by defendant. Additional brands added as MDL expands.</p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '24px' }}>Qualifying diagnoses</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {diagnoses.map((d) => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fffbeb', borderRadius: '8px', padding: '12px 16px', border: '1px solid #fde68a' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>{d}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '18px 20px', border: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: 1.6 }}>
                <strong>Automatic disqualifiers:</strong> heat straighteners only, keratin treatments, no cancer or fibroid diagnosis. Case Compass screens these out before a paralegal touches the file.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Scoring breakdown */}
      <section style={{ padding: '80px 40px', background: '#1c0a00' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#fff', lineHeight: 1.2, textAlign: 'center', marginBottom: '12px' }}>
              Every dimension of a hair relaxer claim — captured and scored
            </h2>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: '1rem', marginBottom: '56px' }}>Maps directly into your Waypoint scoring criteria and intake form logic.</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {scoreFields.map(({ category, items }) => (
              <SectionReveal key={category}>
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '28px', border: '1px solid rgba(255,255,255,0.08)', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fbbf24', marginBottom: '20px' }}>{category}</div>
                  {items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <span style={{ color: '#f59e0b', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
              From first contact to attorney-ready case packet
            </h2>
          </SectionReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                step: '1',
                title: 'Capture',
                body: 'The intake form and call center script collect product usage history — brand, frequency, years of use — and guides claimants through identifying the defendant based on the products they used.',
              },
              {
                step: '2',
                title: 'Qualify',
                body: 'Chemical hair relaxer vs. heat tools, cancer or fibroids diagnosis vs. no diagnosis — automatic branching eliminates unqualified leads before anyone reviews them manually.',
              },
              {
                step: '3',
                title: 'Score',
                body: 'Waypoint evaluates exposure duration, diagnosis type, medical documentation uploaded, and treatment history — producing a litigability score with a clear evidence gap report.',
              },
              {
                step: '4',
                title: 'Deliver',
                body: 'Push clean case packets to your CRM. Route high-score leads to call center agents, live transfer, or attorney review. Automated follow-up handles pending medical records.',
              },
            ].map(({ step, title, body }, i) => (
              <SectionReveal key={step} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ display: 'flex', gap: '24px', padding: '28px 0', borderBottom: '1px solid #e2e8f0', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #b45309, #f59e0b)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>{step}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1c0a00, #3d1800, #5c2a00)', padding: '96px 40px', textAlign: 'center' }}>
        <SectionReveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Ready to run hair relaxer MDL intake at scale?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', marginBottom: '44px', maxWidth: '540px', margin: '0 auto 44px' }}>
            We&apos;ll configure your intake flow and Waypoint scoring criteria for MDL 3060 — in days, not weeks.
          </p>
          <Link href={DEMO_URL} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #b45309, #f59e0b)', color: '#fff', padding: '16px 40px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, boxShadow: '0 8px 28px rgba(245,158,11,0.4)', textDecoration: 'none' }}>
            Request a Demo →
          </Link>
        </SectionReveal>
      </section>

      <footer style={{ background: '#060d1f', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 40px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© {new Date().getFullYear()} Case Compass · <a href="https://www.casecompass.io" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>casecompass.io</a></p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/lp/mdl-intake" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>MDL Intake Software</Link>
            <Link href="/lp/social-media" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Social Media MDL</Link>
            <Link href="/solutions/mass-torts" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Mass Torts</Link>
          </div>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', margin: 0 }}>Case Compass is not a law firm and does not provide legal advice. This page is intended for law firms and legal intake operations evaluating intake automation software for hair relaxer litigation.</p>
      </footer>

    </div>
  )
}
