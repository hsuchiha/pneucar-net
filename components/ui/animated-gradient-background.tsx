"use client"

import { useEffect, useRef } from "react"

interface AnimatedGradientBackgroundProps {
  className?: string
}

export function AnimatedGradientBackground({ className = "" }: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const colors = ["#D4001A", "#0059B3", "#F1CE50", "#A3A7B1"]
    const numCircles = 5
    const circles: Circle[] = []

    class Circle {
      x: number
      y: number
      radius: number
      color: string
      dx: number
      dy: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * 200 + 100
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.dx = (Math.random() - 0.5) * 0.5
        this.dy = (Math.random() - 0.5) * 0.5
      }

      update() {
        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.dx = -this.dx
        }
        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
      }
    }

    for (let i = 0; i < numCircles; i++) {
      circles.push(new Circle())
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.9)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw and update circles
      circles.forEach((circle) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(0, `${circle.color}33`) // More transparent in center
        gradient.addColorStop(1, `${circle.color}00`) // Fully transparent at edges
        ctx.fillStyle = gradient
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
        circle.update()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 -z-10 h-full w-full ${className}`} />
}
