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
    attorney: 'Records and medical chronology are ready to review in the portal.',
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
    name: 'Medical chronology',
    short: 'A timeline that arrives with the records.',
    copy: 'A structured, attorney-readable chronology accompanies the retrieved records. The legal team can review the timeline alongside its source material.',
    icon: FileText,
    rows: ['Records organized', 'Chronology generated', 'Ready for attorney review'],
    tag: 'Attorney view',
    label: 'The story, in order.',
    note: 'Chronology delivered · Ready for review',
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
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [downloaded, setDownloaded] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [screenshotTab, setScreenshotTab] = useState(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  useEffect(() => {
    const handler = () => setModalOpen(true)
    window.addEventListener('torvana:open-modal', handler)
    return () => window.removeEventListener('torvana:open-modal', handler)
  }, [])

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

  async function download() {
    if (!contactName || !contactEmail || !contactPhone || !practice) {
      setSubmitError('Please fill in your name, email, phone and practice name.')
      return
    }
    setSubmitError('')
    setSubmitting(true)
    try {
      await fetch('/api/torvana-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          practiceName: practice,
          challenge,
        }),
      })
    } catch (_e) {
      // non-blocking — still download even if email fails
    }
    const a = document.createElement('a')
    a.href = 'https://p9ymirxlwqlorquv.public.blob.vercel-storage.com/torvana-case-compass-brief.pdf'
    a.download = 'torvana-case-compass-brief.pdf'
    a.target = '_blank'
    a.click()
    setDownloaded(true)
    setSubmitting(false)
  }

  const mod = modules[activeModule]

  return (
    <div className="tv-root">
      <style>{`.tv-root nav[style] { background: rgba(6,13,31,0.97) !important; }`}</style>
      <a className="tv-skip" href="#main">Skip to content</a>
      <Nav />

      <main id="main">

        {/* Hero */}
        <div className="tv-hero-section">
        <section className="tv-hero tv-shell" id="top">
          <div className="tv-hero-copy" style={{ alignSelf: 'flex-start', paddingTop: '8px' }}>
            <div style={{ marginBottom: '16px', marginTop: '-40px' }}>
              <Image
                src="/images/Torvana-Illustrator-Master.svg"
                alt="Torvana"
                width={600}
                height={144}
                unoptimized
                placeholder="empty"
                style={{ width: 'auto', height: '200px' }}
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
        </div>

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

        {/* Custom Intake Portal section */}
        <section className="tv-intake-showcase tv-shell">
          <div className="tv-intake-showcase-inner">
            <div className="tv-intake-showcase-copy">
              <span className="tv-eyebrow"><span />Your brand. Your portal.</span>
              <h2>Intake that looks like<br /><em>your practice.</em></h2>
              <p>Torvana builds a branded intake experience for your center — your logo, your colors, your exam types. It can be embedded on your practice website, shared as a direct link, or sent to patients via text. Patients complete their health history and sign HIPAA authorization before they walk in. No app, no account, no paper.</p>
              <ul className="tv-intake-bullets">
                <li><Check size={14} /> Works in any browser — phone, tablet, or desktop</li>
                <li><Check size={14} /> Exam type, body region, implant screening captured</li>
                <li><Check size={14} /> HIPAA authorization signed and stored</li>
                <li><Check size={14} /> Appointment confirmation writes back to your scheduler</li>
              </ul>
            </div>
            <div className="tv-browser-frame tv-intake-showcase-frame">
              <div className="tv-browser-bar">
                <div className="tv-browser-dots"><span /><span /><span /></div>
                <div className="tv-browser-url"><span className="tv-browser-url-dot" />rochesterimageassociates.com</div>
              </div>
              <img src="/images/torvana-intake-portal.png" alt="Branded patient intake portal — Rochester Image Associates" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Screenshot showcase */}
        <section className="tv-screenshot-section">
          <div className="tv-shell tv-screenshot-inner">
            <p className="tv-screenshot-label">The platform in action</p>
            <div className="tv-screenshot-tabs">
              {[
                'Referring Providers',
                'Medical Records',
                'Workflow Automation',
                'Analytics',
              ].map((label, i) => (
                <button
                  key={label}
                  className={`tv-screenshot-tab${screenshotTab === i ? ' active' : ''}`}
                  onClick={() => setScreenshotTab(i)}
                >
                  {label}
                </button>
              ))}
            </div>
            {screenshotTab === 0 && (
              <div className="tv-browser-frame">
                <div className="tv-browser-bar">
                  <div className="tv-browser-dots"><span /><span /><span /></div>
                  <div className="tv-browser-url"><span className="tv-browser-url-dot" />app.casecompass.io/referring-providers</div>
                </div>
                <img src="/images/torvana-referring-providers.png" alt="Torvana — Referring Providers dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}
            {screenshotTab === 1 && (
              <div className="tv-browser-frame">
                <div className="tv-browser-bar">
                  <div className="tv-browser-dots"><span /><span /><span /></div>
                  <div className="tv-browser-url"><span className="tv-browser-url-dot" />app.casecompass.io/medical-records</div>
                </div>
                <img src="/images/torvana-ai-chronology.png" alt="Torvana — AI medical chronology and records" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}
            {screenshotTab === 2 && (
              <div className="tv-browser-frame">
                <div className="tv-browser-bar">
                  <div className="tv-browser-dots"><span /><span /><span /></div>
                  <div className="tv-browser-url"><span className="tv-browser-url-dot" />app.casecompass.io/timeline-builder</div>
                </div>
                <img src="/images/torvana-timeline-builder.png" alt="Torvana — Intake workflow automation timeline builder" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}
            {screenshotTab === 3 && (
              <div className="tv-browser-frame">
                <div className="tv-browser-bar">
                  <div className="tv-browser-dots"><span /><span /><span /></div>
                  <div className="tv-browser-url"><span className="tv-browser-url-dot" />app.casecompass.io/analytics</div>
                </div>
                <img src="/images/torvana-analytics.png" alt="Torvana — Referral intake analytics and marketing funnel" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}
            <p className="tv-screenshot-caption">
              {screenshotTab === 0 && 'Manage every referring provider and patient in one queue — track intake status, leads and outreach from a single view.'}
              {screenshotTab === 1 && 'Retrieved records are assembled into a dated chronology with record flags, diagnoses and billing totals — delivered back to the referrer automatically.'}
              {screenshotTab === 2 && 'Visual workflow automation for every referral path. Build intake sequences, scheduling triggers, appointment reminders and EHR push steps — no code required.'}
              {screenshotTab === 3 && 'Track intake completion rates, timeline performance and marketing funnel drop-off by referral source — so you know which relationships are working.'}
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
                    <div className="tv-arrow-track"><span className="tv-arrow-dot" /><span className="tv-arrow-tip right" /></div>
                  </div>
                  <div className={`tv-flow-arrow left${flowStep === 3 ? ' active' : ''}`}>
                    <div className="tv-arrow-track"><span className="tv-arrow-tip left" /><span className="tv-arrow-dot" /></div>
                    <span className="tv-arrow-label">Chronology + status</span>
                  </div>
                </div>

                {/* Center: Torvana */}
                <div className="tv-flow-center-box">
                  <div className="tv-flow-center-logo">
                    <Image src="/images/Torvana-Illustrator-Master.svg" alt="Torvana" width={280} height={68} unoptimized placeholder="empty" style={{ width: 'auto', height: '56px', filter: 'brightness(0) invert(1)' }} />
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
                    <div className="tv-arrow-track"><span className="tv-arrow-dot" /><span className="tv-arrow-tip right" /></div>
                  </div>
                  <div className={`tv-flow-arrow left${flowStep === 2 ? ' active' : ''}`}>
                    <div className="tv-arrow-track"><span className="tv-arrow-tip left" /><span className="tv-arrow-dot" /></div>
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

        {/* FAQ */}
        <section className="tv-faq-section tv-shell">
          <div className="tv-faq-grid">
            <div className="tv-faq-grid-aside">
              <span className="tv-eyebrow" style={{ marginBottom: '20px' }}><span />Common questions</span>
              <h2>Everything you<br /><em>want to know.</em></h2>
              <p>Straight answers about how Torvana works, who it&apos;s built for, and what implementation actually looks like.</p>
            </div>
            <div className="tv-faq-list">
              {[
                { q: 'Who is Torvana built for?', a: 'Practices that get meaningful case volume from personal injury attorney referrals. That includes imaging centers, orthopedic practices, surgery centers, and pain management practices. If referring attorneys are a real part of your patient pipeline, Torvana is built around that relationship specifically, not as an afterthought.' },
                { q: 'Does Torvana replace our existing PACS, RIS, or EHR?', a: "No. Torvana runs alongside your existing systems. You keep your PACS, RIS, or EHR, whichever vendor you're on, and Torvana adds the intake, scheduling, and referral layer on top. Integration is scoped to your specific systems during onboarding." },
                { q: "What if our current system doesn't have an open integration option?", a: "We work with what's available. Some vendors have modern APIs, others require a more traditional interface. Either way, our approach is to connect to your existing systems rather than ask you to switch, and we scope that conversation with you directly." },
                { q: 'How does patient intake work?', a: 'Intake runs in any browser — phone, tablet, or desktop. It can be embedded directly on your practice website, shared as a link, or sent to patients as a text message. Patients complete their health history, consent forms, and HIPAA authorization digitally, with e-signature built into the flow. No app to download, no account to create.' },
                { q: 'What do referring attorneys see in the portal?', a: 'Real-time status on their own cases only — intake completion, appointment confirmation, record retrieval status, and lien case status. It replaces phone calls and mailed status requests with self-serve visibility. Each firm only sees their own referred cases.' },
                { q: 'How does medical record retrieval work?', a: 'Once HIPAA authorization is captured at intake, record retrieval is triggered automatically. Torvana targets a 24 to 48 hour turnaround, though actual timing varies by record source. The referring attorney sees retrieval status live.' },
                { q: 'What is the medical chronology?', a: "Once records are retrieved, Torvana generates a chronology document summarizing the patient's treatment history — delivered alongside the records rather than as a separate request." },
                { q: 'Do our patients need to download an app?', a: "No. Intake, scheduling, and the patient portal all run in a mobile browser. There's nothing to install." },
                { q: 'Is Torvana HIPAA compliant?', a: 'Yes. Torvana is built with HIPAA compliance as a core requirement, not an add-on. Business Associate Agreements are in place with every vendor that touches protected health information.' },
                { q: 'How is Torvana priced?', a: "Pricing depends on the number of locations, integration scope, and specific systems involved. We put together a detailed proposal for every practice rather than a one-size-fits-all price, since integration needs vary quite a bit." },
                { q: 'Who is behind Torvana?', a: "Torvana is powered by Case Compass. The team has spent years building intake and case-tracking infrastructure for plaintiff-side law firms, combined with direct experience in healthcare patient intake and referral infrastructure. That combination is why the referring-attorney side of the platform works the way it does." },
                { q: "Does Torvana work for practices that aren't PI-referral-based?", a: "Torvana is purpose-built around the PI attorney referral relationship — lien case tracking, attorney-facing status visibility, and record retrieval automation tied to that workflow. If that's not a meaningful part of your referral base, a general patient engagement platform may be a better fit." },
              ].map(({ q, a }, i) => (
                <div key={i} className="tv-faq-item">
                  <button
                    className="tv-faq-trigger"
                    aria-expanded={faqOpen === i}
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  >
                    {q}
                    <Plus size={18} />
                  </button>
                  {faqOpen === i && <p className="tv-faq-answer">{a}</p>}
                </div>
              ))}
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

            {downloaded ? (
              <>
                <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, #504ce2, #8b87f0)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Check size={24} color="#fff" />
                  </div>
                  <span className="tv-eyebrow" style={{ justifyContent: 'center', marginBottom: '14px' }}>Brief downloaded</span>
                  <h2 className="tv-modal-title" id="tv-modal-title" style={{ marginBottom: '14px' }}>We&apos;ll be in touch.</h2>
                  <p className="tv-modal-desc" style={{ marginBottom: '28px' }}>
                    Your brief is downloading now. Someone from our team will reach out to walk through your practice&apos;s workflow — usually within one business day.
                  </p>
                  <button className="tv-btn-primary" onClick={() => setModalOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>
                    Done <ArrowRight size={17} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="tv-eyebrow">YOUR PRACTICE, IN FOCUS</span>
                <h2 className="tv-modal-title" id="tv-modal-title">Start with the handoffs.</h2>
                <p className="tv-modal-desc">Prepare a short brief for your Torvana walkthrough. We&apos;ll follow up after you download.</p>
                <label>
                  Your name
                  <input value={contactName} onChange={e => setContactName(e.target.value)} placeholder="First and last name" />
                </label>
                <label>
                  Email
                  <input type="email" value={contactEmail} onChange={e => setContactEmail(e.target.value)} placeholder="you@yourpractice.com" />
                </label>
                <label>
                  Phone
                  <input type="tel" value={contactPhone} onChange={e => setContactPhone(e.target.value)} placeholder="(555) 000-0000" />
                </label>
                <label>
                  Practice name
                  <input value={practice} onChange={e => setPractice(e.target.value)} placeholder="Your practice" />
                </label>
                <label>
                  Where does the workflow slow down?
                  <textarea value={challenge} onChange={e => setChallenge(e.target.value)} placeholder="For example: intake completion, attorney status calls, records retrieval…" rows={3} />
                </label>
                {submitError && <p style={{ color: '#dc2626', fontSize: '13px', margin: '0 0 8px' }}>{submitError}</p>}
                <button className="tv-btn-primary" onClick={download} disabled={submitting}>
                  {submitting ? 'Sending…' : 'Download walkthrough brief'} {!submitting && <ArrowRight size={17} />}
                </button>
                <output className="tv-modal-note">Please leave out patient names and case details.</output>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
