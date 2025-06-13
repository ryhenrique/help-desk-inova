
import { Monitor, Smartphone, Wifi, Settings, HardDrive, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "Suporte a Sistemas Operacionais",
      description: "Assistência especializada com Windows, Linux e Android. Instalação, configuração e resolução de problemas complexos.",
      features: ["Instalação profissional", "Configuração otimizada", "Resolução de conflitos", "Migração de dados"],
      color: "from-blue-500 to-blue-600",
      badge: "Especializado"
    },
    {
      icon: <HardDrive className="h-7 w-7" />,
      title: "Suporte Técnico Especializado",
      description: "Instalação de software corporativo, formatação segura e manutenção preventiva de equipamentos.",
      features: ["Software empresarial", "Formatação segura", "Manutenção preventiva", "Backup automatizado"],
      color: "from-emerald-500 to-emerald-600",
      badge: "Premium"
    },
    {
      icon: <Wifi className="h-7 w-7" />,
      title: "Configuração de Rede",
      description: "Configuração profissional de internet, Wi-Fi corporativo e resolução de problemas de conectividade.",
      features: ["Wi-Fi empresarial", "Otimização de banda", "Segurança de rede", "Monitoramento 24/7"],
      color: "from-violet-500 to-violet-600",
      badge: "Avançado"
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Orientação Digital Empresarial",
      description: "Consultoria especializada para transformação digital e capacitação de equipes corporativas.",
      features: ["Consultoria estratégica", "Treinamento de equipes", "Implementação digital", "Suporte contínuo"],
      color: "from-orange-500 to-orange-600",
      badge: "Consultoria"
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Configuração de Software",
      description: "Instalação e configuração de sistemas empresariais essenciais para otimização de processos.",
      features: ["Sistemas integrados", "Configuração personalizada", "Automação de processos", "Suporte técnico"],
      color: "from-cyan-500 to-cyan-600",
      badge: "Corporativo"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Segurança Digital Avançada",
      description: "Implementação de protocolos de segurança empresarial e proteção de dados corporativos.",
      features: ["Segurança corporativa", "Backup em nuvem", "Proteção avançada", "Compliance LGPD"],
      color: "from-red-500 to-red-600",
      badge: "Segurança"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium">
            Serviços Profissionais
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Soluções Técnicas
            <span className="block text-blue-600">de Alto Padrão</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Oferecemos suporte técnico especializado e consultoria em TI para resolver suas necessidades 
            tecnológicas com <span className="font-medium text-slate-800">qualidade empresarial</span> e eficiência profissional.
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
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para desenvolver a solução ideal para sua empresa.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50 font-medium px-8 py-3">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
