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
import './mass-torts.css'

type Tab = 'waypoint' | 'mdl' | 'referrals' | 'score'

const features: Record<Tab, {
  title: ReactNode
  body: string
  bullets: string[]
  img: string
  imgAlt: string
  note: string
}> = {
  waypoint: {
    title: <>Tort-specific criteria.<br />Applied to every intake.</>,
    body: 'Define what a qualified claimant looks like for each active tort — diagnosis, exposure windows, statutes, product use. Waypoint applies it instantly.',
    bullets: [
      'Custom criteria per form and case type',
      'Pre-built sets for active torts',
      'Scores before anyone opens the file',
    ],
    img: '/images/waypoint-criteria-list.png',
    imgAlt: 'Waypoint tort-specific scoring criteria',
    note: 'Waypoint — tort-specific rubrics',
  },
  mdl: {
    title: <>Every MDL.<br />One portfolio view.</>,
    body: 'Group leads by litigation into named portfolios with live dashboards — counts, AI scores, high-value flags, and status breakdowns.',
    bullets: [
      'Named portfolios per litigation',
      'Score distribution and status charts',
      'One-click CSV export with AI columns',
    ],
    img: '/images/mdl-portfolio-stats.png',
    imgAlt: 'MDL Portfolio stats dashboard',
    note: 'MDL Portfolios — caseload by litigation',
  },
  referrals: {
    title: <>Co-counsel and partners<br />in one network.</>,
    body: 'Give referring attorneys and marketing partners a portal to track leads, statuses, and fees — without clogging your inbox.',
    bullets: [
      'Partner portal for referred leads',
      'Fee tracking built in',
      'Attribution across the campaign',
    ],
    img: '/images/referrals-fees.png',
    imgAlt: 'Referral fee tracking for mass tort partners',
    note: 'Referral Network — partner visibility',
  },
  score: {
    title: <>Thousands of intakes.<br />Clear priorities.</>,
    body: 'Mass tort is a numbers game. Waypoint processes every submission in parallel and surfaces which cases meet your thresholds.',
    bullets: [
      'Parallel scoring at any volume',
      'Written summaries and red flags',
      'Team works best cases first',
    ],
    img: '/images/ai-lead-scoring.png',
    imgAlt: 'AI lead scoring for mass tort intake',
    note: 'Scoring — priority before file open',
  },
}

const faqs = [
  {
    q: 'How does Case Compass handle high-volume mass tort intake?',
    a: 'Case Compass handles intake at any volume — chatbots, webforms, and live transfer channels all feed directly into the same pipeline. The moment a claimant submits, Waypoint AI scores the intake against your tort-specific criteria. Your team sees scores and summaries without manually reviewing every submission.',
  },
  {
    q: 'Can Waypoint score criteria specific to a particular mass tort?',
    a: 'Yes. Waypoint criteria are fully customizable per form and case type. You define what a qualified claimant looks like for your specific tort — exposure duration, diagnosis, statute of limitations, product use dates, and more. Pre-built criteria sets are available for Depo-Provera, Roundup (Glyphosate), and other active mass torts.',
  },
  {
    q: 'How does Case Compass support referral partner networks for mass torts?',
    a: 'Case Compass includes a dedicated Referral Partner Portal where co-counsel, referring attorneys, and marketing partners can log in to track the status of every lead they have referred. Fee tracking, lead attribution, and reporting are all built in.',
  },
  {
    q: 'Which active mass torts does Case Compass support?',
    a: 'Case Compass is currently used for Depo-Provera, Roundup (Glyphosate), and personal injury mass tort campaigns. Because Waypoint criteria are fully custom, firms can build intake scoring for any active or emerging tort in minutes.',
  },
  {
    q: 'Does Case Compass integrate with legal CMS platforms used in mass tort?',
    a: 'Yes. Case Compass integrates with Filevine, Clio, LeadDocket, Litify, and other case management systems. Signed clients push automatically so your team can start working the case without manual data entry.',
  },
  {
    q: 'What is MDL Portfolio Management in Case Compass?',
    a: 'MDL Portfolios let you group all leads related to a specific litigation — by intake form, marketing campaign, or both — into a named portfolio (e.g. "Hair Relaxer MDL 3060"). Each portfolio shows a live dashboard with total leads, AI-scored leads, high-value counts, average scores, a score distribution chart, and a full status breakdown. You can export all portfolio leads to CSV at any time, including AI scores and specific intake node responses as additional columns.',
  },
]

const includes = [
  { title: 'Waypoint scoring per tort', body: 'Custom criteria for diagnosis, exposure, statutes, and product use — applied to every intake automatically.' },
  { title: 'Score thousands, not dozens', body: 'Parallel scoring at campaign volume. Qualified leads surface first; others enter nurture.' },
  { title: 'MDL Portfolio dashboards', body: 'Named portfolios per litigation with counts, scores, high-value flags, and status breakdowns.' },
  { title: 'Referral partner portal', body: 'Co-counsel and marketing partners track leads, status, and fees without email ping-pong.' },
  { title: 'E-signature in-session', body: 'Qualified claimants sign retainers before they leave the intake flow — pre-filled from data.' },
  { title: 'BYOK — your data stays yours', body: 'Waypoint uses your own AI API key. Client data never trains a shared model.' },
  { title: 'Pre-built active tort criteria', body: 'Start faster with Depo-Provera, Roundup, Hair Relaxer, Social Media, and more.' },
  { title: 'CMS sync on sign', body: 'Push signed clients to Filevine, Clio, LeadDocket, Litify, and more — no re-keying.' },
  { title: 'Portfolio CSV export', body: 'Export leads with AI scores and intake node responses as columns anytime.' },
]

