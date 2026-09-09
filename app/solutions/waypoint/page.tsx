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

type Tab = 'criteria' | 'score' | 'edit'

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
  note: string
}> = {
  criteria: {
    title: <>Define what a strong<br />case looks like.</>,
    body: 'Build scoring rubrics per practice area — weights, red flags, and priority order in plain language.',
    bullets: [
      'Natural-language criteria editor',
      'Separate rubrics for mass tort, WC, PI, and more',
      'Pre-built sets for active torts',
    ],
    img: '/images/waypoint-criteria-list.png',
    imgAlt: 'Waypoint criteria management list',
    note: 'Criteria library — practice-area rubrics',
  },
  score: {
    title: <>A score before anyone<br />opens the file.</>,
    body: 'The moment intake completes, Waypoint returns a numeric score, category breakdowns, a written summary, and flags.',
    bullets: [
      'Multi-dimensional scoring',
      'Written summary on every lead',
      'Red flags surfaced instantly',
    ],
    img: '/images/ai-lead-scoring.png',
    imgAlt: 'AI lead scoring result on an intake',
    note: 'Lead score — before file open',
  },
  edit: {
    title: <>Tune the rubric.<br />Keep the standard.</>,
    body: 'Adjust dimensions, thresholds, and weights as your acceptance criteria evolve — without rebuilding intake forms.',
    bullets: [
      'Edit criteria without downtime',
      'Documented, defensible standards',
      'Same evaluation on every intake',
    ],
    img: '/images/waypoint-criteria-edit.png',
    imgAlt: 'Editing a Waypoint scoring criterion',
    note: 'Criteria editor — live adjustments',
  },
}

const faqs = [
  {
    q: 'How does Waypoint score leads?',
    a: "Waypoint uses your firm's custom criteria to evaluate each intake submission across multiple dimensions: case value, liability strength, evidence quality, urgency, and any red flags you define. It returns a structured score the moment intake is complete — before your team opens the file.",
  },
  {
    q: "Can I customize Waypoint's scoring criteria for my practice area?",
    a: "Yes. Waypoint is fully customizable per practice area. You define what a strong case looks like for mass tort, workers' comp, personal injury, or any other area. Pre-built criteria sets are also available for Depo-Provera, Roblox, and other active mass torts.",
  },
  {
    q: 'How does Waypoint compare to manual intake review?',
    a: 'Manual intake review introduces variance — different staff members evaluate cases differently, leading to inconsistent decisions. Waypoint applies the same documented, defensible evaluation standard to every intake, every time. It also scales infinitely: it evaluates as many intakes simultaneously as your firm receives, with zero delay.',
  },
  {
    q: 'Does Waypoint store my client data or use it to train AI models?',
    a: "No. Waypoint uses a Bring Your Own Key (BYOK) model — it operates using your firm's own OpenAI API key. Your data never touches a shared model and is never used to train anyone else's AI. Your client information stays yours.",
  },
  {
    q: 'What practice areas does Waypoint support?',
    a: "Waypoint supports any plaintiff practice area. It is currently used for mass tort, workers' compensation, personal injury, and landlord-tenant law. Custom criteria can be built for any case type in minutes.",
  },
]

const includes = [
  { title: 'Custom criteria per practice area', body: 'Define what a strong case looks like for mass tort, workers\' comp, personal injury, and more.' },
  { title: 'Multi-dimensional scoring', body: 'Scores on case value, liability, evidence quality, urgency, red flags, and every custom dimension you define.' },
  { title: 'Consistent evaluation', body: 'No variance between staff. Every claimant gets the same documented, defensible standard.' },
  { title: 'BYOK — your data stays yours', body: 'Uses your own OpenAI API key. Data never touches a shared model or trains anyone else\'s AI.' },
  { title: 'Scores before file open', body: 'The moment intake is complete, Waypoint returns a score so your team prioritizes with confidence.' },
  { title: 'Built for mass torts & beyond', body: 'Pre-built criteria for active torts. Build custom rubrics for any case type in minutes.' },
]

export default function WaypointPage() {
  const [tab, setTab] = useState<Tab>('criteria')
  const { openModal } = useDemoModal()
  const feature = features[tab]

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <div className="dw rf">
        <main id="main">
          <section className="rf-hero">
            <div className="wrap">
              <div className="rf-lockup">
                <span className="rf-wordmark">Waypoint</span>
                <span>INTAKEOS</span>
              </div>
              <div className="rf-headline">
                <h1>AI scoring that tells you<br /><em>which cases to take.</em></h1>
                <div>
                  <p>Stop relying on gut instinct to prioritize your pipeline. Waypoint evaluates every submitted intake against a fully customizable scoring rubric — and surfaces a score before your team opens the file.</p>
                  <button type="button" className="button" onClick={openModal}>
                    See Waypoint in action <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workflow">How it works ↓</a>
                </div>
              </div>
              <div className="rf-hero-shot">
                <BrowserFrame url="app.casecompass.io/waypoint">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/waypoint-criteria-list.png"
                    width={1600}
                    height={1000}
                    alt="Waypoint criteria management interface"
                  />
                </BrowserFrame>
              </div>
            </div>
          </section>

          <section className="rf-flow" id="workflow">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">FROM RUBRIC TO SCORE</p>
                  <h2>How Waypoint works.<br /><em>Three steps.</em></h2>
                </div>
                <p>Define the standard once. Every intake gets the same evaluation — instantly.</p>
              </div>
              <ol className="rf-steps" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <li>
                  <span>01 / DEFINE</span>
                  <h3>Define your criteria</h3>
                  <p>Add scoring dimensions for your practice area. Set weights, priority order, and red-flag thresholds.</p>
                </li>
                <li>
                  <span>02 / INTAKE</span>
                  <h3>Intake is submitted</h3>
                  <p>A claimant completes your IntakeOS form or chatbot. The full submission is sent to Waypoint.</p>
                </li>
                <li>
                  <span>03 / SCORE</span>
                  <h3>Score appears instantly</h3>
                  <p>Numeric score, category breakdowns, written summary, and flags — before anyone opens the lead.</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="rf-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">INSIDE WAYPOINT</p>
                  <h2>Built around the score.<br /><em>Right down to the criteria.</em></h2>
                </div>
                <p>Real product views.<br />One consistent evaluation standard.</p>
              </div>
              <div className="dw-tabs" role="tablist" aria-label="Waypoint features">
                {([
                  { id: 'criteria' as const, label: '01 / Criteria' },
                  { id: 'score' as const, label: '02 / Scoring' },
                  { id: 'edit' as const, label: '03 / Editor' },
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
                  url="app.casecompass.io/waypoint"
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
                  <h2>Everything Waypoint<br /><em>can do.</em></h2>
                </div>
                <p>Custom rubrics, instant scores, and BYOK privacy — wired into IntakeOS.</p>
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
                <p className="eyebrow">BEFORE YOU SCORE</p>
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
                  <p>Plaintiff intake — chatbots, webforms, live transfer, and Waypoint scoring.</p>
                </Link>
                <Link href="/solutions/mass-torts">
                  <strong>Mass Torts →</strong>
                  <p>Tort-specific scoring and MDL portfolio management at campaign scale.</p>
                </Link>
                <Link href="/solutions/workers-comp">
                  <strong>Workers&apos; Comp →</strong>
                  <p>Intake automation purpose-built for workers&apos; compensation firms.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">EVERY INTAKE. ONE STANDARD.</p>
              <h2>Ready to score every<br /><em>intake automatically?</em></h2>
              <div>
                <p>Book a walkthrough and we&apos;ll show you Waypoint live against your practice-area criteria.</p>
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
