
import { useState } from 'react';
import { FileText, Monitor, Shield, Server, Network, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Tutorials = () => {
  const [selectedArticle, setSelectedArticle] = useState(0);

  const articles = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "As Vantagens do Aluguel de Equipamentos para Empresas",
      category: "Equipamentos",
      color: "from-slate-500 to-slate-600",
      thumbnail: "/lovable-uploads/06e2e841-562c-4ce5-9c2a-5268cc6a702c.png",
      content: `
        <h3 class="text-2xl font-bold mb-4 text-slate-900">Por que alugar equipamentos é mais vantajoso?</h3>
        <p class="text-slate-700 mb-6 leading-relaxed">O aluguel de equipamentos tecnológicos tem se tornado uma estratégia cada vez mais adotada pelas empresas modernas. Esta modalidade oferece flexibilidade, economia e acesso às tecnologias mais recentes sem grandes investimentos iniciais.</p>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Principais Vantagens:</h4>
        <ul class="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Redução de Custos:</strong> Não há necessidade de grandes investimentos iniciais</li>
          <li><strong>Flexibilidade:</strong> Possibilidade de upgrade constante dos equipamentos</li>
          <li><strong>Manutenção Incluída:</strong> Suporte técnico e manutenção sem custos adicionais</li>
          <li><strong>Gestão Simplificada:</strong> Foco no core business da empresa</li>
        </ul>
        
        <p class="text-slate-700 mb-4 leading-relaxed">Na Help Desk Inova, oferecemos soluções completas de aluguel com suporte técnico especializado, garantindo que sua empresa tenha sempre os melhores equipamentos funcionando perfeitamente.</p>
        
        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <p class="text-slate-800 font-medium">💡 Dica: O aluguel permite que sua empresa se adapte rapidamente às mudanças tecnológicas sem ficar presa a equipamentos obsoletos.</p>
        </div>
      `
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Os Tipos de Suporte que a Help Desk Inova Oferece",
      category: "Suporte",
      color: "from-blue-500 to-blue-600",
      thumbnail: "/lovable-uploads/3344a290-6d48-4939-b8d9-ca5eb781eafe.png",
      content: `
        <h3 class="text-2xl font-bold mb-4 text-slate-900">Suporte Técnico Completo e Especializado</h3>
        <p class="text-slate-700 mb-6 leading-relaxed">A Help Desk Inova oferece uma gama completa de serviços de suporte técnico, desde atendimento remoto até manutenção presencial, garantindo que sua empresa tenha sempre o apoio necessário.</p>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Modalidades de Suporte:</h4>
        
        <div class="space-y-4 mb-6">
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">🔧 Suporte Remoto</h5>
            <p class="text-slate-700">Resolução rápida de problemas através de acesso remoto seguro, permitindo diagnóstico e correção instantânea.</p>
          </div>
          
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">👨‍💻 Suporte Presencial</h5>
            <p class="text-slate-700">Técnicos especializados no local para problemas que requerem intervenção física ou instalações complexas.</p>
          </div>
          
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">📞 Suporte 24/7</h5>
            <p class="text-slate-700">Atendimento ininterrupto para emergências, garantindo que sua empresa nunca fique desassistida.</p>
          </div>
        </div>
        
        <p class="text-slate-700 mb-4 leading-relaxed">Nossa equipe é composta por profissionais certificados e constantemente atualizados com as últimas tecnologias do mercado.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p class="text-blue-800 font-medium">✅ Resultado: Tempo de resposta médio de 15 minutos e resolução de 95% dos problemas em primeira chamada.</p>
        </div>
      `
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "A Importância de Renovar Equipamentos de Câmeras de Segurança",
      category: "Segurança",
      color: "from-slate-600 to-slate-700",
      thumbnail: "/lovable-uploads/06e2e841-562c-4ce5-9c2a-5268cc6a702c.png",
      content: `
        <h3 class="text-2xl font-bold mb-4 text-slate-900">Segurança Atualizada: Por que Renovar é Essencial</h3>
        <p class="text-slate-700 mb-6 leading-relaxed">Manter sistemas de câmeras de segurança atualizados é fundamental para garantir a proteção efetiva do seu negócio. Tecnologias obsoletas podem comprometer toda a segurança da empresa.</p>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Riscos de Equipamentos Desatualizados:</h4>
        <ul class="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Vulnerabilidades de Segurança:</strong> Firmwares antigos são alvos fáceis para hackers</li>
          <li><strong>Qualidade de Imagem Inferior:</strong> Resolução baixa pode comprometer identificações</li>
          <li><strong>Falta de Recursos Modernos:</strong> Sem IA, detecção de movimento avançada, etc.</li>
          <li><strong>Incompatibilidade:</strong> Dificuldade de integração com sistemas modernos</li>
        </ul>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Benefícios da Renovação:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">📹 Qualidade 4K/8K</h5>
            <p class="text-slate-700 text-sm">Imagens ultra nítidas para identificação precisa</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">🤖 Inteligência Artificial</h5>
            <p class="text-slate-700 text-sm">Detecção automática de comportamentos suspeitos</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">☁️ Armazenamento em Nuvem</h5>
            <p class="text-slate-700 text-sm">Backup seguro e acesso remoto às gravações</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">📱 Monitoramento Mobile</h5>
            <p class="text-slate-700 text-sm">Visualização em tempo real pelo smartphone</p>
          </div>
        </div>
        
        <p class="text-slate-700 mb-4 leading-relaxed">A Help Desk Inova oferece soluções completas de atualização, com instalação, configuração e treinamento inclusos.</p>
      `
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Sistema Failover: Garantindo Continuidade do Negócio",
      category: "Infraestrutura",
      color: "from-blue-600 to-blue-700",
      thumbnail: "/lovable-uploads/3344a290-6d48-4939-b8d9-ca5eb781eafe.png",
      content: `
        <h3 class="text-2xl font-bold mb-4 text-slate-900">O que é um Sistema Failover?</h3>
        <p class="text-slate-700 mb-6 leading-relaxed">Um sistema failover é uma solução de backup automática que garante a continuidade dos serviços de TI mesmo quando o sistema principal falha. É essencial para empresas que não podem se dar ao luxo de ficar offline.</p>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Como Funciona:</h4>
        <div class="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
          <div class="flex items-center space-x-4 mb-4">
            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
            <p class="text-slate-700"><strong>Monitoramento Constante:</strong> Sistema principal é monitorado 24/7</p>
          </div>
          <div class="flex items-center space-x-4 mb-4">
            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
            <p class="text-slate-700"><strong>Detecção de Falha:</strong> Identificação automática de problemas</p>
          </div>
          <div class="flex items-center space-x-4 mb-4">
            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
            <p class="text-slate-700"><strong>Ativação Automática:</strong> Sistema backup assume instantaneamente</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
            <p class="text-slate-700"><strong>Operação Normal:</strong> Serviços continuam sem interrupção</p>
          </div>
        </div>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Benefícios Empresariais:</h4>
        <ul class="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Zero Downtime:</strong> Sua empresa nunca fica offline</li>
          <li><strong>Proteção de Dados:</strong> Informações sempre seguras e acessíveis</li>
          <li><strong>Credibilidade:</strong> Clientes confiam em serviços sempre disponíveis</li>
          <li><strong>Economia:</strong> Evita perdas financeiras por indisponibilidade</li>
        </ul>
        
        <div class="bg-red-50 p-4 rounded-lg border border-red-200">
          <p class="text-red-800 font-medium">⚠️ Importante: Empresas sem failover podem perder até R$ 50.000 por hora de indisponibilidade.</p>
        </div>
      `
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Redes de Computadores: Fundamentos e Melhores Práticas",
      category: "Redes",
      color: "from-slate-700 to-slate-800",
      thumbnail: "/lovable-uploads/e239b180-ebea-489a-b2a9-d0fd86f97834.png",
      content: `
        <h3 class="text-2xl font-bold mb-4 text-slate-900">Redes Corporativas: A Base da Conectividade</h3>
        <p class="text-slate-700 mb-6 leading-relaxed">Uma rede de computadores bem estruturada é fundamental para o sucesso de qualquer empresa moderna. Ela conecta pessoas, dispositivos e sistemas, permitindo comunicação eficiente e compartilhamento de recursos.</p>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Componentes Essenciais:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">🌐 Roteadores</h5>
            <p class="text-slate-700 text-sm">Direcionam o tráfego entre diferentes redes</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">🔌 Switches</h5>
            <p class="text-slate-700 text-sm">Conectam dispositivos na mesma rede local</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">🔥 Firewalls</h5>
            <p class="text-slate-700 text-sm">Protegem contra acessos não autorizados</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-900 mb-2">📡 Access Points</h5>
            <p class="text-slate-700 text-sm">Fornecem conectividade Wi-Fi corporativa</p>
          </div>
        </div>
        
        <h4 class="text-xl font-semibold mb-3 text-slate-900">Melhores Práticas:</h4>
        <ul class="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Segmentação de Rede:</strong> Separar diferentes tipos de tráfego</li>
          <li><strong>Monitoramento Contínuo:</strong> Acompanhar performance e uso</li>
          <li><strong>Backup de Configurações:</strong> Manter cópias de todas as configurações</li>
          <li><strong>Atualizações Regulares:</strong> Manter firmwares sempre atualizados</li>
          <li><strong>Documentação Completa:</strong> Mapear toda a infraestrutura</li>
        </ul>
        
        <p class="text-slate-700 mb-4 leading-relaxed">A Help Desk Inova projeta, implementa e mantém redes corporativas robustas e seguras, garantindo conectividade confiável para seu negócio.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p class="text-blue-800 font-medium">🚀 Performance: Nossas redes são otimizadas para oferecer velocidade até 40% superior à média do mercado.</p>
        </div>
      `
    }
  ];

  const nextArticle = () => {
    setSelectedArticle((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setSelectedArticle((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section id="tutorials" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-slate-100 text-slate-700 border-slate-200 px-4 py-2 font-medium">
            <FileText className="w-4 h-4 mr-2" />
            Artigos Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Descubra Nossas
            <span className="block text-blue-600">Soluções em Tecnologia</span>
          </h2>
          <p class="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore os artigos da HELP DESK INOVA e fique por dentro das 
            <span class="font-medium text-slate-800"> melhores práticas e inovações </span>
            em TI para manter sua empresa sempre à frente.
          </p>
        </div>

        {/* Article Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {articles.map((article, index) => (
            <button
              key={index}
              onClick={() => setSelectedArticle(index)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedArticle === index
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-200'
              }`}
            >
              {article.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Main Article Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Article Content */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl bg-white overflow-hidden">
                <div className="relative">
                  <img 
                    src={articles[selectedArticle].thumbnail} 
                    alt={articles[selectedArticle].title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${articles[selectedArticle].color} shadow-lg`}>
                      <div className="text-white">
                        {articles[selectedArticle].icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6">
                    <Badge variant="secondary" className="bg-white/95 text-slate-700 border-0 font-medium px-3 py-1">
                      {articles[selectedArticle].category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-900 leading-tight">
                    {articles[selectedArticle].title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="prose prose-slate max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: articles[selectedArticle].content }} />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Outros Artigos</h3>
                <div className="space-y-3">
                  {articles.map((article, index) => (
                    index !== selectedArticle && (
                      <Card 
                        key={index} 
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-sm hover:shadow-md"
                        onClick={() => setSelectedArticle(index)}
                      >
                        <CardHeader className="p-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${article.color}`}>
                              <div className="text-white text-sm">
                                {article.icon}
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-sm font-semibold text-slate-900 leading-tight hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs w-fit border-slate-200 text-slate-600">
                            {article.category}
                          </Badge>
                        </CardHeader>
                      </Card>
                    )
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex space-x-2 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevArticle}
                    className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Anterior
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextArticle}
                    className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    Próximo
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Contamos com os melhores especialistas do setor
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Ligue agora e fale com um de nossos especialistas para descobrir a solução ideal para sua empresa!
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-slate-900 hover:bg-slate-50 font-medium px-8 py-3"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
            >
              Veja Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
