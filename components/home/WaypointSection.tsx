import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'
import DemoButton from '@/components/DemoButton'

export default function WaypointSection() {
  const criteria = [
    'Custom criteria per practice area — mass tort, workers comp, personal injury, and more',
    'Scores on case value, liability, evidence quality, urgency, and red flags',
    'Consistent, documented evaluation on every claimant — no variance between intake staff',
    'Works with your BYOK OpenAI key — your data never trains a shared model',
  ]

  return (
    <section
      id="waypoint"
      style={{ background: '#060d1f', padding: '96px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div className="split-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

          {/* Left: copy */}
          <div>
            <SectionReveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(196,181,253,0.25)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c4b5fd', marginBottom: '20px' }}>
                ★ Waypoint
              </div>
            </SectionReveal>
            <SectionReveal delay={1}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3vw, 2.4rem)', color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
                AI scoring that tells you <em>which cases to take</em>
              </h2>
            </SectionReveal>
            <SectionReveal delay={2}>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '28px' }}>
                Stop relying on gut instinct to prioritize your pipeline. Waypoint evaluates every submitted intake against a fully customizable scoring rubric — and surfaces a score before your team opens the file.
              </p>
            </SectionReveal>
            <SectionReveal delay={3}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                {criteria.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                    <span style={{ color: '#818cf8', marginTop: '2px', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={4}>
              <DemoButton style={{ padding: '13px 28px', fontSize: '0.9rem' }}>
                See Waypoint in Action →
              </DemoButton>
            </SectionReveal>
          </div>

          {/* Right: screenshots */}
          <SectionReveal delay={2}>
            <div style={{ position: 'relative', paddingBottom: '10%' }}>
              <Image
                src="/images/waypoint-criteria-list.png"
                alt="Waypoint criteria list"
                width={660}
                height={460}
                style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 24px 64px rgba(0,0,0,0.5)', position: 'relative', zIndex: 2 }}
              />
              <Image
                src="/images/waypoint-criteria-edit.png"
                alt="Waypoint criterion editor"
                width={400}
                height={280}
                style={{ width: '50%', height: 'auto', borderRadius: '10px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)', position: 'absolute', bottom: 0, right: '-8%', zIndex: 3, border: '3px solid rgba(255,255,255,0.1)' }}
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
