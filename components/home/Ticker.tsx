const ITEMS = [
  'Stern & Cohen — 75% Chat-to-Client Conversion',
  'McCune Law Group — 70% Increase in Conversions',
  '90% Reduction in Case Acquisition Costs',
  'Waypoint AI — Instant Lead Scoring & Qualification',
  '24/7 Automated Intake — Never Miss a Lead',
  'Mass Tort · Workers\' Comp · Landlord Tenant · PI',
  'Referral Partner Portals & Fee Tracking',
  'Clio · Filevine · LeadDocket · Litify Integration',
  'E-Signature Built Into the Intake Flow',
  'Live Transfer — Speed-to-Lead in Seconds',
  'Full-Funnel Analytics — First Click to Signed Retainer',
  'Dwellex — The Complete Eviction Pipeline',
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
