'use client'
import './torvana.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight, ArrowRight, Check, LockKeyhole,
  Pause, Play, Plus, Minus, FileText, CalendarDays,
  Smartphone, Bell, X,
} from 'lucide-react'
import Footer from '@/components/Footer'
import Nav from '@/components/nav/Nav'

const stages = [
  {
    label: 'Intake',
    title: 'Ready before arrival.',
    patient: 'Your intake link is ready. Complete your forms on your phone.',
    reply: 'All done. See you Thursday!',
    status: 'Intake completed',
    detail: 'History, consent and signature received.',
    attorney: 'Patient intake is complete.',
    time: '9:04 AM',
  },
  {
    label: 'Scheduling',
    title: 'Confirmed on both sides.',
    patient: 'Your appointment is confirmed for Thursday at 10:30 AM.',
    reply: 'Confirmed. Thank you!',
    status: 'Appointment confirmed',
    detail: 'Thursday · 10:30 AM · Imaging',
    attorney: 'Appointment confirmed. Your case is up to date.',
    time: '9:12 AM',
  },
  {
    label: 'Records',
    title: 'The next step, already moving.',
    patient: 'Your signed authorization is securely on file.',
    reply: 'One less thing to follow up on.',
    status: 'Records retrieved',
    detail: 'Authorized records added to the case.',
    attorney: 'Records and medical chronology are ready to review.',
    time: 'Next day',
  },
]

const modules = [
  {
    name: 'Mobile patient intake',
    short: 'A link. A passcode. Done.',
    copy: 'Patients complete health history, consent and e-signatures on their phone, before they arrive. No new password to remember.',
    icon: Smartphone,
    rows: ['One-time passcode verified', 'Health history completed', 'Consent signed'],
    tag: 'Patient view',
    label: 'You\'re ready for your visit.',
    note: 'Your forms have been received securely.',
  },
  {
    name: 'Scheduling & confirmation',
    short: 'One confirmation. Both sides informed.',
    copy: 'Your front desk confirms or cancels appointment requests. The referring firm sees the updated status automatically.',
    icon: CalendarDays,
    rows: ['Appointment requested', 'Front desk confirmed', 'Referring firm updated'],
    tag: 'Practice view',
    label: 'Thursday, 10:30 AM',
    note: 'Appointment confirmed · Imaging',
  },
  {
    name: 'Automated recall',
    short: 'Follow-up stays on the calendar.',
    copy: 'Set rules for annual scans and ongoing care. Timed SMS and portal reminders keep follow-up moving without a separate tracking sheet.',
    icon: Bell,
    rows: ['Annual recall rule set', 'Reminder scheduled', 'Patient notified'],
    tag: 'Recall workflow',
    label: 'Time for your next visit.',
    note: 'Annual low-dose CT · Example reminder',
  },
  {
    name: 'Referring attorney portal',
    short: 'The answer is already in the portal.',
    copy: 'Give each referring firm a dedicated view of its own cases: intake, appointments, records and lien status. Your front desk gets fewer status calls.',
    icon: LockKeyhole,
    rows: ['Intake complete', 'Appointment confirmed', 'Records available', 'Lien status: open'],
    tag: 'Referring firm view',
    label: 'Every case. A clear next step.',
    note: 'Access scoped to this firm\'s referrals.',
  },
  {
    name: 'Authorization & records',
    short: 'From signed consent to retrieved records.',
    copy: 'Capture HIPAA authorization during intake and connect it to record retrieval through DataVant and Digital Owl. Target turnaround: 24–48 hours.',
    icon: FileText,
    rows: ['Authorization captured', 'Records requested', 'Records retrieved'],
    tag: 'Records workflow',
    label: 'The paperwork moves forward.',
    note: 'Timing depends on the source and integration.',
  },
  {
    name: 'Medical chronology',
    short: 'A timeline that arrives with the records.',
    copy: 'An AI-generated, attorney-readable chronology accompanies the retrieved records. The legal team can review the timeline alongside its source material.',
    icon: FileText,
    rows: ['Records organized', 'Chronology generated', 'Ready for attorney review'],
    tag: 'Attorney view',
    label: 'The story, in order.',
    note: 'Generated chronology · Ready for review',
  },
]

function Brand({ white = false }: { white?: boolean }) {
  return (
    <a className="tv-brand" href="#top" aria-label="Torvana home">
      <Image
        src="/images/Torvana-Illustrator-Master.svg"
        alt="Torvana — Powered by Case Compass"
        width={200}
        height={48}
        unoptimized
        placeholder="empty"
        style={{ width: 'auto', height: white ? '36px' : '40px', filter: white ? 'brightness(0) invert(1)' : 'none' }}
      />
    </a>
  )
}

