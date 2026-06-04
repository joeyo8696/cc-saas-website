'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  PhoneCall, PhoneIncoming, PhoneOutgoing, Users, BarChart3,
  ClipboardList, Clock, Zap, CheckCircle, ArrowRight,
  Headphones, TrendingUp, Calendar, Radio, Shield, Target,
  Activity, Bell, Star, ChevronRight,
} from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'

const stats = [
  { value: '<5 min', label: 'Avg. speed-to-lead with auto-routing' },
  { value: '100%', label: 'Calls logged, recorded & attributed' },
  { value: '3×', label: 'More conversions vs. manual dial-back' },
  { value: '0', label: 'Leads lost to unanswered queues' },
]

const faq = [
  {
    q: 'What is a live transfer inbox for law firms?',
    a: 'A live transfer inbox is a real-time agent workspace that shows every inbound call, chatbot conversation, and web form submission that has requested a live agent. Case Compass\'s live transfer inbox displays caller identity, wait time, intake form, and live transfer status — so agents respond in priority order and no lead waits unattended.',
  },
  {
    q: 'How does Case Compass integrate with RingCentral?',
    a: 'Case Compass connects natively to RingCentral. Agents use a browser-based WebRTC softphone or RingOut to their desk phone — directly inside the dashboard. Every call is automatically logged, recorded, and attributed to the correct lead and marketing source. No separate dialer app is needed.',
  },
  {
    q: 'What are Agent SOPs and how do they help intake teams?',
    a: 'Agent SOPs are structured scripts and checklists that appear inside the agent\'s live workspace. Documents provide talking points and compliance language. Checklists give agents step-by-step tasks with required fields. SOPs are assigned per intake form so every agent sees the right procedure for every practice area, automatically.',
  },
  {
    q: 'What metrics does the Speed-to-Lead Dashboard track?',
    a: 'The dashboard tracks average response time, SLA compliance percentage (e.g. % contacted under 5 minutes), missed leads, queue depth, a response time distribution histogram, daily avg response chart, and an agent leaderboard with calls, response time, SLA rate, conversions, and conversion percentage — filterable by agent and time period.',
  },
  {
    q: 'Can agents schedule and manage outbound callbacks?',
    a: 'Yes. The Outbound Callback Queue lets supervisors or agents schedule callbacks for specific leads, assign them to agents, set a time, and add context notes. The queue shows Pending, Attempted, and Completed statuses with a one-click "Call now" button to dial immediately from the dashboard.',
  },
  {
    q: 'Does Case Compass record calls and create summaries?',
    a: 'Yes. When call recording is enabled through RingCentral, every call is automatically recorded and attached to the lead\'s profile. Agents complete a post-call summary including disposition, notes, and checklist completion — permanently linked to the lead profile timeline.',
  },
]

function ScreenshotFrame({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#0f172a' }}>
      <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 6 }}>
        {['#ef4444', '#f59e0b', '#10b981'].map(c => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: 999, background: c, opacity: 0.7 }} />
        ))}
        <div style={{ flex: 1, marginLeft: 8, height: 18, borderRadius: 6, background: 'rgba(255,255,255,0.06)', maxWidth: 280 }} />
      </div>
      <Image src={src} alt={alt} width={1024} height={640} style={{ width: '100%', height: 'auto', display: 'block' }} />
      {caption && (
        <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: 12, color: '#64748b', textAlign: 'center' }}>{caption}</div>
      )}
    </div>
  )
}

function LightScreenshotFrame({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff' }}>
      <div style={{ padding: '10px 14px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 6, background: '#f8fafc' }}>
        {['#ef4444', '#f59e0b', '#10b981'].map(c => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: 999, background: c, opacity: 0.7 }} />
        ))}
        <div style={{ flex: 1, marginLeft: 8, height: 18, borderRadius: 6, background: '#e2e8f0', maxWidth: 280 }} />
      </div>
      <Image src={src} alt={alt} width={1024} height={640} style={{ width: '100%', height: 'auto', display: 'block' }} />
      {caption && (
        <div style={{ padding: '10px 16px', borderTop: '1px solid #e2e8f0', fontSize: 12, color: '#94a3b8', textAlign: 'center', background: '#f8fafc' }}>{caption}</div>
      )}
    </div>
  )
}

