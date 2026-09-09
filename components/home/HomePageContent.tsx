'use client'

import { useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useDemoModal } from '@/components/DemoModalProvider'
import BrowserFrame from '@/components/ui/BrowserFrame'
import '@/app/home.css'

type Platform = 'intake' | 'torvana' | 'dwellex'

const panels: Record<Platform, {
  eyebrow: string
  title: ReactNode
  body: string
  href: string
  cta: string
  barLabel: string
  img: string
  imgAlt: string
  features: { n: string; h: string; p: string }[]
}> = {
  intake: {
    eyebrow: 'FROM INTEREST TO ENGAGEMENT',
    title: <>A better first step.<br />A stronger pipeline.</>,
    body: 'Give your team qualified leads, consistent case scores and signed retainers—not another inbox to sort through.',
    href: '/intakeos',
    cta: 'Meet IntakeOS',
    barLabel: 'IntakeOS / Your intake workspace',
    img: '/images/intake.png',
    imgAlt: 'Actual IntakeOS inbox with lead and case-management controls',
    features: [
      { n: '01', h: 'Capture the conversation', p: 'Conversational intake, webforms and live transfer.' },
      { n: '02', h: 'Find the right fit', p: "Waypoint scoring built around your firm's criteria." },
      { n: '03', h: 'Close the loop', p: 'E-signatures and a direct handoff to your case tools.' },
    ],
  },
  torvana: {
    eyebrow: 'FROM REFERRAL TO SHARED VISIBILITY',
    title: <>Less chasing.<br />More connected care.</>,
    body: 'Bring patient intake, appointments and records together. Keep referring firms informed without another status call.',
    href: '/torvana',
    cta: 'Meet Torvana',
    barLabel: 'Torvana / Referring providers',
    img: '/images/torvana-dashboard.png',
    imgAlt: 'Actual Torvana referring-provider dashboard',
    features: [
      { n: '01', h: 'Welcome the patient', p: 'Branded mobile intake, health history and consent.' },
      { n: '02', h: 'Coordinate the visit', p: 'Scheduling and recall around your practice.' },
      { n: '03', h: 'Keep partners informed', p: 'Records and case visibility for each referring firm.' },
    ],
  },
  dwellex: {
    eyebrow: 'FROM INTAKE TO POSSESSION',
    title: <>Complex caseloads.<br />Clear next steps.</>,
    body: 'Manage intake, notices, court milestones and client updates in a workspace designed for landlord–tenant law.',
    href: '/dwellex',
    cta: 'Meet Dwellex',
    barLabel: 'Dwellex / Batch notice review',
    img: '/images/dwellex-dashboard.png',
    imgAlt: 'Actual Dwellex batch notice review and document generation workspace',
    features: [
      { n: '01', h: 'Start with complete intake', p: 'Capture property, tenant and supporting documents.' },
      { n: '02', h: 'Prepare the matter', p: 'Batch notices and court-specific workflows.' },
      { n: '03', h: 'See it through', p: 'Tracked milestones, client updates and coordination.' },
    ],
  },
}

