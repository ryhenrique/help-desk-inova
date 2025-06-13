
import { Monitor, Smartphone, Wifi, Settings, HardDrive, Shield, ArrowRight, Camera, Server, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "Suporte HelpDesk Especializado",
      description: "Assistência técnica completa com suporte remoto e presencial. Resolução rápida de problemas tecnológicos para manter sua empresa funcionando.",
      features: ["Suporte 24/7", "Atendimento remoto", "Manutenção preventiva", "Consultoria técnica"],
      color: "from-blue-500 to-blue-600",
      badge: "Premium"
    },
    {
      icon: <Camera className="h-7 w-7" />,
      title: "Segurança Total com Câmeras",
      description: "Câmeras de segurança com suporte completo, sem necessidade de compra. Instalação, manutenção e reposição de peças sem custo adicional.",
      features: ["Sem necessidade de compra", "Instalação profissional", "Manutenção incluída", "Reposição gratuita"],
      color: "from-emerald-500 to-emerald-600",
      badge: "Completo"
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Sistema Failover Robusto",
      description: "Confiabilidade ininterrupta com nosso sistema Failover. Garantimos que sua empresa nunca fique offline, mesmo em caso de falhas.",
      features: ["Zero downtime", "Backup automático", "Redundância total", "Monitoramento 24/7"],
      color: "from-violet-500 to-violet-600",
      badge: "Confiável"
    },
    {
      icon: <Network className="h-7 w-7" />,
      title: "Expertise em Redes de Computadores",
      description: "Garantindo conectividade e segurança com soluções inovadoras e suporte excepcional para infraestrutura de rede.",
      features: ["Configuração profissional", "Segurança avançada", "Otimização de performance", "Suporte especializado"],
      color: "from-orange-500 to-orange-600",
      badge: "Expert"
    },
    {
      icon: <Wifi className="h-7 w-7" />,
      title: "Monitoramento de Rede em Tempo Real",
      description: "Supervisão contínua para máxima eficiência. Monitoramos sua rede 24/7, identificando problemas antes que afetem suas operações.",
      features: ["Monitoramento 24/7", "Detecção proativa", "Relatórios detalhados", "Performance garantida"],
      color: "from-cyan-500 to-cyan-600",
      badge: "24/7"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Segurança de Rede Avançada",
      description: "Proteção total contra ameaças cibernéticas. Implementamos firewalls e sistemas de detecção de intrusões para proteger sua rede.",
      features: ["Firewall avançado", "Detecção de intrusões", "Proteção antivírus", "Backup seguro"],
      color: "from-red-500 to-red-600",
      badge: "Seguro"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium">
            Excelência em Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Conte sempre com a
            <span className="block text-blue-600">HELP DESK INOVA</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            A HELP DESK INOVA é especialista em soluções tecnológicas para empresas, oferecendo suporte HelpDesk, 
            gerenciamento de redes, e segurança cibernética. Com uma equipe qualificada e valores justos, 
            <span className="font-medium text-slate-800"> garantimos eficiência e inovação </span>
            para o crescimento seguro do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] rounded-xl`}>
                <div className="bg-white h-full w-full rounded-xl"></div>
              </div>
              
              <CardHeader className="relative pb-6 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group/button hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-medium"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Excelência em Serviços e Equipamentos para Seu Negócio
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Oferecemos serviços de alta qualidade e equipamentos de ponta, adaptados para atender às necessidades de qualquer tipo de empresa.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-slate-50 font-medium px-8 py-3"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
            >
              Fale com os nossos especialistas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
