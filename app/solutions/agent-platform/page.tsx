'use client'

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

const painPoints = [
  {
    icon: Clock,
    title: 'Leads go cold in minutes',
    body: 'Plaintiff leads expect immediate contact. Every minute an agent spends searching for context, dialing manually, or writing notes is a minute the lead is talking to a competitor.',
  },
  {
    icon: ClipboardList,
    title: 'No script, no compliance guardrails',
    body: 'Without structured SOPs at the point of contact, agents improvise — creating inconsistent client experiences, missed disclosures, and compliance risk on every call.',
  },
  {
    icon: BarChart3,
    title: 'No visibility into agent performance',
    body: 'Supervisors rely on gut feel or manual reports. There is no real-time view of queue depth, response time, or which agents are converting leads vs. letting them drop.',
  },
  {
    icon: Calendar,
    title: 'Callback chaos',
    body: 'Promised callbacks live in spreadsheets, sticky notes, or personal calendars. Leads fall through the cracks, agents duplicate effort, and there is no accountability.',
  },
]

const liveTransferFeatures = [
  {
    icon: Bell,
    title: 'Real-time queue with lead context',
    body: 'The live transfer inbox shows every pending, in-progress, and completed transfer — with the lead\'s name, intake form, wait time, and assigned agent visible at a glance. No refreshing. No guessing.',
  },
  {
    icon: PhoneIncoming,
    title: 'One-click answer and routing',
    body: 'When a lead requests a live agent through the chatbot or web form, the inbox lights up instantly via WebSocket. Agents claim the transfer with one click and are immediately taken to the full lead profile with conversation history.',
  },
  {
    icon: Users,
    title: 'Bot-to-agent handoff with full context',
    body: 'When an agent takes over, they see everything the lead said in the chatbot — every answer, every flag, every form field — on the left rail while the live chat continues in the same window. No recap calls. No repeated questions.',
  },
  {
    icon: Radio,
    title: 'Live transfer status tracking',
    body: 'Supervisors see every transfer in three states: Waiting (lead in queue), In Progress (agent active), and Completed Today. A live counter above the queue shows current load at all times.',
  },
]

const softphoneFeatures = [
  {
    icon: Headphones,
    title: 'Browser-based WebRTC softphone',
    body: 'Agents make and receive calls directly in the browser — no desktop app, no physical phone required. The softphone panel floats over any page in the dashboard, showing live call status, caller ID, elapsed time, and lead name.',
  },
  {
    icon: PhoneCall,
    title: 'Inbound call routing and lead matching',
    body: 'When an inbound call arrives, Case Compass automatically matches the caller\'s number to an existing lead. Known leads route agents directly to the lead profile. New callers open a structured Call Intake screen for triage.',
  },
  {
    icon: PhoneOutgoing,
    title: 'RingOut for desk and mobile',
    body: 'Prefer physical phones? Use RingOut mode: Case Compass dials the agent\'s desk or mobile first, then bridges to the lead. Every call is still logged, attributed, and summarized — regardless of where the agent picks up.',
  },
  {
    icon: Shield,
    title: 'Call recording and attribution',
    body: 'Every call is automatically recorded at the account level and linked to the lead\'s profile. Inbound calls are attributed to the marketing source, campaign, or tracking number that generated the lead — feeding accurate ROI data back to your team.',
  },
]

const sopFeatures = [
  {
    icon: ClipboardList,
    title: 'Document-type SOPs (scripts)',
    body: 'Create rich text agent scripts with opening lines, empathy language, compliance disclosures, and objection handling. Documents appear as formatted reference material in the agent\'s live workspace while they\'re on the call.',
  },
  {
    icon: CheckCircle,
    title: 'Interactive checklists',
    body: 'Build step-by-step intake checklists agents must complete during or after a call. Each item can be marked required, tagged with a priority level, and tracked for completion percentage.',
  },
  {
    icon: Target,
    title: 'Form-level assignment',
    body: 'SOPs are assigned to specific intake forms so agents always see the right script for the right practice area. A Personal Injury agent gets the PI script; a Mass Tort agent gets the tort-specific checklist — automatically.',
  },
  {
    icon: Star,
    title: 'Org-wide or targeted',
    body: 'Leave a SOP unassigned to apply it org-wide across all forms and agents, or assign it narrowly to one intake type. SOPs can be reordered, versioned, and updated without agent retraining.',
  },
]

