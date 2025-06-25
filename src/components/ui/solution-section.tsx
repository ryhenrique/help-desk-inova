
import { CheckCircle, Shield, Monitor, Zap, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SolutionSectionProps {
  onSupportClick: () => void;
}

const SolutionSection = ({ onSupportClick }: SolutionSectionProps) => {
  const features = [
    {
      icon: Monitor,
      title: 'Equipamentos modernos',
      description: 'Hardware atualizado e de alta performance',
    },
    {
      icon: Shield,
      title: 'Suporte técnico completo',
      description: 'Atendimento remoto e presencial especializado',
    },
    {
      icon: Zap,
      title: 'Monitoramento 24/7',
      description: 'Acompanhamento contínuo da sua infraestrutura',
    },
    {
      icon: Wrench,
      title: 'Substituição rápida',
      description: 'Troca imediata em caso de falha dos equipamentos',
    },
  ];

  return (
    <section id="helpdesk-solution" className="py-24 lg:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 px-4 py-2 font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            A Solução
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            <span className="text-green-600 dark:text-green-400">All Tech In</span>
            <span className="block text-slate-800 dark:text-slate-200">Tecnologia completa com gestão inteligente</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            A HelpDesk Inova apresenta o <span className="font-semibold text-green-600 dark:text-green-400">All Tech In</span>, 
            um pacote completo com tudo que sua empresa precisa para ter uma infraestrutura moderna e confiável.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 max-w-2xl mx-auto border border-green-200/50 dark:border-green-700/50">
            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Custo mensal fixo
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-green-600 dark:text-green-400">Zero investimento inicial</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-6 p-4 rounded-xl w-fit bg-green-500/10 text-green-600 border border-green-200 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/30">
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={onSupportClick}
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 font-semibold rounded-xl transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Conhecer o All Tech In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
