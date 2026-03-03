'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DemoButton from '@/components/DemoButton'

const WORDS = ['Smart Intake.', 'Smarter', 'Firms.']
const HL_WORDS = new Set(['Smarter', 'Firms.'])

export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const h1 = h1Ref.current
    if (!h1) return

    h1.innerHTML = WORDS.map((word) => {
      const isHl = HL_WORDS.has(word)
      return `<span class="hero-word${isHl ? ' hero-hl' : ''}" style="opacity:0;display:inline-block;">${word}</span>`
    }).join(' ')

    const spans = h1.querySelectorAll<HTMLSpanElement>('.hero-word')
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.style.transition = 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)'
        span.style.opacity = '1'
        span.style.transform = 'none'
      }, 900 + i * 140)
    })

    const mockup = mockupRef.current
    if (mockup) {
      setTimeout(() => {
        mockup.style.animation = 'mockup-in 1.2s cubic-bezier(0.16,1,0.3,1) forwards'
      }, 1600)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 40px 80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Glow blobs */}
      {[
        { top: '10%', left: '20%', color: '#4f46e5' },
        { top: '30%', right: '15%', color: '#7c3aed' },
        { bottom: '20%', left: '40%', color: '#06b6d4' },
      ].map((g, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${g.color}33 0%, transparent 70%)`,
            pointerEvents: 'none',
            ...g,
          }}
        />
      ))}

      {/* Eyebrow */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(79,70,229,0.15)',
          border: '1px solid rgba(129,140,248,0.25)',
          borderRadius: '99px',
          padding: '6px 16px',
          marginBottom: '32px',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#a5b4fc',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#4f46e5',
            boxShadow: '0 0 8px #4f46e5',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
        AI-Powered Legal Intake Platform
      </div>

      {/* Headline */}
      <h1
        ref={h1Ref}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '28px',
          whiteSpace: 'nowrap',
        }}
      />

      {/* Sub */}
      <p
        style={{
          maxWidth: '620px',
          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.7,
          marginBottom: '40px',
        }}
      >
        Case Compass automates how plaintiff law firms qualify, score, and convert clients
        — with Intelligent Intake, Waypoint scoring, and referral management built for
        high-volume litigation.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '72px' }}>
        <DemoButton>Schedule a Demo →</DemoButton>
        <Link
          href="/#features"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.8)',
            padding: '14px 32px',
            borderRadius: '8px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            fontWeight: 600,
          }}
        >
          See How It Works
        </Link>
      </div>

      {/* 3-panel mockup trio */}
      <div
        ref={mockupRef}
        style={{
          position: 'relative',
          maxWidth: '1200px',
          width: '100%',
          opacity: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {/* Left panel: Timeline Builder */}
        <MockupPanel
          url="app.casecompass.io/timelines"
          src="/images/timeline-builder.png"
          alt="Case Compass — Timeline Builder"
          style={{
            width: '37%',
            transform: 'rotate(-5deg) translateX(52px) translateY(16px)',
            transformOrigin: 'right bottom',
            opacity: 0.78,
            boxShadow: '-16px 24px 64px rgba(0,0,0,0.55)',
          }}
        />
        {/* Center panel: Inbox */}
        <MockupPanel
          url="app.casecompass.io/inbox"
          src="/images/app-inbox-hires.png"
          alt="Case Compass app — Inbox view"
          style={{
            width: '56%',
            zIndex: 3,
            position: 'relative',
            boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)',
          }}
        />
        {/* Right panel: Waypoint */}
        <MockupPanel
          url="app.casecompass.io/waypoint"
          src="/images/waypoint-criteria-full.png"
          alt="Case Compass — Waypoint Criteria"
          style={{
            width: '37%',
            transform: 'rotate(5deg) translateX(-52px) translateY(16px)',
            transformOrigin: 'left bottom',
            opacity: 0.78,
            boxShadow: '16px 24px 64px rgba(0,0,0,0.55)',
          }}
        />
      </div>

      <style>{`
        .hero-hl {
          background: linear-gradient(90deg, #818cf8, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}

function MockupPanel({
  url,
  src,
  alt,
  style,
}: {
  url: string
  src: string
  alt: string
  style?: React.CSSProperties
}) {
  return (
    <div
      style={{
        background: '#0d1f3c',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '14px',
        overflow: 'hidden',
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {[{ bg: '#ff5f57' }, { bg: '#febc2e' }, { bg: '#28c840' }].map(({ bg }, i) => (
          <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: bg }} />
        ))}
        <div
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '4px',
            padding: '3px 10px',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'monospace',
            textAlign: 'center',
            margin: '0 10px',
          }}
        >
          {url} 🔒
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0 0 12px 12px' }}
        priority
      />
    </div>
  )
}
