import { ScrollAnimation, SlidingDoor, Parallax } from "./advanced-scroll-animations"

export function About() {
  return (
    <section id="about" className="section-bg-full section-bg-primary py-24 relative overflow-hidden">
      {/* Elementos decorativos con parallax */}
      <Parallax speed={0.3}>
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/10 animate-pulse-soft"></div>
      </Parallax>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/5 animate-float"></div>
      
      <div className="space-y-12 relative z-10">
        <ScrollAnimation animation="blur" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-accent font-mono text-xl md:text-2xl gradient-gold bg-clip-text text-transparent">01. </span>
            About Me
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollAnimation animation="left" delay={0.4}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                My passion for software development began with the curiosity to understand how large-scale systems work. 
                Today, I specialize in designing and implementing{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">serverless architectures</span> and{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">event-driven</span> solutions that enable companies to scale efficiently
                and reliably.
              </p>

              <p className="text-lg">
                As a <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded">DevOps Lead</span>, I lead teams in
                creating cloud-native solutions, automating deployments with Infrastructure as Code and orchestrating
                complex workflows with AWS services in enterprise projects.
              </p>

              <p className="text-lg">
                My focus is on building robust, scalable, and maintainable systems that solve real business problems,
                always applying industry best practices.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scale" delay={0.6}>
            <SlidingDoor direction="right">
              <div className="border-l-4 border-accent/60 hover:border-accent p-8 hover:bg-accent/3 transition-all duration-500 hover:translate-x-2 relative z-10 mx-2">
                <h3 className="text-accent font-bold text-xl mb-6 gradient-gold bg-clip-text text-transparent">
                  🚀 Technical Specialties
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: "☁️", text: "Serverless & Event-Driven Architectures", color: "accent" },
                    { icon: "🏗️", text: "Infrastructure as Code", color: "primary" },
                    { icon: "🔄", text: "CI/CD & DevOps Automation", color: "accent" },
                    { icon: "⚡", text: "AWS Cloud Solutions", color: "primary" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className={`text-sm font-medium text-${item.color} group-hover:text-accent transition-colors duration-300`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SlidingDoor>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
