import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CompareTeaser() {
  return (
    <div style={{ background: '#060d1f', padding: '0 40px', position: 'relative', zIndex: 2 }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '22px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
          background: 'rgba(99,102,241,0.04)',
          borderRadius: '0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <span style={{
            background: 'rgba(99,102,241,0.15)',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '100px',
            padding: '3px 12px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.65rem',
            fontWeight: 700,
            color: '#a5b4fc',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            flexShrink: 0,
          }}>Compare</span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.88rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.4,
          }}>
            Case Compass vs. chatbots, webforms, AI intake tools, and generic CRMs — see exactly what's different.
          </span>
        </div>
        <Link
          href="/compare"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: '#818cf8',
            textDecoration: 'none',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#a5b4fc' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#818cf8' }}
        >
          See full comparison <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
