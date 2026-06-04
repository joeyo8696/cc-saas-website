import type { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a live transfer inbox for law firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A live transfer inbox is a real-time agent workspace that shows every inbound call, chatbot conversation, and web form submission that has requested a live agent. Case Compass\'s live transfer inbox displays caller identity, wait time, intake form, and live transfer status so agents can respond in the right priority order — reducing average response time and preventing leads from dropping off.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Case Compass integrate with RingCentral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case Compass has a native RingCentral integration that connects your phone system directly to the agent dashboard. Agents can make and receive calls using a browser-based WebRTC softphone or through RingOut to their desk phone — no separate dialer app required. Every call is automatically logged, recorded, and attributed to the correct lead and marketing source.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are Agent SOPs and how do they help law firm intake teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agent SOPs (Standard Operating Procedures) in Case Compass are structured scripts and checklists that appear inside the agent\'s live transfer workspace. They can be Documents (talking points, scripts, compliance language) or interactive Checklists (step-by-step tasks with required fields). SOPs are assigned to specific intake forms so agents always see the right script for each practice area.',
      },
    },
    {
      '@type': 'Question',
      name: 'What metrics does the Speed-to-Lead Dashboard track?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Case Compass Speed-to-Lead Dashboard tracks average agent response time, percentage of leads responded to within your SLA window (e.g. under 5 minutes), missed leads, queue depth, response time distribution, and a per-agent leaderboard showing calls handled, average response time, SLA compliance rate, conversions, and conversion percentage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can agents schedule outbound callbacks from the dashboard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Case Compass Outbound Callback Queue lets supervisors or agents schedule callbacks for specific leads, assign them to individual agents, set a scheduled time, and add context notes. The queue displays current status (Pending, Attempted, Completed), wait time, and a one-click "Call now" action so agents can immediately dial from the dashboard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Case Compass record phone calls and create call summaries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When call recording is enabled through the RingCentral integration, every call is automatically recorded and the recording is attached to the lead\'s profile. Agents can add post-call summaries including disposition (spoke with client, no answer, follow-up needed), call notes, and a structured SOP checklist completion record. Recordings and summaries are accessible directly from the lead profile timeline.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.casecompass.io' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.casecompass.io/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Agent Platform', item: 'https://www.casecompass.io/solutions/agent-platform' },
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Case Compass Agent Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.casecompass.io/solutions/agent-platform',
  description: 'An integrated agent workforce platform for law firm intake teams — live transfer inbox, browser softphone, agent SOPs, speed-to-lead dashboards, outbound callback queues, and RingCentral telephony integration.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  featureList: [
    'Live transfer inbox with real-time queue management',
    'Browser-based WebRTC softphone via RingCentral',
    'Agent SOPs and compliance checklists',
    'Speed-to-lead dashboard and SLA tracking',
    'Outbound callback queue with agent assignment',
    'Automatic call recording and post-call summaries',
    'Inbound call attribution to marketing sources',
    'Agent leaderboard and performance analytics',
  ],
  provider: {
    '@type': 'Organization',
    name: 'Case Compass',
    url: 'https://www.casecompass.io',
  },
}

export const metadata: Metadata = {
  title: { absolute: 'Agent Workforce Platform for Law Firms | Case Compass' },
  description:
    'Case Compass gives intake agents a complete workforce platform — live transfer inbox, RingCentral browser softphone, agent SOPs, speed-to-lead dashboards, and outbound callback queues. Reduce response time. Convert more leads.',
  keywords: [
    'law firm agent platform',
    'legal intake live transfer software',
    'live transfer inbox law firm',
    'speed to lead dashboard legal',
    'agent SOP software law firm',
    'RingCentral law firm integration',
    'browser softphone legal intake',
    'outbound callback queue legal',
    'law firm call center software',
    'legal intake agent tools',
    'intake agent performance dashboard',
    'legal SLA tracking software',
    'plaintiff law firm call management',
    'intake agent live transfer',
    'law firm telephony software',
    'WebRTC softphone law firm',
    'legal intake workforce management',
    'call recording law firm intake',
    'post call summary software legal',
    'intake agent leaderboard',
  ],
  alternates: {
    canonical: 'https://www.casecompass.io/solutions/agent-platform',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/solutions/agent-platform',
    siteName: 'Case Compass',
    title: 'Agent Workforce Platform for Law Firms | Case Compass',
    description: 'Live transfer inbox, browser softphone, agent SOPs, speed-to-lead dashboards, and outbound callback queues — one platform for your entire intake team.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Agent Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Workforce Platform for Law Firms | Case Compass',
    description: 'Live transfer inbox, browser softphone, agent SOPs, and speed-to-lead dashboards — built for high-performance intake teams.',
  },
}

export default function AgentPlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      {children}
    </>
  )
}
