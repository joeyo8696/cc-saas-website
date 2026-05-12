import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, FileText, GitBranch, Layers, CheckCircle, ArrowRight, Shield, Zap, MessageSquare } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Claude AI Connector — Case Compass in Claude',
  description:
    'Connect Case Compass to Claude AI. Search leads, check case status, view timeline progress, and review documents — all from a Claude conversation.',
  alternates: {
    canonical: 'https://www.casecompass.io/connectors/claude',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/connectors/claude',
    siteName: 'Case Compass',
    title: 'Claude AI Connector | Case Compass',
    description: 'Ask Claude about your leads, cases, and intake timelines — directly connected to your Case Compass data.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Claude Connector' }],
  },
}

const tools = [
  {
    icon: Search,
    color: '#4f4ce2',
    bg: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
    name: 'Search Leads',
    description: 'Search your entire lead database by name, email, or phone number. Filter by case status — Retained, Declined, Pending — and get an interactive results table rendered directly in the conversation.',
    prompts: ['"Find all leads named Smith"', '"Show me retained leads from this month"'],
  },
  {
    icon: FileText,
    color: '#0369a1',
    bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)',
    name: 'Get Lead Details',
    description: 'Pull the full file on any lead — contact info, case type, all intake messages, AI Waypoint score and reasoning, case insights, and current status — without touching the dashboard.',
    prompts: ['"What\'s the full case summary for Jane Doe?"', '"Show me John Smith\'s intake answers and AI score"'],
  },
  {
    icon: GitBranch,
    color: '#059669',
    bg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    name: 'Timeline Progress',
    description: 'See a visual step-by-step tracker of where any lead sits in your intake timeline. Completed steps, the current active step, and upcoming waypoints are rendered as an interactive progress bar.',
    prompts: ['"Where is Jane Doe in the intake process?"', '"Show me the timeline progress for John Smith"'],
  },
  {
    icon: Layers,
    color: '#7c3aed',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    name: 'Documents & Records',
    description: 'List all documents uploaded for a lead and check which requested records — medical records, police reports — are still outstanding.',
    prompts: ['"What documents has Jane Doe submitted?"', '"Are there any pending document requests for John Smith?"'],
  },
  {
    icon: MessageSquare,
    color: '#b45309',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    name: 'Case Types & Timelines',
    description: 'Browse all practice areas and their associated intake forms. List available intake timelines and drill into individual steps — useful for onboarding staff or auditing your intake setup.',
    prompts: ['"List all our case types"', '"Walk me through the Personal Injury intake timeline"'],
  },
]

const steps = [
  { num: '1', title: 'Open Claude.ai settings', body: 'Go to Claude.ai → click your profile → Settings → Connectors.' },
  { num: '2', title: 'Add custom connector', body: 'Scroll to the bottom and click "Add custom connector". Enter the URL: https://api.casecompass.io/mcp' },
  { num: '3', title: 'Sign in to Case Compass', body: 'You\'ll be redirected to a secure login page. Enter your organization subdomain (e.g. acme-law), email, and password.' },
  { num: '4', title: 'Start asking', body: 'Claude now has access to your Case Compass data. Try: "Find leads for Jane Doe" or "Show me this week\'s retained cases."' },
]

const faqs = [
  {
    q: 'Which Claude plans support connectors?',
    a: 'Custom Connectors are available on Claude Pro, Max, and Team plans on claude.ai.',
  },
  {
    q: 'What data can Claude access?',
    a: 'Claude can read leads, conversations, intake messages, AI Waypoint scores, timeline progress, and documents within your organization. Claude cannot create, edit, or delete any data — access is read-only.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Authentication uses OAuth 2.0 — your credentials are verified directly by Case Compass and never shared with Anthropic. All data is transmitted over HTTPS/TLS. Claude only accesses data you explicitly ask about in a conversation.',
  },
  {
    q: 'Does this work with Claude Desktop as well?',
    a: 'Yes. The connector works on claude.ai (web), Claude Desktop, and Claude Code using the same URL and login flow.',
  },
  {
    q: 'Can multiple users in my firm connect?',
    a: 'Yes. Each staff member connects with their own Case Compass credentials. Claude will only return data their account has access to.',
  },
  {
    q: 'What is the MCP server URL?',
    a: 'https://api.casecompass.io/mcp — this is the same URL for all Case Compass customers.',
  },
]

