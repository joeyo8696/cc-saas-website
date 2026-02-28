import SectionReveal from '@/components/ui/SectionReveal'

const steps = [
  {
    num: '1',
    title: 'Intake Begins Automatically',
    desc: 'A visitor hits your website or landing page. Your Case Compass chatbot engages them instantly — day or night — walking them through a conversational intake that feels personal, not like a form.',
  },
  {
    num: '2',
    title: 'Waypoint Scores the Case',
    desc: "The moment intake is complete, Waypoint evaluates the submission against your criteria. Your team opens the lead and already knows the score, the case type, and whether it's worth pursuing.",
  },
  {
    num: '3',
    title: 'Sign & Convert in Minutes',
    desc: 'For qualified leads, Case Compass generates the retainer agreement and sends it for e-signature — all in the same flow. No chasing clients. No lost opportunities.',
  },
]

export default function HowItWorks() {
  return (
    <section
      style={{ background: '#fff', padding: '96px 0', position: 'relative', zIndex: 2 }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 56px' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>
              The Process
            </span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2 }}>
              From website visitor<br />to signed client — automated
            </h2>
          </SectionReveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
          {steps.map(({ num, title, desc }, i) => (
            <SectionReveal key={num} delay={((i + 1) as 1 | 2 | 3)}>
              <div
                className="step-card-hover"
                style={{ background: '#f8fafc', borderRadius: '16px', padding: '36px 32px' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>
                  {num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7 }}>{desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
