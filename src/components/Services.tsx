
import { Monitor, Smartphone, Wifi, Settings, HardDrive, Shield, ArrowRight, Camera, Server, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Suporte HelpDesk Especializado",
      description: "Assistência técnica completa com suporte remoto e presencial. Resolução rápida de problemas tecnológicos para manter sua empresa funcionando.",
      features: ["Suporte 24/7", "Atendimento remoto", "Manutenção preventiva", "Consultoria técnica"],
      color: "from-blue-500 to-blue-600",
      badge: "Premium"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Segurança Total com Câmeras",
      description: "Câmeras de segurança com suporte completo, sem necessidade de compra. Instalação, manutenção e reposição de peças sem custo adicional.",
      features: ["Sem necessidade de compra", "Instalação profissional", "Manutenção incluída", "Reposição gratuita"],
      color: "from-emerald-500 to-emerald-600",
      badge: "Completo"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Sistema Failover Robusto",
      description: "Confiabilidade ininterrupta com nosso sistema Failover. Garantimos que sua empresa nunca fique offline, mesmo em caso de falhas.",
      features: ["Zero downtime", "Backup automático", "Redundância total", "Monitoramento 24/7"],
      color: "from-violet-500 to-violet-600",
      badge: "Confiável"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Expertise em Redes de Computadores",
      description: "Garantindo conectividade e segurança com soluções inovadoras e suporte excepcional para infraestrutura de rede.",
      features: ["Configuração profissional", "Segurança avançada", "Otimização de performance", "Suporte especializado"],
      color: "from-orange-500 to-orange-600",
      badge: "Expert"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Monitoramento de Rede em Tempo Real",
      description: "Supervisão contínua para máxima eficiência. Monitoramos sua rede 24/7, identificando problemas antes que afetem suas operações.",
      features: ["Monitoramento 24/7", "Detecção proativa", "Relatórios detalhados", "Performance garantida"],
      color: "from-cyan-500 to-cyan-600",
      badge: "24/7"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança de Rede Avançada",
      description: "Proteção total contra ameaças cibernéticas. Implementamos firewalls e sistemas de detecção de intrusões para proteger sua rede.",
      features: ["Firewall avançado", "Detecção de intrusões", "Proteção antivírus", "Backup seguro"],
      color: "from-red-500 to-red-600",
      badge: "Seguro"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 font-medium">
            Excelência em Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Conte sempre com a
            <span className="block text-blue-400">HELP DESK INOVA</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            A HELP DESK INOVA é especialista em soluções tecnológicas para empresas, oferecendo suporte HelpDesk, 
            gerenciamento de redes, e segurança cibernética. Com uma equipe qualificada e valores justos, 
            <span className="font-medium text-slate-300"> garantimos eficiência e inovação </span>
            para o crescimento seguro do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <CardHeader className="relative pb-4">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                    {service.badge}
                  </Badge>
                </div>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-400 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group/btn"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Excelência em Serviços e Equipamentos para Seu Negócio
              </h3>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Oferecemos serviços de alta qualidade e equipamentos de ponta, adaptados para atender às necessidades de qualquer tipo de empresa.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-8 py-3 border-0"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
              >
                Fale com os nossos especialistas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
