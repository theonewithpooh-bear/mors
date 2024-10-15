import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', isDark);
    htmlElement.classList.toggle('theme-transition', isTransitioning);
  }, [isDark, isTransitioning]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    setIsDark(!isDark);
    setTimeout(() => setIsTransitioning(false), 10000); // 10 seconds
  };

  return (
    <div className="relative">
      <motion.button
        onClick={toggleTheme}
        className={`bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg w-16 h-8 flex items-center justify-center z-10 relative ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-yellow-400" />
          ) : (
            <Sun className="w-5 h-5 text-gray-700" />
          )}
        </motion.div>
      </motion.button>
      {isTransitioning && (
        <div className="fixed top-0 left-0 w-full h-64 overflow-hidden transition-all duration-10000 ease-in-out z-50">
          <div className={`landscape ${isDark ? 'landscape-night' : 'landscape-day'}`}>
            <div className="sun-moon"></div>
            <div className="stars"></div>
            <div className="ground"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;