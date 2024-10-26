import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center">
          <ul className="flex space-x-12">
            {[
              { path: "/", label: "home" },
              { path: "/learn-more", label: "learn more" },
              { path: "/get-involved", label: "get involved" },
              { path: "/subject-reforms", label: "subject reforms" },
              { path: "/communications", label: "communications" }
            ].map(({ path, label }) => (
              <li key={path}>
                <Link 
                  to={path} 
                  className="relative group py-2"
                >
                  <span className={`text-sm tracking-wide uppercase ${
                    isActive(path) 
                      ? 'text-white font-medium' 
                      : 'text-gray-400 hover:text-white transition-colors'
                  }`}>
                    {label}
                  </span>
                  {isActive(path) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-px bottom-0 bg-white"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;