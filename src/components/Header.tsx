
import { useState } from 'react';
import { Menu, X, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Headphones className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Help Desk Inova</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Serviços
            </a>
            <a href="#tutorials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tutoriais
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Precisa de Ajuda?
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#tutorials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutoriais
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
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
