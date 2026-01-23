export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            <span className="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4 block">
              About DigitalSkies
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Technology partners,
              <br />
              not just vendors
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                DigitalSkies exists because we believe software should serve its purpose 
                quietly and reliably. Too many businesses struggle with technology that 
                overpromises and underdelivers.
              </p>
              <p>
                We're a team of engineers who take pride in craftsmanship. We build 
                software that works today and scales tomorrow, without the bloat, 
                complexity, or technical debt that plagues so many projects.
              </p>
              <p>
                Our approach is simple: understand deeply, plan thoroughly, execute 
                precisely. We communicate clearly, meet our commitments, and build 
                relationships that last beyond a single project.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-sky-400">10+</div>
                <div className="text-sm text-muted-foreground">Years of combined experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-sky-400">50+</div>
                <div className="text-sm text-muted-foreground">Projects delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-cyan-400">100%</div>
                <div className="text-sm text-muted-foreground">Client retention rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-muted-foreground">Support availability</div>
              </div>
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl border border-border/30 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-lg font-medium text-foreground">
                  Building connected systems that grow with you
                </p>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
