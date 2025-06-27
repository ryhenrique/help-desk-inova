
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PartnersCard } from '@/components/ui/partners-card';
import ServicesGrid from '@/components/ui/services-grid';
import CompanyDifferentials from '@/components/ui/company-differentials';

const Index = () => {
  const partnersData = [
    {
      id: 'casa-do-biscoito',
      name: 'Casa do Biscoito',
      image: '/lovable-uploads/dddd64f6-09e8-4b1f-9442-b082cc73bb94.png',
      className: 'h-8 w-auto',
    },
    {
      id: 'uniao-dos-cegos',
      name: 'União dos Cegos no Brasil',
      image: '/lovable-uploads/b9e78abe-4857-4d89-9ea0-f425732f7134.png',
      className: 'h-6 w-auto',
    },
    {
      id: 'vitral-original',
      name: 'Vitral Original',
      image: '/lovable-uploads/2ecb2d16-57e0-41c6-b0f2-deaba1f13fba.png',
      className: 'h-7 w-auto',
    },
    {
      id: 'nova-empresa',
      name: 'Nova Empresa',
      image: '/lovable-uploads/0bed8bec-f2e3-4a0b-af57-bb160c31a2a4.png',
      className: 'h-8 w-auto',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PartnersCard partners={partnersData} />
      <ServicesGrid />
      <CompanyDifferentials />
      <Footer />
    </div>
  );
};

export default Index;
