
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Camera, Headphones, Network, MonitorSpeaker } from 'lucide-react';

const ServicesShowcase = () => {
  const services = [
    {
      title: "Suporte Técnico",
      description: "Atendimento especializado 24/7 para resolver seus problemas de TI com rapidez e eficiência.",
      image: "/helpdesk-uploads/2d7964c1-c50b-4014-9a30-86b171081de5.png",
      icon: Headphones,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Infraestrutura de Redes",
      description: "Instalação e manutenção de redes robustas para garantir conectividade confiável.",
      image: "/helpdesk-uploads/8a6d91f3-79d9-46d4-976b-1fe3e1664d16.png",
      icon: Network,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Data Center",
      description: "Soluções completas de data center com alta disponibilidade e redundância.",
      image: "/helpdesk-uploads/69507e4d-7db8-416b-9aba-d98035e7a38d.png",
      icon: Server,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Segurança de Câmeras",
      description: "Sistemas de monitoramento profissional com tecnologia de ponta.",
      image: "/helpdesk-uploads/65bada43-213b-449f-bb47-e5173634fa0d.png",
      icon: Camera,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Instalação de Câmeras",
      description: "Instalação profissional de sistemas de vigilância com cobertura completa.",
      image: "/helpdesk-uploads/bf466862-6824-43f2-b0e0-1d2d9ecfacf2.png",
      icon: MonitorSpeaker,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Firewall Avançado",
      description: "Proteção multicamada contra ameaças cibernéticas e controle de acesso.",
      image: "/helpdesk-uploads/a5b03d32-05a3-44fe-a263-b2b8f9d7cde4.png",
      icon: Shield,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Monitoramento de Rede",
      description: "Supervisão em tempo real da performance e saúde da sua infraestrutura.",
      image: "/helpdesk-uploads/cb83006e-7e71-4f6e-83d3-856b746bbc3d.png",
      icon: MonitorSpeaker,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#helpdesk-contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="helpdesk-services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Nossos <span className="text-blue-600 dark:text-blue-400">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em tecnologia da informação para empresas que buscam excelência e inovação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-800/90 rounded-lg backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Precisa de uma solução personalizada? Nossa equipe está pronta para ajudar!
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
