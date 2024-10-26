import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
          mors
        </Link>
        <ul className="flex space-x-12">
          <li>
            <Link to="/" className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
              home
            </Link>
          </li>
          <li>
            <Link to="/learn-more" className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
              learn more
            </Link>
          </li>
          <li>
            <Link to="/get-involved" className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
              get involved
            </Link>
          </li>
          <li>
            <Link to="/subject-reforms" className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
              subject reforms
            </Link>
          </li>
          <li>
            <Link to="/communications" className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
              communications
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </motion.nav>
);

export default Header;