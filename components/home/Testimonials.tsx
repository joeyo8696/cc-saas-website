import SectionReveal from '@/components/ui/SectionReveal'

const testimonials = [
  {
    stat: '+70%',
    statLabel: 'Reduction in acquisition costs',
    quote: '"The best quality cases have consistently come from Case Compass chat every month. The program has been outstanding."',
    firm: 'McCune Law Group',
    title: 'Nationwide litigation practice',
  },
  {
    stat: '+25%',
    statLabel: 'Of new clients sourced by Case Compass',
    quote: '"Chat became our #1 highest converting intake channel. Case Compass is now the frontline of everything we do for client intake."',
    firm: 'Stern & Cohen',
    title: "High-volume workers' comp firm",
  },
  {
    stat: '900x',
    statLabel: 'Return on investment',
    quote: '"The perfect way to get engagement from content. Why make content if no one engages with it? Case Compass turned our visitors into clients."',
    firm: 'RDK Legal',
    title: 'Family & divorce law practice',
  },
]

export default function Testimonials() {
  return (
    <section
      style={{ background: '#f8fafc', padding: '96px 0', position: 'relative', zIndex: 2 }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 56px' }}>
          <SectionReveal>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '12px' }}>
              Client Stories
            </span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#0f172a', lineHeight: 1.2 }}>
              Firms that moved fast,<br />grew fast
            </h2>
          </SectionReveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
          {testimonials.map(({ stat, statLabel, quote, firm, title }, i) => (
            <SectionReveal key={firm} delay={((i + 1) as 1 | 2 | 3)}>
              <div
                style={{ background: '#fff', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: '#4f46e5', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                  {stat}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '24px', fontWeight: 500 }}>
                  {statLabel}
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.7, flex: 1, marginBottom: '24px', fontStyle: 'italic' }}>
                  {quote}
                </p>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>{firm}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{title}</div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
