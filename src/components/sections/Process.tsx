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
        {/* Section header */}
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
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-8 group">
                {/* Number circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border-2 border-sky-500/50 bg-navy-900 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-500/10 transition-all duration-300">
                    <span className="font-display font-bold text-sky-400 group-hover:text-sky-300">
                      {step.number}
                    </span>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-sky-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
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
