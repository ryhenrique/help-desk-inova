
import { AlertTriangle, Wifi, DollarSign, Clock, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Equipamentos obsoletos',
      description: 'Hardware desatualizado prejudica a produtividade e competitividade',
      color: 'red',
    },
    {
      icon: Wifi,
      title: 'Quedas frequentes de internet',
      description: 'Instabilidade na conexão causa perda de tempo e clientes',
      color: 'orange',
    },
    {
      icon: DollarSign,
      title: 'Gastos inesperados com hardware',
      description: 'Investimentos não planejados comprometem o orçamento',
      color: 'yellow',
    },
    {
      icon: Clock,
      title: 'Falta de suporte rápido',
      description: 'Demora no atendimento técnico paralisa operações',
      color: 'blue',
    },
    {
      icon: AlertTriangle,
      title: 'Alto custo para modernizar',
      description: 'Investimento inicial elevado impede a modernização',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'bg-red-500/10 text-red-600 border-red-200 dark:bg-red-500/20 dark:text-red-400',
      orange: 'bg-orange-500/10 text-orange-600 border-orange-200 dark:bg-orange-500/20 dark:text-orange-400',
      yellow: 'bg-yellow-500/10 text-yellow-600 border-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-400',
      blue: 'bg-blue-500/10 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400',
      purple: 'bg-purple-500/10 text-purple-600 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400',
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section id="helpdesk-problems" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700 px-4 py-2 font-medium">
            <AlertTriangle className="w-4 h-4 mr-2" />
            O Problema Atual das Empresas
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Sua empresa ainda
            <span className="block text-red-600 dark:text-red-400">enfrenta estes desafios?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            A maioria das empresas ainda sofre com problemas que poderiam ser facilmente resolvidos
            <span className="font-medium text-slate-800 dark:text-slate-200"> com a estratégia certa</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-6 p-4 rounded-xl w-fit ${getColorClasses(problem.color)}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {problem.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {problem.description}
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

export default ProblemsSection;
