'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import { useDemoModal } from '@/components/DemoModalProvider'
import BrowserFrame from '@/components/ui/BrowserFrame'
import '../../dwellex/dwellex.css'
import './referrals.css'

type Tab = 'outbound' | 'portal' | 'agreements' | 'reporting'

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
  note: string
}> = {
  outbound: {
    title: <>Every outbound referral.<br />One clear next step.</>,
    body: 'Staff can see every outbound referral, send a co-counsel agreement, and sign directly from the dashboard.',
    bullets: [
      'Create referrals with fee percentages',
      'Send acceptance requests by email or portal',
      'Type-to-sign co-counsel agreements in-place',
    ],
    img: '/images/referrals-outbound-dashboard.png',
    imgAlt: 'Case Compass outbound referral dashboard with co-counsel agreement signing',
    note: 'Outbound referrals — staff dashboard',
  },
  portal: {
    title: <>Partners see their leads.<br />And yours to them.</>,
    body: 'A branded two-way portal for partner attorneys — submit leads, accept referrals, and sign agreements without touching your internal dashboard.',
    bullets: [
      'Self-serve portal activation',
      'Accept or decline with one click',
      'Scoped visibility to their own referrals only',
    ],
    img: '/images/referrals-partner-portal.png',
    imgAlt: 'Referral partner portal showing referrals received with accept, view, and sign actions',
    note: 'Partner portal — referrals received',
  },
  agreements: {
    title: <>From acceptance.<br />To executed agreement.</>,
    body: 'Generate a complete co-counsel fee agreement with one click. Both firms type-to-sign. The executed copy lands with both parties automatically.',
    bullets: [
      'PDF pre-filled with client, firm, and fee terms',
      'Type-to-sign for referring and receiving firm',
      'Executed copy emailed to both sides',
    ],
    img: '/images/referrals-cocounsel-agreement.png',
    imgAlt: 'Auto-generated co-counsel fee agreement with type-to-sign signatures',
    note: 'Co-counsel agreement — both parties signed',
  },
  reporting: {
    title: <>See which partners<br />are producing.</>,
    body: 'Leads, intakes, conversion rates, and fee totals for every partner — individually and in aggregate.',
    bullets: [
      'Partner-level conversion and fee totals',
      'Identify highest-quality referral sources',
      'Manage relationships from data, not volume of status calls',
    ],
    img: '/images/referrals-reporting.png',
    imgAlt: 'Referral partner reporting dashboard with leads, intakes, conversion, and fees',
    note: 'Referral reporting — partner performance',
  },
}

const faqs = [
  {
    q: 'Where is Referral Network available?',
    a: 'Referral Network is supported in IntakeOS for plaintiff law firms and in Torvana for specialty medical practices. Firms use it for inbound partner portals, outbound co-counsel workflows and fee tracking. Practices use it to give referring attorneys scoped visibility into intake, appointments and records — and the same network layer when a fuller two-way loop is needed.',
  },
  {
    q: 'How do referral partners submit leads in Case Compass?',
    a: "Each referral partner gets a dedicated portal where they can submit leads directly. Partners fill out a structured intake form and can track the real-time status of every lead they've submitted — without any access to your firm's internal dashboard or other clients' information.",
  },
  {
    q: 'Can my firm refer cases out to other attorneys through Case Compass?',
    a: 'Yes. In IntakeOS, your staff can refer any case to a partner firm, set the referral fee percentage, and send the partner a secure email link to accept or decline. The partner can also accept or decline directly from their referrer portal.',
  },
  {
    q: 'How does the co-counsel agreement work?',
    a: 'Once a partner accepts an outbound referral, your staff can generate a co-counsel fee agreement as a PDF directly in Case Compass. The referring firm types their name to sign electronically, and the agreement is emailed to the partner. The partner then reviews it in their portal and signs with their own typed signature. Both signed copies are automatically emailed to both parties.',
  },
  {
    q: 'Can I track referral fees automatically?',
    a: 'Yes. Case Compass automatically generates a fee record when an intake from a referral partner completes, and also tracks outbound referral fees when a referred case resolves. You can set fee percentages, mark fees as paid, add notes, and maintain a full ledger — without spreadsheets.',
  },
  {
    q: 'How are referral partners onboarded?',
    a: 'New referral partners receive a secure invitation email with a link to activate their portal and set up their account. The entire onboarding process is self-serve — no credentials to share manually, no back-and-forth. Partners can be activated or deactivated from your dashboard at any time.',
  },
  {
    q: "Do referring partners see my firm's internal dashboard?",
    a: 'No. Partners have access only to their own branded portal, where they see leads they\'ve submitted, referrals they\'ve received from your firm, and the status of each. They cannot see your internal lead pipeline, other clients\' information, or any firm data outside of their own referrals.',
  },
  {
    q: 'What reporting is available for referral partner performance?',
    a: 'The referral reporting dashboard shows leads submitted, intakes completed, conversion rates, and fee totals for every partner — individually and in aggregate. You can identify which partners are sending the highest-quality leads and focus relationship management accordingly.',
  },
  {
    q: 'Does Case Compass support automated referral routing?',
    a: 'Yes. Through Waypoint AI scoring tiers in IntakeOS, cases that meet specific criteria can be automatically routed to partner firms as outbound referrals — without staff intervention. This is ideal for cases outside your practice area or geographic footprint.',
  },
]

