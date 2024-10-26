import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">about mors</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              transforming education through practical skills and real-world learning experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">quick links</h3>
            <ul className="space-y-3">
              <li><Link to="/learn-more" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">learn more</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">get involved</Link></li>
              <li><Link to="/subject-reforms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">subject reforms</Link></li>
              <li><Link to="/communications" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">communications</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">contact</h3>
            <p className="text-gray-400 text-sm italic">coming soon</p>
          </div>
        </div>
        
        <Separator className="bg-white/10" />
        
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} movement of real skills. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;