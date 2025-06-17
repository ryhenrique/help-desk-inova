
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onVisibilityChange?: (isVisible: boolean) => void
}

export function NavBar({ items, className, onVisibilityChange }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Se estiver no topo da página, sempre mostra a navbar
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else {
        // Se rolando para baixo, esconde; se para cima, mostra
        setIsVisible(currentScrollY < lastScrollY)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Notifica o componente pai sobre mudanças de visibilidade
  useEffect(() => {
    if (onVisibilityChange) {
      onVisibilityChange(isVisible)
    }
  }, [isVisible, onVisibilityChange])

  const handleClick = (itemName: string, url: string) => {
    setActiveTab(itemName)
    if (url.startsWith('#')) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="fixed top-2 sm:top-4 lg:top-6 left-1/2 -translate-x-1/2 z-40 w-fit px-2 sm:px-0">
      <motion.div
        className={cn(
          "transition-all duration-300",
          className,
        )}
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-600/60 py-1 px-1 rounded-full shadow-lg backdrop-blur-sm">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <button
                key={item.name}
                onClick={() => handleClick(item.name, item.url)}
                className={cn(
                  "relative cursor-pointer text-xs sm:text-sm font-semibold px-2 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full transition-colors",
                  "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400",
                  isActive && "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400",
                )}
              >
                <span className="hidden sm:inline text-xs sm:text-sm">{item.name}</span>
                <span className="sm:hidden">
                  <Icon size={16} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-blue-500/10 dark:bg-blue-400/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            )
          })}
          
          {/* Theme Toggle */}
          <div className="ml-1 sm:ml-2 pl-1 sm:pl-2 border-l border-slate-200 dark:border-slate-600">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
