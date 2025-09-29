import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isIndexPage = location.pathname === '/';
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#3b82f640_0%,transparent_70%)] animate-glow-dance" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 sm:mb-16">
          <div>
            <h3 className="font-semibold text-black mb-4">quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/learn-more" 
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                  aria-label="learn more about MORS education reform"
                >
                  learn more
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-sm text-gray-600 hover:text-black transition-colors">
                  get involved
                </Link>
              </li>
              <li>
                <Link to="/communications" className="text-sm text-gray-600 hover:text-black transition-colors">
                  communications
                </Link>
              </li>
              <li>
                <Link to="/press-office" className="text-sm text-gray-600 hover:text-black transition-colors">
                  press office
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-4">legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-black transition-colors">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link to="/ethics" className="text-sm text-gray-600 hover:text-black transition-colors">
                  ethical principles
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="text-sm text-gray-600 hover:text-black transition-colors">
                  cookies policy
                </Link>
              </li>
              <li>
                <Link to="/ai-usage" className="text-sm text-gray-600 hover:text-black transition-colors">
                  AI usage
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-black mb-4">connect</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500">
                  Social media accounts coming soon
                </span>
              </div>
              <a 
                href="mailto:info@mors.org.uk" 
                className="flex items-center space-x-2 px-4 py-3 bg-black/5 rounded-lg border border-black/10 w-fit hover:bg-black/10 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">info@mors.org.uk</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} MORS. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
