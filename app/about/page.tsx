'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Linkedin } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export default function AboutPage() {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const h1 = h1Ref.current
    if (!h1) return

    // Set initial state
    h1.style.opacity = '0'
    h1.style.transform = 'translateY(20px)'
    
    // Animate in
    setTimeout(() => {
      h1.style.transition = 'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)'
      h1.style.opacity = '1'
      h1.style.transform = 'translateY(0)'
    }, 400)
  }, [])

  return (
    <>
      <GalaxyCanvas />
      <AnnouncementBanner />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Hero */}
        <section
          style={{
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '140px 40px 100px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Enhanced Glow blobs */}
          {[
            { top: '5%', left: '10%', color: '#4f46e5', size: '600px' },
            { top: '20%', right: '5%', color: '#7c3aed', size: '700px' },
            { bottom: '10%', left: '30%', color: '#06b6d4', size: '500px' },
          ].map((g, i) => (
            <div
              key={i}
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: g.size,
                height: g.size,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${g.color}40 0%, transparent 70%)`,
                pointerEvents: 'none',
                filter: 'blur(60px)',
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                ...g,
              }}
            />
          ))}

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, rgba(79,70,229,0.2), rgba(124,58,237,0.15))',
                border: '1px solid rgba(129,140,248,0.3)',
                borderRadius: '99px',
                padding: '8px 20px',
                marginBottom: '40px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#c4b5fd',
                boxShadow: '0 4px 16px rgba(79,70,229,0.2)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #818cf8, #c4b5fd)',
                  boxShadow: '0 0 12px #818cf8',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              About Us
            </div>

            <h1
              ref={h1Ref}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '32px',
                fontWeight: 400,
              }}
            >
              Built by practitioners,<br />for practitioners
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Redefining intake as the engine of growth for modern plaintiff firms
            </p>
          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) scale(1); }
              50% { transform: translateY(-20px) scale(1.05); }
            }
          `}</style>
        </section>

        {/* Mission Statement */}
        <section style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <SectionReveal>
              <div
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  padding: '64px 56px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)',
                  border: '1px solid rgba(79,70,229,0.08)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                    borderRadius: '2px',
                    margin: '0 auto 32px',
                  }}
                />
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                    background: 'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.2,
                    textAlign: 'center',
                    marginBottom: '40px',
                  }}
                >
                  Intake is the engine.<br />We built the platform around it.
                </h2>
                <p
                  style={{
                    fontSize: '1.2rem',
                    color: '#475569',
                    lineHeight: 1.9,
                    textAlign: 'center',
                    marginBottom: '28px',
                    fontWeight: 400,
                  }}
                >
                  Case Compass is a smart-intake platform built exclusively for high-volume plaintiff firms, designed to turn inquiries into qualified leads and signed retainers with speed and precision. Our Smart-Intake Engine adapts instantly to changing case criteria, engages clients across web, SMS, and voice, and delivers a seamless, mobile-first experience that reduces drop-off and wasted spend.
                </p>
                <p
                  style={{
                    fontSize: '1.2rem',
                    color: '#475569',
                    lineHeight: 1.9,
                    textAlign: 'center',
                    fontWeight: 400,
                  }}
                >
                  Unlike generic bots or forms, Case Compass gives firms full control, compliance-ready workflows, and real-time analytics to lower acquisition costs and scale intake without adding headcount. Already trusted across mass torts and class actions, Case Compass is redefining intake as the engine of growth for modern plaintiff firms.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Leadership Team */}
        <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.05))',
                  border: '1px solid rgba(79,70,229,0.2)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#4f46e5',
                  marginBottom: '24px',
                }}
              >
                Meet the Team
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  background: 'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.2,
                }}
              >
                Leadership Team
              </h2>
            </div>

            {/* CEO Card */}
            <SectionReveal>
              <div
                className="leader-card"
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  padding: '56px',
                  marginBottom: '40px',
                  border: '1px solid rgba(79,70,229,0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(79,70,229,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)'
                }}
              >
                {/* Gradient accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
                  }}
                />
                
                <div style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        position: 'relative',
                        padding: '4px',
                        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                        borderRadius: '16px',
                      }}
                    >
                      <Image
                        src="/images/joey-organisciak.png"
                        alt="Joey Organisciak"
                        width={220}
                        height={220}
                        style={{
                          width: '220px',
                          height: '220px',
                          borderRadius: '14px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ flex: '1 1 350px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(124,58,237,0.08))',
                          border: '1px solid rgba(79,70,229,0.2)',
                          borderRadius: '8px',
                          padding: '6px 14px',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#4f46e5',
                        }}
                      >
                        CEO &amp; Co-Founder
                      </div>
                      <Link
                        href="https://www.linkedin.com/in/joseph-o-78664793/"
                        target="_blank"
                        rel="noopener"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0a66c2', fontSize: '0.82rem', fontFamily: 'var(--font-display)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </Link>
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.4rem',
                        color: '#0f172a',
                        marginBottom: '24px',
                        lineHeight: 1.2,
                      }}
                    >
                      Joey Organisciak
                    </h3>
                    <p
                      style={{
                        fontSize: '1.05rem',
                        color: '#475569',
                        lineHeight: 1.8,
                      }}
                    >
                      Joey joined Case Compass as CEO and Co-Founder in 2024, leading the company&apos;s expansion into a full intake and lead conversion platform. He brings deep enterprise experience building and scaling technology platforms across healthcare and legal tech — including senior roles at CHESS Health and Talkiatry, where he led multidisciplinary teams through rapid growth. Joey joined with the conviction that intake is the most underleveraged lever in a plaintiff firm&apos;s business, and that the firms who get it right will define the next decade of plaintiff law.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* CFO Card */}
            <SectionReveal>
              <div
                className="leader-card"
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  padding: '56px',
                  border: '1px solid rgba(124,58,237,0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(124,58,237,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)'
                }}
              >
                {/* Gradient accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #7c3aed, #c026d3)',
                  }}
                />
                
                <div style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        position: 'relative',
                        padding: '4px',
                        background: 'linear-gradient(135deg, #7c3aed, #c026d3)',
                        borderRadius: '16px',
                      }}
                    >
                      <Image
                        src="/images/bill-tilley.png"
                        alt="Bill Tilley"
                        width={220}
                        height={220}
                        style={{
                          width: '220px',
                          height: '220px',
                          borderRadius: '14px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ flex: '1 1 350px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(192,38,211,0.08))',
                          border: '1px solid rgba(124,58,237,0.2)',
                          borderRadius: '8px',
                          padding: '6px 14px',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#7c3aed',
                        }}
                      >
                        CFO &amp; Co-Founder
                      </div>
                      <Link
                        href="https://www.linkedin.com/in/billtilley/"
                        target="_blank"
                        rel="noopener"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0a66c2', fontSize: '0.82rem', fontFamily: 'var(--font-display)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </Link>
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.4rem',
                        color: '#0f172a',
                        marginBottom: '24px',
                        lineHeight: 1.2,
                      }}
                    >
                      Bill Tilley
                    </h3>
                    <p
                      style={{
                        fontSize: '1.05rem',
                        color: '#475569',
                        lineHeight: 1.8,
                      }}
                    >
                      Bill is the CFO and Co-Founder of Case Compass, bringing over 17 years of litigation finance expertise as President and CEO of Amicus Capital Group. He has structured and deployed capital across hundreds of plaintiff law firms, giving him a rare vantage point on what separates high-performing practices from the rest. Bill also founded PractiPulse™ and Inspire Legal Group Ltd, and brings a practitioner&apos;s understanding of law firm economics, growth, and the operational challenges that Case Compass is built to solve.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* AI Philosophy */}
        <section style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1a1040 100%)', padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: '8px', padding: '6px 16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(165,180,252,0.9)', marginBottom: '24px' }}>
                  Our Approach to AI
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.2, marginBottom: '24px' }}>
                  <span style={{ background: 'linear-gradient(135deg, #fff 30%, #a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    AI is a tool.<br />Your team is the judgment.
                  </span>
                </h2>
                <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '720px', margin: '0 auto' }}>
                  We believe AI in legal intake should be honest about what it can and can&apos;t do — and designed accordingly.
                </p>
              </div>
            </SectionReveal>

            {/* Two column: value vs shortcomings */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
              <SectionReveal>
                <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px', padding: '40px 36px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={18} color="#fff" strokeWidth={2.5} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '0.02em' }}>Where AI genuinely helps</h3>
                  </div>
                  {[
                    { title: 'Speed at scale', body: 'AI handles thousands of simultaneous intake conversations without fatigue, delay, or inconsistency — 24/7, across every channel.' },
                    { title: 'Consistent qualification', body: 'Every lead gets evaluated against the same criteria, every time. No variation based on who took the call or how busy the office was.' },
                    { title: 'Pattern recognition', body: 'Waypoint surfaces signals across intake data that humans would miss at volume — flagging strong cases, weak documentation, and red flags automatically.' },
                    { title: 'Removing low-value work', body: "Routing, scheduling, follow-ups, and status updates don't need a human. AI handles the logistics so your team focuses on decisions that matter." },
                  ].map(({ title, body }) => (
                    <div key={title} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'rgba(165,180,252,0.95)', marginBottom: '6px' }}>{title}</div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{body}</div>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal>
                <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '20px', padding: '40px 36px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', lineHeight: 1 }}>!</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '0.02em' }}>Where AI falls short</h3>
                  </div>
                  {[
                    { title: 'Nuance and context', body: "AI can miss the human context behind an intake — grief, urgency, confusion. It doesn't replace the empathy a skilled intake specialist brings to a sensitive conversation." },
                    { title: 'Novel situations', body: "AI is trained on patterns. Unusual case types, edge-case fact patterns, or jurisdictional nuances can trip up models that haven't seen enough examples." },
                    { title: 'Final case decisions', body: 'Whether to take a case is a legal and business judgment. AI can inform it — with scores, flags, and summaries — but it should never make that call alone.' },
                    { title: 'Client trust', body: 'People pursuing legal help are often in difficult moments. A purely automated experience can feel cold. The right handoff to a human, at the right time, matters.' },
                  ].map(({ title, body }) => (
                    <div key={title} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'rgba(251,191,36,0.9)', marginBottom: '6px' }}>{title}</div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{body}</div>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Human in the loop callout */}
            <SectionReveal>
              <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))', border: '1px solid rgba(129,140,248,0.3)', borderRadius: '20px', padding: '48px 56px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(165,180,252,0.8)', marginBottom: '16px' }}>
                  Our Design Principle
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', lineHeight: 1.3, marginBottom: '20px' }}>
                  Human-in-the-loop is not a fallback.<br />It&apos;s the architecture.
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
                  Every Case Compass workflow is designed so AI handles volume, consistency, and speed — while your team retains full visibility, override authority, and final judgment on every case. Scores are transparent. Criteria are configurable. Nothing is a black box. We built it this way because we believe the firms that win long-term are the ones who use AI to amplify their team, not replace it.
                </p>
              </div>
            </SectionReveal>

          </div>
        </section>

        {/* Vision Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
            padding: '120px 40px',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              right: '-10%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '-10%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(196,181,253,0.15))',
                  border: '1px solid rgba(129,140,248,0.3)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#c4b5fd',
                  marginBottom: '24px',
                }}
              >
                Our Vision
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                  background: 'linear-gradient(135deg, #fff 0%, #c4b5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.2,
                  marginBottom: '28px',
                }}
              >
                  Where We&apos;re Going
              </h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.8,
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                Case Compass is already powering tens of thousands of intakes across mass torts, class actions, and consumer litigation, helping firms grow without adding headcount. Our vision is clear:
              </p>
            </div>

            <div style={{ display: 'grid', gap: '20px', marginBottom: '64px' }}>
              {[
                'Put intake teams in control with no-code, instantly updatable workflows.',
                'Deliver analytics and transparency so firms know exactly where dollars convert to signed cases.',
                'Scale smart-intake into every channel — web, SMS, and voice — with compliance and client trust at the core.',
              ].map((item, i) => (
                <SectionReveal key={i}>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '16px',
                      padding: '32px 36px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))'
                      e.currentTarget.style.borderColor = 'rgba(129,140,248,0.3)'
                      e.currentTarget.style.transform = 'translateX(8px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 16px rgba(79,70,229,0.4)',
                      }}
                    >
                      <Check size={22} color="#fff" strokeWidth={3} />
                    </div>
                    <p
                      style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.7,
                        fontFamily: 'var(--font-display)',
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(124,58,237,0.1))',
                border: '1px solid rgba(129,140,248,0.2)',
                borderRadius: '20px',
                padding: '48px 56px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '1.35rem',
                  color: '#fff',
                  lineHeight: 1.7,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                We&apos;re not just rethinking intake. We&apos;re making it the engine of growth for the next generation of plaintiff firms.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)',
            padding: '120px 40px',
            textAlign: 'center',
          }}
        >
          <SectionReveal>
            <div
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, rgba(79,70,229,0.05), rgba(124,58,237,0.03))',
                border: '1px solid rgba(79,70,229,0.1)',
                borderRadius: '32px',
                padding: '72px 56px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative gradient */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                    background: 'linear-gradient(135deg, #0f172a 0%, #4f46e5 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.2,
                    marginBottom: '24px',
                  }}
                >
                  Ready to transform your intake?
                </h2>
                <p
                  style={{
                    fontSize: '1.15rem',
                    color: '#475569',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                  }}
                >
                  Schedule a demo and see how Case Compass can help your firm scale without adding headcount.
                </p>
                <DemoButton style={{ padding: '18px 48px', fontSize: '1.05rem' }}>
                  Schedule a Demo →
                </DemoButton>
              </div>
            </div>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
