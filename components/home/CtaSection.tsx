import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export default function CtaSection() {
  return (
    <section
      style={{ background: '#060d1f', padding: '120px 0', position: 'relative', zIndex: 2, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 40px' }}>
        <SectionReveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
            Your legal team&apos;s <em>true north.</em><br />Let&apos;s build it together.
          </h2>
        </SectionReveal>
        <SectionReveal delay={1}>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '40px' }}>
            From your first intake bot to a fully automated referral and scoring pipeline — we set you up, train your team, and stay in your corner.
          </p>
        </SectionReveal>
        <SectionReveal delay={2}>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <DemoButton style={{ padding: '16px 40px', fontSize: '1rem' }}>
              Schedule a Demo →
            </DemoButton>
            <Link
              href="/lp/ieepa"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', padding: '16px 40px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600 }}
            >
              IEEPA Intake Toolkit
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
