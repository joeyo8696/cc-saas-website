'use client'

import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'

const BASE = 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/integrations'

const logos = [
  { name: 'Clio',          src: `${BASE}/clio.png` },
  { name: 'Filevine',      src: `${BASE}/filevine.png` },
  { name: 'Litify',        src: `${BASE}/litify.png` },
  { name: 'SmartAdvocate', src: `${BASE}/smartadvocate.png` },
  { name: 'LeadDocket',    src: `${BASE}/leaddocket.png` },
  { name: 'Fluent Case',   src: `${BASE}/fluentcase.png` },
  { name: 'HighLevel',     src: `${BASE}/highlevel.png` },
  { name: 'MyCase',        src: `${BASE}/mycase.png` },
]

const track = [...logos, ...logos]

export default function IntegrationsTicker() {
  return (
    <section style={{ background: '#fff', padding: '96px 0 80px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>

      {/* Heading + copy */}
      <SectionReveal>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px', padding: '0 40px' }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '14px' }}>
            Integrations
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
            Works with the tools<br />your firm already uses
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.75 }}>
            Case Compass plugs into your existing case management, CRM, and marketing stack — so signed cases flow in automatically and nothing falls through the cracks. No double entry. No manual handoffs.
          </p>
        </div>
      </SectionReveal>

      {/* Ticker */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade masks — must match section background exactly */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '160px', background: 'linear-gradient(to right, #fff 40%, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '160px', background: 'linear-gradient(to left, #fff 40%, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{
          display: 'flex',
          gap: '64px',
          alignItems: 'center',
          width: 'max-content',
          animation: 'ticker 32s linear infinite',
          paddingLeft: '64px',
          paddingTop: '8px',
          paddingBottom: '8px',
        }}>
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              title={logo.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '140px',
                height: '44px',
                flexShrink: 0,
                opacity: 0.5,
                filter: 'grayscale(1)',
                transition: 'opacity 0.25s ease, filter 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.filter = 'grayscale(0)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.5'
                e.currentTarget.style.filter = 'grayscale(1)'
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={44}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  mixBlendMode: 'multiply',
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
