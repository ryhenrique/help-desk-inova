
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
      {/* Hero Principal */}
      <div className="text-center mb-16 sm:mb-20 lg:mb-24 max-w-5xl mx-auto">
        {/* Título Principal com Typewriter - Estilo Freshworks */}
        <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-center justify-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900 dark:text-white text-center tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent">
              <TypewriterText 
                words={phrases}
                speed={80}
                deleteSpeed={40}
                delayBetweenWords={3000}
              />
            </span>
          </h1>
        </div>

        {/* Subtítulo com melhor tipografia */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
            Oferecemos soluções completas em TI com assistência de primeira classe para empresas que buscam 
            <span className="font-semibold text-slate-800 dark:text-slate-200"> excelência tecnológica </span>
            e experiências excepcionais para clientes e colaboradores.
          </p>
        </motion.div>

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
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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
            Ver Nossos Serviços →
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
