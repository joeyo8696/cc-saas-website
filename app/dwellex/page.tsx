'use client'

import { useEffect, useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import Image from 'next/image'
import { Check, Pause, Play, X } from 'lucide-react'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import './dwellex.css'

const DWELLEX_SCHEDULER_SRC =
  'https://scheduler.zoom.us/case-compass/dwellex-demo?embedStyle=%7B%22buttonColor%22%3A%22%23371a94%22%2C%22fontFamily%22%3A%22Arial%22%7D&embed=true'

type Tab = 'notices' | 'timeline' | 'courts'

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
    body: 'Import a property management CSV, reuse saved column mappings and catch row-level issues before generating notices.',
    bullets: [
      'Review notice types and service dates',
      'Apply configured court expiration rules',
      'Preview documents before finalizing',
    ],
    img: '/images/dwellex-dashboard.png',
    imgAlt: 'Batch notice review in Dwellex',
  },
  timeline: {
    title: <>Every task.<br />Its place in the matter.</>,
    body: 'Separate attorney and client responsibilities in a shared timeline, with a clear view of progress at each stage.',
    bullets: [
      'Workflows tailored to your case types',
      'Assigned action items and due dates',
      'Email and SMS milestone reminders',
    ],
    img: '/images/dwellex-timeline.png',
    imgAlt: 'Dwellex case timeline with client and attorney tasks',
  },
  courts: {
    title: <>A court day.<br />Already organized.</>,
    body: 'Bring upcoming hearings into Trial Lists grouped by county and morning or afternoon session.',
    bullets: [
      'Filter by county and hearing date',
      'See docket details and case balances',
      'Export a formatted Word court list',
    ],
    img: '/images/dwellex-courts.png',
    imgAlt: 'Dwellex Trial Lists grouped by county and court session',
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
  const estimate = useMemo(() => estimateFor(cases), [cases])
  const feature = features[tab]
  const activeTrail = matterStages[flowStage].trail

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

  const openScheduler = () => setSchedulerOpen(true)

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
                  <p>Your cases have enough complexity. Bring intake, notices, court dates and client updates into one workspace built for your eviction practice.</p>
                  <button type="button" className="button" onClick={openScheduler}>
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/dwellex-dashboard.png" width={3456} height={1846} alt="Dwellex batch notice review workspace with intake details and notice generation controls" />
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
                    {i === 1 && 'Generate notices from intake data, apply your court rules and assign the work to the right people.'}
                    {i === 2 && 'Track hearings, client tasks and lockout coordination, with milestone reminders along the way.'}
                  </p>
                </li>
              ))}
            </ol>
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
                  { id: 'timeline' as const, label: '02 / Case timelines' },
                  { id: 'courts' as const, label: '03 / Court preparation' },
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
                <a className="dw-feature-image" href={feature.img} target="_blank" rel="noopener noreferrer" aria-label="Open full-size product screenshot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={feature.img} alt={feature.imgAlt} loading="lazy" />
                  <span>View full-size product screen ↗</span>
                </a>
              </article>

              <div className="dw-support-features">
                <div>
                  <h3>Clients stay connected.</h3>
                  <p>A secure portal for documents, case progress and conversations. Email replies return to the case thread.</p>
                </div>
                <div>
                  <h3>Your systems stay in sync.</h3>
                  <p>Connect Clio matters, tasks and documents. Dwellex also integrates with Practice Panther and Rent Manager.</p>
                </div>
                <div>
                  <h3>Your team sees the bigger picture.</h3>
                  <p>Track active matters, pending intake and rent at risk. Export reports to CSV or Excel.</p>
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
              <button type="button" className="quiet-link" onClick={openScheduler}>
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
              <button type="button" className="button" onClick={openScheduler}>
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
                <details>
                  <summary>Can we use our own workflows and court rules?</summary>
                  <p>Yes. Configure case templates, action items, document templates and court-specific notice rules. Firm administrators can maintain jurisdiction details and expiration settings.</p>
                </details>
                <details>
                  <summary>What can landlords and property managers see?</summary>
                  <p>Clients can submit intake, upload documents and follow their case timeline in a secure portal. Role-based access controls who can view and work on matters.</p>
                </details>
                <details>
                  <summary>Does Dwellex connect to Clio?</summary>
                  <p>Yes. Dwellex supports bidirectional Clio synchronization for case information, tasks and documents, with controls for sync scope and document visibility.</p>
                </details>
                <details>
                  <summary>What does getting started involve?</summary>
                  <p>Implementation is scoped around your existing systems and caseload, including data migration, workflow configuration, jurisdiction setup and team training. A demo is the first step toward a plan for your practice.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">YOUR CASELOAD. YOUR WORKFLOW.</p>
              <h2>See what a clearer<br /><em>day could look like.</em></h2>
              <div>
                <p>Walk through Dwellex with your practice in mind.</p>
                <button type="button" className="button" onClick={openScheduler}>
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
              src={DWELLEX_SCHEDULER_SRC}
              title="Schedule a Dwellex demo with Case Compass"
              className="dw-scheduler-frame"
              allow="camera; microphone; fullscreen"
            />
          </div>
        </div>
      )}
    </>
  )
}
