
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Monitor, Wrench, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CompanyDifferentials = () => {
  const differentials = [
    {
      icon: Award,
      title: "17 anos de experiência",
      description: "Quase duas décadas transformando empresas com tecnologia"
    },
    {
      icon: Users,
      title: "Atendimento humanizado",
      description: "Suporte personalizado com foco na sua necessidade"
    },
    {
      icon: Wrench,
      title: "Suporte remoto e presencial",
      description: "Assistência completa quando e onde você precisar"
    },
    {
      icon: Monitor,
      title: "Soluções completas de TI sob medida",
      description: "Tecnologia personalizada para o seu negócio"
    },
    {
      icon: Clock,
      title: "Monitoramento contínuo",
      description: "Acompanhamento 24/7 da sua infraestrutura"
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher a <span className="text-blue-200">HelpDesk Inova?</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Nossa expertise e dedicação fazem a diferença no seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30">
                  <div className="bg-white/20 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
            Pronto para transformar sua empresa?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos impulsionar seu negócio com tecnologia de ponta
          </p>
          <Button 
            onClick={handleContactClick}
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Fale Conosco Agora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyDifferentials;
