
import { Headphones, Mail, MessageSquare, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-2 rounded-md">
                <Headphones className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-xl font-semibold">Help Desk Inova</span>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Central de suporte técnico especializada em soluções digitais profissionais. 
              Oferecemos assistência completa para resolver seus desafios tecnológicos.
            </p>
            <div className="flex space-x-6">
              <a 
                href="mailto:suporte@helpdeskìnova.com" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Enviar e-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a 
                href="tel:+5511999999999" 
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Serviços</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Suporte Técnico</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sistemas Operacionais</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Configuração de Rede</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Orientação Digital</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Segurança Digital</a></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Links Úteis</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#tutorials" className="hover:text-white transition-colors">Tutoriais</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Help Desk Inova. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
