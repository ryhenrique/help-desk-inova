
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface CustomNavbarProps {
  onVisibilityChange?: (isVisible: boolean) => void
}

export function CustomNavbar({ onVisibilityChange }: CustomNavbarProps) {
  const [activeButton, setActiveButton] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    { name: 'Início', url: '#home', icon: Home },
    { name: 'Serviços', url: '#services', icon: Briefcase },
    { name: 'Artigos', url: '#tutorials', icon: FileText },
    { name: 'Contato', url: '#contact', icon: User }
  ]

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

  const handleClick = (index: number, url: string) => {
    setActiveButton(index)
    if (url.startsWith('#')) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const getStrokeDashArray = (buttonIndex: number) => {
    switch (buttonIndex) {
      case 0: return "0 2 8 73.3 8 10.7"
      case 1: return "0 12.6 9.5 49.3 9.5 31.6"
      case 2: return "0 24.5 8.5 27.5 8.5 55.5"
      case 3: return "0 34.7 6.9 10.2 6.9 76"
      default: return "0 0 10 40 10 40"
    }
  }

  return (
    <>
      <style>{`
        .custom-nav {
          position: fixed;
          top: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 40;
          transition: all 0.3s ease;
        }

        @media (min-width: 1024px) {
          .custom-nav {
            top: 1.5rem;
          }
        }

        .nav-container {
          position: relative;
          width: clamp(280px, 80vw, 400px);
          height: clamp(50px, 12vw, 60px);
        }

        .nav-content {
          position: absolute;
          inset: 0;
          background: rgba(190, 238, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          padding: 0.5em;
          border-radius: 12px;
        }

        .dark .nav-content {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(71, 85, 105, 0.3);
        }

        .nav-btn {
          padding: clamp(0.3em, 2vw, 0.5em) clamp(0.8em, 3vw, 1.5em);
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: clamp(11px, 3vw, 14px);
          font-weight: 600;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .dark .nav-btn {
          color: #e2e8f0;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #1e40af;
        }

        .dark .nav-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #60a5fa;
        }

        .nav-btn-icon {
          width: clamp(14px, 4vw, 16px);
          height: clamp(14px, 4vw, 16px);
        }

        @media (max-width: 640px) {
          .nav-btn-text {
            display: none;
          }
        }

        .nav-outline {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 12px;
        }

        .nav-rect {
          stroke-dashoffset: 5;
          stroke-dasharray: 0 0 10 40 10 40;
          transition: all 0.5s ease;
          stroke: #3b82f6;
          stroke-width: 2;
          fill: transparent;
          rx: 12;
        }

        .dark .nav-rect {
          stroke: #60a5fa;
        }

        .nav-content:hover .nav-rect {
          stroke-dashoffset: 1;
          stroke-dasharray: 0;
          transition: all 999999s ease;
        }

        .theme-toggle-wrapper {
          margin-left: 0.5rem;
          padding-left: 0.5rem;
          border-left: 1px solid rgba(148, 163, 184, 0.3);
        }

        .dark .theme-toggle-wrapper {
          border-left-color: rgba(71, 85, 105, 0.5);
        }
      `}</style>
      
      <motion.div
        className="custom-nav"
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="nav-container">
          <div className="nav-content">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.name}
                  className="nav-btn"
                  onClick={() => handleClick(index, item.url)}
                  onMouseEnter={() => {
                    const rect = document.querySelector('.nav-rect') as SVGRectElement
                    if (rect) {
                      rect.style.strokeDashoffset = '0'
                      rect.style.strokeDasharray = getStrokeDashArray(index)
                      rect.style.transition = '0.5s'
                    }
                  }}
                  onMouseLeave={() => {
                    const rect = document.querySelector('.nav-rect') as SVGRectElement
                    if (rect) {
                      rect.style.strokeDashoffset = '0'
                      rect.style.strokeDasharray = '0 0 10 40 10 40'
                      rect.style.transition = '0.5s'
                    }
                  }}
                >
                  <Icon className="nav-btn-icon" />
                  <span className="nav-btn-text">{item.name}</span>
                </button>
              )
            })}
            
            <div className="theme-toggle-wrapper">
              <ThemeToggle />
            </div>
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
            />
          </svg>
        </div>
      </motion.div>
    </>
  )
}
