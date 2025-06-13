
import { Monitor, Smartphone, Wifi, Settings, HardDrive, Shield, ArrowRight, Camera, Server, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "Suporte HelpDesk Especializado",
      description: "Assistência técnica completa com suporte remoto e presencial. Resolução rápida de problemas tecnológicos para manter sua empresa funcionando.",
      features: ["Suporte 24/7", "Atendimento remoto", "Manutenção preventiva", "Consultoria técnica"],
      color: "from-blue-500 to-blue-600",
      badge: "Premium"
    },
    {
      icon: <Camera className="h-7 w-7" />,
      title: "Segurança Total com Câmeras",
      description: "Câmeras de segurança com suporte completo, sem necessidade de compra. Instalação, manutenção e reposição de peças sem custo adicional.",
      features: ["Sem necessidade de compra", "Instalação profissional", "Manutenção incluída", "Reposição gratuita"],
      color: "from-emerald-500 to-emerald-600",
      badge: "Completo"
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Sistema Failover Robusto",
      description: "Confiabilidade ininterrupta com nosso sistema Failover. Garantimos que sua empresa nunca fique offline, mesmo em caso de falhas.",
      features: ["Zero downtime", "Backup automático", "Redundância total", "Monitoramento 24/7"],
      color: "from-violet-500 to-violet-600",
      badge: "Confiável"
    },
    {
      icon: <Network className="h-7 w-7" />,
      title: "Expertise em Redes de Computadores",
      description: "Garantindo conectividade e segurança com soluções inovadoras e suporte excepcional para infraestrutura de rede.",
      features: ["Configuração profissional", "Segurança avançada", "Otimização de performance", "Suporte especializado"],
      color: "from-orange-500 to-orange-600",
      badge: "Expert"
    },
    {
      icon: <Wifi className="h-7 w-7" />,
      title: "Monitoramento de Rede em Tempo Real",
      description: "Supervisão contínua para máxima eficiência. Monitoramos sua rede 24/7, identificando problemas antes que afetem suas operações.",
      features: ["Monitoramento 24/7", "Detecção proativa", "Relatórios detalhados", "Performance garantida"],
      color: "from-cyan-500 to-cyan-600",
      badge: "24/7"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Segurança de Rede Avançada",
      description: "Proteção total contra ameaças cibernéticas. Implementamos firewalls e sistemas de detecção de intrusões para proteger sua rede.",
      features: ["Firewall avançado", "Detecção de intrusões", "Proteção antivírus", "Backup seguro"],
      color: "from-red-500 to-red-600",
      badge: "Seguro"
    }
  ];

  return (
    <>
      <style>{`
        .premium-card {
          display: flex;
          flex-direction: column;
          position: relative;
          background: #29292c;
          border-radius: 1rem;
          overflow: hidden;
          font-family: system-ui, -apple-system, sans-serif;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          min-height: 420px;
        }

        .premium-card:before {
          position: absolute;
          content: "";
          inset: 0.0625rem;
          border-radius: 0.9375rem;
          background: #18181b;
          z-index: 1;
        }

        .premium-card:after {
          position: absolute;
          content: "";
          width: 0.25rem;
          inset: 0.65rem auto 0.65rem 0.5rem;
          border-radius: 0.125rem;
          background: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
          transition: transform 300ms ease;
          z-index: 3;
        }

        .premium-card:hover:after {
          transform: translateX(0.15rem);
        }

        .premium-card-header {
          position: relative;
          z-index: 4;
          padding: 1.25rem 1.25rem 0.75rem;
          transition: transform 300ms ease;
        }

        .premium-card:hover .premium-card-header {
          transform: translateX(0.15rem);
        }

        .premium-card-content {
          position: relative;
          z-index: 4;
          padding: 0 1.25rem 1.25rem;
          transition: transform 300ms ease;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .premium-card:hover .premium-card-content {
          transform: translateX(0.25rem);
        }

        .premium-card-title {
          color: #32a6ff;
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .premium-card-description {
          color: #99999d;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .premium-card-features {
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .premium-card-feature {
          display: flex;
          align-items: center;
          color: #99999d;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }

        .premium-card-feature-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
          margin-right: 0.75rem;
          flex-shrink: 0;
        }

        .premium-card-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(50, 166, 255, 0.1);
          color: #32a6ff;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
          z-index: 4;
          border: 1px solid rgba(50, 166, 255, 0.2);
        }

        .premium-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          background: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
          color: white;
          margin-bottom: 1rem;
        }

        .premium-card-button {
          background: rgba(50, 166, 255, 0.1);
          color: #32a6ff;
          border: 1px solid rgba(50, 166, 255, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .premium-card-button:hover {
          background: rgba(50, 166, 255, 0.2);
          border-color: rgba(50, 166, 255, 0.4);
          transform: translateY(-1px);
        }

        .premium-glow {
          position: absolute;
          width: 20rem;
          height: 20rem;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle closest-side at center, #32a6ff, transparent);
          opacity: 0;
          transition: opacity 300ms ease;
          z-index: 2;
          pointer-events: none;
        }

        .premium-card:hover .premium-glow {
          opacity: 0.05;
        }
      `}</style>

      <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 font-medium">
              Excelência em Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
              Conte sempre com a
              <span className="block text-blue-400">HELP DESK INOVA</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
              A HELP DESK INOVA é especialista em soluções tecnológicas para empresas, oferecendo suporte HelpDesk, 
              gerenciamento de redes, e segurança cibernética. Com uma equipe qualificada e valores justos, 
              <span className="font-medium text-slate-300"> garantimos eficiência e inovação </span>
              para o crescimento seguro do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="premium-card group">
                <div className="premium-glow"></div>
                <div className="premium-card-badge">
                  {service.badge}
                </div>
                
                <div className="premium-card-header">
                  <div className="premium-card-icon">
                    {service.icon}
                  </div>
                  <h3 className="premium-card-title">
                    {service.title}
                  </h3>
                </div>
                
                <div className="premium-card-content">
                  <p className="premium-card-description">
                    {service.description}
                  </p>
                  
                  <div className="premium-card-features">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="premium-card-feature">
                        <div className="premium-card-feature-dot"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="premium-card-button"
                    onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
                  >
                    Saiba Mais
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Excelência em Serviços e Equipamentos para Seu Negócio
                </h3>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  Oferecemos serviços de alta qualidade e equipamentos de ponta, adaptados para atender às necessidades de qualquer tipo de empresa.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-8 py-3 border-0"
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
                >
                  Fale com os nossos especialistas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