export default function ClaudeConnectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
              { '@type': 'ListItem', position: 2, name: 'Connectors', item: 'https://www.casecompass.io/connectors' },
              { '@type': 'ListItem', position: 3, name: 'Claude', item: 'https://www.casecompass.io/connectors/claude' },
            ],
          }),
        }}
      />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '100px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(165,180,252,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: '24px' }}>
              ✦ Claude AI Connector
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Ask Claude about your cases
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '16px', maxWidth: '600px', margin: '0 auto 16px' }}>
              The Case Compass connector for Claude gives your team natural language access to leads, case status, intake timelines, and documents — without opening the dashboard.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginBottom: '40px', fontFamily: 'var(--font-display)' }}>
              Available on Claude Pro, Max &amp; Team · Works on claude.ai, Claude Desktop, and Claude Code
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://claude.ai/settings/connectors"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#4f4ce2', color: '#fff', borderRadius: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}
              >
                Connect in Claude.ai <ArrowRight size={16} />
              </a>
              <DemoButton style={{ padding: '14px 28px', borderRadius: '8px', fontSize: '0.9rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}>
                See a Demo
              </DemoButton>
            </div>
          </div>
        </section>

        {/* ── What you can ask ── */}
        <section style={{ background: '#f8fafc', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '16px' }}>
                What Claude can do with your data
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', textAlign: 'center', maxWidth: '560px', margin: '0 auto 64px' }}>
                Seven tools — all read-only, all responding in plain English with rich interactive UI where it helps.
              </p>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {tools.map(({ icon: Icon, color, bg, name, description, prompts }) => (
                <SectionReveal key={name}>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', height: '100%' }}>
                    <div style={{ padding: '24px 24px 18px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={19} color={color} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>{name}</span>
                    </div>
                    <div style={{ padding: '18px 24px 22px' }}>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>{description}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        {prompts.map(p => (
                          <div key={p} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '7px 12px', fontFamily: 'var(--font-display)', fontSize: '0.78rem', color: '#374151' }}>
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Setup steps ── */}
        <section style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Connect in four steps
              </h2>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map(({ num, title, body }, i) => (
                <SectionReveal key={num} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div style={{ display: 'flex', gap: '24px', paddingBottom: i < steps.length - 1 ? '0' : '0', position: 'relative' }}>
                    {i < steps.length - 1 && (
                      <div style={{ position: 'absolute', left: '19px', top: '44px', bottom: '0', width: '2px', background: 'linear-gradient(#4f4ce2, #e5e7eb)', zIndex: 0 }} />
                    )}
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#4f4ce2', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0, zIndex: 1 }}>
                      {num}
                    </div>
                    <div style={{ paddingBottom: '40px', flex: 1 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', marginTop: '8px' }}>{title}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>{body}</p>
                      {num === '2' && (
                        <div style={{ marginTop: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '7px', padding: '10px 14px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#4f4ce2', display: 'inline-block' }}>
                          https://api.casecompass.io/mcp
                        </div>
                      )}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust / security bar ── */}
        <section style={{ background: '#f8fafc', padding: '56px 40px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { icon: Shield, title: 'Read-only access', body: 'Claude can never create, edit, or delete your data. Every tool is strictly read-only.' },
              { icon: Zap, title: 'OAuth 2.0 security', body: 'Your credentials are authenticated directly by Case Compass and never shared with Anthropic.' },
              { icon: CheckCircle, title: 'HTTPS encrypted', body: 'All data in transit is protected by TLS. Nothing is stored outside your existing Case Compass account.' },
            ].map(({ icon: Icon, title, body }) => (
              <SectionReveal key={title}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} color="#4338ca" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{title}</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
            </SectionReveal>
            {faqs.map(({ q, a }) => (
              <SectionReveal key={q}>
                <div style={{ borderBottom: '1px solid #e2e8f0', padding: '26px 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{q}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>{a}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Ready to ask Claude about your cases?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              Connect in under two minutes. No developer setup required.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://claude.ai/settings/connectors"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 32px', background: '#4f4ce2', color: '#fff', borderRadius: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
              >
                Connect Now <ArrowRight size={16} />
              </a>
              <DemoButton style={{ padding: '15px 32px', borderRadius: '8px', fontSize: '0.95rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}>
                Request a Demo
              </DemoButton>
            </div>
            <p style={{ marginTop: '24px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-display)' }}>
              Questions? <Link href="mailto:support@casecompass.io" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>support@casecompass.io</Link>
            </p>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
