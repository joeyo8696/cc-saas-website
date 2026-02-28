import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getPost } from '@/lib/blog'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main style={{ background: '#fff', minHeight: '100vh' }}>

        {/* Hero */}
        <div
          style={{
            background: 'linear-gradient(135deg, #060d1f, #1e1b4b)',
            padding: '80px 40px 64px',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Link href="/blog" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-display)' }}>
                ← Blog
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', color: '#4338ca', padding: '2px 10px', borderRadius: '99px' }}>
                {post.category}
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: '#fff',
                lineHeight: 1.25,
                marginBottom: '20px',
              }}
            >
              {post.title}
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '28px' }}>
              {post.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-display)' }}>
                {post.author}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Featured image */}
        {post.image && (
          <div style={{ maxWidth: '900px', margin: '-32px auto 0', padding: '0 40px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.2)', position: 'relative', aspectRatio: '16/9' }}>
              <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {/* Article body */}
        <article
          style={{ maxWidth: '800px', margin: '64px auto', padding: '0 40px 80px' }}
          className="prose-blog"
        >
          <MDXRemote
            source={post.content}
            components={{
              img: ({ src, alt }) => (
                src ? (
                  <div style={{ margin: '32px 0', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
                    <Image src={src} alt={alt ?? ''} width={800} height={500} style={{ width: '100%', height: 'auto' }} />
                  </div>
                ) : null
              ),
            }}
          />
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px 64px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '99px', padding: '4px 12px', fontSize: '0.78rem', color: '#64748b' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Prose styles */}
      <style>{`
        .prose-blog h2 { font-family: var(--font-serif); font-size: clamp(1.4rem, 3vw, 2rem); color: #0f172a; line-height: 1.3; margin: 48px 0 16px; }
        .prose-blog h3 { font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 32px 0 12px; }
        .prose-blog p { font-size: 1rem; color: #334155; line-height: 1.8; margin-bottom: 20px; }
        .prose-blog ul, .prose-blog ol { padding-left: 24px; margin-bottom: 20px; }
        .prose-blog li { font-size: 1rem; color: #334155; line-height: 1.75; margin-bottom: 8px; }
        .prose-blog strong { color: #0f172a; font-weight: 700; }
        .prose-blog a { color: #4f46e5; text-decoration: underline; text-underline-offset: 3px; }
        .prose-blog hr { border: none; border-top: 1px solid #e2e8f0; margin: 48px 0; }
        .prose-blog blockquote { border-left: 3px solid #4f46e5; padding-left: 20px; margin: 24px 0; font-style: italic; color: #64748b; }
        .prose-blog code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; color: #4f46e5; }
      `}</style>
      <Footer />
    </>
  )
}
