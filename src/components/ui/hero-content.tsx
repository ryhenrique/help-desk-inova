
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import TypewriterText from '@/components/ui/typewriter-text';
import { motion } from 'framer-motion';

interface HeroContentProps {
  onSupportClick: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onSupportClick }) => {
  const phrases = [
    "Simplifique sua TI e atendimento ao cliente",
    "Soluções Profissionais em Tecnologia", 
    "Suporte Especializado 24/7",
    "Infraestrutura de Redes Segura",
    "Transformação Digital Completa"
  ];

  const logoSrc = "/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
      {/* Hero Principal */}
      <div className="text-center mb-16 sm:mb-20 lg:mb-24 max-w-5xl mx-auto">
        {/* Logo Centralizada */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <img 
            src={logoSrc}
            alt="Help Desk Inova" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
          />
        </motion.div>

        {/* Título Principal com Typewriter */}
        <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] flex items-center justify-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 dark:text-white text-center">
            <span className="text-blue-600 dark:text-blue-400">
              <TypewriterText 
                words={phrases}
                speed={80}
                deleteSpeed={40}
                delayBetweenWords={3000}
              />
            </span>
          </h1>
        </div>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-12"
        >
          Oferecemos soluções completas em TI com assistência de primeira classe para empresas que buscam 
          excelência tecnológica e experiências excepcionais para clientes e colaboradores.
        </motion.p>

        {/* Botões de Ação Principais */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
        >
          <Button 
            onClick={onSupportClick}
            size="lg" 
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <PhoneCall className="h-5 w-5" />
            Fale Conosco
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg hover:border-blue-400 dark:hover:border-blue-500"
            onClick={() => {
              const element = document.querySelector('#services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Agendar Demo →
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
