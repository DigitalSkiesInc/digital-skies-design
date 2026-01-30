import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="group relative overflow-hidden rounded-2xl bg-navy-800/50 border border-border/30 hover:border-sky-500/40 transition-all duration-300 flex flex-col">
            {/* Project image - Height remains consistent */}
            <a href={project.link} target="" rel="noopener noreferrer">
                {project.category==='Mobile Application'?<div className="aspect-video relative overflow-hidden bg-navy-900/50 flex justify-center pt-6">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-[50%] h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-900/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 text-sky-400" />
                    </div>
                </div>:<div className="aspect-video relative overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-900/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 text-sky-400" />
                    </div>
                </div>}
            </a>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs text-sky-400 font-medium tracking-wide uppercase">
                    {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-sky-400 transition-colors">
                    {project.title}
                </h3>

                {/* Expandable Description */}
                <div className="relative">
                    <p className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${isExpanded && project.description.length > 100 ? 'line-clamp-none' : 'line-clamp-2'
                        }`}>
                        {project.description}
                    </p>

                    {(project.description.length > 100) && <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-2 text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                    >
                        {isExpanded ? (
                            <>Show Less <ChevronUp className="w-3 h-3" /></>
                        ) : (
                            <>Read More <ChevronDown className="w-3 h-3" /></>
                        )}
                    </button>}
                </div>

                {/* Metrics - Pushed to bottom */}
                {/* <div className="pt-4 mt-auto border-t border-border/30">
          <p className="text-sm font-medium text-cyan-400">
            {project.metrics}
          </p>
        </div> */}
            </div>
        </article>
    );
};

export default ProjectCard;