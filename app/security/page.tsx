import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Server, Eye, Key, Globe, RefreshCw, ShieldCheck } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'

export const metadata: Metadata = {
  title: 'Security & Compliance',
  description: 'How Case Compass protects your law firm\'s data — Azure infrastructure, AES-256 encryption, role-based access controls, and AI data privacy.',
  alternates: {
    canonical: 'https://www.casecompass.io/security',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.casecompass.io/security',
    siteName: 'Case Compass',
    title: 'Security & Compliance | Case Compass',
    description: 'How Case Compass protects your law firm\'s data — Azure infrastructure, AES-256 encryption, role-based access controls, and AI data privacy.',
    images: [{ url: '/images/cc-logo-white.png', width: 1200, height: 630, alt: 'Case Compass Security & Compliance' }],
  },
}

const pillars = [
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    desc: 'Case Compass is hosted on Microsoft Azure, a SOC 2 Type II certified cloud provider. All data is stored in US-based data centers. Infrastructure is managed with least-privilege access controls.',
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    desc: 'All data in transit is encrypted using TLS 1.2+. Data at rest is encrypted using AES-256. Encryption keys are rotated on a regular schedule.',
  },
  {
    icon: Key,
    title: 'Authentication & Access',
    desc: 'Case Compass uses Azure Active Directory B2C for identity management. Multi-factor authentication is available. Role-based access controls restrict what each user can see and do.',
  },
  {
    icon: Eye,
    title: 'Audit Logging',
    desc: 'Every significant action in the platform is logged — lead access, intake submissions, user changes, and API calls. Logs are retained and available for compliance review.',
  },
  {
    icon: Globe,
    title: 'Microsoft Bot Framework',
    desc: 'All intake chatbot conversations are handled through Microsoft Bot Framework and Azure Cognitive Services — enterprise-grade infrastructure designed for sensitive workloads.',
  },
  {
    icon: RefreshCw,
    title: 'Automated Backups',
    desc: 'Case Compass data is backed up daily with point-in-time recovery. Backups are retained for 30 days and are encrypted at rest.',
  },
]

export default function SecurityPage() {
  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0d2b4e)', padding: '100px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '72px', height: '72px', borderRadius: '18px', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', marginBottom: '24px' }}>
              <ShieldCheck size={36} color="#fff" />
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Security at Case Compass
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Law firms trust us with sensitive client intake data. Here&apos;s how we protect it — from infrastructure to AI data handling.
            </p>
          </div>
        </section>

        {/* AI & BYOK section — most important for law firms */}
        <section style={{ background: '#fff', padding: '80px 40px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionReveal>
              <div style={{ background: 'linear-gradient(135deg, #f5f3ff, #eff6ff)', border: '1px solid #ddd6fe', borderRadius: '16px', padding: '48px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #4f46e5, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Key size={24} color="#fff" />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                      AI Data Privacy: BYOK Model
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.75, marginBottom: '16px' }}>
                      Waypoint, our AI intake scoring engine, uses a <strong>Bring Your Own Key (BYOK)</strong> model. When you configure Waypoint, you connect your own OpenAI API credentials. Your client intake data is sent directly to OpenAI under <em>your</em> account.
                    </p>
                    <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.75, marginBottom: '16px' }}>
                      This means:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '0' }}>
                      {[
                        'Your claimant data never flows through Case Compass AI infrastructure',
                        'Your data never trains a shared model or any third-party model',
                        'You maintain full audit rights and control over your OpenAI account',
                        'Data isolation is architectural — not just a policy',
                      ].map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#334155', lineHeight: 1.65 }}>
                          <Shield size={16} color="#4f46e5" style={{ flexShrink: 0, marginTop: '3px' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Security pillars */}
        <section style={{ background: '#f8fafc', padding: '80px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#0f172a', lineHeight: 1.2, textAlign: 'center', marginBottom: '56px' }}>
                Our security foundation
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {pillars.map(({ icon: Icon, title, desc }) => (
                <SectionReveal key={title}>
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '1px solid #e2e8f0', height: '100%' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon size={20} color="#4338ca" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', marginBottom: '16px' }}>
              Security questions?
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '32px' }}>
              We&apos;re happy to walk through our security posture with your IT team or compliance counsel.
            </p>
            <Link
              href="mailto:support@casecompass.io"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#4f46e5', color: '#fff', padding: '13px 28px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700 }}
            >
              Contact Us
            </Link>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
