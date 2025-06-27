
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
      gradient: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
      iconBg: "bg-gradient-to-r from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      icon: Wifi,
      title: "Internet Corporativa Sob Medida",
      description: "Conectividade sob medida, com links rápidos, estáveis e com backup inteligente. Não deixe sua operação parar.",
      details: "links dedicados, temporários (4G/5G/satélite), Wi-Fi para eventos, redundância e internet de emergência.",
      gradient: "from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30",
      iconBg: "bg-gradient-to-r from-slate-600 to-gray-600"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Field Support (Suporte Presencial Gerenciado)",
      description: "Técnicos no local sob sua coordenação. Mais agilidade, menos preocupações.",
      details: "técnico ou equipe sob sua gestão, integração com sistema de chamados, suporte em múltiplas filiais, equipe fixa ou rotativa.",
      gradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
      iconBg: "bg-gradient-to-r from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      icon: Cable,
      title: "Redes Estruturadas",
      description: "Infraestrutura física de ponta, da fibra ao rack. Entregamos redes organizadas, seguras e prontas para crescer.",
      details: "cabeamento metálico (Cat5e, Cat6), fibra óptica, organização de racks, configuração de switches, roteadores e access points.",
      gradient: "from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30",
      iconBg: "bg-gradient-to-r from-orange-500 to-amber-500"
    },
    {
      id: 5,
      icon: Phone,
      title: "Telefonia VoIP Corporativa",
      description: "Comunicação moderna com economia. Nossa telefonia IP une tecnologia e praticidade para sua empresa.",
      details: "PABX IP, URA personalizada, ramais, filas de atendimento, integração entre unidades, redução de custos.",
      gradient: "from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
      iconBg: "bg-gradient-to-r from-purple-500 to-violet-500"
    },
    {
      id: 6,
      icon: Monitor,
      title: "All Tech In – Tecnologia Completa por Assinatura",
      description: "Tecnologia completa com custo fixo. Equipamentos, suporte e gestão em um só pacote.",
      details: "fornecimento de switches, roteadores, Wi-Fi, PCs, notebooks, monitoramento, suporte técnico e substituição rápida.",
      gradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      iconBg: "bg-gradient-to-r from-blue-600 to-cyan-600"
    },
    {
      id: 7,
      icon: Camera,
      title: "Câmeras de Segurança (CFTV IP e Analógico)",
      description: "Mais segurança com monitoramento inteligente. CFTV sob medida com suporte especializado.",
      details: "projeto, instalação, gravação local/nuvem, acesso remoto, manutenção, expansão e integração com alarmes.",
      gradient: "from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30",
      iconBg: "bg-gradient-to-r from-red-500 to-rose-500"
    },
    {
      id: 8,
      icon: Code,
      title: "Desenvolvimento de Software Personalizado",
      description: "Software sob medida para transformar seu negócio. Integrações, automações e inovação na palma da mão.",
      details: "sistemas web, aplicativos mobile, dashboards, automações, integrações com ERP/CRM, APIs e suporte contínuo.",
      gradient: "from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30",
      iconBg: "bg-gradient-to-r from-indigo-500 to-purple-500"
    },
    {
      id: 9,
      icon: Shield,
      title: "Firewall Profissional e LGPD",
      description: "Proteção avançada para sua rede e seus dados. Adeque-se à LGPD com tecnologia de ponta.",
      details: "firewall local, em nuvem ou híbrido, controle de tráfego, VPN, relatórios, proteção contra ataques, conformidade com a LGPD.",
      gradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-500"
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
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
                className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 dark:border-slate-700/30 hover:border-blue-200 dark:hover:border-blue-600/30 p-8 hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl ${service.iconBg} text-white shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-5 font-medium">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Serviços inclusos:
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white/50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200/50 dark:border-slate-600/30">
                      {service.details}
                    </p>
                  </div>

                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
                  >
                    Agendar Reunião
                  </Button>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
