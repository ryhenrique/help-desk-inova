
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Suporte Técnico
            <span className="text-blue-600 block">Simplificado</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Central de suporte técnico e orientação digital. Ajudamos você com dificuldades 
            técnicas em dispositivos, sistemas e redes de forma rápida e eficiente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              Solicitar Suporte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Ver Tutoriais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Problemas Resolvidos</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24h</h3>
              <p className="text-gray-600">Tempo de Resposta</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
