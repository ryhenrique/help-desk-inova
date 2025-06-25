
"use client"

import React, { useEffect, useState } from "react"
import { LucideIcon } from "lucide-react"
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface AnimatedNavBarProps {
  items: NavItem[]
  className?: string
  onVisibilityChange?: (isVisible: boolean) => void
}

export function AnimatedNavBar({ items, className, onVisibilityChange }: AnimatedNavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else {
        setIsVisible(currentScrollY < lastScrollY)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

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

  const getActiveIndex = () => {
    return items.findIndex(item => item.name === activeTab)
  }

  return (
    <>
      <style>{`
        .nav-outline {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .nav-rect {
          stroke-dashoffset: 5;
          stroke-dasharray: 0 0 10 40 10 40;
          transition: 0.5s;
          stroke: rgba(46, 142, 255, 0.8);
        }

        .dark .nav-rect {
          stroke: rgba(59, 130, 246, 0.8);
        }

        .nav-container {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          padding: 0.5em;
          border-radius: 8px;
        }

        .dark .nav-container {
          background: rgba(0, 0, 0, 0.2);
        }

        .nav-container:hover .nav-outline .nav-rect {
          transition: 999999s;
          stroke-dashoffset: 1;
          stroke-dasharray: 0;
        }

        .nav-btn {
          padding: 0.5em 1.5em;
          color: #1f2937;
          cursor: pointer;
          transition: 0.1s;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
        }

        .dark .nav-btn {
          color: #f3f4f6;
        }

        .nav-btn:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .nav-btn.active {
          background: rgba(59, 130, 246, 0.2);
          color: #2563eb;
        }

        .dark .nav-btn.active {
          color: #60a5fa;
        }

        .nav-btn:nth-child(1):hover ~ svg .nav-rect {
          stroke-dashoffset: 0;
          stroke-dasharray: 0 2 8 73.3 8 10.7;
        }

        .nav-btn:nth-child(2):hover ~ svg .nav-rect {
          stroke-dashoffset: 0;
          stroke-dasharray: 0 12.6 9.5 49.3 9.5 31.6;
        }

        .nav-btn:nth-child(3):hover ~ svg .nav-rect {
          stroke-dashoffset: 0;
          stroke-dasharray: 0 24.5 8.5 27.5 8.5 55.5;
        }

        .nav-btn:nth-child(4):hover ~ svg .nav-rect {
          stroke-dashoffset: 0;
          stroke-dasharray: 0 34.7 6.9 10.2 6.9 76;
        }

        .nav-btn:hover ~ .nav-outline .nav-rect {
          stroke-dashoffset: 0;
          stroke-dasharray: 0 0 10 40 10 40;
          transition: 0.5s !important;
        }

        @media (max-width: 768px) {
          .nav-btn {
            padding: 0.4em 1em;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .nav-btn {
            padding: 0.3em 0.8em;
            font-size: 10px;
          }
        }
      `}</style>
      
      <div className="fixed top-2 sm:top-4 lg:top-6 left-1/2 -translate-x-1/2 z-40 w-fit px-2 sm:px-0">
        <div
          className={`transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16 pointer-events-none'
          }`}
        >
          <div className="nav relative w-[320px] sm:w-[400px] h-[50px] sm:h-[60px]">
            <div className="nav-container">
              {items.map((item, index) => (
                <div
                  key={item.name}
                  onClick={() => handleClick(item.name, item.url)}
                  className={`nav-btn ${activeTab === item.name ? 'active' : ''}`}
                >
                  <span className="hidden sm:inline">{item.name}</span>
                  <span className="sm:hidden">
                    <item.icon size={16} strokeWidth={2.5} />
                  </span>
                </div>
              ))}
              
              {/* Theme Toggle */}
              <div className="ml-1 sm:ml-2 pl-1 sm:pl-2 border-l border-slate-300 dark:border-slate-600">
                <ThemeToggle />
              </div>
              
              <svg
                className="nav-outline"
                overflow="visible"
                width="100%"
                height="100%"
                viewBox="0 0 400 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="nav-rect"
                  pathLength="100"
                  x="0"
                  y="0"
                  width="400"
                  height="60"
                  fill="transparent"
                  strokeWidth="3"
                  rx="8"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
