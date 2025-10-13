import { Card } from "@/components/ui/card"
import { FolderGit2, Rocket, Cloud, Code2, Database } from "lucide-react"
import { ScrollAnimation, SlidingDoor, Parallax } from "./advanced-scroll-animations"

export function Projects() {
  return (
    <section id="projects" className="section-bg-full section-bg-beige py-24 relative overflow-hidden">
      {/* Elementos decorativos con parallax */}
      <Parallax speed={0.2}>
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/5 animate-float"></div>
      </Parallax>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/5 animate-pulse-soft"></div>
      
      <div className="space-y-12 relative z-10">
        <ScrollAnimation animation="rotate" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-accent font-mono text-xl md:text-2xl gradient-gold bg-clip-text text-transparent">05. </span>
            Projects
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Card principal grande */}
          <ScrollAnimation animation="scale" delay={0.4} className="md:col-span-2 lg:col-span-3">
            <SlidingDoor direction="left">
              <div className="p-12 border-l-4 border-accent/60 hover:border-accent hover:bg-accent/3 transition-all duration-500 group relative hover:translate-x-2">
                {/* Efecto de brillo que pasa */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-accent/10 to-transparent"></div>
                
                <div className="flex flex-col items-center justify-center text-center space-y-8 relative z-10">
                  <div className="relative">
                    <div className="p-8 gradient-navy-beige rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 navy-glow">
                      <FolderGit2 className="w-16 h-16 text-primary-foreground" />
                    </div>
                    {/* Iconos orbitales */}
                    <div className="absolute -top-2 -right-2 p-2 bg-accent rounded-full animate-bounce">
                      <Rocket className="w-4 h-4 text-background" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 p-2 bg-primary rounded-full animate-pulse">
                      <Cloud className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Epic Projects on the Way
                    </h3>
                    <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
                      I'm preparing an impressive showcase of my most innovative projects in{" "}
                      <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">serverless architectures</span>,{" "}
                      <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-lg">cloud solutions</span> and{" "}
                      <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">DevOps automation</span>. 
                    </p>
                    
                    <div className="flex justify-center items-center gap-4 pt-6">
                      <div className="px-6 py-3 bg-accent/20 rounded-full text-accent text-lg font-mono font-bold animate-pulse">
                        🚀 Coming Soon
                      </div>
                      <div className="flex gap-2">
                        <Code2 className="w-6 h-6 text-primary animate-bounce" style={{animationDelay: '0.1s'}} />
                        <Database className="w-6 h-6 text-accent animate-bounce" style={{animationDelay: '0.2s'}} />
                        <Cloud className="w-6 h-6 text-primary animate-bounce" style={{animationDelay: '0.3s'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlidingDoor>
          </ScrollAnimation>

          {/* Mini cards con preview de tecnologías */}
          <ScrollAnimation animation="left" delay={0.6}>
            <div className="p-6 border-l-4 border-primary/40 hover:border-primary hover:bg-primary/3 transition-all duration-300 group hover:translate-x-1">
              <div className="text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary">AWS Solutions</h4>
                <p className="text-sm text-muted-foreground">Serverless & Event-Driven</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="blur" delay={0.8}>
            <div className="p-6 border-l-4 border-accent/40 hover:border-accent hover:bg-accent/3 transition-all duration-300 group hover:translate-x-1">
              <div className="text-center space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                  <Code2 className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-accent">DevOps Tools</h4>
                <p className="text-sm text-muted-foreground">CI/CD & Automation</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="right" delay={1}>
            <div className="p-6 border-l-4 border-primary/40 hover:border-primary hover:bg-primary/3 transition-all duration-300 group hover:translate-x-1">
              <div className="text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary">Infrastructure</h4>
                <p className="text-sm text-muted-foreground">Terraform & IaC</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
