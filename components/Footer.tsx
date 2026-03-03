'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useDemoModal } from './DemoModalProvider'

const footerLinks = [
  {
    heading: 'Pages',
    links: [
      { label: 'Homepage', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: 'https://blog.casecompass.io' },
      { label: 'Security', href: '/security' },
      { label: 'Changelog', href: 'https://www.casecompass.io/changelog' },
    ],
  },
  {
    heading: 'Product',
    links: [
      { label: 'Waypoint AI', href: '/solutions/waypoint' },
      { label: 'Intelligent Intake', href: '/solutions/qualifications' },
      { label: 'Referral Network', href: '/#referrals' },
      { label: 'E-Signatures', href: '/#features' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Schedule a Demo', href: '#demo' },
      { label: 'Support', href: 'mailto:support@casecompass.io' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  const { openModal } = useDemoModal()
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        background: '#060d1f',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 0 32px',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/images/cc-logo-white.png"
              alt="Case Compass"
              width={160}
              height={24}
              style={{ height: '24px', width: 'auto', marginBottom: '16px' }}
            />
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
              Smart intake for plaintiff law firms.<br />Powered by AI.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '16px',
                }}
              >
                {col.heading}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(({ label, href }) => (
                  label === 'Schedule a Demo'
                    ? <button
                        key={label}
                        onClick={openModal}
                        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', textAlign: 'left' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
                      >
                        {label}
                      </button>
                    : <Link
                        key={label}
                        href={href}
                        style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
                      >
                        {label}
                      </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Case Compass · Your Legal Team&apos;s True North
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.15)' }}>
            Smart Intake · Waypoint AI · Referral Network · E-Signatures
          </p>
        </div>
      </div>
    </footer>
  )
}
