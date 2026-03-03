import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export default function DepoProveraCallout() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '72px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <SectionReveal style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(192,132,252,0.3)', borderRadius: '99px', padding: '5px 14px', marginBottom: '16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#c084fc' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px #a855f7', display: 'inline-block' }} />
              Mass Tort Opportunity
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
              Depo-Provera Brain Tumor Litigation:<br />Millions of potential claimants,<br />nationwide case intake.
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Studies link Depo-Provera to increased brain tumor risk. We&apos;ve built pre-configured intake workflows and Waypoint scoring criteria specifically for this litigation. Launch your intake in days, not weeks.
            </p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <Link
              href="https://depoprovera.casecompass.io"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '15px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(124,58,237,0.35)', whiteSpace: 'nowrap' }}
            >
              See Depo-Provera Toolkit →
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
