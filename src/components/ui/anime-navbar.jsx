
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
  const [openPopover, setOpenPopover] = useState(null);

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
          className="flex items-center gap-3 liquid-glass py-3 px-3 rounded-2xl shadow-2xl relative overflow-hidden animate-glass-shimmer"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.35) 0%,
                rgba(255, 255, 255, 0.2) 50%,
                rgba(255, 255, 255, 0.15) 100%
              ),
              linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.2) 50%, 
                transparent 100%
              )
            `,
            backgroundSize: "100% 100%, 200% 100%"
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {/* Enhanced glass shimmer overlay */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
              animation: "glass-shimmer 4s infinite linear"
            }}
          />
          
          {items.map((item) => {
            const isActive = activeTab === item.name;
            const isHovered = hoveredTab === item.name;

            if (item.dropdown) {
              return (
                <Popover 
                  key={item.name} 
                  open={openPopover === item.name} 
                  onOpenChange={(open) => setOpenPopover(open ? item.name : null)}
                >
                  <PopoverTrigger asChild>
                    <div
                      onMouseEnter={() => {
                        setHoveredTab(item.name);
                        setOpenPopover(item.name);
                      }}
                      onMouseLeave={() => {
                        setHoveredTab(null);
                        // Small delay to allow moving to dropdown content
                        setTimeout(() => {
                          setOpenPopover(null);
                        }, 150);
                      }}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 z-10",
                        "text-white/80 hover:text-white backdrop-blur-sm",
                        isActive && "text-white"
                      )}
                    >
                      <span className="relative z-20">{item.name}</span>
                      {isHovered && !isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-white/15 rounded-xl backdrop-blur-sm border border-white/20 -z-10"
                        />
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="popover-content liquid-glass w-64 p-2 rounded-xl shadow-2xl border-white/30"
                    sideOffset={8}
                    onMouseEnter={() => setOpenPopover(item.name)}
                    onMouseLeave={() => setOpenPopover(null)}
                  >
                    <div className="flex flex-col space-y-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.url}
                          className="px-4 py-2 rounded-lg hover:bg-white/15 transition-colors text-sm text-white/80 hover:text-white backdrop-blur-sm"
                          onClick={() => setOpenPopover(null)}
                        >
                          <div className="font-medium">{subItem.name}</div>
                          {subItem.description && (
                            <div className="text-xs text-white/60">{subItem.description}</div>
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
                  "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 z-10",
                  "text-white/80 hover:text-white backdrop-blur-sm",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.4, 0.6, 0.4],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-white/30 rounded-xl backdrop-blur-md border border-white/40" />
                    <div className="absolute inset-[-2px] bg-white/20 rounded-xl blur-sm" />
                    <div className="absolute inset-[-4px] bg-white/15 rounded-xl blur-md" />
                    <div className="absolute inset-[-6px] bg-white/10 rounded-xl blur-lg" />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-xl"
                      style={{
                        animation: "shine 3s ease-in-out infinite"
                      }}
                    />
                  </motion.div>
                )}

                <span className="relative z-20">
                  {item.name}
                </span>
          
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/15 rounded-xl backdrop-blur-sm border border-white/20 -z-10"
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
