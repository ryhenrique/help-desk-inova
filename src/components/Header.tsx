
import { useState } from 'react';
import { CustomNavbar } from '@/components/ui/custom-navbar';
import FixedLogo from '@/components/ui/fixed-logo';
import HeaderControls from '@/components/ui/header-controls';
import HeroContent from '@/components/ui/hero-content';
import OptimizedBackground from '@/components/ui/optimized-background';

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleNavbarVisibilityChange = (isVisible: boolean) => {
    setIsNavbarVisible(isVisible);
  };

  return (
    <>
      <FixedLogo isVisible={isNavbarVisible} />
      <HeaderControls onSupportClick={handleSupportClick} isVisible={isNavbarVisible} />
      <CustomNavbar onVisibilityChange={handleNavbarVisibilityChange} />

      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-0">
        <OptimizedBackground />

        {/* Clean Gradient Overlay - com background animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/70 to-slate-100/80 dark:from-slate-900/90 dark:via-slate-800/70 dark:to-slate-900/90" />

        <HeroContent onSupportClick={handleSupportClick} />
      </section>
    </>
  );
};

export default Header;
