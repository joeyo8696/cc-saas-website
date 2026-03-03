'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  MessageSquare, PhoneForwarded, LayoutTemplate, Zap, CheckCircle,
  Mail, BarChart3, Users, Clock, ArrowRight, Star, TrendingUp, Shield,
} from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

const workflowSteps = [
  {
    number: '01',
    title: 'Visitor Arrives',
    desc: 'A potential client lands on your website, responds to an ad, or clicks a link. Case Compass engages them immediately — 24/7, no staff required.',
    detail: 'Chatbot, embedded webform, or landing page — deploy whichever channel fits your firm.',
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, #4f46e5, #818cf8)',
  },
  {
    number: '02',
    title: 'Intake Begins',
    desc: 'A conversational bot or custom webform walks them through a personalized intake — asking the right questions for your specific practice area and case type.',
    detail: 'Branching logic means no wasted questions. Every path leads somewhere meaningful.',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    number: '03',
    title: 'Waypoint Scores the Lead',
    desc: 'The moment intake is submitted, Waypoint AI instantly evaluates the case against your firm\'s criteria — statute of limitations, injury severity, liability exposure, and more.',
    detail: 'Your team sees the score before they open the file. Spend time on your best cases.',
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, #0284c7, #38bdf8)',
  },
  {
    number: '04',
    title: 'Instant Action Triggered',
    desc: 'Qualified leads get a live transfer to your intake team while intent is high. Others enter automated SMS and email nurture sequences — staying warm until they\'re ready.',
    detail: 'Speed-to-lead measured in seconds, not hours.',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #059669, #34d399)',
  },
  {
    number: '05',
    title: 'Retainer Signed',
    desc: 'Qualified clients receive their retainer agreement in the same session — pre-filled from intake data. E-signature built in. Close cases while clients are still engaged.',
    detail: 'No DocuSign juggling. No printing. The entire flow lives inside Case Compass.',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706, #f59e0b)',
  },
  {
    number: '06',
    title: 'Case Synced to Your CMS',
    desc: 'The signed case pushes directly into Filevine, Clio, LeadDocket, Litify — or your existing system. Your team starts working the case the same day.',
    detail: 'No double entry. No manual handoffs. Zero gaps between intake and case management.',
    color: '#e879f9',
    gradient: 'linear-gradient(135deg, #a21caf, #e879f9)',
  },
]

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational Intake Bots',
    desc: 'Deploy chatbots that engage visitors around the clock. Personalized conversation flows adjust based on answers — qualifying more deeply without overwhelming prospects. Every session is logged and scored automatically.',
  },
  {
    icon: LayoutTemplate,
    title: 'Custom Webforms',
    desc: 'Build structured intake forms for any case type with full branching logic. Embed directly on your website, paid landing pages, or referral partner portals. Every submission flows directly into Case Compass — no copy-paste required.',
  },
  {
    icon: PhoneForwarded,
    title: 'Live Transfer Routing',
    desc: 'When a lead qualifies above your threshold, route them to your intake team in real time. No callback queue, no drop-off. A warm handoff at the exact moment of peak intent — when they\'re most likely to sign.',
  },
  {
    icon: Zap,
    title: 'Waypoint AI Scoring',
    desc: 'Every lead is automatically evaluated the moment it\'s submitted — scored on your firm\'s exact criteria. Statute windows, liability flags, injury severity, employment status. Your team sees the score first, opens the strongest cases first.',
  },
  {
    icon: CheckCircle,
    title: 'E-Signatures in Flow',
    desc: 'Retainer agreements are pre-filled from intake data and sent for signature in the same session. No DocuSign juggling. No interruption. Clients sign while they\'re still engaged — cutting your average time-to-retainer by days.',
  },
  {
    icon: Mail,
    title: 'Automated Nurture Sequences',
    desc: 'Leads who don\'t convert immediately aren\'t lost. Automated SMS and email sequences re-engage them on a schedule you control. Appointment reminders, follow-up prompts, and re-engagement messages — all on autopilot.',
  },
  {
    icon: Clock,
    title: 'Speed-to-Lead Automation',
    desc: 'The first firm to respond wins. Case Compass triggers outreach in seconds — automated text, email, and call routing the moment a form is submitted. Dramatically outpace firms still relying on manual callbacks.',
  },
  {
    icon: BarChart3,
    title: 'Attribution & Analytics',
    desc: 'Track every intake back to its source — ad campaign, referral partner, SEO keyword, or direct traffic. Full-funnel visibility from first click to signed retainer. Know exactly where your marketing dollars are working.',
  },
  {
    icon: Users,
    title: 'CMS Integration',
    desc: 'Signed cases sync directly into Filevine, Clio, LeadDocket, Litify, and more. No double entry, no manual handoffs. Your team starts working the case the same day it\'s signed — with all intake data pre-populated.',
  },
]

