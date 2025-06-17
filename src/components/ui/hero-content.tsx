
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall, Shield, Network, Camera, Code, Wrench, HeadphonesIcon } from 'lucide-react';
import TypewriterText from '@/components/ui/typewriter-text';
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
    "Infraestrutura de Redes",
    "Segurança Digital Avançada",
    "Desenvolvimento & Programação"
  ];

  const isDarkMode = React.useMemo(() => 
    theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches),
    [theme]
  );

  const logoSrc = "/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png";

  const services = [
    {
      icon: HeadphonesIcon,
      title: "Help Desk",
      description: "Suporte técnico especializado para resolver seus problemas de TI",
      color: "bg-blue-500"
    },
    {
      icon: Network,
      title: "Redes",
      description: "Configuração e manutenção de infraestrutura de rede",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção digital com câmeras e sistemas de monitoramento",
      color: "bg-red-500"
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Soluções personalizadas em programação e sistemas",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
      {/* Logo Centralizada */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <img 
                src={logoSrc}
                alt="Help Desk Inova" 
                className={`h-20 sm:h-24 md:h-28 lg:h-36 w-auto mx-auto ${isDarkMode ? 'brightness-0 invert' : ''}`}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Título Principal */}
        <div className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] flex items-center justify-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-blue-600 dark:text-blue-400 text-center">
            <TypewriterText 
              words={phrases}
              speed={80}
              deleteSpeed={40}
              delayBetweenWords={2500}
            />
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8">
          Transformamos desafios tecnológicos em soluções eficientes. Nossa equipe especializada oferece suporte completo em infraestrutura de TI, desenvolvimento de sistemas, segurança digital e muito mais.
        </p>
      </div>

      {/* Grid de Serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className={`${service.color} p-3 rounded-lg w-fit mx-auto mb-4`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Informações Técnicas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Especialidades */}
        <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
              <Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Nossas Especialidades
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Infraestrutura de Redes</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Configuração, manutenção e otimização de redes corporativas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Sistemas de Segurança</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Câmeras de monitoramento e sistemas de proteção digital</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Desenvolvimento</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Programação de sistemas e aplicações personalizadas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas */}
        <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Por que Escolher Nossa Equipe?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Problemas Resolvidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24h</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Tempo de Resposta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-2">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Anos de Experiência</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botões de Ação */}
      <div className="text-center">
        <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl max-w-2xl mx-auto">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onSupportClick}
                size="lg" 
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-lg transition-all duration-200 text-base sm:text-lg"
              >
                <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" />
                Fale Conosco
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-lg transition-all duration-200 text-base sm:text-lg"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explorar Serviços
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeroContent;
