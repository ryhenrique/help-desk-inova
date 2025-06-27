
import { SymplaStyleNavbar } from '@/components/ui/sympla-style-navbar';
import HeroContent from '@/components/ui/hero-content';
import LocalVideoBackground from '@/components/ui/local-video-background';

const Header = () => {
  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <SymplaStyleNavbar onSupportClick={handleSupportClick} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Local Video Background */}
        <LocalVideoBackground 
          videoSrc="/lovable-uploads/hero-video.mp4" 
          className="z-0"
        />

        {/* Hero Content */}
        <div className="relative z-10">
          <HeroContent onSupportClick={handleSupportClick} />
        </div>
      </section>
    </>
  );
};

export default Header;
