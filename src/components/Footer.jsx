import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isIndexPage = location.pathname === '/';
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#3b82f640_0%,transparent_70%)] animate-glow-dance" />
      </div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-16">
        {isIndexPage && (
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
              join the movement
            </h2>
            <p className="text-gray-400 max-w-md mb-8">
              be part of the educational revolution. together, we can transform how skills are taught and learned.
            </p>
            <Link to="/get-involved">
              <Button variant="outline" className="rounded-full px-8">
                get involved
              </Button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-semibold text-white mb-4">quick links</h3>
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
              <li>
                <Link to="/communications" className="text-sm text-gray-400 hover:text-white transition-colors">
                  communications
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link to="/ethics" className="text-sm text-gray-400 hover:text-white transition-colors">
                  ethical principles
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-white mb-4">connect</h3>
            <div className="space-y-4">
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
              <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10 max-w-md">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm whitespace-nowrap">
                  <span className="text-gray-400">info@mors.org.uk</span>
                  <span className="text-yellow-500/80 ml-2 text-xs">(currently being set up)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

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