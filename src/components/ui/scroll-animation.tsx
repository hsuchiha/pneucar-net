"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  once?: boolean
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.2,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  }

  useEffect(() => {
    if (!ref.current) return

    if (isInView) {
      ref.current.style.transform = "translate(0, 0)"
      ref.current.style.opacity = "1"
    } else {
      ref.current.style.transform = `translate${direction === "up" || direction === "down" ? "Y" : "X"}(${
        direction === "up" || direction === "right" ? "-" : ""
      }2rem)`
      ref.current.style.opacity = "0"
    }
  }, [isInView, direction])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: 0,
        transform: `translate${direction === "up" || direction === "down" ? "Y" : "X"}(${
          direction === "down" || direction === "left" ? "-" : ""
        }2rem)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
