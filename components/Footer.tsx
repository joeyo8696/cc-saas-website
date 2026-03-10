'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook } from 'lucide-react'

const XLogo = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
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
      { label: 'Intelligent Intake', href: '/solutions/intake' },
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
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '20px' }}>
              Smart intake for plaintiff law firms.
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {[
                {
                  href: 'https://www.linkedin.com/company/case-compass/',
                  label: 'Case Compass on LinkedIn',
                  icon: <Linkedin size={16} />,
                  hoverBg: 'rgba(10,102,194,0.35)',
                },
                {
                  href: 'https://www.facebook.com/casecompass2024',
                  label: 'Case Compass on Facebook',
                  icon: <Facebook size={16} />,
                  hoverBg: 'rgba(24,119,242,0.35)',
                },
                {
                  href: 'https://x.com/Case_Compass_',
                  label: 'Case Compass on X',
                  icon: <XLogo size={16} />,
                  hoverBg: 'rgba(255,255,255,0.15)',
                },
              ].map(({ href, label, icon, hoverBg }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.5)', transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = hoverBg
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                  }}
                >
                  {icon}
                </Link>
              ))}
            </div>
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
