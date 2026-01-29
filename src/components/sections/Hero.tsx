import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Abstract SVG pattern component
const AbstractPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-30"
    viewBox="0 0 1200 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid lines */}
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.3" />
        <stop offset="50%" stopColor="hsl(187, 85%, 53%)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(199, 89%, 48%)" />
        <stop offset="100%" stopColor="hsl(187, 85%, 53%)" />
      </linearGradient>
    </defs>

    {/* Connected nodes - flight path inspired */}
    <g className="animate-draw-line" style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}>
      <path
        d="M100 600 Q300 400 500 450 T900 300 T1150 200"
        stroke="url(#lineGradient)"
        strokeWidth="1"
        fill="none"
        className="animate-draw-line"
      />
      <path
        d="M50 500 Q250 350 450 400 T850 250 T1100 150"
        stroke="url(#lineGradient)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
      />
    </g>

    {/* Nodes */}
    <g>
      <circle cx="100" cy="600" r="4" fill="url(#dotGradient)" className="animate-pulse-slow" />
      <circle cx="500" cy="450" r="6" fill="url(#dotGradient)" className="animate-pulse-slow animation-delay-200" />
      <circle cx="900" cy="300" r="5" fill="url(#dotGradient)" className="animate-pulse-slow animation-delay-400" />
      <circle cx="1150" cy="200" r="4" fill="url(#dotGradient)" className="animate-pulse-slow animation-delay-300" />
    </g>

    {/* Subtle geometric shapes */}
    <rect
      x="800"
      y="100"
      width="80"
      height="80"
      stroke="url(#lineGradient)"
      strokeWidth="0.5"
      fill="none"
      transform="rotate(45, 840, 140)"
      opacity="0.3"
    />
    <circle
      cx="300"
      cy="200"
      r="60"
      stroke="url(#lineGradient)"
      strokeWidth="0.5"
      fill="none"
      opacity="0.2"
    />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Abstract pattern */}
      <AbstractPattern />

      {/* Floating orb */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full animate-float opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(199, 89%, 48%) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/5 mb-8 animate-fade-up opacity-0">
            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm text-sky-400">Custom Software Development</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
            Software that solves
            <br />
            <span className="text-gradient">real business problems</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-up opacity-0 animation-delay-200">
            We build reliable, scalable applications for individuals, startups, 
            and businesses who need technology that actually works.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">See Our Services</a>
            </Button>
          </div>
          
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
};