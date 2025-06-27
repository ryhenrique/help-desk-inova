
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Monitor, Wrench, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CompanyDifferentials = () => {
  const differentials = [
    {
      icon: Award,
      title: "17 anos de experiência",
      description: "Quase duas décadas transformando empresas com tecnologia",
      gradient: "from-[#0A1A65] to-[#00CFFF]"
    },
    {
      icon: Users,
      title: "Atendimento humanizado",
      description: "Suporte personalizado com foco na sua necessidade",
      gradient: "from-[#00CFFF] to-[#0A1A65]"
    },
    {
      icon: Wrench,
      title: "Suporte remoto e presencial",
      description: "Assistência completa quando e onde você precisar",
      gradient: "from-[#2E3B6E] to-[#00CFFF]"
    },
    {
      icon: Monitor,
      title: "Soluções completas de TI sob medida",
      description: "Tecnologia personalizada para o seu negócio",
      gradient: "from-[#0A1A65] to-[#2E3B6E]"
    },
    {
      icon: Clock,
      title: "Monitoramento contínuo",
      description: "Acompanhamento 24/7 da sua infraestrutura",
      gradient: "from-[#00CFFF] to-[#0A1A65]"
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1A65] via-[#2E3B6E] to-[#0A1A65] text-white relative overflow-hidden">
      {/* Background Pattern com cores Inova */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00CFFF]/20 via-[#0A1A65]/20 to-[#00CFFF]/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(0, 207, 255, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(10, 26, 101, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(0, 207, 255, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Por que escolher a{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #00CFFF 0%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              HelpDesk Inova?
            </span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light" 
             style={{ color: '#B8E6FF' }}>
            Nossa <span className="font-semibold text-white">expertise e dedicação</span> fazem a diferença no seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
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
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 border border-[#00CFFF]/20 hover:border-[#00CFFF]/40 hover:scale-105 hover:shadow-2xl">
                  <div className={`bg-gradient-to-r ${item.gradient} rounded-2xl p-5 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00CFFF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed font-medium" style={{ color: '#B8E6FF' }}>
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
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-[#00CFFF]/20 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Pronto para <span style={{ color: '#00CFFF' }}>transformar</span> sua empresa?
            </h3>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light" 
               style={{ color: '#B8E6FF' }}>
              Entre em contato conosco e descubra como podemos{' '}
              <span className="font-semibold text-white">impulsionar seu negócio</span>{' '}
              com tecnologia de ponta
            </p>
            <Button 
              onClick={handleContactClick}
              size="lg" 
              className="bg-gradient-to-r from-[#00CFFF] to-[#0A1A65] hover:from-[#00CFFF] hover:to-[#2E3B6E] text-white px-12 py-6 font-semibold rounded-2xl transition-all duration-300 text-lg shadow-2xl hover:shadow-[#00CFFF]/25 transform hover:scale-105 border border-[#00CFFF]/20"
            >
              Fale Conosco Agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyDifferentials;
