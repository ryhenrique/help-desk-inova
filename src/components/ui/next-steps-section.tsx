
import { Calendar, Search, FileText, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface NextStepsSectionProps {
  onSupportClick: () => void;
}

const NextStepsSection = ({ onSupportClick }: NextStepsSectionProps) => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Análise da infraestrutura atual',
      description: 'Avaliamos seu ambiente tecnológico atual',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Dimensionamento personalizado',
      description: 'Criamos uma solução sob medida para suas necessidades',
    },
    {
      icon: Calendar,
      number: '03',
      title: 'Proposta sob medida',
      description: 'Apresentamos a solução ideal para seu negócio',
    },
    {
      icon: Zap,
      number: '04',
      title: 'Implantação rápida',
      description: 'Colocamos tudo em funcionamento rapidamente',
    },
  ];

  return (
    <section id="helpdesk-next-steps" className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-900/20 dark:via-slate-900 dark:to-green-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 px-4 py-2 font-medium">
            <Calendar className="w-4 h-4 mr-2" />
            Próximos Passos
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Vamos entender suas necessidades
            <span className="block text-blue-600 dark:text-blue-400">e montar a solução ideal</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Um processo simples e transparente para transformar a
            <span className="font-medium text-slate-800 dark:text-slate-200"> infraestrutura tecnológica </span>
            da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800 hover:scale-105 relative overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-blue-100 dark:text-blue-900/50">
                    {step.number}
                  </div>
                  
                  <div className="mx-auto mb-6 p-4 rounded-xl w-fit bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-xl border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Pronto para transformar sua empresa?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Agende uma reunião gratuita e descubra como o All Tech In pode revolucionar sua infraestrutura de TI.
          </p>
          <Button 
            onClick={onSupportClick}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-6 font-bold rounded-xl transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Calendar className="h-6 w-6 mr-3" />
            Agendar Reunião Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
