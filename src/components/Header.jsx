
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavItems } from '../nav-items';
import { AnimeNavBar } from './ui/anime-navbar';
import { MobileNav } from './ui/mobile-nav';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';

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
      <div className="hidden md:flex md:items-center md:justify-between md:w-full">
        <AnimeNavBar 
          items={animeNavItems} 
          defaultActive={location.pathname === "/" ? "home" : ""} 
          showIcons={false}
        />
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-6 pt-6">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <ThemeToggle />
        </div>
        <div className="flex-1 flex justify-end">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;
