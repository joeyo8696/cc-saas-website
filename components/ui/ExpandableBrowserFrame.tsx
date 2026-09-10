'use client'

import { useEffect, useId, useState } from 'react'
import { Search, X } from 'lucide-react'
import BrowserFrame from './BrowserFrame'
import './browser-frame.css'

type ExpandableBrowserFrameProps = {
  src: string
  alt: string
  url: string
  className?: string
  /** When true, the image already includes browser chrome — skip nested frame */
  framed?: boolean
}

export default function ExpandableBrowserFrame({
  src,
  alt,
  url,
  className = '',
  framed = true,
}: ExpandableBrowserFrameProps) {
  const [open, setOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className={`cc-browser-link${className ? ` ${className}` : ''}`}
        onClick={() => setOpen(true)}
        aria-label={`Enlarge screenshot: ${alt}`}
      >
        <span className="cc-browser-zoom">
          {framed ? (
            <BrowserFrame url={url}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} loading="lazy" />
            </BrowserFrame>
          ) : (
            <span className="cc-shot-bare">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} loading="lazy" />
            </span>
          )}
          <span className="cc-browser-zoom-badge" aria-hidden="true">
            <Search size={22} strokeWidth={2.25} />
          </span>
        </span>
      </button>

      {open && (
        <div
          className="cc-shot-lightbox"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className="cc-shot-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cc-shot-lightbox-bar">
              <p id={titleId} className="cc-shot-lightbox-title">{alt}</p>
              <button
                type="button"
                className="cc-shot-lightbox-close"
                onClick={() => setOpen(false)}
                aria-label="Close screenshot"
              >
                <X size={18} />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="cc-shot-lightbox-img" src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  )
}
