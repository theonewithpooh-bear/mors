import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavItems } from '../nav-items';
import { AnimeNavBar } from './ui/anime-navbar';

const Header = () => {
  const location = useLocation();
  const navItems = useNavItems();

  const animeNavItems = navItems
    .filter(item => !item.hidden)
    .map(item => ({
      name: item.name,
      url: item.dropdown ? '#' : item.url, // Prevent navigation for dropdown items
      icon: null
    }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnimeNavBar 
        items={animeNavItems} 
        defaultActive={location.pathname === "/" ? "home" : ""} 
        showIcons={false}
      />
    </header>
  );
};

export default Header;