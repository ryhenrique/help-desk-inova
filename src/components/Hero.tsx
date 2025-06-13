
import { ArrowRight, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <Badge variant="secondary" className="mb-8 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Certificado em Suporte Técnico Premium
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Suporte Técnico
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Profissional & Confiável
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Central de excelência em soluções digitais. Oferecemos assistência técnica 
            <span className="font-medium text-slate-800"> especializada e profissional </span>
            para resolver seus desafios tecnológicos com rapidez e eficiência.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Solicitar Suporte Premium
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-4 text-lg font-medium transition-all duration-200"
            >
              Explorar Tutoriais
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/50 hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-3">500+</h3>
                <p className="text-slate-600 font-medium text-lg">Problemas Resolvidos</p>
                <p className="text-sm text-slate-500 mt-2">Com excelência técnica</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/50 hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-xl w-fit mx-auto mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-3">24h</h3>
                <p className="text-slate-600 font-medium text-lg">Tempo de Resposta</p>
                <p className="text-sm text-slate-500 mt-2">Atendimento rápido</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/50 hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                <div className="bg-gradient-to-br from-violet-500 to-violet-600 p-4 rounded-xl w-fit mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-3">98%</h3>
                <p className="text-slate-600 font-medium text-lg">Satisfação</p>
                <p className="text-sm text-slate-500 mt-2">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
