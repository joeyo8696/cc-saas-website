import type { Metadata } from 'next'
import Link from 'next/link'
import { Plug, ArrowRight, CheckCircle } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Integrations — Connect Case Compass to Your Legal Tech Stack',
  description:
    'Case Compass integrates with Litify, Filevine, LeadDocket, Clio, HubSpot, Zapier, WordPress, and more. Sync qualified, scored intake data directly to your CRM — no manual re-entry.',
  alternates: {
    canonical: 'https://www.casecompass.io/integrations',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/integrations',
    siteName: 'Case Compass',
    title: 'Integrations | Case Compass',
    description: 'Connect Case Compass to Litify, Filevine, LeadDocket, Clio, HubSpot, Zapier, and WordPress. Qualified leads sync to your CRM automatically.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Integrations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrations | Case Compass',
    description: 'Connect Case Compass to your legal tech stack. Litify, Filevine, LeadDocket, Clio, HubSpot, Zapier, and more.',
  },
}

const integrationsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with Litify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates natively with Litify (Salesforce-based). Practice areas sync as case types, marketing campaigns sync automatically, the originating URL is passed with every new lead, and webform submissions are correctly labeled in Litify contact records. Qualified, scored intake data flows directly into Litify without manual re-entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with Filevine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates with Filevine. Intake answers, lead status, and scoring data from Waypoint sync to Filevine matters. This gives your legal team clean, structured case information at the time of assignment without manual data transfer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with LeadDocket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates with LeadDocket for lead routing and intake data sync. Intake submissions with Waypoint scores and full case details flow into LeadDocket automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with Clio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates with Clio Manage and Clio Grow. Qualified intakes can trigger matter creation in Clio, with intake answers mapped to the appropriate fields.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with HubSpot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass connects to HubSpot for marketing contact sync and lead management. Intake submissions create or update contacts in HubSpot with full intake data and lead source attribution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass have a WordPress plugin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass has an official WordPress plugin that lets you embed any Case Compass intake form or webform directly on your firm\'s WordPress website as a seamless inline experience — no redirects, no popups. A font_size parameter is available for visual customization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass connects to Zapier, enabling you to route intake data and lead events to thousands of other tools — including CRMs, spreadsheets, messaging apps, and project management platforms not natively supported.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I embed a Case Compass intake form on any website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass provides a JavaScript embed SDK that lets you drop an intake form inline on any website — not just WordPress. No redirects, no iframes, no popups. The form renders as a seamless part of your page.',
      },
    },
  ],
}

const integrationsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Integrations', item: 'https://www.casecompass.io/integrations' },
  ],
}

const integrations = [
  {
    id: 'litify',
    name: 'Litify',
    category: 'Legal CRM',
    color: '#1a56db',
    bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    description: 'Salesforce-based legal practice management. Practice areas sync as case types, campaigns sync automatically, and the originating URL is passed with every lead. Webform submissions are labeled correctly in contact records.',
    syncItems: ['Case types from practice areas', 'Marketing campaign attribution', 'Originating URL per lead', 'Lead status and intake answers', 'Waypoint AI scores'],
  },
  {
    id: 'filevine',
    name: 'Filevine',
    category: 'Legal CRM',
    color: '#7c3aed',
    bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    description: 'Modern legal project management. Intake answers, lead status, and Waypoint scores sync to Filevine matters — giving your legal team structured case information at assignment without manual data transfer.',
    syncItems: ['Intake answers to matter fields', 'Lead and intake status', 'Waypoint AI scores', 'Source and campaign attribution'],
  },
  {
    id: 'leaddocket',
    name: 'LeadDocket',
    category: 'Lead Management',
    color: '#059669',
    bg: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
    description: 'Purpose-built lead management for law firms. Case Compass funnels qualified intakes into LeadDocket with full scoring and intake data, enabling your team to work from a single lead view.',
    syncItems: ['Lead creation and routing', 'Full intake answer mapping', 'Waypoint scores', 'Referral partner attribution'],
  },
  {
    id: 'clio',
    name: 'Clio',
    category: 'Legal CRM',
    color: '#0369a1',
    bg: 'linear-gradient(135deg, #eff6ff, #e0f2fe)',
    description: 'The leading cloud-based legal practice management platform. Case Compass integrates with Clio Manage and Clio Grow — qualified intakes can trigger matter creation with intake data pre-mapped to the right fields.',
    syncItems: ['Matter creation from intakes', 'Contact and matter field mapping', 'Clio Grow CRM contact sync', 'Lead source and intake data'],
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'Marketing CRM',
    color: '#f97316',
    bg: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
    description: 'Marketing, sales, and CRM platform. Case Compass syncs intake submissions as contacts or leads in HubSpot, with full intake data and source attribution — bridging your legal intake and marketing stacks.',
    syncItems: ['Contact creation and update', 'Intake form data mapping', 'UTM and source attribution', 'Lead status pipeline sync'],
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'Automation',
    color: '#f59e0b',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    description: 'Connect Case Compass to thousands of apps — CRMs, spreadsheets, Slack, and more. Zapier lets you route intake events and lead data to any tool in your stack that doesn\'t have a native integration.',
    syncItems: ['Any intake submission event', 'Lead status change triggers', 'Waypoint score events', 'Custom field mapping to any app'],
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'Website',
    color: '#3b82f6',
    bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
    description: 'Official Case Compass Forms plugin for WordPress. Drop any intake form inline on your firm\'s WordPress site in minutes — no developer required. The form renders as a seamless part of your page, not an iframe popup.',
    syncItems: ['Inline form embed on any page', 'Visual font_size customization', 'No redirects or popups', 'Works with any WordPress theme'],
  },
  {
    id: 'embed-sdk',
    name: 'Embed SDK',
    category: 'Website',
    color: '#6366f1',
    bg: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
    description: 'Embed a Case Compass intake form inline on any website with a lightweight JavaScript snippet — not just WordPress. No redirects, no iframes. The form becomes part of your existing page experience.',
    syncItems: ['Any website or landing page', 'Inline rendering (no iframe)', 'Font and style customization', 'Full form functionality preserved'],
  },
]

