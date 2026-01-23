import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative bg-navy-900/50">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - CTA content */}
          <div>
            <span className="text-sm text-sky-400 font-medium tracking-wide uppercase mb-4 block">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's build something
              <span className="text-gradient"> great together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free consultation to discuss your project. 
              No pressure, just a conversation about what you're building.
            </p>

            {/* What happens next */}
            <div className="space-y-4 mb-12">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                What happens next:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-sky-400 font-medium">1</span>
                  </div>
                  <p className="text-muted-foreground">We'll review your message and get back to you within 24 hours.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-sky-400 font-medium">2</span>
                  </div>
                  <p className="text-muted-foreground">Schedule a 30-minute call to discuss your needs and goals.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-sky-400 font-medium">3</span>
                  </div>
                  <p className="text-muted-foreground">Receive a tailored proposal with timeline and investment.</p>
                </div>
              </div>
            </div>

            {/* Alternative contact */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-sky-400" />
              <span>Prefer email? Reach us at </span>
              <a href="mailto:hello@digitalskies.dev" className="text-sky-400 hover:text-sky-300 link-underline">
                hello@digitalskies.dev
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="card-elevated rounded-2xl p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-sky-400" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">Message sent!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thanks for reaching out. We'll review your message and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-navy-800/50 border-border/50 focus:border-sky-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="bg-navy-800/50 border-border/50 focus:border-sky-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="bg-navy-800/50 border-border/50 focus:border-sky-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Tell us about your project</Label>
                  <Textarea
                    id="project"
                    placeholder="What are you looking to build? What problems are you trying to solve?"
                    rows={5}
                    required
                    className="bg-navy-800/50 border-border/50 focus:border-sky-500/50 resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
