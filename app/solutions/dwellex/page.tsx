'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { CheckCircle, FileText, Bell, Calendar, FolderSync, Scale, Building2, Users, ChevronDown, Landmark, Monitor, BarChart2 } from 'lucide-react'

import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Dwellex',
      applicationCategory: 'LegalSoftware',
      operatingSystem: 'Web',
      url: 'https://www.casecompass.io/solutions/dwellex',
      description:
        'Dwellex is eviction case management software built for landlord-tenant law firms. It automates intake, tracks full case timelines from filing to lockout, generates court documents, and integrates with Clio, Practice Panther, and Rent Manager.',
      offers: {
        '@type': 'Offer',
        price: '399',
        priceCurrency: 'USD',
        description: '$399/month platform fee plus $8 per case created. No per-seat fees.',
        category: 'Legal Practice Management Software',
      },
      featureList: [
        'Landlord intake portal with e-signature and conditional field logic',
        'Staff intake review and approval workflow',
        'Automated eviction case timeline tracking with step assignment',
        'Dual-column client and attorney task management',
        'Trial Lists — county-grouped AM/PM court schedules with Word export',
        'Auto-generated court documents — summons, complaints, sheriff info sheets, notices',
        'Drag-and-drop form builder with conditional logic',
        'Client portal with case timeline visibility and document upload',
        'Case templates with ordered action steps and due date rules',
        'Clio integration with bidirectional matter sync',
        'Practice Panther and Rent Manager integrations',
        'Court date tracking and marshal coordination',
        'Lockout scheduling and notifications',
        'SMS and email automated reminders',
        'Role-based access control (admin, staff, client)',
        'Analytics dashboard and per-case ledger tracking',
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Landlord-tenant law firms, eviction attorneys, property managers',
      },
      provider: {
        '@type': 'Organization',
        name: 'Case Compass',
        url: 'https://www.casecompass.io',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Dwellex?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex is eviction case management software built specifically for landlord-tenant law firms. It automates the full eviction workflow — from landlord intake to lockout scheduling — including document generation, court date tracking, Clio integration, and automated client notifications.',
          },
        },
        {
          '@type': 'Question',
          name: 'What eviction software works with Clio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex integrates directly with Clio via OAuth 2.0. Every new intake automatically creates a matter in Clio, and documents, case stages, and status updates sync bidirectionally in real time. Practice Panther and Rent Manager integrations are also available.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best landlord-tenant software for law firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex by Case Compass is purpose-built landlord-tenant software for law firms handling high-volume eviction caseloads. It combines intake automation, case timeline tracking, court document generation, and integrations with Clio and Practice Panther — replacing spreadsheets, manual follow-ups, and disconnected tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Dwellex automate eviction case management?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex automates eviction case management through: (1) online landlord intake portals with document upload and e-signature, (2) automatic case creation with step-by-step timeline templates for Non-Payment, For-Cause, and custom case types, (3) auto-generated court documents populated from case data, (4) SMS and email notifications at every stage, and (5) real-time Clio sync for matter creation and document uploads.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Dwellex generate eviction court documents automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dwellex automatically generates eviction court documents including summons, complaints, motions to show cause, orders to show cause, sheriff tenant info sheets, and fair debt letters. Documents are populated from case and intake data — no manual editing required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Dwellex suitable for high-volume eviction practices?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dwellex is designed for law firms handling dozens to hundreds of eviction cases per month. Automation of intake, document generation, case tracking, and court coordination allows firms to scale their eviction practice without adding headcount.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does eviction case management software cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex is priced at $399/month plus $8 per case created with no per-seat fees. Implementation, training, and custom integrations are scoped per project. Volume pricing is available for firms running 100+ cases/month.',
          },
        },
        {
          '@type': 'Question',
          name: 'What states does Dwellex support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex supports eviction workflows across 15+ states. Court document templates, notice types, and case workflows are configured per jurisdiction during implementation.',
          },
        },
      ],
    },
  ],
}

