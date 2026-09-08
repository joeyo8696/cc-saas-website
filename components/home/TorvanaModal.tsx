'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ArrowRight, Activity } from 'lucide-react'

export default function TorvanaModal() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('torvana-modal-seen')) return
    const t = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('torvana-modal-seen', '1')
    }, 320)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes tv-modal-backdrop-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes tv-modal-slide-in { from { opacity: 0; transform: translateY(28px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes tv-modal-slide-out { from { opacity: 1; transform: translateY(0) scale(1) } to { opacity: 0; transform: translateY(16px) scale(0.97) } }
        @keyframes tv-glow-pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(80,76,226,0.35), 0 0 80px rgba(80,76,226,0.15), 0 0 0 1px rgba(80,76,226,0.2), 0 32px 80px rgba(0,0,0,0.3); }
          50%        { box-shadow: 0 0 60px rgba(80,76,226,0.55), 0 0 120px rgba(80,76,226,0.25), 0 0 0 1px rgba(80,76,226,0.35), 0 32px 80px rgba(0,0,0,0.3); }
        }
        .tv-intro-backdrop {
          position: fixed; inset: 0; z-index: 9000;
          background: rgba(6,13,31,0.7);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center; padding: 24px;
          animation: tv-modal-backdrop-in 0.3s ease both;
        }
        .tv-intro-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 40px 36px;
          max-width: 480px; width: 100%;
          position: relative;
          animation: tv-glow-pulse 3s ease-in-out infinite, tv-modal-slide-in 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        .tv-intro-card.closing {
          animation: tv-modal-slide-out 0.32s cubic-bezier(0.4,0,1,1) both;
        }
        .tv-intro-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: #504ce2; margin-bottom: 18px;
        }
        .tv-intro-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #504ce2;
          box-shadow: 0 0 0 3px rgba(80,76,226,0.2);
        }
        .tv-intro-logo { margin-bottom: 20px; }
        .tv-intro-headline {
          font-size: 1.65rem; font-weight: 600; color: #0f172a;
          line-height: 1.2; letter-spacing: -0.03em; margin-bottom: 14px;
        }
        .tv-intro-headline em {
          font-family: Georgia, serif; font-style: italic; color: #504ce2;
        }
        .tv-intro-body {
          font-size: 0.9rem; color: #475569; line-height: 1.7; margin-bottom: 28px;
        }
        .tv-intro-actions { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .tv-intro-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #504ce2; color: white;
          padding: 12px 22px; border-radius: 7px;
          font-size: 0.875rem; font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .tv-intro-cta:hover { background: #3935b8; transform: translateY(-1px); }
        .tv-intro-dismiss {
          font-size: 0.82rem; color: #94a3b8;
          background: none; border: none; cursor: pointer; padding: 0;
          transition: color 0.2s;
        }
        .tv-intro-dismiss:hover { color: #64748b; }
        .tv-intro-close {
          position: absolute; top: 14px; right: 14px;
          width: 30px; height: 30px; border-radius: 8px;
          background: #f1f5f9; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8; transition: background 0.2s, color 0.2s;
        }
        .tv-intro-close:hover { background: #e2e8f0; color: #64748b; }
        .tv-intro-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f0effe; border: 1px solid #d0cbfb;
          border-radius: 20px; padding: 5px 12px;
          font-size: 11px; font-weight: 600; color: #504ce2;
          margin-bottom: 22px;
        }
        @media (max-width: 540px) {
          .tv-intro-card { padding: 32px 28px 28px; }
          .tv-intro-headline { font-size: 1.4rem; }
        }
      `}</style>

      <div className="tv-intro-backdrop" onClick={dismiss}>
        <div className={`tv-intro-card${closing ? ' closing' : ''}`} onClick={e => e.stopPropagation()}>
          <button className="tv-intro-close" onClick={dismiss} aria-label="Close">
            <X size={15} />
          </button>

          <div className="tv-intro-badge">
            <Activity size={12} />
            Introducing
          </div>

          <div className="tv-intro-logo">
            <Image
              src="/images/Torvana-Illustrator-Master.svg"
              alt="Torvana"
              width={180} height={44}
              unoptimized placeholder="empty"
              style={{ width: 'auto', height: '38px' }}
            />
          </div>

          <h2 className="tv-intro-headline">
            Healthcare intake &amp; referral automation is <em>here.</em>
          </h2>

          <p className="tv-intro-body">
            Torvana connects specialty medical practices with referring attorneys — mobile patient intake, HIPAA authorization, scheduling, records retrieval and real-time case status. All in one connected workflow.
          </p>

          <div className="tv-intro-actions">
            <Link href="/torvana" className="tv-intro-cta" onClick={dismiss}>
              See Torvana <ArrowRight size={15} />
            </Link>
            <button className="tv-intro-dismiss" onClick={dismiss}>
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
