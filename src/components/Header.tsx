
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import FixedLogo from '@/components/ui/fixed-logo';
import HeaderControls from '@/components/ui/header-controls';
import HeroContent from '@/components/ui/hero-content';
import OptimizedBackground from '@/components/ui/optimized-background';

const Header = () => {
  const navItems = [
    { name: 'Início', url: '#home', icon: Home },
    { name: 'Serviços', url: '#services', icon: Briefcase },
    { name: 'Artigos', url: '#tutorials', icon: FileText },
    { name: 'Contato', url: '#contact', icon: User }
  ];

  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <FixedLogo />
      <HeaderControls onSupportClick={handleSupportClick} />
      <NavBar items={navItems} />

      {/* Hero Section with Optimized Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <OptimizedBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/60 to-slate-100/80 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/80" />

        <HeroContent onSupportClick={handleSupportClick} />
      </section>
    </>
  );
};

export default Header;
