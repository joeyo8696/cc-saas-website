import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

export default function HairRelaxerCallout() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #1c0a00, #3d1800)', padding: '72px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <SectionReveal style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(253,211,77,0.3)', borderRadius: '99px', padding: '5px 14px', marginBottom: '16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fcd34d' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 8px #f59e0b', display: 'inline-block' }} />
              MDL 3060 · N.D. Illinois · 11,000+ Cases
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
              Hair Relaxer Litigation:<br />One of the largest MDLs in<br />the country. Are you ready?
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              An NIH study found 2.55× higher uterine cancer risk. MDL 3060 has 11,000+ pending cases against L&apos;Oreal, Revlon, and Strength of Nature — with bellwether trials in 2027. Case Compass qualifies claims, collects medical documentation, and scores every lead automatically.
            </p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <Link
              href="/lp/hair-relaxer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #b45309, #f59e0b)', color: '#fff', padding: '15px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(245,158,11,0.35)', whiteSpace: 'nowrap', textDecoration: 'none' }}
            >
              See Hair Relaxer Toolkit →
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
