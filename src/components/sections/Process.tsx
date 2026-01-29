const steps = [
  {
    number: '01',
    title: 'Discovery & Understanding',
    description: 'We start by listening. Understanding your business, goals, and challenges ensures we build the right thing.',
  },
  {
    number: '02',
    title: 'Planning & Architecture',
    description: 'Clear technical planning and architecture decisions before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Iterative development with regular check-ins. You see progress, not just promises.',
  },
  {
    number: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing ensures quality. Smooth deployments get you live with confidence.',
  },
  {
    number: '05',
    title: 'Support & Iteration',
    description: 'Software evolves. We are here for ongoing support, improvements, and new features.',
  },
];

export const Process = () => {
  return (
    <section id="process" className="section-padding relative bg-navy-900/50">
      <div className="container-wide">
        {/* Section header remains the same */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Transparent from start to finish
          </h2>
          <p className="text-xl text-muted-foreground">
            No black boxes or surprise timelines. A clear, collaborative process 
            that keeps you informed at every stage.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Horizontal line (visible on desktop) */}
          <div className="absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-sky-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-start md:items-center text-left md:text-center group relative">
                {/* Number circle */}
                <div className="relative flex-shrink-0 mb-6 z-10">
                  <div className="w-14 h-14 rounded-full border-2 border-sky-500/50 bg-navy-900 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-500/10 transition-all duration-300">
                    <span className="font-display font-bold text-sky-400 group-hover:text-sky-300">
                      {step.number}
                    </span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-sky-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};