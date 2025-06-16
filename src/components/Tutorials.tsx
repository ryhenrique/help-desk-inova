
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
      title: "Suporte Técnico de 1º e 2º Nível: Diferenças e Aplicações",
      category: "Suporte",
      color: "from-slate-500 to-slate-600",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      content: `
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Entendendo os Níveis de Suporte Técnico</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">O suporte técnico é estruturado em níveis para garantir eficiência e especialização no atendimento. Cada nível tem responsabilidades específicas e complementares.</p>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Suporte de 1º Nível:</h4>
        <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Primeiro Contato:</strong> Atendimento inicial aos usuários</li>
          <li><strong>Problemas Básicos:</strong> Resolução de questões simples e recorrentes</li>
          <li><strong>Diagnóstico Inicial:</strong> Identificação e triagem de problemas</li>
          <li><strong>Documentação:</strong> Registro detalhado de todas as ocorrências</li>
        </ul>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Suporte de 2º Nível:</h4>
        <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Problemas Complexos:</strong> Questões que exigem conhecimento técnico avançado</li>
          <li><strong>Análise Profunda:</strong> Investigação detalhada de falhas de sistema</li>
          <li><strong>Configurações Avançadas:</strong> Ajustes em servidores e infraestrutura</li>
          <li><strong>Escalamento:</strong> Encaminhamento para especialistas quando necessário</li>
        </ul>
        
        <p className="text-slate-700 mb-4 leading-relaxed">Na Help Desk Inova, nossos técnicos são capacitados para atuar em ambos os níveis, garantindo resolução rápida e eficiente para qualquer tipo de problema.</p>
        
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <p className="text-slate-800 font-medium">💡 Resultado: 90% dos problemas resolvidos no 1º nível e tempo médio de resolução de 15 minutos.</p>
        </div>
      `
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Gerenciamento de Redes Corporativas: Estratégias e Boas Práticas",
      category: "Redes",
      color: "from-blue-500 to-blue-600",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      content: `
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Gerenciamento Profissional de Redes</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">O gerenciamento eficaz de redes corporativas é fundamental para garantir conectividade, segurança e performance ideais em ambientes empresariais.</p>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Componentes Essenciais:</h4>
        
        <div className="space-y-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">🌐 Topologia de Rede</h5>
            <p className="text-slate-700">Design e estruturação da arquitetura de rede para máxima eficiência e escalabilidade.</p>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">📊 Monitoramento 24/7</h5>
            <p className="text-slate-700">Supervisão contínua de tráfego, performance e disponibilidade da rede.</p>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">⚡ Otimização de Performance</h5>
            <p className="text-slate-700">Análise e melhoria contínua da velocidade e qualidade da conexão.</p>
          </div>
        </div>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Benefícios do Gerenciamento Profissional:</h4>
        <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Disponibilidade:</strong> 99.9% de uptime garantido</li>
          <li><strong>Segurança:</strong> Proteção contra ameaças e vulnerabilidades</li>
          <li><strong>Escalabilidade:</strong> Crescimento conforme necessidades da empresa</li>
          <li><strong>Economia:</strong> Redução de custos operacionais</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-medium">🚀 Performance: Nossas redes gerenciadas apresentam 40% melhor performance que a média do mercado.</p>
        </div>
      `
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Firewall e Cibersegurança: Proteção Completa para sua Empresa",
      category: "Segurança",
      color: "from-slate-600 to-slate-700",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      content: `
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Segurança Digital Avançada</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">A cibersegurança moderna exige uma abordagem multicamadas, onde firewalls são apenas o primeiro nível de proteção contra ameaças digitais.</p>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Componentes de Segurança:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">🛡️ Firewall Next-Gen</h5>
            <p className="text-slate-700 text-sm">Proteção avançada com inspeção profunda de pacotes</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">🔍 Detecção de Intrusão</h5>
            <p className="text-slate-700 text-sm">Monitoramento em tempo real de atividades suspeitas</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">🦠 Antivírus Corporativo</h5>
            <p className="text-slate-700 text-sm">Proteção contra malware e ransomware</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">🔐 Criptografia de Dados</h5>
            <p className="text-slate-700 text-sm">Proteção de informações sensíveis</p>
          </div>
        </div>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Ameaças Bloqueadas:</h4>
        <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Ataques DDoS:</strong> Proteção contra sobrecarga de tráfego</li>
          <li><strong>Phishing:</strong> Bloqueio de tentativas de roubo de dados</li>
          <li><strong>Ransomware:</strong> Prevenção de sequestro de arquivos</li>
          <li><strong>Acesso Não Autorizado:</strong> Controle rigoroso de permissões</li>
        </ul>
        
        <p className="text-slate-700 mb-4 leading-relaxed">Nossa equipe especializada mantém sua empresa protegida contra as ameaças mais recentes e sofisticadas do cenário digital.</p>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-red-800 font-medium">⚠️ Estatística: 95% dos ataques cibernéticos são bloqueados por nossos sistemas de segurança.</p>
        </div>
      `
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Infraestrutura de TI: Servidores e Backup Corporativo",
      category: "Infraestrutura",
      color: "from-blue-600 to-blue-700",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      content: `
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Infraestrutura Sólida e Confiável</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">Uma infraestrutura de TI robusta é a base para o sucesso de qualquer negócio moderno. Servidores bem configurados e backups seguros garantem continuidade operacional.</p>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Soluções em Servidores:</h4>
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
            <p className="text-slate-700"><strong>Dimensionamento:</strong> Servidores adequados ao seu negócio</p>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
            <p className="text-slate-700"><strong>Configuração:</strong> Setup otimizado para máxima performance</p>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
            <p className="text-slate-700"><strong>Monitoramento:</strong> Supervisão 24/7 da infraestrutura</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
            <p className="text-slate-700"><strong>Manutenção:</strong> Updates e patches de segurança</p>
          </div>
        </div>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Backup e Recuperação:</h4>
        <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Backup Automatizado:</strong> Cópias automáticas de todos os dados</li>
          <li><strong>Múltiplas Localizações:</strong> Armazenamento local e em nuvem</li>
          <li><strong>Teste de Recuperação:</strong> Validação regular dos backups</li>
          <li><strong>RTO Mínimo:</strong> Recuperação rápida em caso de falhas</li>
        </ul>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-green-800 font-medium">✅ Garantia: 99.99% de disponibilidade dos dados com tempo de recuperação inferior a 1 hora.</p>
        </div>
      `
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Monitoramento e Análise: Ferramentas de Observabilidade",
      category: "Monitoramento",
      color: "from-slate-700 to-slate-800",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      content: `
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Observabilidade Completa da Sua TI</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">O monitoramento proativo é essencial para identificar problemas antes que afetem os usuários. Utilizamos ferramentas avançadas de observabilidade para garantir performance ideal.</p>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Métricas Monitoradas:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">📊 Performance de Sistema</h5>
            <p className="text-slate-700 text-sm">CPU, memória, disco e rede em tempo real</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">🔍 Logs de Aplicação</h5>
            <p className="text-slate-700 text-sm">Análise detalhada de eventos e erros</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">⚡ Disponibilidade</h5>
            <p className="text-slate-700 text-sm">Uptime de serviços e aplicações</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">🛡️ Segurança</h5>
            <p className="text-slate-700 text-sm">Detecção de anomalias e ameaças</p>
          </div>
        </div>
        
        <h4 className="text-xl font-semibold mb-3 text-slate-900">Alertas Inteligentes:</h4>
        <ul className="list-disc list-inside mb-6 text-slate-700 space-y-2">
          <li><strong>Notificações Proativas:</strong> Avisos antes que problemas se tornem críticos</li>
          <li><strong>Escalamento Automático:</strong> Notificação hierárquica baseada na severidade</li>
          <li><strong>Dashboards Executivos:</strong> Visão estratégica para tomada de decisões</li>
          <li><strong>Relatórios Automáticos:</strong> Análises periódicas de performance</li>
        </ul>
        
        <p className="text-slate-700 mb-4 leading-relaxed">Nossa plataforma de monitoramento oferece visibilidade completa da sua infraestrutura, permitindo ação preventiva e otimização contínua.</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-medium">📈 Resultado: Redução de 70% em incidentes críticos através do monitoramento proativo.</p>
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
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore os artigos da HELP DESK INOVA e fique por dentro das 
            <span className="font-medium text-slate-800"> melhores práticas e inovações </span>
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
