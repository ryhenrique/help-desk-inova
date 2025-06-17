
"use client";

import { MenuIcon, Headphones } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/components/ui/theme-provider';
import { useMemo } from 'react';

interface ModernNavbarProps {
  onSupportClick: () => void;
}

export const ModernNavbar = ({ onSupportClick }: ModernNavbarProps) => {
  const { theme } = useTheme();

  const isDarkMode = useMemo(() => 
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
    [theme]
  );

  const services = [
    {
      title: "Suporte Técnico",
      description: "Assistência especializada em TI",
      href: "#services",
    },
    {
      title: "Consultoria",
      description: "Análise e otimização de sistemas",
      href: "#services",
    },
    {
      title: "Manutenção",
      description: "Cuidados preventivos e corretivos",
      href: "#services",
    },
    {
      title: "Treinamento",
      description: "Capacitação em tecnologia",
      href: "#services",
    },
    {
      title: "Segurança Digital",
      description: "Proteção de dados e sistemas",
      href: "#services",
    },
    {
      title: "Cloud Solutions",
      description: "Soluções em nuvem personalizadas",
      href: "#services",
    },
  ];

  const handleNavClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200/30 dark:border-slate-700/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <img 
              src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png"
              alt="Help Desk Inova" 
              className="h-8 sm:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                >
                  Início
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] xl:w-[600px] grid-cols-2 p-4 gap-2">
                    {services.map((service, index) => (
                      <NavigationMenuLink
                        href={service.href}
                        key={index}
                        className="rounded-lg p-4 transition-colors hover:bg-muted/70 block"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(service.href);
                        }}
                      >
                        <div>
                          <p className="mb-2 font-semibold text-foreground text-sm leading-none">
                            {service.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                >
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex flex-shrink-0">
            <ThemeToggle />
            <Button
              onClick={onSupportClick}
              size="sm"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 text-sm font-semibold whitespace-nowrap rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Headphones className="h-4 w-4 flex-shrink-0" />
              <span className="hidden xl:inline">Suporte Técnico</span>
              <span className="xl:hidden">Suporte</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a
                      href="#home"
                      className="flex items-center gap-3 justify-center"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#home');
                      }}
                    >
                      <img 
                        src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png"
                        alt="Help Desk Inova" 
                        className="h-10 w-auto"
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col p-4">
                  <Accordion type="single" collapsible className="mt-6 mb-4">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-lg hover:no-underline font-semibold">
                        Serviços
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-3 mt-2">
                          {services.map((service, index) => (
                            <a
                              href={service.href}
                              key={index}
                              className="rounded-lg p-4 transition-colors hover:bg-muted/70 block"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(service.href);
                              }}
                            >
                              <div>
                                <p className="mb-2 font-semibold text-foreground">
                                  {service.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {service.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <div className="flex flex-col gap-6">
                    <a 
                      href="#home" 
                      className="font-semibold text-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#home');
                      }}
                    >
                      Início
                    </a>
                    <a 
                      href="#contact" 
                      className="font-semibold text-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#contact');
                      }}
                    >
                      Contato
                    </a>
                  </div>
                  
                  <div className="mt-8 flex flex-col gap-4">
                    <Button
                      onClick={onSupportClick}
                      className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 font-semibold rounded-lg shadow-lg"
                    >
                      <Headphones className="h-5 w-5" />
                      Suporte Técnico
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  );
};
