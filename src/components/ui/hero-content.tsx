
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall, Shield, Network, Camera, Code, Wrench, HeadphonesIcon, Users, Clock, Award } from 'lucide-react';
import TypewriterText from '@/components/ui/typewriter-text';
import { useTheme } from '@/components/ui/theme-provider';
import { motion } from 'framer-motion';

interface HeroContentProps {
  onSupportClick: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onSupportClick }) => {
  const { theme } = useTheme();

  const phrases = [
    "Simplifique sua TI e atendimento ao cliente",
    "Soluções Profissionais em Tecnologia", 
    "Suporte Especializado 24/7",
    "Infraestrutura de Redes Segura",
    "Transformação Digital Completa"
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
      description: "Suporte técnico especializado para resolver seus problemas de TI com agilidade",
      color: "bg-blue-500"
    },
    {
      icon: Network,
      title: "Infraestrutura",
      description: "Configuração e manutenção de redes corporativas robustas e seguras",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção digital completa com câmeras e sistemas de monitoramento",
      color: "bg-red-500"
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Soluções personalizadas em programação e sistemas sob medida",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
      {/* Hero Principal */}
      <div className="text-center mb-16 sm:mb-20 lg:mb-24">
        {/* Logo Centralizada */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-2xl">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <img 
                src={logoSrc}
                alt="Help Desk Inova" 
                className={`h-24 sm:h-28 md:h-32 lg:h-40 w-auto mx-auto ${isDarkMode ? '' : ''}`}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Título Principal com Typewriter */}
        <div className="min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex items-center justify-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900 dark:text-white text-center max-w-6xl">
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
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-5xl mx-auto mb-10 sm:mb-12"
        >
          Oferecemos soluções completas em TI com assistência de primeira classe para empresas que buscam 
          excelência tecnológica e experiências excepcionais para clientes e colaboradores.
        </motion.p>

        {/* Botões de Ação Principais */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
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

        {/* Indicador de Confiança */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-4">
            Confiado por mais de 500+ empresas em todo o Brasil
          </p>
          <div className="flex justify-center items-center gap-6 text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm">500+ Clientes</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">24/7 Suporte</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="text-sm">98% Satisfação</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid de Serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`${service.color} p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
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

      {/* Seção de Especialidades e Estatísticas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        {/* Especialidades */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-2xl h-full">
            <CardContent className="p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-4">
                <Wrench className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                Nossas Especialidades
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Infraestrutura de Redes</h4>
                    <p className="text-slate-600 dark:text-slate-400">Configuração, manutenção e otimização de redes corporativas com alta disponibilidade</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Sistemas de Segurança</h4>
                    <p className="text-slate-600 dark:text-slate-400">Câmeras de monitoramento e sistemas de proteção digital avançados</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Desenvolvimento</h4>
                    <p className="text-slate-600 dark:text-slate-400">Programação de sistemas e aplicações personalizadas para sua empresa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-2xl h-full">
            <CardContent className="p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                Por que Escolher Nossa Equipe?
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Problemas Resolvidos</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">24h</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Tempo de Resposta</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Satisfação</div>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400 mb-2">5+</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Anos de Experiência</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
