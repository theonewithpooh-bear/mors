import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavItems } from '../nav-items';
import { Menu, X, Snowflake } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = useNavItems();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    // Special case for home page
    if (path === '/') {
      return location.pathname === '/';
    }
    // For other routes, ensure exact matches or proper parent/child relationships
    if (location.pathname === path) {
      return true;
    }
    // Check if it's a parent route with a child
    if (location.pathname.startsWith(path + '/')) {
      return true;
    }
    return false;
  };

  const visibleNavItems = navItems.filter(item => !item.hidden);

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black/95 border-white/10 p-0 backdrop-blur-md">
        <div className="flex flex-col h-full">
          <div className="px-6 py-4 border-b border-white/10">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)} 
              className="absolute right-4 top-4 hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
          <nav className="px-6 py-8">
            <ul className="space-y-4">
              {visibleNavItems.map(({ to, title, icon }) => (
                <li key={to}>
                  <Link 
                    to={to}
                    className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md transition-colors ${
                      isActive(to) 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {icon && <span className="w-5">{icon}</span>}
                    <span className="ml-2">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/5 supports-[backdrop-filter]:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:justify-center">
          <MobileNav />
          
          <nav className="hidden md:block">
            <ul className="flex space-x-12">
              {visibleNavItems.map(({ to, title }) => (
                <li key={to}>
                  <Link 
                    to={to}
                    className="relative group py-2 px-4 block"
                  >
                    <span className={`text-sm tracking-wide uppercase flex items-center gap-2 transition-colors ${
                      isActive(to) 
                        ? 'text-white font-medium' 
                        : 'text-gray-400 hover:text-white'
                    }`}>
                      {title}
                      <Snowflake className={`w-4 h-4 ${isActive(to) ? 'text-red-400' : 'text-green-400'} animate-pulse`} />
                    </span>
                    {isActive(to) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-px bottom-0 bg-gradient-to-r from-red-500 via-white to-green-500"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;