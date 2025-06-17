
import { useState } from 'react';
import { ModernNavbar } from '@/components/ui/modern-navbar';
import HeroContent from '@/components/ui/hero-content';
import OptimizedBackground from '@/components/ui/optimized-background';

const Header = () => {
  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <ModernNavbar onSupportClick={handleSupportClick} />

      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <OptimizedBackground />

        {/* Clean Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/70 to-slate-100/80 dark:from-slate-900/90 dark:via-slate-800/70 dark:to-slate-900/90" />

        <HeroContent onSupportClick={handleSupportClick} />
      </section>
    </>
  );
};

export default Header;
