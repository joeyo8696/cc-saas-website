import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Case Compass vs. AI Intake Tools — The Real Difference',
  description:
    'SimplyConvert, ngage, and generic AI intake tools capture leads. Case Compass qualifies, scores, and converts them. See the full comparison for plaintiff law firms.',
  alternates: {
    canonical: 'https://www.casecompass.io/compare/vs-ai-intake-tools',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/compare/vs-ai-intake-tools',
    siteName: 'Case Compass',
    title: 'Case Compass vs. AI Intake Tools | SimplyConvert, ngage, and others',
    description: 'Not all AI intake tools are the same. See how Case Compass compares on scoring, MDL toolkits, referral tracking, med records, and post-intake automation.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass vs AI Intake Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Compass vs. AI Intake Tools | Case Compass',
    description: 'Most AI intake tools are built to have conversations. Case Compass is built to win cases. See the full comparison.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Case Compass different from SimplyConvert, ngage, or Intaker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI intake tools are built to capture and qualify leads conversationally. Case Compass does that — and adds a layer most competitors don\'t have: Waypoint AI scoring, which evaluates every submission against your custom case criteria before a human reviews it. On top of that, Case Compass includes a referral partner portal with fee tracking, post-intake automation timelines, integrated medical record retrieval, and MDL-specific intake toolkits for ongoing mass tort litigation. It\'s the difference between a smarter intake form and a complete intake operating system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Don\'t other AI intake tools also score leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some tools offer basic qualification gates — yes/no questions that filter out obvious mismatches. Case Compass\'s Waypoint engine does something different: it applies configurable, multi-dimensional scoring across case value, liability strength, treatment timeline, urgency flags, and documentation completeness. Scores are visible in the dashboard before your team opens the file, so leads are ranked and prioritized automatically — not just passed or failed.',
      },
    },
    {
      '@type': 'Question',
      name: 'We\'re already using an AI intake tool. Why would we switch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The right question isn\'t whether your current tool is capturing leads — it\'s whether it\'s telling you which ones are worth pursuing. If your team is still opening every intake file to manually assess case quality, your intake layer isn\'t doing its full job. Case Compass adds a scored, structured case packet to every submission, so attorneys and paralegals open files with a recommendation, not a blank form. If you\'re running mass tort campaigns, the MDL-specific intake toolkits, referral partner tracking, and automated med record retrieval are capabilities most tools simply don\'t have.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Waypoint and how is it different from AI used in other intake tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waypoint is Case Compass\'s built-in AI scoring engine, purpose-built for plaintiff intake. You define scoring criteria by practice area — PI, workers\' comp, mass tort, social security — and Waypoint applies those criteria to every intake submission automatically. The output is a litigability score with a breakdown by dimension, so your team can see not just whether a case scores well, but why. Most AI in competing tools is applied to the conversation layer (making the chatbot feel natural). Waypoint applies AI to the decision layer — which cases you should take and which you should pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do other AI intake tools handle mass tort and MDL intake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI intake tools are built for general legal intake — they can be configured for any practice area but don\'t have built-in MDL toolkits. Case Compass maintains practice-specific intake toolkits for active mass tort litigation — social media addiction (MDL 3047), hair relaxer cancer claims (MDL 3060), and others — with pre-configured branching logic, defendant-specific evidence capture, and scoring criteria aligned to current litigation standards. These are maintained and updated as MDLs evolve, so your firm doesn\'t have to build and maintain intake forms from scratch for every new campaign.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass include automated follow-up after intake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most AI intake tools end when the form is submitted. Case Compass includes a visual Timeline Builder — a no-code workflow tool for building post-intake automation: automated emails and SMS, e-sign reminders, medical record retrieval requests, delays, branch logic by score or case type, and CRM sync. Leads that don\'t immediately qualify can be nurtured automatically. Leads that qualify can be routed to live transfer or attorney review immediately. The intake event triggers the workflow; your team handles the cases that are ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about referral partner management? Do other intake tools have that?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI intake tools don\'t have a referral partner portal. Case Compass includes a full referral partner portal — co-counsel, advertising partners, and lead gen networks each get their own branded intake link, and all cases submitted through that link are attributed to the source automatically. Referral fees, case status, and reporting are all tracked in one place. For firms running multi-channel campaigns or relying on co-counsel referrals, this replaces spreadsheets and manual email threads with a structured, transparent system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Case Compass retrieve medical records automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass has a built-in Medical Record Retrieval block that integrates with third-party retrieval services. When a qualified claimant completes intake, the retrieval request can be triggered automatically as part of the post-intake timeline — sending the HIPAA authorization captured during intake, along with the claimant\'s provider information, to your retrieval partner. The results are stored directly on the case file. Most competing intake tools don\'t have any medical record retrieval capability.',
      },
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.casecompass.io/compare' },
    { '@type': 'ListItem', position: 3, name: 'vs. AI Intake Tools', item: 'https://www.casecompass.io/compare/vs-ai-intake-tools' },
  ],
}

