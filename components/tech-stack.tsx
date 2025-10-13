import { Badge } from "@/components/ui/badge"
import { ScrollAnimation, SlidingDoor, Parallax } from "./advanced-scroll-animations"
import { Cloud, Code, Layers, Zap, Database } from "lucide-react"

export function TechStack() {
  const stack = {
    "Cloud & Infrastructure": {
      icon: Cloud,
      color: "primary",
      technologies: ["AWS CDK", "Terraform", "CloudFormation"]
    },
    "Backend & Data": {
      icon: Database,
      color: "accent",
      technologies: ["Python", "TypeScript", "SQL", "Airflow"]
    },
    "Frontend": {
      icon: Code,
      color: "primary",
      technologies: ["Next.js", "React", "Tailwind CSS"]
    },
    "DevOps & CI/CD": {
      icon: Zap,
      color: "accent",
      technologies: ["GitHub Actions", "CodePipeline", "GitHub"]
    },
    "AWS Services": {
      icon: Layers,
      color: "primary",
      technologies: ["S3", "Lambda", "SQS", "SNS", "API Gateway", "CloudWatch", "Cognito", "Amplify", "Glue", "Step Functions"]
    },
    "Warehouses & Databases": {
      icon: Database,
      color: "accent",
      technologies: ["Snowflake", "PostgreSQL", "DynamoDB"]
    }
  }

  return (
    <section id="stack" className="section-bg-full section-bg-accent py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <Parallax speed={0.3}>
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/5 animate-float"></div>
      </Parallax>
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-accent/5 animate-pulse-soft"></div>
      
      <div className="space-y-12 relative z-10">
        <ScrollAnimation animation="rotate" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-accent font-mono text-xl md:text-2xl gradient-gold bg-clip-text text-transparent">02. </span>
            Tech Stack
          </h2>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {Object.entries(stack).map(([category, { icon: Icon, color, technologies }], index) => (
            <ScrollAnimation 
              key={category} 
              animation={index % 2 === 0 ? "left" : "right"} 
              delay={0.4 + index * 0.2}
            >
              <SlidingDoor direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`group space-y-6 p-6 border-l-4 border-${color}/40 hover:border-${color} hover:bg-${color}/3 transition-all duration-500 hover:translate-x-1 relative`}>
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-3 bg-${color}/10 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className={`w-8 h-8 text-${color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-mono">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`bg-secondary/50 text-secondary-foreground hover:bg-${color} hover:text-${color}-foreground hover:scale-110 transition-all duration-300 font-mono text-xs cursor-pointer hover:shadow-lg group-hover:animate-pulse`}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Contador de tecnologías */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`text-xs font-mono text-${color} bg-${color}/10 px-2 py-1 rounded-full`}>
                      {technologies.length} techs
                    </span>
                  </div>
                </div>
              </SlidingDoor>
            </ScrollAnimation>
          ))}
        </div>

        {/* Estadística impresionante */}
        <ScrollAnimation animation="scale" delay={1.2}>
          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-card border border-accent/30 rounded-2xl navy-glow">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">27+</div>
                  <div className="text-sm text-muted-foreground font-mono">Tecnologías</div>
                </div>
                <div className="w-px h-12 bg-accent/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground font-mono">Años Exp</div>
                </div>
                <div className="w-px h-12 bg-accent/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground font-mono">Cloud Native</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
