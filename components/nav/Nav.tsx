'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronDown, Menu, X,
  Waypoints, MessageSquare, PhoneForwarded, LayoutTemplate,
  GitBranch, FileSignature, UserCircle, BarChart3, Users,
  TrendingUp, Building2, Inbox,
} from 'lucide-react'
import DemoButton from '@/components/DemoButton'
import './nav.css'

const platformLinks = {
  featured: {
    href: '/solutions/waypoint',
    eyebrow: 'AI Feature',
    name: 'Waypoint',
    description: 'The AI scoring engine built for law firms. Automatically qualify, rank, and prioritize every intake — powered by your firm\'s own criteria.',
  },
  intakeOS: {
    href: '/intakeos',
    eyebrow: 'Core Platform',
    name: 'Intake OS',
    description: 'The complete intake system — chatbots, webforms, live transfer, e-signatures, and automated nurture. From first click to signed retainer.',
  },
  agentPlatform: {
    href: '/solutions/agent-platform',
    eyebrow: 'Inside IntakeOS',
    name: 'Agent Workforce',
    description: 'Live transfer inbox, RingCentral softphone, Agent SOPs, speed-to-lead dashboards, and outbound queues for intake teams.',
  },
  standalone: {
    href: '/dwellex',
    eyebrow: 'Landlord Tenant',
    name: 'Dwellex',
    description: 'Complete case management for landlord-tenant law. Automated workflows from intake to lockout for eviction-focused practices.',
  },
  torvana: {
    href: '/torvana',
    eyebrow: 'Healthcare',
    name: 'Torvana',
    description: 'Patient intake, scheduling, records and a referring-attorney portal — built for imaging centers, orthopedics, surgery centers and pain management.',
  },
  workersComp: {
    href: '/solutions/workers-comp',
    eyebrow: 'Workers\' Compensation',
    name: 'Workers\' Comp',
    description: 'Intake qualification, speed-to-lead outreach, and document automation built for high-volume workers\' comp firms.',
  },
  massTorts: {
    href: '/solutions/mass-torts',
    eyebrow: 'Mass Tort',
    name: 'Mass Torts',
    description: 'Score every intake and manage every MDL with portfolio dashboards, AI lead scoring, and campaign-level analytics.',
  },
  columns: [
    {
      heading: 'Intake',
      links: [
        { icon: MessageSquare, label: 'Intelligent Intake', href: '/intakeos' },
        { icon: PhoneForwarded, label: 'Live Transfer', href: '/solutions/agent-platform' },
        { icon: LayoutTemplate, label: 'Intake Form Builder', href: '/intakeos' },
      ],
    },
    {
      heading: 'Workflow',
      links: [
        { icon: GitBranch, label: 'Timeline Automation', href: '/intakeos' },
        { icon: PhoneForwarded, label: 'Agent Workforce', href: '/solutions/agent-platform' },
        { icon: FileSignature, label: 'E-Signatures', href: '/solutions/esign' },
        { icon: UserCircle, label: 'Client Portal', href: '/intakeos' },
      ],
    },
    {
      heading: 'Intelligence',
      links: [
        { icon: BarChart3, label: 'Enterprise Analytics', href: '/#results' },
        { icon: Users, label: 'Referral Network', href: '/solutions/referrals' },
        { icon: TrendingUp, label: 'Marketing Attribution', href: '/#results' },
      ],
    },
  ],
}

