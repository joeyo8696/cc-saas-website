'use client'

import Link from 'next/link'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import { useDemoModal } from '@/components/DemoModalProvider'
import './rebrand.css'

const faqs = [
  {
    q: 'Do I need to do anything?',
    a: 'No. No migration, no re-onboarding, no new login.',
  },
  {
    q: 'Is my pricing or contract changing?',
    a: 'No. Your agreement with Case Compass is unaffected — the entity you contracted with hasn\'t changed.',
  },
  {
    q: 'Is Case Compass going away?',
    a: 'No. Case Compass is the company. IntakeOS is its intake platform for plaintiff firms.',
  },
  {
    q: 'Does this affect Torvana or Dwellex?',
    a: 'No. Both are unchanged, and both continue under Case Compass.',
  },
]

const products = [
  {
    name: 'IntakeOS',
    href: '/intakeos',
    label: 'Plaintiff firms',
    body: 'Intake, qualification and conversion for high-volume plaintiff firms. Mass torts, MDL, class actions, workers\' comp, consumer litigation.',
  },
  {
    name: 'Torvana',
    href: '/torvana',
    label: 'Healthcare',
    body: 'Built for medical specialty practices.',
  },
  {
    name: 'Dwellex',
    href: '/dwellex',
    label: 'Landlord-tenant',
    body: 'Case management for landlord-tenant and eviction practices.',
  },
]

export default function IntakeOSRebrandPage() {
  const { openModal } = useDemoModal()

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>

      <div className="rb-root">
        <main id="main">
          <section className="rb-hero">
            <div className="rb-wrap rb-hero-grid">
              <div>
                <p className="rb-eyebrow"><span className="rb-dash" /> A NOTE ON OUR NAME</p>
                <h1>
                  Same platform.<br />
                  <em>Sharper name.</em>
                </h1>
              </div>
              <div className="rb-hero-aside">
                <p>
                  Case Compass&apos; intake platform is now IntakeOS. Same product, same team, same login. What changed is the name on the door — and what that name makes room for.
                </p>
                <div className="rb-hero-actions">
                  <a className="rb-btn" href="mailto:support@casecompass.io?subject=IntakeOS%20rebrand">
                    Talk to your account team <span aria-hidden="true">→</span>
                  </a>
                  <Link className="rb-btn-ghost" href="/intakeos">
                    See what IntakeOS does <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="rb-change">
            <div className="rb-wrap">
              <div className="rb-change-head">
                <p className="rb-eyebrow"><span className="rb-dash" /> WHAT&apos;S CHANGING</p>
                <h2>
                  What&apos;s changing.<br />
                  <em>What isn&apos;t.</em>
                </h2>
              </div>
              <div className="rb-change-grid">
                <article className="rb-change-card">
                  <h3>Changing</h3>
                  <ul>
                    <li>The product name: Case Compass → IntakeOS</li>
                    <li>Page titles, docs, and in-app branding</li>
                    <li>How we talk about the platform in market</li>
                  </ul>
                </article>
                <article className="rb-change-card keep">
                  <h3>Not changing</h3>
                  <ul>
                    <li>Your login, your data, your workflows</li>
                    <li>Your integrations and Clio sync</li>
                    <li>Your pricing and your contract</li>
                    <li>Your point of contact, your implementation team</li>
                    <li>Case Compass. Still the company. Still here.</li>
                  </ul>
                </article>
              </div>
              <p className="rb-reassure">You don&apos;t need to do anything.</p>
            </div>
          </section>

          <section className="rb-story">
            <div className="rb-wrap rb-story-grid">
              <div>
                <p className="rb-eyebrow"><span className="rb-dash" /> WHY INTAKEOS</p>
                <h2>
                  The name was already<br />
                  <em>in the product.</em>
                </h2>
              </div>
              <div className="rb-story-copy">
                <p>
                  For the last two years our own pages described the platform as your firm&apos;s Intake OS — the layer between marketing and case management. Customers repeated it back to us that way on calls. Prospects searched for it that way.
                </p>
                <p>
                  At some point the description was doing more work than the name. So we made it the name.
                </p>
                <p>
                  &ldquo;Case Compass&rdquo; told you we were in legal. It didn&apos;t tell you what the software actually does. IntakeOS does: it&apos;s the system your firm&apos;s front door runs on — intelligent intake across web, SMS and voice; Waypoint AI scoring; live transfer; e-signatures; referral tracking; MDL portfolio dashboards; attribution that closes the loop back to spend.
                </p>
                <p className="rb-emphasis">
                  Not a chatbot. Not a form. An operating system for intake.
                </p>
              </div>
            </div>
          </section>

          <section className="rb-products">
            <div className="rb-wrap">
              <div className="rb-products-head">
                <p className="rb-eyebrow"><span className="rb-dash" /> THE COMPANY</p>
                <h2>
                  One company.<br />
                  <em>Three practices.</em>
                </h2>
                <p>
                  The other half of the reason: we stopped being one product.
                </p>
              </div>
              <p className="rb-company">
                <strong>Case Compass</strong> — the company, and the platform underneath all three.
              </p>
              <div className="rb-product-grid">
                {products.map((product) => (
                  <Link key={product.name} href={product.href} className="rb-product-card">
                    <span>{product.label}</span>
                    <strong>{product.name}</strong>
                    <p>{product.body}</p>
                    <em>Explore {product.name} →</em>
                  </Link>
                ))}
              </div>
              <p className="rb-products-close">
                When everything carried the same name, it wasn&apos;t obvious where intake ended and a practice-specific product began. Now it is. Each product is named for the firm it serves, and Case Compass is free to be what it actually is — the company behind all three.
              </p>
            </div>
          </section>

          <section className="rb-eval">
            <div className="rb-wrap rb-eval-grid">
              <div className="rb-eval-copy">
                <p className="rb-eyebrow"><span className="rb-dash" /> FOR EVALUATORS</p>
                <h2>
                  What this means if<br />
                  <em>you&apos;re evaluating us.</em>
                </h2>
                <p>
                  If you&apos;re a plaintiff firm, IntakeOS is the product. It sits between your marketing spend and your case management system, and it doesn&apos;t replace either one.
                </p>
                <p>
                  No rip and replace. Ever. Your CRM stays. Your case management stays. IntakeOS captures, qualifies and converts every lead before it reaches your team — then hands it off, scored, with the full transcript attached.
                </p>
                <div className="rb-eval-cta">
                  <button type="button" className="rb-btn" onClick={openModal}>
                    Schedule a demo <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
              <ul className="rb-stats">
                <li>
                  <strong>75% chat-to-client conversion</strong>
                  <span>Stern &amp; Cohen</span>
                </li>
                <li>
                  <strong>70% increase in conversions</strong>
                  <span>McCune Law Group</span>
                </li>
                <li>
                  <strong>90% reduction in case acquisition costs</strong>
                  <span>Nationwide mass tort firm</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="rb-faq">
            <div className="rb-wrap rb-faq-grid">
              <div>
                <p className="rb-eyebrow"><span className="rb-dash" /> FAQ</p>
                <h2>
                  Quick answers.<br />
                  <em>No surprises.</em>
                </h2>
              </div>
              <div>
                {faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}