export default function HomePageContent() {
  const [active, setActive] = useState<Platform>('intake')
  const productRef = useRef<HTMLElement>(null)
  const { openModal } = useDemoModal()
  const panel = panels[active]

  function selectPlatform(name: Platform, scroll = false) {
    setActive(name)
    if (scroll && productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="hp-root">
      <main id="main">
        {/* Hero */}
        <section className="hp-hero">
          <div className="hp-wrap">
            <div className="hp-hero-top">
              <div>
                <p className="hp-eyebrow"><span className="hp-dash" /> ONE COMPANY. THREE PURPOSE-BUILT PLATFORMS.</p>
                <h1>Smart intake.<br /><span>Connected practices.</span></h1>
              </div>
              <div className="hp-hero-aside">
                <p>From the first conversation to the next critical step. Software that keeps your clients, patients and partners moving forward.</p>
                <a className="hp-quiet-link" href="#product">See the platforms in action <span aria-hidden="true">↓</span></a>
              </div>
            </div>

            <div className="hp-platforms" id="platforms">
              <button type="button" className="hp-platform intake" onClick={() => selectPlatform('intake', true)}>
                <div className="hp-platform-top">
                  <span className="hp-market">PLAINTIFF LAW</span>
                  <span className="hp-circle-arrow" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </div>
                <div className="hp-product-brand">
                  <Image className="hp-intakeos-logo" src="/images/intakeos-logo.png" alt="IntakeOS" width={200} height={37} unoptimized />
                  <span className="hp-byline">by Case Compass</span>
                </div>
                <p>More of the right cases.<br />Less between lead and client.</p>
                <div className="hp-platform-bottom">
                  <span>Qualify. Score. Sign.</span>
                  <span className="hp-view-label">Explore IntakeOS</span>
                </div>
              </button>

              <button type="button" className="hp-platform torvana" onClick={() => selectPlatform('torvana', true)}>
                <div className="hp-platform-top">
                  <span className="hp-market">SPECIALTY HEALTHCARE</span>
                  <span className="hp-circle-arrow" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </div>
                <div className="hp-product-brand">
                  <Image className="hp-torvana-logo" src="/images/Torvana-Illustrator-Master.svg" alt="Torvana" width={185} height={82} unoptimized />
                </div>
                <p>One referral.<br />Everyone on the same page.</p>
                <div className="hp-platform-bottom">
                  <span>Intake. Schedule. Connect.</span>
                  <span className="hp-view-label">Explore Torvana</span>
                </div>
              </button>

              <button type="button" className="hp-platform dwellex" onClick={() => selectPlatform('dwellex', true)}>
                <div className="hp-platform-top">
                  <span className="hp-market">LANDLORD–TENANT LAW</span>
                  <span className="hp-circle-arrow" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </span>
                </div>
                <div className="hp-product-brand">
                  <Image className="hp-dwellex-logo" src="/images/dwellex.png" alt="Dwellex" width={151} height={66} unoptimized />
                </div>
                <p>Your entire eviction practice.<br />A clear path for every matter.</p>
                <div className="hp-platform-bottom">
                  <span>From intake through lockout.</span>
                  <span className="hp-view-label">Explore Dwellex</span>
                </div>
              </button>
            </div>

            <div className="hp-hero-foot">
              <span>Built around the way your practice works.</span>
              <span>Different workflows. The same commitment to progress.</span>
            </div>
          </div>
        </section>

        {/* Product showcase */}
        <section className="hp-product-section hp-wrap" id="product" ref={productRef}>
          <div className="hp-section-heading">
            <div>
              <p className="hp-eyebrow">PURPOSE-BUILT. NOT BOLTED ON.</p>
              <h2>Your workflow.<br /><span>A platform that gets it.</span></h2>
            </div>
            <p>Specialized where it matters.<br />Connected where it counts.</p>
          </div>

          <div className="hp-showcase" data-active={active}>
            <div className="hp-product-tabs" role="tablist" aria-label="Explore the platforms">
              {([
                { id: 'intake' as const, label: 'IntakeOS', sub: 'Plaintiff law' },
                { id: 'torvana' as const, label: 'Torvana', sub: 'Specialty healthcare' },
                { id: 'dwellex' as const, label: 'Dwellex', sub: 'Landlord–tenant law' },
              ]).map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-controls={`panel-${tab.id}`}
                  aria-selected={active === tab.id}
                  tabIndex={active === tab.id ? 0 : -1}
                  onClick={() => selectPlatform(tab.id)}
                >
                  {tab.label} <span>{tab.sub}</span>
                </button>
              ))}
            </div>

            <article className="hp-product-panel" id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`}>
              <div className="hp-product-description">
                <div>
                  <p className="hp-eyebrow hp-accent">{panel.eyebrow}</p>
                  <h3>{panel.title}</h3>
                  <p>{panel.body}</p>
                </div>
                <Link className="hp-quiet-link" href={panel.href}>{panel.cta} <span>↗</span></Link>
              </div>
              <div className="hp-screen-wrap">
                <BrowserFrame url={panel.barLabel}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={panel.img} alt={panel.imgAlt} width={3452} height={1826} />
                </BrowserFrame>
              </div>
              <div className="hp-feature-strip">
                {panel.features.map((f) => (
                  <div key={f.n}>
                    <span>{f.n}</span>
                    <h4>{f.h}</h4>
                    <p>{f.p}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Approach */}
        <section className="hp-approach" id="approach">
          <div className="hp-wrap hp-approach-grid">
            <div>
              <p className="hp-eyebrow">THE THREAD THAT CONNECTS IT ALL</p>
              <h2>The next step<br />shouldn&apos;t be<br /><span>a follow-up email.</span></h2>
              <p className="hp-body-copy">Good software does more than collect information. It gets the right work to the right person—and makes progress visible to everyone who needs it.</p>
              <a href="#contact" className="hp-quiet-link">Let&apos;s look at your workflow <span>↗</span></a>
            </div>
            <div className="hp-handoff">
              <div className="hp-handoff-header">
                <span>ONE HANDOFF, CONNECTED</span>
                <span>Illustrative workflow</span>
              </div>
              <div className="hp-handoff-origin">
                <div className="hp-check">✓</div>
                <div>
                  <span>CLIENT / PATIENT / PARTNER</span>
                  <h3>Intake completed.</h3>
                  <p>The information is in. The next step is ready.</p>
                </div>
              </div>
              <div className="hp-connection">
                <span />
                <p>Rules applied · Work assigned</p>
              </div>
              <div className="hp-handoff-destination">
                <div className="hp-destination-heading">
                  <Image src="/images/cc-logo.png" alt="Case Compass" width={137} height={23} unoptimized />
                  <span>WORKFLOW</span>
                </div>
                <div className="hp-activity">
                  <span className="hp-activity-icon">↗</span>
                  <div>
                    <h4>The team knows what&apos;s next.</h4>
                    <p>One clear action. The context to move it forward.</p>
                  </div>
                </div>
                <div className="hp-activity">
                  <span className="hp-activity-icon">✓</span>
                  <div>
                    <h4>Everyone stays in the loop.</h4>
                    <p>Progress is visible through the right portal.</p>
                  </div>
                </div>
              </div>
              <p className="hp-handoff-note">Configured for the practice. Connected to its people.</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="hp-results hp-wrap" id="results">
          <div className="hp-section-heading">
            <div>
              <p className="hp-eyebrow">REAL PRACTICES. MEASURABLE PROGRESS.</p>
              <h2>A stronger foundation.<br /><span>Results that follow.</span></h2>
            </div>
            <a href="#results" className="hp-quiet-link">See client results <span>↗</span></a>
          </div>
          <div className="hp-metrics">
            <div>
              <span className="hp-metric-label">STERN &amp; COHEN</span>
              <strong>75<span>%</span></strong>
              <p>Chat-to-client conversion</p>
            </div>
            <div>
              <span className="hp-metric-label">MCCUNE LAW GROUP</span>
              <strong>70<span>%</span></strong>
              <p>Increase in conversions</p>
            </div>
            <div>
              <span className="hp-metric-label">NATIONWIDE MASS TORT FIRM</span>
              <strong>90<span>%</span></strong>
              <p>Reduction in case acquisition costs</p>
            </div>
          </div>
          <p className="hp-results-note">Reported results from Case Compass legal-intake programs. Outcomes vary by implementation.</p>
        </section>

        {/* Contact */}
        <section className="hp-contact hp-wrap" id="contact">
          <div>
            <p className="hp-eyebrow">YOUR PRACTICE&apos;S NEXT CHAPTER</p>
            <h2>Built around your work.<br /><span>Ready for what&apos;s next.</span></h2>
            <p>Tell us how your practice runs. We&apos;ll show you where Case Compass can help.</p>
          </div>
          <div className="hp-contact-actions">
            <button type="button" className="hp-button" onClick={openModal}>
              Let&apos;s talk about your practice <span>↗</span>
            </button>
            <Link className="hp-quiet-link" href="/about">Visit Case Compass <span>↗</span></Link>
          </div>
        </section>
      </main>
    </div>
  )
}
