
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import TypewriterText from '@/components/ui/typewriter-text';
import AnimatedBackground from '@/components/ui/animated-background';
import SupportButton from '@/components/ui/support-button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phrases = [
    "Suporte Técnico Especializado",
    "Soluções Profissionais em TI", 
    "Atendimento Personalizado 24/7",
    "Resultados Garantidos",
    "Sua Tecnologia em Boas Mãos"
  ];

  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <AnimatedBackground />
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/85 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-600/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
                alt="Help Desk Inova" 
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Início
              </a>
              <a href="#services" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Serviços
              </a>
              <a href="#tutorials" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Artigos
              </a>
              <a href="#contact" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Contato
              </a>
            </nav>

            {/* Right side - Theme Toggle and CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <SupportButton onClick={handleSupportClick}>
                Suporte
              </SupportButton>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                <div className="flex flex-col space-y-6 pt-6">
                  <a
                    href="#home"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Início
                  </a>
                  <a
                    href="#services"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Serviços
                  </a>
                  <a
                    href="#tutorials"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Artigos
                  </a>
                  <a
                    href="#contact"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Contato
                  </a>
                  <div className="flex items-center justify-between pt-4">
                    <ThemeToggle />
                    <SupportButton onClick={handleSupportClick}>
                      Suporte
                    </SupportButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading with Typewriter - Fixed Height Container */}
              <div className="space-y-4">
                <div className="min-h-[200px] md:min-h-[240px] lg:min-h-[280px] flex items-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-600 dark:text-blue-400">
                    <TypewriterText 
                      words={phrases}
                      speed={80}
                      deleteSpeed={40}
                      delayBetweenWords={2500}
                    />
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Transformamos desafios tecnológicos em soluções eficientes. 
                  Nossa equipe especializada oferece suporte completo para sua empresa.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SupportButton onClick={handleSupportClick}>
                  Fale Conosco
                </SupportButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 font-medium rounded-lg transition-all duration-200"
                >
                  Explorar Serviços
                </Button>
              </div>
            </div>

            {/* Right Content - Logo and Visual Elements */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Main Logo */}
                <div className="relative z-10 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 dark:border-slate-600/50">
                  <img 
                    src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
                    alt="Help Desk Inova" 
                    className="h-24 md:h-32 w-auto mx-auto"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-lg animate-float opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-full animate-pulse opacity-40"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-200 dark:bg-blue-800/60 rounded-md animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -top-2 left-1/3 w-4 h-4 bg-indigo-100 dark:bg-indigo-900/60 rounded-full animate-ping opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
