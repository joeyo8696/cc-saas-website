import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CompareTeaser() {
  return (
    <div style={{ background: '#fff', padding: '0 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '40px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #2e1065 50%, #1e1b4b 100%)',
            borderRadius: '16px',
            padding: '28px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            border: '1px solid rgba(139,92,246,0.25)',
            boxShadow: '0 4px 32px rgba(99,102,241,0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(139,92,246,0.25)',
              border: '1px solid rgba(139,92,246,0.4)',
              borderRadius: '100px',
              padding: '4px 14px',
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#c4b5fd',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              flexShrink: 0,
            }}>Compare</span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.4,
            }}>
              Case Compass vs. chatbots, webforms, AI intake tools, and generic CRMs — see exactly what&apos;s different.
            </span>
          </div>
          <Link
            href="/compare"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              background: 'rgba(139,92,246,0.2)',
              border: '1px solid rgba(139,92,246,0.4)',
              borderRadius: '8px',
              padding: '10px 20px',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#c4b5fd',
              textDecoration: 'none',
              flexShrink: 0,
              whiteSpace: 'nowrap',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(139,92,246,0.35)'; el.style.color = '#fff' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(139,92,246,0.2)'; el.style.color = '#c4b5fd' }}
          >
            See full comparison <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
