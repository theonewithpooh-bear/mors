import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavItems } from '../nav-items';
import { AnimeNavBar } from './ui/anime-navbar';
import { MobileNav } from './ui/mobile-nav';
import { Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navItems = useNavItems();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const animeNavItems = navItems
    .filter(item => !item.hidden)
    .map(item => ({
      name: item.name,
      url: item.dropdown ? '#' : item.url,
      icon: null
    }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <AnimeNavBar 
          items={animeNavItems} 
          defaultActive={location.pathname === "/" ? "home" : ""} 
          showIcons={false}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed top-6 right-6 z-50 text-white/70 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;