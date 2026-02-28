import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AnnouncementBanner() {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '0.8125rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 300,
      }}
    >
      <span
        style={{
          background: 'rgba(255,255,255,0.18)',
          borderRadius: '99px',
          padding: '2px 10px',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        New
      </span>
      <span>Waypoint AI scoring + Referral Network are now live</span>
      <Link
        href="/blog/referrals-waypoint-launch"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'rgba(255,255,255,0.85)',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
        }}
      >
        Read the blog <ArrowRight size={13} />
      </Link>
    </div>
  )
}
