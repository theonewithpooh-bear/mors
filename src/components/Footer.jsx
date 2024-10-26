import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
      
      <div className="relative container mx-auto px-6 py-16">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-semibold text-white mb-4">explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/learn-more" className="text-sm text-gray-400 hover:text-white transition-colors">
                  learn more
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-sm text-gray-400 hover:text-white transition-colors">
                  get involved
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">reforms</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/subject-reforms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  subject reforms
                </Link>
              </li>
              <li>
                <Link to="/communications" className="text-sm text-gray-400 hover:text-white transition-colors">
                  communications
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">about</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-400">
                  transforming education through practical skills
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} movement of real skills. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;