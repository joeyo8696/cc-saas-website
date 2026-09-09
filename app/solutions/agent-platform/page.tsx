'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import { useDemoModal } from '@/components/DemoModalProvider'
import BrowserFrame from '@/components/ui/BrowserFrame'
import ExpandableBrowserFrame from '@/components/ui/ExpandableBrowserFrame'
import '../../dwellex/dwellex.css'
import '../referrals/referrals.css'
import './agent-platform.css'

type Tab = 'transfer' | 'softphone' | 'sops' | 'speed' | 'outbound'

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
  note: string
}> = {
  transfer: {
    title: <>Every lead.<br />Every agent. Live.</>,
    body: 'When a lead asks for an agent — by phone, chat, or form — they land in the queue with wait time, intake form, and assignment status already attached.',
    bullets: [
      'Real-time Waiting · In Progress · Completed counters',
      'One-click claim with full lead context on pickup',
      'SOPs and transcript ready before the call starts',
    ],
    img: '/images/agent-platform-live-transfer-inbox.png',
    imgAlt: 'Live Transfer Inbox with queue status, wait times, and agent actions',
    note: 'Live Transfer Inbox — real-time agent queue',
  },
  softphone: {
    title: <>Your phone system.<br />Inside IntakeOS.</>,
    body: 'RingCentral softphone or RingOut stays with agents across Inbox, Live Transfer, and Speed Dashboard. Every call is logged, recorded, and attributed.',
    bullets: [
      'Browser softphone with Softphone RINGOUT status',
      'RingOut to desk or mobile when preferred',
      'Recording plus optional Whisper transcription for AI QA',
    ],
    img: '/images/agent-platform-ringcentral-settings.png',
    imgAlt: 'RingCentral integration settings with softphone dial mode and recording toggles',
    note: 'RingCentral — softphone, RingOut, recording, Whisper QA',
  },
  sops: {
    title: <>The right script.<br />On every call.</>,
    body: 'Document scripts and interactive checklists appear in the agent workspace, assigned per intake form so practice-area language shows up automatically.',
    bullets: [
      'Document SOPs for empathy and compliance language',
      'Checklists with required fields and completion tracking',
      'Form-level assignment or org-wide defaults',
    ],
    img: '/images/agent-platform-sop-editor.png',
    imgAlt: 'Agent SOP editor with Live Transfer empathy and compliance script',
    note: 'Agent SOPs — scripts and checklists mid-call',
  },
  speed: {
    title: <>You can&apos;t improve<br />what you can&apos;t see.</>,
    body: 'Supervisors get average response time, SLA compliance, response distribution, queue depth, and a per-agent leaderboard — filterable by today, week, month, or custom range.',
    bullets: [
      'Avg response time and % under SLA',
      'Response-time distribution and daily trend',
      'Agent leaderboard with conversions',
    ],
    img: '/images/agent-platform-speed-dashboard.png',
    imgAlt: 'Speed-to-Lead Dashboard with SLA metrics and agent leaderboard',
    note: 'Speed-to-Lead Dashboard — SLA and agent performance',
  },
  outbound: {
    title: <>No promised callback<br />falls through.</>,
    body: 'Schedule callbacks, assign agents, add notes, and dial from the queue. Pending, Attempted, and Completed stay visible — with wait time on every row.',
    bullets: [
      'Scheduled callbacks with agent assignment',
      'One-click Call now via softphone or RingOut',
      'Aging wait time for supervisor visibility',
    ],
    img: '/images/agent-platform-callback-queue.png',
    imgAlt: 'Outbound Callback Queue with schedule modal and agent assignment',
    note: 'Outbound Callback Queue — scheduled dial-backs',
  },
}

