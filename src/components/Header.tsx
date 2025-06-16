
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import TypewriterText from '@/components/ui/typewriter-text';
import AnimatedBackground from '@/components/ui/animated-background';
import SupportButton from '@/components/ui/support-button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/components/ui/theme-provider';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

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

  // Determina se deve usar logo branca baseado no tema
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const logoSrc = "/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png";

  return (
    <>
      <AnimatedBackground />
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl backdrop-brightness-150 border-b border-white/20 dark:border-slate-600/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logoSrc}
                alt="Help Desk Inova" 
                className={`h-8 w-auto drop-shadow-lg ${isDarkMode ? 'brightness-0 invert' : ''}`}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium drop-shadow-sm">
                Início
              </a>
              <a href="#services" className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium drop-shadow-sm">
                Serviços
              </a>
              <a href="#tutorials" className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium drop-shadow-sm">
                Artigos
              </a>
              <a href="#contact" className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium drop-shadow-sm">
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
              <SheetContent side="right" className="w-80 bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl backdrop-brightness-150">
                <div className="flex flex-col space-y-6 pt-6">
                  <a
                    href="#home"
                    className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg drop-shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Início
                  </a>
                  <a
                    href="#services"
                    className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg drop-shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Serviços
                  </a>
                  <a
                    href="#tutorials"
                    className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg drop-shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Artigos
                  </a>
                  <a
                    href="#contact"
                    className="text-slate-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg drop-shadow-sm"
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
              <Card className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl backdrop-brightness-150 border border-white/20 dark:border-slate-600/20 shadow-2xl">
                <CardContent className="p-8">
                  {/* Main Heading with Typewriter - Fixed Height Container */}
                  <div className="space-y-4">
                    <div className="min-h-[200px] md:min-h-[240px] lg:min-h-[280px] flex items-center">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-600 dark:text-blue-400 drop-shadow-lg">
                        <TypewriterText 
                          words={phrases}
                          speed={80}
                          deleteSpeed={40}
                          delayBetweenWords={2500}
                        />
                      </h1>
                    </div>
                    
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-xl drop-shadow-sm">
                      Transformamos desafios tecnológicos em soluções eficientes. 
                      Nossa equipe especializada oferece suporte completo para sua empresa.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SupportButton onClick={handleSupportClick}>
                      Fale Conosco
                    </SupportButton>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-white/30 dark:border-slate-500/30 text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-slate-800/20 px-6 py-3 font-medium rounded-lg transition-all duration-200 backdrop-blur-sm"
                    >
                      Explorar Serviços
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Logo and Visual Elements */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Main Logo Card */}
                <Card className="relative z-10 bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl backdrop-brightness-150 border border-white/20 dark:border-slate-600/20 shadow-2xl">
                  <CardContent className="p-8">
                    <img 
                      src={logoSrc}
                      alt="Help Desk Inova" 
                      className={`h-24 md:h-32 w-auto mx-auto drop-shadow-2xl ${isDarkMode ? 'brightness-0 invert' : ''}`}
                    />
                  </CardContent>
                </Card>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100/30 dark:bg-blue-900/30 backdrop-blur-sm rounded-lg animate-float opacity-60 shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-50/30 dark:bg-blue-900/20 backdrop-blur-sm rounded-full animate-pulse opacity-40 shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-200/30 dark:bg-blue-800/30 backdrop-blur-sm rounded-md animate-bounce opacity-50 shadow-lg" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -top-2 left-1/3 w-4 h-4 bg-indigo-100/30 dark:bg-indigo-900/30 backdrop-blur-sm rounded-full animate-ping opacity-30 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
