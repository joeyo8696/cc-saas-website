'use client'

import Image from 'next/image'

const BASE = 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/integrations'

const logos = [
  { name: 'Clio',          src: `${BASE}/clio.png` },
  { name: 'Filevine',      src: `${BASE}/filevine-v2.png` },
  { name: 'Litify',        src: `${BASE}/litify.png` },
  { name: 'SmartAdvocate', src: `${BASE}/smartadvocate.png` },
  { name: 'LeadDocket',    src: `${BASE}/leaddocket.png` },
  { name: 'Fluent Case',   src: `${BASE}/fluentcase.png` },
  { name: 'HighLevel',     src: `${BASE}/highlevel.png` },
  { name: 'MyCase',        src: `${BASE}/mycase.png` },
  { name: 'Actionstep',      src: `${BASE}/actionstep.png` },
  { name: 'Practice Panther', src: `${BASE}/practicepanther.png` },
  { name: 'Salesforce',       src: `${BASE}/salesforce.png` },
]

const track = [...logos, ...logos]

export default function IntegrationsTicker() {
  return (
    <section style={{ background: '#fff', padding: '96px 0 80px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', position: 'relative', zIndex: 2 }}>

      {/* Heading + copy */}
      <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px', padding: '0 40px', position: 'relative', zIndex: 1 }}>
        <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '14px' }}>
          Integrations
        </span>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
          Works with the tools<br />your firm already uses
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.75 }}>
          Case Compass plugs into your existing case management, CRM, and marketing stack — so signed cases flow in automatically and nothing falls through the cracks.
        </p>
      </div>

      {/* Ticker */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade masks */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          width: 'max-content',
          animation: 'ticker 36s linear infinite',
          paddingLeft: '16px',
          willChange: 'transform',
        }}>
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              title={logo.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '160px',
                height: '72px',
                flexShrink: 0,
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '12px 20px',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#c7d2fe'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={48}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
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
