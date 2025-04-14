
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

  // Check if we're on the press office page to hide navigation
  const isPressOfficePage = location.pathname === "/press-office";

  // If we're on the press office page, don't show navigation
  if (isPressOfficePage) {
    return null;
  }

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
          onClick={handleOpenMobileMenu}
          className="fixed top-6 right-6 z-50 bg-black/30 backdrop-blur-md p-3 rounded-full border border-white/10 text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 shadow-lg"
          aria-label="Open menu"
          style={{
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.05) inset"
          }}
        >
          <Menu size={22} />
        </button>
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={handleCloseMobileMenu} 
        />
      </div>
    </header>
  );
};

export default Header;
