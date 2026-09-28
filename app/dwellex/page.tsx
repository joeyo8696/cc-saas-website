'use client'

import { useEffect, useMemo, useRef, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import Image from 'next/image'
import { Check, Pause, Play, X } from 'lucide-react'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import BrowserFrame from '@/components/ui/BrowserFrame'
import ExpandableBrowserFrame from '@/components/ui/ExpandableBrowserFrame'
import { captureAttribution, readAttribution, trackEvent } from '@/lib/analytics'
import { dwellexFaqs } from './dwellexContent'
import './dwellex.css'

const DWELLEX_SCHEDULER_SRC =
  'https://scheduler.zoom.us/case-compass/dwellex-demo?embed=true'

type Tab = 'notices' | 'action' | 'timeline' | 'courts' | 'assignments' | 'staff'

const matterStages = [
  {
    label: 'Intake',
    actor: 'Landlord portal',
    actorMeta: 'New matter request',
    initials: 'PM',
    message: 'Submitting nonpayment details for Unit 4B — lease, ledger and notice period attached.',
    reply: 'Received. Queued for staff review.',
    status: 'Intake ready for review',
    detail: 'Documents attached · Jurisdiction rules matched',
    panelTitle: 'Staff workspace',
    panelMeta: 'Matter draft · Example',
    panelBody: 'Review tenant details, confirm notice type and create the case when ready.',
    trail: 'Intake → Review → Notices → Court → Lockout',
  },
  {
    label: 'Prepare',
    actor: 'Batch notices',
    actorMeta: 'CSV import complete',
    initials: 'BN',
    message: '14 rows mapped. Three need a service-date check before generating documents.',
    reply: 'Court expiration rules applied.',
    status: 'Notices ready to preview',
    detail: '14 notices · 3 flagged for review',
    panelTitle: 'Client portal',
    panelMeta: 'Property manager view',
    panelBody: 'Status updates and next steps stay visible without a phone call for every milestone.',
    trail: 'Intake → Review → Notices → Court → Lockout',
  },
  {
    label: 'Progress',
    actor: 'Trial Lists',
    actorMeta: 'County session view',
    initials: 'TL',
    message: 'Thursday AM — County court. Six hearings grouped with balances and docket notes.',
    reply: 'Exporting formatted court list.',
    status: 'Hearing day organized',
    detail: 'Client tasks open · Lockout coordination queued',
    panelTitle: 'Matter timeline',
    panelMeta: 'Shared attorney & client view',
    panelBody: 'Hearings, assigned tasks and milestone reminders keep the next step visible.',
    trail: 'Intake → Review → Notices → Court → Lockout',
  },
]

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
}> = {
  notices: {
    title: <>One upload.<br />A batch ready for review.</>,
    body: 'Import a property management CSV, reuse saved column mappings and catch row-level issues before generating notices. State-specific compliance produces legally valid documents, including Pay or Quit notices, tailored to local housing laws and your configured court rules.',
    bullets: [
      'Generate legally valid notices tailored to local housing laws',
      'Pay or Quit and other jurisdiction-ready notice types',
      'Review service dates and court expiration rules before finalizing',
    ],
    img: '/images/dwellex-dashboard.png',
    imgAlt: 'Batch notice review in Dwellex with state-specific eviction notice generation',
  },
  action: {
    title: <>Every open case.<br />The step it is on.</>,
    body: 'Action Items is the firm inbox for eviction work. See what is waiting on the firm, what needs an answer, and what is ready to approve. Tick the ones asking the same question and handle them together.',
    bullets: [
      'Filter by assigned to me, waiting on the firm, or all open cases',
      'Approve, complete, or answer from the same queue',
      'Search by case, address, step, or assignee',
    ],
    img: '/images/dwellex-action-items.png',
    imgAlt: 'Dwellex Action Items queue showing open eviction cases and what each one needs',
  },
  timeline: {
    title: <>The case is the timeline.<br />Branches included.</>,
    body: 'Design the matter once: who owns each step, what the property manager can see, which documents are required, and where the path splits when the facts change. List, diagram, or split view on every file. Nothing else in this market runs eviction this way.',
    bullets: [
      'Branching steps for service problems, revised quit dates, and restarts',
      'Attorney, case staff, and client-visible responsibilities on the same path',
      'Automated reminders for court dates, cure periods, and vacate deadlines',
    ],
    img: '/images/dwellex-timeline-split.png',
    imgAlt: 'Dwellex split case view with step list and visual timeline diagram for a Market Tenant matter',
  },
  courts: {
    title: <>Your courts.<br />Your notice periods.</>,
    body: 'Configure the courts you file in and the notice types those courts expect. Set calendar days or court days, then override by court when a jurisdiction needs a different answer. Expiration dates stop guessing.',
    bullets: [
      'Court days, locations, and counties in one place',
      'Notice periods with per-court overrides',
      'Trial Lists for hearing day, grouped by county and session',
    ],
    img: '/images/dwellex-court-rules.png',
    imgAlt: 'Dwellex courts and notice types configuration with court-day periods and overrides',
  },
  assignments: {
    title: <>Who owns the building.<br />Per timeline.</>,
    body: 'Map responsible staff to organizations and properties, then override by timeline when Kansas non-payment and a market tenant file need different people. Time off and handoffs keep the queue moving when someone is out.',
    bullets: [
      'Defaults that inherit from organization to building',
      'Timeline-specific owners for notice requests and matter types',
      'Schedule time off and reassign work without losing the trail',
    ],
    img: '/images/dwellex-assignments.png',
    imgAlt: 'Dwellex assignments matrix showing responsible staff by building and timeline',
  },
  staff: {
    title: <>Staff home.<br />Built for your firm.</>,
    body: 'Configure what attorneys and paralegals see when they log in: upcoming dates, notice requests, intake approvals, and the header action that starts a new matter. Drag tiles and boxes until the home page matches how your team works.',
    bullets: [
      'Reorder tiles and boxes for the firm home page',
      'Set the header button to submit intake for a client',
      'Preview the layout before you save',
    ],
    img: '/images/dwellex-staff-home.png',
    imgAlt: 'Dwellex firm settings for a customizable staff home page with live preview',
  },
}

