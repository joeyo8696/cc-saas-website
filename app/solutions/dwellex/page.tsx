'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { CheckCircle, FileText, Bell, Calendar, FolderSync, Scale, Building2, Users, Landmark } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'

const features = [
  { 
    icon: FileText, 
    title: 'Landlord Intake Portal', 
    desc: 'Landlords submit cases online, upload lease agreements, rent ledgers, and notices. E-signature support built in — no manual data entry required.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  { 
    icon: CheckCircle, 
    title: 'Case Timeline Tracker', 
    desc: 'Dual-column action item tracker shows client tasks and attorney tasks side-by-side. Cases progress automatically as stages complete.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
  },
  { 
    icon: Bell, 
    title: 'Automated Notifications', 
    desc: 'Email + SMS alerts at every stage: court dates, lockout scheduling, adjournments, and case updates. Zero manual follow-ups needed.',
    gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)',
  },
  { 
    icon: FileText, 
    title: 'Document Automation', 
    desc: 'Auto-generates Sheriff Info Sheets, summons, complaints, and court filings. Templates customized to your jurisdiction and practice.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  { 
    icon: FolderSync, 
    title: 'Clio Integration', 
    desc: 'Intakes auto-create matters in Clio. Stages, documents, and case updates sync bidirectionally — one source of truth across systems.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  { 
    icon: Calendar, 
    title: 'Marshal & Court Coordination', 
    desc: 'Built-in court date tracking, marshal assignment, and lockout scheduling. Manage the full eviction timeline from filing to possession.',
    gradient: 'linear-gradient(135deg, #0f172a, #475569)',
  },
]

const workflow = [
  { step: '01', title: 'Landlord Submits Intake', desc: 'Online portal with document upload and e-signature' },
  { step: '02', title: 'Staff Reviews & Approves', desc: 'Case details verified, conflicts checked, matter created' },
  { step: '03', title: 'Case Created', desc: 'Timeline initialized, action items assigned, notifications sent' },
  { step: '04', title: 'Action Items Tracked', desc: 'Client and attorney tasks tracked in dual-column view' },
  { step: '05', title: 'Court Dates Managed', desc: 'Automated reminders, marshal coordination, document prep' },
  { step: '06', title: 'Lockout Coordinated', desc: 'Scheduling, notifications, and completion tracking' },
]

const integrations = [
  { name: 'Clio', desc: 'Practice management sync', logo: '/images/clio-logo.png' },
  { name: 'Practice Panther', desc: 'Case and document sync', logo: '/images/practice-panther-logo.jpg' },
  { name: 'Rent Manager', desc: 'Property management integration', logo: '/images/rent-manager-logo.png' },
]

const audience = [
  { icon: Scale, label: 'Law Firms', desc: 'Handle high-volume eviction caseloads without adding headcount' },
  { icon: Building2, label: 'Property Managers', desc: 'Coordinate directly with your legal team from a single portal' },
  { icon: Users, label: 'Landlords', desc: 'Submit intake, track status, and receive updates automatically' },
]

