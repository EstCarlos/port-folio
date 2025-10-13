import { Card } from "@/components/ui/card"
import { Award, Shield, Star } from "lucide-react"
import { ScrollAnimation, SlidingDoor, Parallax } from "./advanced-scroll-animations"

export function Certifications() {
  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: Award,
      logo: "/Cloudpractitioner.png",
      year: "2024",
      skills: ["Cloud Concepts", "Security & Compliance", "Technology", "Billing & Pricing"],
      credentialId: "AWS-CCP-2024"
    },
  ]

  return (
    <section id="certifications" className="section-bg-full section-bg-accent py-24 relative overflow-hidden">
      <Parallax speed={0.2}>
        <div className="absolute top-16 right-16 w-28 h-28 rounded-full bg-primary/5 animate-float"></div>
      </Parallax>
      <div className="absolute bottom-16 left-16 w-24 h-24 rounded-full bg-accent/5 animate-pulse-soft"></div>
      
      <div className="space-y-12 relative z-10">
        <ScrollAnimation animation="scale" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-accent font-mono text-xl md:text-2xl gradient-gold bg-clip-text text-transparent">04. </span>
            Certifications
          </h2>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {certifications.map((cert, index) => (
            <ScrollAnimation key={index} animation="rotate" delay={0.4 + index * 0.2}>
              <SlidingDoor direction="left">
                <div className="p-8 border-l-4 border-accent/60 hover:border-accent hover:bg-accent/3 transition-all duration-500 hover:translate-x-2 group relative mx-2">
                  {/* Elementos decorativos */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-4 h-4 text-accent animate-pulse" />
                  </div>
                  
                  <div className="flex items-start gap-6 relative z-10">
                    {/* Logo oficial de AWS Cloud Practitioner */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-white rounded-xl p-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-gray-200">
                        <img 
                          src={cert.logo} 
                          alt={`${cert.name} Badge`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      {/* AWS branding */}
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        AWS
                      </div>
                      {/* Verification badge */}
                      <div className="absolute -top-1 -left-1 bg-green-500 text-white rounded-full p-1">
                        <Shield className="w-3 h-3" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="font-bold text-xl text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                          {cert.name}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <p className="text-sm text-muted-foreground font-medium">
                            {cert.issuer}
                          </p>
                          <span className="text-sm text-accent font-mono bg-accent/10 px-2 py-1 rounded">
                            {cert.year}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          <Shield className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                        <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-mono">
                          <span>Active</span>
                        </div>
                      </div>
                      
                      {/* Skills competencias */}
                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground mb-2">Key competencies:</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span key={skill} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
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
