'use client'

import { useEffect, useState } from 'react'

const categories = [
  { label: 'Referral Partners', id: 'referral-partners' },
  { label: 'Waypoint AI Scoring', id: 'waypoint-ai-scoring' },
  { label: 'Intake & Forms', id: 'intake-forms' },
  { label: 'eSign', id: 'esign' },
  { label: 'Litify Integration', id: 'litify-integration' },
  { label: 'Webform Embed & WordPress', id: 'webform-embed' },
  { label: 'Fixes & Polish', id: 'fixes-polish' },
]

export default function ChangelogSidebar() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    categories.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside style={{
      width: '220px',
      flexShrink: 0,
      position: 'sticky',
      top: '100px',
      alignSelf: 'flex-start',
    }}>
      {/* Release label */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#818cf8',
        marginBottom: '6px',
      }}>
        Release
      </div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        fontWeight: 700,
        color: '#0f172a',
        marginBottom: '20px',
        paddingBottom: '16px',
        borderBottom: '1px solid #e2e8f0',
      }}>
        March 2026
        <span style={{
          display: 'inline-block',
          marginLeft: '10px',
          background: '#4f46e5',
          color: '#fff',
          fontSize: '0.65rem',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: '100px',
          verticalAlign: 'middle',
          letterSpacing: '0.04em',
        }}>
          Latest
        </span>
      </div>

      {/* Category links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {categories.map(({ label, id }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={`#${id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '7px 10px',
                borderRadius: '7px',
                fontSize: '0.825rem',
                fontFamily: 'var(--font-display)',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#4f46e5' : '#64748b',
                background: isActive ? '#eff6ff' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s',
                borderLeft: isActive ? '2px solid #4f46e5' : '2px solid transparent',
              }}
            >
              <span style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: isActive ? '#4f46e5' : '#cbd5e1',
                flexShrink: 0,
                transition: 'background 0.15s',
              }} />
              {label}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
