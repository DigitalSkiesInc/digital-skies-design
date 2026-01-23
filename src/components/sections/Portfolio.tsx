import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Scalable online store handling 10,000+ daily transactions with real-time inventory management.',
    metrics: '300% increase in conversion rate',
  },
  {
    title: 'Healthcare Scheduling',
    category: 'Mobile Application',
    description: 'Patient booking app reducing no-shows by 60% through smart reminders and easy rescheduling.',
    metrics: '50,000+ appointments booked',
  },
  {
    title: 'Logistics Dashboard',
    category: 'Backend & Automation',
    description: 'Real-time fleet tracking and route optimization saving 20+ hours per week in manual work.',
    metrics: '40% reduction in delivery times',
  },
];

export const Portfolio = () => {
  return (
    <section id="work" className="section-padding relative bg-navy-900/30">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Problems solved, results delivered
            </h2>
            <p className="text-xl text-muted-foreground">
              A selection of projects where we've made a real impact.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-navy-800/50 border border-border/30 hover:border-sky-500/40 transition-all duration-300"
            >
              {/* Placeholder image area */}
              <div className="aspect-video bg-gradient-to-br from-navy-700 to-navy-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10 group-hover:from-sky-500/20 group-hover:to-cyan-500/20 transition-colors" />
                
                {/* Abstract pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 225">
                  <defs>
                    <linearGradient id={`projectGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(187, 85%, 53%)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <rect x="50" y="40" width="60" height="60" rx="8" stroke={`url(#projectGradient${index})`} strokeWidth="1" fill="none" transform={`rotate(${index * 15}, 80, 70)`} />
                  <circle cx="300" cy="150" r="40" stroke={`url(#projectGradient${index})`} strokeWidth="1" fill="none" />
                  <path d="M150 180 Q250 100 350 160" stroke={`url(#projectGradient${index})`} strokeWidth="1" fill="none" />
                </svg>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-sky-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-sky-400 font-medium tracking-wide uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm font-medium text-cyan-400">
                    {project.metrics}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More projects hint */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More case studies coming soon. 
            <a href="#contact" className="text-sky-400 hover:text-sky-300 ml-1 link-underline">
              Get in touch
            </a>
            {' '}to discuss your project.
          </p>
        </div>
      </div>
    </section>
  );
};
