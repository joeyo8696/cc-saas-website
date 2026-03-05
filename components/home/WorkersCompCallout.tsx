import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

export default function WorkersCompCallout() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #451a03, #78350f)', padding: '72px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <SectionReveal style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '99px', padding: '5px 14px', marginBottom: '16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fbbf24' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 8px #f59e0b', display: 'inline-block' }} />
              Workers&apos; Compensation
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
              Workers&apos; Comp Intake:<br />Qualify faster, sign more clients,<br />zero manual triage.
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              High-volume workers&apos; comp firms need speed-to-lead and instant qualification. Case Compass automates intake, scores every claimant against your criteria, and routes the best cases to your team before competitors call them back.
            </p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <Link
              href="/solutions/workers-comp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #d97706, #f59e0b)', color: '#fff', padding: '15px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(245,158,11,0.35)', whiteSpace: 'nowrap' }}
            >
              See Workers&apos; Comp Solution →
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
