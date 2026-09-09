'use client'

import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Pause, Play } from 'lucide-react'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import { useDemoModal } from '@/components/DemoModalProvider'
import BrowserFrame from '@/components/ui/BrowserFrame'
import ExpandableBrowserFrame from '@/components/ui/ExpandableBrowserFrame'
import '../dwellex/dwellex.css'
import './intakeos.css'

type Tab = 'builder' | 'scoring' | 'timelines' | 'transfer' | 'inbox' | 'analytics'

const leadStages = [
  {
    label: 'Capture',
    actor: 'Prospective client',
    actorMeta: 'Website chat · MVA',
    initials: 'JR',
    message: 'I was rear-ended last week and still dealing with the hospital bills. Can someone look at this?',
    reply: 'Thanks — a few questions so we can route this correctly.',
    status: 'Intake conversation started',
    detail: 'Case type: MVA · Form path branched',
    panelTitle: 'IntakeOS inbox',
    panelMeta: 'Lead #4821 · Example',
    panelBody: 'Transcript and answers stay with the lead from the first message.',
  },
  {
    label: 'Qualify',
    actor: 'Waypoint',
    actorMeta: 'Firm criteria applied',
    initials: 'WP',
    message: "Severity, urgency and completeness scored against your firm's rules.",
    reply: 'Meets intake criteria — prioritize review.',
    status: 'Qualified for follow-up',
    detail: 'Score ready · Clarification tasks flagged',
    panelTitle: 'Case assessment',
    panelMeta: 'Scoring breakdown',
    panelBody: 'Your team sees why it ranked — not just a number.',
  },
  {
    label: 'Connect',
    actor: 'Live transfer',
    actorMeta: 'Peak intent handoff',
    initials: 'LT',
    message: 'Qualified lead waiting — agent available with full transcript on screen.',
    reply: 'Connecting now.',
    status: 'Warm handoff in progress',
    detail: 'Context attached · Softphone ready',
    panelTitle: 'Agent inbox',
    panelMeta: 'Live transfer queue',
    panelBody: 'Intake staff pick up with the conversation already captured.',
  },
  {
    label: 'Sign',
    actor: 'E-sign retainer',
    actorMeta: 'Same session',
    initials: 'ES',
    message: 'Retainer pre-filled from intake answers. Signature collected in-browser.',
    reply: 'Signed. Syncing to case management.',
    status: 'Client signed · CRM synced',
    detail: 'Filevine / Clio / Litify push complete',
    panelTitle: 'Case start',
    panelMeta: 'Signed matter',
    panelBody: 'The signed case and intake package land where your team already works.',
  },
]

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
  extra?: ReactNode
}> = {
  builder: {
    title: <>The right questions.<br />In the right order.</>,
    body: 'Build an intake that follows the answers. Visual branching lets each case type take its own path.',
    bullets: [
      'Contact fields, dates and multiple choice',
      'Conditional questions and document uploads',
      'Intake embedded in your existing website',
    ],
    img: '/images/intake-builder.png',
    imgAlt: 'Case Compass visual intake form builder with connected question nodes',
  },
  scoring: {
    title: <>Less sorting.<br />More informed decisions.</>,
    body: "See a lead's scoring breakdown alongside the intake transcript, with clarification tasks for missing information.",
    bullets: [
      "Your firm's criteria, applied consistently",
      'Severity, urgency and case-value dimensions',
      'Completeness and AI confidence in view',
    ],
    img: '/images/intake-scoring.png',
    imgAlt: 'Waypoint lead scoring with case assessment and intake transcript',
    extra: (
      <Link className="text-link" href="/solutions/waypoint">Explore Waypoint ↗</Link>
    ),
  },
  timelines: {
    title: <>What happens next.<br />Already built in.</>,
    body: 'Visual workflows that run after intake — follow-ups, document requests, CRM sync and e-sign handoffs without staff chasing every step.',
    bullets: [
      'Drag-and-drop timeline builder',
      'SMS, email and task automation',
      'Conditional routing by case type',
    ],
    img: '/images/timeline-builder.png',
    imgAlt: 'Case Compass timeline builder with automated workflow steps',
  },
  transfer: {
    title: <>Warm handoffs.<br />At peak intent.</>,
    body: 'When a lead qualifies, route them to available intake staff in real time — with the transcript and case context already on screen.',
    bullets: [
      'Live queue with agent assignment',
      'Full intake context before pickup',
      'Browser softphone and speed-to-lead tracking',
    ],
    img: '/images/agent-platform-live-transfer-inbox.png',
    imgAlt: 'Live transfer inbox with agent assignment and lead queue',
    extra: (
      <Link className="text-link" href="/solutions/agent-platform">Explore Agent Platform ↗</Link>
    ),
  },
  inbox: {
    title: <>Context stays<br />with the conversation.</>,
    body: 'Give your team a shared place to review incoming leads and move the right work forward.',
    bullets: [
      'Intake details accessible to your team',
      'Live transfer with agent assignment',
      'Follow-up through SMS and email sequences',
    ],
    img: '/images/intake.png',
    imgAlt: 'IntakeOS lead inbox and intake workspace',
  },
  analytics: {
    title: <>See what converts.<br />Not just what comes in.</>,
    body: 'Track intake completion, source quality and conversion through to signed retainers — so the next campaign decision has more behind it than a lead count.',
    bullets: [
      'Full-funnel visibility by source and campaign',
      'Team and channel performance',
      'Exportable reporting for marketing and ops',
    ],
    img: '/images/referrals-reporting.png',
    imgAlt: 'Case Compass reporting dashboard with intake and conversion analytics',
  },
}

