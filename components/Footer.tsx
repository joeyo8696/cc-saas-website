'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook } from 'lucide-react'
import { useDemoModal } from './DemoModalProvider'
import './footer.css'

const XLogo = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const footerLinks = [
  {
    heading: 'Pages',
    links: [
      { label: 'Homepage', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: 'https://blog.casecompass.io' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Security', href: '/security' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    heading: 'Product',
    links: [
      { label: 'Waypoint AI', href: '/solutions/waypoint' },
      { label: 'IntakeOS', href: '/intakeos' },
      { label: 'Torvana', href: '/torvana' },
      { label: 'Dwellex', href: '/dwellex' },
      { label: 'Referral Network', href: '/solutions/referrals' },
      { label: 'E-Signatures', href: '/solutions/esign' },
      { label: 'Mass Torts', href: '/solutions/mass-torts' },
      { label: 'Workers\' Comp', href: '/solutions/workers-comp' },
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

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/case-compass/',
    label: 'Case Compass on LinkedIn',
    network: 'linkedin',
    icon: <Linkedin size={16} />,
  },
  {
    href: 'https://www.facebook.com/casecompass2024',
    label: 'Case Compass on Facebook',
    network: 'facebook',
    icon: <Facebook size={16} />,
  },
  {
    href: 'https://x.com/Case_Compass_',
    label: 'Case Compass on X',
    network: 'x',
    icon: <XLogo size={16} />,
  },
]

export default function Footer() {
  const { openModal } = useDemoModal()
  return (
    <footer className="cc-footer">
      <div className="cc-footer-inner">
        <div className="cc-footer-grid">
          <div className="cc-footer-brand">
            <Image
              src="/images/cc-logo-white.png"
              alt="Case Compass"
              width={160}
              height={24}
              className="cc-footer-logo"
            />
            <p className="cc-footer-tagline">
              Smart intake for plaintiff law firms.
            </p>
            <div className="cc-footer-social">
              {socialLinks.map(({ href, label, network, icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-network={network}
                  className="cc-footer-social-link"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading} className="cc-footer-col">
              <h4 className="cc-footer-heading">{col.heading}</h4>
              <div className="cc-footer-links">
                {col.links.map(({ label, href }) => (
                  label === 'Schedule a Demo'
                    ? <button
                        key={label}
                        type="button"
                        onClick={openModal}
                        className="cc-footer-link"
                      >
                        {label}
                      </button>
                    : <Link
                        key={label}
                        href={href}
                        className="cc-footer-link"
                      >
                        {label}
                      </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cc-footer-bottom">
          <p className="cc-footer-copy">
            © {new Date().getFullYear()} Case Compass · Your Legal Team&apos;s True North
          </p>
          <p className="cc-footer-meta">
            Smart Intake · Waypoint AI · Referral Network · E-Signatures
          </p>
        </div>
      </div>
    </footer>
  )
}
