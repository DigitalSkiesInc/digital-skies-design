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
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-border/30 p-8 relative overflow-hidden">
              {/* Abstract visual - connected systems */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(187, 85%, 53%)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Central node */}
                <circle cx="200" cy="200" r="40" fill="url(#aboutGradient)" className="animate-pulse-slow" />
                <circle cx="200" cy="200" r="60" stroke="url(#aboutGradient)" strokeWidth="1" fill="none" opacity="0.5" />
                <circle cx="200" cy="200" r="90" stroke="url(#aboutGradient)" strokeWidth="0.5" fill="none" opacity="0.3" />
                
                {/* Orbiting nodes */}
                <g className="animate-float">
                  <circle cx="120" cy="100" r="15" fill="hsl(199, 89%, 48%)" opacity="0.8" />
                  <line x1="135" y1="115" x2="180" y2="170" stroke="url(#aboutGradient)" strokeWidth="1" />
                </g>
                <g className="animate-float animation-delay-200">
                  <circle cx="300" cy="120" r="12" fill="hsl(187, 85%, 53%)" opacity="0.7" />
                  <line x1="288" y1="132" x2="225" y2="175" stroke="url(#aboutGradient)" strokeWidth="1" />
                </g>
                <g className="animate-float animation-delay-400">
                  <circle cx="320" cy="280" r="18" fill="hsl(199, 89%, 48%)" opacity="0.6" />
                  <line x1="302" y1="270" x2="235" y2="220" stroke="url(#aboutGradient)" strokeWidth="1" />
                </g>
                <g className="animate-float animation-delay-300">
                  <circle cx="100" cy="300" r="14" fill="hsl(187, 85%, 53%)" opacity="0.8" />
                  <line x1="114" y1="286" x2="170" y2="225" stroke="url(#aboutGradient)" strokeWidth="1" />
                </g>

                {/* Additional connecting lines */}
                <path d="M120 100 Q200 50 300 120" stroke="url(#aboutGradient)" strokeWidth="0.5" fill="none" opacity="0.4" />
                <path d="M100 300 Q50 200 120 100" stroke="url(#aboutGradient)" strokeWidth="0.5" fill="none" opacity="0.4" />
              </svg>

              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-lg font-medium text-foreground/80">
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
