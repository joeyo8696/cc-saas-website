import type { Metadata } from 'next'
import { GitMerge, Users, Zap, FileText, PenLine, Globe, Wrench, Package } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'

export const metadata: Metadata = {
  title: 'Changelog | Case Compass',
  description: 'Release notes and product updates for Case Compass — new features, improvements, and bug fixes.',
  alternates: {
    canonical: 'https://www.casecompass.io/changelog',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/changelog',
    siteName: 'Case Compass',
    title: 'Changelog | Case Compass',
    description: 'Release notes and product updates for Case Compass.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Changelog' }],
  },
}

const march2026 = [
  {
    icon: Users,
    color: '#4f46e5',
    bg: 'linear-gradient(135deg, #ede9fe, #dbeafe)',
    iconColor: '#4338ca',
    category: 'Referral Partners',
    items: [
      {
        title: 'Automated partner onboarding',
        desc: 'New referral partners now receive an invitation email with a secure link to set up their account. They can activate their portal and start submitting leads without any back-and-forth — no credentials to share, no manual setup required.',
      },
    ],
  },
  {
    icon: Zap,
    color: '#7c3aed',
    bg: 'linear-gradient(135deg, #ede9fe, #fdf4ff)',
    iconColor: '#7c3aed',
    category: 'Waypoint AI Scoring',
    items: [
      {
        title: 'Age-based intake rules',
        desc: 'Build Waypoint criteria based on a claimant\'s age, calculated automatically from a date of birth field — useful for case types with age eligibility requirements.',
      },
      {
        title: 'Apply criteria across all forms',
        desc: 'Criteria can now be set to apply to all intake forms at once. A warning indicator flags any criteria that haven\'t been assigned yet.',
      },
      {
        title: 'Faster, more reliable scoring',
        desc: 'Improved routing logic, better handling of edge cases, and a status message that lets claimants know their case is being evaluated while scoring runs.',
      },
    ],
  },
  {
    icon: FileText,
    color: '#0891b2',
    bg: 'linear-gradient(135deg, #ecfeff, #e0f2fe)',
    iconColor: '#0891b2',
    category: 'Intake & Forms',
    items: [
      {
        title: 'Export your leads',
        desc: 'Leads can now be exported directly from the dashboard — useful for reporting, external review, or sharing with co-counsel.',
      },
      {
        title: 'Skip the welcome screen',
        desc: 'Intake forms can now be configured to skip the intro/welcome page and drop claimants straight into the first question, reducing drop-off for high-intent traffic.',
      },
      {
        title: 'Drag-to-reorder answer options',
        desc: 'Answer choices in your intake forms are now draggable. Reorder options without deleting and re-adding them.',
      },
      {
        title: 'Media library',
        desc: 'A new media library lets you upload and reuse images and assets across your forms and communication templates.',
      },
      {
        title: 'Automatic campaign tracking',
        desc: 'Marketing sources and campaigns are created automatically when new traffic arrives — no manual configuration needed when launching a new ad or referral channel.',
      },
      {
        title: 'Mobile device detection',
        desc: 'The platform now captures whether a claimant is on mobile or desktop at intake, giving you better context on how leads are coming in.',
      },
    ],
  },
  {
    icon: PenLine,
    color: '#059669',
    bg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    iconColor: '#059669',
    category: 'eSign',
    items: [
      {
        title: 'Multiple signature requests in one block',
        desc: 'A single eSign step in your intake flow can now include multiple documents for signature — useful for multi-doc retainer packages.',
      },
      {
        title: 'Clients can download their signed documents',
        desc: 'Once signed, clients can download copies of their completed documents directly from the client portal.',
      },
      {
        title: 'SMS reminders for pending signatures',
        desc: 'Send SMS reminders to claimants with outstanding signature requests — not just email.',
      },
      {
        title: 'Signed documents attached to notification emails',
        desc: 'When a signature completion notification goes out, the signed document is automatically attached to the email.',
      },
    ],
  },
  {
    icon: Globe,
    color: '#b45309',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    iconColor: '#b45309',
    category: 'Litify Integration',
    items: [
      {
        title: 'Richer data sync',
        desc: 'Practice areas now sync as case types, marketing campaigns sync automatically, and the originating URL is passed with every new lead. Webform submissions are now correctly labeled as "webform" in Litify contact records.',
      },
    ],
  },
  {
    icon: Package,
    color: '#0369a1',
    bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    iconColor: '#0369a1',
    category: 'Webform Embed & WordPress',
    items: [
      {
        title: 'New embed SDK',
        desc: 'A new JavaScript snippet lets you embed any Case Compass webform directly on your website as a seamless inline experience — no redirects, no popups. Supports a font_size parameter for visual customization.',
      },
      {
        title: 'WordPress plugin',
        desc: 'An official Case Compass Forms plugin is now available for WordPress, making it easy to drop intake forms onto any page of your firm\'s site.',
      },
    ],
  },
  {
    icon: Wrench,
    color: '#64748b',
    bg: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
    iconColor: '#64748b',
    category: 'Fixes & Polish',
    items: [
      { title: 'Webform back button', desc: 'Back button in intake flows now works correctly and resets progress as expected.' },
      { title: 'eSign document state', desc: 'Fixed eSign documents incorrectly showing as unsigned after signing. Resend now sends the existing signed document without regenerating it.' },
      { title: 'Embedded webform display', desc: 'Fixed URL detection and padding issues for embedded webforms.' },
      { title: 'Timeline entry titles', desc: 'Timeline entry titles now populate correctly on the lead profile.' },
      { title: 'Lead profile reliability', desc: 'Fixed a parse error on lead profile load. Form type now correctly displays.' },
      { title: 'Address field autocomplete', desc: 'Address fields with Google Maps autocomplete now work correctly.' },
      { title: 'Template name display', desc: 'Email and SMS template names now display correctly in the template editor.' },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0d2b4e)', padding: '100px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '72px', height: '72px', borderRadius: '18px', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', marginBottom: '24px' }}>
              <GitMerge size={36} color="#fff" />
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Changelog
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              New features, improvements, and fixes — shipped to every Case Compass account.
            </p>
          </div>
        </section>

        {/* March 2026 Release */}
        <section style={{ background: '#f8fafc', padding: '80px 40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* Release header */}
            <SectionReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '56px' }}>
                <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GitMerge size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: '4px' }}>
                    Release
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', lineHeight: 1.2 }}>
                    March 2026
                  </h2>
                </div>
                <div style={{ marginLeft: 'auto', flexShrink: 0, background: '#4f46e5', color: '#fff', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '0.05em', padding: '5px 14px', borderRadius: '100px' }}>
                  Latest
                </div>
              </div>
            </SectionReveal>

            {/* Category cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {march2026.map(({ icon: Icon, bg, iconColor, category, items }) => (
                <SectionReveal key={category}>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
                    {/* Category header */}
                    <div style={{ padding: '20px 28px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} color={iconColor} />
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                        {category}
                      </h3>
                      <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: '#94a3b8', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '2px 10px' }}>
                        {items.length} {items.length === 1 ? 'update' : 'updates'}
                      </span>
                    </div>
                    {/* Items */}
                    <div style={{ padding: '8px 0' }}>
                      {items.map((item, i) => (
                        <div
                          key={item.title}
                          style={{
                            padding: '18px 28px',
                            borderBottom: i < items.length - 1 ? '1px solid #f8fafc' : 'none',
                            display: 'flex',
                            gap: '14px',
                            alignItems: 'flex-start',
                          }}
                        >
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: iconColor, flexShrink: 0, marginTop: '8px' }} />
                          <div>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '5px' }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', marginBottom: '16px' }}>
              Questions about what&apos;s new?
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
              Our team is happy to walk you through any of these updates on a call.
            </p>
            <a
              href="https://calendly.com/casecompass/case-compass-intro"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#4f46e5', color: '#fff', padding: '13px 28px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none' }}
            >
              Schedule a Demo
            </a>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
