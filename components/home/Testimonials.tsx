'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

const slides = [
  {
    image: 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/case-study-mccune.png',
    alt: 'McCune Law Group — 68% increase in conversions with Case Compass',
    firm: 'McCune Law Group',
    href: 'https://mccunewright.com/',
  },
  {
    image: 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/case-study-stern-cohen.png',
    alt: 'Stern & Cohen — Chat becomes #1 highest converting intake channel',
    firm: 'Stern & Cohen',
    href: null,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)

  return (
    <section style={{ background: '#f8fafc', padding: '96px 0', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>

        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 56px' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>
              Client Stories
            </span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2 }}>
              Firms that moved fast,<br />grew fast
            </h2>
          </SectionReveal>
        </div>

        <SectionReveal>
          <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>

            {/* Slide */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', border: '1px solid #e2e8f0', background: '#fff' }}>
              {slides[active].href ? (
                <Link href={slides[active].href} target="_blank" rel="noopener" style={{ display: 'block' }}>
                  <Image
                    src={slides[active].image}
                    alt={slides[active].alt}
                    width={1200}
                    height={600}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    priority
                  />
                </Link>
              ) : (
                <Image
                  src={slides[active].image}
                  alt={slides[active].alt}
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              )}
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              aria-label="Previous"
              style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#0f172a' }}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#0f172a' }}
            >
              ›
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{ width: i === active ? '24px' : '8px', height: '8px', borderRadius: '99px', background: i === active ? '#4f46e5' : '#cbd5e1', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s ease' }}
                />
              ))}
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
