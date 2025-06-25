
import { TrendingUp, Shield, Clock, DollarSign, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Equipamentos sempre atualizados',
      description: 'Tecnologia de ponta sem se preocupar com obsolescência',
      color: 'emerald',
    },
    {
      icon: Clock,
      title: 'Redução de downtime',
      description: 'Máxima disponibilidade dos sistemas críticos',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'SLA garantido',
      description: 'Acordo de nível de serviço com compromisso de qualidade',
      color: 'violet',
    },
    {
      icon: DollarSign,
      title: 'Previsibilidade de custo',
      description: 'Orçamento controlado com valor mensal fixo',
      color: 'green',
    },
    {
      icon: Target,
      title: 'Mais tempo para focar no seu negócio',
      description: 'Deixe a tecnologia conosco e concentre-se no crescimento',
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: 'bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400',
      blue: 'bg-blue-500/10 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400',
      violet: 'bg-violet-500/10 text-violet-600 border-violet-200 dark:bg-violet-500/20 dark:text-violet-400',
      green: 'bg-green-500/10 text-green-600 border-green-200 dark:bg-green-500/20 dark:text-green-400',
      orange: 'bg-orange-500/10 text-orange-600 border-orange-200 dark:bg-orange-500/20 dark:text-orange-400',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="helpdesk-benefits" className="py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 px-4 py-2 font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            Benefícios Diretos
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Resultados que você
            <span className="block text-emerald-600 dark:text-emerald-400">sentirá na prática</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transforme a gestão de TI da sua empresa e experimente os
            <span className="font-medium text-slate-800 dark:text-slate-200"> benefícios imediatos </span>
            de uma infraestrutura profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className={`mx-auto mb-6 p-4 rounded-xl w-fit ${getColorClasses(benefit.color)}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {benefit.description}
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

export default BenefitsSection;
