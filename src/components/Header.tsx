
import { ModernNavbar } from '@/components/ui/modern-navbar';
import HeroContent from '@/components/ui/hero-content';
import OptimizedBackground from '@/components/ui/optimized-background';
import ServicesShowcase from '@/components/ui/services-showcase';

const Header = () => {
  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <ModernNavbar onSupportClick={handleSupportClick} />

      <section id="helpdesk-home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white dark:bg-slate-900">
        <div className="absolute inset-0 dark:hidden">
          <OptimizedBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/70 to-slate-100/80" />
        </div>

        <HeroContent onSupportClick={handleSupportClick} />
      </section>

      <ServicesShowcase />
    </>
  );
};

export default Header;
