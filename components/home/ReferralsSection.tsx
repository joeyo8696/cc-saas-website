import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

const bullets = [
  'Dedicated referral partner portal with real-time case tracking',
  'Automated fee split management and reporting',
  'Full intake pipeline visibility from first referral to signed client',
]

export default function ReferralsSection() {
  return (
    <section
      id="referrals"
      style={{ background: '#f8fafc', padding: '96px 0', position: 'relative', zIndex: 2 }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

          {/* Left: screenshots */}
          <SectionReveal>
            <div style={{ position: 'relative', paddingBottom: '10%' }}>
              <Image
                src="/images/referrer-portal.png"
                alt="Referral partner portal"
                width={660}
                height={460}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 24px 64px rgba(0,0,0,0.15)', position: 'relative', zIndex: 2 }}
              />
              <Image
                src="/images/referrals-fees.png"
                alt="Referral fee management"
                width={400}
                height={280}
                style={{ width: '50%', height: 'auto', borderRadius: '10px', boxShadow: '0 16px 48px rgba(0,0,0,0.15)', position: 'absolute', bottom: 0, right: '-8%', zIndex: 3, border: '3px solid rgba(255,255,255,0.8)' }}
              />
            </div>
          </SectionReveal>

          {/* Right: copy */}
          <div>
            <SectionReveal>
              <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>
                Referral Network
              </span>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3vw, 2.4rem)', color: '#0f172a', lineHeight: 1.2, marginBottom: '20px' }}>
                Build your partner<br />network — and track<br />
                <em style={{ fontStyle: 'italic', color: '#4f46e5' }}>every single referral.</em>
              </h2>
            </SectionReveal>
            <SectionReveal delay={2}>
              <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '24px' }}>
                Give referring attorneys, co-counsel, and partners their own portal to submit and track clients. You control fee splits, visibility, and reporting — all in one place.
              </p>
            </SectionReveal>
            <SectionReveal delay={3}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                    <CheckCircle size={16} color="#4f46e5" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={4}>
              <DemoButton style={{ padding: '13px 28px', borderRadius: '8px', fontSize: '0.9rem' }}>
                See Referrals in Action →
              </DemoButton>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