const results = [
  { stat: '+75%', label: 'Chat-to-client conversion rate', source: 'Stern & Cohen' },
  { stat: '+70%', label: 'Increase in conversions', source: 'McCune Law Group' },
  { stat: '90%', label: 'Reduction in acquisition costs', source: 'Nationwide mass tort firm' },
  { stat: '+25%', label: 'New clients sourced by Case Compass', source: 'Stern & Cohen' },
]

const pillars = [
  {
    icon: Shield,
    title: 'Your Criteria, Not Ours',
    desc: 'Waypoint scores every lead against rules your team defines — case type, geography, injury thresholds, statute windows. No generic algorithm. Your firm\'s judgment, automated.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Volume',
    desc: 'Whether you\'re running 50 intakes a month or 5,000, the system scales without adding headcount. Mass tort campaigns, referral networks, paid media — all funnel into one system.',
  },
  {
    icon: Star,
    title: 'Live in Days, Not Months',
    desc: 'We build your intake bot, configure Waypoint for your practice area, and deploy your first flow. Most firms are live within a week. Onboarding is included — no setup fees.',
  },
]

export default function QualificationsPage() {
  const lineRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[]
    const line = lineRef.current
    if (!steps.length || !line) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = steps.indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) {
              setTimeout(() => {
                ;(entry.target as HTMLDivElement).style.opacity = '1'
                ;(entry.target as HTMLDivElement).style.transform = 'translateX(0)'
              }, idx * 120)
            }
          }
        })
      },
      { threshold: 0.15 }
    )

    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.style.height = '100%'
        }
      },
      { threshold: 0.05 }
    )

    steps.forEach((s) => observer.observe(s))
    lineObserver.observe(line.parentElement!)

    return () => { observer.disconnect(); lineObserver.disconnect() }
  }, [])

  return (
    <>
      <AnnouncementBanner />
      <Nav />

      <main>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(160deg, #060d1f 0%, #0d1a35 55%, #111827 100%)',
          padding: '110px 40px 96px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '100px', padding: '6px 20px', marginBottom: '28px',
              fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(165,180,252,0.9)',
            }}>
              Intelligent Intake
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              color: '#fff', lineHeight: 1.12, marginBottom: '28px',
            }}>
              Qualify every lead.{' '}
              <em style={{
                background: 'linear-gradient(135deg, #818cf8, #4f46e5, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Automatically.</em>
            </h1>
            <p style={{
              fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px',
              maxWidth: '640px', margin: '0 auto 20px',
            }}>
              From first website visit to signed retainer — Case Compass automates every step of how plaintiff law firms capture, score, and convert prospects.
            </p>
            <p style={{
              fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '48px',
              maxWidth: '580px', margin: '0 auto 48px',
            }}>
              No more missed leads. No more chasing cold prospects. No more manually triaging every submission. Just a pipeline that works around the clock — even when your team doesn&apos;t.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <DemoButton
                label="Schedule a Demo"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: '#fff', padding: '15px 36px', borderRadius: '10px',
                  fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700,
                  border: 'none', cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(79,70,229,0.4)',
                }}
              />
              <a
                href="#workflow"
                style={{
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.75)', padding: '15px 36px', borderRadius: '10px',
                  fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 600,
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
              >
                See how it works <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{
          background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '40px',
        }}>
          <div style={{
            maxWidth: '1080px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px',
            textAlign: 'center',
          }}>
            {results.map(({ stat, label, source }) => (
              <div key={stat}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 800,
                  color: '#4f46e5',
                }}>
                  {stat}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.5, margin: '6px 0 4px' }}>{label}</div>
                <div style={{ fontSize: '0.73rem', color: '#94a3b8', fontStyle: 'italic' }}>{source}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" style={{ background: '#f8fafc', padding: '100px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)',
                  borderRadius: '100px', padding: '6px 20px', marginBottom: '20px',
                  fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5',
                }}>
                  How It Works
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  color: '#0f172a', lineHeight: 1.2, marginBottom: '16px',
                }}>
                  From first click to{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>signed retainer</span>
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
                  Six automated steps that turn a website visitor into a signed client — with your team only touching the cases that matter most.
                </p>
              </div>
            </SectionReveal>

            {/* Animated timeline */}
            <div style={{ position: 'relative', paddingLeft: '72px' }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', left: '21px', top: '24px', bottom: '24px', width: '2px', background: '#e2e8f0', borderRadius: '2px' }}>
                <div
                  ref={lineRef}
                  style={{
                    width: '100%', height: '0%',
                    background: 'linear-gradient(180deg, #4f46e5, #7c3aed, #0ea5e9, #059669, #d97706, #a21caf)',
                    borderRadius: '2px',
                    transition: 'height 2.4s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              </div>

              {workflowSteps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => { stepRefs.current[i] = el }}
                  style={{
                    display: 'flex', gap: '32px', marginBottom: i < workflowSteps.length - 1 ? '56px' : '0',
                    opacity: 0,
                    transform: 'translateX(-20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                    position: 'relative',
                  }}
                >
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: '-58px', top: '20px',
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: step.gradient,
                    boxShadow: `0 0 16px ${step.color}66`,
                    flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 1,
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', opacity: 0.9 }} />
                  </div>

                  {/* Card */}
                  <div style={{
                    flex: 1,
                    background: '#fff', border: '1px solid #e2e8f0',
                    borderRadius: '16px', padding: '28px 32px',
                    borderLeft: `3px solid ${step.color}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '10px' }}>
                      <span style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 800,
                        letterSpacing: '0.12em', color: step.color, opacity: 0.7,
                      }}>
                        {step.number}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700,
                        color: '#0f172a', margin: 0,
                      }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, marginBottom: '12px' }}>
                      {step.desc}
                    </p>
                    <p style={{
                      fontSize: '0.82rem', color: step.color,
                      fontFamily: 'var(--font-display)', fontWeight: 600,
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      <CheckCircle size={13} /> {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Tour */}
        <section style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '72px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)',
                  borderRadius: '100px', padding: '6px 20px', marginBottom: '20px',
                  fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5',
                }}>
                  Platform Tour
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  color: '#0f172a', lineHeight: 1.2, marginBottom: '16px',
                }}>
                  See it{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>in action</span>
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                  Real screens from the Case Compass platform — built for how plaintiff law firms actually work.
                </p>
              </div>
            </SectionReveal>

            {/* Row 1: Intake Form Builder */}
            <SectionReveal>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
                alignItems: 'center', marginBottom: '96px',
              }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)',
                    borderRadius: '100px', padding: '4px 14px', marginBottom: '16px',
                    fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4f46e5',
                  }}>
                    Intake Form Builder
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    color: '#0f172a', lineHeight: 1.25, marginBottom: '16px',
                  }}>
                    Build any intake form — visually, in minutes
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '20px' }}>
                    No developers needed. Drag and drop question types — contact info, yes/no, multiple choice, file uploads, e-sign disclaimers — and wire them together with branching logic specific to your case type.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {['Contact, date, and address fields built in', 'Branching logic per case type', 'Message & disclaimer nodes for HIPAA / attorney-client', 'File and document upload support'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#334155' }}>
                        <CheckCircle size={15} color="#4f46e5" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  borderRadius: '16px', overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.06), rgba(124,58,237,0.04))',
                    pointerEvents: 'none', zIndex: 1,
                  }} />
                  <Image
                    src="/images/Screenshot 2026-03-02 at 11.41.46 PM.png"
                    alt="Intake Form Builder"
                    width={1200} height={750}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </SectionReveal>

            {/* Row 2: Timeline Builder (reversed) */}
            <SectionReveal>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
                alignItems: 'center', marginBottom: '96px',
              }}>
                <div style={{
                  borderRadius: '16px', overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(99,102,241,0.04))',
                    pointerEvents: 'none', zIndex: 1,
                  }} />
                  <Image
                    src="/images/Screenshot 2026-03-02 at 11.42.38 PM.png"
                    alt="Timeline Builder"
                    width={1200} height={750}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.25)',
                    borderRadius: '100px', padding: '4px 14px', marginBottom: '16px',
                    fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0284c7',
                  }}>
                    Timeline Builder
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    color: '#0f172a', lineHeight: 1.25, marginBottom: '16px',
                  }}>
                    Automate what happens after intake — every time
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '20px' }}>
                    Build visual workflows that trigger automatically when a lead completes intake. Route qualified leads to e-sign, send to case management, fire off document requests — all without staff intervention.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {['Visual drag-and-drop workflow builder', 'E-sign, document, and message ending pages', 'Direct sync to Litify, Filevine, Clio, LeadDocket', 'Conditional routing based on form answers'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#334155' }}>
                        <CheckCircle size={15} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>

            {/* Row 3: Waypoint Criteria */}
            <SectionReveal>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
                alignItems: 'center', marginBottom: '96px',
              }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)',
                    borderRadius: '100px', padding: '4px 14px', marginBottom: '16px',
                    fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7c3aed',
                  }}>
                    Waypoint AI
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    color: '#0f172a', lineHeight: 1.25, marginBottom: '16px',
                  }}>
                    Define exactly what makes a case worth taking
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '20px' }}>
                    Waypoint Criteria are your firm&apos;s SOPs — translated into AI scoring rules. Add criteria for case value, medical evidence, legal pathway, urgency flags, and red flags. Waypoint applies them to every single intake, automatically.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {['Category-based criteria: evidence, case value, eligibility, red flags', 'Applies to all intakes or specific case types', 'Full prompt preview before going live', 'Update criteria anytime — scores recalculate instantly'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#334155' }}>
                        <CheckCircle size={15} color="#7c3aed" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  borderRadius: '16px', overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(79,70,229,0.04))',
                    pointerEvents: 'none', zIndex: 1,
                  }} />
                  <Image
                    src="/images/Screenshot 2026-03-02 at 11.42.11 PM.png"
                    alt="Waypoint Criteria"
                    width={1200} height={750}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </SectionReveal>

            {/* Row 4: AI Lead Scoring / Lead Profile (reversed) */}
            <SectionReveal>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
                alignItems: 'center',
              }}>
                <div style={{
                  borderRadius: '16px', overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(245,158,11,0.05), rgba(79,70,229,0.04))',
                    pointerEvents: 'none', zIndex: 1,
                  }} />
                  <Image
                    src="/images/Screenshot 2026-03-02 at 11.45.16 PM.png"
                    alt="AI Lead Scoring"
                    width={1200} height={750}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                    borderRadius: '100px', padding: '4px 14px', marginBottom: '16px',
                    fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: '#d97706',
                  }}>
                    AI Lead Scoring
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    color: '#0f172a', lineHeight: 1.25, marginBottom: '16px',
                  }}>
                    Every lead scored the moment it comes in
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '20px' }}>
                    The moment intake is submitted, Waypoint evaluates the case across six dimensions — overall score, severity, urgency, case value, completeness, and AI confidence. Your team sees a full breakdown before they open the file.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {['Overall, severity, urgency, and case value scores', 'HIGH-VALUE CASE flag for priority leads', 'Clarification tasks auto-generated for your intake team', 'Full intake transcript alongside the score'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#334155' }}>
                        <CheckCircle size={15} color="#d97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>

          </div>
        </section>

        {/* Features */}
        <section style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)',
                  borderRadius: '100px', padding: '6px 20px', marginBottom: '20px',
                  fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5',
                }}>
                  Platform Features
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  color: '#0f172a', lineHeight: 1.2, marginBottom: '16px',
                }}>
                  Everything in one{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>intake platform</span>
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                  No patchwork of tools. No manual handoffs between systems. One platform that handles the full intake lifecycle.
                </p>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
              {features.map(({ icon: Icon, title, desc }, i) => (
                <SectionReveal key={title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div style={{
                    background: '#fff', border: '1px solid #e2e8f0',
                    borderRadius: '16px', padding: '28px 26px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79,70,229,0.3)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(79,70,229,0.1)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0'
                    e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px', marginBottom: '18px',
                      background: 'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(124,58,237,0.12))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} color="#4f46e5" />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700,
                      color: '#0f172a', marginBottom: '10px',
                    }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Case Compass */}
        <section style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h2 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                  color: '#0f172a', lineHeight: 1.2, marginBottom: '16px',
                }}>
                  Built specifically for{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>plaintiff law firms</span>
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                  Generic intake tools weren&apos;t designed for the complexity of legal qualification. Case Compass was.
                </p>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {pillars.map(({ icon: Icon, title, desc }) => (
                <SectionReveal key={title}>
                  <div style={{
                    background: '#fff', border: '1px solid #e2e8f0',
                    borderRadius: '20px', padding: '36px 28px', textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '16px', margin: '0 auto 20px',
                      background: 'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(124,58,237,0.12))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={24} color="#4f46e5" />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700,
                      color: '#0f172a', marginBottom: '12px',
                    }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.87rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: 'linear-gradient(135deg, #060d1f, #1e1b4b)',
          padding: '100px 40px', textAlign: 'center',
        }}>
          <SectionReveal>
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: '#fff', lineHeight: 1.2, marginBottom: '20px',
              }}>
                Stop leaving qualified<br />leads on the table
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '40px' }}>
                We&apos;ll build your intake bot, configure Waypoint for your practice area, and deploy your first automated flow. Most firms are live within a week. Onboarding is included.
              </p>
              <DemoButton
                label="Schedule a Demo →"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: '#fff', padding: '16px 40px', borderRadius: '10px',
                  fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700,
                  border: 'none', cursor: 'pointer',
                  boxShadow: '0 12px 40px rgba(79,70,229,0.4)',
                }}
              />
            </div>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
