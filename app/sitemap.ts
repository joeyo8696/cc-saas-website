import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.casecompass.io'
const NOW = new Date('2026-04-04')

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
    // Compare hub and sub-pages
    {
      url: `${BASE_URL}/compare`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/compare/vs-chatbots`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/compare/vs-webforms`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/compare/vs-ai-intake-tools`,
      lastModified: NOW,
      changeFrequency: 'monthly',
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
