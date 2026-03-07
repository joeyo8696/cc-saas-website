import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

export default function Testimonials() {
  return (
    <section style={{ background: '#f8fafc', padding: '96px 0', position: 'relative', zIndex: 2 }}>
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

        <SectionReveal>
          <div style={{ maxWidth: '860px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', border: '1px solid #e2e8f0', background: '#fff' }}>
            <Link href="https://mccunewright.com/" target="_blank" rel="noopener" style={{ display: 'block' }}>
              <Image
                src="https://pub-1df858d7ebe84a6ab2a2a110462ab2b3.r2.dev/assets/case-study-mccune.png"
                alt="McCune Law Group — 68% increase in conversions with Case Compass"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </Link>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
