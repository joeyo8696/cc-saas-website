import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

export default function MdlPortfolioSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #060d1f, #0d1f3c)',
        padding: '96px 0',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* subtle dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.1) 1px, transparent 0)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

          {/* Left: copy */}
          <SectionReveal style={{ flex: 1 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '99px', padding: '5px 14px', marginBottom: '20px', fontSize: '0.73rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#60a5fa' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6', display: 'inline-block' }} />
                New · MDL Portfolio Management
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', lineHeight: 1.25, marginBottom: '16px' }}>
                One dashboard per MDL.<br />Every lead. Every score. Every status.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '28px' }}>
                Group all leads tied to a specific litigation — by intake form, campaign, or both — into a named MDL Portfolio. Get a live view of AI score distribution, high-value counts, and status breakdowns. Export to CSV in one click, with AI scores included.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Score distribution across your entire caseload',
                  'AI-powered high-value lead identification',
                  'Jump to a filtered Inbox for any MDL',
                  'CSV export with Waypoint scores & intake responses',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/solutions/mass-torts"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)', color: '#fff', padding: '13px 28px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(59,130,246,0.3)', textDecoration: 'none' }}
              >
                See Mass Tort Features →
              </Link>
            </div>
          </SectionReveal>

          {/* Right: screenshot */}
          <SectionReveal delay={2}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Image
                src="/images/mdl-portfolio-stats.png"
                alt="MDL Portfolio Management dashboard — score distribution, status breakdown, AI scoring"
                width={600}
                height={480}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
