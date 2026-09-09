'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import IntegrationsTicker from '@/components/home/IntegrationsTicker'
import '../dwellex/dwellex.css'
import './intakeos.css'

type Tab = 'builder' | 'scoring' | 'inbox'

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
}

export default function IntakeOSPage() {
  const [tab, setTab] = useState<Tab>('builder')
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
                <Link href="/intakeos" aria-label="IntakeOS home" className="io-wordmark">
                  Intake<span className="io-os">OS</span>
                </Link>
                <span className="io-label">BUILT FOR PLAINTIFF LAW</span>
              </div>
              <div className="io-headline">
                <h1>First contact.<br /><em>Forward motion.</em></h1>
                <div>
                  <p>Turn interest into qualified cases. Bring intake, scoring, live conversations and signed retainers into one connected flow.</p>
                  <a className="button" href="mailto:support@casecompass.io?subject=IntakeOS%20demo">
                    See what IntakeOS can do <span aria-hidden="true">↗</span>
                  </a>
                  <a className="text-link" href="#workflow">From first click to signed client ↓</a>
                </div>
              </div>

              <div className="io-hero-product">
                <div className="io-product-top">
                  <span>YOUR INTAKE OPERATION. ONE WORKSPACE.</span>
                  <span>IntakeOS / Inbox</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/intake.png" width={3452} height={1826} alt="IntakeOS inbox showing leads, case details and intake management controls" />
                <div className="io-product-bottom">
                  <span>Capture the conversation.</span>
                  <span>Find the right fit.</span>
                  <span>Make the next move.</span>
                </div>
              </div>

              <div className="io-integrations">
                <span>CONNECTED TO YOUR CASE TOOLS</span>
                <div>
                  <span>Filevine</span>
                  <span>Clio</span>
                  <span>Litify</span>
                  <span>LeadDocket</span>
                </div>
              </div>
            </div>
          </section>

          <IntegrationsTicker />

          <section className="io-journey wrap" id="workflow">
            <div className="dw-section-head">
              <div>
                <p className="eyebrow">EVERY HANDOFF HAS A NEXT STEP</p>
                <h2>Keep the momentum.<br /><em>From click to client.</em></h2>
              </div>
              <p>Your intake team gets the context to act. Your prospective clients get a clear path forward.</p>
            </div>
            <ol className="io-steps">
              <li>
                <span>01 / CAPTURE</span>
                <h3>Meet them where they are.</h3>
                <p>Engage visitors through conversational chat or embedded forms, with questions tailored to the case type.</p>
              </li>
              <li>
                <span>02 / QUALIFY</span>
                <h3>Put your criteria to work.</h3>
                <p>Waypoint evaluates submissions against the rules your firm defines, helping your team prioritize its review.</p>
              </li>
              <li>
                <span>03 / CONNECT</span>
                <h3>Make the moment count.</h3>
                <p>Route qualified leads to available intake staff. Keep the transcript and case context with the conversation.</p>
              </li>
              <li>
                <span>04 / SIGN &amp; SYNC</span>
                <h3>Give the case a strong start.</h3>
                <p>Collect a pre-filled retainer signature, then send the case and intake details to your case management system.</p>
              </li>
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
              <div className="dw-tabs" role="tablist" aria-label="IntakeOS product features">
                {([
                  { id: 'builder' as const, label: '01 / Build your intake' },
                  { id: 'scoring' as const, label: '02 / Prioritize with Waypoint' },
                  { id: 'inbox' as const, label: '03 / Work the pipeline' },
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

              <article className="dw-feature" id={`view-${tab}`} role="tabpanel" aria-labelledby={`tab-${tab}`}>
                <div className="dw-feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <ul>
                    {feature.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  {feature.extra}
                </div>
                <a className="dw-feature-image" href={feature.img} target="_blank" rel="noopener noreferrer" aria-label="Open full-size product screenshot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={feature.img} alt={feature.imgAlt} loading="lazy" />
                  <span>View full-size product screen ↗</span>
                </a>
              </article>
            </div>
          </section>

          <section className="io-conversion">
            <div className="wrap io-conversion-grid">
              <div>
                <p className="eyebrow">THE SPACE BETWEEN INTEREST AND ENGAGEMENT</p>
                <h2>Don&apos;t let a good lead<br /><em>lose momentum.</em></h2>
                <p>Build the next action into the flow, whether that&apos;s a conversation now, a retainer to sign, or a follow-up when the time is right.</p>
                <a className="button" href="mailto:support@casecompass.io?subject=IntakeOS%20workflow%20demo">
                  Walk through your workflow <span>↗</span>
                </a>
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
                <a className="button" href="mailto:support@casecompass.io?subject=IntakeOS%20demo">
                  Talk about IntakeOS <span>↗</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
