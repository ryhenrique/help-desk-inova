
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
        .container {
          position: relative;
          width: 300px;
          height: 400px;
          transition: 200ms;
          margin: 0 auto;
        }

        .container:active {
          width: 290px;
          height: 385px;
        }

        #card {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          border-radius: 20px;
          transition: 700ms;
          background: linear-gradient(45deg, #1a1a1a, #262626);
          border: 2px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow:
            0 0 20px rgba(0, 0, 0, 0.3),
            inset 0 0 20px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        #prompt {
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: 300ms ease-in-out;
          position: absolute;
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .title {
          opacity: 0;
          transition: 300ms ease-in-out;
          position: absolute;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 2px;
          text-align: center;
          width: 100%;
          padding-top: 20px;
          background: linear-gradient(45deg, #00ffaa, #00a2ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
          text-shadow:
            0 0 10px rgba(92, 103, 255, 0.5),
            0 0 20px rgba(92, 103, 255, 0.3);
          line-height: 1.2;
          z-index: 15;
        }

        .subtitle {
          position: absolute;
          bottom: 120px;
          width: 100%;
          text-align: center;
          font-size: 11px;
          letter-spacing: 1px;
          transform: translateY(30px);
          color: rgba(255, 255, 255, 0.6);
          padding: 0 10px;
          line-height: 1.4;
          z-index: 15;
        }

        .highlight {
          color: #00ffaa;
          margin-left: 5px;
          background: linear-gradient(90deg, #5c67ff, #ad51ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }

        .glowing-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .glow-1,
        .glow-2,
        .glow-3 {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(0, 255, 170, 0.3) 0%,
            rgba(0, 255, 170, 0) 70%
          );
          filter: blur(15px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .glow-1 {
          top: -20px;
          left: -20px;
        }
        .glow-2 {
          top: 50%;
          right: -30px;
          transform: translateY(-50%);
        }
        .glow-3 {
          bottom: -20px;
          left: 30%;
        }

        .card-particles span {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #00ffaa;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          background: linear-gradient(45deg, #00ffaa, #00a2ff);
          color: white;
          margin-bottom: 1rem;
          z-index: 10;
          position: relative;
        }

        .card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 255, 170, 0.1);
          color: #00ffaa;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
          z-index: 10;
          border: 1px solid rgba(0, 255, 170, 0.2);
        }

        .card-features {
          margin-top: auto;
          margin-bottom: 1rem;
          z-index: 10;
          position: relative;
        }

        .card-feature {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }

        .card-feature-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: linear-gradient(45deg, #00ffaa, #00a2ff);
          margin-right: 0.75rem;
          flex-shrink: 0;
        }

        .card-button {
          background: rgba(0, 255, 170, 0.1);
          color: #00ffaa;
          border: 1px solid rgba(0, 255, 170, 0.2);
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
          z-index: 10;
          position: relative;
        }

        .card-button:hover {
          background: rgba(0, 255, 170, 0.2);
          border-color: rgba(0, 255, 170, 0.4);
          transform: translateY(-1px);
        }

        /* Hover effects */
        .canvas:hover ~ #card .title {
          opacity: 1;
          transform: translateY(-10px);
        }

        .canvas:hover ~ #card .glowing-elements div {
          opacity: 1;
        }

        .canvas:hover ~ #card .card-particles span {
          animation: particleFloat 2s infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
            opacity: 0;
          }
        }

        /* Particle positions */
        .card-particles span:nth-child(1) {
          --x: 1;
          --y: -1;
          top: 40%;
          left: 20%;
        }
        .card-particles span:nth-child(2) {
          --x: -1;
          --y: -1;
          top: 60%;
          right: 20%;
        }
        .card-particles span:nth-child(3) {
          --x: 0.5;
          --y: 1;
          top: 20%;
          left: 40%;
        }
        .card-particles span:nth-child(4) {
          --x: -0.5;
          --y: 1;
          top: 80%;
          right: 40%;
        }
        .card-particles span:nth-child(5) {
          --x: 1;
          --y: 0.5;
          top: 30%;
          left: 60%;
        }
        .card-particles span:nth-child(6) {
          --x: -1;
          --y: 0.5;
          top: 70%;
          right: 60%;
        }

        #card::before {
          content: "";
          background: radial-gradient(
            circle at center,
            rgba(0, 255, 170, 0.1) 0%,
            rgba(0, 162, 255, 0.05) 50%,
            transparent 100%
          );
          filter: blur(20px);
          opacity: 0;
          width: 150%;
          height: 150%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }

        .canvas:hover ~ #card::before {
          opacity: 1;
        }

        .canvas:hover ~ #card #prompt {
          opacity: 0;
        }

        .canvas:hover ~ #card {
          transition: 300ms;
          filter: brightness(1.1);
        }

        .container:hover #card::before {
          transition: 200ms;
          content: "";
          opacity: 80%;
        }

        .canvas {
          perspective: 800px;
          inset: 0;
          z-index: 200;
          position: absolute;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          gap: 0px 0px;
          grid-template-areas:
            "tr-1 tr-2 tr-3 tr-4 tr-5"
            "tr-6 tr-7 tr-8 tr-9 tr-10"
            "tr-11 tr-12 tr-13 tr-14 tr-15"
            "tr-16 tr-17 tr-18 tr-19 tr-20"
            "tr-21 tr-22 tr-23 tr-24 tr-25";
        }

        .tr-1 { grid-area: tr-1; }
        .tr-2 { grid-area: tr-2; }
        .tr-3 { grid-area: tr-3; }
        .tr-4 { grid-area: tr-4; }
        .tr-5 { grid-area: tr-5; }
        .tr-6 { grid-area: tr-6; }
        .tr-7 { grid-area: tr-7; }
        .tr-8 { grid-area: tr-8; }
        .tr-9 { grid-area: tr-9; }
        .tr-10 { grid-area: tr-10; }
        .tr-11 { grid-area: tr-11; }
        .tr-12 { grid-area: tr-12; }
        .tr-13 { grid-area: tr-13; }
        .tr-14 { grid-area: tr-14; }
        .tr-15 { grid-area: tr-15; }
        .tr-16 { grid-area: tr-16; }
        .tr-17 { grid-area: tr-17; }
        .tr-18 { grid-area: tr-18; }
        .tr-19 { grid-area: tr-19; }
        .tr-20 { grid-area: tr-20; }
        .tr-21 { grid-area: tr-21; }
        .tr-22 { grid-area: tr-22; }
        .tr-23 { grid-area: tr-23; }
        .tr-24 { grid-area: tr-24; }
        .tr-25 { grid-area: tr-25; }

        .tr-1:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg); }
        .tr-2:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg); }
        .tr-3:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg); }
        .tr-4:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg); }
        .tr-5:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg); }
        .tr-6:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg); }
        .tr-7:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg); }
        .tr-8:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg); }
        .tr-9:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg); }
        .tr-10:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg); }
        .tr-11:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg); }
        .tr-12:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg); }
        .tr-13:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        .tr-14:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg); }
        .tr-15:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg); }
        .tr-16:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg); }
        .tr-17:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg); }
        .tr-18:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg); }
        .tr-19:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg); }
        .tr-20:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg); }
        .tr-21:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg); }
        .tr-22:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg); }
        .tr-23:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg); }
        .tr-24:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg); }
        .tr-25:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg); }

        .noselect {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .card-glare {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 45%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.05) 55%,
            rgba(255, 255, 255, 0) 100%
          );
          opacity: 0;
          transition: opacity 300ms;
        }

        .cyber-lines span {
          position: absolute;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 170, 0.2),
            transparent
          );
        }

        .cyber-lines span:nth-child(1) {
          top: 20%;
          left: 0;
          width: 100%;
          height: 1px;
          transform: scaleX(0);
          transform-origin: left;
          animation: lineGrow 3s linear infinite;
        }

        .cyber-lines span:nth-child(2) {
          top: 40%;
          right: 0;
          width: 100%;
          height: 1px;
          transform: scaleX(0);
          transform-origin: right;
          animation: lineGrow 3s linear infinite 1s;
        }

        .cyber-lines span:nth-child(3) {
          top: 60%;
          left: 0;
          width: 100%;
          height: 1px;
          transform: scaleX(0);
          transform-origin: left;
          animation: lineGrow 3s linear infinite 2s;
        }

        .cyber-lines span:nth-child(4) {
          top: 80%;
          right: 0;
          width: 100%;
          height: 1px;
          transform: scaleX(0);
          transform-origin: right;
          animation: lineGrow 3s linear infinite 1.5s;
        }

        .corner-elements span {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid rgba(0, 255, 170, 0.3);
          transition: all 0.3s ease;
        }

        .corner-elements span:nth-child(1) {
          top: 10px;
          left: 10px;
          border-right: 0;
          border-bottom: 0;
        }

        .corner-elements span:nth-child(2) {
          top: 10px;
          right: 10px;
          border-left: 0;
          border-bottom: 0;
        }

        .corner-elements span:nth-child(3) {
          bottom: 10px;
          left: 10px;
          border-right: 0;
          border-top: 0;
        }

        .corner-elements span:nth-child(4) {
          bottom: 10px;
          right: 10px;
          border-left: 0;
          border-top: 0;
        }

        .scan-line {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(0, 255, 170, 0.1),
            transparent
          );
          transform: translateY(-100%);
          animation: scanMove 2s linear infinite;
        }

        @keyframes lineGrow {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0);
            opacity: 0;
          }
        }

        @keyframes scanMove {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        #card:hover .card-glare {
          opacity: 1;
        }

        #card:hover .corner-elements span {
          border-color: rgba(0, 255, 170, 0.8);
          box-shadow: 0 0 10px rgba(0, 255, 170, 0.5);
        }

        @media (max-width: 768px) {
          .container {
            width: 280px;
            height: 380px;
          }
          
          .container:active {
            width: 270px;
            height: 365px;
          }
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
              <div key={index} className="container noselect">
                <div className="canvas">
                  <div className="tr-1"></div>
                  <div className="tr-2"></div>
                  <div className="tr-3"></div>
                  <div className="tr-4"></div>
                  <div className="tr-5"></div>
                  <div className="tr-6"></div>
                  <div className="tr-7"></div>
                  <div className="tr-8"></div>
                  <div className="tr-9"></div>
                  <div className="tr-10"></div>
                  <div className="tr-11"></div>
                  <div className="tr-12"></div>
                  <div className="tr-13"></div>
                  <div className="tr-14"></div>
                  <div className="tr-15"></div>
                  <div className="tr-16"></div>
                  <div className="tr-17"></div>
                  <div className="tr-18"></div>
                  <div className="tr-19"></div>
                  <div className="tr-20"></div>
                  <div className="tr-21"></div>
                  <div className="tr-22"></div>
                  <div className="tr-23"></div>
                  <div className="tr-24"></div>
                  <div className="tr-25"></div>
                </div>
                
                <div id="card">
                  <div className="card-glare"></div>
                  
                  <div className="cyber-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  
                  <div className="corner-elements">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  
                  <div className="scan-line"></div>
                  
                  <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                  </div>
                  
                  <div className="card-particles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  
                  <div className="card-badge">
                    {service.badge}
                  </div>
                  
                  <div className="card-content">
                    <div className="card-icon">
                      {service.icon}
                    </div>
                    
                    <h3 className="title">
                      {service.title}
                    </h3>
                    
                    <p className="subtitle">
                      {service.description}
                    </p>
                    
                    <div className="card-features">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="card-feature">
                          <div className="card-feature-dot"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      className="card-button"
                      onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank')}
                    >
                      Saiba Mais
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div id="prompt">Explore nossos serviços</div>
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