function ReferralDemo() {
  const [stage, setStage] = useState(0)
  const [playing, setPlaying] = useState(true)
  useEffect(() => {
    if (!playing || (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) return
    const t = setInterval(() => setStage(s => (s + 1) % 3), 6500)
    return () => clearInterval(t)
  }, [playing])
  const s = stages[stage]
  return (
    <div className="tv-referral-demo" aria-label="Interactive example referral workflow">
      <div className="tv-demo-meta">
        <span><i /> ONE REFERRAL, CONNECTED</span>
        <span>Illustrative workflow</span>
      </div>
      <div className="tv-demo-stage" key={stage}>
        <div>
          <div className="tv-thread-label">
            <span className="tv-avatar">JD</span>
            <div>Patient <small>Secure intake · SMS reminders</small></div>
          </div>
          <div className="tv-message incoming">
            {s.patient}
            <small>Torvana · {s.time}</small>
          </div>
          <div className="tv-message outgoing">
            {s.reply}<Check size={13} />
          </div>
        </div>
        <div className="tv-sync-line">
          <span /><small>STATUS SYNCED</small><span />
        </div>
        <div className="tv-practice-update">
          <span className="tv-check-disc"><Check size={18} /></span>
          <div>
            <strong>{s.status}</strong>
            <p>{s.detail}</p>
          </div>
          <span className="tv-tiny-label">Practice</span>
        </div>
        <div className="tv-attorney-message">
          <div className="tv-thread-label">
            <span className="tv-avatar firm">HL</span>
            <div>Referring firm <small>Case #1048 · Example case</small></div>
            <LockKeyhole size={15} />
          </div>
          <p>{s.attorney}</p>
          <div className="tv-case-bottom">
            <span className="tv-status-tag"><Check size={12} /> Up to date</span>
            <span>View case <ArrowUpRight size={14} /></span>
          </div>
        </div>
      </div>
      <div className="tv-demo-controls">
        <div className="tv-stage-buttons">
          {stages.map((x, i) => (
            <button
              key={x.label}
              className={stage === i ? 'active' : ''}
              onClick={() => { setStage(i); setPlaying(false) }}
              aria-pressed={stage === i}
            >
              <span>0{i + 1}</span>{x.label}
            </button>
          ))}
        </div>
        <button className="tv-icon-button" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pause animation' : 'Play animation'}>
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    </div>
  )
}

export default function TorvanaPage() {
  const [activeModule, setActiveModule] = useState(3)
  const [compareMode, setCompareMode] = useState<'before' | 'connected'>('connected')
  const [workflowStage, setWorkflowStage] = useState(0)
  const [flowStep, setFlowStep] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [practice, setPractice] = useState('')
  const [challenge, setChallenge] = useState('')
  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    if (compareMode !== 'connected') return
    const t = setInterval(() => setWorkflowStage(s => (s + 1) % 3), 4000)
    return () => clearInterval(t)
  }, [compareMode])

  useEffect(() => {
    const t = setInterval(() => setFlowStep(s => (s + 1) % 4), 2200)
    return () => clearInterval(t)
  }, [])

  const ws = stages[workflowStage]

  function download() {
    const blob = new Blob([
      `TORVANA — WALKTHROUGH BRIEF\n\nPractice: ${practice || 'To discuss'}\nWorkflow priorities: ${challenge || 'Intake, scheduling, attorney status visibility and record retrieval.'}\n\nDiscussion points\n• Current referral volume and referring firms\n• Existing PACS, RIS or EHR\n• Intake, scheduling and records handoffs\n• Firm-level case access and lien tracking\n• Integration scope and next steps\n`,
    ], { type: 'text/plain' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'torvana-walkthrough-brief.txt'
    a.click()
    URL.revokeObjectURL(a.href)
    setDownloaded(true)
  }

  const mod = modules[activeModule]

  return (
    <div className="tv-root">
      <style>{`.tv-root nav[style] { background: rgba(6,13,31,0.97) !important; }`}</style>
      <a className="tv-skip" href="#main">Skip to content</a>
      <Nav />

      <main id="main">

        {/* Hero */}
        <section className="tv-hero tv-shell" id="top">
          <div className="tv-hero-copy">
            <div style={{ marginBottom: '28px' }}>
              <Image
                src="/images/Torvana-Illustrator-Master.svg"
                alt="Torvana"
                width={240}
                height={58}
                unoptimized
                placeholder="empty"
                style={{ width: 'auto', height: '120px' }}
              />
            </div>
            <div className="tv-eyebrow"><span /> Connected Care. Clear Progress.</div>
            <h1>The referral moves.<br /><em>Everyone knows.</em></h1>
            <p className="tv-hero-lede">
              Connect your patients, your practice and the attorneys who refer to you. From the first intake form to the latest case update.
            </p>
            <div className="tv-hero-actions">
              <button className="tv-btn-primary" onClick={() => setModalOpen(true)}>
                Let&apos;s talk about your practice <ArrowUpRight size={19} />
              </button>
              <a className="tv-text-link" href="#workflow">
                Follow a referral <ArrowRight size={17} />
              </a>
            </div>
            <div className="tv-hero-proof">
              <LockKeyhole size={14} />
              <span>HIPAA-compliant workflows</span>
              <b>·</b>
              <span>Alongside your existing systems</span>
            </div>
          </div>
          <ReferralDemo />
        </section>

        {/* Specialties */}
        <div className="tv-shell">
          <div className="tv-specialties" aria-label="Specialties">
            <span>BUILT AROUND<br />SPECIALTY CARE</span>
            <div>Imaging centers</div>
            <div>Orthopedics</div>
            <div>Surgery centers</div>
            <div>Pain management</div>
          </div>
        </div>

        {/* Workflow */}
        <section className="tv-workflow-section" id="workflow">
          <div className="tv-shell">
            <div className="tv-section-top">
              <span className="tv-eyebrow light">01 / THE HANDOFF</span>
              <span className="tv-section-aside">Fewer interruptions. More visibility.</span>
            </div>
            <div className="tv-workflow-grid">
              <div>
                <h2>A status update<br />shouldn&apos;t take<br /><em>a phone call.</em></h2>
                <p>When information stops, everyone starts chasing. Torvana turns the handoff into a shared, visible next step.</p>
                <div className="tv-compare-tabs">
                  <div className="tv-tab-list" role="tablist">
                    <button
                      role="tab"
                      className={`tv-tab-trigger${compareMode === 'before' ? ' active' : ''}`}
                      onClick={() => setCompareMode('before')}
                      aria-selected={compareMode === 'before'}
                    >
                      The usual back-and-forth
                    </button>
                    <button
                      role="tab"
                      className={`tv-tab-trigger${compareMode === 'connected' ? ' active' : ''}`}
                      onClick={() => setCompareMode('connected')}
                      aria-selected={compareMode === 'connected'}
                    >
                      With Torvana
                    </button>
                  </div>
                  <p className="tv-compare-caption">
                    {compareMode === 'before'
                      ? 'Separate conversations. The same unanswered question.'
                      : 'One update from the practice. Visibility for the referring firm.'}
                  </p>
                </div>
              </div>
              <div className={`tv-conversation${compareMode === 'connected' ? ' tv-connected' : ''}`} key={compareMode}>
                {compareMode === 'before' ? (
                  <>
                    <div className="tv-conversation-head"><span className="tv-activity-dot" /> THE STATUS CHASE</div>
                    <div className="tv-bubble b1"><small>REFERRING FIRM</small>&ldquo;Has our client been scheduled?&rdquo;</div>
                    <div className="tv-bubble b2"><small>FRONT DESK</small>&ldquo;Let me check and call you back.&rdquo;</div>
                    <div className="tv-bubble b3"><small>REFERRING FIRM · LATER</small>&ldquo;Just following up on the records…&rdquo;</div>
                    <div className="tv-conversation-note">Another call. Another interruption.</div>
                  </>
                ) : (
                  <>
                    <div className="tv-conversation-head"><span className="tv-activity-dot" /> THE CONNECTED HANDOFF</div>
                    <div className="tv-workflow-stage-pills">
                      {stages.map((x, i) => (
                        <button
                          key={x.label}
                          className={`tv-stage-pill${workflowStage === i ? ' active' : ''}`}
                          onClick={() => { setWorkflowStage(i) }}
                        >
                          <span>{i + 1}</span>{x.label}
                        </button>
                      ))}
                    </div>
                    <div className="tv-bubble tv-b1" key={`b1-${workflowStage}`}>
                      <small>PRACTICE</small>
                      <Check size={17} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 6 }} />
                      {ws.status}
                    </div>
                    <div className="tv-connection-pulse"><span /><span /><span /></div>
                    <div className="tv-bubble tv-b2" key={`b2-${workflowStage}`}>
                      <small>REFERRING ATTORNEY PORTAL</small>
                      {ws.attorney}
                      <div className="tv-mini-row"><span>Status</span><strong>Up to date <Check size={14} /></strong></div>
                      <div className="tv-mini-row"><span>Stage</span><strong>{ws.label}</strong></div>
                    </div>
                    <div className="tv-conversation-note"><LockKeyhole size={14} /> Each firm sees only its own cases.</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Portal screenshot */}
        <section className="tv-screenshot-section">
          <div className="tv-shell tv-screenshot-inner">
            <p className="tv-screenshot-label">Referring Attorney Portal — Patient Status View</p>
            <div className="tv-screenshot-frame">
              <Image
                src="/images/referrer-portal.png"
                alt="Torvana referring attorney portal — real-time patient intake and appointment status"
                width={1080}
                height={620}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
            <p className="tv-screenshot-caption">
              Referring attorneys see intake status, confirmed appointments and record availability for every patient they referred — scoped to their firm only.
            </p>
          </div>
        </section>

        {/* Platform */}
        <section className="tv-platform tv-shell" id="platform">
          <div className="tv-section-top">
            <span className="tv-eyebrow">02 / THE PLATFORM</span>
            <span className="tv-section-aside">Six modules. One connected workflow.</span>
          </div>
          <div className="tv-section-heading">
            <h2>Every step has<br /><em>somewhere to go.</em></h2>
            <p>From intake to chronology, each completed task moves the next one forward.</p>
          </div>
          <div className="tv-module-tabs">
            <div className="tv-module-list" role="tablist">
              {modules.map((m, i) => (
                <button
                  key={m.name}
                  role="tab"
                  className={`tv-module-trigger${activeModule === i ? ' active' : ''}`}
                  onClick={() => setActiveModule(i)}
                  aria-selected={activeModule === i}
                >
                  <span className="tv-module-number">0{i + 1}</span>
                  <span>{m.name}</span>
                  <span className="tv-module-plus">
                    {activeModule === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              ))}
            </div>
            <div className="tv-module-panels">
              <div className="tv-module-content" key={activeModule}>
                <div className="tv-module-copy">
                  <mod.icon size={24} strokeWidth={1.4} />
                  <h3>{mod.short}</h3>
                  <p>{mod.copy}</p>
                </div>
                <div className="tv-module-ui">
                  <div className="tv-ui-top">
                    <span>{mod.tag}</span>
                    <span>EXAMPLE</span>
                  </div>
                  <h4>{mod.label}</h4>
                  <p>{mod.note}</p>
                  <div className="tv-module-rows">
                    {mod.rows.map((r, j) => (
                      <div
                        className="tv-module-row"
                        key={r}
                        style={{ animationDelay: `${j * 100}ms` }}
                      >
                        <span><Check size={14} /></span>
                        {r}
                        {j === mod.rows.length - 1 && <small>Current</small>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="tv-fit-section" id="fit">
          <div className="tv-shell">
            <div className="tv-section-top">
              <span className="tv-eyebrow">03 / YOUR PRACTICE, CONNECTED</span>
            </div>
            <div className="tv-fit-grid">
              <div>
                <h2>Your relationships.<br /><em>Your workflow.</em></h2>
                <p>A branded portal for the practice you&apos;ve built, shaped around the referral relationships you already have.</p>
              </div>
              <div className="tv-principles">
                <article>
                  <span>01</span>
                  <div>
                    <h3>The portal belongs to your practice.</h3>
                    <p>Your branding, your referring firms, your cases. No referral marketplace or network-access model.</p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h3>Built with both sides in mind.</h3>
                    <p>Experience in patient intake and referral infrastructure, alongside case tracking for plaintiff-side law firms.</p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h3>Your core systems stay in place.</h3>
                    <p>Torvana runs alongside your PACS, RIS or EHR. Integration is scoped around your practice&apos;s setup.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="tv-flow-diagram">
              <div className="tv-flow-diagram-label">HOW IT WORKS — ONE LOOP AROUND THE VISIT</div>
              <div className="tv-flow-row">

                {/* Left: Referral Sources */}
                <div className="tv-flow-side-box">
                  <div className="tv-flow-box-title">REFERRAL SOURCES</div>
                  <ul className="tv-flow-list">
                    <li>Attorney firms</li>
                    <li>Referring providers</li>
                    <li>Case &amp; records status</li>
                  </ul>
                </div>

                {/* Left arrows */}
                <div className="tv-flow-arrows-col">
                  <div className={`tv-flow-arrow right${flowStep === 0 ? ' active' : ''}`}>
                    <span className="tv-arrow-label">Refers patient</span>
                    <div className="tv-arrow-track"><span className="tv-arrow-dot" /><span className="tv-arrow-head">›</span></div>
                  </div>
                  <div className={`tv-flow-arrow left${flowStep === 3 ? ' active' : ''}`}>
                    <div className="tv-arrow-track"><span className="tv-arrow-head-l">‹</span><span className="tv-arrow-dot" /></div>
                    <span className="tv-arrow-label">Chronology + status</span>
                  </div>
                </div>

                {/* Center: Torvana */}
                <div className="tv-flow-center-box">
                  <div className="tv-flow-center-logo">
                    <Image src="/images/Torvana-Illustrator-Master.svg" alt="Torvana" width={140} height={34} unoptimized placeholder="empty" style={{ width: 'auto', height: '28px', filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <div className="tv-flow-modules-grid">
                    {[
                      { name: 'Referral Portal', step: 0 },
                      { name: 'Intake Chatbot', step: 0 },
                      { name: 'HIPAA Auth + E-Sign', step: null },
                      { name: 'Scheduling + Recall', step: 1 },
                      { name: 'Record Retrieval', step: 2 },
                      { name: 'AI Chronology', step: 3 },
                    ].map(m => (
                      <div key={m.name} className={`tv-flow-module${flowStep === m.step ? ' active' : ''}`}>
                        {m.name}
                      </div>
                    ))}
                  </div>
                  <div className="tv-flow-center-note">Writes back to your scheduling system, PACS, or RIS — nothing gets replaced</div>
                </div>

                {/* Right arrows */}
                <div className="tv-flow-arrows-col">
                  <div className={`tv-flow-arrow right${flowStep === 1 ? ' active' : ''}`}>
                    <span className="tv-arrow-label">Books + intakes</span>
                    <div className="tv-arrow-track"><span className="tv-arrow-dot" /><span className="tv-arrow-head">›</span></div>
                  </div>
                  <div className={`tv-flow-arrow left${flowStep === 2 ? ' active' : ''}`}>
                    <div className="tv-arrow-track"><span className="tv-arrow-head-l">‹</span><span className="tv-arrow-dot" /></div>
                    <span className="tv-arrow-label">Sends records</span>
                  </div>
                </div>

                {/* Right: Your Center */}
                <div className="tv-flow-side-box">
                  <div className="tv-flow-box-title">YOUR CENTER</div>
                  <ul className="tv-flow-list">
                    <li>Patient intake</li>
                    <li>Scheduling system</li>
                    <li>Follow-up recall</li>
                    <li>Medical records</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="tv-contact tv-shell" id="contact">
          <span className="tv-eyebrow">LET&apos;S LOOK AT YOUR WORKFLOW</span>
          <div>
            <h2>Less chasing.<br /><em>More moving forward.</em></h2>
            <div>
              <p>Bring your referral volume, your current systems and the handoffs that slow your team down. We&apos;ll start there.</p>
              <button className="tv-btn-primary" onClick={() => setModalOpen(true)}>
                Let&apos;s talk about your practice <ArrowUpRight size={19} />
              </button>
              <small>A conversation built around your practice.</small>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Walkthrough modal */}
      {modalOpen && (
        <div className="tv-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="tv-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal aria-labelledby="tv-modal-title">
            <button className="tv-modal-close" onClick={() => setModalOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
            <span className="tv-eyebrow">YOUR PRACTICE, IN FOCUS</span>
            <h2 className="tv-modal-title" id="tv-modal-title">Start with the handoffs.</h2>
            <p className="tv-modal-desc">Prepare a short brief for your Torvana walkthrough. Nothing here is submitted or sent.</p>
            <label>
              Practice name
              <input value={practice} onChange={e => setPractice(e.target.value)} placeholder="Your practice" />
            </label>
            <label>
              Where does the workflow slow down?
              <textarea value={challenge} onChange={e => setChallenge(e.target.value)} placeholder="For example: intake completion, attorney status calls, records retrieval…" rows={3} />
            </label>
            <button className="tv-btn-primary" onClick={download}>
              {downloaded ? 'Download brief again' : 'Download walkthrough brief'} <ArrowRight size={17} />
            </button>
            <output className="tv-modal-note">
              {downloaded
                ? 'Your brief is ready to bring to your conversation with Case Compass.'
                : 'Please leave out patient names and case details.'}
            </output>
          </div>
        </div>
      )}
    </div>
  )
}