export default function AgentPlatformPage() {
  return (
    <>
      <GalaxyCanvas />
      <AnnouncementBanner />
      <Nav />

      <main style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <section style={{ padding: '100px 24px 80px', textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
          <SectionReveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: 999, padding: '6px 16px', marginBottom: 28 }}>
              <Headphones size={14} color="#818cf8" />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Agent Platform</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: 24, letterSpacing: '-0.02em' }}>
              The complete agent workforce platform{' '}
              <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                for legal intake teams
              </span>
            </h1>
            <p style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)', color: '#94a3b8', lineHeight: 1.7, marginBottom: 40, maxWidth: 680, margin: '0 auto 40px' }}>
              Live transfer inbox. Browser softphone with RingCentral. Agent SOPs &amp; checklists. Speed-to-lead dashboards. Outbound callback queues. One platform built for high-performance plaintiff intake teams.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <DemoButton />
              <Link href="/solutions/intake"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)', color: '#94a3b8', textDecoration: 'none', fontSize: 15, fontWeight: 500, transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = '#94a3b8' }}>
                See full Intake OS <ChevronRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </section>

        {/* ── Stats bar ── */}
        <SectionReveal>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '40px 24px', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, textAlign: 'center' }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: '#818cf8', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: '#64748b', marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ── Live Transfer Inbox — screenshot feature ── */}
        <section style={{ padding: '96px 24px', background: 'rgba(15,23,42,0.95)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Live Transfer Inbox</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  Every lead. Every agent. Every status —{' '}
                  <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in real time</span>
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
                  When a lead requests an agent — by phone, chatbot, or web form — they appear instantly in the queue with name, intake form, wait time, live transfer status, and assigned agent. Agents claim and close transfers without ever leaving the dashboard.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <ScreenshotFrame
                src="/images/agent-platform-live-transfer-inbox.png"
                alt="Case Compass Live Transfer Inbox showing real-time queue with 29 in-progress transfers, wait times, agent assignments, and one-click call actions"
                caption="Live Transfer Inbox — real-time queue with status badges, wait times, agent assignments, and instant call actions"
              />
            </SectionReveal>

            <SectionReveal>
              <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                {[
                  { icon: Bell, title: 'WebSocket real-time updates', body: 'The queue refreshes live via WebSocket — no page refresh. New transfers appear the instant a lead hits the request button.' },
                  { icon: PhoneIncoming, title: 'One-click claim & answer', body: 'Agents click "Chat with client" or "Call" to claim and answer a transfer. They\'re immediately taken to the full lead profile.' },
                  { icon: Users, title: 'Full lead context on pickup', body: 'Lead name, intake form, wait time, conversation history, and SOPs are all pre-loaded. Agents walk into every call prepared.' },
                  { icon: Radio, title: 'Waiting · In Progress · Completed', body: 'Live counters above the queue show how many leads are waiting, in progress, and completed today — across all agents.' },
                ].map(f => (
                  <div key={f.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '22px 20px' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(99,102,241,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <f.icon size={20} color="#818cf8" />
                    </div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{f.body}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── Lead Profile with Live Transfer ── */}
        <section style={{ padding: '96px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="split-row" style={{ gap: 64, alignItems: 'center' }}>
              <SectionReveal style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Lead Profile Integration</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  The whole picture, the moment you pick up
                </h2>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
                  When an agent answers a live transfer or inbound call, the lead profile opens with the entire conversation history on the right rail — every chatbot answer, every form field, every contact detail — while the live chat or call continues on the left.
                </p>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: 32 }}>
                  SOPs &amp; checklists are embedded inline below the phone call history, so agents can reference the script and complete required steps without switching tabs or apps.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Bot conversation answers visible while agent is on the call',
                    'Phone call log with recordings and post-call summaries',
                    'SOPs and checklists embedded in the lead profile',
                    '"Take over chat" button for seamless bot-to-human handoff',
                    'Resend chatbot link via email or SMS from one click',
                  ].map(pt => (
                    <li key={pt} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <CheckCircle size={16} color="#6366f1" style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
              <SectionReveal style={{ flex: 1 }}>
                <LightScreenshotFrame
                  src="/images/agent-platform-lead-profile-lt.png"
                  alt="Case Compass lead profile showing live transfer panel with agent live chat, client answers from chatbot, phone call history with recordings, and SOPs and checklists embedded inline"
                  caption="Lead profile during a live transfer — chatbot answers, call history, SOPs, and live agent chat in one view"
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── Agent SOPs ── */}
        <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="split-row" style={{ gap: 64, alignItems: 'center' }}>
              <SectionReveal style={{ flex: 1 }}>
                <ScreenshotFrame
                  src="/images/agent-platform-sop-editor.png"
                  alt="Case Compass Agent SOP editor showing a Live Transfer Empathy and Compliance Script with Document type selected, markdown content with opening script and call guidelines, and form assignment tags including Personal Injury, Social Media, and Live Transfer forms"
                  caption="SOP editor — Document or Checklist type, rich content, form-level assignment"
                />
              </SectionReveal>
              <SectionReveal style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Agent SOPs &amp; Checklists</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  Every agent. Every call. The right script.
                </h2>
                <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: 24 }}>
                  Create empathy scripts, compliance disclosures, and step-by-step checklists that appear in the agent&apos;s live workspace during every call. SOPs are assigned at the form level — the right script appears automatically for the right practice area.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { icon: ClipboardList, title: 'Document SOPs', body: 'Rich text scripts with opening lines, objection handling, and required compliance language — formatted for fast scanning mid-call.' },
                    { icon: CheckCircle, title: 'Interactive Checklists', body: 'Step-by-step tasks with required fields and completion tracking. Supervisors see % complete across the team in real time.' },
                    { icon: Target, title: 'Form-level assignment', body: 'Assign SOPs to specific intake forms, or leave unassigned to apply org-wide. A PI agent gets the PI script. A mass tort agent gets the MDL checklist.' },
                    { icon: Star, title: 'Instant updates, no retraining', body: 'Update a script and it publishes to the entire team immediately. No email chains, no new training sessions.' },
                  ].map(f => (
                    <div key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <f.icon size={17} color="#818cf8" />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 4 }}>{f.title}</p>
                        <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── Speed-to-Lead Dashboard ── */}
        <section style={{ padding: '96px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Speed-to-Lead Dashboard</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  You can&apos;t improve what you can&apos;t see
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                  The speed-to-lead dashboard gives supervisors a live, filterable view of agent performance — average response time, SLA compliance, response distribution, and a per-agent leaderboard showing calls, conversions, and conversion rate.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <LightScreenshotFrame
                src="/images/agent-platform-speed-dashboard.png"
                alt="Case Compass Speed-to-Lead Dashboard showing 76 minute 57 second average response time, 54% under 5-minute SLA, response time distribution histogram, daily average response time chart, and agent leaderboard with Alex Rivera, Sam Patel, Jordan Kim, and SBU Admin showing calls, average response, SLA percentage, conversions, and conversion rate"
                caption="Speed-to-Lead Dashboard — avg response time, SLA %, response distribution, daily trend, and agent leaderboard"
              />
            </SectionReveal>

            <SectionReveal>
              <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                {[
                  { icon: Clock, label: 'Avg. response time', detail: 'Track how long leads wait before first agent contact — across today, week, month, or a custom date range.' },
                  { icon: Zap, label: 'SLA compliance %', detail: 'Set a target window (e.g. under 5 min) and see live what percentage of leads are being reached within it.' },
                  { icon: Activity, label: 'Response distribution', detail: 'A histogram of response buckets (<1m, 1–3m, 3–5m, 5–10m, 10–15m, 15m+) shows exactly where delays cluster.' },
                  { icon: TrendingUp, label: 'Daily avg chart', detail: 'Rolling chart of daily average response time, color-coded by SLA tier, makes trends immediately visible.' },
                  { icon: Users, label: 'Agent leaderboard', detail: 'Per-agent breakdown: calls, avg. response, % under SLA, conversions, and conversion rate — in real time.' },
                  { icon: BarChart3, label: 'Queue depth & missed', detail: 'Live counters for current queue depth and missed-today count — the metrics a supervising manager needs most.' },
                ].map(f => (
                  <div key={f.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '20px 18px', borderRadius: 12, border: '1px solid #e2e8f0', background: '#fafafa' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 9, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <f.icon size={18} color="#7c3aed" />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{f.label}</p>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.55 }}>{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── Outbound Callback Queue ── */}
        <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #0f172a 0%, #1a1a2e 100%)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="split-row" style={{ gap: 64, alignItems: 'center' }}>
              <SectionReveal style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Outbound Callback Queue</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  No promised callback falls through the cracks
                </h2>
                <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: 32 }}>
                  Schedule callbacks for any lead, assign them to specific agents, set a time, and add context notes. The queue shows Pending, Attempted, and Completed — with wait time visible on every row so supervisors know which callbacks are aging.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { icon: Calendar, title: 'Scheduled with agent assignment', body: 'Set a date, time, and agent for every callback. Unassigned callbacks go to the first available.' },
                    { icon: PhoneCall, title: 'One-click dial from the queue', body: '"Call now" launches the softphone or RingOut immediately — no number copying, no context switching.' },
                    { icon: Target, title: 'Pending / Attempted / Completed', body: 'Agents focus on what\'s actionable. Supervisors see the full picture including aging and unresolved callbacks.' },
                    { icon: Clock, title: 'Wait time accountability', body: 'Every row shows elapsed time since the original request — making reassignment decisions obvious at a glance.' },
                  ].map(f => (
                    <div key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(99,102,241,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <f.icon size={17} color="#818cf8" />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 4 }}>{f.title}</p>
                        <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionReveal>
              <SectionReveal style={{ flex: 1 }}>
                <ScreenshotFrame
                  src="/images/agent-platform-callback-queue.png"
                  alt="Case Compass Outbound Callback Queue showing Pending tab with Lisa Lee and Michelle Harris callbacks, Schedule Outbound Callback modal open with lead selector, scheduled date and time, agent dropdown showing Alex Rivera, Jordan Kim, and Sam Patel options, and notes field"
                  caption="Outbound Callback Queue — scheduled callbacks, agent assignment, and one-click dial"
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── RingCentral Integration ── */}
        <section style={{ padding: '96px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="split-row" style={{ gap: 64, alignItems: 'center' }}>
              <SectionReveal style={{ flex: 1 }}>
                <LightScreenshotFrame
                  src="/images/agent-platform-ringcentral-settings.png"
                  alt="Case Compass RingCentral integration settings modal showing server credentials configured status, dial mode set to Browser softphone, inbound main number plus 1 650 587 0453, no call queue found, call recording toggle enabled, outbound default caller ID, and number attribution section"
                  caption="RingCentral integration — configure inbound number, dial mode, caller ID, and call recording in minutes"
                />
              </SectionReveal>
              <SectionReveal style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>RingCentral Integration</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  Your phone system, inside your intake dashboard
                </h2>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: 32 }}>
                  Connect Case Compass to RingCentral in minutes. Choose Browser Softphone (WebRTC) to talk directly in the browser, or RingOut to bridge calls through your desk or mobile phone. Every call is automatically logged, recorded, and attributed — regardless of dial mode.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { mode: 'Browser softphone (WebRTC)', color: '#10b981', points: ['Talk in any browser — no app required', 'Floating panel visible across every page', 'Mute, hold, DTMF, blind transfer built-in', 'Automatic routing to lead profile or Call Intake'] },
                    { mode: 'RingOut', color: '#f59e0b', points: ['Agent\'s desk or mobile phone bridges to lead', 'Works with any existing handset', 'All calls still logged and attributed', 'Call routing notification pushed to dashboard'] },
                  ].map(m => (
                    <div key={m.mode} style={{ padding: '18px 20px', borderRadius: 12, border: `1px solid ${m.color}30`, background: `${m.color}08` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 999, background: m.color }} />
                        <span style={{ fontSize: 13, fontWeight: 700, color: m.color }}>{m.mode}</span>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {m.points.map(pt => (
                          <li key={pt} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                            <CheckCircle size={13} color={m.color} style={{ marginTop: 3, flexShrink: 0 }} />
                            <span style={{ fontSize: '0.82rem', color: '#475569' }}>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 20, padding: '14px 18px', borderRadius: 10, background: '#f1f5f9', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                    <strong style={{ color: '#0f172a' }}>Number attribution built-in:</strong> Map each inbound tracking number to a marketing source or campaign. Every call is automatically attributed to the right lead source — feeding accurate ROI data back to your team.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '96px 24px', background: '#f8fafc' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>FAQ</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                  Common questions about the Agent Platform
                </h2>
              </div>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faq.map(({ q, a }) => (
                <SectionReveal key={q}>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '24px 28px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>{q}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>{a}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related solutions ── */}
        <section style={{ padding: '72px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <SectionReveal>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28, textAlign: 'center' }}>Related solutions</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                {[
                  { href: '/solutions/intake', label: 'Intake OS', sub: 'Chatbots, webforms, live transfer — the full intake stack.' },
                  { href: '/solutions/waypoint', label: 'Waypoint AI Scoring', sub: 'Qualify leads before they reach your agents.' },
                  { href: '/solutions/esign', label: 'E-Signatures', sub: 'Close cases with automated retainer signing.' },
                  { href: '/solutions/mass-torts', label: 'Mass Torts', sub: 'MDL portfolio management built for volume.' },
                ].map(r => (
                  <Link key={r.href} href={r.href}
                    style={{ display: 'block', padding: '22px 20px', borderRadius: 14, border: '1px solid #e2e8f0', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c7d2fe'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                    <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>{r.label}</p>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55 }}>{r.sub}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 12, color: '#6366f1', fontSize: 12, fontWeight: 600 }}>Learn more <ArrowRight size={13} /></div>
                  </Link>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '96px 24px', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #312e81 100%)', textAlign: 'center' }}>
          <SectionReveal>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Get started</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                Build a faster, smarter intake team
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: 40 }}>
                See the live transfer inbox, softphone, agent SOPs, and speed-to-lead dashboard in a live demo — built around your practice area and team size.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <DemoButton />
                <Link href="/solutions/intake"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.2)', color: '#e2e8f0', textDecoration: 'none', fontSize: 15, fontWeight: 500, transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)' }}>
                  Explore Intake OS <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </section>

      </main>

      <Footer />
    </>
  )
}
