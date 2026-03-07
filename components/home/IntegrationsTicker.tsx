'use client'

import Image from 'next/image'

const BASE = 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/integrations'

const logos = [
  { name: 'Clio',           src: `${BASE}/clio.png`,           invert: false },
  { name: 'Filevine',       src: `${BASE}/filevine.png`,       invert: false },
  { name: 'Litify',         src: `${BASE}/litify.png`,         invert: false },
  { name: 'SmartAdvocate',  src: `${BASE}/smartadvocate.png`,  invert: false },
  { name: 'LeadDocket',     src: `${BASE}/leaddocket.png`,     invert: false },
  { name: 'Fluent Case',    src: `${BASE}/fluentcase.png`,     invert: false },
  { name: 'HighLevel',      src: `${BASE}/highlevel.png`,      invert: false },
  { name: 'MyCase',         src: `${BASE}/mycase.png`,         invert: false },
]

// Duplicate for seamless infinite loop
const track = [...logos, ...logos]

export default function IntegrationsTicker() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '48px 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px', padding: '0 40px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8' }}>
          Integrates with your existing stack
        </span>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Fade masks */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{
          display: 'flex',
          gap: '56px',
          alignItems: 'center',
          width: 'max-content',
          animation: 'ticker 30s linear infinite',
        }}>
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '44px',
                flexShrink: 0,
                opacity: 0.55,
                transition: 'opacity 0.2s ease',
                filter: 'grayscale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.filter = 'grayscale(0)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.55'
                e.currentTarget.style.filter = 'grayscale(1)'
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={44}
                style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block', maxWidth: '140px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
