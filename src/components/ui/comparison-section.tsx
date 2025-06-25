
import { X, Check, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ComparisonSection = () => {
  const comparisons = [
    {
      traditional: 'Alto investimento inicial (CAPEX)',
      allTechIn: 'Custo fixo mensal (OPEX)',
    },
    {
      traditional: 'Suporte técnico limitado',
      allTechIn: 'Suporte completo e contínuo',
    },
    {
      traditional: 'Equipamentos desatualizados',
      allTechIn: 'Renovação programada dos equipamentos',
    },
    {
      traditional: 'Sem monitoramento',
      allTechIn: 'Monitoramento 24/7',
    },
  ];

  return (
    <section id="helpdesk-comparison" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 px-4 py-2 font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            Comparativo
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            <span className="text-red-600 dark:text-red-400">Modelo Tradicional</span>
            <span className="text-slate-600 dark:text-slate-400"> vs </span>
            <span className="text-green-600 dark:text-green-400">All Tech In</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Veja a diferença entre manter o modelo antigo e 
            <span className="font-medium text-slate-800 dark:text-slate-200"> abraçar a inovação </span>
            com nossa solução.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Modelo Tradicional */}
          <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/20">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-3 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 w-fit">
                <TrendingDown className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-red-600 dark:text-red-400">
                Modelo Tradicional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {item.traditional}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* All Tech In */}
          <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-3 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 w-fit">
                <TrendingUp className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">
                All Tech In
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {item.allTechIn}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
