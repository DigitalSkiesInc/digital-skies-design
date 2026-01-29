import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../ui/project-card'; 


const projects = [
  {
    title: 'PO Signal Trader',
    category: 'Mobile Application',
    description: 'An application that helps beginner traders kickstart their trading journey. The app automatically copies trading orders placed by select professional traders. Users are also able to set trading configurations to manage risk and can view their trading statistics to inform on their trading settings.Features an easy to use UI and a smooth user experience.',
    metrics: '300% increase in conversion rate',
    link:"https://play.google.com/store/apps/details?id=com.digitalskies.testapp",
    image: 'assets/trading-app.png',
  },
  {
    title: 'Drupp Ride-Hailing App',
    category: 'Mobile Application',
    description: 'A ride-hailing app developed for Drupp Ltd Nigeria. Features ability to see nearby drivers, one-on-one communication between drivers and riders, ride  live-tracking, payment system among other features of ride-hailing apps. Easy to use and a visually appealing UI.The app  uses android and third-party APIs to be able to support these capabilities.',
    metrics: '50,000+ appointments booked',
    link:"https://www.mydrupp.com/",
    image: 'assets/ride-hailing.png',
  },
  {
    title: 'Plada Inventory Management App',
    category: 'Mobile Application',
    description: 'An Inventory management app made for SDV ,Portugal. It features inter-shop inventory transfers, sales recording, Sample registration and periodic inventory events. The app is data heavy and called for rigorous testing to ensure accuracy.',
    metrics: '40% reduction in delivery times',
    link:"#",
    image: 'assets/inventory-app.png',
  },
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-12 md:py-16 lg:py-20 relative bg-navy-900/30">
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
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
