
import { Play, BookOpen, Download, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Tutorials = () => {
  const tutorials = [
    {
      type: "video",
      title: "Como Instalar o Windows 10/11",
      description: "Tutorial completo para instalação limpa do Windows com todas as configurações necessárias.",
      duration: "15 min",
      category: "Sistemas Operacionais",
      difficulty: "Intermediário",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "text",
      title: "Criando seu Primeiro E-mail",
      description: "Passo a passo para criar uma conta de e-mail segura e configurar em seus dispositivos.",
      duration: "8 min",
      category: "Básico Digital",
      difficulty: "Iniciante",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "video",
      title: "Melhorando sua Conexão de Internet",
      description: "Dicas práticas para otimizar sua velocidade de internet e resolver problemas de conectividade.",
      duration: "12 min",
      category: "Redes",
      difficulty: "Intermediário",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "text",
      title: "Segurança Digital: Primeiros Passos",
      description: "Guia essencial para proteger seus dados pessoais e navegar com segurança na internet.",
      duration: "10 min",
      category: "Segurança",
      difficulty: "Iniciante",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "video",
      title: "Configurando o Linux Ubuntu",
      description: "Instalação e configuração básica do Ubuntu para usuários que estão migrando do Windows.",
      duration: "20 min",
      category: "Sistemas Operacionais",
      difficulty: "Avançado",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&auto=format"
    },
    {
      type: "text",
      title: "Backup de Arquivos Importantes",
      description: "Como fazer backup dos seus arquivos importantes e criar uma rotina de segurança.",
      duration: "6 min",
      category: "Manutenção",
      difficulty: "Iniciante",
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
    <section id="tutorials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Tutoriais e Guias
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Aprenda no seu próprio ritmo com nossos tutoriais profissionais em texto e vídeo,
            cobrindo desde conceitos básicos até temas avançados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
              <div className="relative">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/95 text-slate-700 border-0">
                    {tutorial.type === "video" ? (
                      <Play className="w-3 h-3 mr-1" />
                    ) : (
                      <BookOpen className="w-3 h-3 mr-1" />
                    )}
                    {tutorial.type === "video" ? "Vídeo" : "Texto"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/95 text-slate-700 border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {tutorial.duration}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="text-xs border-slate-200 text-slate-600">
                    {tutorial.category}
                  </Badge>
                  <Badge variant={getDifficultyVariant(tutorial.difficulty)} className="text-xs">
                    {tutorial.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-900">{tutorial.title}</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white">
                  {tutorial.type === "video" ? (
                    <Play className="w-4 h-4 mr-2" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {tutorial.type === "video" ? "Assistir Tutorial" : "Ler Tutorial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
