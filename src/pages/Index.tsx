
import Header from '@/components/Header';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { PartnersLogos } from '@/components/ui/partners-logos';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PartnersLogos />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
