
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PartnersLogos } from '@/components/ui/partners-logos';
import ServicesGrid from '@/components/ui/services-grid';
import CompanyDifferentials from '@/components/ui/company-differentials';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PartnersLogos />
      <ServicesGrid />
      <CompanyDifferentials />
      <Footer />
    </div>
  );
};

export default Index;
