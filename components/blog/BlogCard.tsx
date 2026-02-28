'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

type Post = ReturnType<typeof getAllPosts>[number]

export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', marginBottom: '64px' }}>
      <div
        className="blog-card-hover"
        style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: post.image ? '1fr 1fr' : '1fr' }}
      >
        {post.image && (
          <div style={{ position: 'relative', minHeight: '300px', background: '#f8fafc' }}>
            <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
          </div>
        )}
        <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', color: '#4338ca', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '99px' }}>
              {post.category}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#0f172a', lineHeight: 1.3, marginBottom: '16px' }}>
            {post.title}
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7 }}>{post.description}</p>
          <span style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#4f46e5' }}>
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <div className="blog-card-hover" style={{ borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', background: '#fff', height: '100%' }}>
        {post.image && (
          <div style={{ position: 'relative', height: '180px', background: '#f8fafc' }}>
            <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
          </div>
        )}
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <span style={{ background: 'linear-gradient(135deg, #ede9fe, #dbeafe)', color: '#4338ca', fontSize: '0.7rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '99px' }}>
              {post.category}
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4, marginBottom: '10px' }}>
            {post.title}
          </h3>
          <p style={{ fontSize: '0.83rem', color: '#64748b', lineHeight: 1.65, marginBottom: '16px' }}>{post.description}</p>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    </Link>
  )
}
