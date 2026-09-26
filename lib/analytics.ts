export type EventParams = Record<string, string | number | undefined>

const ATTRIBUTION_KEY = 'cc_attribution'
const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'source'] as const

type Gtag = (command: 'event', name: string, params?: EventParams) => void

function gtag(): Gtag | null {
  if (typeof window === 'undefined') return null
  const fn = (window as Window & { gtag?: Gtag }).gtag
  return typeof fn === 'function' ? fn : null
}

/** No-ops when GA4 has not loaded. */
export function trackEvent(name: string, params?: EventParams) {
  const fn = gtag()
  if (!fn) return
  const cleaned: EventParams = {}
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') cleaned[key] = value
    }
  }
  fn('event', name, cleaned)
}

export function captureAttribution() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const found: Record<string, string> = {}
  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key)
    if (value) found[key] = value
  }
  if (Object.keys(found).length === 0) return
  const existing = readAttribution()
  sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({ ...existing, ...found }))
}

export function readAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object') return {}
    const out: Record<string, string> = {}
    for (const key of ATTRIBUTION_PARAMS) {
      const value = (parsed as Record<string, unknown>)[key]
      if (typeof value === 'string' && value) out[key] = value
    }
    return out
  } catch {
    return {}
  }
}