export default function DwellexPage() {
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
        <section style={{ background: 'transparent', padding: '100px 40px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Image
              src="/images/dwellex_logo.png"
              alt="Dwellex"
              width={400}
              height={174}
              style={{ height: '120px', width: 'auto', margin: '0 auto 16px', display: 'block' }}
              priority
            />
            <div style={{
              display: 'inline-block',
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.35)',
              borderRadius: '100px',
              padding: '6px 20px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(165,180,252,0.9)',
              marginBottom: '28px',
            }}>
              Landlord-Tenant Case Management
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.15, marginBottom: '24px' }}>
              <span style={{
                background: 'linear-gradient(135deg, #fff 30%, rgba(165,180,252,0.9))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Streamline Your Landlord-Tenant Practice
              </span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 44px' }}>
              Comprehensive case management and communication tools designed specifically for landlord-tenant law and eviction proceedings.
            </p>
            <DemoButton style={{ padding: '16px 40px', fontSize: '1rem' }}>
              Request a Demo →
            </DemoButton>
          </div>
        </section>

        {/* Workflow */}
        <section style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 80px' }}>
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
                  How It Works
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.2, marginBottom: '20px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    The Complete Eviction Pipeline
                  </span>
                </h2>
                <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.8 }}>
                  From intake to lockout, Dwellex manages every stage with automated workflows and zero manual follow-ups.
                </p>
              </SectionReveal>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Animated connecting line */}
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '50%',
                width: '2px',
                height: 'calc(100% - 80px)',
                background: '#f1f5f9',
                transform: 'translateX(-50%)',
                zIndex: 0,
              }}>
                <div
                  ref={lineRef}
                  style={{
                    width: '100%',
                    height: '0%',
                    background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #0ea5e9)',
                    transition: 'height 1.8s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 1 }}>
                {workflow.map(({ step, title, desc }, index) => (
                  <div
                    key={step}
                    ref={(el) => { stepsRef.current[index] = el }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '32px',
                      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                      opacity: 0,
                      transform: `translateY(24px)`,
                      transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
                    }}
                  >
                    {/* Content card */}
                    <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                      <div
                        style={{
                          background: '#fff',
                          borderRadius: '20px',
                          padding: '32px 36px',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                          maxWidth: '460px',
                          marginLeft: index % 2 === 0 ? 'auto' : '0',
                          marginRight: index % 2 === 0 ? '0' : 'auto',
                          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.12)'
                          e.currentTarget.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }}
                      >
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                          {title}
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                          {desc}
                        </p>
                      </div>
                    </div>

                    {/* Center badge */}
                    <div style={{
                      width: '72px',
                      height: '72px',
                      flexShrink: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: '#fff',
                      fontSize: '1.1rem',
                      letterSpacing: '0.02em',
                      boxShadow: '0 8px 24px rgba(99,102,241,0.4), 0 0 0 5px #fff, 0 0 0 6px rgba(99,102,241,0.15)',
                      position: 'relative',
                      zIndex: 2,
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

        {/* Product Screenshots */}
        {[
          {
            image: 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/dwellex-timeline.png',
            alt: 'Dwellex case timeline tracker',
            eyebrow: 'Case Timeline',
            title: 'Every action item, tracked automatically',
            body: 'A dual-column view separates client tasks from attorney tasks — so nothing falls through the cracks. Cases progress stage by stage, with automated notifications at every step.',
            accent: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            bg: '#fafbff',
            glow: 'rgba(99,102,241,0.08)',
          },
          {
            image: 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/dwellex-courts.png',
            alt: 'Dwellex court management',
            eyebrow: 'Court Management',
            title: 'Manage every court across your jurisdiction',
            body: 'Add and organize courts by county, address, and type. Associate properties directly to courts so filings always go to the right venue — no manual lookups.',
            accent: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            bg: '#f8fafc',
            glow: 'rgba(14,165,233,0.07)',
          },
          {
            image: 'https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/dwellex-clio-sync.png',
            alt: 'Dwellex Clio sync logs',
            eyebrow: 'Clio Integration',
            title: 'Real-time sync with zero manual entry',
            body: 'Every intake automatically creates a matter in Clio. Sync logs give you full visibility into every matter creation, update, and status change — with timestamps and duration.',
            accent: 'linear-gradient(135deg, #10b981, #0ea5e9)',
            bg: '#f8fffb',
            glow: 'rgba(16,185,129,0.07)',
          },
        ].map(({ image, alt, eyebrow, title, body, accent, bg, glow }, i) => (
          <section key={title} style={{ background: bg, padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient glow blob */}
            <div style={{
              position: 'absolute',
              top: '50%', left: i % 2 === 0 ? '60%' : '20%',
              transform: 'translate(-50%, -50%)',
              width: '600px', height: '600px',
              background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
              <SectionReveal>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '72px',
                  alignItems: 'center',
                  direction: i % 2 === 1 ? 'rtl' : 'ltr',
                }}>
                  {/* Text */}
                  <div style={{ direction: 'ltr' }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      marginBottom: '20px',
                    }}>
                      <div style={{ width: '28px', height: '3px', borderRadius: '2px', background: accent }} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366f1' }}>
                        {eyebrow}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.7rem, 2.5vw, 2.3rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.85, margin: 0 }}>
                      {body}
                    </p>
                  </div>

                  {/* Image */}
                  <div style={{ direction: 'ltr', position: 'relative' }}>
                    {/* Decorative gradient border glow behind image */}
                    <div style={{
                      position: 'absolute', inset: '-3px',
                      borderRadius: '20px',
                      background: accent,
                      opacity: 0.25,
                      filter: 'blur(12px)',
                      zIndex: 0,
                    }} />
                    <div style={{
                      position: 'relative', zIndex: 1,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 24px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(255,255,255,0.8)',
                      transform: i % 2 === 0 ? 'perspective(1200px) rotateY(-3deg) rotateX(1deg)' : 'perspective(1200px) rotateY(3deg) rotateX(1deg)',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.01)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = i % 2 === 0 ? 'perspective(1200px) rotateY(-3deg) rotateX(1deg)' : 'perspective(1200px) rotateY(3deg) rotateX(1deg)' }}
                    >
                      <Image
                        src={image}
                        alt={alt}
                        width={1024}
                        height={700}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>
        ))}

        {/* Features Grid */}
        <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Everything You Need for Eviction Cases
                  </span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                  Purpose-built tools for every step of the eviction process — from intake to lockout.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
              {features.map(({ icon: Icon, title, desc, gradient }) => (
                <SectionReveal key={title}>
                  <div
                    style={{
                      background: '#fff',
                      padding: '36px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '20px',
                      height: '100%',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                      position: 'relative',
                      overflow: 'hidden',
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
                    }}
                  >
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                      background: gradient,
                    }} />
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '22px',
                    }}>
                      <Icon size={24} color="#fff" strokeWidth={2} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.3 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.75, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section style={{ background: '#fff', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
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
                marginBottom: '20px',
              }}>
                Integrations
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Seamless Integrations
                </span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 56px' }}>
                Dwellex connects with the tools you already use to manage your practice and properties.
              </p>
            </SectionReveal>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              {integrations.map(({ name, desc, logo }) => (
                <SectionReveal key={name}>
                  <div
                    style={{
                      background: '#fff',
                      padding: '40px 40px 32px',
                      borderRadius: '20px',
                      border: '1.5px solid #e2e8f0',
                      minWidth: '280px',
                      maxWidth: '300px',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(99,102,241,0.1)'
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <Image
                        src={logo}
                        alt={`${name} logo`}
                        width={280}
                        height={100}
                        style={{ objectFit: 'contain', maxHeight: '100px', width: 'auto' }}
                      />
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                      {desc}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)', padding: '120px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
            <SectionReveal>
              <div style={{
                display: 'inline-block',
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.35)',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(165,180,252,0.9)',
                marginBottom: '24px',
              }}>
                Who It's For
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #fff 30%, #a5b4fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Built for Eviction-Focused Practices
                </span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '56px', maxWidth: '640px', margin: '0 auto 56px' }}>
                Whether you handle dozens or hundreds of eviction cases per month, Dwellex gives you the automation and transparency to scale without adding headcount.
              </p>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '56px' }}>
              {audience.map(({ icon: Icon, label, desc }) => (
                <SectionReveal key={label}>
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '32px 28px',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(99,102,241,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '16px',
                    }}>
                      <Icon size={20} color="#fff" />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '8px' }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                      {desc}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <DemoButton style={{ padding: '16px 44px', fontSize: '1rem' }}>
                See Dwellex in Action →
              </DemoButton>
            </SectionReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
