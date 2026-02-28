import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import { FeaturedPostCard, PostCard } from '@/components/blog/BlogCard'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Product updates, legal intake strategies, and insights from the Case Compass team.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main style={{ background: '#fff', minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #060d1f, #1e1b4b)', padding: '80px 40px 64px', textAlign: 'center' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: '16px' }}>
              Case Compass Blog
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff', lineHeight: 1.2, marginBottom: '16px' }}>
              Product updates & insights
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
              Strategies, feature releases, and legal intake intelligence from the Case Compass team.
            </p>
          </div>
        </div>

        {/* New features banner */}
        <div style={{ background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)', borderBottom: '1px solid #dbeafe', padding: '20px 40px' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', borderRadius: '99px', padding: '3px 12px', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>NEW</div>
            <p style={{ fontSize: '0.9rem', color: '#1e3a5f', fontWeight: 500 }}>Waypoint AI scoring and Referral Network are now live.</p>
            <Link href="/blog/referrals-waypoint-launch" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#4f46e5', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Read the launch post →
            </Link>
          </div>
        </div>

        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '64px 40px' }}>
          {featured && <FeaturedPostCard post={featured} />}

          {rest.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <p style={{ textAlign: 'center', color: '#94a3b8', padding: '80px 0' }}>No posts yet. Check back soon.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
