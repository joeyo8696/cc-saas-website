import {
  Megaphone, Database, Zap, BarChart3, FileSignature,
  GitBranch, Mail, UserCircle, TrendingUp, Plug,
  LayoutTemplate, ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import IconBox from '@/components/ui/IconBox'

const features = [
  { icon: Zap, label: 'Live Transfer', desc: 'Hot leads connected directly to your intake team the moment they qualify — no drop-off, no delay.' },
  { icon: BarChart3, label: 'Enterprise Analytics', desc: 'Full-funnel visibility from first touch to signed retainer. Track conversion rates, source quality, and team performance.' },
  { icon: FileSignature, label: 'E-Signatures', desc: 'Generate retainers and collect e-signatures in the same intake flow. Close clients without the back-and-forth.' },
  { icon: GitBranch, label: 'Timeline Automation', desc: 'Build automated post-intake workflows — follow-up sequences, status triggers, and document delivery on autopilot.' },
  { icon: Mail, label: 'SMS & Email Campaigns', desc: 'Automated outreach sequences built directly into your intake pipeline. Re-engage cold leads, send reminders, confirm appointments.' },
  { icon: UserCircle, label: 'Client Portal', desc: 'Give clients a self-service portal to track their case status, upload documents, and complete outstanding tasks — reducing inbound calls.' },
  { icon: TrendingUp, label: 'Marketing Attribution', desc: 'Know exactly which campaigns, channels, and sources are producing your best cases — not just leads. Optimize spend with conviction.' },
  { icon: Plug, label: 'Native Integrations', desc: 'Filevine, LeadDocket, Litify — and more. No rip and replace. Case Compass plugs into the tools your team already uses.' },
  { icon: LayoutTemplate, label: 'Intake Form Builder', desc: 'Build conversational intake bots and webforms tailored to any case type — personal injury, mass tort, workers comp, and more. No code required.' },
]

export default function PlatformOS() {
  return (
    <section
      id="features"
      style={{ background: '#fff', padding: '100px 0', position: 'relative', zIndex: 2, overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 64px' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>
              The Full Platform
            </span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
              Your firm&apos;s Intake OS —<br />
              <em style={{ fontStyle: 'italic', color: '#4f46e5' }}>between marketing and your CRM.</em>
            </h2>
          </SectionReveal>
          <SectionReveal delay={2}>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7 }}>
              Case Compass isn&apos;t a replacement for your existing stack. It&apos;s the intelligent layer that sits between your marketing and your case management — capturing, qualifying, and converting every lead before it ever reaches your team.
            </p>
          </SectionReveal>
        </div>

        {/* Pipeline diagram */}
        <SectionReveal delay={2}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: '72px', flexWrap: 'wrap' }}>

            {/* Marketing */}
            <PipelineCard>
              <Megaphone size={40} color="#94a3b8" style={{ margin: '0 auto 16px', display: 'block' }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Marketing</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '8px' }}>Ads · SEO · Referrals</div>
            </PipelineCard>

            {/* Arrow 1 */}
            <PipelineArrow />

            {/* Case Compass (center) */}
            <div style={{ textAlign: 'center', padding: '44px 56px', background: 'linear-gradient(135deg,#1e3a6e,#4f46e5)', borderRadius: '20px', minWidth: '240px', boxShadow: '0 8px 32px rgba(79,70,229,0.35)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#4f46e5', border: '2px solid #fff', borderRadius: '99px', padding: '4px 16px', fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                Your Intake OS
              </div>
              <Image src="/images/cc-logo-white.png" alt="Case Compass" width={130} height={26} style={{ height: '26px', width: 'auto', display: 'block', margin: '8px auto 14px' }} />
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>Intake · Qualify · Score<br />Convert · Track · Close</div>
            </div>

            {/* Arrow 2 */}
            <PipelineArrow delay />

            {/* Case Management */}
            <PipelineCard>
              <Database size={40} color="#94a3b8" style={{ margin: '0 auto 16px', display: 'block' }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Case Management</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '8px' }}>Filevine · LeadDocket · Litify</div>
            </PipelineCard>
          </div>
        </SectionReveal>

        {/* Feature grid */}
        <div className="feature-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {features.map(({ icon, label, desc }, i) => (
            <SectionReveal key={label} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <FeatureCard icon={icon} label={label} desc={desc} />
            </SectionReveal>
          ))}
        </div>

        {/* No rip-and-replace callout */}
        <SectionReveal>
          <div style={{ marginTop: '48px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <ShieldCheck size={32} color="#4f46e5" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', marginBottom: '4px' }}>No rip and replace. Ever.</p>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>
                Case Compass is designed to enhance your existing stack — not replace it. We integrate with Filevine, LeadDocket, Litify, and your existing CRM on day one. Your team keeps working the way they work. You just close more.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function PipelineCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ textAlign: 'center', padding: '44px 52px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '20px', minWidth: '210px' }}>
      {children}
    </div>
  )
}

function PipelineArrow({ delay }: { delay?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '0 8px', flexShrink: 0 }}>
      {/* Track — overflow:hidden clips the spark to the arrow bounds */}
      <div style={{ position: 'relative', width: '72px', height: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', height: '2px', background: '#e2e8f0', borderRadius: '2px', position: 'relative' }}>
          <div className={`pipeline-spark${delay ? ' delay' : ''}`} />
        </div>
      </div>
      {/* Arrow tip sits outside the clipped track so it isn't cut off */}
      <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid #e2e8f0', flexShrink: 0 }} />
    </div>
  )
}

function FeatureCard({
  icon: Icon,
  label,
  desc,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>
  label: string
  desc: string
}) {
  return (
    <div className="card-hover" style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <IconBox icon={Icon as Parameters<typeof IconBox>[0]['icon']} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>{label}</span>
      </div>
      <p style={{ fontSize: '0.83rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>{desc}</p>
    </div>
  )
}
