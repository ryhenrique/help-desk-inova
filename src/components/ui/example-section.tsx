
import { Users, Wifi, Monitor, Shield, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExampleSection = () => {
  const results = [
    {
      icon: Monitor,
      title: 'Estações de trabalho atualizadas',
      description: 'Toda a equipe com equipamentos modernos e eficientes',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi confiável com access points',
      description: 'Cobertura total com alta performance em todos os ambientes',
    },
    {
      icon: Shield,
      title: 'Monitoramento contínuo da rede',
      description: 'Acompanhamento 24/7 para prevenir problemas',
    },
    {
      icon: Users,
      title: 'Suporte remoto ilimitado',
      description: 'Atendimento técnico sempre disponível quando necessário',
    },
  ];

  return (
    <section id="helpdesk-example" className="py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2 font-medium">
            <Users className="w-4 h-4 mr-2" />
            Exemplo Prático
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            <span className="text-blue-600 dark:text-blue-400">Empresa com 10 usuários</span>
            <span className="block text-slate-800 dark:text-slate-200">modernizou toda sua estrutura</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Veja como uma empresa transformou completamente sua
            <span className="font-medium text-slate-800 dark:text-slate-200"> infraestrutura tecnológica </span>
            com o All Tech In.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <Card 
                  key={index} 
                  className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Resultado: Transformação Completa
              </h3>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Em apenas algumas semanas, a empresa teve sua infraestrutura completamente modernizada, 
              com maior produtividade, segurança e confiabilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
