// Landing pages use an isolated layout — no global nav/footer
// Each landing page is fully self-contained (matching existing Cloudflare behavior)
export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
