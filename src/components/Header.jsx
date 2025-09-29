
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavItems } from '../nav-items';
import { useAuth } from '../contexts/AuthContext';
import { AnimeNavBar } from './ui/anime-navbar';
import { MobileNav } from './ui/mobile-nav';
import { Button } from './ui/button';
import { Menu, LogOut, Settings } from 'lucide-react';

/**
 * Header component that provides navigation for the entire application
 * Handles both desktop and mobile navigation with special styling for specific pages
 */
const Header = () => {
  const location = useLocation();
  const navItems = useNavItems();
  const { signOut, user, profile } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Page-specific styling flags
  const isPressOfficePage = location.pathname === "/press-office";
  const isManifestoPage = location.pathname === "/manifesto";
  
  // Determine appropriate header class based on current page
  const getHeaderClass = () => {
    if (isPressOfficePage) return 'press-office-header';
    if (isManifestoPage) return 'manifesto-header';
    return '';
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const animeNavItems = navItems
    .filter(item => !item.hidden)
    .map(item => ({
      name: item.name,
      url: item.url,
      icon: null,
      dropdown: item.dropdown,
      items: item.items
    }));

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderClass()}`}>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <AnimeNavBar 
            items={animeNavItems} 
            defaultActive={location.pathname === "/" ? "home" : ""} 
            showIcons={false}
            className={`desktop-nav ${isPressOfficePage ? 'press-office-nav' : ''} ${isManifestoPage ? 'manifesto-nav' : ''}`}
          />
          {user && (
            <div className="fixed top-4 right-4 z-50 flex gap-2">
              <Button
                onClick={() => window.location.href = '/account-settings'}
                variant="outline"
                size="sm"
                className="glass-morphism text-white border-white/20 hover:bg-white/10 gap-2"
              >
                <Settings size={16} />
                Account
              </Button>
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="glass-morphism text-white border-white/20 hover:bg-white/10 gap-2"
              >
                <LogOut size={16} />
                Sign Out
              </Button>
            </div>
          )}
        </div>
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
