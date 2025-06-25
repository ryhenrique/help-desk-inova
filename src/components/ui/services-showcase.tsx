
import { Monitor, Shield, Cloud, Network, Users, Wrench, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicesShowcase = () => {
  const services = [
    {
      id: 'suporte-tecnico',
      title: 'Suporte Técnico',
      description: 'Assistência especializada em TI com resposta rápida e soluções eficazes.',
      image: '/helpdesk-uploads/69507e4d-7db8-416b-9aba-d98035e7a38d.png',
      icon: HeadphonesIcon,
      color: 'blue',
    },
    {
      id: 'infraestrutura-redes',
      title: 'Infraestrutura de Redes',
      description: 'Implementação e manutenção de redes corporativas seguras e eficientes.',
      image: '/helpdesk-uploads/8a6d91f3-79d9-46d4-976b-1fe3e1664d16.png',
      icon: Network,
      color: 'emerald',
    },
    {
      id: 'consultoria-ti',
      title: 'Consultoria em TI',
      description: 'Análise estratégica e otimização de sistemas para máxima eficiência.',
      image: '/helpdesk-uploads/a5b03d32-05a3-44fe-a263-b2b8f9d7cde4.png',
      icon: Users,
      color: 'violet',
    },
    {
      id: 'seguranca-digital',
      title: 'Segurança Digital',
      description: 'Proteção avançada contra ameaças cibernéticas e backup de dados.',
      image: '/helpdesk-uploads/bf466862-6824-43f2-b0e0-1d2d9ecfacf2.png',
      icon: Shield,
      color: 'red',
    },
    {
      id: 'solucoes-nuvem',
      title: 'Soluções em Nuvem',
      description: 'Migração e gestão de serviços cloud para escalabilidade empresarial.',
      image: '/helpdesk-uploads/cb83006e-7e71-4f6e-83d3-856b746bbc3d.png',
      icon: Cloud,
      color: 'cyan',
    },
    {
      id: 'manutencao-preventiva',
      title: 'Manutenção Preventiva',
      description: 'Cuidados regulares para evitar falhas e garantir performance optimal.',
      image: '/helpdesk-uploads/e239b180-ebea-489a-b2a9-d0fd86f97834.png',
      icon: Wrench,
      color: 'orange',
    },
    {
      id: 'monitoramento-sistemas',
      title: 'Monitoramento de Sistemas',
      description: 'Vigilância 24/7 para detecção precoce de problemas e manutenção da estabilidade.',
      image: '/helpdesk-uploads/65bada43-213b-449f-bb47-e5173634fa0d.png',
      icon: Monitor,
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/10 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30',
      emerald: 'bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30',
      violet: 'bg-violet-500/10 text-violet-600 border-violet-200 dark:bg-violet-500/20 dark:text-violet-400 dark:border-violet-500/30',
      red: 'bg-red-500/10 text-red-600 border-red-200 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500/30',
      cyan: 'bg-cyan-500/10 text-cyan-600 border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-400 dark:border-cyan-500/30',
      orange: 'bg-orange-500/10 text-orange-600 border-orange-200 dark:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/30',
      indigo: 'bg-indigo-500/10 text-indigo-600 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-400 dark:border-indigo-500/30',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="helpdesk-services" className="py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2 font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Soluções Completas
            <span className="block text-blue-600 dark:text-blue-400">em Tecnologia</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Oferecemos uma gama completa de serviços especializados para atender todas as necessidades de
            <span className="font-medium text-slate-800 dark:text-slate-200"> infraestrutura tecnológica </span>
            da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-4 right-4 p-3 rounded-xl border ${getColorClasses(service.color)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
