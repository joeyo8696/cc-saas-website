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
import './workers-comp.css'

type Tab = 'qualify' | 'speed' | 'docs' | 'referrals'

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
  note: string
}> = {
  qualify: {
    title: <>Know if it&apos;s a case<br />worth taking.</>,
    body: 'AI-powered intake captures injury details, employment status, and incident timing — then scores each lead against your acceptance criteria.',
    bullets: [
      'Branching logic for WC scenarios',
      'Waypoint scores before file open',
      'Staff only work qualified leads',
    ],
    img: '/images/intake-scoring.png',
    imgAlt: 'Intake scoring dashboard for workers compensation leads',
    note: 'Qualification — Waypoint on every WC intake',
  },
  speed: {
    title: <>Reach them before<br />the next firm does.</>,
    body: 'The moment a potential client submits, automated SMS and email sequences launch. Live transfer connects attorneys to hot leads in real time.',
    bullets: [
      'Instant SMS and email sequences',
      'Live transfer for hot leads',
      '24/7 qualification without staff',
    ],
    img: '/images/intake-builder.png',
    imgAlt: 'Intake builder for workers compensation speed-to-lead flows',
    note: 'Speed-to-lead — automated outreach',
  },
  docs: {
    title: <>Retainers and requests<br />without the chase.</>,
    body: 'Retainer agreements, medical record requests, and employer verification letters auto-generate from intake data — with e-signature built in.',
    bullets: [
      'Auto-generated retainers',
      'Medical and employer forms from intake',
      'E-sign in the same session',
    ],
    img: '/images/ai-lead-scoring.png',
    imgAlt: 'Automated document and scoring workflow',
    note: 'Documents — generated from intake data',
  },
  referrals: {
    title: <>See which partners<br />send your best cases.</>,
    body: 'Track doctors, clinics, and referral partners down to the signed retainer — so you know where to invest.',
    bullets: [
      'Partner portals for referring sources',
      'Attribution to signed retainer',
      'Fee tracking without spreadsheets',
    ],
    img: '/images/referrals-reporting.png',
    imgAlt: 'Referral partner reporting for workers compensation',
    note: 'Referral Network — source performance',
  },
}

const faqs = [
  {
    q: "What makes workers' comp intake different from other practice areas?",
    a: "Workers' comp intake requires capturing precise injury details, employer information, date of incident, and medical treatment history upfront. Case Compass uses branching logic to collect the right information for every workers' comp intake scenario, reducing back-and-forth with potential clients and ensuring your team has everything needed to evaluate the case immediately.",
  },
  {
    q: "Does Case Compass handle Spanish-language intake for workers' comp?",
    a: "Yes. Case Compass supports multi-language intake flows, including Spanish. Workers' comp firms serving Spanish-speaking communities can deploy fully bilingual intake bots and webforms, ensuring every potential client can complete the intake process in their preferred language.",
  },
  {
    q: "How does Case Compass speed up the workers' comp retainer process?",
    a: 'Case Compass qualifies leads automatically through Waypoint AI scoring, then routes high-value claimants directly to live transfer or sends an automated e-sign retainer. This reduces the average time to a signed retainer from days to hours, without requiring additional staff.',
  },
  {
    q: "Can Case Compass handle high-volume workers' comp lead generation?",
    a: 'Yes. Case Compass is designed for high-volume intake. It handles unlimited simultaneous intake conversations, qualifies leads 24/7, and automatically filters out non-qualified claimants — so your staff only spends time on cases worth pursuing.',
  },
  {
    q: "How does Case Compass integrate with workers' comp case management systems?",
    a: "Case Compass integrates with Clio, Filevine, SmartAdvocate, and other major case management platforms. Once a workers' comp claimant signs a retainer, their case data is automatically pushed to your system — no manual entry, no lost paperwork.",
  },
]

const includes = [
  { title: 'Intelligent intake qualification', body: 'Capture injury, employer, and incident details — then score each lead against your firm\'s criteria with Waypoint.' },
  { title: 'Instant speed-to-lead', body: 'SMS, email, and live transfer fire the moment a qualified injured worker submits.' },
  { title: 'Automated document generation', body: 'Retainers, medical requests, and employer letters from intake data — e-sign built in.' },
  { title: 'Client timeline & portal', body: 'Injured workers check status 24/7. Automated updates cut "where\'s my case?" calls.' },
  { title: 'Referral source analytics', body: 'Attribution from partner to signed retainer — know which sources convert.' },
  { title: 'Bilingual intake', body: 'Spanish and multi-language bots and webforms for the communities you serve.' },
]

const painPoints = [
  { title: 'Intake chaos', body: 'Missed calls, scattered notes, and no way to know which injured workers are actually qualified.' },
  { title: 'Slow follow-up', body: 'Every hour you don\'t respond, your odds of signing drop. Manual processes can\'t keep up.' },
  { title: 'Document overload', body: 'Medical records, incident reports, employer forms — staff buried before discovery starts.' },
  { title: 'No pipeline visibility', body: 'You don\'t know which cases are stalled or which referral sources are converting.' },
]

