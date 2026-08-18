'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { CheckCircle, FileText, Bell, Calendar, FolderSync, Scale, Building2, Users, ChevronDown, Landmark, Monitor, BarChart2, Briefcase, ClipboardCheck, Files, CalendarClock, MessageSquare, Settings, Shield, Lock, Zap, TrendingUp, Play } from 'lucide-react'

import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Dwellex',
      applicationCategory: 'LegalSoftware',
      operatingSystem: 'Web',
      url: 'https://www.casecompass.io/solutions/dwellex',
      description:
        'Dwellex is eviction case management software built for landlord-tenant law firms. It automates intake, tracks full case timelines from filing to lockout, generates court documents, and integrates with Clio, Practice Panther, and Rent Manager.',
      offers: {
        '@type': 'Offer',
        price: '399',
        priceCurrency: 'USD',
        description: '$399/month platform fee. Per-case rates: $8.00 (up to 50 cases/mo), $6.50 (51–150), $5.00 (151–300). Enterprise flat-rate for 300+ cases/month. No per-seat fees.',
        category: 'Legal Practice Management Software',
      },
      featureList: [
        'Landlord intake portal with e-signature and conditional field logic',
        'Staff intake review and approval workflow with a centralized review queue',
        'Bulk CSV intake and batch notice generation from any PMS export',
        'Saved column mappings and per-row structural validation',
        'Automated eviction case timeline tracking with step assignment',
        'Conditional workflow branching based on case outcomes',
        'Dual-column client and attorney task management',
        'Trial Lists — county-grouped AM/PM court schedules with Word export',
        'Auto-generated court documents — summons, complaints, sheriff info sheets, notices',
        'Court-specific, holiday-aware expiration date calculation',
        'Admin-configurable court directory and per-notice expiration rules',
        'Drag-and-drop form builder with conditional logic',
        'Client portal with case timeline visibility and document upload',
        'Case templates with ordered action steps and due date rules',
        'Clio integration with bidirectional matter and document sync',
        'Practice Panther and Rent Manager integrations',
        'Court date tracking and marshal coordination',
        'Lockout scheduling and notifications',
        'Case-linked messaging with email threading and auto-filed attachments',
        'Configurable SMS and email automated reminder rules',
        'Role-based access control (admin, supervisor, staff, trainer/QA, client)',
        'Firm-wide analytics dashboard with intake, case, and financial metrics',
        'Client-facing report suite with CSV and XLSX export',
        'Multi-tenant architecture with firm-managed configuration',
      ],
      audience: {
        '@type': 'Audience',
        audienceType: 'Landlord-tenant law firms, eviction attorneys, property managers',
      },
      provider: {
        '@type': 'Organization',
        name: 'Case Compass',
        url: 'https://www.casecompass.io',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
        { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
        { '@type': 'ListItem', position: 3, name: 'Dwellex', item: 'https://www.casecompass.io/solutions/dwellex' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Dwellex?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex is eviction case management software built specifically for landlord-tenant law firms. It automates the full eviction workflow — from landlord intake to lockout scheduling — including document generation, court date tracking, Clio integration, and automated client notifications.',
          },
        },
        {
          '@type': 'Question',
          name: 'What eviction software works with Clio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex integrates directly with Clio via OAuth 2.0. Every new intake automatically creates a matter in Clio, and documents, case stages, and status updates sync bidirectionally in real time. Practice Panther and Rent Manager integrations are also available.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best landlord-tenant software for law firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex by Case Compass is purpose-built landlord-tenant software for law firms handling high-volume eviction caseloads. It combines intake automation, case timeline tracking, court document generation, and integrations with Clio and Practice Panther — replacing spreadsheets, manual follow-ups, and disconnected tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Dwellex automate eviction case management?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex automates eviction case management through: (1) online landlord intake portals with document upload and e-signature, (2) automatic case creation with step-by-step timeline templates for Non-Payment, For-Cause, and custom case types, (3) auto-generated court documents populated from case data, (4) SMS and email notifications at every stage, and (5) real-time Clio sync for matter creation and document uploads.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Dwellex generate eviction court documents automatically?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dwellex automatically generates eviction court documents including summons, complaints, motions to show cause, orders to show cause, sheriff tenant info sheets, and fair debt letters. Documents are populated from case and intake data — no manual editing required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Dwellex suitable for high-volume eviction practices?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dwellex is designed for law firms handling dozens to hundreds of eviction cases per month. Automation of intake, document generation, case tracking, and court coordination allows firms to scale their eviction practice without adding headcount.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does eviction case management software cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex is priced at $399/month plus a per-case fee that decreases with volume: $8.00/case up to 50 cases/month, $6.50/case for 51–150, $5.00/case for 151–300. Firms running 300+ cases/month qualify for enterprise flat-rate pricing with no per-case charges. Implementation, training, and custom integrations are scoped per project. No per-seat fees.',
          },
        },
        {
          '@type': 'Question',
          name: 'What states does Dwellex support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex supports eviction workflows across all 50 states. Case templates, intake forms, and court document formats are fully customizable per jurisdiction — configured to match your state during implementation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Dwellex generate eviction notices in bulk from a spreadsheet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dwellex batch notice generation lets you upload a CSV export from any property management system and produce one combined, court-ready notice document for every tenant in the file. It maps columns (with saved mappings per property), validates each row with per-row error reporting, and calculates court-specific service and expiration dates automatically.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Dwellex calculate notice expiration dates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex calculates expiration dates automatically from the service date using per-court, per-notice-type rules — calendar days or business days, with federal and state holidays accounted for. Firm admins configure the court directory and rules themselves, and staff can review or override any calculated date before a notice goes out.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Dwellex automate eviction reminders and follow-ups?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dwellex includes a configurable reminder engine. You build rules tied to case milestones — send before, after, or on a due date, over email, SMS, or both — choose the send time and template, and Dwellex sends every reminder automatically so no statutory deadline is missed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What reporting and analytics does Dwellex provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex includes a firm-wide analytics dashboard tracking active cases, pending intakes, rent at risk, and average days to close, plus breakdowns for case volume, the intake funnel, cases by county, and violation types. A client-facing report suite with roughly 20 filterable fields exports to CSV and XLSX.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best EasyEviction or Eviction Assistant alternative for law firms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex by Case Compass is the leading EasyEviction alternative for landlord-tenant law firms. Unlike per-seat subscription platforms, Dwellex charges $399/month plus volume-tiered per-case fees ($8.00/case up to 50/mo, $6.50 at 51–150, $5.00 at 151–300, enterprise flat-rate at 300+) with no per-seat fees. It adds a drag-and-drop form builder with conditional logic, step-by-step case playbooks, Trial Lists with Word export, bidirectional Clio sync, and Practice Panther integration — features purpose-built for high-volume eviction practices rather than general property management.',
          },
        },
        {
          '@type': 'Question',
          name: 'What eviction software has per-case pricing instead of per-seat fees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dwellex is the only eviction case management platform with volume-tiered per-case pricing ($399/month platform fee, then $8.00/case up to 50 cases, $6.50 at 51–150, $5.00 at 151–300, and enterprise flat-rate at 300+) with no per-seat or per-user fees. Most competing platforms charge per seat, meaning costs grow as you add staff. Dwellex lets your entire team — attorneys, paralegals, intake staff — work simultaneously without additional charges.',
          },
        },
      ],
    },
  ],
}