const features = [
  { 
    icon: FileText, 
    title: 'Landlord Intake Portal', 
    desc: 'Branded public intake forms with conditional logic, document upload, and e-signature. Staff review and approval workflow before any case is created.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  { 
    icon: CheckCircle, 
    title: 'Case Timeline Tracker', 
    desc: 'Step-by-step action item tracker with client and attorney task columns. Automated step assignment, due dates, and case notes — all in one view.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
  },
  { 
    icon: Landmark, 
    title: 'Trial Lists & Court Prep', 
    desc: 'County-grouped AM/PM court schedules for all upcoming hearings. Filter by date and county, then download a formatted Word doc with one click.',
    gradient: 'linear-gradient(135deg, #0f172a, #475569)',
  },
  { 
    icon: FileText, 
    title: 'Document Automation', 
    desc: 'One-click generation of summons, notices, complaints, and court filings. Documents are built from case data — no copy-paste, no manual edits.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  { 
    icon: Monitor, 
    title: 'Client Portal', 
    desc: 'Clients see their own case timeline, document status, and can upload requested files directly — no phone calls, no email back-and-forth.',
    gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)',
  },
  { 
    icon: FolderSync, 
    title: 'Clio Integration', 
    desc: 'Intakes auto-create matters in Clio. Stages, documents, and case updates sync bidirectionally — one source of truth across systems.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  { 
    icon: Bell, 
    title: 'Automated Notifications', 
    desc: 'Email + SMS alerts at every stage: court dates, lockout scheduling, adjournments, and case updates. Zero manual follow-ups needed.',
    gradient: 'linear-gradient(135deg, #10b981, #6366f1)',
  },
  { 
    icon: BarChart2, 
    title: 'Staff & Analytics', 
    desc: 'Role-based access for admins, staff, and clients. Analytics dashboard with case volume and activity metrics. Per-case ledger with installment payment tracking.',
    gradient: 'linear-gradient(135deg, #f59e0b, #6366f1)',
  },
  { 
    icon: Calendar, 
    title: 'Marshal & Court Coordination', 
    desc: 'Built-in court date tracking, marshal assignment, and lockout scheduling. Manage the full eviction timeline from filing to possession.',
    gradient: 'linear-gradient(135deg, #475569, #0f172a)',
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

const faqs = [
  {
    q: 'What is Dwellex?',
    a: 'Dwellex is eviction case management software built specifically for landlord-tenant law firms. It automates the full eviction workflow — from landlord intake to lockout scheduling — including document generation, court date tracking, Clio integration, and automated client notifications.',
  },
  {
    q: 'What eviction software integrates with Clio?',
    a: 'Dwellex integrates directly with Clio via OAuth 2.0. Every new intake automatically creates a matter in Clio, and documents, case stages, and status updates sync bidirectionally in real time. Practice Panther and Rent Manager integrations are also available.',
  },
  {
    q: 'What is the best landlord-tenant software for law firms?',
    a: 'Dwellex is purpose-built landlord-tenant software for firms handling high-volume eviction caseloads. It combines intake automation, case timeline tracking, court document generation, and Clio/Practice Panther integrations — replacing spreadsheets, manual follow-ups, and disconnected tools.',
  },
  {
    q: 'Can Dwellex automatically generate eviction court documents?',
    a: 'Yes. Dwellex auto-generates summons, complaints, motions to show cause, orders to show cause, sheriff tenant info sheets, and fair debt letters. Documents are populated directly from case and intake data — no manual editing required.',
  },
  {
    q: 'How does Dwellex automate eviction case management?',
    a: 'Dwellex automates eviction cases through: (1) online landlord intake portals with document upload and e-signature, (2) automatic case creation with step-by-step timeline templates for Non-Payment, For-Cause, and custom case types, (3) auto-generated court documents, (4) SMS and email notifications at every stage, and (5) real-time Clio sync for matter creation and document uploads.',
  },
  {
    q: 'Is Dwellex suitable for high-volume eviction practices?',
    a: 'Yes. Dwellex is designed for firms handling dozens to hundreds of eviction cases per month. Automation of intake, document generation, case tracking, and court coordination lets practices scale without adding headcount.',
  },
  {
    q: 'What states does Dwellex support?',
    a: 'Dwellex supports eviction workflows across 15+ states with jurisdiction-configurable court document templates and notice type settings. Case templates, notice periods, and court document formats are customized to your jurisdiction during implementation.',
  },
  {
    q: 'Does Dwellex work for both residential and commercial evictions?',
    a: 'Yes. Dwellex supports both residential and commercial landlord-tenant cases. Case templates, intake forms, and document sets can be configured separately for each case type.',
  },
  {
    q: 'Can multiple staff members work on cases simultaneously?',
    a: 'Yes. Dwellex is a multi-user platform with no per-seat fees. Your entire team — attorneys, paralegals, intake staff — can work on cases simultaneously. Role-based task assignment separates attorney tasks from client tasks in the case timeline view.',
  },
  {
    q: 'How much does Dwellex cost?',
    a: 'Dwellex is priced at $399/month plus $8 per case created — no per-seat fees. Implementation and training are scoped and priced per project depending on your firm\'s existing systems, caseload, and jurisdiction setup. Volume pricing is available for firms running 100+ cases/month.',
  },
]

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ background: '#fff', padding: '100px 40px', borderTop: '1px solid #f1f5f9' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
              textTransform: 'uppercase' as const,
              color: '#6366f1',
              marginBottom: '20px',
            }}>
              FAQ
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
              Common questions about Dwellex
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7 }}>
              Everything landlord-tenant law firms need to know about eviction case management software.
            </p>
          </div>
        </SectionReveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map(({ q, a }, i) => (
            <SectionReveal key={i}>
              <div style={{ borderBottom: '1px solid #f1f5f9' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '24px',
                    textAlign: 'left' as const,
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                    {q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    color: '#6366f1',
                    transition: 'transform 0.25s ease',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'flex',
                  }}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: '24px' }}>
                    <p style={{ fontSize: '0.97rem', color: '#475569', lineHeight: 1.85, margin: 0 }}>
                      {a}
                    </p>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        {/* Stats Bar */}
        <section style={{ background: '#fff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '0 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { value: '500+', label: 'Cases managed monthly' },
              { value: '2.4 hrs', label: 'Saved per case' },
              { value: '98%', label: 'Intake completion rate' },
              { value: '6 steps', label: 'Intake to lockout, automated' },
            ].map(({ value, label }, i) => (
              <div key={label} style={{
                padding: '36px 24px',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#6366f1', marginBottom: '6px', letterSpacing: '-0.02em' }}>{value}</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
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
            image: '/images/dwellex-case-timeline.png',
            alt: 'Dwellex case timeline tracker showing step-by-step progress',
            eyebrow: 'Case Timeline',
            title: 'Every action item, tracked automatically',
            body: 'A dual-column view separates client tasks from attorney tasks — so nothing falls through the cracks. Cases progress stage by stage, with automated notifications at every step.',
            accent: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            bg: '#fafbff',
            glow: 'rgba(99,102,241,0.08)',
          },
          {
            image: '/images/dwellex-form-builder.png',
            alt: 'Dwellex intake form builder with drag-and-drop fields',
            eyebrow: 'Form Builder',
            title: 'Build intake forms without writing a line of code',
            body: 'Drag-and-drop fields, pre-built section blocks, and a live preview — create custom intake forms for every case type. Publish with one click and share a link directly with clients.',
            accent: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            bg: '#f8fafc',
            glow: 'rgba(14,165,233,0.07)',
          },
          {
            image: '/images/dwellex-clio-integration.png',
            alt: 'Dwellex Clio integration showing connected status and sync options',
            eyebrow: 'Clio Integration',
            title: 'Real-time sync with zero manual entry',
            body: 'Connect your Clio account via OAuth and let Dwellex handle the rest. Full sync, document uploads, and per-intake sync — with live status, auto-sync toggle, and last-run timestamps.',
            accent: 'linear-gradient(135deg, #10b981, #0ea5e9)',
            bg: '#f8fffb',
            glow: 'rgba(16,185,129,0.07)',
          },
          {
            image: '/images/dwellex-trial-lists.png',
            alt: 'Dwellex Trial Lists — county-grouped AM/PM court schedules with docket numbers and case financials',
            eyebrow: 'Court Preparation',
            title: 'Every hearing. Every county. Ready before court.',
            body: 'Trial Lists group all upcoming cases by county and AM/PM session — docket number, case name, balance, base rent, and late fees all in one view. Filter by date and county, then download a formatted Word doc for court in one click.',
            accent: 'linear-gradient(135deg, #0f172a, #6366f1)',
            bg: '#f8fafc',
            glow: 'rgba(99,102,241,0.07)',
          },
          {
            image: '/images/dwellex-cases-list.png',
            alt: 'Dwellex cases list showing all open eviction cases with court dates',
            eyebrow: 'Case Management',
            title: 'Every case, at a glance',
            body: 'A clean list view of all open and closed cases — searchable, sortable by court date, and filterable by status. See property, court date, and labels in one place without opening a single file.',
            accent: 'linear-gradient(135deg, #f59e0b, #6366f1)',
            bg: '#fafbff',
            glow: 'rgba(99,102,241,0.08)',
          },
          {
            image: '/images/dwellex-case-templates.png',
            alt: 'Dwellex case templates showing workflow step templates and generated documents',
            eyebrow: 'Case Templates',
            title: 'Standardize your workflows once, run them every time',
            body: 'Define multi-step case workflows for Non-Payment, For-Cause, and custom case types. Attach auto-generated document templates — summons, motions, sheriff sheets — that populate from case data automatically.',
            accent: 'linear-gradient(135deg, #8b5cf6, #0ea5e9)',
            bg: '#f8fafc',
            glow: 'rgba(139,92,246,0.07)',
          },
          {
            image: '/images/dwellex-form-blocks.png',
            alt: 'Dwellex form blocks showing pre-built intake sections like tenant info and ledger table',
            eyebrow: 'Smart Form Blocks',
            title: 'Pre-built sections for complex intake data',
            body: 'Toggle on blocks for tenant information, ledger tables, notice type checkboxes, and file uploads — each fully configurable. No custom coding needed to collect multi-tenant leases, month-by-month charge breakdowns, or signed documents.',
            accent: 'linear-gradient(135deg, #10b981, #8b5cf6)',
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
                <div className="split-row" style={{
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

        {/* Mid-page demo CTA */}
        <section style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', padding: '56px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '14px' }}>
              See it live
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', lineHeight: 1.25, marginBottom: '28px', margin: '0 auto 28px' }}>
              Ready to see how Dwellex handles your eviction caseload?
            </h2>
            <DemoButton style={{ padding: '15px 40px', fontSize: '1rem', background: '#fff', color: '#4f46e5' }}>
              Request a Demo →
            </DemoButton>
          </div>
        </section>

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

        {/* Comparison Table */}
        <section style={{ background: '#fff', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', padding: '6px 16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6366f1', marginBottom: '20px' }}>
                  How We Compare
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
                  Built for eviction. Not bolted on.
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
                  Eviction Assistant handles the basics. Dwellex takes it further — modern UI, form builder, case playbooks, Clio sync, SMS, and Trial Lists, all in one platform.
                </p>
              </div>
            </SectionReveal>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase' as const, borderBottom: '2px solid #f1f5f9', width: '36%' }}>Feature</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: '#6366f1', borderBottom: '2px solid #6366f1', background: 'rgba(99,102,241,0.04)', borderRadius: '12px 12px 0 0' }}>Dwellex</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#94a3b8', borderBottom: '2px solid #f1f5f9' }}>Eviction Assistant</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#94a3b8', borderBottom: '2px solid #f1f5f9' }}>Clio / Generic LPM</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Purpose-built for landlord-tenant law', true, true, false],
                    ['Online client suit list submission', true, true, false],
                    ['E-signature in intake', true, false, false],
                    ['Conditional field logic in forms', true, false, false],
                    ['Drag-and-drop form builder', true, false, false],
                    ['Step-by-step case timeline + playbooks', true, false, false],
                    ['Auto-generated court documents', true, true, 'Manual'],
                    ['Trial Lists (county-grouped, Word export)', true, false, false],
                    ['Client portal with case timeline visibility', true, 'Partial', false],
                    ['SMS + email automated notifications', true, 'Email only', 'Add-on'],
                    ['Clio bidirectional sync', true, false, 'Native'],
                    ['Practice Panther integration', true, false, false],
                    ['Rent Manager integration', true, true, false],
                    ['Role-based access control', true, true, 'Partial'],
                    ['Modern browser-based UI (no Windows app required)', true, 'Partial', true],
                    ['Per-case pricing (no per-seat lock-in)', true, false, false],
                  ].map(([feat, dwellex, ea, generic], i) => {
                    const cell = (val: boolean | string) => {
                      if (val === true) return <span style={{ color: '#10b981', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                      if (val === false) return <span style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>—</span>
                      return <span style={{ color: '#f59e0b', fontSize: '0.82rem', fontWeight: 600 }}>{val}</span>
                    }
                    return (
                      <tr key={String(feat)} style={{ background: i % 2 === 0 ? '#fafbff' : '#fff', borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '14px 20px', color: '#334155', fontWeight: 500 }}>{feat as string}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'center', background: i % 2 === 0 ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.02)' }}>{cell(dwellex as boolean | string)}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'center' }}>{cell(ea as boolean | string)}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'center' }}>{cell(generic as boolean | string)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', padding: '6px 16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6366f1', marginBottom: '20px' }}>
                  Pricing
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
                  Simple, transparent pricing
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                  One plan. No per-seat fees. You only pay more as you grow.
                </p>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
              {/* Main pricing card */}
              <div style={{ background: '#fff', border: '2px solid #6366f1', borderRadius: '24px', padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6366f1', marginBottom: '20px' }}>Dwellex Platform</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em' }}>$399</span>
                  <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#6366f1' }}>+ $8</span>
                  <span style={{ fontSize: '0.9rem', color: '#64748b' }}>per case created</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '14px', marginBottom: '36px' }}>
                  {[
                    'Unlimited users — no per-seat fees',
                    'Full intake portal + form builder with conditional logic',
                    'Automated case timelines & templates',
                    'Trial Lists with Word doc export',
                    'Court document generation',
                    'Client portal with document upload',
                    'Clio, Practice Panther & Rent Manager sync',
                    'SMS + email notifications',
                    'Marshal & lockout coordination',
                    'Role-based access (admin, staff, client)',
                    'Analytics dashboard + per-case ledger',
                    'Ongoing support included',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: '#10b981', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '0.92rem', color: '#334155' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <DemoButton style={{ width: '100%', padding: '15px', fontSize: '0.95rem', textAlign: 'center' as const }}>
                  Request a Demo →
                </DemoButton>
              </div>

              {/* Add-ons / note card */}
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '32px 36px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Implementation & Training</div>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                    Scoped and priced per project. We handle data migration, workflow configuration, jurisdiction setup, and staff onboarding. Timeline and cost depend on your firm's existing systems and caseload.
                  </p>
                </div>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '32px 36px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Custom Integrations</div>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                    Need a connection to your property management system, court filing portal, or other tooling? Custom integrations are available and scoped per engagement.
                  </p>
                </div>
                <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '20px', padding: '28px 32px' }}>
                  <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.75 }}>
                    <strong style={{ color: '#4f46e5' }}>High-volume firms:</strong> Running 100+ cases/month? Talk to us about volume pricing — we have options for larger practices that cap your per-case cost.
                  </div>
                </div>
              </div>
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

        {/* FAQ — AIO + People Also Ask */}
        <FaqSection />

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

        {/* Related Solutions */}
        <section style={{ background: '#fff', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', textAlign: 'center', marginBottom: '32px' }}>
                Related Solutions
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { href: '/solutions/intake', label: 'Intelligent Intake', desc: 'Chatbots, webforms, and live transfer — the full intake flow for plaintiff firms.' },
                { href: '/solutions/waypoint', label: 'Waypoint AI Scoring', desc: 'Score every intake submission automatically before your team opens the file.' },
                { href: '/solutions/workers-comp', label: "Workers' Comp", desc: 'Intake automation purpose-built for workers\' compensation firms.' },
              ].map(({ href, label, desc }) => (
                <SectionReveal key={href}>
                  <Link href={href} style={{ display: 'block', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#4f46e5', marginBottom: '8px' }}>{label} →</div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