const activeTorts = [
  { name: 'Depo-Provera', body: 'Meningioma diagnosis, duration of use, and treatment history.' },
  { name: 'Roundup (Glyphosate)', body: 'NHL diagnosis, occupational exposure, product use timeline, and medical docs.' },
  { name: 'Hair Relaxer (MDL 3060)', body: 'Uterine cancer / fibroids screening with NIH benchmarks and brand matching.' },
  { name: 'Social Media Addiction', body: 'Child and adult injury criteria across emotional harm, physical injury, and more.' },
]

export default function MassTortsPage() {
  const [tab, setTab] = useState<Tab>('waypoint')
  const { openModal } = useDemoModal()
  const feature = features[tab]

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>
      <div className="dw rf mt">
        <main id="main">
          <section className="rf-hero">
            <div className="wrap">
              <div className="rf-lockup">
                <span className="rf-wordmark">Mass Torts</span>
                <span>INTAKEOS · WAYPOINT · MDL</span>
              </div>
              <div className="rf-headline">
                <h1>Score every intake.<br /><em>Manage every MDL.</em></h1>
                <div>
                  <p>Capture high-volume tort campaigns in IntakeOS, score every submission with Waypoint, and organize the caseload into MDL Portfolios — before your team opens a single file.</p>
                  <button type="button" className="button" onClick={openModal}>
                    See it in action <span aria-hidden="true">↗</span>
                  </button>
                  <a className="text-link" href="#workflow">From click to retainer ↓</a>
                </div>
              </div>
              <div className="rf-hero-shot">
                <BrowserFrame url="app.casecompass.io/mdl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/mdl-portfolio-stats.png"
                    width={1600}
                    height={1000}
                    alt="MDL Portfolio management dashboard"
                  />
                </BrowserFrame>
              </div>
            </div>
          </section>

          <section className="rf-directions">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">ACTIVE TORTS</p>
                  <h2>Pre-built criteria<br /><em>for campaigns that move.</em></h2>
                </div>
                <p>Start from tort-specific rubrics — or build your own for any emerging litigation in minutes.</p>
              </div>
              <div className="mt-tort-grid">
                {activeTorts.map((t, i) => (
                  <article key={t.name} className="rf-direction">
                    <span>{String(i + 1).padStart(2, '0')} / ACTIVE</span>
                    <h3>{t.name}</h3>
                    <p>{t.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-pi-note">
                Personal injury campaigns stay always-on — fully configurable criteria for liability, severity, SOL, and more.
              </p>
            </div>
          </section>

          <section className="rf-flow" id="workflow">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">FROM FIRST CLICK</p>
                  <h2>From intake<br /><em>to signed retainer.</em></h2>
                </div>
                <p>Every channel feeds one pipeline. Waypoint ranks. Your team works the best cases first.</p>
              </div>
              <ol className="rf-steps" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <li>
                  <span>01 / CAPTURE</span>
                  <h3>Claimant submits</h3>
                  <p>Chatbot, webform, or live transfer — captured 24/7 into the same pipeline.</p>
                </li>
                <li>
                  <span>02 / SCORE</span>
                  <h3>Waypoint scores instantly</h3>
                  <p>Tort-specific criteria applied the moment intake is complete.</p>
                </li>
                <li>
                  <span>03 / PRIORITIZE</span>
                  <h3>Team works best first</h3>
                  <p>Scores, summaries, and flags surface. Others enter nurture flows.</p>
                </li>
                <li>
                  <span>04 / SIGN</span>
                  <h3>Retainer in-session</h3>
                  <p>Qualified claimants sign digitally. Data syncs to your CMS.</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="rf-workspace" id="workspace">
            <div className="wrap">
              <div className="dw-section-head">
                <div>
                  <p className="eyebrow">AT CAMPAIGN SCALE</p>
                  <h2>Built for the tort.<br /><em>And the portfolio.</em></h2>
                </div>
                <p>Waypoint, MDL Portfolios, referrals, and scoring — in one IntakeOS practice.</p>
              </div>
              <div className="dw-tabs" role="tablist" aria-label="Mass tort features">
                {([
                  { id: 'waypoint' as const, label: '01 / Waypoint' },
                  { id: 'mdl' as const, label: '02 / MDL Portfolios' },
                  { id: 'referrals' as const, label: '03 / Referrals' },
                  { id: 'score' as const, label: '04 / Scoring' },
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
                  <h2>Mass tort at scale.<br /><em>Fully wired.</em></h2>
                </div>
                <p>Scoring, portfolios, partners, and CMS sync — without bolting tools together.</p>
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
                <p className="eyebrow">BEFORE YOU LAUNCH</p>
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
                <Link href="/solutions/waypoint">
                  <strong>Waypoint →</strong>
                  <p>Deep dive into tort-specific scoring before your team opens the file.</p>
                </Link>
                <Link href="/intakeos">
                  <strong>IntakeOS →</strong>
                  <p>Chatbots, webforms, live transfer — the full plaintiff intake flow.</p>
                </Link>
                <Link href="/lp/mdl-intake">
                  <strong>MDL Intake →</strong>
                  <p>Portfolio management, PFS mapping, key dates, and court-ready exports.</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="dw-cta">
            <div className="wrap">
              <p className="eyebrow">RUNNING AN ACTIVE TORT?</p>
              <h2>See Waypoint and MDL<br /><em>on your campaign.</em></h2>
              <div>
                <p>We&apos;ll walk through tort-specific criteria and the full intake-to-retainer flow for the litigations you&apos;re running.</p>
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
