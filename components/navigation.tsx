"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "stack", "experience", "certifications", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "stack", label: "STACK" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "certifications", label: "CERTIFICATIONS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-beige border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-lg font-mono font-bold text-accent hover:text-accent/80 transition-all duration-300 hover:scale-105"
          >
            {"<CS />"}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-mono transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.id 
                    ? "text-accent bg-accent/10 shadow-md" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/EstCarlosy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-accent/10"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/carlossotodd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-primary/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:carlos@example.com"
              className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-accent/10"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
