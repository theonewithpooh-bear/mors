import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isIndexPage = location.pathname === '/';
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#3b82f640_0%,transparent_70%)] animate-glow-dance" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 sm:mb-16">
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
              <li>
                <Link to="/articles" className="text-sm text-gray-400 hover:text-white transition-colors">
                  articles
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
              <li>
                <Link to="/cookies-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  cookies policy
                </Link>
              </li>
              <li>
                <Link to="/ai-usage" className="text-sm text-gray-400 hover:text-white transition-colors">
                  AI usage
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-white mb-4">connect</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/mors_uk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <a 
                href="mailto:info@mors.org.uk" 
                className="flex items-center space-x-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10 w-fit hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@mors.org.uk</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} MORS. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;