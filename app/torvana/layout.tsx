import type { Metadata } from 'next'
import { TORVANA_ENTITY, TORVANA_URL, torvanaFaqs } from './torvanaContent'

const torvanaOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Torvana',
  alternateName: 'Torvana by Case Compass',
  url: TORVANA_URL,
  logo: 'https://www.casecompass.io/images/Torvana-Illustrator-Master.svg',
  description: TORVANA_ENTITY,
  parentOrganization: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  sameAs: [
    'https://www.linkedin.com/company/case-compass/',
    'https://x.com/Case_Compass_',
  ],
}

const torvanaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: torvanaFaqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

const torvanaSoftwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Torvana',
  alternateName: 'Torvana by Case Compass',
  applicationCategory: 'HealthApplication',
  applicationSubCategory: 'Specialty Practice Intake & PI Attorney Referral Workflow',
  operatingSystem: 'Web',
  url: TORVANA_URL,
  description:
    'Torvana is a HIPAA-compliant intake, scheduling, and referral workflow platform built for imaging centers, surgery centers, orthopedic practices, and pain management practices with personal injury attorney referral relationships.',
  featureList: [
    'Mobile patient intake with one-time-passcode login and e-signature',
    'Automated recall and follow-up reminders via SMS, email, and voice',
    'Referring attorney portal with real-time case and record status',
    'HIPAA authorization automation and medical record retrieval',
    'AI-generated medical chronology',
    'Medical lien and letter of protection (LOP) case visibility for referring counsel',
    'Runs alongside existing PACS, RIS, or EHR systems',
  ],
  audience: {
    '@type': 'Audience',
    audienceType:
      'Specialty medical practices (imaging centers, surgery centers, orthopedics, pain management) with personal injury attorney referral relationships',
  },
  provider: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
  about: [
    { '@type': 'Thing', name: 'Personal injury referral software for medical practices' },
    { '@type': 'Thing', name: 'PI attorney portal for specialty practices' },
    { '@type': 'Thing', name: 'Medical lien tracking software' },
    { '@type': 'Thing', name: 'Letter of protection (LOP) tracking' },
    { '@type': 'Thing', name: 'Medical record retrieval automation for attorney referrals' },
    { '@type': 'Thing', name: 'HIPAA-compliant intake for PI referral practices' },
  ],
}

const torvanaWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Torvana — PI Referral Workflow for Specialty Medical Practices',
  url: TORVANA_URL,
  description: TORVANA_ENTITY,
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
    url: 'https://www.casecompass.io/images/Torvana-Illustrator-Master.svg',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.tv-hero h1', '.tv-hero-lede', '.tv-entity', '.tv-specialties', '.tv-faq-answer'],
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
    { '@type': 'ListItem', position: 1, name: 'Case Compass', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Torvana', item: TORVANA_URL },
  ],
}

export const metadata: Metadata = {
  title: {
    absolute: 'Torvana — PI Attorney Referral Software for Specialty Medical Practices',
  },
  description: `${TORVANA_ENTITY} Built for imaging centers, surgery centers, orthopedics, and pain management — with a referring-attorney portal, lien/LOP visibility, and medical record retrieval that runs alongside your PACS, RIS, or EHR.`,
  keywords: [
    'personal injury referral software for medical practices',
    'PI attorney portal for imaging centers',
    'PI attorney portal for surgery centers',
    'PI attorney portal for orthopedic practices',
    'PI attorney portal for pain management',
    'medical lien tracking software',
    'letter of protection LOP tracking software',
    'attorney referral management for specialty practices',
    'HIPAA-compliant intake software for PI practices',
    'medical record retrieval automation for attorneys',
    'software for imaging centers that work with personal injury attorneys',
    'how to track lien cases for medical practice',
    'automate medical record requests for attorney referrals',
    'best patient intake software for personal injury practices',
    'specialty practice intake automation',
    'referring attorney portal medical practice',
    'HIPAA authorization medical records retrieval',
    'medical chronology software',
  ],
  alternates: {
    canonical: TORVANA_URL,
  },
  openGraph: {
    type: 'website',
    url: TORVANA_URL,
    siteName: 'Torvana',
    title: 'Torvana — PI referral workflow for specialty practices',
    description: TORVANA_ENTITY,
    images: [
      {
        url: '/images/Torvana-Illustrator-Master.svg',
        width: 1200,
        height: 630,
        alt: 'Torvana — Powered by Case Compass',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torvana — PI Attorney Referral Software for Specialty Practices',
    description: TORVANA_ENTITY,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaSoftwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaSpecialtyListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(torvanaBreadcrumbSchema) }} />
      {children}
    </>
  )
}
