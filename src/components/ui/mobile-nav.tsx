
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useNavItems } from '../../nav-items';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const navigate = useNavigate();
  const navItems = useNavItems().filter(item => !item.hidden);

  const handleNavigation = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 backdrop-blur-md bg-black/50"
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 250,
              mass: 0.85,
              delay: 0.05
            }}
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm neo-blur shadow-2xl"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -inset-[200px] opacity-30 blur-3xl">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1.5 }}
                  className="absolute top-1/4 right-1/2 w-96 h-96 bg-white/20 rounded-full animate-glow-dance"
                ></motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full animate-glow-dance" 
                  style={{ animationDelay: "-2s" }}
                ></motion.div>
              </div>
            </div>
            
            <motion.button 
              onClick={onClose}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              className="absolute top-4 right-4 text-black/70 hover:text-black transition-all duration-300 p-2 rounded-full bg-black/5 hover:bg-black/15 backdrop-blur-sm border border-black/10 shadow-lg z-10"
              aria-label="Close menu"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            <div className="h-full flex flex-col items-start justify-center px-8 space-y-7 relative pt-16">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ 
                    delay: 0.15 + index * 0.05, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 250,
                    damping: 20
                  }}
                  onClick={() => handleNavigation(item.url)}
                  className="text-lg tracking-wider text-black/70 hover:text-black transition-all duration-300 relative group uppercase text-left w-full"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.span 
                      className="w-0 h-[1px] bg-black/50"
                      whileHover={{ width: "20px" }}
                      transition={{ duration: 0.2 }}
                    ></motion.span>
                    <span>{item.name}</span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-black/40 via-black/20 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
