
import { useState, useEffect } from 'react';
import { Menu, X, Headphones, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SupportButton from '@/components/ui/support-button';
import TypewriterText from '@/components/ui/typewriter-text';
import Hero from './Hero';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Suporte', href: '#tutorials' },
    { name: 'Contato', href: '#contact' }
  ];

  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div className="relative">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
                alt="Help Desk Inova" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Contact Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+5521991318034"
                className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">(21) 99131-8034</span>
              </a>
              <a
                href="mailto:suporte@helpdeskinova.com.br"
                className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">suporte@helpdeskinova.com.br</span>
              </a>
              <SupportButton onClick={handleContactClick}>
                Suporte
              </SupportButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
              <nav className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-3 border-t border-slate-200">
                  <a
                    href="tel:+5521991318034"
                    className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(21) 99131-8034</span>
                  </a>
                  <a
                    href="mailto:suporte@helpdeskinova.com.br"
                    className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-blue-600 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>suporte@helpdeskinova.com.br</span>
                  </a>
                  <div className="px-4">
                    <SupportButton onClick={handleContactClick}>
                      Solicitar Suporte
                    </SupportButton>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Suporte Técnico
                  <span className="block text-gradient mt-2">
                    <TypewriterText 
                      words={['Profissional', 'Especializado', 'Confiável', 'Inovador']}
                      speed={150}
                      deleteSpeed={100}
                      delayBetweenWords={2000}
                    />
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  Transformamos desafios tecnológicos em soluções eficientes. 
                  <span className="font-semibold text-slate-800"> Especialistas em TI </span>
                  prontos para impulsionar seu negócio.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 group"
                  onClick={handleContactClick}
                >
                  <Headphones className="mr-2 h-5 w-5" />
                  Solicitar Suporte Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-4 text-lg font-medium transition-all duration-200"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Conhecer Serviços
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Problemas Resolvidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">24h</div>
                  <div className="text-sm text-slate-600">Tempo de Resposta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">98%</div>
                  <div className="text-sm text-slate-600">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Right Content - Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl transform scale-110"></div>
                <img 
                  src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
                  alt="Help Desk Inova" 
                  className="relative h-64 w-auto lg:h-80 xl:h-96 animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
