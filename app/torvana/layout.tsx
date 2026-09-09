import type { Metadata } from 'next'

const torvanaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Torvana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Torvana is HIPAA-compliant intake, scheduling, and referral workflow software for medical imaging centers and related specialty practices that work with personal injury attorney referrals. It covers patient intake, appointment scheduling, automated recall, HIPAA authorization, medical record retrieval, AI medical chronologies, and a referring-attorney portal — and runs alongside your existing PACS, RIS, or EHR.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Torvana built for medical imaging centers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Torvana is purpose-built for outpatient and diagnostic imaging centers — including MRI, CT, PET, X-ray, ultrasound, and multi-modality radiology groups — that receive meaningful volume from personal injury attorney referrals. Exam-type intake, implant screening, body-region capture, PACS/RIS-adjacent workflows, and attorney-facing case status are designed around imaging operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who else is Torvana built for besides imaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beyond imaging centers and radiology groups, Torvana fits orthopedic practices, ambulatory surgery centers, interventional and chronic pain management practices, spine clinics, and other specialty providers whose patient pipeline depends on PI attorney referrals and lien-based care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Torvana replace our existing PACS, RIS, or EHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Torvana runs alongside your existing systems. You keep your PACS, RIS, or EHR, whichever vendor you're on, and Torvana adds the intake, scheduling, and referral layer on top. Integration is scoped to your specific systems during onboarding.",
      },
    },
    {
      '@type': 'Question',
      name: "What if our current system doesn't have an open integration option?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We work with what's available. Some vendors have modern APIs, others require a more traditional interface. Either way, our approach is to connect to your existing systems rather than ask you to switch, and we scope that conversation with you directly rather than assuming one integration path fits every practice.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does patient intake work for imaging patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intake runs in any browser — phone, tablet, or desktop. It can be embedded on your imaging center website, shared as a link, or sent by text. Patients complete health history, exam and body-region details, implant screening, consent forms, and HIPAA authorization with e-signature before they arrive. No app to download, no account to create.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the referring attorney portal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dedicated portal where referring attorneys see real-time status on their own cases only — intake completion, appointment confirmation, record retrieval status, and lien case status. It replaces phone calls and mailed status requests with self-serve visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does medical record retrieval work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once HIPAA authorization is captured at intake, record retrieval is triggered automatically. Torvana targets a 24 to 48 hour turnaround for records, though actual timing varies by record source.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the medical chronology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Once records are retrieved, Torvana generates a chronology document summarizing the patient's treatment history — delivered alongside the records rather than as a separate request.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can Torvana handle annual imaging recall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Torvana can run scheduled outreach for recurring or follow-up care, like annual imaging, on a set timeline. Reminders go out automatically via SMS and the patient portal, so recall doesn't rely on staff remembering to follow up.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Torvana HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Torvana is built with HIPAA compliance as a core requirement, not an add-on. Business Associate Agreements are in place with every vendor that touches protected health information as part of the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do our patients need to download an app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Intake, scheduling, and the patient portal all run in a mobile browser. There's nothing to install.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can referring attorneys see more than their own cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. The referring attorney portal is scoped so each firm only sees their own referred cases. There's no visibility into other firms' cases or other practices' data.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does implementation look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Implementation includes system configuration, integration scoping with your existing PACS, RIS, or EHR, and staff onboarding. Timelines vary by practice size and integration scope, and we walk through a realistic timeline as part of your proposal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Torvana priced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the number of locations, integration scope, and specific systems involved. We put together a detailed proposal for every practice rather than a one-size-fits-all price, since integration needs vary quite a bit from one imaging center or specialty practice to the next.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is behind Torvana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Torvana is powered by Case Compass. The team behind it has spent years building intake and case-tracking infrastructure for plaintiff-side law firms, combined with direct experience in healthcare patient intake and referral network infrastructure. That combination is why the referring-attorney side of the platform works the way it does.',
      },
    },
    {
      '@type': 'Question',
      name: "Does Torvana work for practices that aren't PI-referral-based?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Torvana is purpose-built around the PI attorney referral relationship — lien case tracking, attorney-facing status visibility, and record retrieval automation tied to that workflow. If that's not a meaningful part of your referral base, a general patient engagement platform may be a better fit.",
      },
    },
  ],
}

const torvanaSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Torvana',
  alternateName: 'Torvana by Case Compass',
  applicationCategory: 'HealthApplication',
  applicationSubCategory: 'Medical Imaging Center Intake & Referral Automation',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/torvana',
  description:
    'Torvana is HIPAA-compliant patient intake, scheduling, medical records retrieval, and referring-attorney portal software for medical imaging centers, radiology groups, orthopedic practices, surgery centers, and pain management clinics that work with personal injury attorney referrals. Runs alongside your existing EHR, PACS, or RIS.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Contact for pricing — proposals scoped per imaging center or specialty practice',
  },
  featureList: [
    'Mobile patient intake for imaging and specialty visits via one-time passcode — no app or password',
    'Exam type, body region, and implant screening capture for MRI, CT, and multi-modality centers',
    'HIPAA authorization and e-signature capture at intake',
    'Referring attorney portal scoped per firm — real-time case status for PI referrals',
    'Automated appointment scheduling and annual imaging recall campaigns via SMS',
    'Medical records retrieval — automated once HIPAA authorization is on file',
    'AI-generated medical chronology delivered with records',
    'EHR, PACS, and RIS integration scoped per vendor',
    'Workflow automation timeline builder for referral paths',
    'Intake analytics and marketing funnel reporting by referral source',
    'HIPAA-compliant architecture with BAAs and full audit trail',
  ],
  audience: {
    '@type': 'Audience',
    audienceType:
      'Medical imaging centers, outpatient radiology groups, MRI/CT/PET centers, orthopedic practices, ambulatory surgery centers, interventional pain management, and spine clinics that work with personal injury attorney referrals',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: [
    { '@type': 'Thing', name: 'Medical imaging center patient intake' },
    { '@type': 'Thing', name: 'Personal injury attorney referral management' },
    { '@type': 'Thing', name: 'PACS and RIS adjacent workflow automation' },
    { '@type': 'Thing', name: 'HIPAA authorization and medical records retrieval' },
  ],
}

const torvanaWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Torvana — Imaging Center Intake & PI Referral Automation',
  url: 'https://www.casecompass.io/torvana',
  description:
    'Software for medical imaging centers and specialty practices that receive personal injury attorney referrals: mobile intake, scheduling, HIPAA authorization, records retrieval, and a referring-attorney portal.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: {
    '@type': 'SoftwareApplication',
    name: 'Torvana',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://www.casecompass.io/torvana.svg',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.tv-hero h1', '.tv-hero-lede', '.tv-specialties', '.tv-faq-answer'],
  },
}

const torvanaSpecialtyListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Specialties Torvana is built for',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Medical imaging centers & radiology groups',
      description:
        'Outpatient and diagnostic imaging — MRI, CT, PET, X-ray, ultrasound, and multi-modality centers handling PI attorney referrals.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Orthopedic practices',
      description:
        'Ortho clinics that coordinate imaging, procedures, and lien cases with referring plaintiff firms.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Ambulatory surgery centers',
      description:
        'ASCs whose PI referral volume needs intake, scheduling, and attorney-visible case status.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Pain management & interventional pain',
      description:
        'Chronic and interventional pain practices tied to attorney-referred injury cases.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Spine clinics',
      description:
        'Spine-focused specialty care connected to imaging workups and PI referral networks.',
    },
  ],
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
  title: 'Torvana — Imaging Center Intake & PI Referral Automation',
  description:
    'HIPAA-compliant patient intake, scheduling, medical records retrieval, and a referring-attorney portal for medical imaging centers, radiology groups, orthopedics, surgery centers, and pain management practices that work with PI attorney referrals. Runs alongside your PACS, RIS, or EHR.',
  keywords: [
    'medical imaging center intake software',
    'imaging center patient intake',
    'radiology patient intake software',
    'MRI center intake automation',
    'CT imaging center scheduling software',
    'outpatient diagnostic imaging intake',
    'PACS RIS patient intake',
    'PI attorney referral portal imaging',
    'personal injury referral management healthcare',
    'specialty practice intake automation',
    'HIPAA intake software imaging centers',
    'medical records automation radiology',
    'medical chronology software',
    'orthopedic practice intake PI referrals',
    'surgery center intake software',
    'pain management intake software',
    'spine clinic referral management',
    'lien case management healthcare',
    'referring attorney portal medical imaging',
    'annual imaging recall software',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/torvana',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/torvana',
    siteName: 'Torvana',
    title: 'Torvana — Imaging center intake. Referring firms stay current.',
    description:
      'Built for medical imaging centers and specialty practices with PI attorney referrals. Mobile intake, scheduling, HIPAA authorization, records retrieval, and a real-time attorney portal — alongside your PACS, RIS, or EHR.',
    images: [{ url: '/torvana.svg', width: 1200, height: 630, alt: 'Torvana — Powered by Case Compass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torvana — Imaging Center Intake & PI Referral Automation',
    description:
      'For imaging centers, orthopedics, ASCs, and pain practices that work with PI attorney referrals. HIPAA-compliant intake, scheduling, records, and attorney visibility.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function TorvanaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaSoftwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaSpecialtyListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaBreadcrumbSchema) }} />
      {children}
    </>
  )
}
