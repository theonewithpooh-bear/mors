import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavItems } from '../nav-items';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = useNavItems();
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname === path;
  };

  const visibleNavItems = navItems.filter(item => !item.hidden);

  const NavItem = ({ item }) => {
    if (item.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="relative group py-2 px-4 block">
            <span className="text-sm tracking-wide uppercase flex items-center gap-2 text-gray-400 hover:text-white">
              {item.title}
              <ChevronDown className="h-4 w-4" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 bg-black/95 border border-white/10">
            {item.items.map((dropdownItem) => (
              <DropdownMenuItem key={dropdownItem.to} className="focus:bg-white/10">
                <Link
                  to={dropdownItem.to}
                  className="w-full p-2"
                >
                  <div className="text-sm font-medium text-white">{dropdownItem.title}</div>
                  <p className="text-xs text-gray-400">{dropdownItem.description}</p>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link 
        to={item.to}
        className="relative group py-2 px-4 block"
      >
        <span className={`text-sm tracking-wide uppercase flex items-center gap-2 transition-colors ${
          isActive(item.to) 
            ? 'text-white font-medium' 
            : 'text-gray-400 hover:text-white'
        }`}>
          {item.title}
        </span>
        {isActive(item.to) && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 right-0 h-px bottom-0 bg-gradient-to-r from-red-500 via-white to-green-500"
          />
        )}
      </Link>
    );
  };

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
      <SheetContent side="right" className="w-[300px] bg-black/95 border-white/10 p-0">
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
              {visibleNavItems.map((item) => (
                <li key={item.to || item.title}>
                  {item.dropdown ? (
                    <div className="px-4 py-2">
                      <div className="text-white mb-2 flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <ul className="pl-6 space-y-2">
                        {item.items.map((dropdownItem) => (
                          <li key={dropdownItem.to}>
                            <Link
                              to={dropdownItem.to}
                              className="text-gray-400 hover:text-white text-sm block py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link 
                      to={item.to}
                      className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md transition-colors ${
                        isActive(item.to) 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && <span className="w-5">{item.icon}</span>}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:justify-center relative">
          <MobileNav />
          
          <nav className="hidden md:block">
            <ul className="flex space-x-12">
              {visibleNavItems.map((item) => (
                <li key={item.to || item.title}>
                  <NavItem item={item} />
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