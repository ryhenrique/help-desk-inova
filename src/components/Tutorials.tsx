
import { Play, BookOpen, Download, Clock, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Tutorials = () => {
  const tutorials = [
    {
      type: "video",
      title: "Instalação Profissional do Windows 11",
      description: "Tutorial completo para instalação empresarial do Windows 11 com configurações de segurança e otimização.",
      duration: "18 min",
      category: "Sistemas Operacionais",
      difficulty: "Intermediário",
      rating: 4.9,
      views: "15.2k",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop&auto=format",
      featured: true
    },
    {
      type: "text",
      title: "Configuração de E-mail Corporativo",
      description: "Guia detalhado para configuração de contas de e-mail empresariais com protocolos de segurança.",
      duration: "12 min",
      category: "Comunicação",
      difficulty: "Iniciante",
      rating: 4.8,
      views: "8.7k",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "video",
      title: "Otimização de Rede Empresarial",
      description: "Técnicas avançadas para otimizar velocidade e segurança de redes corporativas com ferramentas profissionais.",
      duration: "25 min",
      category: "Infraestrutura",
      difficulty: "Avançado",
      rating: 4.9,
      views: "12.1k",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&auto=format",
      featured: true
    },
    {
      type: "text",
      title: "Protocolo de Segurança Digital",
      description: "Implementação de protocolos de segurança corporativa, backup automatizado e proteção de dados sensíveis.",
      duration: "15 min",
      category: "Segurança",
      difficulty: "Intermediário",
      rating: 4.7,
      views: "9.8k",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "video",
      title: "Configuração Avançada do Ubuntu Server",
      description: "Instalação e configuração de servidor Ubuntu para ambiente empresarial com serviços essenciais.",
      duration: "35 min",
      category: "Servidores",
      difficulty: "Avançado",
      rating: 4.8,
      views: "6.4k",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "text",
      title: "Estratégia de Backup Corporativo",
      description: "Implementação de sistema de backup automatizado com redundância e recuperação de desastres.",
      duration: "10 min",
      category: "Backup",
      difficulty: "Intermediário",
      rating: 4.6,
      views: "11.3k",
      thumbnail: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=250&fit=crop&auto=format"
    }
  ];

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "default";
      case "Intermediário": return "secondary";
      case "Avançado": return "destructive";
      default: return "outline";
    }
  };

  return (
    <section id="tutorials" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium">
            <TrendingUp className="w-4 h-4 mr-2" />
            Conteúdo Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Tutoriais &
            <span className="block text-blue-600">Guias Especializados</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Aprenda com nossos especialistas através de tutoriais profissionais em texto e vídeo,
            cobrindo desde <span className="font-medium text-slate-800">fundamentos técnicos</span> até implementações corporativas avançadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${tutorial.featured ? 'ring-2 ring-blue-200' : ''}`}>
              
              {tutorial.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium">
                    <Star className="w-3 h-3 mr-1" />
                    Destaque
                  </Badge>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="secondary" className="bg-white/95 text-slate-700 border-0 font-medium">
                    {tutorial.type === "video" ? (
                      <Play className="w-3 h-3 mr-1" />
                    ) : (
                      <BookOpen className="w-3 h-3 mr-1" />
                    )}
                    {tutorial.type === "video" ? "Vídeo" : "Artigo"}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/95 text-slate-700 border-0 font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    {tutorial.duration}
                  </Badge>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{tutorial.rating}</span>
                  </div>
                  <span className="text-sm">{tutorial.views} visualizações</span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="text-xs border-slate-200 text-slate-600 font-medium">
                    {tutorial.category}
                  </Badge>
                  <Badge variant={getDifficultyVariant(tutorial.difficulty)} className="text-xs font-medium">
                    {tutorial.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {tutorial.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-sm">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium group/button">
                  {tutorial.type === "video" ? (
                    <Play className="w-4 h-4 mr-2 group-hover/button:scale-110 transition-transform" />
                  ) : (
                    <Download className="w-4 h-4 mr-2 group-hover/button:scale-110 transition-transform" />
                  )}
                  {tutorial.type === "video" ? "Assistir Tutorial" : "Ler Artigo"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Receba novos tutoriais em primeira mão
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Assine nossa newsletter e seja o primeiro a acessar conteúdos exclusivos e tutoriais avançados.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-50 font-medium px-8 py-3">
              Assinar Newsletter Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
