import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavItems } from '../nav-items';
import { AnimeNavBar } from './ui/anime-navbar';

const Header = () => {
  const location = useLocation();
  const navItems = useNavItems();

  const animeNavItems = navItems
    .filter(item => !item.hidden && !item.dropdown)
    .map(item => ({
      name: item.name,
      url: item.url,
      icon: item.icon
    }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnimeNavBar items={animeNavItems} defaultActive={location.pathname === "/" ? "home" : ""} />
    </header>
  );
};

export default Header;