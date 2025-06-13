
import Header from '@/components/Header';
import Services from '@/components/Services';
import Tutorials from '@/components/Tutorials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <Tutorials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
