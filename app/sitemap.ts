import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.casecompass.io'
const NOW = new Date('2026-04-28')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Solution pages
    {
      url: `${BASE_URL}/solutions/intake`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/solutions/waypoint`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/solutions/referrals`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/esign`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/mass-torts`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions/workers-comp`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/solutions/dwellex`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Integrations hub
    {
      url: `${BASE_URL}/integrations`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Landing pages — tort-specific & MDL intake
    {
      url: `${BASE_URL}/lp/mdl-intake`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/lp/social-media`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/lp/hair-relaxer`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/lp/roblox`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    // Blog
    {
      url: 'https://blog.casecompass.io/posts/legal-intake-software-guide.html',
      lastModified: NOW,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://blog.casecompass.io/posts/5-signs-your-law-firm-has-outgrown-its-contact-form.html',
      lastModified: NOW,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    // Content
    {
      url: `${BASE_URL}/changelog`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/security`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: NOW,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
