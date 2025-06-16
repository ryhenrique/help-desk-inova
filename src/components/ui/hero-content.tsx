
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TypewriterText from '@/components/ui/typewriter-text';
import SupportButton from '@/components/ui/support-button';
import { useTheme } from '@/components/ui/theme-provider';
import { motion } from 'framer-motion';

interface HeroContentProps {
  onSupportClick: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onSupportClick }) => {
  const { theme } = useTheme();

  const phrases = [
    "Suporte Técnico Especializado",
    "Soluções Profissionais em TI", 
    "Atendimento Personalizado 24/7",
    "Resultados Garantidos",
    "Sua Tecnologia em Boas Mãos"
  ];

  const isDarkMode = React.useMemo(() => 
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
    [theme]
  );

  const logoSrc = "/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png";

  return (
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
                <SupportButton onClick={onSupportClick}>
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
  );
};

export default HeroContent;