const features = [
  { 
    icon: FileText, 
    title: 'Landlord Intake Portal', 
    desc: 'Branded public intake forms with conditional logic, document upload, and e-signature. Staff review and approval workflow before any case is created.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  { 
    icon: CheckCircle, 
    title: 'Case Timeline Tracker', 
    desc: 'Step-by-step action item tracker with client and attorney task columns. Automated step assignment, due dates, and case notes — all in one view.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
  },
  { 
    icon: Landmark, 
    title: 'Trial Lists & Court Prep', 
    desc: 'County-grouped AM/PM court schedules for all upcoming hearings. Filter by date and county, then download a formatted Word doc with one click.',
    gradient: 'linear-gradient(135deg, #0f172a, #475569)',
  },
  { 
    icon: FileText, 
    title: 'Document Automation', 
    desc: 'One-click generation of summons, notices, complaints, and court filings. Documents are built from case data — no copy-paste, no manual edits.',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  { 
    icon: Monitor, 
    title: 'Client Portal', 
    desc: 'Clients see their own case timeline, document status, and can upload requested files directly — no phone calls, no email back-and-forth.',
    gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)',
  },
  { 
    icon: FolderSync, 
    title: 'Clio Integration', 
    desc: 'Intakes auto-create matters in Clio. Stages, documents, and case updates sync bidirectionally — one source of truth across systems.',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  { 
    icon: Bell, 
    title: 'Automated Notifications', 
    desc: 'Email + SMS alerts at every stage: court dates, lockout scheduling, adjournments, and case updates. Zero manual follow-ups needed.',
    gradient: 'linear-gradient(135deg, #10b981, #6366f1)',
  },
  { 
    icon: BarChart2, 
    title: 'Staff & Analytics', 
    desc: 'Role-based access for admins, staff, and clients. Analytics dashboard with case volume and activity metrics. Per-case ledger with installment payment tracking.',
    gradient: 'linear-gradient(135deg, #f59e0b, #6366f1)',
  },
  { 
    icon: Calendar, 
    title: 'Marshal & Court Coordination', 
    desc: 'Built-in court date tracking, marshal assignment, and lockout scheduling. Manage the full eviction timeline from filing to possession.',
    gradient: 'linear-gradient(135deg, #475569, #0f172a)',
  },
]

const workflow = [
  { step: '01', title: 'Landlord Submits Intake', desc: 'Online portal with document upload and e-signature' },
  { step: '02', title: 'Staff Reviews & Approves', desc: 'Case details verified, conflicts checked, matter created' },
  { step: '03', title: 'Case Created', desc: 'Timeline initialized, action items assigned, notifications sent' },
  { step: '04', title: 'Action Items Tracked', desc: 'Client and attorney tasks tracked in dual-column view' },
  { step: '05', title: 'Court Dates Managed', desc: 'Automated reminders, marshal coordination, document prep' },
  { step: '06', title: 'Lockout Coordinated', desc: 'Scheduling, notifications, and completion tracking' },
]

const integrations = [
  { name: 'Clio', desc: 'Practice management sync', logo: '/images/clio-logo.png' },
  { name: 'Practice Panther', desc: 'Case and document sync', logo: '/images/practice-panther-logo.jpg' },
  { name: 'Rent Manager', desc: 'Property management integration', logo: '/images/rent-manager-logo.png' },
]

const audience = [
  {
    icon: Scale,
    label: 'Landlord-Tenant Law Firms',
    pain: 'Managing eviction caseloads across spreadsheets, inboxes, and a generic case manager that was never built for this',
    desc: 'Automate intake, document generation, court tracking, and Clio sync — handle more cases with the same team.',
  },
  {
    icon: Building2,
    label: 'Property Managers',
    pain: 'Cases get stuck in email chains and you have no visibility into where things stand until it\'s too late',
    desc: 'Submit intake directly, track every case in real time, and get automatic updates at each stage — no phone calls required.',
  },
  {
    icon: Users,
    label: 'Landlords',
    pain: 'Your attorney is hard to reach and you\'re left guessing what\'s happening with your eviction case',
    desc: 'Submit intake, upload documents, and follow your case timeline in a secure client portal — no chasing anyone down.',
  },
]

const capabilities = [
  {
    icon: Briefcase,
    title: 'Case Management',
    items: [
      'Full case lifecycle tracking from intake to resolution',
      'Configurable action-item pipeline per case type',
      'Conditional workflow branching on outcomes',
      'Color-coded status, labels, and custom tagging',
      'Bulk case reassignment across staff',
      'Closed & withdrawn archive with full history',
    ],
  },
  {
    icon: FileText,
    title: 'Intake',
    items: [
      'Mobile-friendly, client-facing intake forms',
      'Bankruptcy hard-stop and HAP/voucher flags',
      'Bulk CSV intake from any PMS export',
      'Saved column mappings per property',
      'Structural validation with per-row errors',
      'Auto-fill from property defaults',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Review Queue',
    items: [
      'Centralized queue for all pending intakes',
      'Four-action approval workflow',
      'Confirm notice type, court, service date & template',
      'Deep filters — assignee, court, status, flags, dates',
      'Bulk reassignment in a single action',
    ],
  },
  {
    icon: Files,
    title: 'Document Generation',
    items: [
      'Batch notice generation from CSV',
      'Court-specific, holiday-aware expiration math',
      'Envelopes and process-server routing sheets',
      'Document preview & QC before finalizing',
      'Regenerate and replace after corrections',
      'Eviction complaint generation by jurisdiction',
    ],
  },
  {
    icon: Landmark,
    title: 'Court & Jurisdiction',
    items: [
      'Full court directory with jurisdiction details',
      'Per-court, per-notice expiration rules',
      'Admin-configurable — no vendor needed',
      'Clio folder routing by service date',
      'In-platform folder name editing',
    ],
  },
  {
    icon: FolderSync,
    title: 'Clio Integration',
    items: [
      'Full matter sync with custom field values',
      'General Service File folder routing',
      'Bidirectional task & activity sync',
      'Parent/child property manager mapping',
      'Sync-scope & document visibility controls',
    ],
  },
  {
    icon: CalendarClock,
    title: 'Expiration & Signed Notices',
    items: [
      'Automatic expiration from service date + rules',
      'Staff review and override of calculated dates',
      'One-click client notification with spreadsheet',
      'Signed-notice upload to General Service File',
      'Case-manager confirmation before client notice',
    ],
  },
  {
    icon: Monitor,
    title: 'Client Portal',
    items: [
      'Secure login with role-based access',
      'Dashboard grouped by practice area',
      'Upcoming court & hearing dates at a glance',
      'Case timeline with current step & status',
      '~20-field report suite, CSV & XLSX export',
      'Submit new notice requests from the portal',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Communications',
    items: [
      'Case-linked, multi-participant threads',
      'File attachments auto-filed to the matter',
      'Inbound email threading into the portal',
      'Emailed document attachments auto-filed',
    ],
  },
  {
    icon: Users,
    title: 'Staff & Roles',
    items: [
      'Admin, Supervisor, Staff, Trainer/QA, Client roles',
      'Case assignment with visibility scoping',
      'Per-staff queue views and filters',
      'Coverage / out-of-office access grants',
      'Supervisor reassignment across the queue',
    ],
  },
  {
    icon: Building2,
    title: 'Property & Client Profiles',
    items: [
      'Rich profiles — gate codes, contacts, recipients',
      'Clio General Service File link per property',
      'Default court & notice type auto-fill',
      'HAP flag & per-client export preferences',
      'Admin self-maintenance after go-live',
    ],
  },
  {
    icon: Settings,
    title: 'Platform & Administration',
    items: [
      'Multi-tenant architecture — full firm isolation',
      'Firm-admin-managed workflow configuration',
      'Word template management by document type',
      'Configurable reminder triggers & timing',
      'Audit trail and activity logging',
    ],
  },
]

const faqs = [
  {
    q: 'What is Dwellex?',
    a: 'Dwellex is eviction case management software built specifically for landlord-tenant law firms. It automates the full eviction workflow — from landlord intake to lockout scheduling — including document generation, court date tracking, Clio integration, and automated client notifications.',
  },
  {
    q: 'What eviction software integrates with Clio?',
    a: 'Dwellex integrates directly with Clio via OAuth 2.0. Every new intake automatically creates a matter in Clio, and documents, case stages, and status updates sync bidirectionally in real time. Practice Panther and Rent Manager integrations are also available.',
  },
  {
    q: 'What is the best landlord-tenant software for law firms?',
    a: 'Dwellex is purpose-built landlord-tenant software for firms handling high-volume eviction caseloads. It combines intake automation, case timeline tracking, court document generation, and Clio/Practice Panther integrations — replacing spreadsheets, manual follow-ups, and disconnected tools.',
  },
  {
    q: 'Can Dwellex automatically generate eviction court documents?',
    a: 'Yes. Dwellex auto-generates summons, complaints, motions to show cause, orders to show cause, sheriff tenant info sheets, and fair debt letters. Documents are populated directly from case and intake data — no manual editing required.',
  },
  {
    q: 'How does Dwellex automate eviction case management?',
    a: 'Dwellex automates eviction cases through: (1) online landlord intake portals with document upload and e-signature, (2) automatic case creation with step-by-step timeline templates for Non-Payment, For-Cause, and custom case types, (3) auto-generated court documents, (4) SMS and email notifications at every stage, and (5) real-time Clio sync for matter creation and document uploads.',
  },
  {
    q: 'Is Dwellex suitable for high-volume eviction practices?',
    a: 'Yes. Dwellex is designed for firms handling dozens to hundreds of eviction cases per month. Automation of intake, document generation, case tracking, and court coordination lets practices scale without adding headcount.',
  },
  {
    q: 'What states does Dwellex support?',
    a: 'Dwellex supports eviction workflows across all 50 states. Case templates, intake forms, and court document formats are fully customizable per jurisdiction — your workflows and documents are configured to match your state during implementation.',
  },
  {
    q: 'Can Dwellex generate notices in bulk from a spreadsheet?',
    a: 'Yes. Dwellex batch notice generation lets you upload a CSV export from any property management system and produce one combined, court-ready notice document for every tenant in the file. It maps columns (with saved mappings per property), validates each row with per-row error reporting, and calculates court-specific service and expiration dates automatically.',
  },
  {
    q: 'How does Dwellex calculate notice expiration dates?',
    a: 'Dwellex calculates expiration dates automatically from the service date using per-court, per-notice-type rules — calendar days or business days, with federal and state holidays accounted for. Firm admins configure the court directory and rules themselves, and staff can review or override any calculated date before a notice goes out.',
  },
  {
    q: 'Can I automate reminders and follow-ups in Dwellex?',
    a: 'Yes. Dwellex includes a configurable reminder engine. You build rules tied to case milestones — send before, after, or on a due date, over email, SMS, or both — choose the send time and template, and Dwellex sends every reminder automatically so no statutory deadline is missed.',
  },
  {
    q: 'What reporting and analytics does Dwellex provide?',
    a: 'Dwellex includes a firm-wide analytics dashboard tracking active cases, pending intakes, rent at risk, and average days to close, plus breakdowns for case volume, the intake funnel, cases by county, and violation types. A client-facing report suite with roughly 20 filterable fields exports to CSV and XLSX.',
  },
  {
    q: 'Does Dwellex work for both residential and commercial evictions?',
    a: 'Yes. Dwellex supports both residential and commercial landlord-tenant cases. Case templates, intake forms, and document sets can be configured separately for each case type.',
  },
  {
    q: 'Can multiple staff members work on cases simultaneously?',
    a: 'Yes. Dwellex is a multi-user platform with no per-seat fees. Your entire team — attorneys, paralegals, intake staff — can work on cases simultaneously. Role-based task assignment separates attorney tasks from client tasks in the case timeline view.',
  },
  {
    q: 'How much does Dwellex cost?',
    a: 'Dwellex is priced at $399/month plus a per-case fee that scales down with volume: $8.00/case (up to 50 cases/month), $6.50/case (51–150), $5.00/case (151–300). Firms running 300+ cases/month qualify for enterprise flat-rate pricing — all-inclusive with no per-case charges. Implementation and training are scoped per project. No per-seat fees.',
  },
]

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ background: '#fff', padding: '100px 40px', borderTop: '1px solid #f1f5f9' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '8px',
              padding: '6px 16px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: '#6366f1',
              marginBottom: '20px',
            }}>
              FAQ
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
              Common questions about Dwellex
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7 }}>
              Everything landlord-tenant law firms need to know about eviction case management software.
            </p>
          </div>
        </SectionReveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map(({ q, a }, i) => (
            <SectionReveal key={i}>
              <div style={{ borderBottom: '1px solid #f1f5f9' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '24px',
                    textAlign: 'left' as const,
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                    {q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    color: '#6366f1',
                    transition: 'transform 0.25s ease',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'flex',
                  }}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: '24px' }}>
                    <p style={{ fontSize: '0.97rem', color: '#475569', lineHeight: 1.85, margin: 0 }}>
                      {a}
                    </p>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function DwellexPage() {
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const [showSticky, setShowSticky] = useState(false)
  const [cases, setCases] = useState(50)

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 700)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const line = lineRef.current
    if (!line) return

    const lineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.style.height = 'calc(100% - 80px)'
          lineObserver.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    lineObserver.observe(line.parentElement!)

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            stepObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )
    stepsRef.current.forEach((el) => el && stepObserver.observe(el))

    return () => {
      lineObserver.disconnect()
      stepObserver.disconnect()
    }
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalaxyCanvas />
      <AnnouncementBanner />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>

        {/* Hero */}
        <section style={{ background: 'transparent', padding: '100px 40px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <Image
              src="/images/dwellex_logo_white.png"
              alt="Dwellex"
              width={400}
              height={174}
              style={{ height: '120px', width: 'auto', margin: '0 auto 16px', display: 'block' }}
              priority
            />
            <div style={{
              display: 'inline-block',
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.35)',
              borderRadius: '100px',
              padding: '6px 20px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(165,180,252,0.9)',
              marginBottom: '28px',
            }}>
              Landlord-Tenant Case Management
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', lineHeight: 1.1, marginBottom: '24px' }}>
              <span style={{
                background: 'linear-gradient(135deg, #fff 30%, rgba(165,180,252,0.9))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Your entire eviction practice,<br />in one portal
              </span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '660px', margin: '0 auto 44px' }}>
              From landlord intake to lockout scheduling — automated. Built specifically for landlord-tenant law firms handling high-volume eviction caseloads.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <DemoButton style={{ padding: '16px 40px', fontSize: '1rem' }}>
                Request a Demo →
              </DemoButton>
              <a href="#how-it-works" style={{
                padding: '15px 28px',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
              >
                See how it works ↓
              </a>
            </div>

            {/* Hero product screenshot — browser chrome mockup */}
            <div style={{ marginTop: '72px', position: 'relative' }}>
              {/* Ambient glow */}
              <div style={{
                position: 'absolute',
                inset: '-40px',
                borderRadius: '32px',
                background: 'radial-gradient(ellipse at 50% 60%, rgba(99,102,241,0.35) 0%, transparent 70%)',
                filter: 'blur(32px)',
                pointerEvents: 'none',
              }} />
              {/* Browser chrome */}
              <div style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 48px 120px rgba(0,0,0,0.55), 0 8px 32px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}>
                {/* Browser toolbar */}
                <div style={{
                  background: '#1e1e2e',
                  padding: '11px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  {/* Traffic lights */}
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                      <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                  {/* URL bar */}
                  <div style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '6px',
                    padding: '5px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    maxWidth: '420px',
                    margin: '0 auto',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}>
                      app.dwellex.com
                    </span>
                  </div>
                </div>
                {/* Screenshot */}
                <div style={{ display: 'block', lineHeight: 0 }}>
                  <Image
                    src="/images/dwellex-landing.png"
                    alt="Dwellex batch notice review — approve and generate court-ready notices from a CSV intake"
                    width={1280}
                    height={760}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust signals bar */}
        <section style={{ background: 'rgba(255,255,255,0.04)', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { icon: Lock, label: 'Data encrypted at rest & in transit' },
              { icon: Shield, label: 'Role-based access control' },
              { icon: CheckCircle, label: 'All 50 states supported' },
              { icon: Users, label: 'Unlimited users — no per-seat fees' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Icon size={15} color="rgba(165,180,252,0.8)" strokeWidth={2} />
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Facts — answer-first summary for AI engines & skimmers */}
        <section style={{ background: 'transparent', padding: '80px 40px 100px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '920px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '40px 44px',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(165,180,252,0.9)', marginBottom: '14px' }}>
                  The short version
                </div>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.75, margin: '0 0 28px' }}>
                  <strong style={{ color: '#fff' }}>Dwellex is eviction case management software built for landlord-tenant law firms.</strong> It automates the full eviction workflow — client intake, staff review, batch notice generation from CSV, court-specific expiration calculation, document generation, case timeline tracking, and client communication — and syncs bidirectionally with Clio. It is priced at $399/month plus volume-tiered per-case fees (starting at $8.00/case), with no per-seat fees.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px 32px' }}>
                  {[
                    { k: 'What it is', v: 'Eviction & landlord-tenant case management software' },
                    { k: 'Built for', v: 'Eviction law firms, landlord-tenant attorneys & property managers' },
                    { k: 'Pricing', v: '$399/mo + per-case (starts $8, scales down to $5 at volume)' },
                    { k: 'Integrates with', v: 'Clio, Practice Panther, Rent Manager' },
                    { k: 'Coverage', v: 'All 50 states — residential & commercial' },
                    { k: 'Best-known alternative to', v: 'EasyEviction, Eviction Assistant, and generic LPM + spreadsheets' },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(165,180,252,0.75)', marginBottom: '6px' }}>{k}</div>
                      <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Demo Video Placeholder */}
        <section style={{ background: '#fff', padding: '100px 40px 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: '#6366f1',
                  marginBottom: '20px',
                }}>
                  Product Walkthrough
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2 }}>
                  See Dwellex in 90 seconds
                </h2>
              </div>
            </SectionReveal>
            {/* Video embed — replace src with your video URL */}
            <SectionReveal>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
                aspectRatio: '16/9',
                border: '1px solid rgba(99,102,241,0.2)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}>
                {/* Placeholder until video is recorded — swap out iframe once ready */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px', height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(99,102,241,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 0 0 12px rgba(99,102,241,0.2)',
                  }}>
                    <Play size={32} color="#fff" fill="#fff" />
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                    Demo video coming soon
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ROI Stats */}
        <section style={{ background: '#fff', padding: '80px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: '#6366f1',
                  marginBottom: '20px',
                }}>
                  Why Dwellex
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a' }}>
                  Less time on admin. More cases handled.
                </h2>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                { icon: Zap, stat: '< 60 sec', label: 'To generate a court-ready notice from intake data', color: '#6366f1' },
                { icon: TrendingUp, stat: '4×', label: 'More cases handled with the same team size', color: '#10b981' },
                { icon: CheckCircle, stat: '0', label: 'Missed statutory deadlines with automated reminders', color: '#0ea5e9' },
                { icon: BarChart2, stat: '$0', label: 'Per-seat fees — unlimited users on one flat plan', color: '#8b5cf6' },
              ].map(({ icon: Icon, stat, label, color }) => (
                <SectionReveal key={stat + label}>
                  <div style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '36px 28px',
                    textAlign: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)'; }}
                  >
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <Icon size={24} color={color} strokeWidth={2} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, color, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '12px' }}>
                      {stat}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{label}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section style={{ background: '#f8fafc', padding: '100px 40px', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: '#6366f1',
                  marginBottom: '20px',
                }}>
                  Who It&apos;s For
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
                  Built for the people who run evictions
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                  Whether you process 10 cases a month or 500, Dwellex replaces the spreadsheets, emails, and workarounds with one system.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {audience.map(({ icon: Icon, label, pain, desc }) => (
                <SectionReveal key={label}>
                  <div style={{
                    background: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '36px 32px',
                    height: '100%',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(99,102,241,0.1)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                  >
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <Icon size={22} color="#fff" />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#0f172a', marginBottom: '12px' }}>{label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '16px', fontStyle: 'italic', borderLeft: '3px solid #e2e8f0', paddingLeft: '12px' }}>
                      &ldquo;{pain}&rdquo;
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="how-it-works" style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 80px' }}>
              <SectionReveal>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6366f1',
                  marginBottom: '24px',
                }}>
                  How It Works
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.2, marginBottom: '20px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    The Complete Eviction Pipeline
                  </span>
                </h2>
                <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.8 }}>
                  From intake to lockout, Dwellex manages every stage with automated workflows and zero manual follow-ups.
                </p>
              </SectionReveal>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Animated connecting line */}
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '50%',
                width: '2px',
                height: 'calc(100% - 80px)',
                background: '#f1f5f9',
                transform: 'translateX(-50%)',
                zIndex: 0,
              }}>
                <div
                  ref={lineRef}
                  style={{
                    width: '100%',
                    height: '0%',
                    background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #0ea5e9)',
                    transition: 'height 1.8s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', zIndex: 1 }}>
                {workflow.map(({ step, title, desc }, index) => (
                  <div
                    key={step}
                    ref={(el) => { stepsRef.current[index] = el }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '32px',
                      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                      opacity: 0,
                      transform: `translateY(24px)`,
                      transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
                    }}
                  >
                    {/* Content card */}
                    <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                      <div
                        style={{
                          background: '#fff',
                          borderRadius: '20px',
                          padding: '32px 36px',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                          maxWidth: '460px',
                          marginLeft: index % 2 === 0 ? 'auto' : '0',
                          marginRight: index % 2 === 0 ? '0' : 'auto',
                          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.12)'
                          e.currentTarget.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }}
                      >
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                          {title}
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                          {desc}
                        </p>
                      </div>
                    </div>

                    {/* Center badge */}
                    <div style={{
                      width: '72px',
                      height: '72px',
                      flexShrink: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: '#fff',
                      fontSize: '1.1rem',
                      letterSpacing: '0.02em',
                      boxShadow: '0 8px 24px rgba(99,102,241,0.4), 0 0 0 5px #fff, 0 0 0 6px rgba(99,102,241,0.15)',
                      position: 'relative',
                      zIndex: 2,
                    }}>
                      {step}
                    </div>

                    <div style={{ flex: 1 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Screenshots */}
        {[
          {
            image: '/images/dwellex-case-timeline.png',
            alt: 'Dwellex case timeline tracker showing step-by-step progress',
            eyebrow: 'Case Timeline',
            title: 'Every action item, tracked automatically',
            body: 'A dual-column view separates client tasks from attorney tasks — so nothing falls through the cracks. Cases progress stage by stage, with automated notifications at every step.',
            accent: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            bg: '#fafbff',
            glow: 'rgba(99,102,241,0.08)',
          },
          {
            image: '/images/dwellex-form-builder.png',
            alt: 'Dwellex intake form builder with drag-and-drop fields',
            eyebrow: 'Form Builder',
            title: 'Build intake forms without writing a line of code',
            body: 'Drag-and-drop fields, pre-built section blocks, and a live preview — create custom intake forms for every case type. Publish with one click and share a link directly with clients.',
            accent: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            bg: '#f8fafc',
            glow: 'rgba(14,165,233,0.07)',
          },
          {
            image: '/images/dwellex-clio-integration.png',
            alt: 'Dwellex Clio integration showing connected status and sync options',
            eyebrow: 'Clio Integration',
            title: 'Real-time sync with zero manual entry',
            body: 'Connect your Clio account via OAuth and let Dwellex handle the rest. Full sync, document uploads, and per-intake sync — with live status, auto-sync toggle, and last-run timestamps.',
            accent: 'linear-gradient(135deg, #10b981, #0ea5e9)',
            bg: '#f8fffb',
            glow: 'rgba(16,185,129,0.07)',
          },
          {
            image: '/images/dwellex-trial-lists.png',
            alt: 'Dwellex Trial Lists — county-grouped AM/PM court schedules with docket numbers and case financials',
            eyebrow: 'Court Preparation',
            title: 'Every hearing. Every county. Ready before court.',
            body: 'Trial Lists group all upcoming cases by county and AM/PM session — docket number, case name, balance, base rent, and late fees all in one view. Filter by date and county, then download a formatted Word doc for court in one click.',
            accent: 'linear-gradient(135deg, #0f172a, #6366f1)',
            bg: '#f8fafc',
            glow: 'rgba(99,102,241,0.07)',
          },
          {
            image: '/images/dwellex-cases-list.png',
            alt: 'Dwellex cases list showing all open eviction cases with court dates',
            eyebrow: 'Case Management',
            title: 'Every case, at a glance',
            body: 'A clean list view of all open and closed cases — searchable, sortable by court date, and filterable by status. See property, court date, and labels in one place without opening a single file.',
            accent: 'linear-gradient(135deg, #f59e0b, #6366f1)',
            bg: '#fafbff',
            glow: 'rgba(99,102,241,0.08)',
          },
          {
            image: '/images/dwellex-case-templates.png',
            alt: 'Dwellex case templates showing workflow step templates and generated documents',
            eyebrow: 'Case Templates',
            title: 'Standardize your workflows once, run them every time',
            body: 'Define multi-step case workflows for Non-Payment, For-Cause, and custom case types. Attach auto-generated document templates — summons, motions, sheriff sheets — that populate from case data automatically.',
            accent: 'linear-gradient(135deg, #8b5cf6, #0ea5e9)',
            bg: '#f8fafc',
            glow: 'rgba(139,92,246,0.07)',
          },
          {
            image: '/images/dwellex-form-blocks.png',
            alt: 'Dwellex form blocks showing pre-built intake sections like tenant info and ledger table',
            eyebrow: 'Smart Form Blocks',
            title: 'Pre-built sections for complex intake data',
            body: 'Toggle on blocks for tenant information, ledger tables, notice type checkboxes, and file uploads — each fully configurable. No custom coding needed to collect multi-tenant leases, month-by-month charge breakdowns, or signed documents.',
            accent: 'linear-gradient(135deg, #10b981, #8b5cf6)',
            bg: '#f8fffb',
            glow: 'rgba(16,185,129,0.07)',
          },
          {
            image: '/images/dwellex-batch-notices.png',
            alt: 'Dwellex batch notice generator — upload a PMS CSV to produce one combined notice document for multiple tenants',
            eyebrow: 'Batch Notices',
            title: 'Hundreds of notices from a single CSV',
            body: 'Upload any property management export and Dwellex maps the columns, validates every row, and generates one combined, court-ready notice document for every tenant in the file — with per-row service dates and court-specific expiration math. Saved column mappings mean you never remap the same property twice.',
            accent: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            bg: '#fffdf8',
            glow: 'rgba(245,158,11,0.08)',
          },
          {
            image: '/images/dwellex-court-management.png',
            alt: 'Dwellex court management — edit court details including court type, jurisdiction, and per-notice expiration rules',
            eyebrow: 'Court & Jurisdiction',
            title: 'Configure courts and expiration rules yourself',
            body: 'Maintain a full court directory with jurisdiction, court type, and per-notice-type expiration rules — calendar days or business days, federal and state holiday-aware. Firm admins add courts and change rules directly, with no vendor involvement.',
            accent: 'linear-gradient(135deg, #0f172a, #475569)',
            bg: '#f8fafc',
            glow: 'rgba(15,23,42,0.06)',
          },
          {
            image: '/images/dwellex-reminder-rules.png',
            alt: 'Dwellex reminder rules editor — automated email and SMS reminders based on notice deadlines',
            eyebrow: 'Automated Reminders',
            title: 'Deadline-driven reminders on autopilot',
            body: 'Build reminder rules tied to any case milestone — send before, after, or on the due date, over email, SMS, or both. Set the send time, choose a template, and Dwellex handles every follow-up so nothing slips past a statutory deadline.',
            accent: 'linear-gradient(135deg, #10b981, #6366f1)',
            bg: '#f8fffb',
            glow: 'rgba(16,185,129,0.07)',
          },
          {
            image: '/images/dwellex-communications.png',
            alt: 'Dwellex communications — case-linked message threads between firm staff and clients',
            eyebrow: 'Communications',
            title: 'Every client conversation, linked to the case',
            body: 'Case-linked message threads keep firm staff and client contacts on the same page. Attachments file straight to the matter, and client replies to notification emails thread back into the portal automatically — no more digging through inboxes.',
            accent: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
            bg: '#f8fafc',
            glow: 'rgba(14,165,233,0.07)',
          },
          {
            image: '/images/dwellex-analytics.png',
            alt: 'Dwellex analytics dashboard — firm-wide case, intake, and financial metrics including rent at risk and days to close',
            eyebrow: 'Reporting & Analytics',
            title: 'Firm-wide metrics, at a glance',
            body: 'Track active cases, pending intakes, rent at risk, and average days to close in real time. Drill into case volume, the intake funnel, cases by county, and violation-type breakdowns — then export client-ready reports to CSV or XLSX.',
            accent: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            bg: '#fafbff',
            glow: 'rgba(139,92,246,0.07)',
          },
        ].map(({ image, alt, eyebrow, title, body, accent, bg, glow }, i) => (
          <section key={title} style={{ background: bg, padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient glow blob */}
            <div style={{
              position: 'absolute',
              top: '50%', left: i % 2 === 0 ? '60%' : '20%',
              transform: 'translate(-50%, -50%)',
              width: '600px', height: '600px',
              background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
              <SectionReveal>
                <div className="split-row" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '72px',
                  alignItems: 'center',
                  direction: i % 2 === 1 ? 'rtl' : 'ltr',
                }}>
                  {/* Text */}
                  <div style={{ direction: 'ltr' }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      marginBottom: '20px',
                    }}>
                      <div style={{ width: '28px', height: '3px', borderRadius: '2px', background: accent }} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366f1' }}>
                        {eyebrow}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.7rem, 2.5vw, 2.3rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.85, margin: 0 }}>
                      {body}
                    </p>
                  </div>

                  {/* Image */}
                  <div style={{ direction: 'ltr', position: 'relative' }}>
                    {/* Decorative gradient border glow behind image */}
                    <div style={{
                      position: 'absolute', inset: '-3px',
                      borderRadius: '20px',
                      background: accent,
                      opacity: 0.25,
                      filter: 'blur(12px)',
                      zIndex: 0,
                    }} />
                    <div style={{
                      position: 'relative', zIndex: 1,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 24px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)',
                      border: '1px solid rgba(255,255,255,0.8)',
                      transform: i % 2 === 0 ? 'perspective(1200px) rotateY(-3deg) rotateX(1deg)' : 'perspective(1200px) rotateY(3deg) rotateX(1deg)',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1.01)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = i % 2 === 0 ? 'perspective(1200px) rotateY(-3deg) rotateX(1deg)' : 'perspective(1200px) rotateY(3deg) rotateX(1deg)' }}
                    >
                      <Image
                        src={image}
                        alt={alt}
                        width={1024}
                        height={700}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>
        ))}

        {/* Mid-page demo CTA */}
        <section style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', padding: '56px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '14px' }}>
              See it live
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', lineHeight: 1.25, marginBottom: '28px', margin: '0 auto 28px' }}>
              Ready to see how Dwellex handles your eviction caseload?
            </h2>
            <DemoButton style={{ padding: '15px 40px', fontSize: '1rem', background: '#fff', color: '#4f46e5' }}>
              Request a Demo →
            </DemoButton>
          </div>
        </section>

        {/* Features Grid */}
        <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Everything You Need for Eviction Cases
                  </span>
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                  Purpose-built tools for every step of the eviction process — from intake to lockout.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
              {features.map(({ icon: Icon, title, desc, gradient }) => (
                <SectionReveal key={title}>
                  <div
                    style={{
                      background: '#fff',
                      padding: '36px',
                      border: '1px solid #e2e8f0',
                      borderRadius: '20px',
                      height: '100%',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)'
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)'
                      e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                      background: gradient,
                    }} />
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '22px',
                    }}>
                      <Icon size={24} color="#fff" strokeWidth={2} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', lineHeight: 1.3 }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.75, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Capabilities */}
        <section style={{ background: '#fff', padding: '120px 40px', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', padding: '6px 16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6366f1', marginBottom: '20px' }}>
                  Full Feature Set
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
                  Everything a landlord-tenant practice runs on
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7 }}>
                  From first intake to signed notice, Dwellex covers the entire eviction workflow — organized so your whole team works from one system of record.
                </p>
              </div>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {capabilities.map(({ icon: Icon, title, items }) => (
                <SectionReveal key={title}>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '30px', height: '100%', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={19} color="#fff" strokeWidth={2} />
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{title}</h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {items.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                          <CheckCircle size={15} color="#10b981" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', padding: '6px 16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6366f1', marginBottom: '20px' }}>
                  How We Compare
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
                  Built for eviction. Not bolted on.
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
                  Eviction Assistant handles the basics. Dwellex takes it further — modern UI, form builder, case playbooks, Clio sync, SMS, and Trial Lists, all in one platform.
                </p>
              </div>
            </SectionReveal>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase' as const, borderBottom: '2px solid #f1f5f9', width: '36%' }}>Feature</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.85rem', color: '#6366f1', borderBottom: '2px solid #6366f1', background: 'rgba(99,102,241,0.04)', borderRadius: '12px 12px 0 0' }}>Dwellex</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#94a3b8', borderBottom: '2px solid #f1f5f9' }}>Eviction Assistant</th>
                    <th style={{ padding: '16px 20px', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#94a3b8', borderBottom: '2px solid #f1f5f9' }}>Generic LPM + Spreadsheets</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Purpose-built for landlord-tenant law', true, true, false],
                    ['E-signature in intake', true, false, false],
                    ['Conditional field logic in forms', true, false, false],
                    ['Drag-and-drop form builder', true, false, false],
                    ['Step-by-step case timeline + playbooks', true, false, false],
                    ['Auto-generated court documents', true, true, 'Manual'],
                    ['Bulk CSV / batch notice generation', true, 'Partial', 'Manual'],
                    ['Admin-configurable court & expiration rules', true, false, false],
                    ['Firm-wide analytics dashboard', true, 'Partial', false],
                    ['Trial Lists (county-grouped, Word export)', true, false, false],
                    ['Client portal with case timeline visibility', true, 'Partial', false],
                    ['SMS + email automated notifications', true, 'Email only', 'Add-on'],
                    ['Clio bidirectional sync', true, false, 'Native'],
                    ['Practice Panther integration', true, false, false],
                    ['Rent Manager integration', true, true, false],
                    ['Role-based access control', true, true, 'Partial'],
                    ['Modern browser-based UI (no Windows app required)', true, 'Partial', true],
                    ['Per-case pricing (no per-seat lock-in)', true, false, false],
                  ].map(([feat, dwellex, ea, generic], i) => {
                    const cell = (val: boolean | string) => {
                      if (val === true) return <span style={{ color: '#10b981', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                      if (val === false) return <span style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>—</span>
                      return <span style={{ color: '#f59e0b', fontSize: '0.82rem', fontWeight: 600 }}>{val}</span>
                    }
                    return (
                      <tr key={String(feat)} style={{ background: i % 2 === 0 ? '#fafbff' : '#fff', borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '14px 20px', color: '#334155', fontWeight: 500 }}>{feat as string}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'center', background: i % 2 === 0 ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.02)' }}>{cell(dwellex as boolean | string)}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'center' }}>{cell(ea as boolean | string)}</td>
                        <td style={{ padding: '14px 20px', textAlign: 'center' }}>{cell(generic as boolean | string)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ background: '#fff', padding: '120px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '8px', padding: '6px 16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6366f1', marginBottom: '20px' }}>
                  Pricing
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.2, color: '#0f172a', marginBottom: '12px' }}>
                  Simple, transparent pricing
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
                  One plan. No per-seat fees. You only pay more as you grow.
                </p>
              </div>
            </SectionReveal>

            {/* Pricing Calculator */}
            <SectionReveal>
              <div style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))',
                border: '1px solid rgba(99,102,241,0.15)',
                borderRadius: '20px',
                padding: '40px 44px',
                marginBottom: '32px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <BarChart2 size={20} color="#6366f1" />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                    Estimate your monthly cost
                  </span>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <label style={{ fontSize: '0.9rem', color: '#475569', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                      Cases per month
                    </label>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: '#6366f1' }}>
                      {cases >= 1000 ? '1,000+' : cases}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={1050}
                    step={10}
                    value={cases}
                    onChange={(e) => setCases(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#6366f1', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '6px' }}>
                    <span>10 cases</span>
                    <span>1,000+ cases</span>
                  </div>
                </div>
                {cases >= 1000 ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))', border: '2px solid rgba(99,102,241,0.25)', borderRadius: '14px', padding: '32px 28px', flexWrap: 'wrap', gap: '24px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                        Enterprise — custom flat rate
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: '0 0 20px' }}>
                        1,000+ cases/month: all-inclusive, no per-case charges. Let&apos;s talk about your firm&apos;s volume.
                      </p>
                      <DemoButton style={{ padding: '12px 32px', fontSize: '0.92rem' }}>
                        Contact Us →
                      </DemoButton>
                    </div>
                  </div>
                ) : (() => {
                  const ratePerCase = cases <= 50 ? 8 : cases <= 150 ? 6.5 : cases <= 300 ? 5 : null
                  const tierName = cases <= 50 ? 'Starter' : cases <= 150 ? 'Growth' : cases <= 300 ? 'Scale' : 'Enterprise'
                  const tierColor = cases <= 50 ? '#6366f1' : cases <= 150 ? '#0ea5e9' : cases <= 300 ? '#10b981' : '#8b5cf6'
                  const totalCost = ratePerCase !== null ? 399 + cases * ratePerCase : null
                  return (
                    <div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                        <div style={{ background: '#fff', borderRadius: '14px', padding: '20px 24px', border: `2px solid ${tierColor}` }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: tierColor }}>
                              Dwellex
                            </div>
                            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700, background: `${tierColor}18`, color: tierColor, padding: '2px 8px', borderRadius: '6px' }}>{tierName}</span>
                          </div>
                          {totalCost !== null ? (
                            <>
                              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em' }}>
                                ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#94a3b8' }}>/mo</span>
                              </div>
                              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '6px' }}>
                                $399 flat + {cases} cases × ${ratePerCase}/case
                              </div>
                            </>
                          ) : (
                            <>
                              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#8b5cf6', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                                Custom flat rate
                              </div>
                              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                                All-inclusive — no per-case charges
                              </div>
                            </>
                          )}
                        </div>
                        <div style={{ background: '#fff', borderRadius: '14px', padding: '20px 24px', border: '1px solid #e2e8f0' }}>
                          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#94a3b8', marginBottom: '8px' }}>
                            Typical per-seat SaaS
                          </div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '-0.03em' }}>
                            ${(Math.ceil(cases / 10) * 89 + 299).toLocaleString()}
                            <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#cbd5e1' }}>/mo</span>
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '6px' }}>
                            Est. {Math.ceil(cases / 10)} users × ~$89/seat + base
                          </div>
                        </div>
                      </div>
                      {/* Tier progress */}
                      <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px 16px', fontSize: '0.8rem', color: '#64748b' }}>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                          {[
                            { label: 'Starter', range: '≤ 50', rate: '$8.00', active: cases <= 50 },
                            { label: 'Growth', range: '51–150', rate: '$6.50', active: cases > 50 && cases <= 150 },
                            { label: 'Scale', range: '151–300', rate: '$5.00', active: cases > 150 && cases <= 300 },
                            { label: 'Enterprise', range: '300+', rate: 'Custom', active: cases > 300 },
                          ].map(({ label, range, rate, active }) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: active ? 1 : 0.45 }}>
                              <span style={{ fontWeight: active ? 700 : 500, color: active ? '#0f172a' : '#94a3b8' }}>{label}</span>
                              <span style={{ color: '#cbd5e1' }}>·</span>
                              <span>{range} cases</span>
                              <span style={{ color: '#cbd5e1' }}>·</span>
                              <span style={{ fontWeight: 600, color: active ? '#6366f1' : '#94a3b8' }}>{rate}/case</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })()}
                {cases > 150 && cases <= 300 && (
                  <div style={{ marginTop: '12px', padding: '14px 18px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '10px', fontSize: '0.85rem', color: '#065f46' }}>
                    <strong>Scale tier</strong> — at 151–300 cases you drop to $5.00/case. Enterprise flat-rate available at 300+.
                  </div>
                )}
                {cases > 300 && cases < 1000 && (
                  <div style={{ marginTop: '12px', padding: '14px 18px', background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '10px', fontSize: '0.85rem', color: '#4c1d95' }}>
                    <strong>Enterprise tier</strong> — custom flat-rate, all-inclusive. Slide to 1,000+ to see the contact us option, or reach out now to discuss your volume.
                  </div>
                )}
              </div>
            </SectionReveal>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
              {/* Main pricing card */}
              <div style={{ background: '#fff', border: '2px solid #6366f1', borderRadius: '24px', padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6366f1', marginBottom: '20px' }}>Dwellex Platform</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em' }}>$399</span>
                  <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#6366f1' }}>+ $8</span>
                  <span style={{ fontSize: '0.9rem', color: '#64748b' }}>per case created</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '14px', marginBottom: '36px' }}>
                  {[
                    'Unlimited users — no per-seat fees',
                    'Full intake portal + form builder with conditional logic',
                    'Automated case timelines & templates',
                    'Trial Lists with Word doc export',
                    'Court document generation',
                    'Client portal with document upload',
                    'Clio, Practice Panther & Rent Manager sync',
                    'SMS + email notifications',
                    'Marshal & lockout coordination',
                    'Role-based access (admin, staff, client)',
                    'Analytics dashboard + per-case ledger',
                    'Ongoing support included',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: '#10b981', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '0.92rem', color: '#334155' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <DemoButton style={{ width: '100%', padding: '15px', fontSize: '0.95rem', textAlign: 'center' as const }}>
                  Request a Demo →
                </DemoButton>
              </div>

              {/* Add-ons / note card */}
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '32px 36px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Per-Case Volume Tiers</div>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0' }}>
                      {[
                        { tier: 'Starter', range: 'Up to 50 cases/mo', rate: '$8.00/case', color: '#6366f1' },
                        { tier: 'Growth', range: '51–150 cases/mo', rate: '$6.50/case', color: '#0ea5e9' },
                        { tier: 'Scale', range: '151–300 cases/mo', rate: '$5.00/case', color: '#10b981' },
                        { tier: 'Enterprise', range: '300+ cases/mo', rate: 'Custom flat rate', color: '#8b5cf6' },
                      ].map(({ tier, range, rate, color }, i) => (
                        <div key={tier} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700, background: `${color}18`, color, padding: '2px 8px', borderRadius: '6px', minWidth: '70px', textAlign: 'center' as const }}>{tier}</span>
                            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{range}</span>
                          </div>
                          <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0f172a' }}>{rate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '32px 36px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Implementation & Training</div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                      Scoped and priced per project. We handle data migration, workflow configuration, jurisdiction setup, and staff onboarding. Timeline and cost depend on your firm&apos;s existing systems and caseload.
                    </p>
                  </div>
                  <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '32px 36px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Custom Integrations</div>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                      Need a connection to your property management system, court filing portal, or other tooling? Custom integrations are available and scoped per engagement.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '20px', padding: '28px 32px' }}>
                    <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.75 }}>
                      <strong style={{ color: '#4f46e5' }}>300+ cases/month?</strong> Enterprise flat-rate pricing — all-inclusive, no per-case charges. Talk to us.
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <SectionReveal>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6366f1',
                marginBottom: '20px',
              }}>
                Integrations
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #0f172a 40%, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Seamless Integrations
                </span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 56px' }}>
                Dwellex connects with the tools you already use to manage your practice and properties.
              </p>
            </SectionReveal>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              {integrations.map(({ name, desc, logo }) => (
                <SectionReveal key={name}>
                  <div
                    style={{
                      background: '#fff',
                      padding: '40px 40px 32px',
                      borderRadius: '20px',
                      border: '1.5px solid #e2e8f0',
                      minWidth: '280px',
                      maxWidth: '300px',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(99,102,241,0.1)'
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#e2e8f0'
                    }}
                  >
                    <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <Image
                        src={logo}
                        alt={`${name} logo`}
                        width={280}
                        height={100}
                        style={{ objectFit: 'contain', maxHeight: '100px', width: 'auto' }}
                      />
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                      {desc}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — AIO + People Also Ask */}
        <FaqSection />

        {/* Closing CTA */}
        <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)', padding: '100px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '16px' }}>
                <span style={{ background: 'linear-gradient(135deg, #fff 30%, #a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Ready to scale your eviction practice?
                </span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
                See how Dwellex handles your caseload — from intake to lockout — in a live demo built around your firm&apos;s workflow.
              </p>
              <DemoButton style={{ padding: '18px 48px', fontSize: '1.05rem' }}>
                Request a Demo →
              </DemoButton>
            </SectionReveal>
          </div>
        </section>

        {/* Related Solutions */}
        <section style={{ background: '#fff', padding: '80px 40px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', textAlign: 'center', marginBottom: '32px' }}>
                Related Solutions
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { href: '/solutions/intake', label: 'Intelligent Intake', desc: 'Chatbots, webforms, and live transfer — the full intake flow for plaintiff firms.' },
                { href: '/solutions/waypoint', label: 'Waypoint AI Scoring', desc: 'Score every intake submission automatically before your team opens the file.' },
                { href: '/solutions/workers-comp', label: "Workers' Comp", desc: 'Intake automation purpose-built for workers\' compensation firms.' },
              ].map(({ href, label, desc }) => (
                <SectionReveal key={href}>
                  <Link href={href} style={{ display: 'block', padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', textDecoration: 'none' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#4f46e5', marginBottom: '8px' }}>{label} →</div>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      {/* Sticky CTA */}
      {showSticky && (
        <div style={{
          position: 'fixed',
          top: '16px',
          right: '24px',
          zIndex: 1000,
          animation: 'fadeInDown 0.25s ease',
        }}>
          <style>{`@keyframes fadeInDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }`}</style>
          <DemoButton style={{ padding: '10px 24px', fontSize: '0.88rem', boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}>
            Request a Demo →
          </DemoButton>
        </div>
      )}
    </>
  )
}
