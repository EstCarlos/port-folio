import { Github, Linkedin, Mail, MessageCircle, Send, Heart } from "lucide-react"
import { ScrollAnimation, SlidingDoor, Parallax, MorphingBackground } from "./advanced-scroll-animations"

export function Contact() {
  return (
    <MorphingBackground>
      <section id="contact" className="py-24 pb-32 relative overflow-hidden">
        {/* Elementos decorativos con parallax */}
        <Parallax speed={0.4}>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 animate-pulse-soft"></div>
        </Parallax>
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float"></div>
        
        <div className="space-y-12 relative z-10">
          <ScrollAnimation animation="blur" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              <span className="text-accent font-mono text-xl md:text-2xl gradient-gold bg-clip-text text-transparent">06. </span>
              Let's Connect!
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollAnimation animation="scale" delay={0.4}>
              <SlidingDoor direction="left">
                <div className="border-l-4 border-accent/60 hover:border-accent p-10 hover:bg-accent/3 transition-all duration-500 hover:translate-x-2 relative group">
                  {/* Efecto de partículas */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-accent rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                  </div>
                  
                  <div className="text-center space-y-6 relative z-10">
                    <div className="flex justify-center">
                      <div className="p-4 gradient-navy-beige rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <MessageCircle className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                      Let's talk about your next project!
                    </h3>
                    
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      I'm always open to new opportunities and exciting collaborations in{" "}
                      <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">cloud architectures</span>,{" "}
                      <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-lg">serverless solutions</span> and{" "}
                      <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">DevOps automation</span>. 
                    </p>
                  </div>
                </div>
              </SlidingDoor>
            </ScrollAnimation>

            {/* Botones de contacto con animaciones escalonadas */}
            <ScrollAnimation animation="stagger" delay={0.6}>
              <div className="grid sm:grid-cols-3 gap-6">
                <a
                  href="mailto:carlos@example.com"
                  className="group relative flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-accent/20 to-accent/10 border-2 border-accent text-accent font-mono text-sm hover:from-accent hover:to-accent/80 hover:text-background hover:scale-105 hover:rotate-2 hover:shadow-xl hover:shadow-accent/30 transition-all duration-500 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-300"></div>
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="relative z-10">Send me an Email</span>
                  <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" />
                </a>

                <a
                  href="https://github.com/EstCarlos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 px-8 py-6 bg-secondary text-secondary-foreground font-mono text-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:-rotate-2 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 rounded-xl overflow-hidden"
                >
                  <Github className="w-5 h-5 group-hover:animate-spin" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/carlossotodd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 px-8 py-6 bg-secondary text-secondary-foreground font-mono text-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:rotate-1 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500 rounded-xl overflow-hidden"
                >
                  <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation animation="blur" delay={0.8}>
          <footer className="mt-24 pt-8 border-t border-accent/20 relative z-10">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground font-mono">
                Designed and built with <Heart className="inline w-4 h-4 text-accent animate-pulse" /> by Carlos Soto
              </p>
              <p className="text-xs text-muted-foreground/70">
                © 2025 - Powered by passion for cloud architecture & innovation
              </p>
            </div>
          </footer>
        </ScrollAnimation>
      </section>
    </MorphingBackground>
  )
}
