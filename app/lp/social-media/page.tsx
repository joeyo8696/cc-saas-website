import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Waypoints, BarChart3, Users, FileSignature, ShieldCheck } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Social Media Addiction Lawsuit Intake Software | Case Compass',
  description:
    'Intake automation for social media addiction MDL 3047 litigation. Qualify minors\' claims against Meta, YouTube, TikTok, and Snap — with evidence capture, AI scoring, and automated routing.',
}

const DEMO_URL = 'https://scheduler.zoom.us/case-compass/case-compass-demo'

const stats = [
  { value: '10,000+', label: 'Individual cases pending in MDL 3047' },
  { value: '$3–6M', label: 'First bellwether verdict, March 2026' },
  { value: '800+', label: 'School district claims filed' },
  { value: '< 8 min', label: 'Time-to-qualification with Case Compass' },
]

const features = [
  {
    icon: Zap,
    title: 'Automated Minor Screening',
    desc: 'Capture platform usage history, age at first use, hours per day, and harm indicators — 24/7, without a phone call. Intake works while you sleep.',
  },
  {
    icon: Waypoints,
    title: 'Waypoint AI Scoring',
    desc: 'Every submission is scored against your criteria: platform, duration of use, age, harms reported (anxiety, body dysmorphia, self-harm, suicidal ideation), and evidence completeness.',
  },
  {
    icon: BarChart3,
    title: 'Platform-Specific Evidence Capture',
    desc: 'Dynamic forms branch by platform — Meta, YouTube, TikTok, Snap — targeting the right evidence for each: activity logs, screen time records, account data, and medical records.',
  },
  {
    icon: ShieldCheck,
    title: 'Medical Record Collection',
    desc: 'Prompt claimants to locate and upload treatment records, therapy notes, and diagnoses upfront — before files go stale or records are lost.',
  },
  {
    icon: Users,
    title: 'Referral Partner Portal',
    desc: 'Accept leads from co-counsel, advertising partners, and referral networks. Track source attribution, case status, and fees automatically.',
  },
  {
    icon: FileSignature,
    title: 'E-Sign in the Intake Flow',
    desc: 'Qualified claimants sign their retainer without leaving intake. No callbacks. No dropped leads. Maximum conversion from first contact.',
  },
]

const platforms = [
  { name: 'Meta', detail: 'Instagram, Facebook' },
  { name: 'YouTube', detail: 'Google / Alphabet' },
  { name: 'TikTok', detail: 'ByteDance' },
  { name: 'Snapchat', detail: 'Snap Inc.' },
]

const harms = [
  'Anxiety & depression',
  'Body dysmorphia',
  'Self-harm behaviors',
  'Suicidal ideation',
  'Eating disorders',
  'Sleep disruption',
  'Academic failure',
  'Social withdrawal',
]

const scoreFields = [
  { category: 'Exposure', items: ['Primary platform(s) used', 'Age at first use', 'Years / hours of daily use', 'Minors account status confirmed', 'Feature exposure (infinite scroll, autoplay, filters)'] },
  { category: 'Harm', items: ['Reported psychological harms', 'Date symptoms began', 'Medical / therapy treatment', 'Hospitalization or crisis events', 'Diagnosis documentation uploaded'] },
  { category: 'Records', items: ['Screen time / activity data', 'Account history / data export', 'Medical records & therapy notes', 'School records (attendance, grades)', 'Provider list for record requests'] },
]

