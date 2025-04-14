
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

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
          className="desktop-nav"
        />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button 
          onClick={handleOpenMobileMenu}
          className="fixed top-4 right-4 z-50 glass-morphism p-3 rounded-full text-white/70 hover:text-white transition-all duration-300 hover:bg-white/10 shadow-lg"
          aria-label="Open menu"
        >
          <Menu size={22} strokeWidth={2.5} />
        </button>
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={handleCloseMobileMenu} 
        />
      </div>
    </header>
  );
}

export default Header;
