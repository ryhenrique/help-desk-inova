
"use client";

import { MenuIcon } from "lucide-react";
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

interface ModernNavbarProps {
  onSupportClick: () => void;
}

export const ModernNavbar = ({ onSupportClick }: ModernNavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);

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
    <section className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/20 dark:border-slate-700/20">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              HelpDesk Pro
            </span>
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
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {services.map((service, index) => (
                      <NavigationMenuLink
                        href={service.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(service.href);
                        }}
                      >
                        <div>
                          <p className="mb-1 font-semibold text-foreground">
                            {service.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
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
                  href="#tutorials"
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#tutorials');
                  }}
                >
                  Artigos
                </NavigationMenuLink>
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
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <Button variant="outline" onClick={onSupportClick}>
              Entrar
            </Button>
            <Button onClick={onSupportClick}>
              Suporte
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a
                      href="#home"
                      className="flex items-center gap-3"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#home');
                      }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">H</span>
                      </div>
                      <span className="text-lg font-bold tracking-tight">
                        HelpDesk Pro
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col p-4">
                  <Accordion type="single" collapsible className="mt-4 mb-2">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-base hover:no-underline">
                        Serviços
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-2">
                          {services.map((service, index) => (
                            <a
                              href={service.href}
                              key={index}
                              className="rounded-md p-3 transition-colors hover:bg-muted/70"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(service.href);
                              }}
                            >
                              <div>
                                <p className="mb-1 font-semibold text-foreground">
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
                      className="font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#home');
                      }}
                    >
                      Início
                    </a>
                    <a 
                      href="#tutorials" 
                      className="font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#tutorials');
                      }}
                    >
                      Artigos
                    </a>
                    <a 
                      href="#contact" 
                      className="font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('#contact');
                      }}
                    >
                      Contato
                    </a>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-4">
                    <Button variant="outline" onClick={onSupportClick}>
                      Entrar
                    </Button>
                    <Button onClick={onSupportClick}>
                      Suporte
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