function estimateFor(n: number) {
  const enterprise = n >= 1000
  const rate = n <= 50 ? 8 : n <= 150 ? 6.5 : 5
  const tier = enterprise ? 'Enterprise' : n <= 50 ? 'Starter' : n <= 150 ? 'Growth' : 'Scale'
  return {
    enterprise,
    rate,
    tier,
    total: enterprise ? null : 399 + n * rate,
    label: enterprise ? '1,000+' : String(n),
    math: enterprise
      ? 'Custom flat-rate pricing for your practice'
      : `$399 platform + ${n} cases × $${rate.toFixed(2)}`,
  }
}

function MatterFlowDemo({
  stage,
  setStage,
  playing,
  setPlaying,
}: {
  stage: number
  setStage: Dispatch<SetStateAction<number>>
  playing: boolean
  setPlaying: (v: boolean) => void
}) {
  useEffect(() => {
    if (!playing || (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return
    const t = setInterval(() => setStage(s => (s + 1) % matterStages.length), 6500)
    return () => clearInterval(t)
  }, [playing, setStage])

  const s = matterStages[stage]
  return (
    <div className="prod-demo" aria-label="Interactive example Dwellex matter workflow">
      <div className="prod-demo-meta">
        <span><i /> ONE MATTER, CONNECTED</span>
        <span>Illustrative workflow</span>
      </div>
      <div className="prod-demo-stage" key={stage}>
        <div className="prod-thread">
          <span className="prod-avatar">{s.initials}</span>
          <div>{s.actor} <small>{s.actorMeta}</small></div>
        </div>
        <div className="prod-msg incoming">
          {s.message}
          <small>Dwellex · just now</small>
        </div>
        <div className="prod-msg outgoing">
          {s.reply}<Check size={13} />
        </div>
        <div className="prod-sync">
          <span /><small>STATUS SYNCED</small><span />
        </div>
        <div className="prod-status">
          <span className="prod-status-disc" aria-hidden="true">✓</span>
          <div>
            <strong>{s.status}</strong>
            <p>{s.detail}</p>
          </div>
          <span className="prod-tiny">Practice</span>
        </div>
        <div className="prod-panel">
          <div className="prod-thread">
            <span className="prod-avatar square">DX</span>
            <div>{s.panelTitle} <small>{s.panelMeta}</small></div>
          </div>
          <p>{s.panelBody}</p>
          <div className="prod-panel-foot">
            <span className="prod-tag">Up to date</span>
            <span>View matter ↗</span>
          </div>
        </div>
      </div>
      <div className="prod-demo-controls">
        <div className="prod-stage-buttons">
          {matterStages.map((x, i) => (
            <button
              key={x.label}
              type="button"
              className={stage === i ? 'active' : ''}
              onClick={() => { setStage(i); setPlaying(false) }}
              aria-pressed={stage === i}
            >
              <span>0{i + 1}</span>{x.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="prod-icon-button"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? 'Pause animation' : 'Play animation'}
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    </div>
  )
}

export default function DwellexPage() {
  const [tab, setTab] = useState<Tab>('notices')
  const [cases, setCases] = useState(50)
  const [flowStage, setFlowStage] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [schedulerOpen, setSchedulerOpen] = useState(false)
  const [schedulerSource, setSchedulerSource] = useState('dwellex')
  const calcTracked = useRef(false)
  const calcTimer = useRef<number | null>(null)
  const estimate = useMemo(() => estimateFor(cases), [cases])
  const feature = features[tab]
  const activeTrail = matterStages[flowStage].trail

  useEffect(() => {
    captureAttribution()
  }, [])

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== 'https://scheduler.zoom.us') return
      const data = event.data as { type?: string } | null
      if (!data || data.type !== 'bookingForm') return
      const attr = readAttribution()
      trackEvent('dwellex_demo_submit', { source: attr.source || schedulerSource })
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [schedulerSource])

  useEffect(() => {
    if (!schedulerOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSchedulerOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [schedulerOpen])

  const schedulerSrc = useMemo(() => {
    const url = new URL(DWELLEX_SCHEDULER_SRC)
    if (typeof window !== 'undefined') {
      const attr = readAttribution()
      for (const [key, value] of Object.entries(attr)) {
        url.searchParams.set(key, value)
      }
    }
    url.searchParams.set('source', schedulerSource)
    return url.toString()
  }, [schedulerSource])

  const openScheduler = (ctaLocation: 'hero' | 'pricing' | 'pm_section' | 'footer_cta') => {
    const source = ctaLocation === 'pm_section' ? 'pm-section' : ctaLocation
    setSchedulerSource(source)
    setSchedulerOpen(true)
    trackEvent('dwellex_demo_click', { cta_location: ctaLocation })
    if (ctaLocation === 'pm_section') trackEvent('pm_section_cta_click')
  }

  const onCalculatorRelease = (value: number) => {
    if (calcTracked.current) return
    if (calcTimer.current) window.clearTimeout(calcTimer.current)
    calcTimer.current = window.setTimeout(() => {
      if (calcTracked.current) return
      calcTracked.current = true
      trackEvent('pricing_calculator_used', { cases_per_month: value })
    }, 400)
  }

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <div className="dw">
        <main id="main">
          <section className="dw-hero">
            <div className="wrap">
              <div className="dw-lockup">
                <Image src="/images/dwellex.png" alt="Dwellex" width={130} height={57} unoptimized />
                <span>LANDLORD–TENANT CASE MANAGEMENT</span>
              </div>
              <div className="dw-hero-grid">
                <h1>More moving parts.<br /><em>One clear path.</em></h1>
                <div className="dw-intro">
                  <p>Your cases have enough complexity. Bring intake, state-specific notices, court dates, cure periods and client updates into one workspace built for your eviction practice.</p>
                  <button type="button" className="button" onClick={() => openScheduler('hero')}>
                    See Dwellex in action <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workflow">Follow the workflow ↓</a>
                </div>
              </div>

              <div className="dw-product-stage">
                <div className="stage-top">
                  <span>THE WORKSPACE BEHIND EVERY NEXT STEP</span>
                  <span>Dwellex / {matterStages[flowStage].label}</span>
                </div>
                <div className="stage-grid">
                  <div className="stage-copy">
                    <MatterFlowDemo
                      stage={flowStage}
                      setStage={setFlowStage}
                      playing={playing}
                      setPlaying={setPlaying}
                    />
                  </div>
                  <div className="dw-screen">
                    <BrowserFrame url="app.casecompass.io/dwellex">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/dwellex-dashboard.png" width={3456} height={1846} alt="Dwellex batch notice review workspace with intake details and notice generation controls" />
                    </BrowserFrame>
                  </div>
                </div>
                <div className="stage-bottom">
                  <span className="is-live">{activeTrail}</span>
                  <span>Purpose-built for landlord–tenant law</span>
                </div>
              </div>

              <div className="dw-assurances">
                <span>Unlimited users</span>
                <span>Role-based access</span>
                <span>Residential &amp; commercial</span>
                <span>Clio integration</span>
              </div>
            </div>
          </section>

          <section className="dw-workflow wrap" id="workflow">
            <div className="dw-section-head">
              <div>
                <p className="eyebrow">FROM FIRST INTAKE TO FINAL STEP</p>
                <h2>The whole process.<br /><em>Held together.</em></h2>
              </div>
              <p>Give your team a shared workflow and your clients a window into what comes next.</p>
            </div>
            <ol className="dw-steps">
              {matterStages.map((s, i) => (
                <li
                  key={s.label}
                  className={flowStage === i ? 'is-active' : undefined}
                  onClick={() => { setFlowStage(i); setPlaying(false) }}
                  style={{ cursor: 'pointer' }}
                >
                  <span>0{i + 1} / {s.label.toUpperCase()}</span>
                  <h3>
                    {i === 0 && 'Start with the details.'}
                    {i === 1 && 'Turn data into action.'}
                    {i === 2 && 'Keep the next step visible.'}
                  </h3>
                  <p>
                    {i === 0 && 'Landlords submit tenant information and documents through your portal. Staff review each request before creating the case.'}
                    {i === 1 && 'Generate legally valid notices from intake data — including Pay or Quit notices tailored to local housing laws — apply your court rules and assign the work to the right people.'}
                    {i === 2 && 'Track hearings, cure periods, vacate deadlines and lockout coordination, with automated reminders along the way.'}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="dw-pm wrap" id="property-managers">
            <div className="dw-pm-copy">
              <p className="eyebrow">FOR PROPERTY MANAGERS</p>
              <h2>Send the whole batch.<br /><em>Watch every case move.</em></h2>
              <p>Export delinquent tenants from Rent Manager, Yardi, or any property management system as a CSV, and your attorney&apos;s team reviews and generates the notices in Dwellex. Every case, hearing date and vacate deadline shows up in one portal, so you stop chasing status by email.</p>
              <button type="button" className="button" onClick={() => openScheduler('pm_section')}>
                Refer your eviction attorney to Dwellex <span aria-hidden="true">↗</span>
              </button>
            </div>
            <ul className="dw-pm-points">
              <li>Upload a CSV or sync from Rent Manager or Yardi, no retyping ledgers</li>
              <li>See notice, filing, hearing and lockout status for every unit in one portal</li>
              <li>Role-based access for regional managers, site staff and owners</li>
            </ul>
          </section>

          <section className="dw-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">A CLOSER LOOK</p>
                  <h2>Built around the work.<br /><em>Right down to the details.</em></h2>
                </div>
                <p>Real product views.<br />One connected practice.</p>
              </div>
              <div className="dw-tabs" role="tablist" aria-label="Product features">
                {([
                  { id: 'notices' as const, label: '01 / Batch notices' },
                  { id: 'action' as const, label: '02 / Action items' },
                  { id: 'timeline' as const, label: '03 / Case timelines' },
                  { id: 'courts' as const, label: '04 / Courts & notices' },
                  { id: 'assignments' as const, label: '05 / Assignments' },
                  { id: 'staff' as const, label: '06 / Staff home' },
                ]).map((t) => (
                  <button
                    key={t.id}
                    id={`tab-${t.id}`}
                    role="tab"
                    aria-selected={tab === t.id}
                    aria-controls={`view-${t.id}`}
                    tabIndex={tab === t.id ? 0 : -1}
                    onClick={() => setTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <article className="dw-feature" key={tab} id={`view-${tab}`} role="tabpanel" aria-labelledby={`tab-${tab}`}>
                <div className="dw-feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <ul>
                    {feature.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
                <ExpandableBrowserFrame
                  url="app.casecompass.io/dwellex"
                  src={feature.img}
                  alt={feature.imgAlt}
                />
              </article>

              <div className="dw-support-features">
                <div>
                  <h3>State-specific compliance.</h3>
                  <p>Generate legally valid notices, like a Pay or Quit notice, tailored to local housing laws and the court rules your firm configures.</p>
                </div>
                <div>
                  <h3>Court day, ready to go.</h3>
                  <p>Trial Lists group hearings by county and morning or afternoon session, with balances and a Word export for the docket.</p>
                </div>
                <div>
                  <h3>Your systems stay in sync.</h3>
                  <p>Connect Clio matters, tasks and documents. Dwellex also integrates with Practice Panther, Rent Manager and Yardi.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="dw-pricing wrap" id="pricing">
            <div className="dw-price-intro">
              <p className="eyebrow">ROOM FOR YOUR WHOLE TEAM</p>
              <h2>Price by caseload.<br /><em>Not by seat.</em></h2>
              <p>One platform fee. Unlimited users. Per-case rates that decrease as your monthly volume grows.</p>
              <div className="dw-base">
                <strong>$399</strong>
                <span>/ month<br />+ per-case fees</span>
              </div>
              <p className="dw-small">Implementation, training and custom integrations are scoped separately for your practice.</p>
              <button type="button" className="quiet-link" onClick={() => openScheduler('pricing')}>
                Talk through your setup <span>↗</span>
              </button>
            </div>
            <div className="dw-calculator">
              <div className="calc-header">
                <h3>Your monthly estimate</h3>
                <span>USD</span>
              </div>
              <label htmlFor="cases">
                Cases created per month
                <output id="case-count" htmlFor="cases">{estimate.label}</output>
              </label>
              <input
                type="range"
                id="cases"
                min={10}
                max={1000}
                step={10}
                value={cases}
                onChange={(e) => setCases(Number(e.target.value))}
                onPointerUp={(e) => onCalculatorRelease(Number(e.currentTarget.value))}
                onKeyUp={(e) => onCalculatorRelease(Number(e.currentTarget.value))}
              />
              <div className="range-labels">
                <span>10 cases</span>
                <span>1,000+</span>
              </div>
              <div className="estimate" aria-live="polite">
                <span>{estimate.tier}</span>
                <p>
                  <strong>
                    {estimate.enterprise
                      ? "Let's talk"
                      : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(estimate.total!)}
                  </strong>
                  <span>{estimate.enterprise ? '' : ' / month'}</span>
                </p>
                <span>{estimate.math}</span>
              </div>
              <div className="dw-tiers">
                <div><span>Up to 50</span><strong>$8.00 / case</strong></div>
                <div><span>51–150</span><strong>$6.50 / case</strong></div>
                <div><span>151–999</span><strong>$5.00 / case</strong></div>
                <div><span>1,000+</span><strong>Custom flat rate</strong></div>
              </div>
              <button type="button" className="button" onClick={() => openScheduler('pricing')}>
                Find your fit <span>↗</span>
              </button>
            </div>
          </section>

          <section className="dw-faq">
            <div className="wrap dw-faq-grid">
              <div>
                <p className="eyebrow">A FEW THINGS TO KNOW</p>
                <h2>Good questions.<br /><em>Clear answers.</em></h2>
              </div>
              <div>
                {dwellexFaqs.map((item) => (
                  <details
                    key={item.question}
                    onToggle={(e) => {
                      if (e.currentTarget.open) trackEvent('dwellex_faq_open', { question: item.question })
                    }}
                  >
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">YOUR CASELOAD. YOUR WORKFLOW.</p>
              <h2>See what a clearer<br /><em>day could look like.</em></h2>
              <div>
                <p>Walk through Dwellex with your practice in mind.</p>
                <button type="button" className="button" onClick={() => openScheduler('footer_cta')}>
                  Book your Dwellex demo <span>↗</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />

      {schedulerOpen && (
        <div
          className="dw-scheduler-backdrop"
          onClick={() => setSchedulerOpen(false)}
          role="presentation"
        >
          <div
            className="dw-scheduler-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dw-scheduler-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dw-scheduler-header">
              <h2 id="dw-scheduler-title">Book your Dwellex demo</h2>
              <button
                type="button"
                className="dw-scheduler-close"
                onClick={() => setSchedulerOpen(false)}
                aria-label="Close scheduler"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={schedulerSrc}
              title="Schedule a Dwellex demo with Case Compass"
              className="dw-scheduler-frame"
              allow="camera; microphone; fullscreen"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  )
}
