
import { Play, BookOpen, Download, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-green-100 text-green-800";
      case "Intermediário": return "bg-yellow-100 text-yellow-800";
      case "Avançado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="tutorials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tutoriais e Guias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda no seu próprio ritmo com nossos tutoriais em texto e vídeo,
            cobrindo desde o básico até temas mais avançados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <div className="relative">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {tutorial.type === "video" ? (
                      <Play className="w-3 h-3 mr-1" />
                    ) : (
                      <BookOpen className="w-3 h-3 mr-1" />
                    )}
                    {tutorial.type === "video" ? "Vídeo" : "Texto"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    <Clock className="w-3 h-3 mr-1" />
                    {tutorial.duration}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {tutorial.category}
                  </Badge>
                  <Badge className={`text-xs ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                <CardDescription>
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center">
                  {tutorial.type === "video" ? (
                    <Play className="w-4 h-4 mr-2" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {tutorial.type === "video" ? "Assistir" : "Ler Tutorial"}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
