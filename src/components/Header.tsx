
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import TypewriterText from '@/components/ui/typewriter-text';
import SupportButton from '@/components/ui/support-button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/components/ui/theme-provider';
import { motion } from 'framer-motion';

// Simplified Background Pattern - Using only one optimized pattern
function OptimizedPaths() {
  const paths = []
  
  // Reduced number of paths for better performance
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 6; y++) {
      if (Math.random() > 0.8) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * 80},${y * 80} L${(x + 1) * 80},${y * 80} L${(x + 1) * 80},${(y + 1) * 80} L${x * 80},${(y + 1) * 80} Z`,
          delay: Math.random() * 3,
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 10,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

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

  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const logoSrc = "/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png";

  return (
    <>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-600/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logoSrc}
                alt="Help Desk Inova" 
                className={`h-8 w-auto ${isDarkMode ? 'brightness-0 invert' : ''}`}
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

      {/* Hero Section with Optimized Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Simplified Animated Background */}
        <div className="absolute inset-0 text-slate-400/20 dark:text-slate-500/20">
          <OptimizedPaths />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/60 to-slate-100/80 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="space-y-8">
              <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl">
                <CardContent className="p-8">
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

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Logo */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                <Card className="relative z-10 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl">
                  <CardContent className="p-8">
                    <img 
                      src={logoSrc}
                      alt="Help Desk Inova" 
                      className={`h-24 md:h-32 w-auto mx-auto ${isDarkMode ? 'brightness-0 invert' : ''}`}
                    />
                  </CardContent>
                </Card>
                
                {/* Reduced floating elements for better performance */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-lg opacity-60"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-full opacity-40"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
