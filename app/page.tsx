import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
