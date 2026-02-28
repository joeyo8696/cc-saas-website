const ITEMS = [
  '90% Chat-to-Client Conversion',
  'McCune Law Group — 70% Cost Reduction',
  'RDK Legal — 900x ROI',
  'Stern & Cohen — #1 Intake Channel',
  'Live 24/7 Intake Automation',
  'Waypoint AI Scoring',
  'Referral Partner Management',
  'E-Signature in Intake Flow',
  'Filevine · LeadDocket · Litify Integration',
  '$1M+ New Clients per Month',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        padding: '18px 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="ticker-track" style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 40px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.55)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ color: '#4f46e5', fontSize: '0.5rem' }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
