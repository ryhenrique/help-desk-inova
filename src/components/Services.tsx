
import { Monitor, Smartphone, Wifi, Settings, HardDrive, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-slate-700" />,
      title: "Suporte a Sistemas Operacionais",
      description: "Assistência especializada com Windows, Linux e Android. Instalação, configuração e resolução de problemas.",
      features: ["Instalação de SO", "Configuração inicial", "Resolução de erros"]
    },
    {
      icon: <HardDrive className="h-8 w-8 text-slate-700" />,
      title: "Suporte Técnico Especializado",
      description: "Instalação de software, formatação e manutenção preventiva do seu equipamento.",
      features: ["Instalação de software", "Formatação completa", "Manutenção preventiva"]
    },
    {
      icon: <Wifi className="h-8 w-8 text-slate-700" />,
      title: "Configuração de Rede",
      description: "Configuração de internet, Wi-Fi e resolução de problemas de conectividade.",
      features: ["Configuração Wi-Fi", "Otimização de velocidade", "Troubleshooting de rede"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-slate-700" />,
      title: "Orientação Digital",
      description: "Suporte especializado para usuários iniciantes em tecnologia digital.",
      features: ["Primeiros passos", "Configuração básica", "Dicas de uso"]
    },
    {
      icon: <Settings className="h-8 w-8 text-slate-700" />,
      title: "Configuração de Software",
      description: "Instalação e configuração de programas essenciais para seu dia a dia.",
      features: ["Instalação guiada", "Configuração personalizada", "Treinamento básico"]
    },
    {
      icon: <Shield className="h-8 w-8 text-slate-700" />,
      title: "Segurança Digital",
      description: "Orientações e configurações para manter seus dados e dispositivos seguros.",
      features: ["Antivírus", "Backup de dados", "Proteção online"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos suporte técnico especializado para resolver suas necessidades tecnológicas
            com qualidade e eficiência profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-900 mb-3">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
