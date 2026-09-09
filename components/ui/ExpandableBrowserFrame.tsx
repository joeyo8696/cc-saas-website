'use client'

import { useEffect, useId, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'
import BrowserFrame from './BrowserFrame'
import './browser-frame.css'

type ExpandableBrowserFrameProps = {
  src: string
  alt: string
  url: string
  footer?: ReactNode
  className?: string
}

export default function ExpandableBrowserFrame({
  src,
  alt,
  url,
  footer = 'View full-size product screen',
  className = '',
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
        aria-label="View full-size product screenshot"
      >
        <BrowserFrame url={url} footer={<>{footer} <span aria-hidden="true">↗</span></>}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" />
        </BrowserFrame>
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
                aria-label="Close full-size screenshot"
              >
                <X size={18} />
              </button>
            </div>
            <div className="cc-shot-lightbox-frame">
              <BrowserFrame url={url}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} />
              </BrowserFrame>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
