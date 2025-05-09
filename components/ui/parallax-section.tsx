"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function ParallaxSection({ children, className = "", speed = 0.5, direction = "up" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const elementTop = ref.current.offsetTop
      const elementHeight = ref.current.offsetHeight
      const windowHeight = window.innerHeight

      // Check if element is in viewport
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const yPos = (scrollY - elementTop) * speed * (direction === "up" ? -1 : 1)
        ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
    </div>
  )
}
