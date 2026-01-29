import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Workflow,
  ShieldCheck } from
'lucide-react';
const services = [
{
  icon: Globe,
  title: 'Web Development',
  description:
  'Performant, accessible, and beautiful web applications built with modern frameworks.'
},
{
  icon: Smartphone,
  title: 'Mobile Applications',
  description:
  'Native and cross-platform mobile experiences that feel fluid and responsive.'
},
{
  icon: Database,
  title: 'Backend Systems',
  description:
  'Scalable architecture, API design, and database optimization for growing data needs.'
},
{
  icon: Workflow,
  title: 'Automation',
  description:
  'Streamlining business processes through intelligent integration and automated workflows.'
},
{
  icon: ShieldCheck,
  title: 'Technical Consulting',
  description:
  'Strategic guidance on technology choices, security, and infrastructure planning.'
},
{
  icon: Code2,
  title: 'Custom Integrations',
  description:
  'Connecting disparate systems to create a unified, efficient technology ecosystem.'
}];

export function Services2() {
  return (
    <section id="services" className="py-12 bg-[#0A1628] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] to-[#0F2035]" />

      <Container className="relative z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="group p-8 rounded-2xl bg-[#1E3A5F]/30 border border-blue-900/30 hover:border-blue-500/50 hover:bg-[#1E3A5F]/50 transition-all duration-300">

              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </Container>
    </section>);

}