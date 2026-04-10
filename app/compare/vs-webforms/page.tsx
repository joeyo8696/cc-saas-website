import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Why Law Firms Outgrow Web Forms — Case Compass',
  description:
    'Static web forms collect contact information but can\'t qualify leads, score cases, follow up automatically, sync to your CRM, or close retainers. Five things a web form can\'t do for plaintiff law firms.',
  alternates: {
    canonical: 'https://www.casecompass.io/compare/vs-webforms',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/compare/vs-webforms',
    siteName: 'Case Compass',
    title: 'Why Law Firms Outgrow Web Forms | Case Compass',
    description: 'Static web forms collect names and emails. They don\'t qualify, score, route, or convert. See what a plaintiff intake platform does differently.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Why Law Firms Outgrow Web Forms' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Law Firms Outgrow Web Forms | Case Compass',
    description: 'Static forms collect leads. Intake platforms qualify them, score them, and close retainers. See the difference.',
  },
}

const vsWebformsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the problems with law firm contact forms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Static contact forms have five core limitations for law firms: they collect information but don\'t qualify it, they don\'t score leads against case criteria, they require manual follow-up by staff, they can\'t close a retainer in the same session, and they provide no attribution data connecting the form submission to the marketing channel that produced it. For plaintiff firms handling volume, these gaps lead to wasted staff time on unqualified leads, delayed retainer signing, and inability to optimize marketing spend.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should replace a law firm\'s contact form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For plaintiff law firms, a purpose-built intake platform replaces or supplements static contact forms. The replacement includes: branching qualification questions (not a flat form), automated lead scoring before human review, follow-up sequences triggered automatically, in-session e-signature retainer closing, and CRM sync with full intake data and attribution. This reduces time-to-retainer and eliminates manual triage of unqualified submissions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a web form qualify law firm leads automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A static web form collects whatever fields you put on it but cannot branch based on answers, evaluate whether a lead meets case criteria, or score the submission against firm-defined standards. Case Compass uses branching intake flows with Waypoint AI scoring — so by the time a lead reaches your dashboard, it has already been evaluated against your criteria.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I replace my law firm\'s contact form without disrupting my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass provides an embed SDK and WordPress plugin that let you place a Case Compass intake form inline on your existing website or landing page — no redirects, no popups. The form replaces your static contact form visually while adding qualification, scoring, and follow-up logic behind the scenes. Most firms are live within days.',
      },
    },
  ],
}

const vsWebformsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.casecompass.io/compare' },
    { '@type': 'ListItem', position: 3, name: 'Why Law Firms Outgrow Web Forms', item: 'https://www.casecompass.io/compare/vs-webforms' },
  ],
}

const fiveThings = [
  {
    num: '01',
    limitation: 'Web forms don\'t qualify leads',
    detail: 'A contact form collects whatever fields you put on it — name, phone, email, a text box. It doesn\'t branch based on what the claimant says, doesn\'t ask follow-up questions when something looks promising, and doesn\'t stop collecting when the lead clearly doesn\'t qualify. Your intake staff does all of that manually, after the submission.',
    solution: 'Case Compass uses dynamic, branching intake flows that ask the right follow-up questions based on every answer — so the information your team needs is already collected when they open the lead.',
  },
  {
    num: '02',
    limitation: 'Web forms don\'t score leads',
    detail: 'After a contact form is submitted, someone on your team opens the record and decides whether it\'s worth pursuing. That decision relies on the reviewer\'s experience, their current workload, and however many other leads are in the queue. Strong cases get missed. Time is spent on weak ones.',
    solution: 'Waypoint AI evaluates every intake submission against your firm\'s custom criteria — case value, liability, medical treatment, urgency, red flags — and returns a score before anyone on your team opens the file.',
  },
  {
    num: '03',
    limitation: 'Web forms don\'t follow up',
    detail: 'A static form submission lands in an inbox and waits. If your team is busy, it waits longer. Speed-to-lead is one of the most significant factors in whether a plaintiff firm retains a client — and static forms have no mechanism for automated follow-up.',
    solution: 'Case Compass triggers automated SMS and email sequences when a lead is submitted, keeping the claimant engaged while your team reviews the score. Live transfer can connect a qualified claimant to staff immediately.',
  },
  {
    num: '04',
    limitation: 'Web forms don\'t close retainers',
    detail: 'Getting a contact form submission is the beginning of the intake process. Signing the retainer requires a separate step — usually an email with a DocuSign link days later, sent to someone who may have already called another firm.',
    solution: 'Case Compass presents the retainer agreement as the next step in the intake flow. Claimants sign while they\'re still engaged — no separate tool, no follow-up email, no gap for competitors to fill.',
  },
  {
    num: '05',
    limitation: 'Web forms don\'t track attribution',
    detail: 'When a contact form is submitted, you usually know the referrer at most. You don\'t know which Google Ads campaign drove the click, which landing page converted, or whether that lead ultimately became a signed client. Without that data, marketing optimization is guesswork.',
    solution: 'Case Compass captures UTM parameters, originating URLs, referral partner attribution, and campaign data with every intake — and syncs them to your CRM. So you can see which channels produce signed cases, not just form fills.',
  },
]

export default function VsWebformsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vsWebformsFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vsWebformsBreadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #060d1f 0%, #071828 50%, #0a1f2e 100%)', padding: '120px 40px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6,182,212,0.08) 1px, transparent 0)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '420px', borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(8,145,178,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '28px' }}>
              <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.38)', fontSize: '0.78rem', fontFamily: 'var(--font-display)', fontWeight: 500, textDecoration: 'none', marginBottom: '16px' }}>
                ← All comparisons
              </Link>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(8,145,178,0.12)', border: '1px solid rgba(103,232,249,0.25)', borderRadius: '100px', padding: '6px 18px', marginBottom: '24px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, color: '#67e8f9', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Intake Platform vs. Static Web Forms</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Five things your contact form<br /><em>can&apos;t do</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto' }}>
              Web forms collect information. That&apos;s where their job ends. For plaintiff firms managing intake volume, what happens after the submission is where cases are won or lost.
            </p>
          </div>
        </section>

        {/* Five things */}
        <section style={{ background: '#f8fafc', padding: '96px 40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '64px' }}>
                Where static forms fall short for law firms
              </h2>
            </SectionReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {fiveThings.map(({ num, limitation, detail, solution }) => (
                <SectionReveal key={num}>
                  <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                    <div style={{ padding: '28px 32px 24px', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#e2e8f0', flexShrink: 0, lineHeight: 1, marginTop: '2px' }}>{num}</div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#dc2626', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <XCircle size={16} color="#dc2626" /> {limitation}
                          </h3>
                          <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>{detail}</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '20px 32px 24px', background: '#f0fdf4' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <p style={{ fontSize: '0.875rem', color: '#065f46', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>{solution}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#fff', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '48px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
            </SectionReveal>
            {vsWebformsFaqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
              <SectionReveal key={name}>
                <div style={{ borderBottom: '1px solid #e2e8f0', padding: '28px 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.75, margin: 0 }}>{acceptedAnswer.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* Related comparisons */}
        <section style={{ background: '#f8fafc', padding: '64px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <SectionReveal>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '20px' }}>
                More comparisons
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/compare/vs-chatbots" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>
                  vs. Chatbots <ArrowRight size={14} />
                </Link>
                <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>
                  All Comparisons <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0c4a6e)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Ready to replace your contact form?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              We can embed a Case Compass intake form on your existing site in days — no redesign, no redirects.
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
