'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'

const products = [
  {
    id: 'intakeos',
    logoSrc: '/images/cc-logo-white.png',
    logoAlt: 'IntakeOS by Case Compass',
    logoWidth: 240,
    logoHeight: 48,
    logoBg: 'linear-gradient(135deg, #1e3a6e, #4f46e5)',
    logoFilter: 'none',
    accentBar: 'linear-gradient(90deg, #4f46e5, #818cf8)',
    eyebrow: 'Plaintiff Law — Mass Torts · Mass Arb · PI',
    eyebrowColor: '#4f46e5',
    tagline: 'Intake, qualify, and convert every plaintiff client — before your team opens the file.',
    bullets: [
      'Conversational intake bots',
      'Waypoint AI case scoring',
      'Retainer e-signatures',
    ],
    checkColor: '#4f46e5',
    ctaLabel: 'Explore IntakeOS →',
    ctaHref: '/#features',
    ctaColor: '#4f46e5',
  },
  {
    id: 'torvana',
    logoSrc: '/images/Torvana-Illustrator-Master.svg',
    logoAlt: 'Torvana',
    logoWidth: 260,
    logoHeight: 64,
    logoBg: 'linear-gradient(135deg, #f3e8ff, #ede9fe)',
    logoFilter: 'none',
    accentBar: 'linear-gradient(90deg, #7c3aed, #4f46e5)',
    eyebrow: 'Specialty Medical · Healthcare',
    eyebrowColor: '#7c3aed',
    tagline: 'Patient intake, HIPAA authorization, and record retrieval — built around PI attorney referrals.',
    bullets: [
      'Branded digital patient intake',
      'Referring attorney portal',
      'Automated record retrieval',
    ],
    checkColor: '#7c3aed',
    ctaLabel: 'Explore Torvana →',
    ctaHref: '/torvana',
    ctaColor: '#7c3aed',
  },
  {
    id: 'dwellex',
    logoSrc: '/images/dwellex_logo_white.png',
    logoAlt: 'Dwellex',
    logoWidth: 260,
    logoHeight: 64,
    logoBg: 'linear-gradient(135deg, #1e293b, #334155)',
    logoFilter: 'none',
    accentBar: 'linear-gradient(90deg, #0f172a, #334155)',
    eyebrow: 'Landlord-Tenant Law',
    eyebrowColor: '#334155',
    bullets: [
      'Tenant intake & screening',
      'Court date & notice management',
      'Batch document generation',
    ],
    tagline: 'From tenant intake to court management — every landlord-tenant case, handled end to end.',
    checkColor: '#334155',
    ctaLabel: 'Explore Dwellex →',
    ctaHref: '/dwellex',
    ctaColor: '#334155',
  },
]

export default function ProductSuite() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '100px 0 96px',
        backgroundImage: 'radial-gradient(circle, rgba(79,70,229,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        backgroundColor: '#fafafa',
        zIndex: 2,
      }}
    >
      {/* Gradient fade from dark hero above */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, #060d1f, transparent)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 2 }}>

        {/* Section header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 64px' }}>
          <SectionReveal>
            <span style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#4f46e5',
              marginBottom: '12px',
            }}>
              Three Platforms. One Infrastructure.
            </span>
          </SectionReveal>
          <SectionReveal delay={1}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
              color: '#0f172a',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}>
              Built on intake.{' '}
              <em style={{ fontStyle: 'italic', color: '#4f46e5' }}>Built for your practice.</em>
            </h2>
          </SectionReveal>
          <SectionReveal delay={2}>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.7 }}>
              Whether you run a plaintiff firm, a specialty medical practice, or a landlord-tenant law office — Case Compass has a platform purpose-built for your intake workflow.
            </p>
          </SectionReveal>
        </div>

        {/* Product cards */}
        <div
          className="product-suite-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
        >
          {products.map((product, i) => (
            <SectionReveal key={product.id} delay={(i + 1) as 1 | 2 | 3}>
              <div className="product-card" style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Accent bar */}
                <div style={{ height: '4px', background: product.accentBar }} />

                <div style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Logo */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: product.logoBg,
                    borderRadius: '12px',
                    padding: '14px 24px',
                    marginBottom: '20px',
                    alignSelf: 'flex-start',
                  }}>
                    <Image
                      src={product.logoSrc}
                      alt={product.logoAlt}
                      width={product.logoWidth}
                      height={product.logoHeight}
                      unoptimized
                      style={{
                        height: '44px',
                        width: 'auto',
                        display: 'block',
                        filter: product.logoFilter === 'none' ? undefined : product.logoFilter,
                      }}
                    />
                  </div>

                  {/* Eyebrow */}
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: product.eyebrowColor,
                    marginBottom: '12px',
                    display: 'block',
                  }}>
                    {product.eyebrow}
                  </span>

                  {/* Tagline */}
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: '#0f172a',
                    lineHeight: 1.55,
                    marginBottom: '24px',
                  }}>
                    {product.tagline}
                  </p>

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px', flex: 1 }}>
                    {product.bullets.map((bullet) => (
                      <li key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#374151', lineHeight: 1.5 }}>
                        <Check size={14} color={product.checkColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={product.ctaHref}
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: product.ctaColor,
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {product.ctaLabel}
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        @media (max-width: 860px) {
          .product-suite-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
