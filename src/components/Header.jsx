import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-border/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-center">
        <ul className="flex space-x-8">
          <li><Link to="/" className="nav-link text-gray-200 hover:text-white">home</Link></li>
          <li><Link to="/learn-more" className="nav-link text-gray-200 hover:text-white">learn more</Link></li>
          <li><Link to="/get-involved" className="nav-link text-gray-200 hover:text-white">get involved</Link></li>
          <li><Link to="/subject-reforms" className="nav-link text-gray-200 hover:text-white">subject reforms</Link></li>
          <li><Link to="/communications" className="nav-link text-gray-200 hover:text-white">communications</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;