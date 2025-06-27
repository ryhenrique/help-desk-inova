
import { SymplaStyleNavbar } from '@/components/ui/sympla-style-navbar';
import HeroContent from '@/components/ui/hero-content';
import YouTubeBackground from '@/components/ui/youtube-background';

const Header = () => {
  const handleSupportClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5521991318034&text&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <>
      <SymplaStyleNavbar onSupportClick={handleSupportClick} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* YouTube Video Background */}
        <YouTubeBackground 
          videoId="9HaU8NjH7bI" 
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
