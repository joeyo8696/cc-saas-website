'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, LockKeyhole, Smartphone, CalendarDays, FileText } from 'lucide-react'
import SectionReveal from '@/components/ui/SectionReveal'

const pillars = [
  { icon: Smartphone, label: 'Mobile patient intake', detail: 'One-time passcode, health history, e-signatures — before they arrive.' },
  { icon: CalendarDays, label: 'Scheduling & recall', detail: 'Front desk confirms. Referring attorney sees it instantly.' },
  { icon: LockKeyhole, label: 'Attorney portal', detail: 'Every referring firm gets a real-time view of its own cases.' },
  { icon: FileText, label: 'Authorization & records', detail: 'HIPAA consent captured at intake. Records retrieved in 24–48 hrs.' },
]

export default function TorvanaSection() {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #0a0d1e 0%, #110e2e 50%, #0e1a35 100%)',
      padding: '96px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(80,76,226,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Top label */}
        <SectionReveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: '56px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(80,76,226,0.15)', border: '1px solid rgba(80,76,226,0.3)', borderRadius: '20px', padding: '6px 14px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a5a0f5' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7b77f0', display: 'inline-block' }} />
              Now Available — Healthcare Vertical
            </div>
            <Link href="/torvana" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              torvana.casecompass.io <ArrowUpRight size={13} />
            </Link>
          </div>
        </SectionReveal>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left copy */}
          <SectionReveal>
            <div>
              <Image
                src="/images/Torvana-Illustrator-Master.svg"
                alt="Torvana"
                width={200} height={48}
                unoptimized placeholder="empty"
                style={{ width: 'auto', height: '44px', filter: 'brightness(0) invert(1)', marginBottom: '28px' }}
              />
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}>
                The referral moves.<br />
                <em style={{ fontStyle: 'italic', color: '#a5a0f5' }}>Everyone knows.</em>
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '32px', maxWidth: '420px' }}>
                Torvana is Case Compass for specialty medical practices. Connected intake, scheduling, attorney portal and records automation — built for imaging centers, orthopedics, surgery centers and pain management.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                {['HIPAA-compliant workflows', 'Alongside your existing PACS, RIS or EHR', 'Real-time status for every referring firm'].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(80,76,226,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={11} color="#a5a0f5" />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
              <Link href="/torvana" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#504ce2', color: 'white',
                padding: '14px 26px', borderRadius: '8px',
                fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#3935b8'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#504ce2'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                Explore Torvana <ArrowUpRight size={16} />
              </Link>
            </div>
          </SectionReveal>

          {/* Right: feature pillars */}
          <SectionReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {pillars.map(({ icon: Icon, label, detail }) => (
                <div key={label} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: '12px',
                  padding: '22px 20px',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(80,76,226,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(80,76,226,0.3)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)' }}
                >
                  <div style={{ width: 34, height: 34, borderRadius: '9px', background: 'rgba(80,76,226,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <Icon size={16} color="#a5a0f5" />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '6px', lineHeight: 1.3 }}>{label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>{detail}</div>
                </div>
              ))}
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
