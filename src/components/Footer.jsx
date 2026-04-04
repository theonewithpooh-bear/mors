import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-secondary/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { to: "/learn-more", label: "learn more" },
                { to: "/get-involved", label: "get involved" },
                { to: "/communications", label: "communications" },
                { to: "/press-office", label: "press office" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { to: "/privacy-policy", label: "privacy policy" },
                { to: "/ethics", label: "ethical principles" },
                { to: "/cookies-policy", label: "cookies policy" },
                { to: "/ai-usage", label: "AI usage" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground mb-3">Social media accounts coming soon</p>
            <a 
              href="mailto:info@mors.org.uk" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-background border border-border hover:border-foreground/20 transition-all duration-200 group"
            >
              <Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">info@mors.org.uk</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} MORS. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