export default function WorkersCompPage() {
  const [tab, setTab] = useState<Tab>('qualify')
  const { openModal } = useDemoModal()
  const feature = features[tab]

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <div className="dw rf wc">
        <main id="main">
          <section className="rf-hero">
            <div className="wrap">
              <div className="rf-lockup">
                <span className="rf-wordmark">Workers&apos; Comp</span>
                <span>INTAKEOS</span>
              </div>
              <div className="rf-headline">
                <h1>Sign more cases.<br /><em>Work fewer hours.</em></h1>
                <div>
                  <p>IntakeOS for workers&apos; compensation firms — AI qualification, speed-to-lead outreach, bilingual intake, and document generation so your team spends time on cases worth signing.</p>
                  <button type="button" className="button" onClick={openModal}>
                    See it in action <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workflow">From contact to retainer ↓</a>
                </div>
              </div>
              <div className="rf-hero-shot">
                <BrowserFrame url="app.casecompass.io/intake">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/intake-scoring.png"
                    width={1600}
                    height={1000}
                    alt="Workers compensation intake scoring in IntakeOS"
                  />
                </BrowserFrame>
              </div>
            </div>
          </section>

          <section className="rf-directions">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">SOUND FAMILIAR?</p>
                  <h2>The problems slowing<br /><em>your firm down.</em></h2>
                </div>
                <p>High-volume WC practices lose cases to chaos, delay, and paperwork — not to better competitors.</p>
              </div>
              <div className="wc-pain-grid">
                {painPoints.map((p, i) => (
                  <article key={p.title} className="rf-direction">
                    <span>{String(i + 1).padStart(2, '0')} / PAIN</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="rf-flow" id="workflow">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">THE WORKFLOW</p>
                  <h2>From first contact<br /><em>to signed retainer.</em></h2>
                </div>
                <p>Every channel in. Qualified cases out. Paperwork that builds itself.</p>
              </div>
              <ol className="rf-steps" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <li>
                  <span>01 / REACH</span>
                  <h3>Injured worker reaches out</h3>
                  <p>Web form, phone, or referral — every channel captured in one place.</p>
                </li>
                <li>
                  <span>02 / SCORE</span>
                  <h3>AI qualifies the lead</h3>
                  <p>Waypoint scores injury type, date, employer, and coverage in seconds.</p>
                </li>
                <li>
                  <span>03 / OUTREACH</span>
                  <h3>Instant outreach fires</h3>
                  <p>SMS and email sequences launch; live transfer for hot leads.</p>
                </li>
                <li>
                  <span>04 / SIGN</span>
                  <h3>Retainer signed</h3>
                  <p>Auto-generated agreement sent for e-signature — less staff time per file.</p>
                </li>
                <li>
                  <span>05 / BUILD</span>
                  <h3>Case file built</h3>
                  <p>Medical requests, employer forms, and timeline initialized automatically.</p>
                </li>
                <li>
                  <span>06 / LOOP</span>
                  <h3>Client kept in the loop</h3>
                  <p>Automated updates at every milestone; portal access for status checks.</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="rf-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">BUILT FOR HIGH-VOLUME WC</p>
                  <h2>The work that used to<br /><em>bury your staff.</em></h2>
                </div>
                <p>Qualification, outreach, documents, and referrals — in IntakeOS.</p>
              </div>
              <div className="dw-tabs" role="tablist" aria-label="Workers' comp features">
                {([
                  { id: 'qualify' as const, label: '01 / Qualify' },
                  { id: 'speed' as const, label: '02 / Speed-to-lead' },
                  { id: 'docs' as const, label: '03 / Documents' },
                  { id: 'referrals' as const, label: '04 / Referrals' },
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

          <section className="rf-includes">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">EVERYTHING INCLUDED</p>
                  <h2>Workers&apos; comp intake.<br /><em>Fully wired.</em></h2>
                </div>
                <p>Qualification, speed-to-lead, documents, bilingual flows, and referral analytics in IntakeOS.</p>
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
                <p className="eyebrow">BEFORE YOU AUTOMATE</p>
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
                  <p>Plaintiff intake — chatbots, webforms, live transfer, and the full WC workflow.</p>
                </Link>
                <Link href="/solutions/waypoint">
                  <strong>Waypoint →</strong>
                  <p>Score every injured-worker intake before your team opens the file.</p>
                </Link>
                <Link href="/solutions/referrals">
                  <strong>Referral Network →</strong>
                  <p>Partner portals, fee tracking, and source performance reporting.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">MORE CASES. LESS CHAOS.</p>
              <h2>Ready to transform<br /><em>your WC intake?</em></h2>
              <div>
                <p>We&apos;ll walk through qualification, speed-to-lead, and retainer flow for a high-volume workers&apos; compensation practice.</p>
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