const comparisonRows = [
  { feature: 'Conversational AI intake flow', others: true, cc: true },
  { feature: 'Branching logic by practice area', others: 'Limited', cc: true },
  { feature: 'AI lead scoring before human review', others: false, cc: true },
  { feature: 'Multi-dimensional configurable scoring (Waypoint)', others: false, cc: true },
  { feature: 'Score breakdown by dimension (liability, value, urgency)', others: false, cc: true },
  { feature: 'MDL / mass tort intake toolkits (pre-configured)', others: false, cc: true },
  { feature: 'Defendant-specific evidence capture branching', others: false, cc: true },
  { feature: 'Referral partner portal', others: false, cc: true },
  { feature: 'Referral fee & attribution tracking', others: false, cc: true },
  { feature: 'E-signature retainer in same intake session', others: 'Limited', cc: true },
  { feature: 'Post-intake timeline automation (no-code)', others: false, cc: true },
  { feature: 'Medical record retrieval (integrated)', others: false, cc: true },
  { feature: 'Live transfer coordination', others: 'Limited', cc: true },
  { feature: 'Native CRM sync (Litify, Filevine, LeadDocket, Clio)', others: 'Limited', cc: true },
  { feature: 'Intake analytics with drop-off reporting', others: 'Limited', cc: true },
  { feature: 'BYOK AI (your data stays with your account)', others: false, cc: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle size={18} color="#059669" />
  if (value === false) return <XCircle size={18} color="#dc2626" />
  return <span style={{ fontSize: '0.8rem', color: '#f59e0b', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{value}</span>
}

const gaps = [
  {
    num: '01',
    title: 'Most AI intake tools stop at qualification. Waypoint scores.',
    desc: 'There\'s a meaningful difference between a tool that disqualifies bad leads and a tool that scores and ranks good ones. Waypoint evaluates case value, liability strength, urgency, treatment completeness, and documentation quality on every intake submission — and returns a structured score your team can act on. No manual review required to know which files to open first.',
  },
  {
    num: '02',
    title: 'Mass tort campaigns need more than a generic intake form.',
    desc: 'For MDL litigation — hair relaxer, social media addiction, Depo-Provera — the intake requirements change based on which defendant, which diagnosis, and which evidence is needed. Case Compass maintains defendant-specific intake toolkits that branch by brand, platform, or product, and align scoring to what the current litigation actually demands. Generic tools require you to build this from scratch and maintain it yourself.',
  },
  {
    num: '03',
    title: 'Intake is not the end. The timeline is.',
    desc: 'Most AI intake tools are built around the intake event itself. Case Compass treats intake as the start of an automated workflow — scoring triggers routing, routing triggers follow-up, follow-up triggers e-sign reminders and medical record requests. The Timeline Builder lets you build that logic visually, without code. Leads that don\'t sign immediately don\'t fall through the cracks — they enter a nurture sequence and re-surface when they\'re ready.',
  },
]

export default function VsAiIntakeToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '100px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 500, marginBottom: '20px', textDecoration: 'none' }}>
              ← Compare
            </Link>
            <div style={{ display: 'inline-block', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(196,181,253,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c4b5fd', marginBottom: '24px' }}>
              Case Compass vs. AI Intake Tools
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Most AI intake tools are built to have conversations. <em>Case Compass is built to win cases.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
              SimplyConvert, ngage, and similar tools automate the intake conversation. Case Compass does that — and adds AI scoring, mass tort toolkits, referral partner management, automated medical record retrieval, and post-intake workflow automation. See what that difference means for your caseload.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '48px' }}>
                Feature-by-feature comparison
              </h2>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 160px 160px', gap: '0', marginBottom: '8px' }}>
              <div />
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', padding: '8px' }}>Other AI Intake Tools</div>
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, color: '#4f46e5', padding: '8px', background: '#eef2ff', borderRadius: '8px 8px 0 0' }}>Case Compass</div>
            </div>

            {comparisonRows.map(({ feature, others, cc }, i) => (
              <SectionReveal key={feature}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 160px 160px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid #f1f5f9' : 'none',
                  background: i % 2 === 0 ? '#fafafa' : '#fff',
                }}>
                  <div style={{ padding: '14px 16px', fontSize: '0.875rem', color: '#374151', fontWeight: 500 }}>{feature}</div>
                  <div style={{ padding: '14px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Cell value={others} />
                  </div>
                  <div style={{ padding: '14px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(79,70,229,0.04)' }}>
                    <Cell value={cc} />
                  </div>
                </div>
              </SectionReveal>
            ))}

            <SectionReveal>
              <p style={{ marginTop: '16px', fontSize: '0.78rem', color: '#94a3b8', textAlign: 'center' }}>
                "Other AI intake tools" reflects general capabilities of tools in the legal AI intake category. Individual tools may vary. &ldquo;Limited&rdquo; indicates partial or add-on capability.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Three gaps */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Three gaps that add up to a lot of missed revenue
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
              {gaps.map(({ num, title, desc }) => (
                <SectionReveal key={num}>
                  <div style={{ background: '#fff', borderRadius: '14px', padding: '32px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '16px', lineHeight: 1 }}>{num}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
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
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '12px', textAlign: 'center' }}>
                Frequently asked questions
              </h2>
              <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '56px' }}>
                Honest answers to the questions firms ask when evaluating Case Compass against the other tools in their shortlist.
              </p>
            </SectionReveal>
            {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
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
                  Basic Chatbots <ArrowRight size={14} />
                </Link>
                <Link href="/compare/vs-webforms" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>
                  Web Forms <ArrowRight size={14} />
                </Link>
                <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 20px', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>
                  All Comparisons <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              See the difference in a live demo
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>
              Bring your current intake setup. We&apos;ll walk through what Waypoint scoring, MDL toolkits, and timeline automation look like end-to-end — and show you exactly where the gaps are.
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
