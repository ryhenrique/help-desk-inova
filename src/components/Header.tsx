
import { useState } from 'react';
import { Menu, X, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-slate-700 p-2 rounded-md">
              <Headphones className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-800">Help Desk Inova</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Início
            </a>
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Serviços
            </a>
            <a href="#tutorials" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Tutoriais
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-slate-700 hover:bg-slate-800 text-white">
              Precisa de Ajuda?
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#tutorials"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutoriais
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button className="bg-slate-700 hover:bg-slate-800 text-white w-full">
                Precisa de Ajuda?
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
