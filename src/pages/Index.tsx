
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { PartnersLogos } from '@/components/ui/partners-logos';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PartnersLogos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