const dashboardFeatures = [
  { icon: Clock, label: 'Avg. response time', detail: 'Track how long leads wait before an agent responds — broken down by today, week, month, or custom date range.' },
  { icon: Zap, label: 'SLA compliance %', detail: 'Set a target response window (e.g. under 5 minutes) and see live what percentage of leads are being reached within it.' },
  { icon: Activity, label: 'Response time distribution', detail: 'A histogram of response windows (<1m, 1–3m, 3–5m, 5–10m, 10–15m, 15m+) shows exactly where delays cluster.' },
  { icon: TrendingUp, label: 'Daily avg chart', detail: 'A rolling chart of daily average response time, color-coded by SLA tier, makes performance trends immediately visible.' },
  { icon: Users, label: 'Agent leaderboard', detail: 'Per-agent breakdown: calls handled, avg. response time, % under SLA, conversions, and conversion rate — updated in real time.' },
  { icon: BarChart3, label: 'Queue depth & missed leads', detail: 'Live counters for current queue depth and missed-today count surface the metrics that matter most to a supervising intake manager.' },
]

const callbackFeatures = [
  {
    icon: Calendar,
    title: 'Scheduled callbacks with agent assignment',
    body: 'Create a callback record for any lead, set a date and time, and assign it to a specific agent (or leave it unassigned for the first available). Notes and context travel with the record.',
  },
  {
    icon: Target,
    title: 'Pending / Attempted / Completed view',
    body: 'The queue filters by status so agents focus on what\'s actionable now. Attempted callbacks stay visible so supervisors know when a lead needs reassignment.',
  },
  {
    icon: PhoneCall,
    title: 'One-click dial from the queue',
    body: 'A "Call now" button on every callback row launches the softphone or triggers RingOut immediately. No number copying, no context switching — just click and call.',
  },
  {
    icon: Clock,
    title: 'Wait time accountability',
    body: 'Every callback row shows how long since the original request. Supervisors can see at a glance which callbacks are aging and reassign or escalate accordingly.',
  },
]

