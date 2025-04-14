
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
    <div className={cn("fixed top-0 left-0 right-0 z-[999]", className)}>
      <div className="flex justify-center pt-6">
        <motion.div 
          className="flex items-center gap-3 glass-morphism py-2 px-2 rounded-full shadow-lg relative"
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
                        setTimeout(() => {
                          if (!document.querySelector(':hover > .popover-content')) {
                            setOpenPopover(false);
                          }
                        }, 100);
                      }}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                        "text-black/90 hover:text-black",
                        isActive && "text-black"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isHovered && !isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-white/30 rounded-full -z-10"
                        />
                      )}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="popover-content neo-blur w-64 p-2 rounded-lg shadow-xl"
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
                  "text-black/90 hover:text-black",
                  isActive && "text-black"
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
                    <div className="absolute inset-0 bg-white/40 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-white/30 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-white/25 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-white/15 rounded-full blur-3xl" />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20"
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
                      className="absolute inset-0 bg-white/30 rounded-full -z-10"
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
