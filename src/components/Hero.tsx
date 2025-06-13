
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Suporte Técnico
            <span className="text-slate-700 block">Profissional e Confiável</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Central de suporte técnico especializada em soluções digitais. Oferecemos assistência 
            profissional para resolver seus problemas tecnológicos com rapidez e eficiência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 text-lg">
              Solicitar Suporte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg">
              Ver Tutoriais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center p-6">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200">
                <Shield className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">500+</h3>
              <p className="text-slate-600 font-medium">Problemas Resolvidos</p>
            </div>
            
            <div className="flex flex-col items-center p-6">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200">
                <Zap className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">24h</h3>
              <p className="text-slate-600 font-medium">Tempo de Resposta</p>
            </div>
            
            <div className="flex flex-col items-center p-6">
              <div className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200">
                <Users className="h-8 w-8 text-slate-700" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">98%</h3>
              <p className="text-slate-600 font-medium">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
