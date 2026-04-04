import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "home" }: NavBarProps) {
  const location = useLocation()
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-5 left-0 right-0 z-[9999] px-4">
      <div className="flex justify-center pt-4">
        <motion.div 
          className="flex items-center gap-0.5 glass-morphism py-1.5 px-1.5 rounded-full relative max-w-full overflow-x-auto scrollbar-hide"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item) => {
            const isActive = activeTab === item.name.toLowerCase()
            const isHovered = hoveredTab === item.name

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name.toLowerCase())}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-xs sm:text-sm font-medium px-3 sm:px-4 lg:px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap",
                  "text-muted-foreground hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-foreground/[0.06] -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Hover indicator */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 bg-foreground/[0.03] rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{item.name}</span>

                {/* Active dot */}
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
