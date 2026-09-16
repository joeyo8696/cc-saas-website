import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.casecompass.io'
const BLOG_URL = 'https://blog.casecompass.io'

/** Prefer current date so Google sees an actively maintained sitemap after deploys. */
const NOW = new Date()

function entry(
  path: string,
  opts: { changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']; priority?: number; base?: string } = {},
): MetadataRoute.Sitemap[number] {
  const { changeFrequency = 'monthly', priority = 0.8, base = BASE_URL } = opts
  return {
    url: path.startsWith('http') ? path : `${base}${path}`,
    lastModified: NOW,
    changeFrequency,
    priority,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    entry('/', { changeFrequency: 'weekly', priority: 1 }),
    entry('/about', { changeFrequency: 'monthly', priority: 0.85 }),

    // Flagship products
    entry('/intakeos', { changeFrequency: 'weekly', priority: 0.98 }),
    entry('/intakeos/rebrand', { changeFrequency: 'monthly', priority: 0.85 }),
    entry('/torvana', { changeFrequency: 'weekly', priority: 0.98 }),
    entry('/dwellex', { changeFrequency: 'weekly', priority: 0.98 }),

    // Solutions
    entry('/solutions/waypoint', { changeFrequency: 'weekly', priority: 0.95 }),
    entry('/solutions/agent-platform', { changeFrequency: 'weekly', priority: 0.92 }),
    entry('/solutions/referrals', { changeFrequency: 'monthly', priority: 0.9 }),
    entry('/solutions/esign', { changeFrequency: 'monthly', priority: 0.9 }),
    entry('/solutions/mass-torts', { changeFrequency: 'monthly', priority: 0.9 }),
    entry('/solutions/workers-comp', { changeFrequency: 'monthly', priority: 0.85 }),

    // Integrations & connectors
    entry('/integrations', { changeFrequency: 'monthly', priority: 0.85 }),
    entry('/connectors/claude', { changeFrequency: 'monthly', priority: 0.75 }),

    // High-intent landing pages
    entry('/lp/mdl-intake', { changeFrequency: 'monthly', priority: 0.92 }),
    entry('/lp/social-media', { changeFrequency: 'monthly', priority: 0.88 }),
    entry('/lp/hair-relaxer', { changeFrequency: 'monthly', priority: 0.88 }),
    entry('/lp/roblox', { changeFrequency: 'monthly', priority: 0.82 }),

    // Trust / content
    entry('/security', { changeFrequency: 'monthly', priority: 0.7 }),
    entry('/changelog', { changeFrequency: 'weekly', priority: 0.55 }),
    entry('/privacy', { changeFrequency: 'yearly', priority: 0.35 }),

    // Blog (Cloudflare) — full post set for crawl discovery from the main property
    entry(`${BLOG_URL}/`, { changeFrequency: 'weekly', priority: 0.8 }),
    entry(`${BLOG_URL}/posts/legal-intake-software-guide.html`, { changeFrequency: 'monthly', priority: 0.9 }),
    entry(`${BLOG_URL}/posts/5-signs-your-law-firm-has-outgrown-its-contact-form.html`, {
      changeFrequency: 'monthly',
      priority: 0.85,
    }),
    entry(`${BLOG_URL}/posts/agent-workforce-platform-launch.html`, {
      changeFrequency: 'monthly',
      priority: 0.85,
    }),
    entry(`${BLOG_URL}/posts/referrals-and-waypoint-launch.html`, {
      changeFrequency: 'monthly',
      priority: 0.85,
    }),
    entry(`${BLOG_URL}/posts/building-a-referral-partner-program.html`, {
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
  ]
}
