'use client'

import { useDemoModal } from './DemoModalProvider'

interface DemoButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function DemoButton({ 
  children = 'Schedule a Demo →', 
  style,
  className,
  variant = 'primary'
}: DemoButtonProps) {
  const { openModal } = useDemoModal()

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    borderRadius: '8px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    fontWeight: 700,
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
    ...style,
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      color: '#fff',
      boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
    },
    secondary: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.15)',
      color: 'rgba(255,255,255,0.8)',
    },
  }

  return (
    <button
      onClick={openModal}
      className={className}
      style={{ ...baseStyle, ...variantStyles[variant] }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(79,70,229,0.45)'
        } else {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(79,70,229,0.35)'
        } else {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
        }
      }}
    >
      {children}
    </button>
  )
}
