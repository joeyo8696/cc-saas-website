import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export default function CtaSection() {
  return (
    <section
      style={{ background: '#060d1f', padding: '120px 0', position: 'relative', zIndex: 2, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 40px' }}>
        <SectionReveal>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1.25, marginBottom: '20px' }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap', fontSize: '0.85em' }}>
              Your legal team&apos;s{' '}
              <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #818cf8, #4f46e5, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 18px rgba(99,102,241,0.7)) drop-shadow(0 0 40px rgba(139,92,246,0.4))',
              }}>true north.</em>
            </span>
            <span style={{ display: 'block' }}>Let&apos;s build it together.</span>
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
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