const includes = [
  { title: 'Two-way referral network', body: 'Accept inbound leads and refer cases out — both tracked in the same platform with full attribution.' },
  { title: 'Self-serve partner onboarding', body: 'Send a secure invite link. Partners activate their own portal and start submitting leads.' },
  { title: 'Auto-generated co-counsel agreements', body: 'One click generates a complete fee agreement PDF pre-filled with client, partner, and fee details.' },
  { title: 'Type-to-sign for both parties', body: 'Your firm signs in the dashboard. The partner signs in their portal. Both get the executed copy.' },
  { title: 'Automatic fee tracking', body: 'Fee records are created when referred cases resolve. Maintain a full ledger without spreadsheets.' },
  { title: 'Partner performance reporting', body: 'Leads, intakes, conversion rates, and fee totals per partner — in a single dashboard.' },
  { title: 'Waypoint-triggered auto-referrals', body: 'Route cases that meet your criteria to partner firms automatically — zero staff intervention.' },
  { title: 'Real-time notifications', body: 'Staff and partners stay notified on acceptances, declines, and agreement events.' },
  { title: 'Full audit trail', body: 'Every acceptance, signature, and status change is timestamped for every referral.' },
]

export default function ReferralsPage() {
  const [tab, setTab] = useState<Tab>('outbound')
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
                <span className="rf-wordmark">Referral Network</span>
                <span>INTAKEOS · TORVANA</span>
              </div>
              <div className="rf-headline">
                <h1>A referral network that<br /><em>closes the loop.</em></h1>
                <div>
                  <p>The same Referral Network layer runs in IntakeOS for plaintiff firms and Torvana for specialty medical practices — partner portals, outbound handoffs, agreements and fee tracking without spreadsheets.</p>
                  <button type="button" className="button" onClick={openModal}>
                    See Referral Network in action <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workflow">Follow the outbound flow ↓</a>
                </div>
              </div>
              <div className="rf-hero-shot">
                <BrowserFrame url="app.casecompass.io/referrals">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/referrals-outbound-dashboard.png"
                    width={1600}
                    height={1000}
                    alt="Case Compass outbound referral dashboard — send co-counsel agreement with type-to-sign modal"
                  />
                </BrowserFrame>
              </div>
            </div>
          </section>

          <section className="rf-directions">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">ONE NETWORK. TWO PRODUCTS.</p>
                  <h2>Built for firms.<br /><em>And for practices.</em></h2>
                </div>
                <p>Referral Network is available in IntakeOS and Torvana — shaped to each side of the relationship.</p>
              </div>
              <div className="rf-direction-grid">
                <article className="rf-direction">
                  <span>01 / INTAKEOS</span>
                  <h3>Plaintiff law firms</h3>
                  <p>Accept inbound leads from partner attorneys, refer cases out with co-counsel agreements, and track every fee — in the same intake platform that qualifies and signs clients.</p>
                  <ul>
                    <li>Partner attorney portals for inbound leads</li>
                    <li>Outbound co-counsel agreements &amp; type-to-sign</li>
                    <li>Fee tracking and partner performance reporting</li>
                    <li>Waypoint-triggered auto-referrals</li>
                  </ul>
                  <Link className="rf-direction-link" href="/intakeos">Explore IntakeOS →</Link>
                </article>
                <article className="rf-direction">
                  <span>02 / TORVANA</span>
                  <h3>Specialty medical practices</h3>
                  <p>Give each referring firm a scoped view of its own patients — intake, appointments, records and status — so front desk status calls drop and the referral relationship stays intact.</p>
                  <ul>
                    <li>Referring attorney portal, scoped per firm</li>
                    <li>Live status on intake, scheduling and records</li>
                    <li>No marketplace — your existing relationships</li>
                    <li>Same network layer as IntakeOS when you need outbound loops</li>
                  </ul>
                  <Link className="rf-direction-link" href="/torvana">Explore Torvana →</Link>
                </article>
              </div>
            </div>
          </section>

          <section className="rf-flow" id="workflow">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">FROM CREATE TO FEE</p>
                  <h2>The outbound flow.<br /><em>Held together.</em></h2>
                </div>
                <p>From creating a referral to a fully executed co-counsel agreement — every step in one place.</p>
              </div>
              <ol className="rf-steps">
                <li>
                  <span>01 / CREATE</span>
                  <h3>Create referral</h3>
                  <p>Select a case, choose a partner, set the fee. The partner gets an email instantly.</p>
                </li>
                <li>
                  <span>02 / RESPOND</span>
                  <h3>Partner responds</h3>
                  <p>Accept or decline via email link or portal. Your staff is notified either way.</p>
                </li>
                <li>
                  <span>03 / AGREE</span>
                  <h3>Send agreement</h3>
                  <p>Generate the co-counsel PDF, type-to-sign, and send it in one click.</p>
                </li>
                <li>
                  <span>04 / SIGN</span>
                  <h3>Partner signs</h3>
                  <p>They review and sign in their portal. Both parties get the executed copy.</p>
                </li>
                <li>
                  <span>05 / TRACK</span>
                  <h3>Track the fee</h3>
                  <p>When the case resolves, mark fee owed or paid. The ledger stays current.</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="rf-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">INSIDE THE NETWORK</p>
                  <h2>Built around the work.<br /><em>Right down to the details.</em></h2>
                </div>
                <p>Real product views.<br />One connected referral practice.</p>
              </div>
              <div className="dw-tabs" role="tablist" aria-label="Referral Network features">
                {([
                  { id: 'outbound' as const, label: '01 / Outbound' },
                  { id: 'portal' as const, label: '02 / Partner portal' },
                  { id: 'agreements' as const, label: '03 / Agreements' },
                  { id: 'reporting' as const, label: '04 / Reporting' },
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
                <a className="cc-browser-link" href={feature.img} target="_blank" rel="noopener noreferrer" aria-label="Open full-size product screenshot">
                  <BrowserFrame url="app.casecompass.io/referrals" footer="View full-size product screen ↗">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feature.img} alt={feature.imgAlt} loading="lazy" />
                  </BrowserFrame>
                </a>
              </article>
              <p className="rf-feature-note">{feature.note}</p>
            </div>
          </section>

          <section className="rf-includes">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">EVERYTHING INCLUDED</p>
                  <h2>The network.<br /><em>Fully wired.</em></h2>
                </div>
                <p>Inbound, outbound, agreements, fees and reporting — available in IntakeOS and Torvana without bolting tools together.</p>
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
                <p className="eyebrow">BEFORE YOU BUILD THE NETWORK</p>
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
                  <p>Plaintiff intake — chatbots, webforms, live transfer, and Referral Network.</p>
                </Link>
                <Link href="/torvana">
                  <strong>Torvana →</strong>
                  <p>Specialty practice intake, scheduling, records, and referring-attorney visibility.</p>
                </Link>
                <Link href="/solutions/waypoint">
                  <strong>Waypoint →</strong>
                  <p>Score every referred lead before your team opens the file.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">YOUR NETWORK. YOUR LOOP.</p>
              <h2>Build a referral network<br /><em>that runs itself.</em></h2>
              <div>
                <p>Whether you run IntakeOS or Torvana, we&apos;ll walk through portals, handoffs, agreements and fee tracking for your side of the relationship.</p>
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
