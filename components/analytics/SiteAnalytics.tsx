import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

/**
 * GA4, LinkedIn Insight, and Meta Pixel.
 * Each tag renders only when its public env var is set.
 */
export default function SiteAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      {linkedInId ? (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`_linkedin_partner_id=${JSON.stringify(linkedInId)};window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`}
        </Script>
      ) : null}
      {metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(metaPixelId)});fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  )
}
