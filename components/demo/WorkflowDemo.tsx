'use client'

import { useEffect, type Dispatch, type SetStateAction } from 'react'
import { Check, Pause, Play } from 'lucide-react'
import './workflow-demo.css'

export type WorkflowStage = {
  label: string
  actor: string
  actorMeta: string
  initials: string
  message: string
  reply: string
  status: string
  detail: string
  panelTitle: string
  panelMeta: string
  panelBody: string
}

export const intakeLeadStages: WorkflowStage[] = [
  {
    label: 'Capture',
    actor: 'Prospective client',
    actorMeta: 'Website chat · MVA',
    initials: 'JR',
    message: 'I was rear-ended last week and still dealing with the hospital bills. Can someone look at this?',
    reply: 'Thanks — a few questions so we can route this correctly.',
    status: 'Intake conversation started',
    detail: 'Case type: MVA · Form path branched',
    panelTitle: 'IntakeOS inbox',
    panelMeta: 'Lead #4821 · Example',
    panelBody: 'Transcript and answers stay with the lead from the first message.',
  },
  {
    label: 'Qualify',
    actor: 'Waypoint',
    actorMeta: 'Firm criteria applied',
    initials: 'WP',
    message: "Severity, urgency and completeness scored against your firm's rules.",
    reply: 'Meets intake criteria — prioritize review.',
    status: 'Qualified for follow-up',
    detail: 'Score ready · Clarification tasks flagged',
    panelTitle: 'Case assessment',
    panelMeta: 'Scoring breakdown',
    panelBody: 'Your team sees why it ranked — not just a number.',
  },
  {
    label: 'Connect',
    actor: 'Live transfer',
    actorMeta: 'Peak intent handoff',
    initials: 'LT',
    message: 'Qualified lead waiting — agent available with full transcript on screen.',
    reply: 'Connecting now.',
    status: 'Warm handoff in progress',
    detail: 'Context attached · Softphone ready',
    panelTitle: 'Agent inbox',
    panelMeta: 'Live transfer queue',
    panelBody: 'Intake staff pick up with the conversation already captured.',
  },
  {
    label: 'Sign',
    actor: 'E-sign retainer',
    actorMeta: 'Same session',
    initials: 'ES',
    message: 'Retainer pre-filled from intake answers. Signature collected in-browser.',
    reply: 'Signed. Syncing to case management.',
    status: 'Client signed · CRM synced',
    detail: 'Filevine / Clio / Litify push complete',
    panelTitle: 'Case start',
    panelMeta: 'Signed matter',
    panelBody: 'The signed case and intake package land where your team already works.',
  },
]

type WorkflowDemoProps = {
  stages: WorkflowStage[]
  stage: number
  setStage: Dispatch<SetStateAction<number>>
  playing: boolean
  setPlaying: (v: boolean) => void
  metaLabel?: string
  ariaLabel?: string
  panelInitials?: string
  intervalMs?: number
}

export default function WorkflowDemo({
  stages,
  stage,
  setStage,
  playing,
  setPlaying,
  metaLabel = 'ONE LEAD, CONNECTED',
  ariaLabel = 'Interactive example IntakeOS lead workflow',
  panelInitials = 'IO',
  intervalMs = 6500,
}: WorkflowDemoProps) {
  useEffect(() => {
    if (
      !playing ||
      (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      return
    }
    const t = setInterval(() => setStage((s) => (s + 1) % stages.length), intervalMs)
    return () => clearInterval(t)
  }, [playing, setStage, stages.length, intervalMs])

  const s = stages[stage]
  if (!s) return null

  return (
    <div className="prod-demo" aria-label={ariaLabel}>
      <div className="prod-demo-meta">
        <span><i /> {metaLabel}</span>
        <span>Illustrative workflow</span>
      </div>
      <div className="prod-demo-stage" key={stage}>
        <div className="prod-thread">
          <span className="prod-avatar">{s.initials}</span>
          <div>{s.actor} <small>{s.actorMeta}</small></div>
        </div>
        <div className="prod-msg incoming">
          {s.message}
          <small>IntakeOS · just now</small>
        </div>
        <div className="prod-msg outgoing">
          {s.reply}<Check size={13} />
        </div>
        <div className="prod-sync">
          <span /><small>STATUS SYNCED</small><span />
        </div>
        <div className="prod-status">
          <span className="prod-status-disc" aria-hidden="true">✓</span>
          <div>
            <strong>{s.status}</strong>
            <p>{s.detail}</p>
          </div>
          <span className="prod-tiny">Firm</span>
        </div>
        <div className="prod-panel">
          <div className="prod-thread">
            <span className="prod-avatar square">{panelInitials}</span>
            <div>{s.panelTitle} <small>{s.panelMeta}</small></div>
          </div>
          <p>{s.panelBody}</p>
          <div className="prod-panel-foot">
            <span className="prod-tag">Up to date</span>
            <span>Open lead ↗</span>
          </div>
        </div>
      </div>
      <div className="prod-demo-controls">
        <div className="prod-stage-buttons">
          {stages.map((x, i) => (
            <button
              key={x.label}
              type="button"
              className={stage === i ? 'active' : ''}
              onClick={() => { setStage(i); setPlaying(false) }}
              aria-pressed={stage === i}
            >
              <span>0{i + 1}</span>{x.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="prod-icon-button"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? 'Pause animation' : 'Play animation'}
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    </div>
  )
}
