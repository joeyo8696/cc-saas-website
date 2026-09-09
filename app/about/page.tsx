'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import { useDemoModal } from '@/components/DemoModalProvider'
import './about.css'

export default function AboutPage() {
  const { openModal } = useDemoModal()

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <AnnouncementBanner />
        <Nav />
      </div>

      <div className="ab-root">
        <main id="main">
          {/* Hero */}
          <section className="ab-hero">
            <div className="ab-wrap">
              <div className="ab-hero-grid">
                <div>
                  <p className="ab-eyebrow"><span className="ab-dash" /> ABOUT CASE COMPASS</p>
                  <h1>
                    Built on intake.<br />
                    <em>Expanding where it matters.</em>
                  </h1>
                </div>
                <div className="ab-hero-aside">
                  <p>
                    Redefining intake as the engine of growth — for plaintiff firms, specialty medical practices, and landlord–tenant law.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="ab-mission">
            <div className="ab-wrap ab-mission-inner">
              <div>
                <p className="ab-eyebrow"><span className="ab-dash" /> THE THREAD</p>
                <h2>
                  Intake is the engine.<br />
                  <em>Every practice has one.</em>
                </h2>
              </div>
              <div className="ab-mission-copy">
                <p>
                  Case Compass started with a simple conviction: intake is the most underleveraged lever in a plaintiff firm&apos;s business. The firms who get it right — who qualify faster, sign faster, and lose fewer leads to friction — win. We built IntakeOS around that thesis, and it works. Tens of thousands of intakes. Mass torts, mass arbitration, personal injury. Growing without adding headcount.
                </p>
                <p>
                  Then we looked at what our team actually knew. Joey spent years building intake and patient-flow infrastructure in healthcare — first as Co-Founder &amp; CTO at CHESS Health, then as VP of Engineering at Talkiatry. The problems he saw there were the same ones he solved in legal: disconnected systems, manual handoffs, lost patients at every step. That background didn&apos;t just inform Torvana — it made it inevitable.
                </p>
                <p>
                  Torvana brings that same intake-first thinking to specialty medical practices that work with personal injury attorney referrals. Dwellex does the same for landlord–tenant law. The platform changes. The problem doesn&apos;t: every high-volume, relationship-driven practice needs intake that actually works — connecting the client, patient, or partner from the very first touch.
                </p>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="ab-team">
            <div className="ab-wrap">
              <p className="ab-eyebrow"><span className="ab-dash" /> MEET THE TEAM</p>
              <h2>Leadership.<br /><em>Built for this problem.</em></h2>

              <article className="ab-leader">
                <Image
                  className="ab-leader-photo"
                  src="/images/joey-organisciak.png"
                  alt="Joey Organisciak"
                  width={220}
                  height={220}
                />
                <div>
                  <span className="ab-role">CEO &amp; Co-Founder</span>
                  <h3>Joey Organisciak</h3>
                  <Link
                    className="ab-linkedin"
                    href="https://www.linkedin.com/in/joseph-o-78664793/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </Link>
                  <p>
                    Joey joined Case Compass in 2024 as part of the new management team and has been leading the company&apos;s expansion from a legal intake platform into a multi-vertical intake infrastructure company. Before Case Compass, he served as Co-Founder &amp; CTO at CHESS Health — a provider of evidence-based digital health solutions that empower providers, health plans, and public sector organizations to tackle substance use disorder — and as VP of Engineering at Talkiatry, scaling multidisciplinary engineering teams through rapid growth in highly regulated healthcare environments. That background is not incidental. The same problems he solved in healthcare patient flow — fragmented intake, manual handoffs, records that don&apos;t move — are the ones Torvana is built to eliminate for specialty medical practices.
                  </p>
                  <p>
                    Joey came into Case Compass with the conviction that intake is the most underleveraged lever in any relationship-driven, high-volume business. The firms and practices who get it right will define the next decade of their industries. IntakeOS, Torvana, and Dwellex are each built on that thesis — with intake at the core.
                  </p>
                </div>
              </article>

              <article className="ab-leader">
                <Image
                  className="ab-leader-photo"
                  src="/images/bill-tilley.png"
                  alt="Bill Tilley"
                  width={220}
                  height={220}
                />
                <div>
                  <span className="ab-role">CFO &amp; Co-Founder</span>
                  <h3>Bill Tilley</h3>
                  <Link
                    className="ab-linkedin"
                    href="https://www.linkedin.com/in/billtilley/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </Link>
                  <p>
                    Bill is the CFO and Co-Founder of Case Compass, bringing over 17 years of litigation finance expertise as President and CEO of Amicus Capital Group. He has structured and deployed capital across hundreds of plaintiff law firms, giving him a rare vantage point on what separates high-performing practices from the rest. Bill also founded PractiPulse™ and Inspire Legal Group Ltd, and brings a practitioner&apos;s understanding of law firm economics, growth, and the operational challenges that Case Compass is built to solve.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* AI approach */}
          <section className="ab-ai">
            <div className="ab-wrap">
              <div className="ab-ai-head">
                <p className="ab-eyebrow"><span className="ab-dash" /> OUR APPROACH TO AI</p>
                <h2>
                  AI is a tool.<br />
                  <em>Your team is the judgment.</em>
                </h2>
                <p>
                  We believe AI in intake should be honest about what it can and can&apos;t do — and designed accordingly.
                </p>
              </div>

              <div className="ab-ai-grid">
                <div className="ab-ai-card">
                  <h3>Where AI genuinely helps</h3>
                  {[
                    { title: 'Speed at scale', body: 'AI handles thousands of simultaneous intake conversations without fatigue, delay, or inconsistency — 24/7, across every channel.' },
                    { title: 'Consistent qualification', body: 'Every lead gets evaluated against the same criteria, every time. No variation based on who took the call or how busy the office was.' },
                    { title: 'Pattern recognition', body: 'Waypoint surfaces signals across intake data that humans would miss at volume — flagging strong cases, weak documentation, and red flags automatically.' },
                    { title: 'Removing low-value work', body: "Routing, scheduling, follow-ups, and status updates don't need a human. AI handles the logistics so your team focuses on decisions that matter." },
                  ].map(({ title, body }) => (
                    <div className="ab-ai-item" key={title}>
                      <strong>{title}</strong>
                      <p>{body}</p>
                    </div>
                  ))}
                </div>

                <div className="ab-ai-card warn">
                  <h3>Where AI falls short</h3>
                  {[
                    { title: 'Nuance and context', body: "AI can miss the human context behind an intake — grief, urgency, confusion. It doesn't replace the empathy a skilled specialist brings to a sensitive conversation." },
                    { title: 'Novel situations', body: "AI is trained on patterns. Unusual case types, edge-case fact patterns, or jurisdictional nuances can trip up models that haven't seen enough examples." },
                    { title: 'Final case decisions', body: 'Whether to take a case is a legal and business judgment. AI can inform it — with scores, flags, and summaries — but it should never make that call alone.' },
                    { title: 'Client trust', body: 'People seeking help are often in difficult moments. A purely automated experience can feel cold. The right handoff to a human, at the right time, matters.' },
                  ].map(({ title, body }) => (
                    <div className="ab-ai-item" key={title}>
                      <strong>{title}</strong>
                      <p>{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ab-principle">
                <p className="ab-eyebrow"><span className="ab-dash" /> OUR DESIGN PRINCIPLE</p>
                <h3>
                  Human-in-the-loop is not a fallback.<br />
                  <em>It&apos;s the architecture.</em>
                </h3>
                <p>
                  Every Case Compass workflow is designed so AI handles volume, consistency, and speed — while your team retains full visibility, override authority, and final judgment. Scores are transparent. Criteria are configurable. Nothing is a black box. We built it this way because the practices that win long-term use AI to amplify their team, not replace it.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="ab-vision">
            <div className="ab-wrap">
              <p className="ab-eyebrow"><span className="ab-dash" /> OUR VISION</p>
              <h2>
                Where we&apos;re going.<br />
                <em>What stays constant.</em>
              </h2>
              <p className="ab-vision-intro">
                Case Compass started with legal intake and proved the model. Now we&apos;re applying it everywhere that intake is broken. Our direction is clear:
              </p>

              <ul className="ab-vision-list">
                {[
                  'Keep legal intake at the core — and keep making it faster, smarter, and more configurable than anything else in the market.',
                  'Expand Torvana as the intake and referral layer for specialty medical practices — built on the same infrastructure, shaped by years of healthcare experience.',
                  'Grow Dwellex into the intake and workflow layer for landlord–tenant law — same thesis, different practice.',
                  'Scale every platform across web, SMS, and voice with compliance, data ownership, and full client control at the foundation.',
                ].map((item, i) => (
                  <li key={item}>
                    <span className="ab-vision-num">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="ab-quote">
                We&apos;re not building vertical software. We&apos;re building intake infrastructure — and applying it to every practice where intake is the difference between growth and stagnation.
              </blockquote>
            </div>
          </section>

          {/* CTA */}
          <section className="ab-cta">
            <div className="ab-wrap">
              <div className="ab-cta-box">
                <div>
                  <p className="ab-eyebrow"><span className="ab-dash" /> NEXT STEP</p>
                  <h2>
                    Ready to transform<br />
                    <em>your intake?</em>
                  </h2>
                  <p>
                    Schedule a demo and see how Case Compass can help your firm or practice scale without adding headcount.
                  </p>
                </div>
                <div className="ab-cta-actions">
                  <button type="button" className="ab-button" onClick={openModal}>
                    Schedule a Demo <span>↗</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}
