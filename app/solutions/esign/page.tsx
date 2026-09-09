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
import './esign.css'

type Tab = 'session' | 'package' | 'reminders'

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
  note: string
}> = {
  session: {
    title: <>Sign while they&apos;re<br />still engaged.</>,
    body: 'Retainer agreements appear as a native step in the IntakeOS flow — no DocuSign redirect, no follow-up email to chase.',
    bullets: [
      'Embedded signing after intake questions',
      'Pre-filled from answers already collected',
      'Session complete when the ink is dry',
    ],
    img: '/images/intake.png',
    imgAlt: 'IntakeOS workspace where e-sign sits in the same intake session',
    note: 'In-session signing — part of IntakeOS',
  },
  package: {
    title: <>One step.<br />The full package.</>,
    body: 'Send a retainer, medical authorization, and fee disclosure together. Clients sign the package in a single eSign block.',
    bullets: [
      'Multi-document retainer packages',
      'Ideal for PI and mass tort intake',
      'Everything executed before they leave',
    ],
    img: '/images/intake-builder.png',
    imgAlt: 'Intake builder configuring document and signing steps',
    note: 'Multi-document packages — one signing block',
  },
  reminders: {
    title: <>If they leave,<br />bring them back.</>,
    body: 'Automated SMS reminders for outstanding signatures. Configure frequency from the dashboard — no manual monitoring.',
    bullets: [
      'Pending-signature tracking',
      'Configurable SMS reminder cadence',
      'Signed PDFs attached to team notifications',
    ],
    img: '/images/timeline-builder.png',
    imgAlt: 'Timeline builder for signature reminders and follow-up',
    note: 'Reminders — automated follow-up',
  },
}

const faqs = [
  {
    q: 'Can clients sign retainers during the intake session?',
    a: 'Yes. Case Compass includes in-flow e-signature collection as a native step in the intake process. After a claimant completes the intake questions, they are presented with the retainer or authorization form to sign — without leaving the intake session or being redirected to a separate tool. This eliminates a major source of drop-off in the traditional intake funnel.',
  },
  {
    q: 'Does Case Compass support multi-document signing?',
    a: 'Yes. A single eSign step in the intake flow can include multiple documents — for example, a retainer agreement plus a medical authorization form. Clients sign all documents in one session, which is particularly useful for multi-document retainer packages common in personal injury and mass tort cases.',
  },
  {
    q: 'What happens if a client does not sign during intake?',
    a: 'Case Compass sends automated SMS reminders to claimants with outstanding signature requests. You can configure reminder frequency and timing from the dashboard. The system tracks which leads have pending signatures so your intake team can follow up without manual monitoring.',
  },
  {
    q: 'Can clients download their signed documents?',
    a: 'Yes. Once a client has signed, their completed documents are available for download directly from the client portal. Signed documents are also automatically attached to the completion notification emails sent to your team.',
  },
  {
    q: 'Is e-signature in Case Compass legally binding?',
    a: 'Yes. Case Compass e-signatures comply with the ESIGN Act and UETA, which establish the legal validity of electronic signatures in the United States. Signed documents include an audit trail with timestamp, IP address, and signer identity information.',
  },
  {
    q: 'Does Case Compass replace DocuSign or Adobe Sign?',
    a: 'For intake retainer signing, yes. Case Compass eliminates the need to route claimants through a separate e-signature tool after intake — the signing step is embedded directly in the intake flow. This closes the gap between intake completion and retainer signature, which is where most law firms lose clients.',
  },
]

const includes = [
  { title: 'Sign during the intake session', body: 'Retainers appear as a native intake step. Clients sign while they\'re still engaged — no separate tool.' },
  { title: 'Multi-document packages', body: 'Retainer, medical authorization, fee disclosure — signed together in one eSign block.' },
  { title: 'SMS reminders', body: 'Automated reminders for pending signatures. Configure cadence without manual chase.' },
  { title: 'Client portal download', body: 'Signed documents available in the client portal immediately after execution.' },
  { title: 'Docs on team notifications', body: 'Completion alerts to your team include the signed PDF — no retrieval from another platform.' },
  { title: 'ESIGN Act & UETA compliant', body: 'Audit trail with timestamp, signer identity, and IP address on every signature.' },
]

