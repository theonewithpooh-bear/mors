import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, UsersIcon, MessageSquareIcon, FolderIcon, Globe2Icon, NewspaperIcon, GraduationCapIcon } from "lucide-react";
import { useNavItems } from '../nav-items';
import { AnimeNavBar } from './ui/anime-navbar';

const Header = () => {
  const location = useLocation();
  const navItems = useNavItems();

  const animeNavItems = navItems
    .filter(item => !item.hidden)
    .map(item => ({
      name: item.title,
      url: item.to,
      icon: item.icon || HomeIcon
    }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnimeNavBar items={animeNavItems} defaultActive="home" />
    </header>
  );
};

export default Header;