export default function SocialMediaPage() {
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
      <section style={{ background: 'linear-gradient(135deg, #0c0a1e, #1a0533, #2d0a4e)', padding: '96px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Glow */}
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(236,72,153,0.15)', border: '1px solid rgba(249,168,212,0.35)', borderRadius: '99px', padding: '5px 16px', marginBottom: '24px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f9a8d4' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ec4899', boxShadow: '0 0 8px #ec4899', display: 'inline-block' }} />
            MDL 3047 · N.D. California · First Verdict March 2026
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
            Stop Losing Social Media<br /><em style={{ color: '#f472b6' }}>Addiction Claims to Bad Intake.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, marginBottom: '44px', maxWidth: '640px', margin: '0 auto 44px' }}>
            Case Compass qualifies minors&apos; claims against Meta, YouTube, TikTok, and Snap — capturing platform usage, harm documentation, and medical records automatically, then scoring and routing every lead.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href={DEMO_URL} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #be185d, #ec4899)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 8px 28px rgba(236,72,153,0.4)', textDecoration: 'none' }}>
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
      <section style={{ background: '#0f0a1e', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s) => (
            <div key={s.value} style={{ padding: '32px 24px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, color: '#f472b6', marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Verdict context */}
      <section style={{ background: '#fdf2f8', padding: '72px 40px', borderBottom: '1px solid #fce7f3' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#be185d', marginBottom: '16px' }}>Why Now</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '24px' }}>
              The first bellwether verdict just changed everything.
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
              In March 2026, a Los Angeles jury found Meta and YouTube negligent — awarding <strong>$3–6 million</strong> to K.G.M., a 20-year-old who alleged Instagram and YouTube addiction starting in early childhood caused anxiety, body dysmorphia, self-harm, and suicidal ideation. Meta was assigned 70% fault, YouTube 30%. TikTok and Snap settled before trial.
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
              MDL 3047 in the Northern District of California now holds <strong>more than 10,000 individual cases</strong> and over 800 school district claims. This verdict unlocks settlement pressure. Firms that can process claims at scale — with verifiable harm documentation — are positioned to move fast.
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8 }}>
              The bottleneck is intake. Claims without documented platform usage, age verification, and harm records are liabilities, not assets. Case Compass solves that.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Product screenshots */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#be185d', marginBottom: '16px' }}>Built for Social Media MDL</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '12px' }}>
              See Case Compass working social media claims
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '48px', maxWidth: '620px' }}>
              AI scoring, automated follow-up timelines, and Waypoint criteria — built around social media addiction litigation.
            </p>
          </SectionReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <SectionReveal>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                <Image
                  src="/images/ai-lead-scoring.png"
                  alt="Case Compass AI lead scoring for Social Media Harm — Waypoint scoring with HIGH-VALUE CASE flag and live intake conversation"
                  width={900}
                  height={506}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div style={{ padding: '16px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                  <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>AI Lead Scoring — Social Media Harm</p>
                  <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#64748b' }}>Waypoint scores each claim on severity, urgency, case value, and evidence completeness.</p>
                </div>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <SectionReveal delay={1}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Image
                    src="/images/timeline-social-media-workflow.png"
                    alt="Case Compass Timeline Builder showing automated Social Media Addiction follow-up workflow with e-sign, delay, and case management steps"
                    width={800}
                    height={540}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '16px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>Automated Follow-Up Timeline</p>
                    <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#64748b' }}>Social Media Addiction workflow: e-sign routing, case management sync, and drip emails — triggered automatically.</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={2}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Image
                    src="/images/timeline-block-types.png"
                    alt="Case Compass Timeline Builder block types — Send Email, Send SMS, Signature Request, Med Record Retrieval, Branch Logic, Status Change, and more"
                    width={800}
                    height={540}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '16px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>No-Code Automation Blocks</p>
                    <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#64748b' }}>Build any intake flow with email, SMS, e-sign, medical record requests, branch logic, and CRM sync — no engineering required.</p>
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
              Social media intake breaks in the same three places
            </h2>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '56px' }}>High-volume plaintiff intake fails when exposure is hard to quantify and harm is hard to document.</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {[
              { title: 'Unverified platform exposure', body: 'Claimants know they used Instagram or TikTok, but can\'t recall start dates, daily hours, or which specific features they engaged with — exactly what MDL threshold requirements demand.' },
              { title: 'Vague harm without documentation', body: '"I was depressed" isn\'t enough. Without therapy records, psychiatric diagnoses, hospitalization notes, or school records showing impact, the claim won\'t hold.' },
              { title: 'Teams buried in unqualified leads', body: 'High ad spend and broad campaigns fill funnels fast — but case workers spend hours on claimants who are adults, never treated, or using platforms that settled.' },
            ].map((item) => (
              <SectionReveal key={item.title}>
                <div style={{ background: '#fdf2f8', borderRadius: '12px', padding: '28px', border: '1px solid #fce7f3', height: '100%' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899', marginBottom: '16px' }} />
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
              Everything you need for social media MDL intake
            </h2>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '56px' }}>From first contact to attorney-ready case packet — automated.</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {features.map(({ icon: Icon, title, desc }, i) => (
              <SectionReveal key={title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #e2e8f0', height: '100%' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #fce7f3, #ede9fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Icon size={18} color="#be185d" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms + Harms */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '24px' }}>Platform coverage</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {platforms.map((p) => (
                <div key={p.name} style={{ background: '#fdf2f8', borderRadius: '10px', padding: '18px 20px', border: '1px solid #fce7f3' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{p.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{p.detail}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.8rem', color: '#94a3b8' }}>Intake forms and scoring criteria branch dynamically by platform.</p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '24px' }}>Harms we capture and score</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {harms.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#334155' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ec4899', flexShrink: 0, display: 'inline-block' }} />
                  {h}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Scoring breakdown */}
      <section style={{ padding: '80px 40px', background: '#0f0a1e' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#fff', lineHeight: 1.2, textAlign: 'center', marginBottom: '12px' }}>
              Every dimension of a social media claim — captured and scored
            </h2>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: '1rem', marginBottom: '56px' }}>Maps directly into your Waypoint scoring criteria and intake form logic.</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {scoreFields.map(({ category, items }) => (
              <SectionReveal key={category}>
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '28px', border: '1px solid rgba(255,255,255,0.08)', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f472b6', marginBottom: '20px' }}>{category}</div>
                  {items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <span style={{ color: '#ec4899', marginTop: '2px', flexShrink: 0 }}>✓</span>
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
              { step: '1', title: 'Capture', body: 'Dynamic intake form and call center automation script collect platform history, age at first use, daily usage patterns, and harm indicators from the claimant.' },
              { step: '2', title: 'Branch by Platform', body: 'Form logic routes claimants through Meta, YouTube, TikTok, or Snap-specific question sets — capturing the right evidence for each defendant\'s exposure profile.' },
              { step: '3', title: 'Score', body: 'Waypoint evaluates exposure duration, age, harms reported, evidence completeness, and treatment history — producing a litigability score with a clear evidence gap report.' },
              { step: '4', title: 'Deliver', body: 'Push clean case packets (CSV/PDF) to your CRM. Route high-score leads to call center agents, live transfer, or attorney review. Automated follow-up handles pending records.' },
            ].map(({ step, title, body }, i) => (
              <SectionReveal key={step} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ display: 'flex', gap: '24px', padding: '28px 0', borderBottom: '1px solid #e2e8f0', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #be185d, #ec4899)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>{step}</div>
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
      <section style={{ background: 'linear-gradient(135deg, #0c0a1e, #1a0533, #2d0a4e)', padding: '96px 40px', textAlign: 'center' }}>
        <SectionReveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Ready to run social media MDL intake at scale?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', marginBottom: '44px', maxWidth: '540px', margin: '0 auto 44px' }}>
            We&apos;ll configure your intake flow and Waypoint scoring criteria for the platforms you&apos;re targeting — in days, not weeks.
          </p>
          <Link href={DEMO_URL} target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #be185d, #ec4899)', color: '#fff', padding: '16px 40px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, boxShadow: '0 8px 28px rgba(236,72,153,0.4)', textDecoration: 'none' }}>
            Request a Demo →
          </Link>
        </SectionReveal>
      </section>

      <footer style={{ background: '#060d1f', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 40px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© {new Date().getFullYear()} Case Compass · <a href="https://www.casecompass.io" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>casecompass.io</a></p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/lp/mdl-intake" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>MDL Intake Software</Link>
            <Link href="/lp/hair-relaxer" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Hair Relaxer MDL</Link>
            <Link href="/solutions/mass-torts" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Mass Torts</Link>
          </div>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', margin: 0 }}>Case Compass is not a law firm and does not provide legal advice. This page is intended for law firms and legal intake operations evaluating intake automation software for social media addiction litigation.</p>
      </footer>

    </div>
  )
}