export default function ESignPage() {
  const [tab, setTab] = useState<Tab>('session')
  const { openModal } = useDemoModal()
  const feature = features[tab]

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <div className="dw rf es">
        <main id="main">
          <section className="rf-hero">
            <div className="wrap">
              <div className="rf-lockup">
                <span className="rf-wordmark">eSign</span>
                <span>INTAKEOS</span>
              </div>
              <div className="rf-headline">
                <h1>Close the retainer<br /><em>before the session ends.</em></h1>
                <div>
                  <p>The gap between intake completion and signed retainer is where most firms lose clients. Embed e-signatures in the IntakeOS flow so clients sign while they&apos;re still engaged.</p>
                  <button type="button" className="button" onClick={openModal}>
                    See eSign in action <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workflow">From intake to signed ↓</a>
                </div>
              </div>
              <div className="rf-hero-shot">
                <BrowserFrame url="app.casecompass.io · Sign">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/intake.png"
                    width={1600}
                    height={1000}
                    alt="IntakeOS inbox — e-sign lives in the same intake session"
                  />
                </BrowserFrame>
              </div>
            </div>
          </section>

          <section className="rf-directions">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">THE FATAL GAP</p>
                  <h2>Intake ends.<br /><em>Retainer doesn&apos;t follow.</em></h2>
                </div>
                <p>A follow-up email days later to a tool they&apos;ve never used is where signed cases disappear.</p>
              </div>
              <div className="es-gap-grid">
                <article className="rf-direction">
                  <span>01 / PROBLEM</span>
                  <h3>The traditional funnel</h3>
                  <p>Client submits intake, then gets a DocuSign link later. Every day of delay is another day a competing firm can reach them first.</p>
                  <ul>
                    <li>Separate tool after intake</li>
                    <li>Drop-off between complete and sign</li>
                    <li>Staff chasing signatures manually</li>
                  </ul>
                </article>
                <article className="rf-direction">
                  <span>02 / APPROACH</span>
                  <h3>Sign is a step in intake</h3>
                  <p>Not a separate workflow. Questions, score, retainer, signature — one session. Notification and signed PDF land with your team.</p>
                  <ul>
                    <li>Native eSign block in IntakeOS</li>
                    <li>Pre-filled from intake answers</li>
                    <li>Session complete when they sign</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="rf-flow" id="workflow">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">SAME SESSION</p>
                  <h2>From questions<br /><em>to signed PDF.</em></h2>
                </div>
                <p>Five steps. No handoff to another product.</p>
              </div>
              <ol className="rf-steps" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                <li>
                  <span>01 / ASK</span>
                  <h3>Intake answers</h3>
                  <p>Client completes questions in chat or form.</p>
                </li>
                <li>
                  <span>02 / SCORE</span>
                  <h3>Waypoint scores</h3>
                  <p>Submission evaluated against your criteria.</p>
                </li>
                <li>
                  <span>03 / PRESENT</span>
                  <h3>Retainer appears</h3>
                  <p>Next step in the same session — pre-filled.</p>
                </li>
                <li>
                  <span>04 / SIGN</span>
                  <h3>Client signs</h3>
                  <p>In-browser. No redirect. Session complete.</p>
                </li>
                <li>
                  <span>05 / DELIVER</span>
                  <h3>Team notified</h3>
                  <p>Signed PDF attached. Ready for CMS sync.</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="rf-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">INSIDE ESIGN</p>
                  <h2>Built into intake.<br /><em>Not bolted on after.</em></h2>
                </div>
                <p>In-session signing, packages, and reminders — in IntakeOS.</p>
              </div>
              <div className="dw-tabs" role="tablist" aria-label="eSign features">
                {([
                  { id: 'session' as const, label: '01 / In-session' },
                  { id: 'package' as const, label: '02 / Packages' },
                  { id: 'reminders' as const, label: '03 / Reminders' },
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
                  <h2>eSign in IntakeOS.<br /><em>Fully wired.</em></h2>
                </div>
                <p>In-flow signing, packages, reminders, portal download, and compliant audit trails.</p>
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
                <p className="eyebrow">BEFORE YOU CLOSE THE GAP</p>
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
                  <p>Chatbots, webforms, live transfer — and eSign in the same flow.</p>
                </Link>
                <Link href="/solutions/waypoint">
                  <strong>Waypoint →</strong>
                  <p>Score every lead before your team opens the file.</p>
                </Link>
                <Link href="/solutions/referrals">
                  <strong>Referral Network →</strong>
                  <p>Partner portals, fee tracking, and referral performance.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">STOP CHASING SIGNATURES</p>
              <h2>Close retainers<br /><em>in the same session.</em></h2>
              <div>
                <p>We&apos;ll walk through in-flow e-signing in a live IntakeOS account — from questions to signed PDF.</p>
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
