import type { Metadata } from 'next'

const torvanaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Torvana?',
      acceptedAnswer: { '@type': 'Answer', text: 'Torvana is an intake, scheduling, and referral workflow platform for specialty medical practices, imaging centers, surgery centers, orthopedic practices, and pain management practices that work with personal injury attorney referrals. It handles patient intake, appointment scheduling, automated recall, HIPAA authorization, medical record retrieval, and referring-attorney case tracking in one system.' },
    },
    {
      '@type': 'Question',
      name: 'Who is Torvana built for?',
      acceptedAnswer: { '@type': 'Answer', text: "Practices that get meaningful case volume from personal injury attorney referrals. That includes imaging centers, orthopedic practices, surgery centers, and pain management practices. If referring attorneys are a real part of your patient pipeline, Torvana is built around that relationship specifically, not as an afterthought." },
    },
    {
      '@type': 'Question',
      name: 'Does Torvana replace our existing PACS, RIS, or EHR?',
      acceptedAnswer: { '@type': 'Answer', text: "No. Torvana runs alongside your existing systems. You keep your PACS, RIS, or EHR, whichever vendor you're on, and Torvana adds the intake, scheduling, and referral layer on top. Integration is scoped to your specific systems during onboarding." },
    },
    {
      '@type': 'Question',
      name: "What if our current system doesn't have an open integration option?",
      acceptedAnswer: { '@type': 'Answer', text: "We work with what's available. Some vendors have modern APIs, others require a more traditional interface. Either way, our approach is to connect to your existing systems rather than ask you to switch, and we scope that conversation with you directly rather than assuming one integration path fits every practice." },
    },
    {
      '@type': 'Question',
      name: 'How does patient intake work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Intake runs in any browser — phone, tablet, or desktop. It can be embedded directly on your practice website or shared as a link. Patients complete their health history, consent forms, and HIPAA authorization digitally, with e-signature built into the flow. No app to download, no account to create.' },
    },
    {
      '@type': 'Question',
      name: 'What is the referring attorney portal?',
      acceptedAnswer: { '@type': 'Answer', text: 'A dedicated portal where referring attorneys can see real-time status on their own cases only — intake completion, appointment confirmation, record retrieval status, and lien case status. It replaces phone calls and mailed status requests with self-serve visibility.' },
    },
    {
      '@type': 'Question',
      name: 'How does medical record retrieval work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Once HIPAA authorization is captured at intake, record retrieval is triggered automatically. Torvana targets a 24 to 48 hour turnaround for records, though actual timing varies by record source.' },
    },
    {
      '@type': 'Question',
      name: 'What is the AI-generated medical chronology?',
      acceptedAnswer: { '@type': 'Answer', text: "Once records are retrieved, Torvana automatically generates a chronology document summarizing the patient's treatment history, delivered alongside the records themselves rather than as a separate request." },
    },
    {
      '@type': 'Question',
      name: 'How does automated recall work?',
      acceptedAnswer: { '@type': 'Answer', text: "Torvana can run scheduled outreach for recurring or follow-up care, like annual imaging, on a set timeline. Reminders go out automatically via SMS and the patient portal, so recall doesn't rely on staff remembering to follow up." },
    },
    {
      '@type': 'Question',
      name: 'Is Torvana HIPAA compliant?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Torvana is built with HIPAA compliance as a core requirement, not an add-on. Business Associate Agreements are in place with every vendor that touches protected health information as part of the platform.' },
    },
    {
      '@type': 'Question',
      name: 'Do our patients need to download an app?',
      acceptedAnswer: { '@type': 'Answer', text: "No. Intake, scheduling, and the patient portal all run in a mobile browser. There's nothing to install." },
    },
    {
      '@type': 'Question',
      name: 'Can referring attorneys see more than their own cases?',
      acceptedAnswer: { '@type': 'Answer', text: "No. The referring attorney portal is scoped so each firm only sees their own referred cases. There's no visibility into other firms' cases or other practices' data." },
    },
    {
      '@type': 'Question',
      name: 'What does implementation look like?',
      acceptedAnswer: { '@type': 'Answer', text: "Implementation includes system configuration, integration scoping with your existing PACS, RIS, or EHR, and staff onboarding. Timelines vary by practice size and integration scope, and we'll walk through a realistic timeline as part of your proposal." },
    },
    {
      '@type': 'Question',
      name: 'How is Torvana priced?',
      acceptedAnswer: { '@type': 'Answer', text: "Pricing depends on the number of locations, integration scope, and specific systems involved. We put together a detailed proposal for every practice rather than a one-size-fits-all price, since integration needs vary quite a bit from one practice to the next." },
    },
    {
      '@type': 'Question',
      name: 'Who is behind Torvana?',
      acceptedAnswer: { '@type': 'Answer', text: "Torvana is powered by Case Compass. The team behind it has spent years building intake and case-tracking infrastructure for plaintiff-side law firms, combined with direct experience in healthcare patient intake and referral network infrastructure. That combination is why the referring-attorney side of the platform works the way it does." },
    },
    {
      '@type': 'Question',
      name: "Does Torvana work for practices that aren't PI-referral-based?",
      acceptedAnswer: { '@type': 'Answer', text: "Torvana is purpose-built around the PI attorney referral relationship — lien case tracking, attorney-facing status visibility, and record retrieval automation tied to that workflow. If that's not a meaningful part of your referral base, a general patient engagement platform may be a better fit." },
    },
  ],
}

const torvanaSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Torvana',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Medical Practice Intake & Referral Automation',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/torvana',
  description: 'Torvana automates patient intake, HIPAA authorization, appointment scheduling, medical records retrieval, and referring attorney visibility for specialty medical practices that work with personal injury attorney referrals. Runs alongside your existing EHR, PACS, or RIS.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing — proposals scoped per practice',
  },
  featureList: [
    'Mobile patient intake via one-time passcode — no app or password',
    'HIPAA authorization and e-signature capture at intake',
    'Referring attorney portal scoped per firm — real-time case status',
    'Automated appointment scheduling and recall campaigns via SMS',
    'Medical records retrieval — automated once HIPAA authorization is on file',
    'AI-generated medical chronology delivered with records',
    'EHR, PACS, and RIS integration scoped per vendor',
    'Workflow automation timeline builder',
    'Intake analytics and marketing funnel reporting',
    'HIPAA-compliant architecture with BAAs and full audit trail',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Specialty medical practices that work with personal injury attorney referrals — imaging centers, orthopedics, surgery centers, pain management',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

const torvanaBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Torvana', item: 'https://www.casecompass.io/torvana' },
  ],
}

export const metadata: Metadata = {
  title: 'Torvana — Medical Practice Intake & Referral Automation',
  description:
    'Intake, scheduling, automated recall, HIPAA authorization, medical record retrieval, and a referring-attorney portal — built for specialty medical practices that work with PI attorney referrals.',
  keywords: [
    'medical practice intake software',
    'PI attorney referral portal',
    'personal injury referral management',
    'specialty practice intake automation',
    'HIPAA intake software',
    'imaging center patient intake',
    'medical records automation',
    'patient intake scheduling',
    'medical chronology software',
    'healthcare referral management',
    'orthopedic practice intake',
    'surgery center intake software',
    'pain management intake',
    'lien case management',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/torvana',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/torvana',
    siteName: 'Torvana',
    title: 'Torvana — The referral moves. Everyone knows.',
    description:
      'Mobile patient intake, scheduling, HIPAA authorization, medical records retrieval, and a real-time attorney portal for specialty medical practices.',
    images: [{ url: '/torvana.svg', width: 1200, height: 630, alt: 'Torvana — Powered by Case Compass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torvana — Medical Practice Intake & Referral Automation',
    description:
      'Built for practices that work with PI attorney referrals. HIPAA-compliant intake, scheduling, records retrieval and attorney visibility — all connected.',
  },
}

export default function TorvanaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaSoftwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaBreadcrumbSchema) }} />
      {children}
    </>
  )
}
