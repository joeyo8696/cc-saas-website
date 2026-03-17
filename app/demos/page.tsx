'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Lock, Play, Eye, EyeOff } from 'lucide-react'
import GalaxyCanvas from '@/components/home/GalaxyCanvas'

const DEMO_PASSWORD = 'compass2026'
const SESSION_KEY = 'cc_demos_auth'

type VideoEntry = {
  type: 'loom' | 'youtube'
  id: string
  title: string
  desc: string
  thumbnail?: string
}

const videos: VideoEntry[] = [
  {
    type: 'loom',
    id: '904387ad1cc4474ebe77657c544125a7',
    title: 'Platform Overview',
    desc: 'A full walkthrough of the Case Compass platform — intake, scoring, referrals, and analytics.',
    thumbnail: 'https://cdn.loom.com/sessions/thumbnails/904387ad1cc4474ebe77657c544125a7-8647340805f89900-full-play.gif',
  },
  {
    type: 'loom',
    id: '59c56b7a4be040b491cc7e1232042db7',
    title: 'Intake Form Builder',
    desc: 'Build conversational intake bots and webforms with branching logic — no code required.',
    thumbnail: 'https://cdn.loom.com/sessions/thumbnails/59c56b7a4be040b491cc7e1232042db7-d64bb2e35ae0cc11-full-play.gif',
  },
  {
    type: 'loom',
    id: '6cd9c1b141584ba6b9e5d6814fa82f89',
    title: 'Waypoint AI Scoring',
    desc: 'See how Waypoint automatically qualifies and ranks every lead against your firm\'s criteria.',
  },
  {
    type: 'loom',
    id: '3be05f8d6c214daa80cd9476fc8f547c',
    title: 'Referral Management',
    desc: 'Track referral sources, manage fee agreements, and give partners their own portal.',
  },
]

function getEmbedUrl(video: VideoEntry) {
  if (video.type === 'loom') return `https://www.loom.com/embed/${video.id}`
  return `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`
}

function getThumbnailUrl(video: VideoEntry) {
  if (video.thumbnail) return video.thumbnail
  if (video.type === 'loom') return `https://cdn.loom.com/sessions/thumbnails/${video.id}-with-play.gif`
  return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
}

export default function DemosPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [shaking, setShaking] = useState(false)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === '1') setAuthed(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1')
      setAuthed(true)
      setError(false)
    } else {
      setError(true)
      setShaking(true)
      setTimeout(() => setShaking(false), 500)
      setPassword('')
    }
  }

  if (!authed) {
    return (
      <>
        <GalaxyCanvas />
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
          }
          .shake { animation: shake 0.4s ease; }
        `}</style>
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '40px', position: 'relative', zIndex: 1,
        }}>
          <div style={{
            background: 'rgba(6,13,31,0.85)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px',
            padding: '56px 48px', maxWidth: '440px', width: '100%',
            textAlign: 'center', boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
          }}>
            <Image
              src="/images/cc-logo-white.png"
              alt="Case Compass"
              width={160} height={26}
              style={{ height: '26px', width: 'auto', margin: '0 auto 36px', display: 'block' }}
            />

            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 8px 24px rgba(79,70,229,0.4)',
            }}>
              <Lock size={24} color="#fff" />
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: '1.8rem',
              color: '#fff', marginBottom: '12px', lineHeight: 1.2,
            }}>
              Client Demo Library
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: '36px' }}>
              Enter the password provided by your Case Compass representative to access these materials.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={shaking ? 'shake' : ''} style={{ position: 'relative', marginBottom: '16px' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false) }}
                  placeholder="Enter password"
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '14px 48px 14px 18px',
                    background: 'rgba(255,255,255,0.07)',
                    border: `1px solid ${error ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.12)'}`,
                    borderRadius: '10px',
                    fontSize: '1rem',
                    color: '#fff',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => { if (!error) e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)' }}
                  onBlur={(e) => { if (!error) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {error && (
                <p style={{ fontSize: '0.82rem', color: '#f87171', marginBottom: '12px', textAlign: 'left' }}>
                  Incorrect password. Please try again.
                </p>
              )}

              <button
                type="submit"
                style={{
                  width: '100%', padding: '14px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: '#fff', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem',
                  boxShadow: '0 8px 24px rgba(79,70,229,0.35)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(79,70,229,0.5)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(79,70,229,0.35)' }}
              >
                Access Demo Library →
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <GalaxyCanvas />
      <style>{`
        .video-card:hover .play-overlay { opacity: 1 !important; }
        .video-card:hover { transform: translateY(-4px) !important; box-shadow: 0 20px 48px rgba(0,0,0,0.5) !important; }
        .video-modal-backdrop { animation: fade-in 0.2s ease; }
        @keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modal-in { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header style={{
          padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(6,13,31,0.7)', backdropFilter: 'blur(12px)',
          position: 'sticky', top: 0, zIndex: 10,
        }}>
          <Image
            src="/images/cc-logo-white.png"
            alt="Case Compass"
            width={140} height={23}
            style={{ height: '23px', width: 'auto', display: 'block' }}
          />
          <div style={{
            fontSize: '0.78rem', fontFamily: 'var(--font-display)', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Client Demo Library
          </div>
          <button
            onClick={() => { sessionStorage.removeItem(SESSION_KEY); setAuthed(false) }}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px', padding: '8px 16px', cursor: 'pointer',
              fontSize: '0.8rem', fontFamily: 'var(--font-display)', fontWeight: 600,
              color: 'rgba(255,255,255,0.5)', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            Sign out
          </button>
        </header>

        {/* Hero */}
        <div style={{ padding: '72px 48px 48px', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '100px', padding: '6px 20px',
            fontSize: '0.78rem', fontFamily: 'var(--font-display)', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(165,180,252,0.9)',
            marginBottom: '24px',
          }}>
            Confidential
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#fff', lineHeight: 1.2, marginBottom: '16px',
          }}>
            Welcome to the{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              <span style={{
                background: 'linear-gradient(135deg, #818cf8, #4f46e5, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Case Compass</span>{' '}Demo Library
            </span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
            These videos are shared exclusively for your evaluation. Please don&apos;t distribute outside your team.
          </p>
        </div>

        {/* Video grid */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px 100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {videos.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => setActiveVideo(video.id)}
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px', overflow: 'hidden', cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#0d1a2e' }}>
                  <img
                    src={getThumbnailUrl(video)}
                    alt={video.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                  {/* Play overlay */}
                  <div className="play-overlay" style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: 0, transition: 'opacity 0.2s',
                  }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 8px 32px rgba(79,70,229,0.6)',
                    }}>
                      <Play size={22} color="#fff" fill="#fff" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700,
                    color: '#fff', marginBottom: '8px',
                  }}>
                    {video.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: '960px',
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
              animation: 'modal-in 0.25s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#000' }}>
              {(() => {
                const v = videos.find(v => v.id === activeVideo)
                if (!v) return null
                return (
                  <iframe
                    src={getEmbedUrl(v)}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
