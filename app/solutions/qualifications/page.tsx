import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, PhoneForwarded, LayoutTemplate, Zap, CheckCircle } from 'lucide-react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import SectionReveal from '@/components/ui/SectionReveal'
import IconBox from '@/components/ui/IconBox'

export const metadata: Metadata = {
  title: 'Intelligent Intake — Qualify Every Lead, Automatically',
  description:
    'Case Compass automates client intake for plaintiff law firms — chatbots, webforms, live transfer, and e-signatures in a single seamless flow.',
}

const features = [
  { icon: MessageSquare, title: 'Conversational Intake Bots', desc: 'Deploy chatbots that engage visitors 24/7, walk them through a personalized intake, and capture the information your team needs — without a phone call.' },
  { icon: LayoutTemplate, title: 'Custom Webforms', desc: 'Build structured intake forms for any case type. Embed them on your website or landing pages. Every submission flows directly into Case Compass.' },
  { icon: PhoneForwarded, title: 'Live Transfer', desc: 'When a lead qualifies, connect them directly to your intake team in real time. No drop-off. No callback queue. Just a warm handoff at the peak of intent.' },
  { icon: Zap, title: 'Instant Scoring with Waypoint', desc: 'Every intake is automatically scored by Waypoint the moment it\'s submitted. Your team sees the score before they open the file.' },
  { icon: CheckCircle, title: 'E-Signatures in Flow', desc: 'Qualified leads receive their retainer agreement and can sign — all in the same intake session. Close cases while clients are still engaged.' },
  { icon: MessageSquare, title: 'SMS & Email Nurture', desc: 'Automate follow-up sequences for leads who didn\'t complete intake. Re-engage cold leads. Send appointment reminders. All on autopilot.' },
]

export default function QualificationsPage() {
  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #0d1f44)', padding: '100px 40px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: '20px' }}>
              Intelligent Intake
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: '24px' }}>
              Qualify every lead.<br /><em>Automatically.</em>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '40px' }}>
              Case Compass automates how plaintiff law firms capture, qualify, score, and convert prospects — from first website visit to signed retainer.
            </p>
            <Link
              href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}
            >
              Schedule a Demo →
            </Link>
          </div>
        </section>

        {/* Features */}
        <section style={{ background: '#fff', padding: '96px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {features.map(({ icon, title, desc }, i) => (
                <SectionReveal key={title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div style={{ padding: '28px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <IconBox icon={icon} size={20} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: '#f8fafc', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '56px' }}>
                Results our clients have seen
              </h2>
            </SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
              {[
                { stat: '90%', label: 'Chat-to-client conversion rate', source: "Workers' comp firm" },
                { stat: '70%', label: 'Reduction in acquisition costs', source: 'McCune Law Group' },
                { stat: '$1M+', label: 'New clients added per month', source: 'Stern & Cohen' },
              ].map(({ stat, label, source }) => (
                <SectionReveal key={stat}>
                  <div style={{ padding: '40px 24px', background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#4f46e5', marginBottom: '8px' }}>{stat}</div>
                    <div style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '6px', lineHeight: 1.5 }}>{label}</div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontStyle: 'italic' }}>{source}</div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '96px 40px', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              Start automating intake today
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
              We&apos;ll build your first intake bot, configure Waypoint for your practice area, and have you live in days.
            </p>
            <Link
              href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff', padding: '15px 36px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700 }}
            >
              Schedule a Demo →
            </Link>
          </SectionReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
