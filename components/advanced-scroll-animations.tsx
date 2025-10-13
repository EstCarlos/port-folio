"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'reveal' | 'left' | 'right' | 'scale' | 'rotate' | 'blur' | 'stagger'
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  delay = 0, 
  animation = 'reveal' 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-on-scroll")
            }, delay * 1000)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (animation) {
      case 'left': return 'scroll-reveal-left'
      case 'right': return 'scroll-reveal-right'
      case 'scale': return 'scroll-reveal-scale'
      case 'rotate': return 'scroll-reveal-rotate'
      case 'blur': return 'scroll-reveal-blur'
      case 'stagger': return 'stagger-children'
      default: return 'scroll-reveal'
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}

interface SlidingDoorProps {
  children: ReactNode
  direction?: 'left' | 'right'
  className?: string
}

export function SlidingDoor({ children, direction = 'left', className = "" }: SlidingDoorProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div 
      ref={ref} 
      className={`sliding-door-${direction} ${className}`}
    >
      {children}
    </div>
  )
}

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const parallaxOffset = scrolled * speed
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffset(parallaxOffset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      ref={ref} 
      className={`parallax-slow ${className}`}
      style={{ '--scroll-offset': `${offset}px` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
}

export function Typewriter({ text, speed = 50, className = "" }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isVisible, speed, text])

  return (
    <div ref={ref} className={`typewriter ${className}`}>
      {displayText}
    </div>
  )
}

interface MorphingBackgroundProps {
  children: ReactNode
  className?: string
}

export function MorphingBackground({ children, className = "" }: MorphingBackgroundProps) {
  return (
    <div className={`morphing-bg ${className}`}>
      {children}
    </div>
  )
}