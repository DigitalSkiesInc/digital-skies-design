import { motion } from "framer-motion";
import { Search, Compass, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We start by understanding your business, users, and goals. No assumptions—just clear questions and active listening.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Design",
    description: "We map out the architecture and user experience. You'll see the plan before we write a single line of code.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
    description: "We build in focused sprints with regular check-ins. You'll always know what's happening and what's next.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy",
    description: "We launch with confidence and stick around to ensure everything runs smoothly. Your success is our success.",
  },
];

export function Approach () {
  return (
    <section id="approach" className="py-12 md:py-16 lg:py-20 relative bg-navy-900/50">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="headline-medium mb-4">
            How we <span className="text-gradient">work</span>
          </h2>
          <p className="body-large text-muted-foreground">
            A clear process that keeps you informed and in control, 
            from first conversation to final launch.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                {/* Step number */}
                <div className="relative inline-flex lg:block mb-6">
                  <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mx-auto lg:mx-0 relative z-10">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -left-8 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="body-base text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