const faqs = [
  {
    q: 'What is a live transfer inbox for law firms?',
    a: 'A live transfer inbox is a real-time agent workspace that shows every inbound call, chatbot conversation, and web form submission that has requested a live agent — with caller identity, wait time, intake form, and transfer status so agents respond in priority order.',
  },
  {
    q: 'How does Case Compass integrate with RingCentral?',
    a: 'Case Compass connects natively to RingCentral. Agents make and receive calls in the browser softphone, or bridge through desk or mobile via RingOut. Every call is logged, recorded, and attributed to the correct lead and marketing source.',
  },
  {
    q: 'What are Agent SOPs and how do they help intake teams?',
    a: 'Agent SOPs are scripts and checklists that appear inside the live workspace. Documents cover talking points and compliance language. Checklists track required steps. Assign them per intake form so the right procedure appears for each practice area.',
  },
  {
    q: 'What metrics does the Speed-to-Lead Dashboard track?',
    a: 'Average response time, SLA compliance, missed leads, queue depth, response-time distribution, daily average trend, and a per-agent leaderboard with calls, SLA rate, conversions, and conversion percentage.',
  },
  {
    q: 'Can agents schedule and manage outbound callbacks?',
    a: 'Yes. The Outbound Callback Queue lets you schedule callbacks, assign agents, set a time, and add notes. Pending, Attempted, and Completed statuses stay visible, with one-click Call now from the dashboard.',
  },
  {
    q: 'Does Case Compass record calls and create summaries?',
    a: 'Yes. Enable RingCentral call recording and optionally OpenAI Whisper transcription for AI QA. Recordings attach to the lead profile; agents add disposition, notes, and SOP checklist completion on the timeline.',
  },
]

const includes = [
  { title: 'Live Transfer Inbox', body: 'Real-time queue for phone, chat, and form handoffs — with claim, wait time, and status counters.' },
  { title: 'RingCentral softphone', body: 'Talk in-browser with Softphone RINGOUT, or use RingOut to a desk or mobile handset.' },
  { title: 'Agent SOPs & checklists', body: 'Scripts and required steps appear mid-call, assigned per form or org-wide.' },
  { title: 'Speed-to-lead dashboard', body: 'SLA tracking, response distribution, and an agent leaderboard supervisors can filter live.' },
  { title: 'Outbound callback queue', body: 'Schedule, assign, and dial promised callbacks before they age out.' },
  { title: 'Recording & Whisper QA', body: 'Account-level recording, optional Whisper transcription, and post-call summaries on the lead.' },
]

