import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, ArrowRight, AlertTriangle } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export const metadata: Metadata = {
  title: 'Case Compass vs. SimplyConvert, ngage & AI Intake Tools',
  description:
    'SimplyConvert is partnered with a law firm marketing agency. ngage is owned by Martindale-Avvo, which sells leads. Case Compass does one thing: make your intake work better.',
  alternates: {
    canonical: 'https://www.casecompass.io/compare/vs-ai-intake-tools',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/compare/vs-ai-intake-tools',
    siteName: 'Case Compass',
    title: 'Case Compass vs. SimplyConvert, ngage & AI Intake Tools',
    description: 'ngage is owned by the parent of Avvo and FindLaw. SimplyConvert is bundled with a lead gen agency. Case Compass does one thing: intake. See the full comparison.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass vs AI Intake Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Compass vs. SimplyConvert, ngage & AI Intake Tools',
    description: 'When your intake software vendor is also in the business of selling leads, that\'s a problem. Case Compass is purely intake.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does it matter who owns or backs your intake platform when they also sell law firm leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It\'s a fair question to ask. ngage is owned by Internet Brands, the parent company of Avvo, FindLaw, Martindale-Hubbell, and Super Lawyers — businesses whose core revenue model is charging law firms for leads. SimplyConvert has a strategic partnership with The Search Engine Guys (TSEG) under the TruLaw brand, a law firm marketing agency that by their own description engages 130 million potential clients annually. When your intake platform exists within the same corporate structure as lead generation businesses, or is bundled with marketing agency services, the incentive structures of those businesses are worth understanding. Case Compass has no lead generation business, no marketing agency partner, and no financial interest in your pipeline other than making your intake perform better. We think that matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'SimplyConvert says it handles mass tort. How is Case Compass different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SimplyConvert\'s Mass Torts 360 product is primarily a client data depository and case management platform for firms already inside large MDLs — tools for organizing existing claimant data, populating plaintiff fact sheets, preventing dual representation, and sharing de-identified data with MDL leadership. It\'s a post-intake data management product. Case Compass is focused on the front of that funnel: qualifying new claimants, scoring them with AI against your criteria, capturing defendant-specific evidence, and triggering automated follow-up. For active intake campaigns — hair relaxer, social media addiction, Depo-Provera — Case Compass provides pre-configured intake toolkits with branching by defendant, evidence capture aligned to current litigation standards, and Waypoint scoring. These are different tools solving different problems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Waypoint and do any other tools offer something similar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waypoint is Case Compass\'s AI scoring engine for plaintiff intake. You configure scoring criteria by practice area — case value indicators, liability strength, treatment type, urgency flags, documentation completeness — and Waypoint evaluates every intake submission against those criteria before your team opens the file. The output is a ranked score with a breakdown by dimension, not just a pass/fail. SimplyConvert\'s platform offers case prioritization and sorting on existing data, but not pre-review AI scoring of new intake submissions. ngage and Intaker are conversation-layer tools that don\'t offer scoring at all. Waypoint is a decision-layer AI, purpose-built for plaintiff qualification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass close retainers during intake — or do leads still fall through after the conversation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass closes the retainer inside the intake flow itself. When a claimant qualifies, they\'re presented with the retainer agreement as the next step — they sign without leaving the session, no callback required. The gap between a completed intake conversation and a signed retainer is one of the biggest drop-off points in plaintiff intake. Most tools, including ngage and Intaker, hand off after the conversation and rely on callbacks or separate e-sign tools to close. SimplyConvert has e-sign capability. Case Compass has it natively inside the intake flow, with multi-document support, so the HIPAA auth, retainer, and any other required documents can all be captured in the same session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Case Compass handle intake across multiple channels — not just web chat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass runs intake across web chat, SMS, and phone-assisted scripts from a single platform. The same intake form logic, branching, and Waypoint scoring applies regardless of how the claimant enters. Source and UTM attribution is tracked per channel so you can see exactly which campaigns are producing qualified leads versus volume. ngage and Intaker are primarily chat-first tools. SimplyConvert is chatbot-centric. If a large portion of your leads come in by phone — common in PI and mass tort — Case Compass\'s call center intake script and multi-channel design means the data captured is consistent and scoreable across all inbound paths.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Case Compass route hot leads to live transfer or immediate attorney review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass includes live transfer coordination as part of the intake workflow. When a lead scores above a set threshold — indicating high case value or urgency — the system can trigger an immediate live transfer to a call center agent or attorney rather than queuing the lead for follow-up. This is critical for competitive practice areas like auto accident PI, where speed-to-contact directly impacts conversion. ngage has live chat handoff but not scoring-triggered transfer. SimplyConvert doesn\'t have live transfer as a core intake feature. The difference is that Case Compass\'s routing is based on Waypoint score data, not just availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Case Compass show in analytics that other tools don\'t?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass\'s intake analytics show the full funnel: where leads enter, which questions cause drop-off, completion rates by source and campaign, Waypoint score distributions, referral partner performance, e-sign conversion rates, and time-to-qualification. Most tools show volume and basic lead status. What\'s different in Case Compass is the drop-off analysis — you can see exactly which node in the intake form is losing claimants, and adjust the form logic to fix it. You can also compare performance by intake type (chatbot vs. form vs. phone) and by marketing source, so you know which ad spend is producing qualified cases, not just clicks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass integrate with our case management system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass integrates natively with Litify, Filevine, LeadDocket, Clio, and PracticePanther, and connects to other systems via API and Zapier. What gets pushed isn\'t just a contact record — it\'s the full structured intake: answers, Waypoint score and dimension breakdown, source attribution, referral partner, e-sign documents, and case status. Your team opens a case in their CRM with everything they need, not a bare lead. SimplyConvert has CRM integrations but primarily pushes to its own internal CRM. ngage and Intaker have limited native integrations. Case Compass is CRM-agnostic by design — it\'s not trying to replace your case management system, it\'s built to feed it.',
      },
    },
    {
      '@type': 'Question',
      name: 'We\'re already using SimplyConvert or ngage. Why would we switch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask what your current tool isn\'t doing. If your team still manually reviews every file to assess case quality — you\'re missing Waypoint scoring. If you\'re building intake forms from scratch for every new MDL campaign — Case Compass maintains those toolkits for you. If your referral partners are asking you for status updates over email — there\'s a portal for that. If hot leads are sitting in a queue instead of going to live transfer — that\'s a conversion problem with a solution. If you don\'t know which intake questions are causing drop-off — the analytics show you. And if your intake vendor\'s parent company also sells law firm leads — that\'s a structural question worth asking. Case Compass is one thing: intake software built to make your firm better at converting cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass have MDL-specific intake toolkits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and they\'re live and in use today. Case Compass currently has pre-configured intake toolkits for social media addiction litigation (MDL 3047, N.D. California — first bellwether verdict March 2026) and hair relaxer cancer claims (MDL 3060, N.D. Illinois — 11,000+ pending cases). Each toolkit includes defendant-specific branching logic, evidence capture fields aligned to current litigation requirements, and Waypoint scoring criteria calibrated to what makes a claimant litigable in that specific MDL. For social media, that means branching by platform (Meta, YouTube, TikTok, Snap) and capturing harm documentation. For hair relaxer, that means brand identification, diagnosis verification, and medical record collection. These toolkits are maintained as the MDLs evolve — Daubert developments, bellwether outcomes, and changing intake standards are reflected without firms needing to rebuild their forms. Neither SimplyConvert, ngage, nor Intaker offer anything comparable for active intake qualification at this level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass handle post-intake automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through the Timeline Builder — a no-code workflow tool for building automated post-intake sequences. You can configure automated emails and SMS, e-sign reminders, medical record retrieval triggers, delays, branch logic by score or case type, and CRM sync. Leads that don\'t sign immediately enter an automated nurture sequence. Leads that qualify can be routed to live transfer or attorney review. The intake event triggers the entire downstream workflow. SimplyConvert has client engagement automation for existing clients. ngage and Intaker don\'t have post-intake automation. Case Compass connects intake to what happens next.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about referral partner management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass includes a full referral partner portal — co-counsel, advertising partners, and lead gen networks each get their own branded intake link with automatic source attribution. Referral fees, case status, and reporting are all tracked in the platform. SimplyConvert has referral tracking functionality within their CRM. ngage and Intaker have limited referral attribution. Where Case Compass is differentiated is the partner-facing portal — referral partners get their own view into cases they submitted, with status updates and fee tracking, without needing access to your main dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Case Compass retrieve medical records automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Case Compass has a built-in Medical Record Retrieval block that integrates with third-party retrieval services. When a qualified claimant completes intake, the retrieval request is triggered automatically as part of the post-intake timeline — sending the HIPAA authorization captured during intake, along with the claimant\'s provider information, to your retrieval partner. Results are stored directly on the case file. Neither SimplyConvert, ngage, nor Intaker offer integrated medical record retrieval as part of their intake workflow.',
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

// SC = SimplyConvert, NG = ngage/Intaker, CC = Case Compass
const comparisonRows: { feature: string; sc: boolean | string; ng: boolean | string; cc: boolean | string }[] = [
  { feature: 'Conversational AI intake flow', sc: true, ng: true, cc: true },
  { feature: 'Branching logic by case type', sc: true, ng: 'Limited', cc: true },
  { feature: 'AI lead scoring before human review', sc: false, ng: false, cc: true },
  { feature: 'Multi-dimensional configurable scoring (Waypoint)', sc: false, ng: false, cc: true },
  { feature: 'Ranked score with dimension breakdown', sc: false, ng: false, cc: true },
  { feature: 'Pre-built MDL intake toolkits (active litigation)', sc: false, ng: false, cc: true },
  { feature: 'MDL data management for existing caseloads', sc: true, ng: false, cc: false },
  { feature: 'Post-intake automation timelines (no-code)', sc: false, ng: false, cc: true },
  { feature: 'Medical record retrieval (integrated)', sc: false, ng: false, cc: true },
  { feature: 'Referral partner portal (partner-facing view)', sc: 'Limited', ng: false, cc: true },
  { feature: 'Referral fee & attribution tracking', sc: true, ng: false, cc: true },
  { feature: 'E-signature retainer in same intake session', sc: true, ng: 'Limited', cc: true },
  { feature: 'CRM sync (Litify, Filevine, LeadDocket, Clio)', sc: 'Limited', ng: 'Limited', cc: true },
  { feature: 'Intake analytics with drop-off reporting', sc: true, ng: 'Limited', cc: true },
  { feature: 'No lead-generation parent or partner', sc: false, ng: false, cc: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle size={18} color="#059669" />
  if (value === false) return <XCircle size={18} color="#dc2626" />
  return <span style={{ fontSize: '0.78rem', color: '#f59e0b', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{value}</span>
}

const conflictCards = [
  {
    company: 'ngage / Intaker',
    owner: 'Internet Brands · Martindale-Avvo',
    flag: 'Owned by a legal lead generation empire',
    detail: 'Internet Brands owns Avvo, FindLaw, Martindale-Hubbell, Super Lawyers, and Lawyers.com. Their core business is charging law firms for leads and directory listings. ngage is part of that portfolio. When your intake platform shares a parent with the companies that sell you leads, your pipeline data lives in the same ecosystem as their lead generation operations.',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    company: 'SimplyConvert',
    owner: 'Strategic partner: TSEG / TruLaw',
    flag: 'Intake + lead gen sold together',
    detail: 'SimplyConvert\'s strategic partner under the TruLaw brand is The Search Engine Guys (TSEG), a law firm marketing agency that by their own account engages 130 million potential clients annually. Their combined offering bundles intake software with SEO, paid search, social media campaigns, call centers, and CTV lead generation. When your intake software vendor\'s growth strategy depends on firms buying leads, there\'s an incentive structure worth understanding.',
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    company: 'Case Compass',
    owner: 'Independent · No lead gen',
    flag: 'We do one thing: intake',
    detail: 'Case Compass is independent, purpose-built intake software with no lead generation business, no marketing agency, and no directory. We don\'t sell leads. We don\'t have a financial interest in your pipeline data beyond making your intake perform better. Our only incentive is to help you qualify more of the right cases and convert them.',
    color: '#059669',
    bg: '#f0fdf4',
    border: '#bbf7d0',
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
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <Link href="/compare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 500, marginBottom: '20px', textDecoration: 'none' }}>
              ← Compare
            </Link>
            <div style={{ display: 'inline-block', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(196,181,253,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c4b5fd', marginBottom: '24px' }}>
              Case Compass vs. AI Intake Tools
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Know who&apos;s behind your intake platform. <em>Especially if they also sell leads.</em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
              ngage is owned by Internet Brands — the parent company of Avvo, FindLaw, and Martindale-Hubbell, whose core business is selling leads to law firms. SimplyConvert is strategically partnered under TruLaw with a law firm marketing agency. Case Compass is independent intake software. No lead gen. No agency. No bundled services.
            </p>
          </div>
        </section>

        {/* Business model conflict */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '16px' }}>
                <AlertTriangle size={18} color="#d97706" />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#d97706' }}>The business model question</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '16px' }}>
                Who owns your intake platform matters
              </h2>
              <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1rem', marginBottom: '56px', maxWidth: '640px', margin: '0 auto 56px' }}>
                When your intake software vendor has a financial interest in selling you leads, they have access to your pipeline data and an incentive structure that isn&apos;t aligned with yours. That&apos;s worth knowing.
              </p>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {conflictCards.map(({ company, owner, flag, detail, color, bg, border }) => (
                <SectionReveal key={company}>
                  <div style={{ background: bg, borderRadius: '14px', padding: '32px', border: `1px solid ${border}`, height: '100%' }}>
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{company}</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{owner}</div>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: color === '#059669' ? 'rgba(5,150,105,0.1)' : 'rgba(220,38,38,0.08)', borderRadius: '6px', padding: '4px 10px', marginBottom: '16px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0, display: 'inline-block' }} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, color, letterSpacing: '0.04em' }}>{flag}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>{detail}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SimplyConvert mass tort nuance */}
        <section style={{ background: '#fff', padding: '80px 40px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '24px' }}>
                On mass tort: SimplyConvert and Case Compass are solving different problems
              </h2>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
                SimplyConvert&apos;s Mass Torts 360™ is a real product with real capabilities — but it&apos;s primarily a <strong>client data depository and case management platform</strong> for firms already deep inside large MDLs. Its strengths are organizing existing claimant data, populating plaintiff fact sheets, preventing dual representation, and sharing de-identified data with MDL leadership and courts. It&apos;s built for firms that already have thousands of signed clients and need to manage them through litigation.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
                Case Compass is built for <strong>the front of that funnel</strong>: qualifying new claimants before they become clients, scoring them against your criteria with AI, capturing the right evidence for each defendant, and automating what happens next. For firms running active intake campaigns — hair relaxer, social media addiction, Depo-Provera — Case Compass provides pre-configured intake toolkits with defendant-specific branching, Waypoint scoring calibrated to current MDL standards, and automated post-intake workflows.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8 }}>
                These tools are complementary, not identical. If you need a data management layer for thousands of existing MDL clients and a post-settlement matrix tool, SimplyConvert Mass Torts 360 is purpose-built for that. If you need to qualify, score, and convert new claimants at scale — and then hand them off to your CRM or case management system — that&apos;s what Case Compass is built for.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ background: '#f8fafc', padding: '96px 40px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '48px' }}>
                Feature comparison
              </h2>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 130px 130px 140px', gap: '0', marginBottom: '8px' }}>
              <div />
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', padding: '8px' }}>SimplyConvert</div>
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', padding: '8px' }}>ngage / Intaker</div>
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, color: '#4f46e5', padding: '8px', background: '#eef2ff', borderRadius: '8px 8px 0 0' }}>Case Compass</div>
            </div>

            {comparisonRows.map(({ feature, sc, ng, cc }, i) => (
              <SectionReveal key={feature}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 130px 130px 140px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid #e2e8f0' : 'none',
                  background: i % 2 === 0 ? '#fff' : '#fafafa',
                }}>
                  <div style={{ padding: '14px 16px', fontSize: '0.875rem', color: '#374151', fontWeight: 500 }}>{feature}</div>
                  <div style={{ padding: '14px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Cell value={sc} />
                  </div>
                  <div style={{ padding: '14px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Cell value={ng} />
                  </div>
                  <div style={{ padding: '14px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(79,70,229,0.04)' }}>
                    <Cell value={cc} />
                  </div>
                </div>
              </SectionReveal>
            ))}

            <SectionReveal>
              <p style={{ marginTop: '16px', fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center' }}>
                Based on publicly available information and product documentation. &ldquo;Limited&rdquo; indicates partial or add-on capability. This comparison reflects intake and qualification features specifically.
              </p>
            </SectionReveal>
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
                Honest answers to the questions firms ask when putting Case Compass on a shortlist with SimplyConvert, ngage, or Intaker.
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

        {/* MDL toolkit proof */}
        <section style={{ background: '#f8fafc', padding: '64px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionReveal>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '16px' }}>
                Active MDL toolkits — live today
              </p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#0f172a', lineHeight: 1.25, marginBottom: '8px' }}>
                Not a roadmap item. These are running right now.
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Both toolkits are live, pre-configured, and in use by firms running active intake campaigns.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Link href="/lp/social-media" style={{ display: 'block', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', textDecoration: 'none', transition: 'box-shadow 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899', boxShadow: '0 0 6px #ec4899', display: 'inline-block', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#be185d' }}>MDL 3047 · N.D. California</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Social Media Addiction Intake</div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 16px' }}>Platform-specific branching (Meta, YouTube, TikTok, Snap), harm documentation capture, minor verification, and Waypoint scoring. First bellwether verdict March 2026.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: '#be185d' }}>
                    See the toolkit <ArrowRight size={13} />
                  </div>
                </Link>
                <Link href="/lp/hair-relaxer" style={{ display: 'block', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', textDecoration: 'none', transition: 'box-shadow 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 6px #f59e0b', display: 'inline-block', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#b45309' }}>MDL 3060 · N.D. Illinois</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Hair Relaxer Cancer Claims Intake</div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 16px' }}>Brand identification and defendant branching (L&apos;Oreal, Revlon, Strength of Nature), diagnosis verification, medical record collection, and Waypoint scoring. 11,000+ cases pending.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: '#b45309' }}>
                    See the toolkit <ArrowRight size={13} />
                  </div>
                </Link>
              </div>
            </SectionReveal>
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
              Bring your current intake setup. We&apos;ll walk through Waypoint scoring, MDL toolkits, and timeline automation — and show you exactly where the gaps are.
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
