import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, FileText, Zap, BarChart3, Waypoints, Users } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'

export const metadata: Metadata = {
  title: 'Depo-Provera Meningioma Lawsuit Intake Software | Case Compass',
  description:
    'Medical-record-ready intake automation for Depo-Provera meningioma litigation. Verify exposure, confirm diagnosis, build MDL-ready case packets with Case Compass.',
}

const features = [
  { icon: CheckCircle, title: 'Exposure Verification', desc: 'Automatically collect exposure dates, dosage details, and duration of use — the key qualifiers for Depo-Provera meningioma claims.' },
  { icon: FileText, title: 'Diagnosis Confirmation', desc: 'Guide claimants to confirm meningioma diagnosis with prompts for imaging reports, neurosurgery records, and treating physician details.' },
  { icon: Waypoints, title: 'Waypoint Scoring', desc: 'Evaluate every intake against exposure duration, diagnosis quality, medical documentation strength, and case value indicators.' },
  { icon: Zap, title: 'MDL-Ready Case Packets', desc: 'Automatically assemble the intake data, uploaded records, and documentation checklist into a structured case packet for your MDL team.' },
  { icon: BarChart3, title: 'Pipeline Management', desc: 'Track every claimant from first inquiry through intake, medical records request, evaluation, and engagement — at scale.' },
  { icon: Users, title: 'Referral Network', desc: 'Accept and track leads from co-counsel, advertising partners, and referring physicians. Automated fee management included.' },
]

export default function DepoProveraPage() {
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
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', padding: '96px 40px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: '20px' }}>MDL 3140</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
            Stop Paying for<br /><em style={{ color: '#fca5a5' }}>Unprovable Depo-Provera Leads.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Medical-record-ready intake for Depo-Provera meningioma litigation. Verify exposure, confirm diagnosis, and build MDL-ready case packets automatically.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo" target="_blank" rel="noopener" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}>
              Schedule a Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Qualification bar */}
      <div style={{ background: '#fffbeb', borderBottom: '1px solid #fcd34d', padding: '16px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#92400e' }}>Key qualifiers:</span>
          {['Depo-Provera use 1+ year', 'Meningioma diagnosis', 'Diagnosis after 2019', 'No prior meningioma history'].map((q) => (
            <span key={q} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#78350f', background: 'rgba(251,191,36,0.2)', borderRadius: '99px', padding: '3px 10px' }}>
              <CheckCircle size={12} color="#92400e" />
              {q}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section style={{ padding: '80px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
              MDL-ready intake, automated
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
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f)', padding: '80px 40px', textAlign: 'center' }}>
        <SectionReveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Ready to scale Depo-Provera intake?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>We&apos;ll configure your intake and Waypoint criteria in days.</p>
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
