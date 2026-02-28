import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

export default function IeepaCallout() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #0f172a, #1e1b4b)', padding: '72px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <SectionReveal style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(252,165,165,0.3)', borderRadius: '99px', padding: '5px 14px', marginBottom: '16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fca5a5' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px #ef4444', display: 'inline-block' }} />
              Breaking Opportunity
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
              IEEPA Tariff Refunds:<br />$175B+ in potential claims,<br />301,000+ affected importers.
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Federal courts have invalidated IEEPA tariffs. We&apos;ve already built the Waypoint scoring criteria and intake infrastructure for this litigation. Your firm can be live in days.
            </p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <Link
              href="/lp/ieepa"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #dc2626, #ef4444)', color: '#fff', padding: '15px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(239,68,68,0.35)', whiteSpace: 'nowrap' }}
            >
              See IEEPA Intake Toolkit →
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
