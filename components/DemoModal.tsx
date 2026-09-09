'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

const CASE_COMPASS_SCHEDULER_SRC =
  'https://scheduler.zoom.us/case-compass/case-compass-demo?embed=true'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(18, 16, 40, 0.72)',
      }}
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cc-demo-scheduler-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: '#fff',
          color: '#1c1a33',
          borderRadius: 12,
          width: 'min(1100px, calc(100vw - 24px))',
          maxHeight: 'min(94dvh, 760px)',
          overflow: 'hidden',
          boxShadow: '0 30px 100px rgba(23, 19, 48, 0.35)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '14px 18px',
            borderBottom: '1px solid #e6e3ef',
            flexShrink: 0,
          }}
        >
          <h2
            id="cc-demo-scheduler-title"
            style={{
              margin: 0,
              fontFamily: 'var(--font-display), Manrope, sans-serif',
              fontSize: '1.05rem',
              fontWeight: 600,
              letterSpacing: 0,
              color: '#1c1a33',
            }}
          >
            Book your Case Compass demo
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close scheduler"
            style={{
              width: 36,
              height: 36,
              border: '1px solid #e0dde9',
              borderRadius: 8,
              background: '#fff',
              color: '#5c5870',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>
        <iframe
          src={CASE_COMPASS_SCHEDULER_SRC}
          title="Schedule a Case Compass demo"
          allow="camera; microphone; fullscreen"
          loading="lazy"
          style={{
            width: '100%',
            height: 'min(640px, calc(94dvh - 72px))',
            minHeight: 520,
            border: 0,
            display: 'block',
            background: '#fff',
          }}
        />
      </div>
    </div>
  )
}
