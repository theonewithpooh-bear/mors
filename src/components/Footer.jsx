import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">about mors</h3>
            <p className="text-gray-400 text-sm">
              transforming education through practical skills and real-world learning experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">quick links</h3>
            <ul className="space-y-2">
              <li><Link to="/learn-more" className="text-gray-400 hover:text-white text-sm">learn more</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white text-sm">get involved</Link></li>
              <li><Link to="/subject-reforms" className="text-gray-400 hover:text-white text-sm">subject reforms</Link></li>
              <li><Link to="/communications" className="text-gray-400 hover:text-white text-sm">communications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">contact</h3>
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