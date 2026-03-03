import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export default function RobloxCallout() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '72px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <SectionReveal style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '99px', padding: '5px 14px', marginBottom: '16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4ade80' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
              MDL Litigation
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
              Roblox Addiction MDL:<br />Target minors with gaming addiction,<br />automated evidence capture.
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Roblox MDL litigation is targeting minors with gaming addiction and financial harm. Our intake system captures exposure data, transaction history, and behavioral indicators automatically. Get your Roblox intake live today.
            </p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <Link
              href="https://roblox.casecompass.io"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #059669, #22c55e)', color: '#fff', padding: '15px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(34,197,94,0.35)', whiteSpace: 'nowrap' }}
            >
              See Roblox Toolkit →
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