export default function AgentPlatformPage() {
  const [tab, setTab] = useState<Tab>('transfer')
  const { openModal } = useDemoModal()
  const feature = features[tab]

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <div className="dw rf aw">
        <main id="main">
          <section className="rf-hero">
            <div className="wrap">
              <div className="rf-lockup">
                <span className="rf-wordmark">Agent Workforce</span>
                <span>INTAKEOS</span>
              </div>
              <div className="rf-headline">
                <h1>The agent layer<br /><em>built into IntakeOS.</em></h1>
                <div>
                  <p>
                    Live transfer, RingCentral softphone, Agent SOPs, speed-to-lead dashboards, and outbound queues — so your team picks up with context and hits the SLA.
                  </p>
                  <button type="button" className="button" onClick={openModal}>
                    See Agent Workforce in action <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workspace">Explore the workspace ↓</a>
                </div>
              </div>
              <div className="rf-hero-shot">
                <BrowserFrame url="app.casecompass.io/live-transfer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/agent-platform-live-transfer-inbox.png"
                    width={1600}
                    height={1000}
                    alt="Case Compass Live Transfer Inbox"
                  />
                </BrowserFrame>
              </div>
            </div>
          </section>

          <section className="rf-flow" id="workflow">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">FROM HANDOFF TO FOLLOW-UP</p>
                  <h2>How Agent Workforce<br /><em>keeps pace.</em></h2>
                </div>
                <p>Connect while intent is high. Measure what happens next. Close the loop on every callback.</p>
              </div>
              <ol className="rf-steps" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <li>
                  <span>01 / HANDOFF</span>
                  <h3>Live transfer</h3>
                  <p>Qualified leads enter the agent queue with transcript, wait time, and form context already attached.</p>
                </li>
                <li>
                  <span>02 / CONNECT</span>
                  <h3>Softphone ready</h3>
                  <p>Agents answer in-browser or via RingOut. Recording and attribution stay on the lead automatically.</p>
                </li>
                <li>
                  <span>03 / GUIDE</span>
                  <h3>SOPs on screen</h3>
                  <p>Scripts and checklists appear mid-call — the right language for the practice area, without another tab.</p>
                </li>
                <li>
                  <span>04 / MEASURE</span>
                  <h3>Speed &amp; callbacks</h3>
                  <p>Supervisors watch SLA and leaderboards. Promised callbacks stay in a queue until they&apos;re done.</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="rf-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">INSIDE THE WORKFORCE</p>
                  <h2>Built for the moment<br /><em>the lead asks for help.</em></h2>
                </div>
                <p>Real product views from Live Transfer through Softphone, SOPs, Speed, and Outbound.</p>
              </div>
              <div className="dw-tabs aw-tabs" role="tablist" aria-label="Agent Workforce features">
                {([
                  { id: 'transfer' as const, label: '01 / Live transfer' },
                  { id: 'softphone' as const, label: '02 / Softphone' },
                  { id: 'sops' as const, label: '03 / SOPs' },
                  { id: 'speed' as const, label: '04 / Speed' },
                  { id: 'outbound' as const, label: '05 / Outbound' },
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
                  url="app.casecompass.io"
                  src={feature.img}
                  alt={feature.imgAlt}
                />
              </article>
              <p className="rf-feature-note">{feature.note}</p>
            </div>
          </section>

          <section className="aw-profile wrap">
            <div className="aw-profile-grid">
              <div>
                <p className="eyebrow">LEAD PROFILE</p>
                <h2>The whole picture<br /><em>when you pick up.</em></h2>
                <p>
                  Chat answers, call history, recordings, and SOPs stay on the lead — so agents walk into every transfer prepared, and supervisors can review what happened after.
                </p>
                <ul>
                  <li>Bot answers visible while the agent is live</li>
                  <li>Phone history with recordings and summaries</li>
                  <li>SOPs embedded under the call rail</li>
                  <li>Take-over chat for seamless bot-to-human handoff</li>
                </ul>
              </div>
              <ExpandableBrowserFrame
                url="app.casecompass.io/lead"
                src="/images/agent-platform-lead-profile-lt.png"
                alt="Lead profile during a live transfer with chat, call history, and SOPs"
              />
            </div>
          </section>

          <section className="rf-includes">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">EVERYTHING INCLUDED</p>
                  <h2>Everything Agent Workforce<br /><em>covers.</em></h2>
                </div>
                <p>Telephony, scripts, SLAs, and callbacks — wired into the same IntakeOS lead record.</p>
              </div>
              <div className="rf-include-grid">
                {includes.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="dw-faq">
            <div className="wrap dw-faq-grid">
              <div>
                <p className="eyebrow">BEFORE YOU GO LIVE</p>
                <h2>Good questions.<br /><em>Clear answers.</em></h2>
              </div>
              <div>
                {faqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="rf-related">
            <div className="wrap">
              <p className="eyebrow" style={{ marginBottom: 28 }}>RELATED SOLUTIONS</p>
              <div className="rf-related-grid">
                <Link href="/intakeos">
                  <strong>IntakeOS →</strong>
                  <p>Plaintiff intake — chatbots, webforms, live transfer, and the agent layer that answers them.</p>
                </Link>
                <Link href="/solutions/waypoint">
                  <strong>Waypoint →</strong>
                  <p>AI scoring so agents prioritize the right leads before file open.</p>
                </Link>
                <Link href="/solutions/esign">
                  <strong>E-Signatures →</strong>
                  <p>Close the loop with retainers signed in the same session.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">FASTER PICKUP. CLEARER FOLLOW-THROUGH.</p>
              <h2>Ready to put your intake<br /><em>team on one workspace?</em></h2>
              <div>
                <p>Walk through live transfer, softphone, SOPs, and the speed dashboard with your practice area and team size in mind.</p>
                <button type="button" className="button" onClick={openModal}>
                  Schedule a demo <span>↗</span>
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
