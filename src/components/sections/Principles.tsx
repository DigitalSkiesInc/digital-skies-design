const principles = [
  {
    title: 'Simplicity over complexity',
    description: 'The best solutions are often the simplest. We avoid overengineering and build what you actually need.',
  },
  {
    title: 'Long-term thinking',
    description: 'Quick fixes create future problems. We build with maintenance, scaling, and evolution in mind.',
  },
  {
    title: 'Clear communication',
    description: 'No jargon or hidden agendas. We explain things plainly and keep you informed throughout.',
  },
  {
    title: 'Software built to last',
    description: 'Quality code that stands the test of time. Well-documented, tested, and designed for durability.',
  },
];

export const Principles = () => {
  return (
    <section id="principles" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="container-wide relative z-10">
        {/* Section header - centered */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4 block">
            Our Thinking
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Principles we build by
          </h2>
          <p className="text-xl text-muted-foreground">
            How we approach every project.
          </p>
        </div>

        {/* Principles grid - 2x2 asymmetric */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`p-8 rounded-2xl border border-border/50 hover:border-sky-500/30 transition-all duration-300 ${
                index % 2 === 0 ? 'md:translate-y-4' : ''
              }`}
            >
              {/* Number indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 rounded-full bg-gradient-to-b from-sky-500 to-cyan-500" />
                <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                  Principle {index + 1}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold mb-4">
                {principle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
