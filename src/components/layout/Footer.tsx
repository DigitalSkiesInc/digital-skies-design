const footerLinks = {
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Backend Systems', href: '#services' },
    { label: 'Automation', href: '#services' },
    { label: 'Consulting', href: '#services' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Principles', href: '#principles' },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-navy-950">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center">
                <span className="font-display font-bold text-navy-950">D</span>
              </div>
              <span className="font-display font-semibold text-lg">DigitalSkies</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Custom software development for businesses who value quality, 
              reliability, and clear communication.
            </p>
            <a
              href="mailto:hello@digitalskies.dev"
              className="text-sky-400 hover:text-sky-300 link-underline"
            >
              hello@digitalskies.dev
            </a>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DigitalSkies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
