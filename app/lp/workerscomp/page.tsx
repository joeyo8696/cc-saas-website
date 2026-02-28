import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneForwarded, Zap, FileSignature, BarChart3, MessageSquare, CheckCircle } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'

export const metadata: Metadata = {
  title: "Workers' Comp Intake Automation | Case Compass",
  description:
    "Automate workers' comp client intake with Case Compass. Conversational bots, Waypoint scoring, live transfer, and e-signatures — all in one seamless flow.",
}

const features = [
  { icon: MessageSquare, title: '24/7 Conversational Intake', desc: "Workers' comp clients need to act fast. Your Case Compass bot captures injury details, employer info, and incident facts any time — day or night." },
  { icon: Zap, title: 'Instant Case Scoring', desc: "Waypoint evaluates each submission on injury severity, employer size, liability factors, and documentation quality before your team opens the file." },
  { icon: PhoneForwarded, title: 'Live Transfer', desc: 'When a claimant qualifies, connect them to your intake team in real time — at the peak of their motivation to move forward.' },
  { icon: FileSignature, title: 'E-Signatures in Flow', desc: "Generate the fee agreement and collect e-signature in the same intake session. Don't lose clients to delays." },
  { icon: BarChart3, title: 'Full Pipeline Visibility', desc: 'Track every lead from first contact through intake, evaluation, and retainer signing. See conversion rates by source.' },
  { icon: CheckCircle, title: 'Integration with Your CRM', desc: 'Push qualified leads directly into Filevine, LeadDocket, or your existing case management system — no duplicate entry.' },
]

export default function WorkersCompPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', color: '#0f172a', background: '#fff', overflowX: 'hidden' }}>

      {/* Nav */}
      <nav style={{ background: 'rgba(11,21,48,0.97)', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/"><Image src="/images/cc-logo-white.png" alt="Case Compass" width={160} height={26} style={{ height: '26px', width: 'auto' }} /></Link>
        <Link href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo" target="_blank" rel="noopener" style={{ background: '#4f46e5', color: '#fff', padding: '9px 20px', borderRadius: '6px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700 }}>
          Book a Demo
        </Link>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1a2d5a)', padding: '96px 40px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: '20px' }}>Workers&apos; Compensation</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
            Hurt at Work?<br /><em>Get <span style={{ color: '#a5b4fc' }}>Full Compensation.</span></em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Case Compass automates workers&apos; comp intake end-to-end — from first website visit to signed retainer. 24/7, no manual effort.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo" target="_blank" rel="noopener" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}>
              Schedule a Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof stat */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '24px 40px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
          <span style={{ color: '#4f46e5' }}>90%</span> chat-to-client conversion rate at a high-volume workers&apos; comp firm.
        </p>
      </div>

      {/* Features */}
      <section style={{ padding: '80px 40px', background: '#fff' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
              The complete workers&apos; comp intake stack
            </h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {features.map(({ icon: Icon, title, desc }, i) => (
              <SectionReveal key={title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px', height: '100%' }}>
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
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1a2d5a)', padding: '80px 40px', textAlign: 'center' }}>
        <SectionReveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Automate your workers&apos; comp intake today
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>We set you up, train your team, and have you live in days.</p>
          <Link href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo" target="_blank" rel="noopener" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700 }}>
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
