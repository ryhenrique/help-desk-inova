
import { Mail, MessageSquare, Phone, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
                alt="Help Desk Inova" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
              A HELP DESK INOVA é especialista em soluções tecnológicas para empresas, 
              oferecendo suporte HelpDesk, gerenciamento de redes, e segurança cibernética. 
              Com uma equipe qualificada e valores justos, garantimos eficiência e inovação 
              para o crescimento seguro do seu negócio.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="mailto:suporte@helpdeskinova.com.br" 
                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Enviar e-mail"
              >
                <Mail className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0" 
                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/helpdeskinova/" 
                className="group flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 hover:bg-violet-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Serviços Especializados</h3>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a href="#services" className="group flex items-center hover:text-blue-400 transition-colors text-base">
                  <span>Suporte HelpDesk</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="group flex items-center hover:text-blue-400 transition-colors text-base">
                  <span>Câmeras de Segurança</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="group flex items-center hover:text-blue-400 transition-colors text-base">
                  <span>Sistema Failover</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="group flex items-center hover:text-blue-400 transition-colors text-base">
                  <span>Redes de Computadores</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="group flex items-center hover:text-blue-400 transition-colors text-base">
                  <span>Segurança Cibernética</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Acesso Rápido</h3>
            <ul className="space-y-4 text-slate-300">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors text-base">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors text-base">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#tutorials" className="hover:text-blue-400 transition-colors text-base">
                  Artigos e Soluções
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors text-base">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors text-base">
                  Portal do Cliente
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-16 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Phone className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Suporte Especializado</p>
                <p className="text-slate-400">+55 (21) 99131-8034</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                <Mail className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <p className="font-semibold text-white">E-mail Corporativo</p>
                <p className="text-slate-400">suporte@helpdeskinova.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-center md:text-left">
              © 2024 Help Desk Inova. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
