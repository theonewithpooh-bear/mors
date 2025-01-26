import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function AnimeNavBar({ items, className, defaultActive = "Home", showIcons = true }) {
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [isMobile, setIsMobile] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="flex justify-center pt-2">
        <motion.div 
          className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const isActive = activeTab === item.name;
            const isHovered = hoveredTab === item.name;

            if (item.dropdown) {
              return (
                <Popover key={item.name} open={openPopover} onOpenChange={setOpenPopover}>
                  <PopoverTrigger asChild>
                    <button
                      onMouseEnter={() => {
                        setHoveredTab(item.name);
                        setOpenPopover(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredTab(null);
                        // Don't close immediately to allow moving to content
                        setTimeout(() => {
                          if (!document.querySelector(':hover > .popover-content')) {
                            setOpenPopover(false);
                          }
                        }, 100);
                      }}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                        "text-white/70 hover:text-white",
                        isActive && "text-white"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isHovered && !isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        />
                      )}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="popover-content w-64 bg-black/90 border border-white/10 backdrop-blur-lg p-2 rounded-lg shadow-xl"
                    sideOffset={8}
                    onMouseEnter={() => setOpenPopover(true)}
                    onMouseLeave={() => setOpenPopover(false)}
                  >
                    <div className="flex flex-col space-y-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.url}
                          className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors text-sm text-white/70 hover:text-white"
                        >
                          <div className="font-medium">{subItem.name}</div>
                          {subItem.description && (
                            <div className="text-xs text-white/50">{subItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                      style={{
                        animation: "shine 3s ease-in-out infinite"
                      }}
                    />
                  </motion.div>
                )}

                <span className="relative z-10">
                  {item.name}
                </span>
          
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}