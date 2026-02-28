'use client'

import { useEffect, useRef } from 'react'

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    const mouse = { x: 0.5, y: 0.5 }
    const STAR_COUNT = 280
    const stars: {
      x: number; y: number; r: number; speed: number; layer: number
      twinkle: number; twinkleSpeed: number; color: string; ox: number; oy: number
    }[] = []

    function rand(a: number, b: number) { return Math.random() * (b - a) + a }

    function initCanvas() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
    }

    function initStars() {
      stars.length = 0
      for (let i = 0; i < STAR_COUNT; i++) {
        const s = {
          x: rand(0, W), y: rand(0, H),
          r: rand(0.3, 1.8),
          speed: rand(0.01, 0.04),
          layer: Math.floor(rand(0, 3)),
          twinkle: rand(0, Math.PI * 2),
          twinkleSpeed: rand(0.005, 0.025),
          color: Math.random() < 0.12
            ? `hsl(${rand(240, 280)}, 80%, 85%)`
            : Math.random() < 0.06
              ? `hsl(${rand(180, 210)}, 70%, 85%)`
              : '#ffffff',
          ox: 0, oy: 0,
        }
        s.ox = s.x; s.oy = s.y
        stars.push(s)
      }
    }

    const shooters: { x: number; y: number; len: number; speed: number; angle: number; life: number; decay: number }[] = []
    function maybeSpawnShooter() {
      if (Math.random() < 0.004 && shooters.length < 3) {
        shooters.push({
          x: rand(W * 0.1, W * 0.9),
          y: rand(0, H * 0.4),
          len: rand(80, 180),
          speed: rand(8, 18),
          angle: rand(0.3, 0.7),
          life: 1,
          decay: rand(0.015, 0.035),
        })
      }
    }

    let frame = 0
    let animId: number

    function draw() {
      frame++
      ctx!.fillStyle = 'rgba(6,13,31,0.18)'
      ctx!.fillRect(0, 0, W, H)

      maybeSpawnShooter()

      for (const s of stars) {
        s.twinkle += s.twinkleSpeed
        const alpha = 0.55 + 0.45 * Math.sin(s.twinkle)
        const layerShift = [0.5, 1.0, 1.8][s.layer]
        s.x = s.ox + (mouse.x - 0.5) * layerShift * 18
        s.y = s.oy + (mouse.y - 0.5) * layerShift * 10 + frame * s.speed
        if (s.y > H + 10) { s.y -= H + 20; s.oy -= H + 20 }
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx!.fillStyle = s.color.startsWith('hsl')
          ? s.color.replace(')', `, ${alpha})`)
          : `rgba(255,255,255,${alpha})`
        ctx!.fill()
      }

      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i]
        sh.x += Math.cos(sh.angle) * sh.speed
        sh.y += Math.sin(sh.angle) * sh.speed
        sh.life -= sh.decay
        if (sh.life <= 0) { shooters.splice(i, 1); continue }
        const grd = ctx!.createLinearGradient(
          sh.x, sh.y,
          sh.x - Math.cos(sh.angle) * sh.len,
          sh.y - Math.sin(sh.angle) * sh.len
        )
        grd.addColorStop(0, `rgba(255,255,255,${sh.life})`)
        grd.addColorStop(1, 'rgba(255,255,255,0)')
        ctx!.beginPath()
        ctx!.moveTo(sh.x, sh.y)
        ctx!.lineTo(sh.x - Math.cos(sh.angle) * sh.len, sh.y - Math.sin(sh.angle) * sh.len)
        ctx!.strokeStyle = grd
        ctx!.lineWidth = 1.5 * sh.life
        ctx!.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    function onMouse(e: MouseEvent) {
      mouse.x = e.clientX / W
      mouse.y = e.clientY / H
    }

    function onResize() {
      initCanvas()
      initStars()
    }

    initCanvas()
    initStars()

    ctx.fillStyle = '#060d1f'
    ctx.fillRect(0, 0, W, H)

    draw()

    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="galaxy"
      aria-hidden="true"
    />
  )
}
