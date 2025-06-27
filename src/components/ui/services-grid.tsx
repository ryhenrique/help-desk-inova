
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
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: Wifi,
      title: "Internet Corporativa Sob Medida",
      description: "Conectividade sob medida, com links rápidos, estáveis e com backup inteligente. Não deixe sua operação parar.",
      details: "links dedicados, temporários (4G/5G/satélite), Wi-Fi para eventos, redundância e internet de emergência.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Field Support (Suporte Presencial Gerenciado)",
      description: "Técnicos no local sob sua coordenação. Mais agilidade, menos preocupações.",
      details: "técnico ou equipe sob sua gestão, integração com sistema de chamados, suporte em múltiplas filiais, equipe fixa ou rotativa.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: Cable,
      title: "Redes Estruturadas",
      description: "Infraestrutura física de ponta, da fibra ao rack. Entregamos redes organizadas, seguras e prontas para crescer.",
      details: "cabeamento metálico (Cat5e, Cat6), fibra óptica, organização de racks, configuração de switches, roteadores e access points.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 5,
      icon: Phone,
      title: "Telefonia VoIP Corporativa",
      description: "Comunicação moderna com economia. Nossa telefonia IP une tecnologia e praticidade para sua empresa.",
      details: "PABX IP, URA personalizada, ramais, filas de atendimento, integração entre unidades, redução de custos.",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 6,
      icon: Monitor,
      title: "All Tech In – Tecnologia Completa por Assinatura",
      description: "Tecnologia completa com custo fixo. Equipamentos, suporte e gestão em um só pacote.",
      details: "fornecimento de switches, roteadores, Wi-Fi, PCs, notebooks, monitoramento, suporte técnico e substituição rápida.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 7,
      icon: Camera,
      title: "Câmeras de Segurança (CFTV IP e Analógico)",
      description: "Mais segurança com monitoramento inteligente. CFTV sob medida com suporte especializado.",
      details: "projeto, instalação, gravação local/nuvem, acesso remoto, manutenção, expansão e integração com alarmes.",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 8,
      icon: Code,
      title: "Desenvolvimento de Software Personalizado",
      description: "Software sob medida para transformar seu negócio. Integrações, automações e inovação na palma da mão.",
      details: "sistemas web, aplicativos mobile, dashboards, automações, integrações com ERP/CRM, APIs e suporte contínuo.",
      color: "from-red-500 to-red-600"
    },
    {
      id: 9,
      icon: Shield,
      title: "Firewall Profissional e LGPD",
      description: "Proteção avançada para sua rede e seus dados. Adeque-se à LGPD com tecnologia de ponta.",
      details: "firewall local, em nuvem ou híbrido, controle de tráfego, VPN, relatórios, proteção contra ataques, conformidade com a LGPD.",
      color: "from-violet-500 to-violet-600"
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Nossos <span className="text-blue-600 dark:text-blue-400">Serviços Especializados</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em TI com 17 anos de experiência no mercado
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
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mr-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">📍 Serviços:</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.details}
                  </p>
                </div>

                <Button 
                  onClick={handleContactClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Agendar Reunião
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
