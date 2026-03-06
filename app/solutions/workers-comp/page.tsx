'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import {
  FileText, Bell, Clock, BarChart3, Users, Shield,
  CheckCircle, ArrowRight, TrendingUp, PhoneCall, Zap, Scale
} from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'

const stats = [
  { value: '3×', label: 'More cases handled per attorney' },
  { value: '60%', label: 'Reduction in intake drop-off' },
  { value: '48h', label: 'Average time to signed retainer' },
  { value: '90%', label: 'Faster document generation' },
]

const painPoints = [
  {
    icon: PhoneCall,
    title: 'Intake Chaos',
    desc: 'Missed calls, scattered notes, and no way to know which injured workers are actually qualified. Your best cases slip through the cracks.',
  },
  {
    icon: Clock,
    title: 'Slow Follow-Up',
    desc: 'Injured workers contact multiple firms. Every hour you don\'t respond, your odds of signing them drop. Manual processes can\'t keep up.',
  },
  {
    icon: FileText,
    title: 'Document Overload',
    desc: 'Medical records, incident reports, employer forms — manually chasing paperwork for every case buries your staff before discovery even starts.',
  },
  {
    icon: BarChart3,
    title: 'No Pipeline Visibility',
    desc: 'You don\'t know which cases are stalled, which referral sources are converting, or where your team\'s bottlenecks are. Managing blindly.',
  },
]

const features = [
  {
    icon: Zap,
    title: 'Intelligent Intake Qualification',
    desc: 'Our AI-powered intake captures injury details, employment status, and incident timing — then automatically scores each lead against your firm\'s acceptance criteria. Know instantly if it\'s a case worth taking.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    tag: 'Powered by Waypoint AI',
  },
  {
    icon: Bell,
    title: 'Instant Speed-to-Lead',
    desc: 'The moment a potential client submits, automated SMS and email sequences launch. Live transfer routing connects your attorneys to hot leads in real time — before they call the next firm on their list.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    tag: 'Automated Follow-Up',
  },
  {
    icon: FileText,
    title: 'Automated Document Generation',
    desc: 'Retainer agreements, medical record requests, and employer verification letters auto-generate from intake data. E-signature built in — cases get signed faster, with less staff time per file.',
    gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)',
    tag: 'E-Signature Ready',
  },
  {
    icon: Users,
    title: 'Client Timeline & Portal',
    desc: 'Injured workers check their own case status 24/7. Automated notifications keep them informed at every stage — reducing inbound "where\'s my case?" calls by over 70%.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    tag: 'Client Self-Service',
  },
  {
    icon: TrendingUp,
    title: 'Referral Source Analytics',
    desc: 'Track exactly which doctors, clinics, and referral partners are sending your best cases. Attribution down to the signed retainer — so you know where to invest your marketing spend.',
    gradient: 'linear-gradient(135deg, #6366f1, #0ea5e9)',
    tag: 'Marketing ROI',
  },
  {
    icon: Shield,
    title: 'Compliance-First Architecture',
    desc: 'Built with workers\' comp regulatory requirements in mind. Audit trails, secure document handling, and SOC 2-aligned practices — your client data is protected at every step.',
    gradient: 'linear-gradient(135deg, #0f172a, #334155)',
    tag: 'Enterprise Security',
  },
]

const workflow = [
  { step: '01', title: 'Injured Worker Reaches Out', desc: 'Web form, phone call, or referral — every channel captured in one place' },
  { step: '02', title: 'AI Qualifies the Lead', desc: 'Waypoint scores injury type, date, employer, and coverage in seconds' },
  { step: '03', title: 'Instant Outreach Fires', desc: 'SMS + email sequences launch automatically; live transfer for hot leads' },
  { step: '04', title: 'Retainer Signed', desc: 'Auto-generated agreement sent for e-signature — no staff involvement needed' },
  { step: '05', title: 'Case File Built', desc: 'Medical record requests, employer forms, and timeline initialized automatically' },
  { step: '06', title: 'Client Kept in the Loop', desc: 'Automated updates at every milestone; portal access for status checks' },
]

const testimonialStats = [
  { metric: '127', unit: 'cases', context: 'signed in first 90 days after switching' },
  { metric: '2.4×', unit: 'ROI', context: 'on marketing spend with attribution tracking' },
  { metric: '< 5 min', unit: 'response', context: 'average speed-to-lead after intake submission' },
]

