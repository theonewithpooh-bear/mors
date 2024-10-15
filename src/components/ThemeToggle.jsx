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
    <motion.button
      onClick={toggleTheme}
      className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg w-16 h-8 flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;