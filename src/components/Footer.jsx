import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">about mors</h3>
            <p className="text-base text-white/60 leading-relaxed max-w-md">
              transforming education through practical skills and real-world learning experiences.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">quick links</h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link to="/learn-more" className="text-white/60 hover:text-white transition-colors duration-300">
                    learn more
                  </Link>
                </li>
                <li>
                  <Link to="/get-involved" className="text-white/60 hover:text-white transition-colors duration-300">
                    get involved
                  </Link>
                </li>
                <li>
                  <Link to="/subject-reforms" className="text-white/60 hover:text-white transition-colors duration-300">
                    subject reforms
                  </Link>
                </li>
                <li>
                  <Link to="/communications" className="text-white/60 hover:text-white transition-colors duration-300">
                    communications
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">contact</h3>
            <p className="text-white/60 italic">coming soon</p>
          </div>
        </div>
        
        <Separator className="my-16 bg-white/5" />
        
        <div className="text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} movement of real skills. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;