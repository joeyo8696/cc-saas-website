import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

export default function SocialMediaCallout() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #0c0a1e, #1a0533)', padding: '72px 0', position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <SectionReveal style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(236,72,153,0.15)', border: '1px solid rgba(249,168,212,0.3)', borderRadius: '99px', padding: '5px 14px', marginBottom: '16px', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#f9a8d4' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ec4899', boxShadow: '0 0 8px #ec4899', display: 'inline-block' }} />
              Verdict: March 2026 · MDL 3047
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
              Social Media Addiction Litigation:<br />First verdict in. Thousands of claims<br />need to move fast.
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              A Los Angeles jury found Meta and YouTube negligent in March 2026. MDL 3047 holds 10,000+ cases. Case Compass qualifies claimants against Meta, YouTube, TikTok, and Snap — with platform-specific evidence capture, AI scoring, and automated routing.
            </p>
          </SectionReveal>

          <SectionReveal delay={2}>
            <Link
              href="/lp/social-media"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #be185d, #ec4899)', color: '#fff', padding: '15px 32px', borderRadius: '8px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(236,72,153,0.35)', whiteSpace: 'nowrap', textDecoration: 'none' }}
            >
              See Social Media Toolkit →
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