const stepCopy = [
  {
    title: 'Meet them where they are.',
    body: 'Engage visitors through conversational chat or embedded forms, with questions tailored to the case type.',
  },
  {
    title: 'Put your criteria to work.',
    body: 'Waypoint evaluates submissions against the rules your firm defines, helping your team prioritize its review.',
  },
  {
    title: 'Make the moment count.',
    body: 'Route qualified leads to available intake staff. Keep the transcript and case context with the conversation.',
  },
  {
    title: 'Give the case a strong start.',
    body: 'Collect a pre-filled retainer signature, then send the case and intake details to your case management system.',
  },
]

function LeadFlowDemo({
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
    const t = setInterval(() => setStage(s => (s + 1) % leadStages.length), 6500)
    return () => clearInterval(t)
  }, [playing, setStage])

  const s = leadStages[stage]
  return (
    <div className="prod-demo" aria-label="Interactive example IntakeOS lead workflow">
      <div className="prod-demo-meta">
        <span><i /> ONE LEAD, CONNECTED</span>
        <span>Illustrative workflow</span>
      </div>
      <div className="prod-demo-stage" key={stage}>
        <div className="prod-thread">
          <span className="prod-avatar">{s.initials}</span>
          <div>{s.actor} <small>{s.actorMeta}</small></div>
        </div>
        <div className="prod-msg incoming">
          {s.message}
          <small>IntakeOS · just now</small>
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
          <span className="prod-tiny">Firm</span>
        </div>
        <div className="prod-panel">
          <div className="prod-thread">
            <span className="prod-avatar square">IO</span>
            <div>{s.panelTitle} <small>{s.panelMeta}</small></div>
          </div>
          <p>{s.panelBody}</p>
          <div className="prod-panel-foot">
            <span className="prod-tag">Up to date</span>
            <span>Open lead ↗</span>
          </div>
        </div>
      </div>
      <div className="prod-demo-controls">
        <div className="prod-stage-buttons">
          {leadStages.map((x, i) => (
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

export default function IntakeOSPage() {
  const [tab, setTab] = useState<Tab>('builder')
  const [flowStage, setFlowStage] = useState(0)
  const [playing, setPlaying] = useState(true)
  const { openModal } = useDemoModal()
  const feature = features[tab]

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <div className="dw io">
        <main id="main">
          <section className="io-hero">
            <div className="wrap">
              <div className="io-lockup">
                <Link href="/intakeos" aria-label="IntakeOS home" className="io-logo-link">
                  <Image
                    src="/images/intakeos-logo.png"
                    alt="IntakeOS"
                    width={200}
                    height={37}
                    className="io-logo"
                    unoptimized
                    priority
                  />
                </Link>
                <span className="io-label">BUILT FOR PLAINTIFF LAW</span>
              </div>
              <div className="io-headline">
                <h1>First contact.<br /><em>Forward motion.</em></h1>
                <div>
                  <p>Turn interest into qualified cases. Bring intake, scoring, live conversations and signed retainers into one connected flow.</p>
                  <button type="button" className="button" onClick={openModal}>
                    See what IntakeOS can do <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workflow">From first click to signed client ↓</a>
                </div>
              </div>

              <div className="io-hero-split">
                <LeadFlowDemo
                  stage={flowStage}
                  setStage={setFlowStage}
                  playing={playing}
                  setPlaying={setPlaying}
                />
                <div className="io-hero-product">
                  <BrowserFrame url={`app.casecompass.io · ${leadStages[flowStage].label}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/intake.png" width={3452} height={1826} alt="IntakeOS inbox showing leads, case details and intake management controls" />
                  </BrowserFrame>
                </div>
              </div>
            </div>
          </section>

          <section className="io-journey wrap" id="workflow">
            <div className="dw-section-head">
              <div>
                <p className="eyebrow">EVERY HANDOFF HAS A NEXT STEP</p>
                <h2>Keep the momentum.<br /><em>From click to client.</em></h2>
              </div>
              <p>Your intake team gets the context to act. Your prospective clients get a clear path forward.</p>
            </div>
            <ol className="io-steps">
              {leadStages.map((s, i) => (
                <li
                  key={s.label}
                  className={flowStage === i ? 'is-active' : undefined}
                  onClick={() => { setFlowStage(i); setPlaying(false) }}
                  style={{ cursor: 'pointer' }}
                >
                  <span>0{i + 1} / {s.label === 'Sign' ? 'SIGN & SYNC' : s.label.toUpperCase()}</span>
                  <h3>{stepCopy[i].title}</h3>
                  <p>{stepCopy[i].body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="dw-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">INSIDE INTAKEOS</p>
                  <h2>A better front door.<br /><em>A smarter way through.</em></h2>
                </div>
                <p>From the questions you ask<br />to the leads your team opens first.</p>
              </div>
              <div className="dw-tabs io-tabs" role="tablist" aria-label="IntakeOS product features">
                {([
                  { id: 'builder' as const, label: '01 / Intake builder' },
                  { id: 'scoring' as const, label: '02 / Waypoint' },
                  { id: 'timelines' as const, label: '03 / Timelines' },
                  { id: 'transfer' as const, label: '04 / Live transfer' },
                  { id: 'inbox' as const, label: '05 / Inbox' },
                  { id: 'analytics' as const, label: '06 / Analytics' },
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
                  {feature.extra}
                </div>
                <ExpandableBrowserFrame
                  url="app.casecompass.io"
                  src={feature.img}
                  alt={feature.imgAlt}
                />
              </article>
            </div>
          </section>

          <section className="io-conversion">
            <div className="wrap io-conversion-grid">
              <div>
                <p className="eyebrow">THE SPACE BETWEEN INTEREST AND ENGAGEMENT</p>
                <h2>Don&apos;t let a good lead<br /><em>lose momentum.</em></h2>
                <p>Build the next action into the flow, whether that&apos;s a conversation now, a retainer to sign, or a follow-up when the time is right.</p>
                <button type="button" className="button" onClick={openModal}>
                  Walk through your workflow <span>↗</span>
                </button>
              </div>
              <div className="io-conversion-items">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Connect while they&apos;re engaged.</h3>
                    <p>Live transfer brings qualified prospects to available staff with the intake context already captured.</p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h3>Make signing part of intake.</h3>
                    <p>Pre-fill the retainer from submitted information and collect an e-signature in the same session.</p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h3>Keep the door open.</h3>
                    <p>Schedule SMS and email nurture for prospects who need more time, with timing your firm controls.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="io-results wrap" id="results">
            <div className="dw-section-head">
              <div>
                <p className="eyebrow">PROGRESS YOU CAN MEASURE</p>
                <h2>Better intake.<br /><em>A stronger practice.</em></h2>
              </div>
              <a className="quiet-link" href="#results">Explore client results <span>↗</span></a>
            </div>
            <div className="metrics">
              <div>
                <span className="metric-label">STERN &amp; COHEN</span>
                <strong>75<span>%</span></strong>
                <p>Chat-to-client conversion</p>
              </div>
              <div>
                <span className="metric-label">MCCUNE LAW GROUP</span>
                <strong>70<span>%</span></strong>
                <p>Increase in conversions</p>
              </div>
              <div>
                <span className="metric-label">NATIONWIDE MASS TORT FIRM</span>
                <strong>90<span>%</span></strong>
                <p>Reduction in acquisition costs</p>
              </div>
            </div>
            <p className="results-note">Reported results from Case Compass legal-intake programs. Outcomes vary by implementation.</p>
            <div className="io-attribution">
              <h3>See where signed cases start.</h3>
              <p>Connect intake to its marketing source and follow the funnel through to engagement. Give your next campaign decision more than a lead count.</p>
            </div>
          </section>

          <section className="dw-faq">
            <div className="wrap dw-faq-grid">
              <div>
                <p className="eyebrow">BEFORE YOUR FIRST FLOW</p>
                <h2>Built for your firm.<br /><em>Connected to your tools.</em></h2>
              </div>
              <div>
                <details>
                  <summary>Can we use IntakeOS on our current website?</summary>
                  <p>Yes. Deploy conversational intake, webforms or embedded widgets independently or together. The intake can be tailored to your practice areas and case types.</p>
                </details>
                <details>
                  <summary>Who decides how leads are scored?</summary>
                  <p>Your firm defines the criteria. Waypoint applies them to incoming submissions and presents the results to support your team&apos;s review and prioritization.</p>
                </details>
                <details>
                  <summary>What happens when an agent isn&apos;t available?</summary>
                  <p>The platform can capture the prospect&apos;s information, send an e-sign retainer and schedule a callback. Your configured workflow determines the next action.</p>
                </details>
                <details>
                  <summary>Will signed cases reach our case management system?</summary>
                  <p>IntakeOS integrates with tools including Filevine, Clio, Litify and LeadDocket. Your setup connects the signed case and captured intake information to the system your team uses.</p>
                </details>
                <details>
                  <summary>How do we get started?</summary>
                  <p>Start with a walkthrough of your intake process. The Case Compass team helps configure the intake flow and Waypoint criteria for your practice, then deploys your first workflow.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="dw-cta io-cta">
            <div className="wrap">
              <p className="eyebrow">THE NEXT CASE STARTS WITH A CONVERSATION</p>
              <h2>Make your first impression<br /><em>the start of something.</em></h2>
              <div>
                <p>Let&apos;s build a better intake journey for your firm.</p>
                <button type="button" className="button" onClick={openModal}>
                  Talk about IntakeOS <span>↗</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
