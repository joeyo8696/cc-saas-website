'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronDown, Menu, X,
  Waypoints, MessageSquare, PhoneForwarded, LayoutTemplate,
  GitBranch, FileSignature, UserCircle, BarChart3, Users,
  TrendingUp, Building2, HardHat, Inbox, Scale,
} from 'lucide-react'
import DemoButton from '@/components/DemoButton'

const platformLinks = {
  featured: {
    href: '/solutions/waypoint',
    eyebrow: 'AI Feature',
    name: 'Waypoint',
    description: 'The AI scoring engine built for law firms. Automatically qualify, rank, and prioritize every intake — powered by your firm\'s own criteria.',
  },
  intakeOS: {
    href: '/solutions/intake',
    eyebrow: 'Core Platform',
    name: 'Intake OS',
    description: 'The complete intake system — chatbots, webforms, live transfer, e-signatures, and automated nurture. From first click to signed retainer.',
  },
  standalone: {
    href: '/solutions/dwellex',
    eyebrow: 'Landlord Tenant',
    name: 'Dwellex',
    description: 'Complete case management for landlord-tenant law. Automated workflows from intake to lockout for eviction-focused practices.',
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
        { icon: MessageSquare, label: 'Intelligent Intake', href: '/solutions/intake' },
        { icon: PhoneForwarded, label: 'Live Transfer', href: '/solutions/intake' },
        { icon: LayoutTemplate, label: 'Intake Form Builder', href: '/solutions/intake' },
      ],
    },
    {
      heading: 'Workflow',
      links: [
        { icon: GitBranch, label: 'Timeline Automation', href: '/solutions/intake' },
        { icon: FileSignature, label: 'E-Signatures', href: '/solutions/esign' },
        { icon: UserCircle, label: 'Client Portal', href: '/solutions/intake' },
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
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                color: menuOpen ? '#fff' : 'rgba(255,255,255,0.7)',
                fontSize: '0.875rem', fontWeight: 500,
                background: 'none', border: 'none', padding: 0,
                cursor: 'pointer', fontFamily: 'inherit', transition: 'color 0.2s',
              }}
            >
              Platform
              <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            <div
              style={{
                position: 'absolute', top: '100%', left: '50%',
                width: '720px', paddingTop: '16px',
                opacity: menuOpen ? 1 : 0,
                visibility: menuOpen ? 'visible' : 'hidden',
                transform: menuOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
                transition: 'opacity 0.18s, transform 0.18s, visibility 0.18s',
                pointerEvents: menuOpen ? 'all' : 'none',
                zIndex: 300,
              }}
            >
              <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 24px 64px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.06)' }}>
                {/* Featured: Intake OS + Waypoint */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '16px 16px 0 0', overflow: 'hidden', borderBottom: '1px solid #e8edf5' }}>
                  <Link href={platformLinks.intakeOS.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px', background: 'linear-gradient(135deg, #f0fdf4, #eff6ff)', borderRight: '1px solid #e8edf5', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #dcfce7, #dbeafe)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #f0fdf4, #eff6ff)' }}
                  >
                    <div style={{ width: '40px', height: '40px', flexShrink: 0, background: 'linear-gradient(135deg, #0ea5e9, #4f46e5)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Inbox size={20} color="#fff" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0284c7', marginBottom: '3px' }}>{platformLinks.intakeOS.eyebrow}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{platformLinks.intakeOS.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.45 }}>{platformLinks.intakeOS.description}</div>
                    </div>
                  </Link>

                  <Link href={platformLinks.featured.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px', background: 'linear-gradient(135deg, #f5f3ff, #eff6ff)', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #ede9fe, #e0e7ff)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #f5f3ff, #eff6ff)' }}
                  >
                    <div style={{ width: '40px', height: '40px', flexShrink: 0, background: 'linear-gradient(135deg, #4f46e5, #818cf8)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Waypoints size={20} color="#fff" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '3px' }}>{platformLinks.featured.eyebrow}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{platformLinks.featured.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.45 }}>{platformLinks.featured.description}</div>
                    </div>
                  </Link>
                </div>

                {/* Industry row */}
                <div style={{ display: 'flex', borderBottom: '1px solid #e8edf5', padding: '0 8px' }}>
                  {[
                    { href: platformLinks.standalone.href, icon: Building2, label: 'Dwellex', sub: 'Landlord Tenant', iconBg: 'linear-gradient(135deg, #0f172a, #334155)' },
                    { href: platformLinks.workersComp.href, icon: HardHat, label: "Workers' Comp", sub: 'Workers\' Compensation', iconBg: 'linear-gradient(135deg, #b45309, #d97706)' },
                    { href: platformLinks.massTorts.href, icon: Scale, label: 'Mass Torts', sub: 'MDL Portfolio Mgmt', iconBg: 'linear-gradient(135deg, #7c3aed, #4f46e5)' },
                  ].map(({ href, icon: Icon, label, sub, iconBg }) => (
                    <Link key={label} href={href}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', flex: 1 }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#f8fafc' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '' }}
                    >
                      <div style={{ width: '30px', height: '30px', flexShrink: 0, borderRadius: '7px', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={15} color="#fff" />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 600, color: '#0f172a' }}>{label}</div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* 3-col grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', padding: '20px 20px 22px', gap: '0 12px' }}>
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
                </div>
              </div>
            </div>
          </div>

          <Link href="/#results" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
          >Results</Link>
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
          >About</Link>
          <Link href="https://blog.casecompass.io" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)' }}
          >Blog</Link>
          <DemoButton style={{ padding: '9px 22px', fontSize: '0.83rem', letterSpacing: '0.02em' }}>
            Schedule Demo
          </DemoButton>
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

      {/* ── Mobile drawer — positioned absolute so it anchors to nav's own bottom ── */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            height: 'calc(100dvh - 64px)',
            background: 'rgba(6,13,31,0.98)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 199,
            overflowY: 'auto',
          }}
        >
          {/* Platform accordion */}
          <button
            onClick={() => setMobilePlatformOpen((v) => !v)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 20px', background: 'none', border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Platform
            <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: mobilePlatformOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: 'rgba(255,255,255,0.5)' }} />
          </button>

          {mobilePlatformOpen && (
            <div style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Featured solutions */}
              {[
                { href: platformLinks.intakeOS.href, icon: Inbox, label: 'Intake OS', sub: 'Core Platform', iconBg: 'linear-gradient(135deg, #0ea5e9, #4f46e5)' },
                { href: platformLinks.featured.href, icon: Waypoints, label: 'Waypoint', sub: 'AI Scoring', iconBg: 'linear-gradient(135deg, #4f46e5, #818cf8)' },
                { href: '/solutions/referrals', icon: Users, label: 'Referral Network', sub: 'Partner Management', iconBg: 'linear-gradient(135deg, #059669, #0891b2)' },
                { href: '/solutions/esign', icon: FileSignature, label: 'E-Signatures', sub: 'Retainer Signing', iconBg: 'linear-gradient(135deg, #059669, #16a34a)' },
                { href: platformLinks.standalone.href, icon: Building2, label: 'Dwellex', sub: 'Landlord Tenant', iconBg: 'linear-gradient(135deg, #0f172a, #334155)' },
                { href: platformLinks.workersComp.href, icon: HardHat, label: "Workers' Comp", sub: "Workers' Compensation", iconBg: 'linear-gradient(135deg, #b45309, #d97706)' },
                { href: platformLinks.massTorts.href, icon: Scale, label: 'Mass Torts', sub: 'MDL Portfolio Mgmt', iconBg: 'linear-gradient(135deg, #7c3aed, #4f46e5)' },
              ].map(({ href, icon: Icon, label, sub, iconBg }) => (
                <Link key={href} href={href} className="mobile-nav-sublink" onClick={closeMobile}
                  style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <div style={{ width: '32px', height: '32px', flexShrink: 0, borderRadius: '8px', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} color="#fff" />
                  </div>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '0.9rem' }}>{label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <Link href="/#results" className="mobile-nav-link" onClick={closeMobile}>Results</Link>
          <Link href="/about" className="mobile-nav-link" onClick={closeMobile}>About</Link>
          <Link href="https://blog.casecompass.io" className="mobile-nav-link" target="_blank" rel="noopener" onClick={closeMobile}>Blog</Link>

          {/* CTA */}
          <div style={{ padding: '24px 20px' }}>
            <DemoButton style={{ width: '100%', padding: '14px', fontSize: '1rem', textAlign: 'center', justifyContent: 'center' }}>
              Schedule a Demo →
            </DemoButton>
          </div>
        </div>
      )}
    </nav>
  )
}
