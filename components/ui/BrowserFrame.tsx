'use client'

import type { ReactNode } from 'react'
import './browser-frame.css'

type BrowserFrameProps = {
  url: string
  children: ReactNode
  className?: string
  footer?: ReactNode
}

export default function BrowserFrame({ url, children, className = '', footer }: BrowserFrameProps) {
  return (
    <div className={`cc-browser${className ? ` ${className}` : ''}`}>
      <div className="cc-browser-bar">
        <div className="cc-browser-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="cc-browser-url">
          <span className="cc-browser-url-dot" aria-hidden="true" />
          <span className="cc-browser-url-text">{url}</span>
        </div>
      </div>
      <div className="cc-browser-body">{children}</div>
      {footer ? <div className="cc-browser-footer">{footer}</div> : null}
    </div>
  )
}
