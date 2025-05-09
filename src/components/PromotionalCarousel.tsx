"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Dados dos slides promocionais
const promotionalSlides = [
  {
    id: 1,
    title: "Promoção Especial",
    subtitle: "Compre 3 pneus e ganhe o 4º grátis",
    description: "Válido para todas as marcas. Aproveite esta oferta por tempo limitado!",
    image: "/images/logo-completo.png",
    buttonText: "Ver Oferta",
    buttonLink: "/produtos",
    bgColor: "from-primary/80 to-primary/40",
  },
  {
    id: 2,
    title: "Novos Serviços",
    subtitle: "Alinhamento computadorizado 3D",
    description: "Tecnologia de ponta para garantir maior segurança e durabilidade dos seus pneus.",
    image: "/images/workshop.png",
    buttonText: "Agendar Agora",
    buttonLink: "/contato",
    bgColor: "from-secondary/80 to-secondary/40",
  },
  {
    id: 3,
    title: "Parceria Bridgestone",
    subtitle: "Qualidade e Confiança desde 1989",
    description: "Especialistas em pneus, alinhamento e balanceamento em Irecê",
    image: "/images/logo-completo.png",
    buttonText: "Conheça Nossos Produtos",
    buttonLink: "/produtos",
    bgColor: "from-accent/80 to-accent/40",
  },
]

export function PromotionalCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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

  // Auto-rotate slides
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % promotionalSlides.length)
      }, 5000) // Change slide every 5 seconds
    }

    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotionalSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotionalSlides.length) % promotionalSlides.length)
  }

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

  // Slide variants
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
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
          {/* Carousel container with scroll effects */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl w-full mx-4 relative overflow-hidden"
            style={{
              scale,
              y,
              boxShadow,
              borderRadius,
              zIndex: 20,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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

            {/* Carousel slides */}
            <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
              {promotionalSlides.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 ${
                    index === currentSlide ? "z-10" : "z-0"
                  }`}
                  initial="hidden"
                  animate={index === currentSlide ? "visible" : "hidden"}
                  exit="exit"
                  variants={slideVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                      <motion.h3
                        className="text-xl md:text-2xl font-bold mb-4 relative inline-block"
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
                        {slide.subtitle}
                      </motion.h3>
                      <p className="text-muted-foreground mb-6">{slide.description}</p>
                      <Button asChild className={`bg-gradient-to-r ${slide.bgColor} hover:opacity-90`}>
                        <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative w-full md:w-1/2 h-[200px] md:h-[300px] perspective-1000"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: [0, 5, 0, -5, 0],
                      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-contain drop-shadow-lg"
                      style={{
                        filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Navigation controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {promotionalSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary scale-125" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md z-20 hover:bg-white dark:hover:bg-gray-700 transition-all"
              onClick={prevSlide}
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md z-20 hover:bg-white dark:hover:bg-gray-700 transition-all"
              onClick={nextSlide}
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Animated decorative elements - Gear and Tire icons */}
            <motion.div
              className="absolute bottom-4 left-4 w-16 h-16 md:w-24 md:h-24 opacity-20 text-primary dark:text-primary/60"
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
              {/* Gear icon */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 opacity-20 text-primary dark:text-primary/60"
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
              {/* Tire icon */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M19 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4.93 4.93L7.05 7.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16.95 16.95L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4.93 19.07L7.05 16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
