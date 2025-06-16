
'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const partnersData = [
  {
    id: 'casa-do-biscoito',
    name: 'Casa do Biscoito',
    image: '/lovable-uploads/dddd64f6-09e8-4b1f-9442-b082cc73bb94.png',
    className: 'h-16 w-auto',
  },
  {
    id: 'uniao-dos-cegos',
    name: 'União dos Cegos no Brasil',
    image: '/lovable-uploads/b9e78abe-4857-4d89-9ea0-f425732f7134.png',
    className: 'h-12 w-auto',
  },
  // Duplicar as logos para criar um efeito de loop contínuo
  {
    id: 'casa-do-biscoito-2',
    name: 'Casa do Biscoito',
    image: '/lovable-uploads/dddd64f6-09e8-4b1f-9442-b082cc73bb94.png',
    className: 'h-16 w-auto',
  },
  {
    id: 'uniao-dos-cegos-2',
    name: 'União dos Cegos no Brasil',
    image: '/lovable-uploads/b9e78abe-4857-4d89-9ea0-f425732f7134.png',
    className: 'h-12 w-auto',
  },
];

export function PartnersLogos() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Trabalhamos com empresas que confiam em nossa expertise tecnológica
          </p>
        </div>

        <div className="relative mx-auto flex items-center justify-center max-w-4xl">
          <Carousel
            opts={{ 
              loop: true,
              align: 'start',
              skipSnaps: false,
              dragFree: true
            }}
            plugins={[
              AutoScroll({ 
                playOnInit: true,
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false
              })
            ]}
            className="w-full"
          >
            <CarouselContent className="ml-0 -pl-1">
              {partnersData.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="flex basis-1/2 justify-center pl-1 sm:basis-1/3 md:basis-1/4"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className={`${partner.className} filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100`}
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Gradient fade nas bordas */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