export default function WorkersCompPage() {
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const line = lineRef.current
    if (!line) return

    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.style.height = 'calc(100% - 80px)'
          lineObserver.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    lineObserver.observe(line.parentElement!)

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            stepObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )
    stepsRef.current.forEach((el) => el && stepObserver.observe(el))

    return () => {
      lineObserver.disconnect()
      stepObserver.disconnect()
    }
  }, [])

  return (
    <>
      <GalaxyCanvas />
      <AnnouncementBanner />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>

        {/* Hero */}
        <section style={{ background: 'transparent', padding: '110px 40px 100px', textAlign: 'center', position: 'relative' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.35)',
              borderRadius: '100px',
              padding: '6px 20px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(251,191,36,0.9)',
              marginBottom: '28px',
            }}>
              Workers&apos; Compensation Law Firms
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', lineHeight: 1.1, marginBottom: '28px' }}>
              <span style={{
                background: 'linear-gradient(135deg, #fff 30%, rgba(251,191,36,0.85))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Sign More Cases.<br />Work Fewer Hours.
              </span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '660px', margin: '0 auto 20px' }}>
              Case Compass automates intake qualification, speed-to-lead outreach, and document generation for workers&apos; comp firms — so your attorneys focus on winning cases, not chasing paperwork.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.35)', marginBottom: '44px' }}>
              Trusted by workers&apos; compensation practices across the country.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <DemoButton style={{ padding: '16px 40px', fontSize: '1rem' }}>
                See It in Action →
              </DemoButton>
            </div>
          </div>

          {/* Floating stats bar */}
          <div style={{ maxWidth: '900px', margin: '72px auto 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ background: 'rgba(6,13,31,0.7)', backdropFilter: 'blur(12px)', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #fff, rgba(251,191,36,0.9))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pain points */}
        <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a1200 50%, #0f172a 100%)', padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
          {/* Ambient glow */}
          <div style={{ position: 'absolute', top: '30%', left: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.3)',
                  borderRadius: '100px',
                  padding: '6px 20px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(251,191,36,0.9)',
                  marginBottom: '24px',
                }}>
                  Sound Familiar?
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #fff 30%, rgba(251,191,36,0.85))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    The Problems Slowing Your Firm Down
                  </span>
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
                  Workers&apos; comp firms deal with high volume, time-sensitive intake, and complex documentation. Here&apos;s what we fix.
                </p>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {painPoints.map(({ icon: Icon, title, desc }, i) => (
                <SectionReveal key={title}>
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    padding: '40px 40px',
                    height: '100%',
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'flex-start',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(245,158,11,0.07)'
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.25)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    {/* Number watermark */}
                    <div style={{
                      position: 'absolute', top: '20px', right: '24px',
                      fontFamily: 'var(--font-display)', fontWeight: 900,
                      fontSize: '5rem', lineHeight: 1,
                      color: 'rgba(255,255,255,0.03)',
                      userSelect: 'none',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{
                      width: '52px', height: '52px', flexShrink: 0, borderRadius: '14px',
                      background: 'rgba(245,158,11,0.15)',
                      border: '1px solid rgba(245,158,11,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={24} color="#fbbf24" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.3 }}>
                        {title}
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, margin: 0 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works — workflow */}
        <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
              <SectionReveal>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6366f1',
                  marginBottom: '24px',
                }}>
                  The Workflow
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', lineHeight: 1.2, marginBottom: '20px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    From First Contact to Signed Retainer
                  </span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8 }}>
                  Fully automated from the moment an injured worker reaches out — no manual touchpoints until your attorney is ready to work the case.
                </p>
              </SectionReveal>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '40px', left: '50%', width: '2px', height: 'calc(100% - 80px)', background: '#e2e8f0', transform: 'translateX(-50%)', zIndex: 0 }}>
                <div ref={lineRef} style={{ width: '100%', height: '0%', background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #0ea5e9)', transition: 'height 1.8s cubic-bezier(0.16,1,0.3,1)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 1 }}>
                {workflow.map(({ step, title, desc }, index) => (
                  <div
                    key={step}
                    ref={(el) => { stepsRef.current[index] = el }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '32px',
                      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                      opacity: 0, transform: 'translateY(24px)',
                      transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
                    }}
                  >
                    <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                      <div style={{
                        background: '#fff', borderRadius: '20px', padding: '32px 36px',
                        border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        maxWidth: '460px',
                        marginLeft: index % 2 === 0 ? 'auto' : '0',
                        marginRight: index % 2 === 0 ? '0' : 'auto',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.1)'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                          {title}
                        </h3>
                        <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                    <div style={{
                      width: '72px', height: '72px', flexShrink: 0, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff',
                      fontSize: '1.1rem', letterSpacing: '0.02em',
                      boxShadow: '0 8px 24px rgba(99,102,241,0.4), 0 0 0 5px #f8fafc, 0 0 0 6px rgba(99,102,241,0.15)',
                      position: 'relative', zIndex: 2,
                    }}>
                      {step}
                    </div>
                    <div style={{ flex: 1 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6366f1',
                  marginBottom: '20px',
                }}>
                  Platform Features
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Built for High-Volume Workers&apos; Comp
                  </span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                  Every feature purpose-built for the way workers&apos; comp firms actually work.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
              {features.map(({ icon: Icon, title, desc, gradient, tag }) => (
                <SectionReveal key={title}>
                  <div style={{
                    background: '#fff', padding: '36px', border: '1px solid #e2e8f0',
                    borderRadius: '20px', height: '100%', boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)'
                    e.currentTarget.style.borderColor = '#e2e8f0'
                  }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: gradient }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div style={{
                        width: '52px', height: '52px', borderRadius: '14px',
                        background: 'linear-gradient(135deg, #ede9fe, #dbeafe)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={24} color="#4338ca" strokeWidth={2} />
                      </div>
                      <span style={{
                        fontSize: '0.68rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        color: '#94a3b8', background: '#f8fafc',
                        border: '1px solid #e2e8f0', borderRadius: '6px',
                        padding: '4px 10px', whiteSpace: 'nowrap',
                      }}>
                        {tag}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.3 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.93rem', color: '#64748b', lineHeight: 1.75, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Referrals */}
        <section style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px', padding: '6px 16px',
                  fontSize: '0.75rem', fontFamily: 'var(--font-display)',
                  fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#6366f1', marginBottom: '20px',
                }}>
                  Referral Network
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    Turn Referrals Into a Growth Engine
                  </span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
                  Workers&apos; comp firms run on referrals — from doctors, clinics, and other attorneys. Case Compass gives you full visibility into who&apos;s sending you cases, what they&apos;re worth, and how to reward them.
                </p>
              </div>
            </SectionReveal>

            {/* Referrer Portal */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', marginBottom: '96px' }}>
              <SectionReveal>
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '16px' }}>
                    Referrer Portal
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '20px' }}>
                    A Portal Your Referral Partners Will Actually Use
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '28px' }}>
                    Give doctors, clinics, and co-counsel their own branded portal to submit referrals, track case status, and see their outcomes — all without calling your office. Better experience means more referrals.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {['Branded referral submission form', 'Real-time case status visibility', 'Automated status update emails', 'Mobile-friendly for referring physicians'].map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#475569' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <CheckCircle size={12} color="#fff" strokeWidth={2.5} />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
                  <Image src="/images/referrer-portal.png" alt="Referrer Portal" width={600} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </SectionReveal>
            </div>

            {/* Reporting + Fees side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <SectionReveal>
                <div style={{
                  background: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0',
                  overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(99,102,241,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  <div style={{ padding: '32px 32px 0' }}>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '12px' }}>
                      Referral Reporting
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                      Know Which Partners Drive Your Best Cases
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.75, marginBottom: '24px' }}>
                      Attribution tracking from referral source to signed retainer to case outcome. See volume, conversion rates, and revenue by partner — and double down on what works.
                    </p>
                  </div>
                  <Image src="/images/referrals-reporting.png" alt="Referral Reporting" width={600} height={340} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </SectionReveal>

              <SectionReveal>
                <div style={{
                  background: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0',
                  overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(99,102,241,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  <div style={{ padding: '32px 32px 0' }}>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '12px' }}>
                      Fee Tracking
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                      Referral Fees, Managed Without the Spreadsheet
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.75, marginBottom: '24px' }}>
                      Track referral fee agreements, outstanding balances, and payment history by partner. Stay compliant, stay organized, and never miss a fee owed or paid.
                    </p>
                  </div>
                  <Image src="/images/referrals-fees.png" alt="Referral Fees" width={600} height={340} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Results bar */}
        <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #fff 30%, rgba(251,191,36,0.9))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Real Results, Real Firms
                  </span>
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                  Workers&apos; comp firms using Case Compass see measurable impact within the first 90 days.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {testimonialStats.map(({ metric, unit, context }) => (
                <SectionReveal key={metric}>
                  <div style={{
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px', padding: '40px 32px', textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(245,158,11,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '3rem',
                      background: 'linear-gradient(135deg, #fff, rgba(251,191,36,0.9))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      lineHeight: 1, marginBottom: '4px',
                    }}>
                      {metric}
                    </div>
                    <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(251,191,36,0.7)', marginBottom: '12px' }}>
                      {unit}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      {context}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stern & Cohen Case Study */}
        <section style={{ background: '#f8fafc', padding: '80px 40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>
                  Client Story
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', lineHeight: 1.2 }}>
                  See it in action
                </h2>
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', border: '1px solid #e2e8f0', background: '#fff' }}>
                <Image
                  src="https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/case-study-stern-cohen.png"
                  alt="Stern & Cohen — Chat becomes #1 highest converting intake channel with Case Compass"
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '120px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <SectionReveal>
              <Image
                src="/images/case_compass_dark_logo.png"
                alt="Case Compass"
                width={260}
                height={44}
                style={{ height: '40px', width: 'auto', margin: '0 auto 32px', display: 'block' }}
              />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, marginBottom: '20px', whiteSpace: 'nowrap' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Ready to Transform Your Intake?
                </span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
                See how Case Compass can increase your case volume, reduce response times, and let your attorneys focus on what they do best.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <DemoButton style={{ padding: '16px 44px', fontSize: '1rem' }}>
                  Schedule a Demo →
                </DemoButton>
              </div>
            </SectionReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
