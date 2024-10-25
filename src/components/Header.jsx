import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="bg-black bg-opacity-80 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50">
    <ul className="flex justify-center space-x-8">
      <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
      <li><Link to="/learn-more" className="hover:text-gray-300">Learn More</Link></li>
      <li><Link to="/get-involved" className="hover:text-gray-300">Get Involved</Link></li>
      <li><Link to="/subject-reforms" className="hover:text-gray-300">Subject Reforms</Link></li>
    </ul>
  </nav>
);

export default Header;