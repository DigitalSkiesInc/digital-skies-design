import { Globe, Smartphone, Server, Zap, Compass } from 'lucide-react';

const services = [
  {
    icon: Globe,
    outcome: 'Websites that convert and scale',
    service: 'Web Development',
    description: 'Fast, accessible, and built to grow with your business. From marketing sites to complex web applications.',
  },
  {
    icon: Smartphone,
    outcome: 'Mobile apps people actually use',
    service: 'Mobile Applications',
    description: 'Native and cross-platform apps designed for engagement. Intuitive interfaces that users love.',
  },
  {
    icon: Server,
    outcome: 'Backend systems built for growth',
    service: 'Backend Development',
    description: 'APIs, databases, and infrastructure that handle scale. Reliable systems that power your operations.',
  },
  {
    icon: Zap,
    outcome: 'Automation that removes manual work',
    service: 'Automation & Integrations',
    description: 'Connect your tools and eliminate repetitive tasks. Free your team to focus on what matters.',
  },
  {
    icon: Compass,
    outcome: 'Technical guidance for better decisions',
    service: 'Technical Consulting',
    description: 'Strategic advice on architecture, technology choices, and team processes. Clarity when you need it.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      
      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4 block">
            What We Build
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Solutions focused on outcomes
          </h2>
          <p className="text-xl text-muted-foreground">
            We don't just write code. We solve problems and create real value 
            for your business.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.outcome}
              className="group card-elevated rounded-2xl p-8 hover:border-sky-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:from-sky-500/30 group-hover:to-cyan-500/30 transition-colors">
                <service.icon className="w-6 h-6 text-sky-400" />
              </div>

              {/* Outcome (headline) */}
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                {service.outcome}
              </h3>

              {/* Service name (smaller) */}
              <p className="text-sm text-sky-400/70 mb-4">{service.service}</p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
