
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import TypewriterText from '@/components/ui/typewriter-text';
import SupportButton from '@/components/ui/support-button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/components/ui/theme-provider';
import { motion } from 'framer-motion';

// Geometric Grid Paths
function GeometricPaths() {
  const gridSize = 40
  const paths = []
  
  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 12; y++) {
      if (Math.random() > 0.7) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
          delay: Math.random() * 5,
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.6, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Neural Network Paths
function NeuralPaths() {
  const nodes = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`
  }))

  const connections = []
  nodes.forEach((node, i) => {
    const nearbyNodes = nodes.filter((other, j) => {
      if (i === j) return false
      const distance = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
      return distance < 120 && Math.random() > 0.7
    })
    
    nearbyNodes.forEach(target => {
      connections.push({
        id: `conn-${i}-${target.id}`,
        d: `M${node.x},${node.y} L${target.x},${target.y}`,
        delay: Math.random() * 10
      })
    })
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 800 600">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8,
            delay: conn.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="1.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Organic Flow Paths
function FlowPaths() {
  const flowPaths = Array.from({ length: 8 }, (_, i) => {
    const amplitude = 30 + i * 8
    const offset = i * 40
    
    return {
      id: `flow-${i}`,
      d: `M-100,${150 + offset} Q200,${150 + offset - amplitude} 500,${150 + offset} T900,${150 + offset}`,
      strokeWidth: 1 + i * 0.2,
      opacity: 0.08 + i * 0.03,
      delay: i * 0.6
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 600">
      {flowPaths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0.8, 0],
            opacity: [0, path.opacity, path.opacity * 0.7, 0]
          }}
          transition={{
            duration: 12,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPattern, setCurrentPattern] = useState(0);
  const { theme } = useTheme();

  const phrases = [
    "Suporte Técnico Especializado",
    "Soluções Profissionais em TI", 
    "Atendimento Personalizado 24/7",
    "Resultados Garantidos",
    "Sua Tecnologia em Boas Mãos"
  ];

  const patterns = ['neural', 'flow', 'geometric'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const renderPattern = () => {
    switch (currentPattern) {
      case 0: return <NeuralPaths />
      case 1: return <FlowPaths />
      case 2: return <GeometricPaths />
      default: return <NeuralPaths />
    }
  }

  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  // Determina se deve usar logo branca baseado no tema
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const logoSrc = "/lovable-uploads/4c067a97-598f-4049-8a54-72735b77f986.png";

  return (
    <>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl backdrop-brightness-125 border-b border-slate-200/60 dark:border-slate-600/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logoSrc}
                alt="Help Desk Inova" 
                className={`h-8 w-auto ${isDarkMode ? 'brightness-0 invert' : ''}`}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Início
              </a>
              <a href="#services" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Serviços
              </a>
              <a href="#tutorials" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Artigos
              </a>
              <a href="#contact" className="text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                Contato
              </a>
            </nav>

            {/* Right side - Theme Toggle and CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
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
              <SheetContent side="right" className="w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                <div className="flex flex-col space-y-6 pt-6">
                  <a
                    href="#home"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Início
                  </a>
                  <a
                    href="#services"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Serviços
                  </a>
                  <a
                    href="#tutorials"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Artigos
                  </a>
                  <a
                    href="#contact"
                    className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Contato
                  </a>
                  <div className="flex items-center justify-between pt-4">
                    <ThemeToggle />
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

      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 text-slate-400/30 dark:text-slate-500/30">
          <motion.div
            key={currentPattern}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {renderPattern()}
          </motion.div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/60 to-slate-100/80 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/80" />

        {/* Pattern Indicator */}
        <div className="absolute top-20 right-8 flex gap-2 z-20">
          {patterns.map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === currentPattern 
                  ? 'bg-blue-500 dark:bg-blue-400' 
                  : 'bg-slate-300 dark:bg-slate-600'
              }`}
              animate={{ 
                scale: i === currentPattern ? 1.2 : 1,
                opacity: i === currentPattern ? 1 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="space-y-8">
              <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl">
                <CardContent className="p-8">
                  {/* Main Heading with Typewriter - Fixed Height Container */}
                  <div className="space-y-4">
                    <div className="min-h-[200px] md:min-h-[240px] lg:min-h-[280px] flex items-center">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-600 dark:text-blue-400">
                        <TypewriterText 
                          words={phrases}
                          speed={80}
                          deleteSpeed={40}
                          delayBetweenWords={2500}
                        />
                      </h1>
                    </div>
                    
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                      Transformamos desafios tecnológicos em soluções eficientes. 
                      Nossa equipe especializada oferece suporte completo para sua empresa.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SupportButton onClick={handleSupportClick}>
                      Fale Conosco
                    </SupportButton>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 font-medium rounded-lg transition-all duration-200"
                    >
                      Explorar Serviços
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Logo and Visual Elements */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                {/* Main Logo Card */}
                <Card className="relative z-10 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-600/60 shadow-xl">
                  <CardContent className="p-8">
                    <img 
                      src={logoSrc}
                      alt="Help Desk Inova" 
                      className={`h-24 md:h-32 w-auto mx-auto ${isDarkMode ? 'brightness-0 invert' : ''}`}
                    />
                  </CardContent>
                </Card>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-100 dark:bg-blue-900/60 rounded-lg opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-full opacity-40"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-200 dark:bg-blue-800/60 rounded-md opacity-50"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 4, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div 
                  className="absolute -top-2 left-1/3 w-4 h-4 bg-indigo-100 dark:bg-indigo-900/60 rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </section>
    </>
  );
};

export default Header;
