import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation, SlidingDoor, Parallax } from "./advanced-scroll-animations"

export function Experience() {
  const experiences = [
    {
      title: "DevOps Lead",
      company: "Hire Horatio",
      period: "2024 — Present",
      description: [
        "Led a project to create a website with a 100% Serverless architecture to register massive OTs for the Workforce platform, using services such as S3, Lambda, SQS, and SNS.",
        "Automated infrastructure deployments in the Cloud environment with (IaC) using GitHub Actions.",
        "Lead a team of developers, guiding them in the design, implementation, and improvement of efficient technology solutions.",
      ],
      technologies: ["AWS Lambda", "S3", "SQS", "SNS", "GitHub Actions", "IaC", "Serverless"],
    },
    {
      title: "Developer Specialist",
      company: "Hire Horatio",
      period: "2022 — 2024",
      description: [
        "Worked on projects to create custom connectors that extract data from CRM using Airflow, with storage in Snowflake and serverless tools like Snowpipe, Tasks, and Streams.",
        "Designed and developed webhooks with serverless services such as AWS Lambda, API Gateway, SNS, and CloudWatch.",
        "Implemented tools based on event-driven architecture, orchestrating flows with Step Functions.",
      ],
      technologies: ["Airflow", "Snowflake", "AWS Lambda", "API Gateway", "Step Functions", "Event-Driven"],
    },
  ]

  return (
    <section id="experience" className="section-bg-full section-bg-primary py-24 relative overflow-hidden">
      <Parallax speed={0.3}>
        <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-accent/5 animate-float"></div>
      </Parallax>
      <div className="absolute bottom-20 right-20 w-36 h-36 rounded-full bg-primary/5 animate-pulse-soft"></div>
      
      <div className="space-y-12 relative z-10">
        <ScrollAnimation animation="blur" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-accent font-mono text-xl md:text-2xl gradient-gold bg-clip-text text-transparent">03. </span>
            Work Experience
          </h2>
        </ScrollAnimation>

        <div className="space-y-8 px-4">
          {experiences.map((exp, index) => (
            <ScrollAnimation 
              key={index} 
              animation={index % 2 === 0 ? "left" : "right"} 
              delay={0.4 + index * 0.3}
            >
              <SlidingDoor direction={index % 2 === 0 ? "left" : "right"}>
                <div className="p-8 border-l-4 border-accent/60 hover:border-accent hover:bg-accent/3 transition-all duration-500 hover:translate-x-2 group relative mx-2">
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.title} <span className="text-accent font-bold">@ {exp.company}</span>
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono bg-accent/10 px-3 py-1 rounded-full w-fit mt-2">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex gap-4 text-lg">
                          <span className="text-accent mt-1.5 text-xl">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-accent/30 text-accent font-mono text-sm hover:bg-accent/10 hover:border-accent hover:scale-110 transition-all duration-300 cursor-pointer"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </SlidingDoor>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
