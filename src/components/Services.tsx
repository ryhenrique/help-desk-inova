
import { Monitor, Camera, Server, Network, Wifi, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Suporte HelpDesk Especializado",
      description: "Assistência técnica completa com suporte remoto e presencial para manter sua empresa funcionando.",
      features: ["Suporte 24/7", "Atendimento remoto", "Manutenção preventiva"],
      badge: "Premium"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Segurança Total com Câmeras",
      description: "Sistema completo de câmeras de segurança com instalação, manutenção e reposição incluídas.",
      features: ["Instalação profissional", "Manutenção incluída", "Reposição gratuita"],
      badge: "Completo"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Sistema Failover Robusto",
      description: "Garantimos que sua empresa nunca fique offline com nosso sistema de redundância total.",
      features: ["Zero downtime", "Backup automático", "Monitoramento 24/7"],
      badge: "Confiável"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Expertise em Redes",
      description: "Soluções completas em infraestrutura de rede com segurança e performance garantidas.",
      features: ["Configuração profissional", "Segurança avançada", "Otimização"],
      badge: "Expert"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Monitoramento em Tempo Real",
      description: "Supervisão contínua da sua rede para identificar problemas antes que afetem as operações.",
      features: ["Monitoramento 24/7", "Detecção proativa", "Relatórios detalhados"],
      badge: "24/7"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança Avançada",
      description: "Proteção total contra ameaças cibernéticas com firewalls e sistemas de detecção.",
      features: ["Firewall avançado", "Detecção de intrusões", "Backup seguro"],
      badge: "Seguro"
    }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-slate-900 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2 text-sm font-medium">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Soluções Completas em
            <span className="block text-gradient mt-2">Tecnologia</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Oferecemos serviços especializados em TI para garantir que sua empresa tenha 
            <span className="font-semibold text-slate-800 dark:text-slate-200"> a melhor infraestrutura tecnológica </span>
            disponível no mercado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600 card-hover"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600 text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full btn-secondary text-sm"
                  onClick={handleContactClick}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800 dark:to-blue-900/20 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Pronto para Transformar sua Infraestrutura de TI?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos otimizar a tecnologia da sua empresa.
            </p>
            <Button 
              size="lg" 
              className="btn-primary"
              onClick={handleContactClick}
            >
              Fale com Nossos Especialistas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
