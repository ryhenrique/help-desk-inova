
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroContentProps {
  onSupportClick: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onSupportClick }) => {
  const scrollToProblems = () => {
    const element = document.querySelector('#helpdesk-problems');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="text-center mb-16 sm:mb-20 lg:mb-24 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 dark:text-white text-center tracking-tight mb-6">
            <span className="text-blue-600 dark:text-blue-400">Tecnologia sem preocupações,</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200">atendimento humano</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-5xl mx-auto font-light">
            Apresente sua empresa ao futuro com 
            <span className="font-semibold text-slate-800 dark:text-slate-200"> soluções de TI completas, gestão inteligente e suporte técnico especializado </span>
            — tudo com um custo mensal fixo.
          </p>
        </motion.div>

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
            <Calendar className="h-5 w-5" />
            Agendar Reunião
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg hover:border-blue-400 dark:hover:border-blue-500"
            onClick={scrollToProblems}
          >
            Conhecer a Solução →
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
