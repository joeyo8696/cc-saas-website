'use client'

import { useEffect, useRef, useState } from 'react'
import SectionReveal from '@/components/ui/SectionReveal'

const stats = [
  { prefix: '', target: 90, suffix: '%', label: 'Reduction in case\nacquisition costs', source: 'Nationwide mass tort firm' },
  { prefix: '+', target: 70, suffix: '%', label: 'Increase in\nconversions', source: 'McCune Law Group' },
  { prefix: '+', target: 75, suffix: '%', label: 'Chat-to-client\nconversion rate', source: 'Stern & Cohen' },
  { prefix: '+', target: 25, suffix: '%', label: 'Of new clients\nsourced by Case Compass', source: 'Stern & Cohen' },
]

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1800
        const startTime = performance.now()
        function tick(now: number) {
          const elapsed = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(eased * target)
          setValue(current)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section
      id="results"
      style={{ background: '#060d1f', padding: '96px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>
              Proven Results
            </span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#fff', lineHeight: 1.2 }}>
              The numbers speak<br />for themselves
            </h2>
          </SectionReveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
          {stats.map(({ prefix, target, suffix, label, source }, i) => (
            <SectionReveal key={label} delay={(i as 0 | 1 | 2 | 3)}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px 32px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  <CountUp target={target} prefix={prefix} suffix={suffix} />
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: '8px', whiteSpace: 'pre-line' }}>
                  {label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
                  {source}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