export default function Nav() {
  const pathname = usePathname()
  const isTorvana = pathname === '/torvana'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change / resize
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => { setMobileOpen(false); setMobilePlatformOpen(false) }

  return (
    <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          height: '64px',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(6,13,31,0.96)' : 'rgba(6,13,31,0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          transition: 'background 0.3s',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }} onClick={closeMobile}>
          <Image
            src="/images/cc-logo-white.png"
            alt="Case Compass"
            width={160}
            height={26}
            style={{ height: '26px', width: 'auto', display: 'block' }}
            priority
          />
        </Link>

        {/* ── Desktop links ── */}
        <div className="nav-desktop-links" style={{ alignItems: 'center', gap: '32px', paddingRight: '20px' }}>

          {/* Platform mega menu */}
          <div
            className="nav-item"
            style={{ position: 'relative' }}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              className={`cc-nav-link${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
            >
              Platform
              <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            <div
              style={{
                position: 'absolute', top: '100%', left: '50%',
                width: '820px', paddingTop: '16px',
                opacity: menuOpen ? 1 : 0,
                visibility: menuOpen ? 'visible' : 'hidden',
                transform: menuOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
                transition: 'opacity 0.18s, transform 0.18s, visibility 0.18s',
                pointerEvents: menuOpen ? 'all' : 'none',
                zIndex: 300,
              }}
            >
              <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 24px 64px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.06)' }}>
                {/* Featured: Intake OS + Torvana + Dwellex */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderRadius: '16px 16px 0 0', overflow: 'hidden', borderBottom: '1px solid #e8edf5' }}>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', padding: '18px', background: 'linear-gradient(135deg, #f0fdf4, #eff6ff)', borderRight: '1px solid #e8edf5' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #dcfce7, #dbeafe)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #f0fdf4, #eff6ff)' }}
                  >
                    <Link href={platformLinks.intakeOS.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textDecoration: 'none' }}>
                      <div style={{ width: '36px', height: '36px', flexShrink: 0, background: 'linear-gradient(135deg, #0ea5e9, #4f46e5)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Inbox size={17} color="#fff" />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0284c7', marginBottom: '3px' }}>{platformLinks.intakeOS.eyebrow}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{platformLinks.intakeOS.name}</div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: 1.45 }}>{platformLinks.intakeOS.description}</div>
                      </div>
                    </Link>
                    <Link
                      href={platformLinks.featured.href}
                      style={{
                        marginTop: '12px', marginLeft: '48px', display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '0.72rem', fontWeight: 600, color: '#4f46e5', textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#3730a3' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#4f46e5' }}
                    >
                      <Waypoints size={13} />
                      Includes Waypoint AI scoring →
                    </Link>
                  </div>

                  <Link href={platformLinks.torvana.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '18px', background: 'linear-gradient(135deg, #f5f3ff, #eef2ff)', borderRight: '1px solid #e8edf5', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #ede9fe, #e0e7ff)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #f5f3ff, #eef2ff)' }}
                  >
                    <div style={{ width: '36px', height: '36px', flexShrink: 0, background: 'linear-gradient(135deg, #504ce2, #8b87f0)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '6px' }}>
                      <img src="/images/Torvana-Illustrator-Master.svg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#504ce2', marginBottom: '3px' }}>{platformLinks.torvana.eyebrow}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{platformLinks.torvana.name}</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: 1.45 }}>{platformLinks.torvana.description}</div>
                    </div>
                  </Link>

                  <Link href={platformLinks.standalone.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '18px', background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #f1f5f9, #e2e8f0)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #f8fafc, #f1f5f9)' }}
                  >
                    <div style={{ width: '36px', height: '36px', flexShrink: 0, background: 'linear-gradient(135deg, #0f172a, #334155)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={17} color="#fff" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '3px' }}>{platformLinks.standalone.eyebrow}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{platformLinks.standalone.name}</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: 1.45 }}>{platformLinks.standalone.description}</div>
                    </div>
                  </Link>
                </div>

                {/* 3-col grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '20px 20px 22px', gap: '0 12px' }}>
                  {platformLinks.columns.map((col) => (
                    <div key={col.heading}>
                      <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', padding: '0 8px', marginBottom: '8px' }}>{col.heading}</div>
                      {col.links.map(({ icon: Icon, label, href }) => (
                        <Link key={label} href={href}
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '8px', textDecoration: 'none', marginBottom: '2px' }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#f8fafc' }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '' }}
                        >
                          <div style={{ width: '28px', height: '28px', flexShrink: 0, borderRadius: '6px', background: 'linear-gradient(135deg,#ede9fe,#dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon size={13} color="#4338ca" />
                          </div>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600, color: '#0f172a' }}>{label}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                  {/* By Practice — text only */}
                  <div>
                    <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', padding: '0 8px', marginBottom: '8px' }}>By Practice</div>
                    {[
                      { label: "Workers' Comp", sub: "Workers' Compensation", href: platformLinks.workersComp.href },
                      { label: 'Mass Torts', sub: 'MDL Portfolio Mgmt', href: platformLinks.massTorts.href },
                    ].map(({ label, sub, href }) => (
                      <Link key={label} href={href}
                        style={{ display: 'flex', flexDirection: 'column', padding: '7px 8px', borderRadius: '8px', textDecoration: 'none', marginBottom: '2px' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#f8fafc' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '' }}
                      >
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600, color: '#0f172a' }}>{label}</span>
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '1px' }}>{sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/#results" className="cc-nav-link">Results</Link>
          <Link href="/about" className="cc-nav-link">About</Link>
          <Link href="https://blog.casecompass.io" target="_blank" rel="noopener" className="cc-nav-link">Blog</Link>
          {isTorvana ? (
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('torvana:open-modal'))}
              style={{ padding: '9px 22px', fontSize: '0.83rem', letterSpacing: '0.02em', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, cursor: 'pointer', border: 'none', background: 'linear-gradient(135deg, #504ce2, #8b87f0)', color: '#fff', boxShadow: '0 8px 24px rgba(80,76,226,0.35)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              Let&apos;s talk
            </button>
          ) : (
            <DemoButton style={{ padding: '9px 22px', fontSize: '0.83rem', letterSpacing: '0.02em' }}>
              Schedule Demo
            </DemoButton>
          )}
        </div>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          className="nav-hamburger-btn"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#fff', padding: '8px', display: 'none',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="cc-mobile-drawer">
          <button
            type="button"
            className="cc-mobile-drawer-toggle"
            onClick={() => setMobilePlatformOpen((v) => !v)}
            aria-expanded={mobilePlatformOpen}
          >
            Platform
            <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobilePlatformOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>

          {mobilePlatformOpen && (
            <div className="cc-mobile-platform">
              {/* Featured platforms — matches desktop mega menu */}
              <div className="cc-mobile-featured">
                <Link href={platformLinks.intakeOS.href} className="cc-mobile-featured-card intake" onClick={closeMobile}>
                  <div className="cc-mobile-featured-icon" style={{ background: 'linear-gradient(135deg, #0ea5e9, #4f46e5)' }}>
                    <Inbox size={16} color="#fff" />
                  </div>
                  <div>
                    <span className="cc-mobile-eyebrow">{platformLinks.intakeOS.eyebrow}</span>
                    <strong>{platformLinks.intakeOS.name}</strong>
                    <p>{platformLinks.intakeOS.description}</p>
                  </div>
                </Link>
                <Link href={platformLinks.featured.href} className="cc-mobile-waypoint-link" onClick={closeMobile}>
                  <Waypoints size={13} />
                  Includes Waypoint AI scoring →
                </Link>

                <Link href={platformLinks.torvana.href} className="cc-mobile-featured-card torvana" onClick={closeMobile}>
                  <div className="cc-mobile-featured-icon torvana-icon" style={{ background: 'linear-gradient(135deg, #504ce2, #8b87f0)' }}>
                    <img src="/images/Torvana-Illustrator-Master.svg" alt="" />
                  </div>
                  <div>
                    <span className="cc-mobile-eyebrow">{platformLinks.torvana.eyebrow}</span>
                    <strong>{platformLinks.torvana.name}</strong>
                    <p>{platformLinks.torvana.description}</p>
                  </div>
                </Link>

                <Link href={platformLinks.standalone.href} className="cc-mobile-featured-card dwellex" onClick={closeMobile}>
                  <div className="cc-mobile-featured-icon" style={{ background: 'linear-gradient(135deg, #0f172a, #334155)' }}>
                    <Building2 size={16} color="#fff" />
                  </div>
                  <div>
                    <span className="cc-mobile-eyebrow">{platformLinks.standalone.eyebrow}</span>
                    <strong>{platformLinks.standalone.name}</strong>
                    <p>{platformLinks.standalone.description}</p>
                  </div>
                </Link>
              </div>

              {platformLinks.columns.map((col) => (
                <div key={col.heading} className="cc-mobile-col">
                  <div className="cc-mobile-col-heading">{col.heading}</div>
                  {col.links.map(({ icon: Icon, label, href }) => (
                    <Link key={label} href={href} className="cc-mobile-col-link" onClick={closeMobile}>
                      <span className="cc-mobile-col-icon"><Icon size={13} /></span>
                      {label}
                    </Link>
                  ))}
                </div>
              ))}

              <div className="cc-mobile-col">
                <div className="cc-mobile-col-heading">By Practice</div>
                <Link href={platformLinks.workersComp.href} className="cc-mobile-col-link stacked" onClick={closeMobile}>
                  <span>{platformLinks.workersComp.name}</span>
                  <small>{platformLinks.workersComp.eyebrow}</small>
                </Link>
                <Link href={platformLinks.massTorts.href} className="cc-mobile-col-link stacked" onClick={closeMobile}>
                  <span>{platformLinks.massTorts.name}</span>
                  <small>MDL Portfolio Mgmt</small>
                </Link>
              </div>
            </div>
          )}

          <Link href="/#results" className="mobile-nav-link" onClick={closeMobile}>Results</Link>
          <Link href="/about" className="mobile-nav-link" onClick={closeMobile}>About</Link>
          <Link href="https://blog.casecompass.io" className="mobile-nav-link" target="_blank" rel="noopener" onClick={closeMobile}>Blog</Link>

          <div className="cc-mobile-drawer-cta">
            {isTorvana ? (
              <button
                type="button"
                className="cc-mobile-drawer-cta-btn"
                onClick={() => { closeMobile(); window.dispatchEvent(new CustomEvent('torvana:open-modal')) }}
              >
                Let&apos;s talk
              </button>
            ) : (
              <DemoButton style={{ width: '100%', padding: '14px', fontSize: '1rem', textAlign: 'center', justifyContent: 'center' }}>
                Schedule a Demo →
              </DemoButton>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
