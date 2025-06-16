
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import TypewriterText from '@/components/ui/typewriter-text';
import AnimatedBackground from '@/components/ui/animated-background';
import SupportButton from '@/components/ui/support-button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phrases = [
    "Suporte Técnico Especializado",
    "Soluções Profissionais em TI", 
    "Atendimento Personalizado 24/7",
    "Resultados Garantidos",
    "Sua Tecnologia em Boas Mãos"
  ];

  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <AnimatedBackground />
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
                alt="Help Desk Inova" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Início
              </a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Serviços
              </a>
              <a href="#tutorials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Tutoriais
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <SupportButton onClick={handleSupportClick}>
                Suporte
              </SupportButton>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col space-y-6 pt-6">
                  <a
                    href="#home"
                    className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Início
                  </a>
                  <a
                    href="#services"
                    className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Serviços
                  </a>
                  <a
                    href="#tutorials"
                    className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Tutoriais
                  </a>
                  <a
                    href="#contact"
                    className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Contato
                  </a>
                  <div className="pt-4">
                    <SupportButton onClick={handleSupportClick}>
                      Suporte
                    </SupportButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png" 
                alt="Help Desk Inova" 
                className="h-24 md:h-32 w-auto mx-auto drop-shadow-lg"
              />
            </div>

            {/* Typewriter Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-slate-900">
              <TypewriterText 
                words={phrases}
                speed={80}
                deleteSpeed={40}
                delayBetweenWords={2500}
              />
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transformamos desafios tecnológicos em 
              <span className="font-semibold text-blue-600"> soluções eficientes </span>
              para o seu negócio
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SupportButton onClick={handleSupportClick}>
                Fale Conosco
              </SupportButton>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200"
              >
                Explorar Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
