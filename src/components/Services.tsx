
import { Monitor, Camera, Server, Network, Wifi, Shield, Code, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Suporte HelpDesk Premium",
      description: "Assistência técnica especializada com suporte remoto e presencial para manter sua empresa sempre operacional.",
      features: ["Suporte 24/7 disponível", "Atendimento remoto imediato", "Manutenção preventiva incluída"],
      badge: "Premium",
      color: "bg-blue-500"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Redes de Computadores",
      description: "Infraestrutura completa de rede com configuração, segurança e otimização para máxima performance.",
      features: ["Configuração profissional", "Segurança avançada", "Monitoramento contínuo"],
      badge: "Expert",
      color: "bg-emerald-500"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Desenvolvimento de Software",
      description: "Soluções personalizadas em desenvolvimento de sistemas e aplicações sob medida para seu negócio.",
      features: ["Desenvolvimento personalizado", "Sistemas sob medida", "Integração completa"],
      badge: "Custom",
      color: "bg-violet-500"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Infraestrutura de TI",
      description: "Planejamento e implementação de infraestrutura tecnológica robusta e escalável.",
      features: ["Planejamento estratégico", "Implementação completa", "Escalabilidade garantida"],
      badge: "Enterprise",
      color: "bg-orange-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança Cibernética",
      description: "Proteção avançada contra ameaças digitais com firewalls, antivírus e monitoramento em tempo real.",
      features: ["Firewall enterprise", "Detecção de ameaças", "Backup automático"],
      badge: "Secure",
      color: "bg-red-500"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Sistemas de Segurança",
      description: "Câmeras de segurança profissionais com instalação, manutenção e monitoramento inclusos.",
      features: ["Instalação profissional", "Manutenção incluída", "Monitoramento 24/7"],
      badge: "Complete",
      color: "bg-indigo-500"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Conectividade Avançada",
      description: "Soluções de conectividade empresarial com redundância e alta disponibilidade.",
      features: ["Alta disponibilidade", "Redundância total", "Performance otimizada"],
      badge: "Pro",
      color: "bg-cyan-500"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Gerenciamento de Dados",
      description: "Backup, recuperação e gerenciamento de dados corporativos com segurança máxima.",
      features: ["Backup automatizado", "Recuperação rápida", "Segurança máxima"],
      badge: "Reliable",
      color: "bg-teal-500"
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-600 border-blue-200 px-6 py-3 text-base font-semibold">
            Nossos Serviços Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Soluções Completas em
            <span className="block text-gradient mt-2">Tecnologia da Informação</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos serviços especializados em TI para garantir que sua empresa tenha 
            <span className="font-semibold text-slate-800"> a melhor infraestrutura tecnológica </span>
            e suporte técnico disponível no mercado.
          </p>
        </div>

        {/* Services Grid - Organized in 4 columns for better layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative bg-white border border-slate-200 hover:border-blue-200 card-hover h-full"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-2xl ${service.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="bg-slate-50 text-slate-600 border-slate-200 text-xs font-medium">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full btn-secondary text-sm font-medium mt-auto"
                  onClick={handleContactClick}
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl border border-blue-500/20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para Revolucionar sua TI?
            </h3>
            <p className="text-blue-100 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como nossa equipe especializada pode 
              transformar a infraestrutura tecnológica da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={handleContactClick}
              >
                Fale com Nossos Especialistas
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-200"
                onClick={() => document.getElementById('tutorials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Tutoriais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
