"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"

export function AnimatedLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Transform values based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["0px 10px 30px rgba(0, 0, 0, 0.1)", "0px 20px 60px rgba(0, 0, 0, 0.2)"],
  )
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["1rem", "2rem"])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  // Logo variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  // Text variants with 3D effect
  const titleVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  // Gradient animation
  const gradientVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  return (
    <div className="w-full py-16 md:py-24 overflow-hidden relative" ref={containerRef}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial="initial"
        animate="animate"
        variants={gradientVariants}
        style={{
          background:
            "linear-gradient(120deg, rgba(212, 0, 26, 0.05), rgba(0, 89, 179, 0.05), rgba(241, 206, 80, 0.05))",
          backgroundSize: "200% 200%",
        }}
      />

      <motion.div
        className="absolute -right-20 -top-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -left-20 -bottom-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Logo container with scroll effects */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl w-full mx-4 relative overflow-hidden"
            style={{
              scale,
              y,
              boxShadow,
              borderRadius,
              zIndex: 20,
            }}
          >
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/20"
                  initial={{
                    x: Math.random() * 100 - 50 + "%",
                    y: Math.random() * 100 - 50 + "%",
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.25,
                  }}
                  animate={{
                    x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                    y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>

            {/* Logo with 3D hover effect */}
            <motion.div
              className="relative w-full h-[250px] md:h-[300px] perspective-1000"
              variants={logoVariants}
              whileHover={{
                scale: 1.05,
                rotateY: [0, 5, 0, -5, 0],
                transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              <Image
                src="/images/logo-completo.png"
                alt="PneusCar Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
                style={{
                  filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))",
                }}
              />
            </motion.div>

            {/* Animated text with gradient and 3D effect */}
            <motion.div className="mt-8 text-center perspective-1000" variants={titleVariants}>
              <motion.h2
                className="text-2xl md:text-3xl font-bold relative inline-block"
                style={{
                  background: "linear-gradient(90deg, #D4001A, #0059B3, #D4001A)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
                animate={{
                  backgroundPosition: ["0% center", "200% center", "0% center"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Qualidade e Confiança desde 1989
              </motion.h2>
            </motion.div>

            <motion.div className="text-center mt-3" variants={subtitleVariants} initial="hidden" animate="visible">
              <motion.p
                className="text-muted-foreground relative inline-block"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Especialistas em pneus, alinhamento e balanceamento em Irecê
              </motion.p>
            </motion.div>

            {/* Animated decorative elements */}
            <motion.div
              className="absolute bottom-4 left-4 w-16 h-16 md:w-24 md:h-24 opacity-20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 opacity-20"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                },
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M25 25 L75 25 L75 75 L25 75 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