const workflow = [
  { step: '01', title: 'Lead requests contact', body: 'A lead completes a chatbot, web form, or calls your tracked number. Case Compass creates a lead record, logs attribution, and routes to the live transfer queue or call intake screen.' },
  { step: '02', title: 'Agent is notified instantly', body: 'The softphone panel shows an incoming call notification. The live transfer inbox rings with a new queue entry. The agent sees the lead\'s name, form, and wait time before they even pick up.' },
  { step: '03', title: 'Agent works the SOP', body: 'On the call, the lead profile loads with the SOP checklist, conversation history, attribution data, and contact info side-by-side. The agent follows the script without toggling between apps.' },
  { step: '04', title: 'Call is logged and summarized', body: 'When the call ends, the agent completes a post-call summary: disposition, notes, and checklist completion. The recording and summary are linked to the lead profile permanently.' },
  { step: '05', title: 'Supervisors see it all, live', body: 'The speed-to-lead dashboard updates in real time. Response time, SLA compliance, and conversion stats give supervisors the data to coach agents and improve the intake funnel continuously.' },
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
    a: 'The dashboard tracks average response time, SLA compliance percentage (e.g. % contacted under 5 minutes), missed leads, queue depth, a response time distribution histogram, daily avg response chart, and an agent leaderboard with calls, response time, SLA rate, conversions, and conversion percentage — all filterable by agent and time period.',
  },
  {
    q: 'Can agents schedule and manage outbound callbacks?',
    a: 'Yes. The Outbound Callback Queue lets supervisors or agents schedule callbacks for specific leads, assign them to agents, set a time, and add context notes. The queue shows Pending, Attempted, and Completed statuses with a one-click "Call now" button to dial immediately from the dashboard.',
  },
  {
    q: 'Does Case Compass record calls and create summaries?',
    a: 'Yes. When call recording is enabled through RingCentral, every call is automatically recorded and attached to the lead\'s profile. Agents complete a post-call summary including disposition, notes, and checklist completion. Recordings and summaries are accessible in the lead profile timeline and accessible to supervisors.',
  },
]

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
              Live transfer inbox. Browser softphone. Agent SOPs. Speed-to-lead dashboards. Outbound callback queues. RingCentral telephony — all in one platform built for high-performance plaintiff intake teams.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <DemoButton />
              <Link href="/solutions/intake" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)', color: '#94a3b8', textDecoration: 'none', fontSize: 15, fontWeight: 500, transition: 'all 0.2s' }}
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

        {/* ── Pain points ── */}
        <section style={{ background: 'rgba(15,23,42,0.9)', padding: '96px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>The problem</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.02em' }}>
                  Intake teams lose cases before{' '}
                  <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>they pick up the phone</span>
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto' }}>
                  The tools agents use today — spreadsheets, generic dialers, sticky-note scripts — were not built for the pace of modern plaintiff intake.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {painPoints.map(p => (
                <SectionReveal key={p.title}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <p.icon size={22} color="#818cf8" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 10 }}>{p.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65 }}>{p.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Live Transfer Inbox ── */}
        <section style={{ padding: '96px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ marginBottom: 56, maxWidth: 640 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Live Transfer Inbox</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  Every lead. Every agent. Every status — in real time.
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
                  The live transfer inbox is the command center for your intake team. When a lead requests an agent — by phone, chatbot, or web form — it appears instantly in the queue with full context. Agents claim, handle, and close transfers without leaving the dashboard.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {liveTransferFeatures.map(f => (
                <SectionReveal key={f.title}>
                  <div style={{ padding: '28px 24px', borderRadius: 16, border: '1px solid #e2e8f0', background: '#fafafa' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c7d2fe'; (e.currentTarget as HTMLElement).style.background = '#f5f3ff' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.background = '#fafafa' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <f.icon size={22} color="#4f46e5" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>{f.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Queue status pills */}
            <SectionReveal>
              <div style={{ marginTop: 56, padding: '32px 36px', borderRadius: 20, background: 'linear-gradient(135deg, #0f172a, #1e1b4b)', display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 8 }}>Live queue status</p>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>Updated via WebSocket — no page refresh needed</p>
                </div>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Waiting', color: '#f59e0b', bg: 'rgba(245,158,11,0.15)' },
                    { label: 'In Progress', color: '#3b82f6', bg: 'rgba(59,130,246,0.15)' },
                    { label: 'Completed Today', color: '#10b981', bg: 'rgba(16,185,129,0.15)' },
                    { label: 'Call in Progress', color: '#8b5cf6', bg: 'rgba(139,92,246,0.15)' },
                  ].map(s => (
                    <div key={s.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, background: s.bg, border: `1px solid ${s.color}40` }}>
                      <div style={{ width: 8, height: 8, borderRadius: 999, background: s.color }} />
                      <span style={{ fontSize: 13, fontWeight: 600, color: s.color }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── RingCentral / Softphone ── */}
        <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>RingCentral Integration</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  Your phone system, inside your{' '}
                  <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>intake dashboard</span>
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto' }}>
                  Case Compass connects natively to RingCentral. Make and receive calls without leaving the lead profile. Every call logged, recorded, and attributed automatically.
                </p>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 56 }}>
              {softphoneFeatures.map(f => (
                <SectionReveal key={f.title}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 16, padding: 28 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <f.icon size={22} color="#818cf8" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>{f.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Dial mode comparison */}
            <SectionReveal>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {[
                  {
                    badge: 'Browser Softphone (WebRTC)',
                    badgeColor: '#10b981',
                    title: 'Talk in the browser',
                    points: ['No app install — works in any modern browser', 'Incoming call banner visible on every dashboard page', 'Mute, hold, DTMF keypad, blind transfer built-in', 'Automatic call routing to lead profile or Call Intake screen', 'Volume control with per-session persistence'],
                  },
                  {
                    badge: 'RingOut',
                    badgeColor: '#f59e0b',
                    title: 'Use your desk or mobile phone',
                    points: ['RC bridges your physical phone to the lead', 'Works with existing desk phones and mobiles', 'All calls still logged, recorded, and attributed', 'Good for agents who prefer a handset', 'Outbound calls fully tracked in the lead profile'],
                  },
                ].map(m => (
                  <div key={m.badge} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 16, padding: 28 }}>
                    <span style={{ display: 'inline-block', marginBottom: 16, padding: '4px 12px', borderRadius: 999, background: `${m.badgeColor}20`, border: `1px solid ${m.badgeColor}40`, fontSize: 12, fontWeight: 700, color: m.badgeColor, letterSpacing: '0.03em' }}>{m.badge}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 16 }}>{m.title}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {m.points.map(pt => (
                        <li key={pt} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                          <CheckCircle size={15} color="#10b981" style={{ marginTop: 3, flexShrink: 0 }} />
                          <span style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.55 }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── Agent SOPs ── */}
        <section style={{ padding: '96px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="split-row" style={{ gap: 64, alignItems: 'flex-start' }}>
              <SectionReveal style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Agent SOPs</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  Every agent. Every call. The right script.
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: 32 }}>
                  Agent SOPs give your intake team structured, form-specific scripts and interactive compliance checklists — visible inside the lead profile while the call is live. No toggling between tabs, no improvising, no missed disclosures.
                </p>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: 40 }}>
                  SOPs are assigned at the form level. A Personal Injury transfer gets the PI empathy script. A Mass Tort agent gets the MDL-specific checklist. Supervisors can update, reorder, and publish changes to the entire team instantly — without retraining.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {['Live Transfer Compliance', 'Post-Call Checklists', 'Opening Scripts', 'Universal SOPs', 'Form-Specific SOPs'].map(tag => (
                    <span key={tag} style={{ padding: '6px 14px', borderRadius: 999, background: '#f1f5f9', border: '1px solid #e2e8f0', fontSize: 12, fontWeight: 600, color: '#475569' }}>{tag}</span>
                  ))}
                </div>
              </SectionReveal>

              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {sopFeatures.map(f => (
                  <SectionReveal key={f.title}>
                    <div style={{ padding: '22px 20px', borderRadius: 14, border: '1px solid #e2e8f0', background: '#fafafa' }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                        <f.icon size={18} color="#7c3aed" />
                      </div>
                      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{f.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{f.body}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Speed-to-Lead Dashboard ── */}
        <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #0f172a 0%, #1a1a2e 100%)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Speed-to-Lead Dashboard</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  You can&apos;t improve what you{' '}
                  <span style={{ background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>can&apos;t see</span>
                </h2>
                <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto' }}>
                  The speed-to-lead dashboard gives supervisors a live, filterable view of agent performance — response times, SLA compliance, and conversions across every agent and time period.
                </p>
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {dashboardFeatures.map(f => (
                <SectionReveal key={f.label}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '24px 22px', borderRadius: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <f.icon size={20} color="#818cf8" />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>{f.label}</p>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>{f.detail}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal>
              <div style={{ marginTop: 56, padding: '36px 40px', borderRadius: 20, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {[
                  { label: 'Time period', options: ['Today', 'Week', 'Month', 'Custom'] },
                  { label: 'Agent filter', options: ['All agents', 'Individual agent'] },
                  { label: 'View', options: ['Agent leaderboard', 'Response distribution', 'Daily trend chart'] },
                ].map(g => (
                  <div key={g.label}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{g.label}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {g.options.map(o => (
                        <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 6, height: 6, borderRadius: 999, background: '#6366f1' }} />
                          <span style={{ fontSize: 13, color: '#94a3b8' }}>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── Outbound Callback Queue ── */}
        <section style={{ padding: '96px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Outbound Callback Queue</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.02em' }}>
                  No lead falls through the cracks
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
                  Schedule, assign, and track every promised callback. Agents dial from the queue with one click. Supervisors see everything.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {callbackFeatures.map(f => (
                <SectionReveal key={f.title}>
                  <div style={{ padding: 28, borderRadius: 16, border: '1px solid #e2e8f0', background: '#fafafa' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c7d2fe'; (e.currentTarget as HTMLElement).style.background = '#f5f3ff' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.background = '#fafafa' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <f.icon size={22} color="#7c3aed" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>{f.body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works workflow ── */}
        <section style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>How it works</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                  From first contact to closed file — automated
                </h2>
              </div>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {workflow.map((w, i) => (
                <SectionReveal key={w.step}>
                  <div style={{ display: 'flex', gap: 32, paddingBottom: i < workflow.length - 1 ? 48 : 0, position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 999, background: 'linear-gradient(135deg, #6366f1, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, color: '#fff', flexShrink: 0, zIndex: 1 }}>{w.step}</div>
                      {i < workflow.length - 1 && <div style={{ width: 2, flex: 1, background: 'linear-gradient(180deg, rgba(99,102,241,0.5), transparent)', marginTop: 8 }} />}
                    </div>
                    <div style={{ paddingTop: 10, paddingBottom: 8 }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: 10 }}>{w.title}</h3>
                      <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.7 }}>{w.body}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
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
                  <Link key={r.href} href={r.href} className="related-solution-card"
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
                <Link href="/solutions/intake" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.2)', color: '#e2e8f0', textDecoration: 'none', fontSize: 15, fontWeight: 500, transition: 'all 0.2s' }}
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
