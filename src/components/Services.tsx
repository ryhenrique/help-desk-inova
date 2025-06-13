
import { Monitor, Smartphone, Wifi, Settings, HardDrive, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Suporte a Sistemas Operacionais",
      description: "Assistência com Windows, Linux e Android. Instalação, configuração e resolução de problemas.",
      features: ["Instalação de SO", "Configuração inicial", "Resolução de erros"]
    },
    {
      icon: <HardDrive className="h-8 w-8 text-blue-600" />,
      title: "Suporte Técnico Básico",
      description: "Instalação de software, formatação e manutenção preventiva do seu equipamento.",
      features: ["Instalação de software", "Formatação completa", "Manutenção preventiva"]
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: "Configuração de Rede",
      description: "Configuração de internet, Wi-Fi e resolução de problemas de conectividade.",
      features: ["Configuração Wi-Fi", "Otimização de velocidade", "Troubleshooting de rede"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Orientação Digital",
      description: "Suporte especializado para usuários iniciantes em tecnologia digital.",
      features: ["Primeiros passos", "Configuração básica", "Dicas de uso"]
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Configuração de Software",
      description: "Instalação e configuração de programas essenciais para seu dia a dia.",
      features: ["Instalação guiada", "Configuração personalizada", "Treinamento básico"]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Segurança Digital",
      description: "Orientações e configurações para manter seus dados e dispositivos seguros.",
      features: ["Antivírus", "Backup de dados", "Proteção online"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos suporte técnico completo para resolver suas dificuldades tecnológicas
            de forma rápida e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
