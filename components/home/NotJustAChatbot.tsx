'use client'

import { useEffect, useRef } from 'react'
import { X, Check } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'

const comparisons = [
  {
    them: 'Collects name and phone number',
    us: 'Qualifies the case — injury type, SOL, coverage, liability — before a human touches it',
  },
  {
    them: 'Dumps leads into a spreadsheet or inbox',
    us: 'Scores and ranks every lead against your firm\'s criteria, instantly',
  },
  {
    them: 'No follow-up if the lead doesn\'t convert',
    us: 'Automated SMS + email sequences re-engage leads until they respond or opt out',
  },
  {
    them: 'Static questions, same flow for every case type',
    us: 'Branching logic tailored to PI, workers\' comp, mass tort, and more — built by your team, no code',
  },
  {
    them: 'You find out about a good lead hours later',
    us: 'Live transfer routes hot leads to your intake team in real time — before they call the next firm',
  },
  {
    them: 'No visibility into what happens after submission',
    us: 'Full-funnel analytics from first click to signed retainer — by source, campaign, and case type',
  },
]

export default function NotJustAChatbot() {
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])
  const usColsRef = useRef<(HTMLDivElement | null)[]>([])
  const themColsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateX(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    usColsRef.current.forEach((el) => el && observer.observe(el))
    themColsRef.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        @keyframes icon-pop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .chatbot-row-us { transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1); }
        .chatbot-row-them { transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1); }
        .chatbot-icon-us { animation: icon-pop 0.4s cubic-bezier(0.16,1,0.3,1) both; }
        .chatbot-icon-them { animation: icon-pop 0.4s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
      `}</style>

      <section style={{ background: '#fff', padding: '100px 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(15,23,42,0.07), rgba(15,23,42,0.04))',
                border: '1px solid rgba(15,23,42,0.12)',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#475569',
                marginBottom: '20px',
              }}>
                Why Case Compass
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                Not a chatbot. Not a form.{' '}
                <em style={{ fontStyle: 'italic', color: '#4f46e5' }}>An intake engine.</em>
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
                Most firms bolt on a basic webform or a generic chatbot and call it &ldquo;intake automation.&rdquo; Here&apos;s what that actually gets you — and what Case Compass does instead.
              </p>
            </div>
          </SectionReveal>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.05)' }}>

            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #e2e8f0' }}>
              {/* CC header */}
              <div style={{
                padding: '18px 28px',
                borderRight: '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'linear-gradient(135deg, #f5f3ff, #eff6ff)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Shimmer sweep */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s linear infinite',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: '#6366f1', flexShrink: 0,
                  animation: 'pulse-dot 2s ease-in-out infinite',
                  boxShadow: '0 0 0 3px rgba(99,102,241,0.2)',
                }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: '#4f46e5', letterSpacing: '0.05em', textTransform: 'uppercase', position: 'relative' }}>
                  Case Compass
                </span>
              </div>
              {/* Chatbot header */}
              <div style={{ padding: '18px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#cbd5e1', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Basic chatbot / webform
                </span>
              </div>
            </div>

            {/* Comparison rows */}
            {comparisons.map(({ them, us }, i) => (
              <div
                key={i}
                ref={(el) => { rowsRef.current[i] = el }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: i < comparisons.length - 1 ? '1px solid #f1f5f9' : 'none',
                }}
              >
                {/* CC side */}
                <div
                  ref={(el) => { usColsRef.current[i] = el }}
                  className="chatbot-row-us"
                  style={{
                    padding: '22px 28px',
                    borderRight: '1px solid #f1f5f9',
                    display: 'flex', alignItems: 'flex-start', gap: '14px',
                    background: i % 2 === 0 ? '#fff' : '#fdfcff',
                    opacity: 0,
                    transform: 'translateX(-20px)',
                    transitionDelay: `${i * 0.07}s`,
                  }}
                >
                  <div
                    className="chatbot-icon-us"
                    style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '1px',
                      animationDelay: `${i * 0.07 + 0.3}s`,
                      boxShadow: '0 2px 8px rgba(99,102,241,0.35)',
                    }}
                  >
                    <Check size={12} color="#fff" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: '#0f172a', lineHeight: 1.65, fontWeight: 500 }}>
                    {us}
                  </span>
                </div>

                {/* Chatbot side */}
                <div
                  ref={(el) => { themColsRef.current[i] = el }}
                  className="chatbot-row-them"
                  style={{
                    padding: '22px 28px',
                    display: 'flex', alignItems: 'flex-start', gap: '14px',
                    background: '#fafafa',
                    opacity: 0,
                    transform: 'translateX(20px)',
                    transitionDelay: `${i * 0.07 + 0.05}s`,
                  }}
                >
                  <div
                    className="chatbot-icon-them"
                    style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: '#fee2e2',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '1px',
                      animationDelay: `${i * 0.07 + 0.35}s`,
                    }}
                  >
                    <X size={12} color="#ef4444" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.65 }}>
                    {them}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
