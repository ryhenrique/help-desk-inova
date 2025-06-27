
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Wifi, 
  UserCheck, 
  Cable, 
  Phone, 
  Monitor, 
  Camera, 
  Code, 
  Shield 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      icon: Network,
      title: "Gerenciamento de Redes e Wi-Fi",
      description: "Infraestrutura de rede otimizada com alta disponibilidade, desempenho e segurança. Conectividade sob controle com nossa equipe especializada.",
      details: "switches, roteadores, access points, VLANs, QoS, Wi-Fi empresarial, failover, balanceamento de links e suporte.",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 2,
      icon: Wifi,
      title: "Internet Corporativa Sob Medida",
      description: "Conectividade sob medida, com links rápidos, estáveis e com backup inteligente. Não deixe sua operação parar.",
      details: "links dedicados, temporários (4G/5G/satélite), Wi-Fi para eventos, redundância e internet de emergência.",
      gradient: "from-slate-600 to-gray-600"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Field Support (Suporte Presencial Gerenciado)",
      description: "Técnicos no local sob sua coordenação. Mais agilidade, menos preocupações.",
      details: "técnico ou equipe sob sua gestão, integração com sistema de chamados, suporte em múltiplas filiais, equipe fixa ou rotativa.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      icon: Cable,
      title: "Redes Estruturadas",
      description: "Infraestrutura física de ponta, da fibra ao rack. Entregamos redes organizadas, seguras e prontas para crescer.",
      details: "cabeamento metálico (Cat5e, Cat6), fibra óptica, organização de racks, configuração de switches, roteadores e access points.",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 5,
      icon: Phone,
      title: "Telefonia VoIP Corporativa",
      description: "Comunicação moderna com economia. Nossa telefonia IP une tecnologia e praticidade para sua empresa.",
      details: "PABX IP, URA personalizada, ramais, filas de atendimento, integração entre unidades, redução de custos.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      id: 6,
      icon: Monitor,
      title: "All Tech In – Tecnologia Completa por Assinatura",
      description: "Tecnologia completa com custo fixo. Equipamentos, suporte e gestão em um só pacote.",
      details: "fornecimento de switches, roteadores, Wi-Fi, PCs, notebooks, monitoramento, suporte técnico e substituição rápida.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 7,
      icon: Camera,
      title: "Câmeras de Segurança (CFTV IP e Analógico)",
      description: "Mais segurança com monitoramento inteligente. CFTV sob medida com suporte especializado.",
      details: "projeto, instalação, gravação local/nuvem, acesso remoto, manutenção, expansão e integração com alarmes.",
      gradient: "from-red-500 to-rose-500"
    },
    {
      id: 8,
      icon: Code,
      title: "Desenvolvimento de Software Personalizado",
      description: "Software sob medida para transformar seu negócio. Integrações, automações e inovação na palma da mão.",
      details: "sistemas web, aplicativos mobile, dashboards, automações, integrações com ERP/CRM, APIs e suporte contínuo.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 9,
      icon: Shield,
      title: "Firewall Profissional e LGPD",
      description: "Proteção avançada para sua rede e seus dados. Adeque-se à LGPD com tecnologia de ponta.",
      details: "firewall local, em nuvem ou híbrido, controle de tráfego, VPN, relatórios, proteção contra ataques, conformidade com a LGPD.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <style>
        {`
          .neumorphic-card {
            box-shadow: 
              15px 15px 30px rgba(59, 130, 246, 0.15),
              -15px -15px 30px rgba(255, 255, 255, 0.8);
          }
          
          .dark .neumorphic-card {
            box-shadow: 
              15px 15px 30px rgba(15, 23, 42, 0.8),
              -15px -15px 30px rgba(59, 130, 246, 0.1);
          }
          
          .neumorphic-card:hover {
            box-shadow: 
              20px 20px 40px rgba(59, 130, 246, 0.25),
              -20px -20px 40px rgba(255, 255, 255, 0.9);
          }
          
          .dark .neumorphic-card:hover {
            box-shadow: 
              20px 20px 40px rgba(15, 23, 42, 0.9),
              -20px -20px 40px rgba(59, 130, 246, 0.2);
          }
        `}
      </style>
      <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              Nossos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Serviços Especializados</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Soluções completas em TI com <span className="font-semibold text-slate-800 dark:text-slate-200">17 anos de experiência</span> no mercado
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Neumorphic Card */}
                  <div className="w-full h-auto rounded-3xl bg-slate-100 dark:bg-slate-800 p-8 transition-all duration-500 hover:scale-[1.02] neumorphic-card">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-4 leading-tight group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 dark:text-slate-200 text-center leading-relaxed mb-5 font-medium text-sm">
                      {service.description}
                    </p>

                    {/* Services Details */}
                    <div className="mb-8">
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-3 text-center flex items-center justify-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Serviços inclusos:
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-center bg-white/60 dark:bg-slate-700/50 p-3 rounded-xl">
                        {service.details}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={handleContactClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                    >
                      Agendar Reunião
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesGrid;
