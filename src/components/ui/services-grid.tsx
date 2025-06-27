
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
      details: "switches, roteadores, access points, VLANs, QoS, Wi-Fi empresarial, failover, balanceamento de links e suporte."
    },
    {
      id: 2,
      icon: Wifi,
      title: "Internet Corporativa Sob Medida",
      description: "Conectividade sob medida, com links rápidos, estáveis e com backup inteligente. Não deixe sua operação parar.",
      details: "links dedicados, temporários (4G/5G/satélite), Wi-Fi para eventos, redundância e internet de emergência."
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Field Support (Suporte Presencial Gerenciado)",
      description: "Técnicos no local sob sua coordenação. Mais agilidade, menos preocupações.",
      details: "técnico ou equipe sob sua gestão, integração com sistema de chamados, suporte em múltiplas filiais, equipe fixa ou rotativa."
    },
    {
      id: 4,
      icon: Cable,
      title: "Redes Estruturadas",
      description: "Infraestrutura física de ponta, da fibra ao rack. Entregamos redes organizadas, seguras e prontas para crescer.",
      details: "cabeamento metálico (Cat5e, Cat6), fibra óptica, organização de racks, configuração de switches, roteadores e access points."
    },
    {
      id: 5,
      icon: Phone,
      title: "Telefonia VoIP Corporativa",
      description: "Comunicação moderna com economia. Nossa telefonia IP une tecnologia e praticidade para sua empresa.",
      details: "PABX IP, URA personalizada, ramais, filas de atendimento, integração entre unidades, redução de custos."
    },
    {
      id: 6,
      icon: Monitor,
      title: "All Tech In – Tecnologia Completa por Assinatura",
      description: "Tecnologia completa com custo fixo. Equipamentos, suporte e gestão em um só pacote.",
      details: "fornecimento de switches, roteadores, Wi-Fi, PCs, notebooks, monitoramento, suporte técnico e substituição rápida."
    },
    {
      id: 7,
      icon: Camera,
      title: "Câmeras de Segurança (CFTV IP e Analógico)",
      description: "Mais segurança com monitoramento inteligente. CFTV sob medida com suporte especializado.",
      details: "projeto, instalação, gravação local/nuvem, acesso remoto, manutenção, expansão e integração com alarmes."
    },
    {
      id: 8,
      icon: Code,
      title: "Desenvolvimento de Software Personalizado",
      description: "Software sob medida para transformar seu negócio. Integrações, automações e inovação na palma da mão.",
      details: "sistemas web, aplicativos mobile, dashboards, automações, integrações com ERP/CRM, APIs e suporte contínuo."
    },
    {
      id: 9,
      icon: Shield,
      title: "Firewall Profissional e LGPD",
      description: "Proteção avançada para sua rede e seus dados. Adeque-se à LGPD com tecnologia de ponta.",
      details: "firewall local, em nuvem ou híbrido, controle de tráfego, VPN, relatórios, proteção contra ataques, conformidade com a LGPD."
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-[#F2F6FC] via-white to-[#F2F6FC] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-[#0A1A65] dark:text-white">
            Nossos <span className="text-gradient">Serviços Especializados</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-[#2E3B6E] dark:text-slate-300">
            Soluções completas em TI com <span className="font-semibold text-[#0A1A65] dark:text-white">17 anos de experiência</span> no mercado
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
                className="group"
              >
                {/* Service Card - Formato similar à imagem */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-slate-700 h-full flex flex-col">
                  
                  {/* Icon Container */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0A1A65] to-[#00CFFF] rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-3 text-[#0A1A65] dark:text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#2E3B6E] dark:text-slate-300 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Services Details */}
                  <div className="mb-6 flex-1">
                    <p className="text-xs text-[#2E3B6E] dark:text-slate-400 leading-relaxed">
                      <span className="font-semibold text-[#0A1A65] dark:text-slate-200">Serviços inclusos:</span> {service.details}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-[#0A1A65] hover:bg-[#00CFFF] hover:text-[#0A1A65] text-white font-semibold py-3 rounded-xl transition-all duration-300 text-sm dark:bg-[#00CFFF] dark:text-[#0A1A65] dark:hover:bg-white"
                  >
                    Agende uma reunião
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