export default function IntegrationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationsFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationsBreadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '100px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(165,180,252,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a5b4fc', marginBottom: '24px' }}>
              ✦ Integrations
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Connect intake to the tools your firm already uses
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
              Case Compass sits between your marketing channels and your CRM. Qualified, scored intake data flows directly into Litify, Filevine, LeadDocket, Clio, and more — no manual re-entry, no rip-and-replace.
            </p>
            <DemoButton style={{ padding: '14px 32px', borderRadius: '8px', fontSize: '0.9rem' }}>
              See Integrations in Action →
            </DemoButton>
          </div>
        </section>

        {/* Integration cards */}
        <section style={{ background: '#f8fafc', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '16px' }}>
                Every integration, explained
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', textAlign: 'center', marginBottom: '64px', maxWidth: '560px', margin: '0 auto 64px' }}>
                Each integration is built to sync the data that matters — not just a name and email, but scored case data, source attribution, and intake answers.
              </p>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
              {integrations.map(({ id, name, category, color, bg, description, syncItems }) => (
                <SectionReveal key={id}>
                  <div id={id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', scrollMarginTop: '100px' }}>
                    {/* Header */}
                    <div style={{ padding: '24px 28px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Plug size={20} color={color} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{category}</div>
                      </div>
                    </div>
                    {/* Body */}
                    <div style={{ padding: '20px 28px 24px' }}>
                      <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>{description}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {syncItems.map((item) => (
                          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckCircle size={14} color={color} style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.82rem', color: '#374151', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{item}</span>
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

        {/* How data flows */}
        <section style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
              <SectionReveal>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                  What gets synced
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7 }}>
                  Case Compass doesn&apos;t just push a name and email. Every sync includes the structured data that makes the lead actionable on day one.
                </p>
              </SectionReveal>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { label: 'Waypoint AI Score', desc: 'The numeric score, category breakdown, and written summary for every lead.' },
                { label: 'Full Intake Answers', desc: 'Every question and answer, mapped to CRM fields. Not just the contact info.' },
                { label: 'Source Attribution', desc: 'UTM parameters, originating URL, campaign, and referral partner — all synced.' },
                { label: 'Lead Status', desc: 'Real-time status updates as leads move through your intake pipeline.' },
              ].map(({ label, desc }) => (
                <SectionReveal key={label}>
                  <div style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                      <ArrowRight size={18} color="#4338ca" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{label}</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
            </SectionReveal>
            {integrationsFaqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
              <SectionReveal key={name}>
                <div style={{ borderBottom: '1px solid #e2e8f0', padding: '28px 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                    {name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>
                    {acceptedAnswer.text}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Ready to connect your stack?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              We&apos;ll show you exactly how Case Compass connects to your CRM during a live demo.
            </p>
            <DemoButton style={{ padding: '15px 36px', borderRadius: '8px', fontSize: '1rem' }}>
              Schedule a Demo →
            </DemoButton>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
