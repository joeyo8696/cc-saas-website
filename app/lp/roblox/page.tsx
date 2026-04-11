import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Zap, BarChart3, Users, FileSignature, Waypoints } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Roblox Mass Tort Litigation Software | Case Compass',
  description:
    'Intelligent intake automation for Roblox MDL litigation. Double your conversion rates, reduce intake costs by 90%, and automate evidence validation with Case Compass.',
}

const features = [
  { icon: Zap, title: 'Automated Screening', desc: 'Capture claimant details 24/7 — age at time of use, hours per week, in-app purchases, and behavioral indicators — without a single phone call.' },
  { icon: Waypoints, title: 'Waypoint Scoring', desc: 'AI evaluates every submission against your Roblox criteria: exposure level, minor status, financial harm, and case strength indicators.' },
  { icon: BarChart3, title: 'Evidence Validation', desc: 'Automated prompts guide claimants to preserve and upload transaction records, device information, and account history — before they lose it.' },
  { icon: Users, title: 'Referral Partner Portal', desc: 'Accept leads from co-counsel, advertising partners, and referral networks. Track status and fees automatically.' },
  { icon: FileSignature, title: 'E-Signatures in Intake', desc: 'Qualified claimants sign their retainer in the same flow. No callbacks. No delays. Maximum conversion.' },
  { icon: CheckCircle, title: 'CRM Integration', desc: 'Push qualified leads directly into Filevine, Litify, or LeadDocket with full intake context preserved.' },
]

export default function RobloxPage() {
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
      <section style={{ background: 'linear-gradient(135deg, #060d1f, #1a2d5a)', padding: '96px 40px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: '20px' }}>Roblox Mass Tort Litigation</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
            Roblox Mass Tort Intake —<br /><em>Automated and Scored.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            High-volume Roblox MDL intake requires speed and precision. Case Compass captures claimants, scores their cases, and routes qualified leads — automatically.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <DemoButton style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '0.9rem' }}>
              Schedule a Demo →
            </DemoButton>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
              Everything you need for Roblox MDL intake
            </h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {features.map(({ icon: Icon, title, desc }, i) => (
              <SectionReveal key={title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #e2e8f0', height: '100%' }}>
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

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '80px 40px', textAlign: 'center' }}>
        <SectionReveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Ready to run Roblox intake at scale?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>We&apos;ll configure your intake bot and Waypoint criteria in days.</p>
          <Link href="https://scheduler.zoom.us/case-compass/case-compass-demo" target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700 }}>
            Schedule a Demo →
          </Link>
        </SectionReveal>
      </section>

      <footer style={{ background: '#060d1f', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Case Compass</p>
      </footer>
    </div>
  )
}
