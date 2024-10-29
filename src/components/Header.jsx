import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navItems } from '../nav-items';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('en');
  
  const isActive = (path) => location.pathname === path;
  const visibleNavItems = navItems.filter(item => !item.hidden);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'cy' : 'en';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  const MobileNav = () => (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black/95 border-white/10 p-0 backdrop-blur-md">
        <div className="flex flex-col h-full">
          <div className="px-6 py-4 border-b border-white/10">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="absolute right-4 top-4">
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
          <nav className="px-6 py-8">
            <ul className="space-y-4">
              {visibleNavItems.map(({ to, title, icon }) => (
                <li key={to}>
                  <Button
                    variant="ghost"
                    asChild
                    className={`flex items-center space-x-2 w-full justify-start ${
                      isActive(to) ? 'text-white' : 'text-gray-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={to}>
                      {icon && <span className="w-5">{icon}</span>}
                      <span>{title}</span>
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md backdrop-saturate-150 border-b border-white/5 supports-[backdrop-filter]:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between md:justify-center">
          <MobileNav />
          
          <ul className="hidden md:flex space-x-12">
            {visibleNavItems.map(({ to, title }) => (
              <li key={to}>
                <Button
                  variant="ghost"
                  asChild
                  className="relative group py-2"
                >
                  <Link to={to}>
                    <span className={`text-sm tracking-wide uppercase ${
                      isActive(to) 
                        ? 'text-white font-medium' 
                        : 'text-gray-400 hover:text-white transition-colors'
                    }`}>
                      {title}
                    </span>
                    {isActive(to) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-px bottom-0 bg-white"
                      />
                    )}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="absolute right-4 text-sm tracking-wide uppercase text-gray-400 hover:text-white transition-colors"
          >
            {currentLang === 'en' ? 'Cymraeg' : 'English'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;