
import { FileText, Monitor, Shield, Server, Network, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Tutorials = () => {
  const articles = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "As Vantagens do Aluguel de Equipamentos para Empresas",
      description: "Descubra como o aluguel de equipamentos pode reduzir custos e aumentar a eficiência operacional da sua empresa.",
      category: "Equipamentos",
      color: "from-blue-500 to-blue-600",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&auto=format"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Os Tipos de Suporte que a Help Desk Inova Oferece",
      description: "Conheça todos os tipos de suporte técnico especializado que oferecemos para manter sua empresa funcionando perfeitamente.",
      category: "Suporte",
      color: "from-emerald-500 to-emerald-600",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop&auto=format"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "A Importância de Renovar Equipamentos de Câmeras de Segurança",
      description: "Entenda por que manter seus equipamentos de segurança atualizados é fundamental para proteger seu negócio.",
      category: "Segurança",
      color: "from-violet-500 to-violet-600",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&auto=format"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Configuração e Manutenção de Servidores",
      description: "Servidores otimizados e sempre atualizados. Configuração personalizada e manutenção regular para máxima eficiência.",
      category: "Infraestrutura",
      color: "from-orange-500 to-orange-600",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Monitoramento de Rede em Tempo Real",
      description: "Supervisão contínua 24/7, identificando e resolvendo problemas antes que afetem suas operações.",
      category: "Redes",
      color: "from-cyan-500 to-cyan-600",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sistema Failover para Empresas",
      description: "Como garantir que sua empresa nunca fique offline com nosso sistema Failover robusto e confiável.",
      category: "Segurança",
      color: "from-red-500 to-red-600",
      thumbnail: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop&auto=format"
    }
  ];

  return (
    <section id="tutorials" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium">
            <FileText className="w-4 h-4 mr-2" />
            Artigos Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Descubra Nossas
            <span className="block text-blue-600">Soluções em Tecnologia</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore os artigos da HELP DESK INOVA e fique por dentro das 
            <span className="font-medium text-slate-800"> melhores práticas e inovações </span>
            em TI para manter sua empresa sempre à frente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              
              <div className="relative overflow-hidden">
                <img 
                  src={article.thumbnail} 
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/95 text-slate-700 border-0 font-medium">
                    <FileText className="w-3 h-3 mr-1" />
                    Artigo
                  </Badge>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${article.color} shadow-lg`}>
                    <div className="text-white">
                      {article.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="text-xs border-slate-200 text-slate-600 font-medium">
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-sm">
                  {article.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium group/button">
                  <FileText className="w-4 h-4 mr-2 group-hover/button:scale-110 transition-transform" />
                  Ler Artigo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Contamos com os melhores especialistas do setor
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Ligue agora e fale com um de nossos especialistas para descobrir a solução ideal para sua empresa!
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-50 font-medium px-8 py-3">
              Veja Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
