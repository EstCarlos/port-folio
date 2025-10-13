"use client"

import { useEffect, useState } from "react"
import { MorphingBackground, ScrollAnimation, Typewriter } from "./advanced-scroll-animations"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <MorphingBackground>
      <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Elementos decorativos de fondo con parallax */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent/10 animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-primary/5 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="w-full relative z-10">
          <ScrollAnimation animation="stagger" className="space-y-6">
            <div className="space-y-4">
              <p className="text-accent font-mono text-sm md:text-base font-semibold">Hi, my name is</p>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                Carlos Soto
              </h1>
              
              <div className="relative pb-4">
                <Typewriter 
                  text="Architect of the digital future."
                  speed={80}
                  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground leading-tight break-words"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm a <span className="text-foreground font-semibold">Software Engineer</span> specialized in{" "}
              <span className="text-primary font-semibold">Serverless Architectures</span>,{" "}
              <span className="text-primary font-semibold">Event Driven</span> and <span className="text-accent font-semibold">Cloud Solutions</span>.
              Currently leading development teams, creating scalable and automated infrastructure
              on AWS with a focus on enterprise solutions.
            </p>

            <div className="flex gap-6 pt-4 pl-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-accent text-accent font-mono text-sm hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 hover:scale-105 transition-all duration-300 rounded-lg backdrop-blur-sm"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 gradient-navy-beige text-primary-foreground font-mono text-sm hover:scale-105 hover:rotate-1 transition-all duration-300 rounded-lg shadow-lg navy-glow"
              >
                View Projects
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </MorphingBackground>
  )
}
