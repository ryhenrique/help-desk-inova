
"use client";

import { MenuIcon, Headphones, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/components/ui/theme-provider';
import { useMemo } from 'react';

interface SyMplaNavbarProps {
  onSupportClick: () => void;
}

export const SymplaNavbar = ({ onSupportClick }: SyMplaNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme } = useTheme();

  const isDarkMode = useMemo(() => 
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
    [theme]
  );

  const services = [
    { name: "Suporte Técnico", href: "#services" },
    { name: "Consultoria", href: "#services" },
    { name: "Manutenção", href: "#services" },
    { name: "Treinamento", href: "#services" },
    { name: "Segurança Digital", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-slate-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
              >
                <img 
                  src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png"
                  alt="Help Desk Inova" 
                  className={`h-8 lg:h-10 w-auto transition-all duration-300 ${
                    isDarkMode ? 'brightness-0 invert' : ''
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
              >
                Início
              </a>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Serviços</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 py-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(service.href);
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
              >
                Contato
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <Button
                onClick={onSupportClick}
                className="hidden lg:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Headphones className="h-4 w-4" />
                <span>Suporte</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#home"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
              >
                Início
              </a>
              
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Serviços</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(service.href);
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
              >
                Contato
              </a>

              <Button
                onClick={onSupportClick}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200"
              >
                <Headphones className="h-4 w-4 mr-2" />
                Suporte Técnico
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close dropdowns */}
      {(isServicesOpen || isMobileMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsServicesOpen(false);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </>
  );
};
