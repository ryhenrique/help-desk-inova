
import { Network, Server, Monitor, Wifi, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const IncludedSection = () => {
  const included = [
    {
      icon: Network,
      title: 'Switches, roteadores, access points',
      description: 'Infraestrutura de rede completa com Wi-Fi de alta performance',
      color: 'blue',
    },
    {
      icon: Wifi,
      title: 'Equipamentos de rede e comunicação',
      description: 'Soluções avançadas para conectividade empresarial',
      color: 'green',
    },
    {
      icon: Server,
      title: 'Servidores e storage',
      description: 'Armazenamento seguro e processamento robusto',
      color: 'purple',
    },
    {
      icon: Monitor,
      title: 'Estações de trabalho e notebooks',
      description: 'Equipamentos sob demanda para toda a equipe',
      color: 'orange',
    },
    {
      icon: Shield,
      title: 'Monitoramento proativo e suporte',
      description: 'Acompanhamento especializado 24 horas por dia',
      color: 'red',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/10 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400',
      green: 'bg-green-500/10 text-green-600 border-green-200 dark:bg-green-500/20 dark:text-green-400',
      purple: 'bg-purple-500/10 text-purple-600 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400',
      orange: 'bg-orange-500/10 text-orange-600 border-orange-200 dark:bg-orange-500/20 dark:text-orange-400',
      red: 'bg-red-500/10 text-red-600 border-red-200 dark:bg-red-500/20 dark:text-red-400',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="helpdesk-included" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2 font-medium">
            <Monitor className="w-4 h-4 mr-2" />
            O Que Está Incluso
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Tudo que sua empresa
            <span className="block text-blue-600 dark:text-blue-400">precisa em um só lugar</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Uma solução completa que cobre todas as necessidades de 
            <span className="font-medium text-slate-800 dark:text-slate-200"> infraestrutura tecnológica </span>
            da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {included.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className={`mb-6 p-4 rounded-xl w-fit ${getColorClasses(item.color)}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
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

export default IncludedSection;
