
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

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-600 border-blue-200 px-4 py-2">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Soluções Completas em
            <span className="block text-blue-600">Tecnologia</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços especializados em TI para garantir que sua empresa tenha 
            <span className="font-semibold text-slate-800"> a melhor infraestrutura tecnológica </span>
            disponível no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative bg-white border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="bg-slate-50 text-slate-600 border-slate-200">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-200"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Pronto para Transformar sua Infraestrutura de TI?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos otimizar a tecnologia da sua empresa.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-sm"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
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
