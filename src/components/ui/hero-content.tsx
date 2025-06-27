
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/ui/typewriter-text';

interface HeroContentProps {
  onSupportClick: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onSupportClick }) => {
  const typewriterWords = [
    "Tecnologia da Informação",
    "Suporte Especializado", 
    "Infraestrutura Robusta",
    "Soluções Personalizadas"
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="text-center mb-16 sm:mb-20 lg:mb-24 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center tracking-tight mb-6"
              style={{ color: 'var(--inova-deep-blue)' }}>
            Soluções Completas em{' '}
            <span className="block sm:inline whitespace-nowrap">
              <TypewriterText 
                words={typewriterWords}
                speed={100}
                deleteSpeed={50}
                delayBetweenWords={2000}
                className="text-gradient"
              />
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light"
             style={{ color: 'var(--inova-dark-blue-gray)' }}>
            17 anos transformando empresas com infraestrutura de TI robusta, 
            <span className="font-semibold" style={{ color: 'var(--inova-deep-blue)' }}> suporte especializado </span>
            e soluções personalizadas para o seu negócio crescer com segurança.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <Button 
            onClick={onSupportClick}
            size="lg" 
            className="flex items-center justify-center gap-3 btn-primary px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <PhoneCall className="h-5 w-5" />
            Fale Conosco Agora
          </Button>
          <Button 
            size="lg" 
            className="btn-secondary px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg"
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
