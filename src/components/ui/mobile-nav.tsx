
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 backdrop-blur-md bg-black/80"
        >
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-black/90 border-l border-white/10 shadow-xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            <div className="h-full flex flex-col items-start justify-center px-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => handleNavigation(item.url)}
                  className="text-lg tracking-wider text-white/70 hover:text-white transition-colors relative group uppercase text-left w-full"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-0 h-[1px] bg-white/50 group-hover:w-4 transition-all duration-300"></span>
                    <span>{item.name}</span>
                  </div>
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
